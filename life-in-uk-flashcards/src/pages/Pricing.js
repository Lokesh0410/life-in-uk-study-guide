import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = ({ onUnlockPremium, isPremium }) => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                    Unlock Your Full Potential
                </h2>
                <p className="text-xl text-slate-600 mb-12">
                    Choose the plan that's right for your Life in the UK test preparation.
                </p>

                {isPremium && (
                    <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 max-w-lg mx-auto">
                        <div className="text-4xl mb-2">🎉</div>
                        <h3 className="text-xl font-bold text-green-800 mb-1">You're a Premium Member!</h3>
                        <p className="text-green-700 text-sm">
                            You have full access to all 45 mock exams, performance dashboard, and the offline cheat sheet.
                        </p>
                        <Link
                            to="/mock-exams"
                            className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2.5 rounded-xl transition shadow-sm"
                        >
                            Go to Mock Exams 🚀
                        </Link>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Free Tier */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Free Tier</h3>
                        <p className="text-slate-500 mb-6">Basic access to get started.</p>
                        <div className="text-5xl font-extrabold text-indigo-600 mb-6">
                            £0<span className="text-xl font-medium text-slate-500">/one-time</span>
                        </div>
                        <ul className="text-left text-slate-700 space-y-3 flex-grow mb-8">
                            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Access to all Study Flashcards</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> 3 Free Mock Exam</li>
                            <li className="flex items-center"><span className="text-red-500 mr-2">✖</span> No Performance Dashboard</li>
                            <li className="flex items-center"><span className="text-red-500 mr-2">✖</span> No Downloadable Cheat Sheet</li>
                            <li className="flex items-center"><span className="text-red-500 mr-2">✖</span> No 5-Day Guaranteed Pass Path</li>
                        </ul>
                        <Link
                            to="/"
                            className="block w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-bold transition hover:bg-slate-200 shadow-sm"
                        >
                            Start Free Studying
                        </Link>
                    </div>

                    {/* Premium Tier */}
                    <div className={`rounded-2xl shadow-xl p-8 flex flex-col border-2 ${isPremium ? 'bg-green-700 text-white border-green-400 transform scale-105' : 'bg-indigo-700 text-white border-indigo-400 transform scale-105'}`}>
                        <h3 className="text-2xl font-bold mb-4">Premium Tier</h3>
                        <p className="text-indigo-200 mb-6">Unlock everything you need to pass first time.</p>
                        <div className="text-5xl font-extrabold mb-6">
                            £7.99<span className="text-xl font-medium text-indigo-200">/one-time</span>
                        </div>
                        <ul className="text-left space-y-3 flex-grow mb-8">
                            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span> Access to all Study Flashcards</li>
                            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span> All 45 Realistic Mock Exams</li>
                            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span> Performance Dashboard & Analytics</li>
                            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span> Downloadable Offline Cheat Sheet</li>
                            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span> 5-Day Guaranteed Pass Path</li>
                        </ul>
                        {isPremium ? (
                            <div className="w-full bg-green-500 text-white py-3 rounded-xl font-bold text-center shadow-lg cursor-default">
                                ✅ Already Unlocked
                            </div>
                        ) : (
                            <button
                                onClick={onUnlockPremium}
                                className="w-full bg-yellow-400 text-indigo-900 py-3 rounded-xl font-bold transition hover:bg-yellow-300 shadow-lg"
                            >
                                Get Premium Access Now
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-12 text-slate-500 text-sm">
                    <p>No recurring fees. Secure payment processing by Stripe.</p>
                    <p className="mt-2">Questions? <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 underline hover:text-indigo-800">Contact Support</a></p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
