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
        'Access-Control-Allow-Headers': 'Content-Type, stripe-signature',
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

    const sig = event.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    // Security: require webhook secret — never skip signature verification
    if (!endpointSecret) {
        console.error('STRIPE_WEBHOOK_SECRET is not configured. Refusing unverified webhook.');
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Webhook secret not configured on server.' }),
        };
    }

    let stripeEvent;

    try {
        stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return { statusCode: 400, headers, body: `Webhook Error: ${err.message}` };
    }

    // Handle checkout.session.completed
    if (stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;
        console.log(`Payment successful for checkout session: ${session.id}`);
        // Here we would typically persist user's email/purchase status in a database.
        // Since we are serverless + client-side localStorage, verifyPremium already dynamically queries the active customers.
        // Therefore, stripeWebhook just logs/confirms the webhook works and could trigger email notifications or direct status updates.
    }

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ received: true }),
    };
};
