import { useState, useEffect } from 'react';
import { safeGetItem, safeSetItem } from './safeStorage';

const THEME_KEY = 'lifeInUkTheme';

function getInitialTheme() {
    const stored = safeGetItem(THEME_KEY, null);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useDarkMode() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        safeSetItem(THEME_KEY, theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return { theme, toggleTheme, isDark: theme === 'dark' };
}
