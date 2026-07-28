// netlify/functions/validateRedeemCode.js
// Server-side validation of premium redeem codes.
// Keeps the code out of the client-side JavaScript bundle.

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

// Store valid codes in an environment variable (comma-separated) for easy rotation.
// Example: REDEEM_CODES=premium2026,earlybird2026,partner123
function getValidCodes() {
    const raw = process.env.REDEEM_CODES || '';
    return raw.split(',').map(c => c.trim().toLowerCase()).filter(Boolean);
}

// Simple in-memory rate limiter (per warm instance)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 attempts per minute per IP

function isRateLimited(ip) {
    const now = Date.now();
    const record = rateLimitMap.get(ip);
    if (!record) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }
    if (now > record.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }
    record.count += 1;
    return record.count > RATE_LIMIT_MAX_REQUESTS;
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

    const clientIp =
        event.headers['client-ip'] ||
        event.headers['x-forwarded-for'] ||
        event.headers['x-nf-client-connection-ip'] ||
        'unknown';

    if (isRateLimited(clientIp)) {
        return {
            statusCode: 429,
            headers: { ...headers, 'Retry-After': '60' },
            body: JSON.stringify({ error: 'Too many attempts. Please wait a minute.' }),
        };
    }

    let code;
    try {
        ({ code } = JSON.parse(event.body || '{}'));
    } catch {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid request body' }) };
    }

    if (!code || typeof code !== 'string') {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'A code is required.' }) };
    }

    const validCodes = getValidCodes();
    const isValid = validCodes.includes(code.trim().toLowerCase());

    if (isValid) {
        console.log(`Redeem code used successfully from IP: ${clientIp}`);
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ valid: true }),
        };
    }

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ valid: false }),
    };
};
