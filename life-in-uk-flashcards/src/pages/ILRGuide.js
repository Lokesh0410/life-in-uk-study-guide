import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SolicitorModal = ({ isOpen, onClose }) => {
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
};

const FAQItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-4 py-3 flex justify-between items-center bg-white hover:bg-slate-50 transition font-medium text-slate-800"
            >
                <span>{question}</span>
                <span className={`text-indigo-500 transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {open && (
                <div className="px-4 py-3 bg-slate-50 text-sm text-slate-600 border-t border-slate-200">
                    {answer}
                </div>
            )}
        </div>
    );
};

const ILRGuide = () => {
    const [showSolicitorForm, setShowSolicitorForm] = useState(false);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I travel after getting ILR?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can travel freely. However, ILR can normally lapse if you remain outside the UK continuously for more than two years." }
            },
            {
                "@type": "Question",
                "name": "How long does ILR take?",
                "acceptedAnswer": { "@type": "Answer", "text": "Processing times vary depending on the application type and demand. Current estimated processing times are published on GOV.UK." }
            },
            {
                "@type": "Question",
                "name": "What happens if my ILR is refused?",
                "acceptedAnswer": { "@type": "Answer", "text": "You may be able to apply for an administrative review or make a fresh application depending on your circumstances." }
            },
            {
                "@type": "Question",
                "name": "Can I apply early for ILR?",
                "acceptedAnswer": { "@type": "Answer", "text": "You can apply up to 28 days before you reach the qualifying period. Applying earlier may result in refusal." }
            },
            {
                "@type": "Question",
                "name": "Do I need Life in the UK test for citizenship?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, you must pass the Life in the UK Test as part of your British citizenship application, unless you are exempt." }
            },
            {
                "@type": "Question",
                "name": "Can I include family members in my ILR application?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, dependants can usually apply at the same time as the main applicant if they meet the eligibility requirements." }
            },
            {
                "@type": "Question",
                "name": "What documents do I need for ILR?",
                "acceptedAnswer": { "@type": "Answer", "text": "Required documents typically include your passport, proof of continuous residence, Life in the UK Test pass certificate, English language evidence, and financial documents." }
            },
            {
                "@type": "Question",
                "name": "What English test do I need for ILR?",
                "acceptedAnswer": { "@type": "Answer", "text": "You need an approved SELT (Secure English Language Test) at CEFR B1 level, a qualifying degree taught in English, or you may be exempt by nationality or age/medical condition." }
            },
            {
                "@type": "Question",
                "name": "Does time on a Student Visa count towards ILR?",
                "acceptedAnswer": { "@type": "Answer", "text": "Time on a Student Visa generally does not count towards the 5-year qualifying period for ILR, but may count towards the 10-year Long Residence route." }
            }
        ]
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-8">
            <SolicitorModal isOpen={showSolicitorForm} onClose={() => setShowSolicitorForm(false)} />

            {/* FAQ Schema injected as JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">🇬🇧 Indefinite Leave to Remain (ILR) & British Citizenship Guide</h1>
            <p className="text-slate-700 mb-6">
                Navigating the path to Indefinite Leave to Remain (ILR) and British Citizenship can be complex.
                This guide consolidates information from official sources to help you understand the general process and requirements.
                <strong> This website is not affiliated with the UK Home Office. Always verify information on <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GOV.UK</a>.</strong>
            </p>

            {/* ===== SECTION 1: ILR INTRODUCTION ===== */}
            <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Indefinite Leave to Remain (ILR)</h2>
            <p className="text-slate-600 mb-4">
                ILR is a way of settling in the UK permanently. It means you can live, work, and study in the UK without time restrictions.
                It also allows you to access public funds if you are eligible and to leave and re-enter the UK, although spending long periods outside the UK can lead to ILR lapsing.
            </p>
            <p className="text-slate-600 mb-4">
                The qualifying period depends on your immigration route and is commonly 3, 5 or 10 years.
            </p>

            {/* ===== COMMON ILR ROUTES ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">Common ILR Routes:</h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>
                    <strong>Skilled Worker visa (formerly Tier 2 General):</strong> Usually eligible after 5 years.
                </li>
                <li>
                    <strong>Family Visa (Spouse/Partner):</strong> Usually after 5 years.
                </li>
                <li>
                    <strong>Global Talent Visa:</strong> Can be 3 or 5 years, depending on endorsement criteria.
                </li>
                <li>
                    <strong>Innovator Founder Visa:</strong> After 3 years, if specific business milestones are met.
                </li>
                <li>
                    <strong>Refugee or Humanitarian Protection:</strong> After 5 years.
                </li>
                <li>
                    <strong>Long Residence:</strong> After 10 years of continuous lawful residence.
                </li>
            </ul>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/indefinite-leave-to-remain" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Check your eligibility and specific requirements on GOV.UK.</a>
            </p>

            {/* ===== KEY REQUIREMENTS ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">Key Requirements for ILR:</h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>
                    <strong>Continuous Residence:</strong> You must satisfy the continuous residence requirements for your visa category, including limits on time spent outside the UK.
                </li>
                <li>
                    <strong>Life in the UK Test:</strong> You must pass the <Link to="/" className="text-indigo-600 hover:underline">Life in the UK Test</Link>.
                    This website helps you prepare!
                </li>
                <li>
                    <strong>English Language Requirement:</strong> You may meet the requirement through an approved English language test (SELT), an eligible degree taught in English, or by being exempt under the Immigration Rules.
                    <a href="https://www.gov.uk/english-language/approved-english-language-qualifications" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline"> (See approved qualifications on GOV.UK)</a>
                </li>
                <li>
                    <strong>Application Form & Documents:</strong> Complete the correct online application form and provide all required supporting documents.
                </li>
            </ul>

            {/* ===== APPLICATION PROCESS & FEES ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">ILR Application Process & Fees:</h3>
            <p className="text-slate-600 mb-4">
                Applications are made online via GOV.UK. Fees vary and can be substantial.
                You can often choose between standard, priority, and super priority services for faster decisions.
            </p>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/government/publications/visa-regulations-revised-table-of-fees" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Check current fees on GOV.UK.</a>
            </p>

            {/* ===== NEW: PROCESSING TIMES ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">Processing Times:</h3>
            <p className="text-slate-600 mb-4">
                Processing times vary depending on the application type and demand. Current estimated processing times are published on GOV.UK.
                Priority and super priority services are available for faster decisions at an additional cost.
            </p>

            {/* ===== NEW: BIOMETRICS ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">Biometrics (UKVCAS):</h3>
            <p className="text-slate-600 mb-4">
                Most applicants will need to attend a UKVCAS appointment to provide fingerprints, a photograph and supporting documents.
                You will be guided through the booking process after submitting your online application.
            </p>

            {/* ===== NEW: BRP / eVISA ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">BRP & eVisa:</h3>
            <p className="text-slate-600 mb-4">
                Most immigration status is now recorded digitally through an eVisa rather than solely on a physical Biometric Residence Permit (BRP).
                You should create a UKVI account to access your eVisa and prove your immigration status online.
            </p>

            {/* ===== NEW: DON'T LEAVE UK WHILE PENDING ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">Important: Don't Leave the UK While Your Application is Pending:</h3>
            <p className="text-slate-600 mb-4">
                If you leave the UK while your ILR application is being processed, your application will generally be treated as withdrawn.
                Wait until you receive a decision before making any travel plans.
            </p>

            {/* ===== NEW: WHEN ILR CAN LAPSE ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">When ILR Can Lapse:</h3>
            <p className="text-slate-600 mb-4">
                ILR can normally lapse if you remain outside the UK continuously for more than two years.
                If this happens, you would need to apply for a Returning Resident visa to re-enter and settle in the UK.
            </p>

            {/* ===== SECTION 2: BRITISH CITIZENSHIP ===== */}
            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">2. British Citizenship (Naturalisation)</h2>
            <p className="text-slate-600 mb-4">After obtaining ILR, you can usually apply for British Citizenship through naturalisation. There are specific residency requirements you must meet.</p>

            <h3 className="text-xl font-bold text-slate-700 mb-2">Key Requirements for Naturalisation:</h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>
                    <strong>Residency:</strong> Typically, you need 5 years of residency in the UK, including 1 year with ILR.
                    You must also satisfy residence and absence requirements, including being physically present in the UK at the start of the qualifying period.
                    If you are married to a British citizen, you may be able to apply for citizenship immediately after getting ILR, provided you meet other requirements.
                </li>
                <li>
                    <strong>Good Character:</strong> Meet the good character requirement.
                </li>
                <li>
                    <strong>Life in the UK Test & English Language:</strong> You will generally have already met these for ILR.
                </li>
                <li>
                    <strong>Intention to Reside:</strong> Intend to continue living in the UK.
                </li>
            </ul>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/british-citizenship" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Full details on British Citizenship application on GOV.UK.</a>
            </p>

            {/* ===== DUAL CITIZENSHIP (IMPROVED) ===== */}
            <h3 className="text-xl font-bold text-slate-700 mb-2">Dual Citizenship:</h3>
            <p className="text-slate-600 mb-4">
                The UK allows dual citizenship, meaning you can become a British citizen and keep your existing nationality.
                However, whether you can keep your original nationality depends on the laws of your home country.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                <p className="font-bold mb-2">Important:</p>
                <p>
                    The UK allows dual citizenship. However, whether you can keep your original nationality depends on the laws of your home country.
                    Some countries fully allow dual citizenship, some restrict it, and others require you to give up your previous nationality.
                    Always check with your country's embassy or official government website before applying.
                </p>
            </div>

            {/* ===== SECTION 3: AFTER APPLICATION ===== */}
            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">3. After Your Application</h2>

            <h3 className="text-xl font-bold text-slate-700 mb-2">Citizenship Ceremony:</h3>
            <p className="text-slate-600 mb-4">
                If your British Citizenship application is successful, you will be invited to attend a citizenship ceremony.
                After the ceremony, you can apply for a British passport.
            </p>

            <h3 className="text-xl font-bold text-slate-700 mb-2">British Passport:</h3>
            <p className="text-slate-600 mb-4">
                Once you have attended your citizenship ceremony and received your certificate, you can apply for a British passport.
                This is a separate application processed by HM Passport Office.
            </p>

            {/* ===== SECTION 4: TEST CENTRES ===== */}
            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">4. Test Centres & Locations</h2>
            <p className="text-slate-600 mb-4">
                The Life in the UK Test is taken at approved test centres across the UK.
            </p>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/life-in-the-uk-test/book-life-in-uk-test" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Find your nearest test centre and book your test on GOV.UK.</a>
            </p>

            {/* ===== SECTION 5: FAQ ===== */}
            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">5. Frequently Asked Questions</h2>
            <div className="space-y-3 mb-6">
                <FAQItem
                    question="Can I travel after getting ILR?"
                    answer="Yes, you can travel freely. However, ILR can normally lapse if you remain outside the UK continuously for more than two years. If this happens, you would need to apply for a Returning Resident visa."
                />
                <FAQItem
                    question="How long does ILR take to process?"
                    answer="Processing times vary depending on the application type and demand. Current estimated processing times are published on GOV.UK. Priority and super priority services are available for faster decisions."
                />
                <FAQItem
                    question="What happens if my ILR is refused?"
                    answer="You may be able to apply for an administrative review or make a fresh application depending on your circumstances. It is advisable to seek legal advice if your application is refused."
                />
                <FAQItem
                    question="Can I apply early for ILR?"
                    answer="You can apply up to 28 days before you reach the qualifying period. Applying earlier than this may result in refusal."
                />
                <FAQItem
                    question="Do I need the Life in the UK test for citizenship?"
                    answer="Yes, you must pass the Life in the UK Test as part of your British citizenship application, unless you are exempt due to age or a medical condition."
                />
                <FAQItem
                    question="Can I include family members in my ILR application?"
                    answer="Yes, dependants can usually apply at the same time as the main applicant if they meet the eligibility requirements. Each person will need their own application."
                />
                <FAQItem
                    question="What documents do I need for ILR?"
                    answer="Required documents typically include your passport, proof of continuous residence, Life in the UK Test pass certificate, English language evidence, and financial documents. The exact requirements depend on your visa route."
                />
                <FAQItem
                    question="What English test do I need for ILR?"
                    answer="You need an approved SELT (Secure English Language Test) at CEFR B1 level, a qualifying degree taught in English, or you may be exempt by nationality or age/medical condition."
                />
                <FAQItem
                    question="Does time on a Student Visa count towards ILR?"
                    answer="Time on a Student Visa generally does not count towards the 5-year qualifying period for ILR, but may count towards the 10-year Long Residence route."
                />
                <FAQItem
                    question="Can I apply for ILR if I am unemployed?"
                    answer="It depends on your visa route. Some routes require you to be employed, while others (such as the 10-year Long Residence route) do not have an employment requirement."
                />
                <FAQItem
                    question="Can I apply for ILR after divorce?"
                    answer="If you are in the UK on a spouse visa and divorce, you may still be able to apply for ILR under the domestic violence provisions or through other routes. Seek legal advice."
                />
                <FAQItem
                    question="Can I apply for ILR with criminal convictions?"
                    answer="Criminal convictions can affect your ILR application. The Home Office will assess whether you meet the good character requirement. Serious convictions may lead to refusal."
                />
            </div>

            {/* ===== RELATED IMMIGRATION GUIDES ===== */}
            <h2 className="text-2xl font-bold text-slate-800 mb-4 mt-8">📖 Related Immigration Guides</h2>
            <p className="text-slate-600 mb-4">Explore our detailed guides for specific visa routes and requirements:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Link to="/british-citizenship-guide" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">🇬🇧</div>
                    <h3 className="font-bold text-slate-800 text-sm">British Citizenship Guide</h3>
                    <p className="text-xs text-slate-500 mt-1">Naturalisation requirements, residency, good character</p>
                </Link>
                <Link to="/skilled-worker-ilr" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">💼</div>
                    <h3 className="font-bold text-slate-800 text-sm">Skilled Worker ILR</h3>
                    <p className="text-xs text-slate-500 mt-1">Settlement after 5 years on work visa</p>
                </Link>
                <Link to="/spouse-visa-ilr" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">❤️</div>
                    <h3 className="font-bold text-slate-800 text-sm">Spouse Visa ILR</h3>
                    <p className="text-xs text-slate-500 mt-1">Partner settlement requirements</p>
                </Link>
                <Link to="/global-talent-ilr" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">🌟</div>
                    <h3 className="font-bold text-slate-800 text-sm">Global Talent ILR</h3>
                    <p className="text-xs text-slate-500 mt-1">3 or 5 year settlement route</p>
                </Link>
                <Link to="/long-residence-ilr" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">📅</div>
                    <h3 className="font-bold text-slate-800 text-sm">Long Residence ILR</h3>
                    <p className="text-xs text-slate-500 mt-1">10 year lawful residence route</p>
                </Link>
                <Link to="/english-requirement" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">📝</div>
                    <h3 className="font-bold text-slate-800 text-sm">English Language Requirement</h3>
                    <p className="text-xs text-slate-500 mt-1">SELT, degree exemptions, approved tests</p>
                </Link>
                <Link to="/life-in-uk-requirement" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">🇬🇧</div>
                    <h3 className="font-bold text-slate-800 text-sm">Life in the UK Test Requirement</h3>
                    <p className="text-xs text-slate-500 mt-1">Test format, topics, preparation tips</p>
                </Link>
                <Link to="/ukvcas-appointment" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">🖐️</div>
                    <h3 className="font-bold text-slate-800 text-sm">UKVCAS Appointment Guide</h3>
                    <p className="text-xs text-slate-500 mt-1">Biometrics, documents, booking process</p>
                </Link>
                <Link to="/evisa-explained" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">📱</div>
                    <h3 className="font-bold text-slate-800 text-sm">eVisa Explained</h3>
                    <p className="text-xs text-slate-500 mt-1">Digital immigration status, UKVI account</p>
                </Link>
                <Link to="/citizenship-ceremony" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">🎓</div>
                    <h3 className="font-bold text-slate-800 text-sm">Citizenship Ceremony</h3>
                    <p className="text-xs text-slate-500 mt-1">What to expect, oath, certificate</p>
                </Link>
                <Link to="/british-passport-application" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition">
                    <div className="text-2xl mb-2">🛂</div>
                    <h3 className="font-bold text-slate-800 text-sm">British Passport Application</h3>
                    <p className="text-xs text-slate-500 mt-1">Apply after citizenship ceremony</p>
                </Link>
            </div>

            {/* ===== SOLICITOR CTA ===== */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mt-8 text-center">
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Need further assistance?</h3>
                <p className="text-indigo-700 mb-4">If you need personalized advice on your immigration journey, we can connect you with trusted solicitors.</p>
                <button
                    onClick={() => setShowSolicitorForm(true)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-bold transition shadow-md"
                >
                    Find an Immigration Solicitor
                </button>
            </div>
        </div>
    );
};

export default ILRGuide;
