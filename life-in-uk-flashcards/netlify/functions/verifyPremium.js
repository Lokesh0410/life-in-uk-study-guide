// netlify/functions/verifyPremium.js
// Checks whether an email address has a completed Stripe payment for the premium product.
// Called by the frontend when a user wants to restore premium on a new device.

const stripe = require('stripe')(process.env.STRIPE_SECRET);

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: CORS_HEADERS, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ error: 'Method not allowed' }) };
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
