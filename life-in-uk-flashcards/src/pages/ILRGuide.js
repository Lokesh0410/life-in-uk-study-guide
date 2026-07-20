import React from 'react';
import { Link } from 'react-router-dom';

const ILRGuide = () => {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">🇬🇧 Indefinite Leave to Remain (ILR) & British Citizenship Guide</h1>
            <p className="text-slate-700 mb-6">
                Navigating the path to Indefinite Leave to Remain (ILR) and British Citizenship can be complex.
                This guide consolidates information from official sources to help you understand the general process and requirements.
                <strong>This website is not affiliated with the UK Home Office. Always verify information on <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">GOV.UK</a>.</strong>
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Indefinite Leave to Remain (ILR)</h2>
            <p className="text-slate-600 mb-4">ILR is a way of settling in the UK permanently. It means you can live, work, and study in the UK without time restrictions. You usually need to have lived in the UK for a continuous period (e.g., 2, 3, or 5 years) on a qualifying visa.</p>

            <h3 className="text-xl font-bold text-slate-700 mb-2">Common ILR Routes:</h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>**Tier 2 (Skilled Worker) Visa:** Typically after 5 years.</li>
                <li>**Family Visa (Spouse/Partner):** Usually after 5 years.</li>
                <li>**Global Talent Visa:** Can be 3 or 5 years, depending on endorsement criteria.</li>
                <li>**Innovator Founder Visa:** After 3 years, if specific business milestones are met.</li>
                <li>**Refugee or Humanitarian Protection:** After 5 years.</li>
                <li>Other routes exist, including Long Residence (10 years).</li>
            </ul>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/indefinite-leave-to-remain" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Check your eligibility and specific requirements on GOV.UK.</a>
            </p>

            <h3 className="text-xl font-bold text-slate-700 mb-2">Key Requirements for ILR:</h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>
                    <strong>Continuous Residence:</strong> Meet the specific time requirement for your visa category.
                    There are limits on absences from the UK.
                </li>
                <li>
                    <strong>Life in the UK Test:</strong> You must pass the <Link to="/" className="text-indigo-600 hover:underline">Life in the UK Test</Link>.
                    This website helps you prepare!
                </li>
                <li>
                    <strong>English Language Requirement:</strong> Demonstrate English language proficiency (CEFR B1 level or higher),
                    unless you are exempt. This can be through an approved test, a degree taught in English, or being from a majority English-speaking country.
                    <a href="https://www.gov.uk/english-language/approved-english-language-qualifications" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">(See approved qualifications on GOV.UK)</a>
                </li>
                <li>
                    <strong>Application Form & Documents:</strong> Complete the correct online application form and provide all required supporting documents.
                </li>
            </ul>

            <h3 className="text-xl font-bold text-slate-700 mb-2">ILR Application Process & Fees:</h3>
            <p className="text-slate-600 mb-4">
                Applications are made online via GOV.UK. Fees vary and can be substantial.
                You can often choose between standard, priority, and super priority services for faster decisions.
            </p>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/government/publications/visa-regulations-revised-table-of-fees" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Check current fees on GOV.UK.</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">2. British Citizenship (Naturalisation)</h2>
            <p className="text-slate-600 mb-4">After obtaining ILR, you can usually apply for British Citizenship through naturalisation. There are specific residency requirements you must meet.</p>

            <h3 className="text-xl font-bold text-slate-700 mb-2">Key Requirements for Naturalisation:</h3>
            <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>
                    <strong>Residency:</strong> Typically, you need 5 years of residency in the UK, including 1 year with ILR.
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

            <h3 className="text-xl font-bold text-slate-700 mb-2">Dual Citizenship:</h3>
            <p className="text-slate-600 mb-4">
                The UK generally allows dual citizenship, meaning you can become a British citizen and keep your existing nationality.
                However, your home country might have different rules.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
                <p className="font-bold mb-2">Countries commonly allowing/disallowing dual citizenship (check your specific country):</p>
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Often Allow:</strong> Australia, Canada, France, Ireland, Italy, Pakistan, Spain, Sweden, USA.</li>
                    <li><strong>Often Disallow:</strong> China, India, Japan, Malaysia, Nepal, Saudi Arabia, Singapore, UAE.</li>
                </ul>
                <p className="mt-2 text-xs">Always confirm with your home country's embassy or consulate.</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">3. After Your Application</h2>
            <p className="text-slate-600 mb-4">
                If your British Citizenship application is successful, you will be invited to attend a citizenship ceremony.
                After the ceremony, you can apply for a British passport.
            </p>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/apply-citizenship-ceremony" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Learn more about citizenship ceremonies.</a>
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mb-3 mt-8">4. Test Centres & Locations</h2>
            <p className="text-slate-600 mb-4">
                The Life in the UK Test is taken at approved test centres across the UK.
            </p>
            <p className="text-slate-600 mb-4">
                <a href="https://www.gov.uk/life-in-the-uk-test/book-life-in-uk-test" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Find your nearest test centre and book your test on GOV.UK.</a>
            </p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mt-8 text-center">
                <h3 className="text-xl font-bold text-indigo-800 mb-3">Need further assistance?</h3>
                <p className="text-indigo-700 mb-4">If you need personalized advice on your immigration journey, we can connect you with trusted solicitors.</p>
                <button
                    onClick={() => alert("Solicitor lead form coming soon!")} // Placeholder for future lead form
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl font-bold transition shadow-md"
                >
                    Find an Immigration Solicitor
                </button>
            </div>
        </div>
    );
};

export default ILRGuide;
