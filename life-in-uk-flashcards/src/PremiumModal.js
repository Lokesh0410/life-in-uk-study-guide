import { useState } from 'react';

export default function PremiumModal({ onClose }) {
    const [loading, setLoading] = useState(false);

    const handleSubscribe = () => {
        setLoading(true);
        // Redirect to your payment provider (Stripe / PayPal / Gumroad)
        window.location.href = "https://buy.stripe.com/your-link"; // Replace with your actual checkout link
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">✨ Unlock Premium</h3>
                <p className="text-gray-600 mb-4">Get your personalised 7‑day exam guarantee and advanced insights.</p>
                <ul className="space-y-2 mb-6 text-sm">
                    <li>✓ <strong>7‑day guaranteed pass path</strong> – daily study plan tailored to your weak areas</li>
                    <li>✓ <strong>All 45 mock exams</strong> (unlimited access)</li>
                    <li>✓ <strong>Detailed performance analytics</strong> – topic‑wise breakdown</li>
                    <li>✓ <strong>Priority support & offline PDF guides</strong></li>
                </ul>
                <button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition disabled:opacity-50"
                >
                    {loading ? "Redirecting..." : "Subscribe Now – £7.99"}
                </button>
                <button onClick={onClose} className="w-full mt-3 text-gray-400 text-sm">Maybe later</button>
            </div>
        </div>
    );
}