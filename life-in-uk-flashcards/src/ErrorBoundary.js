// src/ErrorBoundary.js
// Catches React component errors and shows a friendly fallback UI instead of a white screen

import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-xl text-center">
                        <div className="text-6xl mb-4">😅</div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Something went wrong</h2>
                        <p className="text-slate-500 mb-6">
                            Don't worry, it's not you — it's us. Please try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
                        >
                            🔄 Refresh Page
                        </button>
                        <p className="text-xs text-slate-400 mt-4">
                            If this keeps happening, email us at{' '}
                            <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-500 underline">
                                help@lifeinukcoach.co.uk
                            </a>
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
