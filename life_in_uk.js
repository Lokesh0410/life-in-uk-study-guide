import { useState } from "react";

const pastelColors = [
  "bg-pink-100", "bg-blue-100", "bg-green-100", 
  "bg-yellow-100", "bg-purple-100", "bg-orange-100", "bg-indigo-100"
];

function FlashCard({ card, index }) {
  const [flip, setFlip] = useState(false);

  return (
    <div className="perspective cursor-pointer h-56" onClick={() => setFlip(!flip)}>
      <div className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${flip ? "rotate-y-180" : ""}`}>
        {/* FRONT */}
        <div className={`absolute w-full h-full backface-hidden rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col justify-center items-center text-center ${pastelColors[index % pastelColors.length]}`}>
          <span className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">{card.category || "General"}</span>
          <p className="text-lg font-medium leading-tight">{card.front}</p>
          <span className="text-[10px] mt-4 opacity-40 uppercase">Click to Reveal</span>
        </div>

        {/* BACK */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-md p-5 flex flex-col justify-center items-center text-center bg-white border-2 border-indigo-200`}>
          <p className="text-md font-bold text-indigo-900 whitespace-pre-line leading-snug">
            {card.back}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const sections = [
    // ===================== 1. THE 4 NATIONS (EXPANDED) =====================
    {
      title: "🌍 1. The 4 Nations",
      cards: [
        { front: "Match the Capitals 🏛️", back: "England: London\nScotland: Edinburgh\nWales: Cardiff\nNI: Belfast" },
        { front: "Population Percentages 📊", back: "England: 84%\nScotland: 8%\nWales: 5%\nNI: 3%" },
        { front: "Crown Dependencies? 🇮🇲", back: "Isle of Man & Channel Islands\n(Not part of the UK or EU)" },
        { front: "Which UK nation has its own legal system?", back: "Scotland (Scots law) and Northern Ireland have separate legal systems from England & Wales." },
        { front: "Largest city in Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿", back: "Glasgow (approx 600k people)" },
        { front: "National Day of Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿", back: "St David's Day (March 1st)" },
        { front: "UK population (approx 2024)", back: "Around 67 million" },
        { front: "Largest Channel Island", back: "Jersey (population ~100k)" },
        { front: "Flag of St Patrick", back: "Diagonal red cross on a white background" },
        { front: "Flag of St Andrew", back: "Diagonal white cross on a blue background" },
        { front: "Highest mountain in the UK ⛰️", back: "Ben Nevis (located in Scotland)" }
      ],
    },
    // ===================== 2. EARLY HISTORY (EXPANDED) =====================
    {
      title: "🛡️ 2. Early History",
      cards: [
        { front: "The Roman Legacy 🏛️", back: "43 CE invasion\nLeft in 410 CE\nBuilt Hadrian's Wall" },
        { front: "The Vikings 🪓", back: "From Denmark/Norway\nSettled in 'Danelaw'\nDefeated by Alfred the Great" },
        { front: "1066: The Turning Point 👑", back: "Battle of Hastings\nWilliam the Conqueror (Norman)\nLast successful invasion" },
        { front: "Domesday Book (1086) 📖", back: "Commissioned by William I\nRecord of landholdings and resources in England" },
        { front: "Battle of Bannockburn (1314) ⚔️", back: "Robert the Bruce defeated English army\nSecured Scottish independence" },
        { front: "The Peasants' Revolt (1381) 🌾", back: "Led by Wat Tyler\nProtest against poll tax\nBurned down Savoy Palace" },
        { front: "The Wars of the Roses 🌹", back: "Civil war: Lancaster (red rose) vs York (white rose)\nEnded at Bosworth (1485)" },
        { front: "Who was Alfred the Great?", back: "King of Wessex (871-899)\nDefeated Vikings, promoted education & law" },
        { front: "English Civil War (1642) ⚔️", back: "Cavaliers (King) vs Roundheads (Parliament)" },
        { front: "The Huguenots 🕊️", back: "Protestant refugees from France who came to Britain between 1680–1720" },
        { front: "Roman Britain: How many years?", back: "The Romans remained in Britain for 400 years (not 500)" },
        { front: "The 100 Years War", back: "Actually lasted 116 years (England vs France)" },
        { front: "Scottish Clans: The Glencoe Massacre", back: "MacDonalds of Glencoe were massacred for being late to take an oath to King William" },
        { front: "The Gentry", back: "A new social class of landowners that appeared after the Black Death" }
      ],
    },
    // ===================== 3. MIDDLE AGES & RIGHTS (EXPANDED) =====================
    {
      title: "📜 3. Middle Ages & Rights",
      cards: [
        { front: "Magna Carta (1215) 📜", back: "King John forced to sign\nLimited King's power\nBasis of 'Rule of Law'" },
        { front: "The Black Death (1348) ☠️", back: "Killed 1/3 of population\nLed to higher wages &\nend of serfdom" },
        { front: "First Printing Press 🖨️", back: "William Caxton\nIntroduced to England\nin the 1470s" },
        { front: "The Habeas Corpus Act (1679) ⛓️", back: "Protected individuals from unlawful imprisonment" },
        { front: "The Bill of Rights (1689) 📜", back: "Limited monarch's power, established parliamentary authority" },
        { front: "Who was Wat Tyler?", back: "Leader of the Peasants' Revolt (1381), killed at Smithfield" },
        { front: "The Glorious Revolution (1688)", back: "Guaranteed the power of Parliament over the King" }
      ],
    },
    // ===================== 4. TUDORS & STUARTS (EXPANDED) =====================
    {
      title: "⛪ 4. Tudors & Stuarts",
      cards: [
        { front: "Henry VIII ⛪", back: "Six wives\nCreated Church of England\nBroke from Rome (Catholicism)" },
        { front: "Elizabeth I ⚓", back: "The 'Golden Age'\nDefeated Spanish Armada (1588)" },
        { front: "The Civil War (1642) ⚔️", back: "Cavaliers (King) vs\nRoundheads (Parliament)\nCharles I executed 1649" },
        { front: "The Gunpowder Plot 🎆", back: "1605: Guy Fawkes\nTried to blow up Parliament\nCommemorated Nov 5th" },
        { front: "Lady Jane Grey 👑", back: "Reigned for 9 days in 1553, executed by Mary I" },
        { front: "Mary I (Bloody Mary)", back: "Restored Catholicism, burned 300 Protestants" },
        { front: "The Union of the Crowns (1603) 👑", back: "James VI of Scotland became James I of England – united crowns" },
        { front: "The Great Fire of London (1666) 🔥", back: "Destroyed 13,000 houses, rebuilt by Christopher Wren" }
      ],
    },
    // ===================== 5. ENLIGHTENMENT & EMPIRE (EXPANDED) =====================
    {
      title: "🚂 5. Enlightenment & Empire",
      cards: [
        { front: "Slavery Abolition Dates ⛓️", back: "1807: Slave Trade banned\n1833: Slavery abolished\nin all UK territories" },
        { front: "Isaac Newton 🍎", back: "Discovered Gravity\nPublished 'Principia'\nShowed gravity applies to the whole universe" },
        { front: "Battle of Trafalgar (1805) ⛵", back: "Admiral Nelson defeated\nNapoleon's fleet\nNelson died in battle" },
        { front: "Battle of Waterloo (1815)", back: "Duke of Wellington defeated Napoleon" },
        { front: "The Industrial Revolution 🏭", back: "Began in mid-18th century\nUK was major producer of coal, iron, cotton cloth" },
        { front: "The East India Company 🏢", back: "Traded with India, ruled Indian subcontinent until 1858" },
        { front: "The Chartists (1838-48) 📋", back: "Campaign for working-class votes and secret ballots" },
        { front: "Florence Nightingale 🏥", back: "Founder of modern nursing, famous for Crimean War work" },
        { front: "Slave trade: Where did slaves come from?", back: "Primarily from West Africa" }
      ],
    },
    // ===================== 6. THE 20TH CENTURY (EXPANDED) =====================
    {
      title: "🕊️ 6. The 20th Century",
      cards: [
        { front: "Women's Suffrage 🗳️", back: "1918: Women 30+ vote\n1928: Equal voting age (21)\nfor men and women" },
        { front: "Winston Churchill 💂", back: "Prime Minister in 1940\nLed UK through WW2\nFamous for 'speech' morale" },
        { front: "The NHS (1948) 🏥", back: "Founded by Aneurin Bevan\nHealthcare free at the\npoint of delivery" },
        { front: "The Battle of Britain (1940) ✈️", back: "RAF defeated Luftwaffe, prevented German invasion" },
        { front: "The Good Friday Agreement (1998) ☘️", back: "Peace deal for Northern Ireland – power-sharing government" },
        { front: "Margaret Thatcher (1979-1990)", back: "First female PM, 'Iron Lady', privatisation policies" },
        { front: "The Falklands War (1982) ⚓", back: "Argentina invaded Falklands; UK reclaimed territory" }
      ],
    },
    // ===================== 7. GOVERNMENT & LAW (EXPANDED) =====================
    {
      title: "⚖️ 7. Government & Law",
      cards: [
        { front: "The UK Constitution 📖", back: "Unwritten\nBased on statutes,\nconventions & documents" },
        { front: "Minor Crimes in Scotland? ⚖️", back: "Justice of the Peace Court\n(Magistrates' equivalent)" },
        { front: "The Speaker 🎤", back: "Neutral MP who\nmanages debates in the\nHouse of Commons" },
        { front: "What is the House of Lords?", back: "Reviews bills, proposes amendments; includes life peers and bishops" },
        { front: "Who is the head of state?", back: "The Monarch (currently King Charles III)" },
        { front: "Minimum age to become an MP", back: "18 years old" },
        { front: "What is a 'hung Parliament'?", back: "No party has majority; can form coalition or minority government" },
        { front: "Magistrates' Court", back: "Deals with minor crimes (unpaid)" },
        { front: "Crown Court", back: "Deals with serious crimes (with a Jury)" },
        { front: "Youth Court", back: "For children aged 10 to 17" },
        { front: "Small Claims limit in England/Wales", back: "Up to £10,000" },
        { front: "What is Hansard?", back: "The official written record of what is said in Parliament" },
        { front: "Jury Service eligibility", back: "You are eligible at 18; it is a duty of citizenship" },
        { front: "MOT Certificate requirement", back: "Required for vehicles more than 3 years old (not 2)" },
        { front: "'R' Plates in Northern Ireland", back: "New drivers must display an 'R' plate for 1 year" },
        { front: "3 key roles of School Governors", back: "Strategic direction, Accountability, Monitoring performance" },
        { front: "Examples of Criminal Offences", back: "Selling tobacco to under-18s, smoking in public, drinking in public" },
        { front: "Examples of Civil Offences", back: "Unfair dismissal, discrimination, faulty goods disputes" },
        { front: "How to register to vote", back: "You must register at your local council electoral registration office" }
      ],
    },
    // ===================== 8. SYMBOLS & SAINTS (EXPANDED) =====================
    {
      title: "🌸 8. Symbols & Saints",
      cards: [
        { front: "Flowers & Nations 🌼", back: "ENG: Rose | SCO: Thistle\nWAL: Daffodil | NI: Shamrock" },
        { front: "Patron Saint Dates 📅", back: "Mar 1: David | Mar 17: Patrick\nApr 23: George | Nov 30: Andrew" },
        { front: "The Union Flag 🇬🇧", back: "Crosses of St George,\nSt Andrew, and St Patrick\n(Wales is NOT on the flag)" },
        { front: "National Anthem of the UK", back: "'God Save the King'" },
        { front: "Official animal of Scotland", back: "The Unicorn (symbol of purity and power)" },
        { front: "Prince William's current title", back: "The Prince of Wales" }
      ],
    },
    // ===================== 9. TRADITIONS & HOLIDAYS (EXPANDED) =====================
    {
      title: "🎉 9. Traditions & Holidays",
      cards: [
        { front: "Hogmanay 🎆", back: "Scottish New Year's Eve\nBigger than Christmas\nin Scotland traditionally" },
        { front: "Diwali 🪔", back: "Festival of Lights\nCelebrated by Hindus/Sikhs\nOct/Nov (Victory of Light)" },
        { front: "Remembrance Day 🌹", back: "Nov 11th at 11am\nCommemorates WW1 end\n2-minute silence" },
        { front: "Boxing Day (Dec 26) 📦", back: "Traditionally gave gifts to servants; now football & shopping" },
        { front: "Bonfire Night (Guy Fawkes Night)", back: "Nov 5th – fireworks & bonfires to mark failed 1605 plot" },
        { front: "What is 'Shrove Tuesday'?", back: "Pancake Day, day before Lent starts" },
        { front: "Lent", back: "Begins on Ash Wednesday (40 days before Easter)" },
        { front: "TV Licence concessions", back: "Free for those over 75; 50% discount for blind people" }
      ],
    },
    // ===================== 10. ARTS & SCIENCE (EXPANDED) =====================
    {
      title: "💡 10. Arts & Science",
      cards: [
        { front: "The Proms 🎻", back: "8-week summer concert\nseries at Royal Albert Hall\nMainly classical music" },
        { front: "Alexander Fleming 💊", back: "Scottish scientist\nDiscovered Penicillin (1928)" },
        { front: "The Turner Prize 🎨", back: "Established in 1984\nCelebrates contemporary art" },
        { front: "William Shakespeare ✍️", back: "Playwright, 'Hamlet', 'Romeo and Juliet', 'Macbeth'" },
        { front: "Charles Darwin 🌿", back: "Theory of evolution, 'On the Origin of Species' (1859)" },
        { front: "The Beatles 🎸", back: "Rock band from Liverpool (1960s), global music icons" },
        { front: "George Frideric Handel", back: "Composed Water Music for George I and Royal Fireworks for George II" },
        { front: "Tim Berners-Lee", back: "Invented the World Wide Web" },
        { front: "Alan Turing", back: "Invented the Turing Machine – a major British innovation" },
        { front: "Sake Dean Mahomet", back: "Introduced the art of shampooing (head massage) to Britain" },
        { front: "The Bayeux Tapestry", back: "Commemorates the Battle of Hastings (1066) and is located in France" }
      ],
    },
    // ===================== 11. BRITISH VALUES & SOCIETY (EXPANDED) =====================
    {
      title: "🏅 11. British Values",
      cards: [
        { front: "What are the 5 fundamental British values?", back: "Democracy, Rule of law, Individual liberty, Mutual respect, Tolerance of different faiths" },
        { front: "What is the official religion?", back: "Christianity (Church of England is established in England)" },
        { front: "What does 'Rule of Law' mean?", back: "No one is above the law; laws apply equally to all" },
        { front: "Tolerance in the UK", back: "Respect for different religions, beliefs, and lifestyles" },
        { front: "Commonwealth: Can it suspend members?", back: "Yes, it can suspend membership but has no power over members" },
        { front: "EU Referendum date", back: "Held on 23 June 2016" },
        { front: "EU Exit date", back: "The UK formally left on 31 January 2020" },
        { front: "Recycling: Why important?", back: "Uses less energy than raw materials and reduces landfill" }
      ],
    },
    // ===================== 12. THE MONARCHY & ROYAL FAMILY =====================
    {
      title: "👑 12. The Monarchy",
      cards: [
        { front: "Who is the current monarch?", back: "King Charles III (since 8 September 2022)" },
        { front: "What is the role of the monarch?", back: "Head of state, appoints PM, opens Parliament, royal assent to laws" },
        { front: "Who is the heir to the throne?", back: "Prince William, Duke of Cornwall and Cambridge (eldest son of Charles III)" },
        { front: "What is the 'Privy Council'?", back: "Advises the monarch; includes senior politicians and judges" },
        { front: "The Queen's official birthday", back: "Celebrated in June with Trooping the Colour (actual birthday 21 April)" }
      ],
    },
    // ===================== 13. ELECTIONS & VOTING =====================
    {
      title: "🗳️ 13. Elections & Voting",
      cards: [
        { front: "How often are general elections?", back: "At least every 5 years (Fixed-term Parliaments Act)" },
        { front: "Voting age in the UK", back: "18 years old (16 in Scottish local elections)" },
        { front: "What is 'First Past the Post'?", back: "Voting system for UK general elections – candidate with most votes wins constituency" },
        { front: "Who can stand as an MP?", back: "British/Commonwealth/Irish citizen aged 18+, not disqualified (e.g., undischarged bankrupt)" },
        { front: "What is a constituency?", back: "Geographical area represented by one MP" },
        { front: "Who runs the election count?", back: "Returning Officer (local council official)" }
      ],
    },
    // ===================== 14. UK PARLIAMENT & GOVERNMENT =====================
    {
      title: "🏛️ 14. Parliament & Government",
      cards: [
        { front: "What are the three parts of Parliament?", back: "The Sovereign (King), House of Lords, House of Commons" },
        { front: "How many MPs in the House of Commons?", back: "650 (as of 2024)" },
        { front: "What is the role of the Prime Minister?", back: "Head of government, appoints ministers, leads Cabinet" },
        { front: "What is 'Question Time'?", back: "Hour where MPs question ministers on policies (Mon-Wed)" },
        { front: "What is the 'Official Opposition'?", back: "Largest party not in government; led by Leader of the Opposition" }
      ],
    },
    // ===================== 15. JUSTICE SYSTEM & POLICE =====================
    {
      title: "⚖️ 15. Justice System",
      cards: [
        { front: "What are the two types of law?", back: "Criminal law (punish offenders) and Civil law (disputes between individuals)" },
        { front: "Highest court in the UK", back: "Supreme Court (since 2009, replaced House of Lords)" },
        { front: "What is a magistrate?", back: "Volunteer judge (no legal qualification) hears minor criminal cases" },
        { front: "Scottish courts unique feature", back: "Three possible verdicts: guilty, not guilty, not proven" },
        { front: "Role of the police", back: "Maintain public order, prevent and investigate crime" }
      ],
    },
    // ===================== 16. BRITAIN & THE WORLD =====================
    {
      title: "🌐 16. Britain & the World",
      cards: [
        { front: "What is the Commonwealth?", back: "56 independent countries (mostly former British territories), voluntary association" },
        { front: "When did the UK join the EU?", back: "1973 (then EEC) – left on 31 Jan 2020 (Brexit)" },
        { front: "UK's permanent seat at?", back: "UN Security Council (one of five veto powers)" },
        { front: "What is NATO?", back: "North Atlantic Treaty Organization – military alliance, UK founding member 1949" },
        { front: "The 'Special Relationship'", back: "Close political & military ties between UK and USA" }
      ],
    },
    // ===================== 17. LITERATURE & FAMOUS WRITERS =====================
    {
      title: "📖 17. Literature & Writers",
      cards: [
        { front: "Jane Austen 📚", back: "Novels: 'Pride and Prejudice', 'Sense and Sensibility'" },
        { front: "Charles Dickens 🎩", back: "'Oliver Twist', 'Great Expectations', highlighted social inequality" },
        { front: "Robert Burns 🏴󠁧󠁢󠁳󠁣󠁴󠁿", back: "Scottish poet, 'Auld Lang Syne', Burns Night Jan 25" },
        { front: "J.K. Rowling ⚡", back: "'Harry Potter' series, one of best-selling authors" },
        { front: "Who wrote 'The Hobbit'?", back: "J.R.R. Tolkien (Oxford academic)" }
      ],
    },
    // ===================== 18. SPORTS & ICONS (EXPANDED) =====================
    {
      title: "⚽ 18. Sports & Icons",
      cards: [
        { front: "Where was football (soccer) codified?", back: "England (Football Association founded 1863)" },
        { front: "The Wimbledon Championships 🎾", back: "Oldest tennis tournament, held in London since 1877" },
        { front: "Who is Sir Andy Murray?", back: "Scottish tennis player, won Wimbledon 2013 & 2016" },
        { front: "The Ashes 🏏", back: "Cricket series between England and Australia" },
        { front: "The London Marathon 🏃", back: "Annual race since 1981, famous charity event" },
        { front: "Sir Steve Redgrave", back: "Won 5 consecutive gold medals in Rowing" },
        { front: "Dame Kelly Holmes", back: "Won 2 gold medals in Running (2004)" },
        { front: "Rugby origins", back: "Originated in England in the early 19th century" },
        { front: "Formula 1 stars from the UK", back: "Lewis Hamilton, Jenson Button, Damon Hill" }
      ],
    },
    // ===================== 19. EVERYDAY LIFE & SERVICES (EXPANDED) =====================
    {
      title: "🏡 19. Everyday Life",
      cards: [
        { front: "What is the national currency?", back: "Pound sterling (£), divided into 100 pence" },
        { front: "Typical TV licence fee (colour TV)", back: "£159 per year (funds the BBC, no ads)" },
        { front: "What is the NHS?", back: "National Health Service – publicly funded healthcare, founded 1948" },
        { front: "What is the driving age?", back: "17 (16 for mopeds in some areas)" },
        { front: "The London Eye", back: "Built as part of the UK's celebration of the New Millennium" },
        { front: "Millennium Projects", back: "The O2 and the London Eye were both Millennium landmarks" }
      ],
    },
    // ===================== 20. LOCAL GOVERNMENT & DEVOLUTION =====================
    {
      title: "🏛️ 20. Local Government",
      cards: [
        { front: "What is a council?", back: "Local authority responsible for schools, rubbish, housing, planning" },
        { front: "What is the 'Mayor of London'?", back: "Elected leader of Greater London Authority (since 2000)" },
        { front: "Which UK nations have devolved parliaments?", back: "Scotland (Scottish Parliament), Wales (Senedd), Northern Ireland (Assembly)" },
        { front: "What powers does the Scottish Parliament have?", back: "Education, health, justice, some tax powers" },
        { front: "Number of members in Scottish Parliament", back: "129" },
        { front: "Number of members in Welsh Senedd", back: "60" }
      ],
    },
    // ===================== 21. MIGRATION & CITIZENSHIP =====================
    {
      title: "🛂 21. Migration & Citizenship",
      cards: [
        { front: "Life in the UK Test required for?", back: "Indefinite leave to remain or naturalisation as British citizen" },
        { front: "Passing score for Life in the UK test", back: "75% (18 out of 24 questions correct)" },
        { front: "What is the 'Indefinite Leave to Remain' (ILR)?", back: "Permanent residence, allows work without visa restrictions" },
        { front: "How long to qualify for citizenship?", back: "Usually 5 years residence + 12 months with ILR" }
      ],
    },
    // ===================== 22. KEY DATES & QUICK FACTS (NEW) =====================
    {
      title: "📅 22. Key Dates & Quick Facts",
      cards: [
        { front: "1066", back: "Battle of Hastings (William the Conqueror)" },
        { front: "1215", back: "Magna Carta – established that even the King is subject to the law" },
        { front: "1588", back: "Defeat of the Spanish Armada (Elizabeth I)" },
        { front: "1688", back: "The Glorious Revolution – guaranteed the power of Parliament over the King" },
        { front: "1805", back: "Battle of Trafalgar (Admiral Nelson died; statue in Trafalgar Square)" },
        { front: "1815", back: "Battle of Waterloo (Duke of Wellington defeated Napoleon)" },
        { front: "1918 & 1928", back: "1918: Women over 30 got the vote\n1928: Women got equal voting rights at 21" },
        { front: "Skara Brae", back: "Best-preserved prehistoric village in Northern Europe (Orkney, Scotland)" },
        { front: "Sutton Hoo", back: "Famous Anglo-Saxon burial site (Suffolk, England)" },
        { front: "National Trust founded", back: "1895" }
      ],
    },
  ];

  const totalCards = sections.reduce((sum, section) => sum + section.cards.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <style>{`
        .perspective { perspective: 1000px; }
        .transform-style { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">🇬🇧 Life in the UK • Duolingo-style</h1>
          <p className="text-slate-500 font-medium">Master the official test, one flip at a time.</p>
          <div className="mt-4 flex justify-center gap-2 flex-wrap">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">{totalCards} Flashcards</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">45 minutes test</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">75% to pass (18/24)</span>
          </div>
        </header>

        {sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-xl font-bold text-slate-800 mb-6 border-b-2 border-slate-200 pb-2">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.cards.map((card, idx) => (
                <FlashCard key={idx} card={card} index={idx + i * 100} />
              ))}
            </div>
          </section>
        ))}

        <footer className="text-center py-10 border-t border-slate-200 text-slate-400 text-sm">
          🎓 Based on official Life in the UK Handbook (3rd edition) & mock test patterns. Keep flipping until it's second nature. Good luck! 🇬🇧
        </footer>
      </div>
    </div>
  );
}