// netlify/functions/verifySession.js
// Verifies a Stripe checkout.session.id and confirms payment succeeded.
// Called by the frontend after Stripe redirects back with ?session_id=...
// This prevents the ?premium=true bypass by requiring server-side confirmation.

const stripe = require('stripe')(process.env.STRIPE_SECRET);

const ALLOWED_ORIGINS = [
    'https://lifeinukcoach.co.uk',
    'https://www.lifeinukcoach.co.uk',
    'http://localhost:3000',
    'http://localhost:8888',
];

function getCorsHeaders(origin) {
    const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    return {
        'Access-Control-Allow-Origin': allowed,
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Vary': 'Origin',
    };
}

exports.handler = async (event) => {
    const origin = event.headers.origin || '';
    const headers = getCorsHeaders(origin);

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    if (!process.env.STRIPE_SECRET) {
        console.error('STRIPE_SECRET is missing');
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server configuration error' }) };
    }

    let sessionId;
    try {
        ({ sessionId } = JSON.parse(event.body || '{}'));
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request body' }) };
    }

    if (!sessionId || typeof sessionId !== 'string' || !sessionId.startsWith('cs_')) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'A valid session ID is required.' }) };
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status === 'paid') {
            console.log(`Session ${sessionId} verified: payment confirmed.`);
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ isPremium: true, email: session.customer_details?.email || null }),
            };
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ isPremium: false, message: 'Payment not completed.' }),
        };
    } catch (error) {
        console.error('verifySession error:', error.message);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Could not verify payment. Please contact support.' }),
        };
    }
};
