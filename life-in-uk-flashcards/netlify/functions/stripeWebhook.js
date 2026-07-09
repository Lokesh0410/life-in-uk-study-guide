const stripe = require('stripe')(process.env.STRIPE_SECRET);

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, stripe-signature',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
    }

    const sig = event.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let stripeEvent;

    try {
        if (endpointSecret) {
            stripeEvent = stripe.webhooks.constructEvent(event.body, sig, endpointSecret);
        } else {
            stripeEvent = JSON.parse(event.body);
        }
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
