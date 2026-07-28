/**
 * Premium Cheat Sheet Generator
 * Generates a beautiful HTML cheat sheet with timeline, diagrams, and reference tables.
 * Run with: node scripts/generate_cheatsheet.js
 * Open the output in a browser and Print → Save as PDF.
 */

const fs = require('fs');
const path = require('path');

// Load study guide data
const studyGuidePath = path.join(__dirname, '..', 'src', 'studyGuideData.js');
const content = fs.readFileSync(studyGuidePath, 'utf-8');
const match = content.match(/export const sections = (\[[\s\S]*?\n\]);/);
if (!match) {
  console.error('Could not parse studyGuideData.js');
  process.exit(1);
}
const sections = eval(match[1]);

// Built-in timeline data
const timelineEvents = [
  { year: '~10,000 BCE', event: 'Channel forms, Britain becomes an island', cat: 'Prehistory' },
  { year: '~4000 BCE', event: 'First farmers arrive from SE Europe', cat: 'Prehistory' },
  { year: '~2500 BCE', event: 'Stonehenge completed', cat: 'Prehistory' },
  { year: '55 BCE', event: 'Julius Caesar invades Britain', cat: 'Roman' },
  { year: '43 CE', event: 'Emperor Claudius conquers Britain', cat: 'Roman' },
  { year: '122 CE', event: 'Hadrian\'s Wall built', cat: 'Roman' },
  { year: '410 CE', event: 'Romans leave Britain', cat: 'Roman' },
  { year: '~500 CE', event: 'Anglo-Saxon kingdoms established', cat: 'Saxon/Viking' },
  { year: '789 CE', event: 'First Viking raids', cat: 'Saxon/Viking' },
  { year: '871 CE', event: 'Alfred the Great becomes king', cat: 'Saxon/Viking' },
  { year: '1066', event: 'Battle of Hastings – Norman Conquest', cat: 'Medieval' },
  { year: '1086', event: 'Domesday Book completed', cat: 'Medieval' },
  { year: '1215', event: 'Magna Carta signed at Runnymede', cat: 'Medieval' },
  { year: '1284', event: 'Statute of Rhuddlan – Wales annexed', cat: 'Medieval' },
  { year: '1314', event: 'Battle of Bannockburn', cat: 'Medieval' },
  { year: '1348', event: 'Black Death arrives in Britain', cat: 'Medieval' },
  { year: '1455-85', event: 'Wars of the Roses', cat: 'Medieval' },
  { year: '1534', event: 'Act of Supremacy – Church of England', cat: 'Tudor' },
  { year: '1558-1603', event: 'Elizabeth I – Golden Age', cat: 'Tudor' },
  { year: '1588', event: 'Defeat of Spanish Armada', cat: 'Tudor' },
  { year: '1603', event: 'Union of the Crowns (James VI & I)', cat: 'Stuart' },
  { year: '1605', event: 'Gunpowder Plot', cat: 'Stuart' },
  { year: '1642-51', event: 'English Civil War', cat: 'Stuart' },
  { year: '1649', event: 'Charles I executed', cat: 'Stuart' },
  { year: '1660', event: 'The Restoration (Charles II)', cat: 'Stuart' },
  { year: '1665', event: 'Great Plague of London', cat: 'Stuart' },
  { year: '1666', event: 'Great Fire of London', cat: 'Stuart' },
  { year: '1688', event: 'Glorious Revolution', cat: 'Stuart' },
  { year: '1689', event: 'Bill of Rights', cat: 'Empire' },
  { year: '1707', event: 'Act of Union (England & Scotland)', cat: 'Empire' },
  { year: '1721-42', event: 'Sir Robert Walpole (first PM)', cat: 'Empire' },
  { year: '1746', event: 'Battle of Culloden – Jacobites defeated', cat: 'Empire' },
  { year: '1776', event: 'American Declaration of Independence', cat: 'Empire' },
  { year: '1805', event: 'Battle of Trafalgar (Nelson)', cat: 'Empire' },
  { year: '1807', event: 'Slave Trade Act (abolition)', cat: 'Empire' },
  { year: '1815', event: 'Battle of Waterloo', cat: 'Empire' },
  { year: '1832', event: 'First Reform Act (voting)', cat: 'Empire' },
  { year: '1833', event: 'Slavery Abolition Act', cat: 'Empire' },
  { year: '1837-1901', event: 'Victorian Age', cat: 'Empire' },
  { year: '1848', event: 'Public Health Act', cat: 'Modern' },
  { year: '1903', event: 'Women\'s Social & Political Union', cat: 'Modern' },
  { year: '1914-18', event: 'First World War', cat: 'Modern' },
  { year: '1918', event: 'Women over 30 get vote', cat: 'Modern' },
  { year: '1928', event: 'Equal voting rights at 21', cat: 'Modern' },
  { year: '1939-45', event: 'Second World War', cat: 'Modern' },
  { year: '1940', event: 'Battle of Britain', cat: 'Modern' },
  { year: '1945', event: 'Welfare State begins (Attlee)', cat: 'Modern' },
  { year: '1948', event: 'NHS founded; Windrush arrives', cat: 'Modern' },
  { year: '1973', event: 'UK joins EEC (Common Market)', cat: 'Modern' },
  { year: '1979-90', event: 'Margaret Thatcher PM', cat: 'Modern' },
  { year: '1998', event: 'Good Friday Agreement', cat: 'Modern' },
  { year: '1999', event: 'Devolution (Scottish/Welsh parliaments)', cat: 'Modern' },
  { year: '2016', event: 'Brexit referendum (Leave 51.9%)', cat: 'Modern' },
  { year: '2020', event: 'UK formally leaves EU (Jan 31)', cat: 'Modern' },
  { year: '2022', event: 'Queen Elizabeth II dies; Charles III King', cat: 'Modern' },
];

const catColors = {
  'Prehistory': '#8B5CF6',
  'Roman': '#EF4444',
  'Saxon/Viking': '#F59E0B',
  'Medieval': '#3B82F6',
  'Tudor': '#EC4899',
  'Stuart': '#10B981',
  'Empire': '#6366F1',
  'Modern': '#14B8A6',
};

// Government people/organizations
const govPeople = [
  { role: '👑 The Monarch', name: 'King Charles III', detail: 'Head of State, opens Parliament, Royal Assent' },
  { role: '🏛️ Prime Minister', name: 'Keir Starmer (since Jul 2024)', detail: 'Head of Government, appoints ministers' },
  { role: '📋 Cabinet', name: '~22 senior ministers', detail: 'Meet weekly, decide government policy' },
  { role: '🗳️ House of Commons', name: '650 MPs', detail: 'Elected, pass laws, scrutinise government' },
  { role: '👑 House of Lords', name: '~800 Lords', detail: 'Life peers, bishops, hereditary; review & amend' },
  { role: '⚖️ Supreme Court', name: '12 Justices', detail: 'Highest UK court (since 2009)' },
  { role: '🏛️ Devolved Govts', name: 'Scotland, Wales, NI', detail: 'Health, education, transport, justice' },
  { role: '🏛️ Local Councils', name: '340+ councils', detail: 'Schools, bins, housing, planning' },
];

// Key monarchs
const monarchs = [
  { name: 'William I (Conqueror)', reign: '1066-1087', note: 'Norman Conquest, Domesday Book' },
  { name: 'Henry II', reign: '1154-1189', note: 'First Plantagenet, common law' },
  { name: 'John', reign: '1199-1216', note: 'Magna Carta (1215)' },
  { name: 'Edward I', reign: '1272-1307', note: 'Conquered Wales, Model Parliament' },
  { name: 'Henry VIII', reign: '1509-1547', note: 'Church of England, 6 wives' },
  { name: 'Elizabeth I', reign: '1558-1603', note: 'Golden Age, Spanish Armada' },
  { name: 'Charles I', reign: '1625-1649', note: 'Executed after Civil War' },
  { name: 'Charles II', reign: '1660-1685', note: 'The Restoration' },
  { name: 'Victoria', reign: '1837-1901', note: 'Largest empire, longest reign' },
  { name: 'Elizabeth II', reign: '1952-2022', note: 'Longest-reigning British monarch' },
  { name: 'Charles III', reign: '2022–', note: 'Current monarch' },
];

const patronSaints = [
  { saint: 'St George 🏴󠁧󠁢󠁥󠁮󠁧󠁿', day: '23 Apr', place: 'England', symbol: 'Red cross on white (flag)' },
  { saint: 'St Andrew 🏴󠁧󠁢󠁳󠁣󠁴󠁿', day: '30 Nov', place: 'Scotland', symbol: 'White diagonal on blue (flag)' },
  { saint: 'St David 🏴󠁧󠁢󠁷󠁬󠁳󠁿', day: '1 Mar', place: 'Wales', symbol: 'Daffodil' },
  { saint: 'St Patrick ☘️', day: '17 Mar', place: 'N Ireland', symbol: 'Shamrock' },
];

const ukSymbols = [
  { item: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', flower: '🌹 Rose', day: 'St George (23 Apr)' },
  { item: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland', flower: '🌱 Thistle', day: 'St Andrew (30 Nov)' },
  { item: '🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales', flower: '🌼 Daffodil', day: 'St David (1 Mar)' },
  { item: '☘️ N Ireland', flower: '🍀 Shamrock', day: 'St Patrick (17 Mar)' },
];

const britishValues = {
  five: ['Democracy', 'Rule of Law', 'Individual Liberty', 'Tolerance of different faiths', 'Participation in community life'],
  freedoms: ['Freedom of belief & religion', 'Freedom of speech', 'Freedom from unfair discrimination', 'Right to a fair trial', 'Right to vote'],
  responsibilities: ['Respect & obey the law', 'Respect others\' rights', 'Treat others with fairness', 'Look after yourself & family', 'Look after your area & environment'],
};

const keyDates = [
  { year: '1215', event: 'Magna Carta' },
  { year: '1314', event: 'Bannockburn' },
  { year: '1534', event: 'Anglican Church' },
  { year: '1588', event: 'Spanish Armada' },
  { year: '1605', event: 'Gunpowder Plot' },
  { year: '1642-51', event: 'Civil War' },
  { year: '1666', event: 'Great Fire' },
  { year: '1688-89', event: 'Glorious Rev & Bill of Rights' },
  { year: '1707', event: 'Act of Union (GB)' },
  { year: '1805', event: 'Trafalgar' },
  { year: '1807', event: 'Slave Trade Abolished' },
  { year: '1815', event: 'Waterloo' },
  { year: '1832', event: 'Reform Act' },
  { year: '1914-18', event: 'WWI' },
  { year: '1928', event: 'Equal Votes' },
  { year: '1940', event: 'Battle of Britain' },
  { year: '1948', event: 'NHS founded' },
  { year: '1998', event: 'Good Friday Agreement' },
];

const inventions = [
  { invention: 'Television 📺', inventor: 'John Logie Baird', year: '1920s' },
  { invention: 'Radar 📡', inventor: 'Robert Watson-Watt', year: '1935' },
  { invention: 'Jet Engine ✈️', inventor: 'Frank Whittle', year: '1930s' },
  { invention: 'World Wide Web 🌐', inventor: 'Tim Berners-Lee', year: '1990' },
  { invention: 'Penicillin 💊', inventor: 'Alexander Fleming', year: '1928' },
  { invention: 'DNA Structure 🧬', inventor: 'Crick & Watson', year: '1953' },
  { invention: 'ATM 🏧', inventor: 'James Goodfellow', year: '1967' },
  { invention: 'Hovercraft 🚤', inventor: 'Christopher Cockerell', year: '1950s' },
  { invention: 'IVF 👶', inventor: 'Edwards & Steptoe', year: '1978' },
  { invention: 'MRI Scanner 🏥', inventor: 'Peter Mansfield', year: '1970s' },
];

// Build the HTML
let html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Life in the UK Premium Cheat Sheet</title>
<style>
  @page { margin: 0.5in; size: A4; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1e293b; background: #f8fafc; padding: 20px; }
  .page { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border-radius: 16px; }
  h1 { font-size: 28px; text-align: center; color: #1e3a5f; margin-bottom: 4px; }
  .subtitle { text-align: center; color: #64748b; font-size: 14px; margin-bottom: 24px; }
  h2 { font-size: 20px; color: #1e3a5f; border-bottom: 3px solid #3b82f6; padding-bottom: 6px; margin: 28px 0 16px; display: flex; align-items: center; gap: 8px; }
  h3 { font-size: 15px; color: #334155; margin: 14px 0 8px; }
  .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .three-col { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

  /* Timeline */
  .timeline { position: relative; padding: 0; }
  .timeline::before { content: ''; position: absolute; left: 120px; top: 0; bottom: 0; width: 3px; background: #e2e8f0; }
  .tl-item { display: flex; margin-bottom: 3px; align-items: baseline; position: relative; }
  .tl-year { width: 110px; text-align: right; padding-right: 16px; font-weight: 700; font-size: 12px; color: #475569; flex-shrink: 0; }
  .tl-dot { position: absolute; left: 116px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; top: 3px; }
  .tl-event { padding-left: 24px; font-size: 11px; color: #334155; line-height: 1.3; }

  /* Government cards */
  .gov-card { background: #f1f5f9; border-radius: 10px; padding: 12px; border-left: 4px solid #3b82f6; }
  .gov-card .role { font-weight: 700; font-size: 13px; color: #1e293b; }
  .gov-card .name { font-size: 12px; color: #475569; }
  .gov-card .detail { font-size: 11px; color: #64748b; margin-top: 2px; }

  /* Tables */
  table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 8px; }
  th { background: #1e3a5f; color: white; padding: 6px 8px; text-align: left; font-weight: 600; }
  td { padding: 5px 8px; border-bottom: 1px solid #e2e8f0; }
  tr:nth-child(even) td { background: #f8fafc; }
  .tag { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 1px 7px; border-radius: 10px; font-size: 9px; font-weight: 600; }

  /* Values */
  .value-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .value-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 12px; }
  .value-box h3 { color: #166534; margin: 0 0 6px; font-size: 13px; }
  .value-box li { font-size: 11px; margin: 3px 0; list-style: none; padding-left: 14px; position: relative; }
  .value-box li::before { content: '✓'; position: absolute; left: 0; color: #16a34a; font-weight: bold; }

  /* Invention cards */
  .inv-card { background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 8px; text-align: center; }
  .inv-card .name { font-weight: 700; font-size: 12px; }
  .inv-card .detail { font-size: 10px; color: #64748b; }

  /* Monarch cards */
  .monarch-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px; }
  .monarch-item { background: #f8fafc; padding: 8px 10px; border-radius: 8px; border-left: 3px solid #6366f1; }
  .monarch-item .name { font-weight: 700; font-size: 12px; }
  .monarch-item .meta { font-size: 10px; color: #64748b; }

  /* Saints */
  .saints { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10px; }
  .saint-card { background: linear-gradient(135deg, #fef2f2, #fff7ed); border: 1px solid #fecaca; border-radius: 10px; padding: 12px; text-align: center; }
  .saint-card .saint { font-weight: 700; font-size: 13px; }
  .saint-card .info { font-size: 11px; color: #475569; }

  .footer { text-align: center; margin-top: 24px; padding-top: 16px; border-top: 2px solid #e2e8f0; font-size: 11px; color: #94a3b8; }

  /* Prevent section splitting across print pages */
  .section { margin-bottom: 20px; }
  h2 { break-after: avoid; page-break-after: avoid; }

  @media print {
    body { background: white; padding: 0; }
    .page { box-shadow: none; border-radius: 0; padding: 15px; max-width: 100%; }
    .section { break-inside: avoid; page-break-inside: avoid; }
    .tl-item { break-inside: avoid; }
    .gov-card, .value-box, .monarch-item, .inv-card, .saint-card { break-inside: avoid; }
    table { break-inside: avoid; page-break-inside: avoid; }
    .two-col, .three-col, .value-grid, .saints { break-inside: avoid; page-break-inside: avoid; }
  }
  @media (max-width: 800px) { .two-col, .three-col, .value-grid { grid-template-columns: 1fr; } }
</style>
</head>
<body>
<div class="page">
  <h1>📖 Life in the UK – Premium Cheat Sheet</h1>
  <p class="subtitle">Quick reference guide: timeline, government, key facts, British values | Print to PDF for offline use</p>

  <section class="section">
  <!-- TIMELINE -->
  <h2>⏳ British History Timeline</h2>
  <div class="timeline">`;

for (const ev of timelineEvents) {
  const color = catColors[ev.cat] || '#64748b';
  html += `
    <div class="tl-item">
      <span class="tl-year">${ev.year}</span>
      <span class="tl-dot" style="background:${color};"></span>
      <span class="tl-event"><span class="tag" style="background:${color}20;color:${color};">${ev.cat}</span> ${ev.event}</span>
    </div>`;
}

html += `</div></section>

  <section class="section">
  <!-- GOVERNMENT -->
  <h2>🏛️ UK Government Structure</h2>
  <div class="two-col">`;
for (const p of govPeople) {
  html += `
    <div class="gov-card">
      <div class="role">${p.role}</div>
      <div class="name">${p.name}</div>
      <div class="detail">${p.detail}</div>
    </div>`;
}
html += `</div></section>

  <section class="section">
  <!-- KEY DATES & MONARCHS -->
  <h2>📅 Key Dates & Monarchs</h2>
  <div class="two-col">
    <div>
      <h3>📌 Must-Know Dates</h3>
      <table><thead><tr><th>Year</th><th>Event</th></tr></thead><tbody>`;
for (const d of keyDates) {
  html += `<tr><td><strong>${d.year}</strong></td><td>${d.event}</td></tr>`;
}
html += `</tbody></table></div><div>
      <h3>👑 Key Monarchs</h3>
      <table><thead><tr><th>Monarch</th><th>Reign</th><th>Key Fact</th></tr></thead><tbody>`;
for (const m of monarchs) {
  html += `<tr><td><strong>${m.name}</strong></td><td>${m.reign}</td><td>${m.note}</td></tr>`;
}
html += `</tbody></table></div></div></section>

  <section class="section">
  <!-- PATRON SAINTS & SYMBOLS -->
  <h2>🌸 Patron Saints & National Symbols</h2>
  <div class="saints">`;
for (const s of patronSaints) {
  html += `
    <div class="saint-card">
      <div class="saint">${s.saint}</div>
      <div class="info">${s.day} · ${s.place}</div>
      <div class="info" style="font-size:10px;">${s.symbol}</div>
    </div>`;
}
html += `</div>
  <div class="two-col" style="margin-top:10px;margin-bottom:8px;">`;
for (const s of ukSymbols) {
  html += `<div style="background:#f8fafc;padding:8px 12px;border-radius:8px;font-size:12px;"><strong>${s.item}</strong> · ${s.flower} · ${s.day}</div>`;
}
html += `</div></section>

  <section class="section">
  <!-- BRITISH VALUES -->
  <h2>🏅 British Values & Principles</h2>
  <div class="value-grid">
    <div class="value-box" style="grid-column:1;">
      <h3>🌟 5 Fundamental Values</h3>
      <ul>${britishValues.five.map(v => `<li>${v}</li>`).join('')}</ul>
    </div>
    <div class="value-box" style="grid-column:2;">
      <h3>🗽 Freedoms the UK Offers</h3>
      <ul>${britishValues.freedoms.map(v => `<li>${v}</li>`).join('')}</ul>
    </div>
    <div class="value-box" style="grid-column:1 / span 2;">
      <h3>🏡 Responsibilities</h3>
      <ul>${britishValues.responsibilities.map(v => `<li>${v}</li>`).join('')}</ul>
    </div>
  </div></section>

  <section class="section">
  <!-- BRITISH INVENTIONS -->
  <h2>🔬 British Inventions & Discoveries</h2>
  <div class="three-col">`;
for (const inv of inventions) {
  html += `
    <div class="inv-card">
      <div class="name">${inv.invention}</div>
      <div class="detail">${inv.inventor} (${inv.year})</div>
    </div>`;
}
html += `</div></section>

  <section class="section">
  <!-- TEST INFO -->
  <h2>📝 Life in the UK Test</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
    <div style="background:#e0f2fe;border-radius:10px;padding:12px;text-align:center;">
      <div style="font-size:28px;margin-bottom:4px;">24</div>
      <div style="font-weight:700;font-size:13px;">Questions</div>
      <div style="font-size:11px;color:#475569;">Randomly selected from official handbook</div>
    </div>
    <div style="background:#dcfce7;border-radius:10px;padding:12px;text-align:center;">
      <div style="font-size:28px;margin-bottom:4px;">75%</div>
      <div style="font-weight:700;font-size:13px;">Pass Mark</div>
      <div style="font-size:11px;color:#475569;">18 out of 24 correct to pass</div>
    </div>
    <div style="background:#fef9c3;border-radius:10px;padding:12px;text-align:center;">
      <div style="font-size:28px;margin-bottom:4px;">45 min</div>
      <div style="font-weight:700;font-size:13px;">Time Limit</div>
      <div style="font-size:11px;color:#475569;">At approved test centres across UK</div>
    </div>
  </div></section>

  <section class="section">
  <!-- STUDY GUIDE SECTIONS -->
  <h2>📚 Study Guide Overview</h2>
  <table><thead><tr><th>#</th><th>Section</th><th>Cards</th></tr></thead><tbody>`;
for (const s of sections) {
  const num = s.title.match(/(\\d+)/)?.[1] || '';
  html += `<tr><td>${num}</td><td>${s.title.replace(/\\d+\\. /, '')}</td><td>${s.cards.length}</td></tr>`;
}
html += `</tbody></table></section>

  <div class="footer">
    Generated from lifeinukcoach.co.uk study guide · ${sections.reduce((a, s) => a + s.cards.length, 0)} flashcards across ${sections.length} sections · Print as PDF for offline use
  </div>
</div>
</body>
</html>`;

// Write output
const outputPath = path.join(__dirname, '..', 'public', 'premium-cheat-sheet.html');
fs.writeFileSync(outputPath, html);
console.log('✅ Premium cheat sheet generated: public/premium-cheat-sheet.html');
console.log(`   ${timelineEvents.length} timeline events`);
console.log(`   ${sections.length} study guide sections`);
console.log(`   Open in browser → Print → Save as PDF`);
