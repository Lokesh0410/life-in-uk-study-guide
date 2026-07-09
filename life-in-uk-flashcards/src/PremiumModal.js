import React, { useState } from 'react';

const PremiumModal = ({ isOpen, onClose, redeemCode, setRedeemCode, redeemError, onRedeem, onSubscribe, onRestoreAccess }) => {
    const [restoreEmail, setRestoreEmail] = useState('');
    const [restoreStatus, setRestoreStatus] = useState(''); // '', 'loading', 'success', 'error'
    const [restoreMessage, setRestoreMessage] = useState('');

    if (!isOpen) return null;

    const handleRestore = async () => {
        if (!restoreEmail.trim() || !restoreEmail.includes('@')) {
            setRestoreMessage('Please enter a valid email address.');
            setRestoreStatus('error');
            return;
        }
        setRestoreStatus('loading');
        setRestoreMessage('');
        try {
            const res = await fetch('/.netlify/functions/verifyPremium', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: restoreEmail.trim() }),
            });
            const data = await res.json();
            if (data.isPremium) {
                setRestoreStatus('success');
                setRestoreMessage('✅ Purchase verified! Restoring your access...');
                setTimeout(() => {
                    onRestoreAccess();
                }, 1200);
            } else {
                setRestoreStatus('error');
                setRestoreMessage(data.message || 'No purchase found for this email. Please check and try again.');
            }
        } catch (err) {
            console.error('Verify Premium restore network error:', err);
            setRestoreStatus('error');
            setRestoreMessage(`Error: ${err.message || 'Could not connect. Please check your internet and try again.'}`);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl animate-fade-in max-h-[90vh] overflow-y-auto">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">✨ Unlock Premium</h3>
                <p className="text-gray-600 mb-4">Get your personalised 5‑day exam guarantee and advanced insights.</p>
                <ul className="space-y-2 mb-6 text-sm text-gray-700">
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>5‑day guaranteed pass path</strong> – daily study plan tailored to your weak areas</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>All 45 mock exams</strong> (unlimited access)</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Detailed performance analytics</strong> – topic‑wise breakdown</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>100% Pass Guarantee</strong> – Pass your exam, or get a 100% refund (qualify by passing all 45 mock tests)</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span><strong>Priority support & offline PDF guides</strong></span>
                    </li>
                </ul>
                <button
                    onClick={onSubscribe}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
                >
                    Subscribe Now – £7.99
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">
                    🔒 Secure payment via Stripe
                </p>

                {/* Redeem a code */}
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500 font-medium">Have a code?</span></div>
                </div>
                <input
                    type="text"
                    placeholder="Enter your premium code"
                    value={redeemCode}
                    onChange={(e) => setRedeemCode(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onRedeem()}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                {redeemError && <p className="text-red-500 text-xs mb-2 font-medium">{redeemError}</p>}
                <button onClick={onRedeem} className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition font-semibold text-sm border border-gray-200">Redeem Code</button>

                {/* Restore access on new device */}
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500 font-medium">Already purchased?</span></div>
                </div>
                <p className="text-xs text-gray-500 mb-2 text-center">Restore your access on this device using your purchase email.</p>
                <input
                    type="email"
                    placeholder="Enter email used at checkout"
                    value={restoreEmail}
                    onChange={(e) => { setRestoreEmail(e.target.value); setRestoreStatus(''); setRestoreMessage(''); }}
                    onKeyDown={(e) => e.key === 'Enter' && handleRestore()}
                    className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                {restoreMessage && (
                    <p className={`text-xs mb-2 font-medium ${restoreStatus === 'error' ? 'text-red-500' : 'text-green-600'}`}>{restoreMessage}</p>
                )}
                <button
                    onClick={handleRestore}
                    disabled={restoreStatus === 'loading'}
                    className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition font-semibold text-sm border border-gray-200 disabled:opacity-60"
                >
                    {restoreStatus === 'loading' ? 'Checking...' : 'Restore My Access'}
                </button>

                <button onClick={onClose} className="w-full mt-4 text-gray-400 text-sm hover:text-gray-600 transition">Maybe later</button>
            </div>
        </div>
    );
};

export default PremiumModal;