// src/safeStorage.js
// Safe localStorage wrapper that handles errors (storage full, corrupted data, private browsing, etc.)

export function safeGetItem(key, defaultValue = null) {
    try {
        const value = localStorage.getItem(key);
        if (value === null) return defaultValue;
        // Try to parse JSON, return raw string if not JSON
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    } catch (e) {
        console.warn(`localStorage.getItem('${key}') failed:`, e.message);
        return defaultValue;
    }
}

export function safeSetItem(key, value) {
    try {
        const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, stringValue);
        return true;
    } catch (e) {
        console.warn(`localStorage.setItem('${key}') failed:`, e.message);
        return false;
    }
}

export function safeRemoveItem(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.warn(`localStorage.removeItem('${key}') failed:`, e.message);
        return false;
    }
}
