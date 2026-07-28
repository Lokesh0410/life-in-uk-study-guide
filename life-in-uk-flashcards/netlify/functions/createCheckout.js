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
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Vary': 'Origin',
    };
}

exports.handler = async (event) => {
    const origin = event.headers.origin || '';
    const headers = getCorsHeaders(origin);

    if (!process.env.STRIPE_SECRET) {
        console.error('STRIPE_SECRET is missing!');
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Stripe key not configured' }),
        };
    }

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const requestOrigin = event.headers.origin || event.headers.referer || 'https://lifeinukcoach.co.uk';

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            // Collect the buyer's email so we can use it for cross-device restore
            billing_address_collection: 'auto',
            customer_creation: 'always',
            // Pass {CHECKOUT_SESSION_ID} — Stripe fills it in after payment
            success_url: `${requestOrigin}/?premium=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${requestOrigin}/`,
            line_items: [
                {
                    price_data: {
                        currency: 'gbp',
                        product_data: {
                            name: 'Life in the UK Premium Plan',
                            description: '5-day guaranteed pass path, advanced analytics, and all 45 mock exams.',
                        },
                        unit_amount: 799,
                    },
                    quantity: 1,
                },
            ],
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ id: session.id, url: session.url }),
        };
    } catch (error) {
        console.error('Stripe checkout error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
