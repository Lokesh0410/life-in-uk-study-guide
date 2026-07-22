// netlify/functions/verifyPremium.js
// Checks whether an email address has a completed Stripe payment for the premium product.
// Called by the frontend when a user wants to restore premium on a new device.
// Includes basic IP-based rate limiting to prevent abuse.

const stripe = require('stripe')(process.env.STRIPE_SECRET);

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Simple in-memory rate limiter
// Netlify functions are stateless, but within a single warm instance this provides basic protection.
// For production at scale, use a distributed store like Redis or Netlify Blobs.
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // max 10 requests per minute per IP

function isRateLimited(ip) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    if (now > record.resetAt) {
        // Window expired, reset
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    record.count += 1;
    if (record.count > RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    return false;
}

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: CORS_HEADERS, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    // Rate limiting by IP
    const clientIp = event.headers['client-ip'] || event.headers['x-forwarded-for'] || event.headers['x-nf-client-connection-ip'] || 'unknown';
    if (isRateLimited(clientIp)) {
        console.warn(`Rate limit exceeded for IP: ${clientIp}`);
        return {
            statusCode: 429,
            headers: { ...CORS_HEADERS, 'Retry-After': '60' },
            body: JSON.stringify({ error: 'Too many requests. Please try again in a minute.' }),
        };
    }

    let email;
    try {
        ({ email } = JSON.parse(event.body || '{}'));
    } catch {
        return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Invalid request body' }) };
    }

    if (!email || !email.includes('@')) {
        return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ error: 'A valid email address is required.' }) };
    }

    if (!process.env.STRIPE_SECRET) {
        return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Server configuration error' }) };
    }

    try {
        // Search for Stripe customers with this email
        const customers = await stripe.customers.list({ email: email.trim().toLowerCase(), limit: 5 });

        if (!customers.data.length) {
            return {
                statusCode: 200,
                headers: CORS_HEADERS,
                body: JSON.stringify({ isPremium: false, message: 'No purchase found for this email address.' }),
            };
        }

        // Check if any customer has a successful payment
        for (const customer of customers.data) {
            const paymentIntents = await stripe.paymentIntents.list({
                customer: customer.id,
                limit: 10,
            });

            const hasPaid = paymentIntents.data.some(pi => pi.status === 'succeeded');

            if (hasPaid) {
                return {
                    statusCode: 200,
                    headers: CORS_HEADERS,
                    body: JSON.stringify({ isPremium: true }),
                };
            }
        }

        return {
            statusCode: 200,
            headers: CORS_HEADERS,
            body: JSON.stringify({ isPremium: false, message: 'No completed purchase found for this email.' }),
        };
    } catch (error) {
        console.error('verifyPremium error:', error);
        return {
            statusCode: 500,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: 'Something went wrong. Please try again.' }),
        };
    }
};
