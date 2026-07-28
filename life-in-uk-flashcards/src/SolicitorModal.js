import React, { useState } from 'react';

export default function SolicitorModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('https://formspree.io/f/xqapwqbv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setSubmitted(true);
            } else {
                setError('Something went wrong. Please try again or email us directly.');
            }
        } catch {
            setError('Network error. Please try again or email us directly.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800">Find an Immigration Solicitor</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
                </div>
                {submitted ? (
                    <div className="text-center py-6">
                        <div className="text-4xl mb-3">✅</div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">Thank You!</h4>
                        <p className="text-sm text-slate-600">We've received your details. A trusted immigration solicitor will reach out to you shortly.</p>
                        <button onClick={onClose} className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-xl font-bold hover:bg-indigo-700 transition">Close</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                            <input type="text" name="name" required value={formData.name} onChange={handleChange}
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Your Immigration Query</label>
                            <textarea name="message" rows="3" value={formData.message} onChange={handleChange}
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                placeholder="e.g. I need help with my ILR application..." />
                        </div>
                        {error && <p className="text-red-600 text-xs">{error}</p>}
                        <button type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition shadow-md">
                            Submit & Connect with a Solicitor
                        </button>
                        <p className="text-[10px] text-slate-400 text-center">Your details will be shared with a trusted immigration solicitor. We respect your privacy.</p>
                    </form>
                )}
            </div>
        </div>
    );
}
