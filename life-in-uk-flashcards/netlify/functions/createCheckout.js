const stripe = require('stripe')(process.env.STRIPE_SECRET);

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    };

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
        const origin = event.headers.origin || event.headers.referer || 'http://localhost:8888';

        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            // Collect the buyer's email so we can use it for cross-device restore
            billing_address_collection: 'auto',
            customer_creation: 'always',
            // Pass {CHECKOUT_SESSION_ID} — Stripe fills it in after payment
            success_url: `${origin}/?premium=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/`,
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


// exports.handler = async (event) => {
//     try {
//         // Get the origin of the request (your site URL)
//         const origin = event.headers.origin || event.headers.referer || process.env.URL;

//         const session = await stripe.checkout.sessions.create({
//             mode: 'payment',
//             success_url: `${origin}/?premium=true`,
//             cancel_url: `${origin}/mock-exams`,
//             line_items: [
//                 {
//                     price_data: {
//                         currency: 'gbp',
//                         product_data: {
//                             name: 'Life in the UK Premium Plan',
//                             description: '5‑day guaranteed pass path, advanced analytics, and all mock exams.',
//                         },
//                         unit_amount: 799, // £7.99 in pence
//                     },
//                     quantity: 1,
//                 },
//             ],
//         });

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ id: session.id, url: session.url }),
//         };
//     } catch (error) {
//         console.error('Stripe checkout error:', error);
//         return {
//             statusCode: 500,
//             body: JSON.stringify({ error: error.message }),
//         };
//     }
// };

