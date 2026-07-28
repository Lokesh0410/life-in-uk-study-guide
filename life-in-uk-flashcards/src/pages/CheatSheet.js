// src/pages/CheatSheet.js
// Premium Cheat Sheet — quick reference for the Life in the UK test:
// history timeline, government structure, key dates/monarchs, patron saints,
// British values, inventions, test info, and full study guide overview.

import useDocumentMeta from "../useDocumentMeta";

const TIMELINE = [
    { year: "~10,000 BCE", era: "Prehistory", event: "Channel forms, Britain becomes an island" },
    { year: "~4000 BCE", era: "Prehistory", event: "First farmers arrive from SE Europe" },
    { year: "~2500 BCE", era: "Prehistory", event: "Stonehenge completed" },
    { year: "55 BCE", era: "Roman", event: "Julius Caesar invades Britain" },
    { year: "43 CE", era: "Roman", event: "Emperor Claudius conquers Britain" },
    { year: "122 CE", era: "Roman", event: "Hadrian's Wall built" },
    { year: "410 CE", era: "Roman", event: "Romans leave Britain" },
    { year: "~500 CE", era: "Saxon/Viking", event: "Anglo-Saxon kingdoms established" },
    { year: "789 CE", era: "Saxon/Viking", event: "First Viking raids" },
    { year: "871 CE", era: "Saxon/Viking", event: "Alfred the Great becomes king" },
    { year: "1066", era: "Medieval", event: "Battle of Hastings – Norman Conquest" },
    { year: "1086", era: "Medieval", event: "Domesday Book completed" },
    { year: "1215", era: "Medieval", event: "Magna Carta signed at Runnymede" },
    { year: "1284", era: "Medieval", event: "Statute of Rhuddlan – Wales annexed" },
    { year: "1314", era: "Medieval", event: "Battle of Bannockburn" },
    { year: "1348", era: "Medieval", event: "Black Death arrives in Britain" },
    { year: "1455-85", era: "Medieval", event: "Wars of the Roses" },
    { year: "1534", era: "Tudor", event: "Act of Supremacy – Church of England" },
    { year: "1558-1603", era: "Tudor", event: "Elizabeth I – Golden Age" },
    { year: "1588", era: "Tudor", event: "Defeat of Spanish Armada" },
    { year: "1603", era: "Stuart", event: "Union of the Crowns (James VI & I)" },
    { year: "1605", era: "Stuart", event: "Gunpowder Plot" },
    { year: "1642-51", era: "Stuart", event: "English Civil War" },
    { year: "1649", era: "Stuart", event: "Charles I executed" },
    { year: "1660", era: "Stuart", event: "The Restoration (Charles II)" },
    { year: "1665", era: "Stuart", event: "Great Plague of London" },
    { year: "1666", era: "Stuart", event: "Great Fire of London" },
    { year: "1688", era: "Stuart", event: "Glorious Revolution" },
    { year: "1689", era: "Empire", event: "Bill of Rights" },
    { year: "1707", era: "Empire", event: "Act of Union (England & Scotland)" },
    { year: "1721-42", era: "Empire", event: "Sir Robert Walpole (first PM)" },
    { year: "1746", era: "Empire", event: "Battle of Culloden – Jacobites defeated" },
    { year: "1776", era: "Empire", event: "American Declaration of Independence" },
    { year: "1805", era: "Empire", event: "Battle of Trafalgar (Nelson)" },
    { year: "1807", era: "Empire", event: "Slave Trade Act (abolition)" },
    { year: "1815", era: "Empire", event: "Battle of Waterloo" },
    { year: "1832", era: "Empire", event: "First Reform Act (voting)" },
    { year: "1833", era: "Empire", event: "Slavery Abolition Act" },
    { year: "1837-1901", era: "Empire", event: "Victorian Age" },
    { year: "1848", era: "Modern", event: "Public Health Act" },
    { year: "1903", era: "Modern", event: "Women's Social & Political Union" },
    { year: "1914-18", era: "Modern", event: "First World War" },
    { year: "1918", era: "Modern", event: "Women over 30 get vote" },
    { year: "1928", era: "Modern", event: "Equal voting rights at 21" },
    { year: "1939-45", era: "Modern", event: "Second World War" },
    { year: "1940", era: "Modern", event: "Battle of Britain" },
    { year: "1945", era: "Modern", event: "Welfare State begins (Attlee)" },
    { year: "1948", era: "Modern", event: "NHS founded; Windrush arrives" },
    { year: "1973", era: "Modern", event: "UK joins EEC (Common Market)" },
    { year: "1979-90", era: "Modern", event: "Margaret Thatcher PM" },
    { year: "1998", era: "Modern", event: "Good Friday Agreement" },
    { year: "1999", era: "Modern", event: "Devolution (Scottish/Welsh parliaments)" },
    { year: "2016", era: "Modern", event: "Brexit referendum (Leave 51.9%)" },
    { year: "2020", era: "Modern", event: "UK formally leaves EU (Jan 31)" },
    { year: "2022", era: "Modern", event: "Queen Elizabeth II dies; Charles III King" },
];

const ERA_STYLES = {
    "Prehistory": { dot: "bg-purple-500", tag: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300" },
    "Roman": { dot: "bg-red-500", tag: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300" },
    "Saxon/Viking": { dot: "bg-amber-500", tag: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300" },
    "Medieval": { dot: "bg-blue-500", tag: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300" },
    "Tudor": { dot: "bg-pink-500", tag: "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300" },
    "Stuart": { dot: "bg-emerald-500", tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" },
    "Empire": { dot: "bg-indigo-500", tag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300" },
    "Modern": { dot: "bg-teal-500", tag: "bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300" },
};

const GOV_CARDS = [
    { role: "👑 The Monarch", name: "King Charles III", detail: "Head of State, opens Parliament, Royal Assent" },
    { role: "🏛️ Prime Minister", name: "Keir Starmer (since Jul 2024)", detail: "Head of Government, appoints ministers" },
    { role: "📋 Cabinet", name: "~22 senior ministers", detail: "Meet weekly, decide government policy" },
    { role: "🗳️ House of Commons", name: "650 MPs", detail: "Elected, pass laws, scrutinise government" },
    { role: "👑 House of Lords", name: "~800 Lords", detail: "Life peers, bishops, hereditary; review & amend" },
    { role: "⚖️ Supreme Court", name: "12 Justices", detail: "Highest UK court (since 2009)" },
    { role: "🏛️ Devolved Govts", name: "Scotland, Wales, NI", detail: "Health, education, transport, justice" },
    { role: "🏛️ Local Councils", name: "340+ councils", detail: "Schools, bins, housing, planning" },
];

const MUST_KNOW_DATES = [
    { year: "1215", event: "Magna Carta" },
    { year: "1314", event: "Bannockburn" },
    { year: "1534", event: "Anglican Church" },
    { year: "1588", event: "Spanish Armada" },
    { year: "1605", event: "Gunpowder Plot" },
    { year: "1642-51", event: "Civil War" },
    { year: "1666", event: "Great Fire" },
    { year: "1688-89", event: "Glorious Rev & Bill of Rights" },
    { year: "1707", event: "Act of Union (GB)" },
    { year: "1805", event: "Trafalgar" },
    { year: "1807", event: "Slave Trade Abolished" },
    { year: "1815", event: "Waterloo" },
    { year: "1832", event: "Reform Act" },
    { year: "1914-18", event: "WWI" },
    { year: "1928", event: "Equal Votes" },
    { year: "1940", event: "Battle of Britain" },
    { year: "1948", event: "NHS founded" },
    { year: "1998", event: "Good Friday Agreement" },
];

const MONARCHS = [
    { name: "William I (Conqueror)", reign: "1066-1087", fact: "Norman Conquest, Domesday Book" },
    { name: "Henry II", reign: "1154-1189", fact: "First Plantagenet, common law" },
    { name: "John", reign: "1199-1216", fact: "Magna Carta (1215)" },
    { name: "Edward I", reign: "1272-1307", fact: "Conquered Wales, Model Parliament" },
    { name: "Henry VIII", reign: "1509-1547", fact: "Church of England, 6 wives" },
    { name: "Elizabeth I", reign: "1558-1603", fact: "Golden Age, Spanish Armada" },
    { name: "Charles I", reign: "1625-1649", fact: "Executed after Civil War" },
    { name: "Charles II", reign: "1660-1685", fact: "The Restoration" },
    { name: "Victoria", reign: "1837-1901", fact: "Largest empire, longest reign" },
    { name: "Elizabeth II", reign: "1952-2022", fact: "Longest-reigning British monarch" },
    { name: "Charles III", reign: "2022–", fact: "Current monarch" },
];

const SAINTS = [
    { saint: "St George 🏴󠁧󠁢󠁥󠁮󠁧󠁿", info: "23 Apr · England", detail: "Red cross on white (flag)" },
    { saint: "St Andrew 🏴󠁧󠁢󠁳󠁣󠁴󠁿", info: "30 Nov · Scotland", detail: "White diagonal on blue (flag)" },
    { saint: "St David 🏴󠁧󠁢󠁷󠁬󠁳󠁿", info: "1 Mar · Wales", detail: "Daffodil" },
    { saint: "St Patrick ☘️", info: "17 Mar · N Ireland", detail: "Shamrock" },
];

const NATION_STRIPS = [
    { html: <><strong>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</strong> · 🌹 Rose · St George (23 Apr)</> },
    { html: <><strong>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</strong> · 🌱 Thistle · St Andrew (30 Nov)</> },
    { html: <><strong>🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</strong> · 🌼 Daffodil · St David (1 Mar)</> },
    { html: <><strong>☘️ N Ireland</strong> · 🍀 Shamrock · St Patrick (17 Mar)</> },
];

const INVENTIONS = [
    { name: "Television 📺", detail: "John Logie Baird (1920s)" },
    { name: "Radar 📡", detail: "Robert Watson-Watt (1935)" },
    { name: "Jet Engine ✈️", detail: "Frank Whittle (1930s)" },
    { name: "World Wide Web 🌐", detail: "Tim Berners-Lee (1990)" },
    { name: "Penicillin 💊", detail: "Alexander Fleming (1928)" },
    { name: "DNA Structure 🧬", detail: "Crick & Watson (1953)" },
    { name: "ATM 🏧", detail: "James Goodfellow (1967)" },
    { name: "Hovercraft 🚤", detail: "Christopher Cockerell (1950s)" },
    { name: "IVF 👶", detail: "Edwards & Steptoe (1978)" },
    { name: "MRI Scanner 🏥", detail: "Peter Mansfield (1970s)" },
];

const TEST_INFO = [
    { value: "24", label: "Questions", detail: "Randomly selected from official handbook", color: "bg-sky-100 dark:bg-sky-950" },
    { value: "75%", label: "Pass Mark", detail: "18 out of 24 correct to pass", color: "bg-green-100 dark:bg-green-950" },
    { value: "45 min", label: "Time Limit", detail: "At approved test centres across UK", color: "bg-yellow-100 dark:bg-yellow-950" },
];

const STUDY_GUIDE_SECTIONS = [
    { section: "🌍 1. The 4 Nations", cards: 15 },
    { section: "🛡️ 2. Early History", cards: 16 },
    { section: "📜 3. Middle Ages & Rights", cards: 11 },
    { section: "⛪ 4. Tudors & Stuarts", cards: 14 },
    { section: "🚂 5. Enlightenment & Empire", cards: 20 },
    { section: "🕊️ 6. The 20th Century", cards: 23 },
    { section: "⚖️ 7. Government & Law", cards: 19 },
    { section: "🌸 8. Symbols & Saints", cards: 6 },
    { section: "🎉 9. Traditions & Holidays", cards: 8 },
    { section: "💡 10. Arts & Science", cards: 15 },
    { section: "🏅 11. British Values", cards: 8 },
    { section: "👑 12. The Monarchy", cards: 5 },
    { section: "🗳️ 13. Elections & Voting", cards: 6 },
    { section: "🏛️ 14. Parliament & Government", cards: 5 },
    { section: "⚖️ 15. Justice System", cards: 5 },
    { section: "🌐 16. Britain & the World", cards: 7 },
    { section: "📖 17. Literature & Writers", cards: 5 },
    { section: "⚽ 18. Sports & Icons", cards: 10 },
    { section: "🏡 19. Everyday Life", cards: 6 },
    { section: "🏛️ 20. Local Government", cards: 6 },
    { section: "🛂 21. Migration & Citizenship", cards: 4 },
    { section: "📅 22. Key Dates & Quick Facts", cards: 10 },
    { section: "⛪ 23. Religion & Faith", cards: 11 },
    { section: "🎊 24. Customs & Traditions", cards: 14 },
    { section: "🔬 25. British Inventions & Discoveries", cards: 16 },
    { section: "🍽️ 26. Food & Leisure", cards: 10 },
    { section: "🏰 27. Places of Interest", cards: 12 },
    { section: "📊 28. Modern Society & Demographics", cards: 8 },
    { section: "💰 29. Taxation & Driving", cards: 9 },
    { section: "🤝 30. Human Rights & Equal Opportunities", cards: 10 },
    { section: "🦴 31. Early Britain & Prehistory", cards: 10 },
    { section: "🏛️ 32. Roman Britain", cards: 8 },
    { section: "⚔️ 33. Anglo-Saxons & Vikings", cards: 10 },
    { section: "🏰 34. Norman Conquest & Middle Ages", cards: 13 },
    { section: "👑 35. Tudors & Stuarts (Detailed)", cards: 24 },
    { section: "🌍 36. Global Power & Empire", cards: 23 },
    { section: "🕊️ 37. 20th Century & Modern Britain", cards: 19 },
    { section: "🎭 38. Arts, Literature & Culture", cards: 24 },
    { section: "🌐 39. International Relations", cards: 9 },
    { section: "⚖️ 40. Legal System & Courts", cards: 14 },
    { section: "🤝 41. Community & Citizenship", cards: 11 },
    { section: "🏅 42. British Values & Principles (Detailed)", cards: 16 },
];

const sectionHeading = "text-xl font-bold text-[#1e3a5f] dark:text-slate-100 border-b-[3px] border-blue-500 dark:border-blue-600 pb-1.5 mb-4 mt-7 flex items-center gap-2";

export default function CheatSheet() {
    useDocumentMeta({
        title: "Premium Cheat Sheet — Life in the UK Test Coach",
        description: "Quick reference guide: British history timeline, government structure, key dates & monarchs, patron saints, British values, inventions, and study guide overview for the Life in the UK test.",
        path: "/cheat-sheet",
    });

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-5 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-[#1e3a5f] dark:text-slate-100 mb-1">
                    📖 Life in the UK – Premium Cheat Sheet
                </h1>
                <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-6">
                    Quick reference guide: timeline, government, key facts, British values | Print to PDF for offline use
                </p>

                {/* TIMELINE */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>⏳ British History Timeline</h2>
                    <div className="relative">
                        <div className="absolute left-[68px] sm:left-[120px] top-0 bottom-0 w-[3px] bg-slate-200 dark:bg-slate-700" />
                        <div className="space-y-1">
                            {TIMELINE.map((item, i) => {
                                const style = ERA_STYLES[item.era];
                                return (
                                    <div key={i} className="flex items-baseline relative">
                                        <span className="w-[60px] sm:w-[110px] text-right pr-2 sm:pr-4 font-bold text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 shrink-0">
                                            {item.year}
                                        </span>
                                        <span className={`absolute left-[62px] sm:left-[114px] w-3 h-3 rounded-full border-2 border-white dark:border-slate-900 top-[3px] ${style.dot}`} />
                                        <span className="pl-4 sm:pl-6 text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 leading-tight">
                                            <span className={`inline-block px-1.5 py-0.5 rounded-full text-[9px] font-semibold mr-1.5 ${style.tag}`}>
                                                {item.era}
                                            </span>
                                            {item.event}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* GOVERNMENT */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>🏛️ UK Government Structure</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {GOV_CARDS.map((card, i) => (
                            <div key={i} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 border-l-4 border-blue-500 dark:border-blue-600">
                                <div className="font-bold text-sm text-slate-800 dark:text-slate-100">{card.role}</div>
                                <div className="text-xs text-slate-600 dark:text-slate-300">{card.name}</div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{card.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* KEY DATES & MONARCHS */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>📅 Key Dates & Monarchs</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">📌 Must-Know Dates</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-[11px] border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Year</th>
                                            <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {MUST_KNOW_DATES.map((d, i) => (
                                            <tr key={i} className={i % 2 === 1 ? "bg-slate-50 dark:bg-slate-800/50" : ""}>
                                                <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700">
                                                    <strong className="text-slate-800 dark:text-slate-100">{d.year}</strong>
                                                </td>
                                                <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{d.event}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">👑 Key Monarchs</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-[11px] border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Monarch</th>
                                            <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Reign</th>
                                            <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Key Fact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {MONARCHS.map((m, i) => (
                                            <tr key={i} className={i % 2 === 1 ? "bg-slate-50 dark:bg-slate-800/50" : ""}>
                                                <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700">
                                                    <strong className="text-slate-800 dark:text-slate-100">{m.name}</strong>
                                                </td>
                                                <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{m.reign}</td>
                                                <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{m.fact}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PATRON SAINTS & SYMBOLS */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>🌸 Patron Saints & National Symbols</h2>
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {SAINTS.map((s, i) => (
                            <div key={i} className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border border-red-200 dark:border-red-900 rounded-lg p-3 text-center">
                                <div className="font-bold text-sm text-slate-800 dark:text-slate-100">{s.saint}</div>
                                <div className="text-[11px] text-slate-600 dark:text-slate-300">{s.info}</div>
                                <div className="text-[10px] text-slate-600 dark:text-slate-400">{s.detail}</div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2.5">
                        {NATION_STRIPS.map((n, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-lg text-xs text-slate-700 dark:text-slate-300">
                                {n.html}
                            </div>
                        ))}
                    </div>
                </section>

                {/* BRITISH VALUES */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>🏅 British Values & Principles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-lg p-3">
                            <h3 className="text-green-800 dark:text-green-300 font-bold text-sm mb-1.5">🌟 5 Fundamental Values</h3>
                            <ul className="space-y-1">
                                {["Democracy", "Rule of Law", "Individual Liberty", "Tolerance of different faiths", "Participation in community life"].map((v, i) => (
                                    <li key={i} className="text-[11px] text-slate-700 dark:text-slate-300 pl-4 relative">
                                        <span className="absolute left-0 text-green-600 dark:text-green-400 font-bold">✓</span>
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-lg p-3">
                            <h3 className="text-green-800 dark:text-green-300 font-bold text-sm mb-1.5">🗽 Freedoms the UK Offers</h3>
                            <ul className="space-y-1">
                                {["Freedom of belief & religion", "Freedom of speech", "Freedom from unfair discrimination", "Right to a fair trial", "Right to vote"].map((v, i) => (
                                    <li key={i} className="text-[11px] text-slate-700 dark:text-slate-300 pl-4 relative">
                                        <span className="absolute left-0 text-green-600 dark:text-green-400 font-bold">✓</span>
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="sm:col-span-2 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-lg p-3">
                            <h3 className="text-green-800 dark:text-green-300 font-bold text-sm mb-1.5">🏡 Responsibilities</h3>
                            <ul className="space-y-1">
                                {["Respect & obey the law", "Respect others' rights", "Treat others with fairness", "Look after yourself & family", "Look after your area & environment"].map((v, i) => (
                                    <li key={i} className="text-[11px] text-slate-700 dark:text-slate-300 pl-4 relative">
                                        <span className="absolute left-0 text-green-600 dark:text-green-400 font-bold">✓</span>
                                        {v}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* BRITISH INVENTIONS */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>🔬 British Inventions & Discoveries</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {INVENTIONS.map((inv, i) => (
                            <div key={i} className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-900 rounded-lg p-2 text-center">
                                <div className="font-bold text-xs text-slate-800 dark:text-slate-100">{inv.name}</div>
                                <div className="text-[10px] text-slate-600 dark:text-slate-400">{inv.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TEST INFO */}
                <section className="mb-6">
                    <h2 className={sectionHeading}>📝 Life in the UK Test</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {TEST_INFO.map((t, i) => (
                            <div key={i} className={`${t.color} rounded-lg p-3 text-center`}>
                                <div className="text-2xl mb-1 text-slate-800 dark:text-slate-100">{t.value}</div>
                                <div className="font-bold text-sm text-slate-800 dark:text-slate-100">{t.label}</div>
                                <div className="text-[11px] text-slate-600 dark:text-slate-300">{t.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* STUDY GUIDE SECTIONS */}
                <section className="mb-2">
                    <h2 className={sectionHeading}>📚 Study Guide Overview</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-[11px] border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">#</th>
                                    <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Section</th>
                                    <th className="bg-[#1e3a5f] dark:bg-slate-800 text-white px-2 py-1.5 text-left font-semibold">Cards</th>
                                </tr>
                            </thead>
                            <tbody>
                                {STUDY_GUIDE_SECTIONS.map((s, i) => (
                                    <tr key={i} className={i % 2 === 1 ? "bg-slate-50 dark:bg-slate-800/50" : ""}>
                                        <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700"></td>
                                        <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{s.section}</td>
                                        <td className="px-2 py-1 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">{s.cards}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="text-center mt-6 pt-4 border-t-2 border-slate-200 dark:border-slate-700 text-[11px] text-slate-400 dark:text-slate-500">
                    Generated from lifeinukcoach.co.uk study guide · 495 flashcards across 42 sections · Print as PDF for offline use
                </div>
            </div>
        </div>
    );
}
