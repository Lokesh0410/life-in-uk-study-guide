// src/utils/generateCheatSheet.js
// Shared premium cheat sheet PDF generator used by both App.js and MockExam.js.
// Accepts a jsPDF instance and renders the full multi-page cheat sheet.

// Clean text for PDF - strip emoji/non-ASCII that jsPDF can't render
export const cleanPDF = (t) => (t || '').replace(/[^\x20-\x7E\n\r\t]/gu, '').trim();

export const generateCheatSheet = (doc, sections, autoTable) => {
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 14;
    const contentW = pageW - margin * 2;

    const sectionTitle = (text, y) => {
        doc.setFontSize(15);
        doc.setTextColor(63, 81, 181);
        doc.text(cleanPDF(text), margin, y);
        doc.setDrawColor(63, 81, 181);
        doc.setLineWidth(0.5);
        doc.line(margin, y + 1, pageW - margin, y + 1);
        return y + 8;
    };

    const bodyText = (text, y, size = 9) => {
        doc.setFontSize(size);
        doc.setTextColor(60, 60, 60);
        doc.text(cleanPDF(text), margin, y);
        return y + size * 0.45;
    };

    // ============== PAGE 1: TITLE + TIMELINE + GOVERNMENT ==============
    doc.setFontSize(24);
    doc.setTextColor(63, 81, 181);
    doc.text('Life in the UK 2026', pageW / 2, 18, { align: 'center' });
    doc.setFontSize(13);
    doc.setTextColor(100, 100, 100);
    doc.text('Premium Study Guide & Quick Reference', pageW / 2, 25, { align: 'center' });
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('Exclusive offline review material -- print and study anywhere', pageW / 2, 30, { align: 'center' });

    let y = 38;

    // --- 1. British History Timeline ---
    y = sectionTitle('British History Timeline', y);
    const timeline = [
        ['~10,000 BCE', 'Channel forms - Britain becomes an island'],
        ['~4000 BCE', 'First farmers arrive from SE Europe'],
        ['~2500 BCE', 'Stonehenge completed'],
        ['55 BCE', 'Julius Caesar invades Britain'],
        ['43 CE', 'Claudius conquers Britain'],
        ['122 CE', "Hadrian's Wall built"],
        ['410 CE', 'Romans leave Britain'],
        ['~500 CE', 'Anglo-Saxon kingdoms established'],
        ['789 CE', 'First Viking raids'],
        ['871 CE', 'Alfred the Great becomes king'],
        ['1066', 'Battle of Hastings - Norman Conquest'],
        ['1086', 'Domesday Book completed'],
        ['1215', 'Magna Carta signed at Runnymede'],
        ['1284', 'Statute of Rhuddlan - Wales annexed'],
        ['1314', 'Battle of Bannockburn'],
        ['1348', 'Black Death arrives'],
        ['1455-85', 'Wars of the Roses'],
        ['1534', 'Act of Supremacy - Church of England'],
        ['1558-1603', 'Elizabeth I - Golden Age'],
        ['1588', 'Defeat of Spanish Armada'],
        ['1603', 'Union of the Crowns (James VI & I)'],
        ['1605', 'Gunpowder Plot'],
        ['1642-51', 'English Civil War'],
        ['1649', 'Charles I executed'],
        ['1660', 'The Restoration (Charles II)'],
        ['1665', 'Great Plague of London'],
        ['1666', 'Great Fire of London'],
        ['1688', 'Glorious Revolution'],
        ['1689', 'Bill of Rights'],
        ['1707', 'Act of Union (England & Scotland)'],
        ['1721-42', 'Sir Robert Walpole (first PM)'],
        ['1746', 'Battle of Culloden - Jacobites defeated'],
        ['1776', 'American Declaration of Independence'],
        ['1805', 'Battle of Trafalgar (Nelson)'],
        ['1807', 'Slave Trade Act (abolition)'],
        ['1815', 'Battle of Waterloo'],
        ['1832', 'First Reform Act (voting rights)'],
        ['1837-1901', 'Victorian Age'],
        ['1848', 'Public Health Act'],
        ['1903', "Women's Social & Political Union founded"],
        ['1914-18', 'First World War'],
        ['1918', 'Women over 30 get the vote'],
        ['1928', 'Equal voting rights at 21'],
        ['1939-45', 'Second World War'],
        ['1940', 'Battle of Britain'],
        ['1945', 'Welfare State begins (Attlee)'],
        ['1948', 'NHS founded; Windrush arrives'],
        ['1973', 'UK joins EEC (Common Market)'],
        ['1979-90', 'Margaret Thatcher PM'],
        ['1998', 'Good Friday Agreement'],
        ['1999', 'Devolution (Scottish/Welsh parliaments)'],
        ['2016', 'Brexit referendum (Leave 51.9%)'],
        ['2020', 'UK formally leaves EU (Jan 31)'],
        ['2022', 'Queen Elizabeth II dies; Charles III King'],
    ];
    doc.setFontSize(7);
    const colH = Math.ceil(timeline.length / 2);
    for (let i = 0; i < timeline.length; i++) {
        const col = i < colH ? 0 : 1;
        const idx = i < colH ? i : i - colH;
        const x = margin + col * (contentW / 2);
        const rowY = y + idx * 4.2;
        doc.setTextColor(63, 81, 181);
        doc.setFont(undefined, 'bold');
        doc.text(timeline[i][0], x, rowY);
        doc.setTextColor(60, 60, 60);
        doc.setFont(undefined, 'normal');
        doc.text('  ' + timeline[i][1], x + 28, rowY);
    }
    y += colH * 4.2 + 8;

    if (y > 250) { doc.addPage(); y = 20; }

    // --- 2. UK Government Structure ---
    y = sectionTitle('UK Government Structure', y);
    const gov = [
        ['The Monarch', 'King Charles III', 'Head of State, opens Parliament, Royal Assent on laws'],
        ['Prime Minister', 'Keir Starmer (since Jul 2024)', 'Head of Government, appoints ministers'],
        ['Cabinet', '~22 senior ministers', 'Meet weekly, decide government policy'],
        ['House of Commons', '650 MPs', 'Elected, pass laws, scrutinise government'],
        ['House of Lords', '~800 Lords', 'Life peers, bishops, hereditary; review & amend bills'],
        ['Supreme Court', '12 Justices', 'Highest UK court (since 2009)'],
        ['Devolved Govts', 'Scotland, Wales, NI', 'Health, education, transport, justice powers'],
        ['Local Councils', '340+ councils', 'Schools, bins, housing, planning services'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Role', 'Who', 'Details']].map(r => r.map(cleanPDF)),
        body: gov.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 38 }, 1: { cellWidth: 42 }, 2: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // ============== PAGE 2: KEY DATES + MONARCHS + SAINTS + VALUES ==============
    doc.addPage(); y = 20;

    // --- 3. Key Dates & Monarchs ---
    y = sectionTitle('Must-Know Dates', y);
    const keyDates = [
        ['1215', 'Magna Carta', '1314', 'Bannockburn'],
        ['1534', 'Church of England', '1588', 'Spanish Armada'],
        ['1605', 'Gunpowder Plot', '1642-51', 'Civil War'],
        ['1666', 'Great Fire of London', '1679', 'Habeas Corpus Act'],
        ['1688-89', 'Glorious Rev & Bill of Rights', '1707', 'Act of Union (GB)'],
        ['1801', 'Act of Union with Ireland', '1805', 'Trafalgar'],
        ['1807', 'Slave Trade Abolished', '1815', 'Waterloo'],
        ['1832', 'First Reform Act', '1833', 'Emancipation Act (empire-wide)'],
        ['1846', 'Repeal of Corn Laws', '1867', 'Second Reform Act'],
        ['1914-18', 'WWI', '1918', 'Representation of the People Act'],
        ['1928', 'Equal Franchise Act', '1940', 'Battle of Britain'],
        ['1948', 'NHS founded', '1949', 'Irish Free State becomes republic'],
        ['1957', 'EEC formed', '1969', 'Voting age lowered to 18'],
        ['1975', 'First EU referendum', '1998', 'Good Friday Agreement'],
        ['1999', 'Scottish Parliament & Welsh Assembly', '', ''],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Year', 'Event', 'Year', 'Event']],
        body: keyDates.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 22 }, 1: { cellWidth: 70 }, 2: { cellWidth: 22 }, 3: { cellWidth: 70 } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // Monarchs table
    y = bodyText('Key Monarchs & Royal Houses', y, 11);
    doc.setFont(undefined, 'bold');
    y += 2;
    const monarchs = [
        ['William I (Conqueror)', 'Norman', '1066-1087', 'Norman Conquest, Domesday Book'],
        ['Henry II', 'Plantagenet', '1154-1189', 'First Plantagenet, common law foundation'],
        ['John', 'Plantagenet', '1199-1216', 'Magna Carta signed 1215'],
        ['Edward I', 'Plantagenet', '1272-1307', 'Conquered Wales, Model Parliament'],
        ['Edward III', 'Plantagenet', '1327-1377', "Start of Hundred Years' War with France"],
        ['Wars of the Roses', 'Lancaster/York', '1455-1485', 'Lancaster (red rose) vs York (white rose)'],
        ['Henry VII', 'Tudor', '1485-1509', 'First Tudor king, defeated Richard III at Bosworth'],
        ['Henry VIII', 'Tudor', '1509-1547', 'Church of England, 6 wives'],
        ['Elizabeth I', 'Tudor', '1558-1603', 'Golden Age, Spanish Armada defeat'],
        ['James I', 'Stuart', '1603-1625', 'Union of the Crowns (England & Scotland)'],
        ['Charles I', 'Stuart', '1625-1649', 'Executed after Civil War'],
        ['Oliver Cromwell', 'Commonwealth', '1649-1660', 'Lord Protector; Britain without a monarch'],
        ['Charles II', 'Stuart', '1660-1685', 'The Restoration'],
        ['James II', 'Stuart', '1685-1688', 'Catholic king; conflict with Parliament'],
        ['William III & Mary II', 'Stuart', '1689-1702', 'Glorious Revolution; Bill of Rights (1689)'],
        ['George I', 'Hanover', '1714-1727', 'First Hanoverian king; first PM Robert Walpole'],
        ['George II', 'Hanover', '1727-1760', 'Defeated Jacobites at Culloden (1746)'],
        ['Victoria', 'Hanover', '1837-1901', 'Largest empire, 2nd-longest reign'],
        ['George VI', 'Windsor', '1936-1952', 'Reigned through WWII, after Edward VIII abdication'],
        ['Elizabeth II', 'Windsor', '1952-2022', 'Longest-reigning British monarch'],
        ['Charles III', 'Windsor', '2022-', 'Current monarch'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Monarch', 'House', 'Reign', 'Key Fact']],
        body: monarchs.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 38 }, 1: { cellWidth: 24 }, 2: { cellWidth: 20 }, 3: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // --- 4. Patron Saints & Symbols ---
    y = sectionTitle('Patron Saints & National Symbols', y);
    const saints = [
        ['England', 'St George', '23 Apr', 'Red cross on white flag'],
        ['Scotland', 'St Andrew', '30 Nov', 'White diagonal on blue flag'],
        ['Wales', 'St David', '1 Mar', 'Daffodil'],
        ['N Ireland', 'St Patrick', '17 Mar', 'Shamrock'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Nation', 'Patron Saint', 'Day', 'Symbol']],
        body: saints.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 40 }, 1: { cellWidth: 35 }, 2: { cellWidth: 20 }, 3: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 12;

    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text('National flowers: England = Rose | Scotland = Thistle | Wales = Daffodil | N Ireland = Shamrock', margin, y);
    y += 10;

    if (y > 220) { doc.addPage(); y = 20; }

    // --- 5. British Values & Principles ---
    y = sectionTitle('British Values & Principles', y);
    const values = [
        ['Democracy', 'Freedom of belief & religion'],
        ['Rule of Law', 'Freedom of speech'],
        ['Individual Liberty', 'Freedom from unfair discrimination'],
        ['Tolerance of different faiths', 'Right to a fair trial'],
        ['Participation in community life', 'Right to vote'],
    ];
    const responsibilities = [
        'Respect & obey the law',
        'Respect others\' rights',
        'Treat others with fairness',
        'Look after yourself & family',
        'Look after your area & environment',
    ];
    autoTable(doc, {
        startY: y,
        head: [['5 Fundamental Values', 'Freedoms the UK Offers']].map(r => r.map(cleanPDF)),
        body: values.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [16, 101, 52], fontSize: 7 },
        styles: { fontSize: 7, cellPadding: 2 },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 6;

    autoTable(doc, {
        startY: y,
        head: [['Responsibilities']].map(r => r.map(cleanPDF)),
        body: responsibilities.map(r => [r]),
        theme: 'grid',
        headStyles: { fillColor: [16, 101, 52], fontSize: 7 },
        styles: { fontSize: 7, cellPadding: 2 },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    if (y > 230) { doc.addPage(); y = 20; }

    // --- 6. British Inventions & Discoveries ---
    y = sectionTitle('British Inventions & Discoveries', y);
    const inventions = [
        ['Royal Society', 'Isaac Newton (early member)', '1660s'],
        ['Carding machine / spinning mills', 'Richard Arkwright', '18th c.'],
        ['Steam power', 'James Watt', '18th c.'],
        ['Bessemer process (mass steel)', '-', '19th c.'],
        ['Railway engine', 'George & Robert Stephenson', '19th c.'],
        ['Engineering feats (railways, ships)', 'Isambard Kingdom Brunel', '1838-59'],
        ['Television', 'John Logie Baird', '1920s'],
        ['Radar', 'Robert Watson-Watt', '1935'],
        ['Jet Engine', 'Frank Whittle', '1930s'],
        ['Turing machine', 'Alan Turing', '1930s'],
        ['World Wide Web', 'Tim Berners-Lee', '1990'],
        ['Penicillin', 'Alexander Fleming', '1928'],
        ['Insulin (co-discoverer)', 'John MacLeod', '1940s'],
        ['DNA Structure', 'Crick & Watson', '1953'],
        ['ATM', 'James Goodfellow', '1967'],
        ['Hovercraft', 'C. Cockerell', '1950s'],
        ['IVF', 'Edwards & Steptoe', '1978'],
        ['MRI Scanner', 'Peter Mansfield', '1970s'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Invention', 'Inventor(s)', 'Year']],
        body: inventions.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 45 }, 1: { cellWidth: 55 }, 2: { cellWidth: 20 } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // ============== PAGE 3: FAMOUS PEOPLE + HOLIDAYS + LEGAL ==============
    doc.addPage(); y = 20;

    // --- 7. History Mind-Map Style Overview ---
    y = sectionTitle('British History Overview (Mind-Map)', y);
    const historyMap = [
        ['PREHISTORY', '  Stone Age > Bronze Age > Iron Age (Celts)'],
        ['ROMAN ERA', '  43-410 CE > Hadrians Wall > Boudicca > Roads & Law'],
        ['MEDIEVAL', '  Anglo-Saxons > Vikings > Normans (1066) > Magna Carta (1215)'],
        ['TUDOR ERA', '  Henry VIII (Church) > Elizabeth I (Golden Age) > Shakespeare'],
        ['STUART ERA', '  Civil War > Cromwell > Restoration > Glorious Revolution'],
        ['EMPIRE ERA', '  Industrial Revolution > Slave Abolition > Victorian Age'],
        ['MODERN ERA', '  WWI > WWII > Welfare State > EU Join (1973) > Brexit (2020)'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Era', 'Key Events Flow']],
        body: historyMap.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [139, 69, 19], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 30, fontStyle: 'bold' }, 1: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // --- 8. Who's Who - Key Figures (grouped by category, from handbook) ---
    doc.addPage(); y = 20;
    y = sectionTitle("Who's Who - Key Figures", y);
    const peopleGroups = [
        {
            title: 'Scientists & Inventors',
            color: [16, 101, 52],
            rows: [
                ['Sir Isaac Newton', 'Physicist/mathematician; early Royal Society member; Principia (1687)'],
                ['Sir Edmund Halley', "Predicted the return of Halley's Comet"],
                ['James Watt', 'Steam power, drove the Industrial Revolution'],
                ['Isambard Kingdom Brunel', 'Engineer: tunnels, bridges, Great Western Railway'],
                ['George & Robert Stephenson', 'Pioneered the railway engine'],
                ['Ernest Rutherford', "First to 'split the atom'; Manhattan Project"],
                ['Alexander Fleming', 'Discovered penicillin (1928); Nobel Prize 1945'],
                ['Sir Robert Watson-Watt', 'Developed radar; first test 1935'],
                ['Alan Turing', 'Invented the theoretical Turing machine (1930s)'],
                ['Sir Frank Whittle', 'Developed the jet engine (1930s)'],
                ['Sir Tim Berners-Lee', 'Invented the World Wide Web (1990)'],
                ['Adam Smith', 'Enlightenment thinker, economics'],
                ['David Hume', 'Enlightenment philosopher, human nature'],
            ],
        },
        {
            title: 'Political Leaders',
            color: [63, 81, 181],
            rows: [
                ['Sir Robert Walpole', 'First Prime Minister (1721-1742)'],
                ['Admiral Nelson', 'Commanded fleet at Trafalgar (1805), died in battle'],
                ['The Duke of Wellington', "'Iron Duke'; defeated Napoleon at Waterloo (1815)"],
                ['Winston Churchill', 'PM from May 1940; led wartime resistance to Nazis'],
                ['Clement Attlee', 'Labour PM 1945-51; nationalised industries, created NHS'],
                ['William Beveridge', '1942 Beveridge Report, foundation of welfare state'],
                ['Richard Austen Butler', 'Education Act 1944 as Education Minister'],
                ['Margaret Thatcher', 'First woman PM (1979-90); longest-serving 20th c. PM'],
            ],
        },
        {
            title: 'Artists & Writers',
            color: [128, 0, 128],
            rows: [
                ['William Shakespeare', 'Playwright: Hamlet, Macbeth, Romeo and Juliet'],
                ['Geoffrey Chaucer', 'The Canterbury Tales'],
                ['Robert Burns', "Scottish poet 'The Bard'; wrote Auld Lang Syne"],
                ['Sir Christopher Wren', "Architect: new St Paul's Cathedral after 1666 fire"],
                ['Thomas Gainsborough', 'Portrait painter'],
                ['Joseph Turner', 'Landscape painter; Turner Prize named after him'],
                ['John Constable', 'Landscape painter, Dedham Vale'],
                ['Jane Austen', 'Pride and Prejudice, Sense and Sensibility'],
                ['Charles Dickens', 'Oliver Twist, Great Expectations'],
                ['Sir Arthur Conan Doyle', 'Sherlock Holmes stories'],
                ['J K Rowling', 'Harry Potter series'],
                ['John Milton', 'Paradise Lost'],
                ['William Wordsworth', 'Poet inspired by nature'],
                ['Sir Walter Scott', 'Poems & novels inspired by Scotland'],
                ['Lord Byron', "'She Walks in Beauty'"],
                ['Dylan Thomas', 'Welsh poet; Under Milk Wood'],
                ['Roald Dahl', 'Children\'s author, RAF veteran'],
                ['George Frederick Handel', 'Water Music, Messiah'],
                ['Gustav Holst', 'The Planets suite'],
                ['Sir Edward Elgar', 'Pomp and Circumstance Marches'],
                ['Benjamin Britten', 'Operas: Peter Grimes, Billy Budd'],
                ['Dame Agatha Christie', 'The Mousetrap; detective novels'],
            ],
        },
        {
            title: 'Reformers & Trailblazers',
            color: [204, 128, 0],
            rows: [
                ['Boudicca', 'Queen of the Iceni; led revolt against Romans'],
                ['William Wilberforce', 'Led campaign to end the slave trade'],
                ['Florence Nightingale', 'Founder of modern nursing; Crimean War (1854)'],
                ['Emmeline Pankhurst', "Founded WSPU (1903); 'suffragettes'"],
                ['Mary Peters', 'Olympic gold, pentathlon, 1972 Munich'],
            ],
        },
    ];
    peopleGroups.forEach((group) => {
        if (y > 250) { doc.addPage(); y = 20; }
        y = bodyText(group.title, y, 10);
        y += 1;
        autoTable(doc, {
            startY: y,
            head: [['Name', 'Achievement']],
            body: group.rows.map(r => r.map(cleanPDF)),
            theme: 'grid',
            headStyles: { fillColor: group.color, fontSize: 8 },
            styles: { fontSize: 7, cellPadding: 2 },
            columnStyles: { 0: { cellWidth: 45 }, 1: { cellWidth: 'auto' } },
            margin: { left: margin, right: margin },
        });
        y = doc.lastAutoTable.finalY + 8;
    });

    // --- 9. UK Holidays & Festivals ---
    y = sectionTitle('UK Holidays & Festivals', y);
    const holidays = [
        ['New Year', 'Jan 1', 'Hogmanay in Scotland (Jan 2 also holiday)'],
        ['Easter', 'Mar/Apr', 'Good Friday & Easter Monday - public holidays'],
        ['May Day', 'Early May', 'Bank holiday'],
        ['Christmas', 'Dec 25', 'Public holiday, roast turkey, presents, carols'],
        ['Boxing Day', 'Dec 26', 'Public holiday'],
        ['Remembrance', 'Nov 11', '2-min silence at 11am, poppies worn'],
        ['Bonfire Night', 'Nov 5', 'Guy Fawkes, fireworks (not a holiday)'],
        ['Halloween', 'Oct 31', 'Trick or treat (not a holiday)'],
        ['Diwali', 'Oct/Nov', 'Hindu/Sikh Festival of Lights'],
        ['Eid', 'Varies', 'Muslim festivals (al-Fitr & ul-Adha)'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Holiday', 'Date', 'Details']],
        body: holidays.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [220, 20, 60], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 22 }, 2: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // ============== PAGE 4: LEGAL + RELIGION + GEOGRAPHY ==============
    doc.addPage(); y = 20;

    // --- 10. UK Legal System ---
    y = sectionTitle('UK Legal System', y);
    const legal = [
        ['Criminal Law', 'State vs individual - police/CPS prosecute; courts: Magistrates or Crown'],
        ['Civil Law', 'Disputes between people - County Court or High Court'],
        ['Jury', '12 people (England) decide guilt; judge decides sentence'],
        ['Age of Criminal Resp.', '10 in England/Wales/NI; 12 in Scotland'],
        ['Solicitors', 'Legal advice and representation'],
        ['Barristers', 'Represent in higher courts, wear wigs and gowns'],
        ['Magistrates', 'Volunteer judges for minor crimes, no legal training required'],
        ['Human Rights Act', '1998 - incorporated European Convention into UK law'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Aspect', 'Details']],
        body: legal.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [0, 100, 0], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 45 }, 1: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // --- 10b. Elections & Voting ---
    if (y > 220) { doc.addPage(); y = 20; }
    y = sectionTitle('Elections & Voting', y);
    const elections = [
        ['Voting system', 'First past the post - most votes in a constituency wins'],
        ['Minimum voting age', '18 (set in 1969, reduced from 21)'],
        ['Age to stand for election (MP)', '18 or over'],
        ['General elections held', 'At least every 5 years (max between elections)'],
        ['Polling hours', '7.00 am - 10.00 pm'],
        ['Houses of Parliament', 'House of Commons (elected, 650 MPs) & House of Lords (unelected)'],
        ['Why Commons is more important', 'Members are democratically elected; PM & most Cabinet are MPs'],
        ['Lords membership since 1958', "PM can nominate 'life peers' for their own lifetime"],
        ['Hereditary peers since 1999', 'Lost automatic right to sit; elect a few to represent them'],
        ['Who chairs Commons debates', 'The Speaker - neutral, chosen by MPs in secret ballot'],
        ['Electoral register', 'Register via local council; updated each Sept/Oct'],
        ['Barred from standing', 'Armed forces, civil servants, certain criminals'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Fact', 'Detail']],
        body: elections.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 55 }, 1: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // --- 11. Religion in the UK ---
    y = sectionTitle('Religion in the UK', y);
    const religion = [
        ['Christianity', '46.2%', 'Church of England (state church), Church of Scotland (Presbyterian)'],
        ['No Religion', '37.2%', 'Significant increase in recent censuses'],
        ['Islam', '6.5%', 'Second largest religion'],
        ['Hinduism', '1.7%', 'Celebrates Diwali'],
        ['Sikhism', '1%', 'Celebrates Vaisakhi (Apr 14)'],
        ['Judaism', '<0.5%', 'Celebrates Hanukkah'],
        ['Buddhism', '<0.5%', 'Various traditions'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Religion', '% (2021)', 'Notes']],
        body: religion.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [75, 0, 130], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: 20 }, 2: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 8;
    doc.setFontSize(7);
    doc.setTextColor(80, 80, 80);
    doc.text('Note: Monarch is Head of Church of England. Archbishop of Canterbury is spiritual leader.', margin, y);
    y += 10;

    // --- 12. UK Geography Quick Facts ---
    y = sectionTitle('UK Geography Quick Facts', y);
    const geography = [
        ['Population', '~67 million (England 84%, Scotland 8%, Wales 5%, NI 3%)'],
        ['Currency', 'Pound Sterling (100 pence = 1 pound). Notes: 5, 10, 20, 50'],
        ['Languages', 'English (official), Welsh (Wales), Gaelic (Scotland/NI)'],
        ['Capitals', 'London (UK & England), Edinburgh (Scot), Cardiff (Wales), Belfast (NI)'],
        ['Largest Cities', 'London, Birmingham, Manchester, Glasgow, Liverpool, Leeds'],
        ['Highest Mountain', 'Ben Nevis (Scotland)'],
        ['Longest River', 'River Severn'],
        ['Crown Dependencies', 'Isle of Man, Jersey, Guernsey (not part of UK)'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Topic', 'Details']],
        body: geography.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [0, 128, 128], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // --- 13. Key Wars & Battles ---
    y = sectionTitle('Key Wars & Battles', y);
    const wars = [
        ['1066', 'Battle of Hastings', 'William defeats Harold, Norman Conquest begins'],
        ['1314', 'Bannockburn', 'Robert the Bruce defeats English, Scottish independence'],
        ['1415', 'Agincourt', 'Henry V defeats French in 100 Years War'],
        ['1588', 'Spanish Armada', 'English navy defeats Spanish invasion fleet'],
        ['1642-51', 'English Civil War', 'Cavaliers (King) vs Roundheads (Parliament)'],
        ['1805', 'Trafalgar', 'Nelson defeats French/Spanish fleets, dies in battle'],
        ['1815', 'Waterloo', 'Wellington defeats Napoleon, ends French wars'],
        ['1914-18', 'World War I', '2M+ British casualties; ended 11/11/1918 at 11am'],
        ['1939-45', 'World War II', 'Churchill leads; Battle of Britain, D-Day, Blitz'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Year', 'Battle/War', 'Significance']],
        body: wars.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [139, 0, 0], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 20 }, 1: { cellWidth: 35 }, 2: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // ============== PAGE 5: TEST TIPS & QUICK REFERENCE ==============
    doc.addPage(); y = 20;

    // --- 14. Test Tips & Quick Reference ---
    y = sectionTitle('Test Tips & Quick Reference', y);
    const testTips = [
        'Focus on dates, especially around 1066, 1215, 1605, 1707, 1928, 1948',
        'Remember patron saints and their dates (Mar 1, Mar 17, Apr 23, Nov 30)',
        'Know the difference between UK, Great Britain, and British Isles',
        'Understand devolution - what Scotland, Wales, NI can legislate on',
        'Key figures: Churchill, Thatcher, Attlee, Henry VIII, Elizabeth I',
        'Know British values: democracy, rule of law, individual liberty, tolerance',
    ];
    testTips.forEach((tip, i) => {
        doc.setFontSize(7);
        doc.setTextColor(60, 60, 60);
        doc.text(`${i + 1}. ${cleanPDF(tip)}`, margin, y);
        y += 5;
    });
    y += 5;

    // --- 15. Life in the UK Test Info ---
    y = sectionTitle('Life in the UK Test', y);
    const testInfo = [
        ['24 Questions', 'Randomly selected from official handbook'],
        ['75% Pass Mark', '18 out of 24 correct to pass'],
        ['45 Minutes', 'At approved test centres across the UK'],
    ];
    autoTable(doc, {
        startY: y,
        head: [['Requirement', 'Details']],
        body: testInfo.map(r => r.map(cleanPDF)),
        theme: 'grid',
        headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
        styles: { fontSize: 7, cellPadding: 2 },
        columnStyles: { 0: { cellWidth: 40 }, 1: { cellWidth: 'auto' } },
        margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + 10;

    // ============== REMAINING PAGES: STUDY FLASHCARDS ==============
    sections.forEach((section, index) => {
        const estimatedHeight = 16 + (section.cards.length * 9);
        if (y + estimatedHeight > 260) {
            doc.addPage();
            y = 20;
        }

        doc.setFontSize(13);
        doc.setTextColor(33, 33, 33);
        doc.setFont(undefined, 'bold');
        doc.text(cleanPDF(section.title), margin, y);
        y += 5;

        const tableData = section.cards.map(card => [
            cleanPDF(card.front),
            cleanPDF(card.back),
        ]);

        autoTable(doc, {
            startY: y,
            head: [['Topic / Question', 'Answer / Details']],
            body: tableData,
            theme: 'striped',
            headStyles: { fillColor: [63, 81, 181], fontSize: 8 },
            styles: { fontSize: 8, cellPadding: 2.5 },
            columnStyles: { 0: { cellWidth: 65 }, 1: { cellWidth: 'auto' } },
            margin: { left: margin, right: margin, top: 10 },
        });

        y = doc.lastAutoTable.finalY + 12;
    });

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    const totalCards = sections.reduce((a, s) => a + s.cards.length, 0);
    doc.text(
        cleanPDF(`Generated from lifeinukcoach.co.uk - ${totalCards} flashcards across ${sections.length} sections - Good luck!`),
        pageW / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' }
    );

    doc.save('Life_in_the_UK_Cheat_Sheet_2026.pdf');
};
