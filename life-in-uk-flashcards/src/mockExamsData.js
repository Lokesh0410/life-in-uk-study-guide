// mockExamsData.js
// Based on Life in the UK Practice Tests #1, #2, #3 (provided PDFs)

export const mockExams = [
    {
        id: 1,
        title: "Mock Exam #1 (Full Test)",
        questions: [
            { text: "What is known as Lent?", choices: ["The 40 days before Easter", "The 40 days after Christmas", "The 40 days before Christmas", "The 40 days after Easter"], correct: 0, explanation: "The 40 days before Easter are known as Lent." },
            { text: "Which country's flag is not part of the Union Flag?", choices: ["Wales", "Ireland", "Scotland", "England"], correct: 0, explanation: "The Welsh dragon is not part of the Union Flag." },
            { text: "What is the judiciary responsible for?", choices: ["Deciding whether a person is guilty", "Looking after a jury", "Putting people in prison", "Interpreting the law"], correct: 3, explanation: "Judges (the judiciary) are responsible for interpreting the law and ensuring that trials are conducted fairly." },
            { text: "When did the Habeas Corpus Act become law?", choices: ["1685", "1687", "1679", "1683"], correct: 2, explanation: "The Habeas Corpus Act became law in 1679. It guaranteed that no one could be held prisoner unlawfully." },
            { text: "Which of the events is the bombing of English cities by the Germans?", choices: ["The Blitz", "The Dunkirk spirit", "D-Day", "The Battle of Britain"], correct: 0, explanation: "The Blitz was the German air force bombing London and other British cities at night-time." },
            { text: "Why is it called 'The Glorious Revolution'?", choices: ["Women were given the right to vote", "Because of new technological advances", "Because there was no fighting", "Because of new achievements"], correct: 2, explanation: "There was no fighting in England and it guaranteed the power of Parliament." },
            { text: "Which of these venues is located in Greenwich?", choices: ["The SECC", "The O2", "Auditorio de Tenerife", "The Copenhagen Concert Hall"], correct: 1, explanation: "The O2 in Greenwich is a large music venue." },
            { text: "When did the UK leave the EU following the Brexit Vote?", choices: ["1957", "2020", "1987", "1973"], correct: 1, explanation: "The UK left the EU in 2020 after the Brexit vote." },
            { text: "When was The First British Prime minister (Sir Robert Walpole) in power?", choices: ["1742-1746", "1714-1721", "1707-1714", "1721-1742"], correct: 3, explanation: "Sir Robert Walpole was Prime Minister from 1721 to 1742." },
            { text: "Which country's national flower is a thistle?", choices: ["Northern Ireland", "England", "Scotland", "Wales"], correct: 2, explanation: "A thistle is the national flower of Scotland." },
            { text: "Who developed ideas about economics during the Enlightenment period which are still referred to today?", choices: ["David Hume", "Adam Smith", "James Watt", "Isaac Newton"], correct: 1, explanation: "Adam Smith developed ideas about economics which are still referred to today." },
            { text: "One TV licence covers all of the equipment at one address, but people who rent different rooms in a shared house must buy a separate TV licence", choices: ["False", "True"], correct: 1, explanation: "One TV licence covers all equipment at one address. People renting different rooms in a shared house must buy separate licences." },
            { text: "Magistrates and Justices of the Peace (JPs) are members of what?", choices: ["Law Society", "Local Community", "Ruling Party", "Police Force"], correct: 1, explanation: "Magistrates and JPs are members of the local community." },
            { text: "A 2 minutes silence is observed on Easter to commemorate the death of Jesus Christ", choices: ["True", "False"], correct: 1, explanation: "False – the two‑minute silence is on Remembrance Day (11 November), not Easter." },
            { text: "Peers nominated by the Prime Minister can only serve for their lifetime", choices: ["True", "False"], correct: 0, explanation: "Life peers are nominated by the PM and serve for their lifetime." },
            { text: "Which TWO countries took part in the Battle of Agincourt?", choices: ["France", "Scotland", "Wales", "England"], correct: [0, 3], explanation: "The Battle of Agincourt (1415) was fought between England and France.", multiple: true },
            { text: "Who is credited with the introduction of the National Health Service (NHS) in 1948?", choices: ["David Hume", "Florence Nightingale", "Aneurin Bevan", "Winston Churchill"], correct: 2, explanation: "Aneurin (Nye) Bevan led the establishment of the NHS in 1948." },
            { text: "The Speaker is an MP, he/she represents a constituency and deals with constituents' problems like any other MP", choices: ["True", "False"], correct: 0, explanation: "True – the Speaker is an MP and deals with constituency matters, but remains neutral in debates." },
            { text: "What religion were Puritans?", choices: ["Jews", "Buddhists", "Catholics", "Protestants"], correct: 3, explanation: "Puritans were a group of Protestants who advocated strict religious doctrine." },
            { text: "Who can nominate life peers? (Select TWO)", choices: ["The Prime Minister", "The Monarchy", "The Speaker", "Leaders of other main political parties"], correct: [0, 3], explanation: "Life peers are nominated by the Prime Minister and by leaders of other main political parties.", multiple: true },
            { text: "What country did Hitler invade in 1939?", choices: ["The USA", "Poland", "Italy", "USSR"], correct: 1, explanation: "Hitler invaded Poland in 1939, leading Britain and France to declare war." },
            { text: "Name the most famous cricket competition, which is a series of Test matches played between England and Australia", choices: ["Lords", "Ashes", "Classics", "Masters"], correct: 1, explanation: "The Ashes is the famous Test cricket series between England and Australia." },
            { text: "In England & Wales, the small claims procedure is an informal way of helping people to settle minor disputes claims of less than?", choices: ["2,000", "10,000", "4,000", "3,000"], correct: 1, explanation: "The small claims limit in England & Wales is £10,000." },
            { text: "Which tribes invaded Britain after the Romans had left?", choices: ["The Vikings", "The Jutes and the Anglo-Saxons", "The Celtics", "The Normans"], correct: 1, explanation: "After the Romans left, Britain was invaded by the Jutes, Angles and Saxons." }
        ]
    },
    {
        id: 2,
        title: "Mock Exam #2 (Full Test)",
        questions: [
            { text: "Roast beef is a traditional food of which country?", choices: ["England", "Northern Ireland", "Wales", "Scotland"], correct: 0, explanation: "Roast beef is an English traditional food." },
            { text: "Who can get a 50% discount on their TV licence?", choices: ["Blind people", "Students", "Army Officers", "Deaf people"], correct: 0, explanation: "Blind people can get a 50% discount on a TV licence." },
            { text: "Which languages were the basis of modern English?", choices: ["Norman French and Anglo Saxon", "Gaelic and Celtic", "Norman French and Celtic", "Celtic and Anglo Saxon"], correct: 0, explanation: "Norman French and Anglo‑Saxon combined to become English." },
            { text: "How many members does The Northern Ireland Assembly have?", choices: ["90", "129", "119", "110"], correct: 0, explanation: "The Northern Ireland Assembly has 90 elected members (MLAs)." },
            { text: "When did the first farmers arrive in Britain?", choices: ["6,000 years ago", "8,000 years ago", "4,000 years ago", "10,000 years ago"], correct: 0, explanation: "The first farmers arrived about 6,000 years ago from south‑east Europe." },
            { text: "Who was the 'Iron Duke' that defeated the Emperor Napoleon?", choices: ["Churchill", "Sir Christopher Wren", "Wellington", "Admiral Nelson"], correct: 2, explanation: "The Duke of Wellington (the Iron Duke) defeated Napoleon at Waterloo." },
            { text: "When did the Irish Free State become a republic?", choices: ["1922", "1931", "1937", "1949"], correct: 3, explanation: "The Irish Free State became a republic in 1949." },
            { text: "Ulster fry is a traditional food of which country?", choices: ["Northern Ireland", "Wales", "Scotland", "England"], correct: 0, explanation: "Ulster fry is a traditional Northern Irish fried meal." },
            { text: "Who tells visitors about the history of the Tower of London?", choices: ["Instructors", "London Guides", "Beefeaters", "History graduates"], correct: 2, explanation: "Yeoman Warders (Beefeaters) give tours of the Tower of London." },
            { text: "Which TWO wives of Henry VIII were executed?", choices: ["Jayne Seymour", "Catherine Howard", "Anne Boleyn", "Anne of Cleves"], correct: [1, 2], explanation: "Anne Boleyn and Catherine Howard were executed.", multiple: true },
            { text: "When did Ireland split into two countries?", choices: ["1916", "1922", "1959", "1921"], correct: 1, explanation: "In 1922 Ireland split into Northern Ireland and the Irish Free State." },
            { text: "Volunteering is compulsory in the UK", choices: ["True", "False"], correct: 1, explanation: "Volunteering is not compulsory." },
            { text: "Nowadays, the House of Commons has more power than the House of Lords", choices: ["False", "True"], correct: 1, explanation: "The House of Commons has more power and can overrule the Lords." },
            { text: "Select TWO popular social networking websites", choices: ["Telephone", "E-mail", "Twitter", "Facebook"], correct: [2, 3], explanation: "Twitter and Facebook are popular social networking websites.", multiple: true },
            { text: "What can 'Carry on' be associated with?", choices: ["Art", "Novels", "Music", "Films"], correct: 3, explanation: "The Carry On films are British comedies from the 1950s–60s." },
            { text: "How can you make a complaint about the Police? (Choose TWO)", choices: ["Going to a police station", "Writing to the Chief Constable of the police force involved", "Visiting a council office", "Visiting the local polling places"], correct: [0, 1], explanation: "Complaints can be made at a police station or in writing to the Chief Constable.", multiple: true },
            { text: "Sir Edward Elgar is known for his famous music work - 'The Planets'", choices: ["True", "False"], correct: 1, explanation: "False – 'The Planets' was composed by Gustav Holst." },
            { text: "What were the first Women's Social and Political Union group members called?", choices: ["House of Lords", "Rotten boroughs", "Slaves", "Suffragettes"], correct: 3, explanation: "They were called suffragettes." },
            { text: "What was the system of land ownership used by the Normans known as?", choices: ["The Magna Carta", "Noble land", "Feudalism", "Democracy"], correct: 2, explanation: "The Normans used feudalism." },
            { text: "Who can only give 'advice, warn and encourage' about government matters?", choices: ["The Speaker", "The Monarch", "Prime Minister", "Members of the police"], correct: 1, explanation: "The monarch can advise, warn and encourage, but does not make policy decisions." },
            { text: "What awards event celebrates British theatre?", choices: ["The Turner Prize", "The Mercury Prize", "The Brit Awards", "The Laurence Olivier Awards"], correct: 3, explanation: "The Laurence Olivier Awards celebrate British theatre." },
            { text: "It is a legal requirement that men and women should not be discriminated against due to their gender or marital status", choices: ["False", "True"], correct: 1, explanation: "UK law prohibits discrimination on grounds of gender or marital status." },
            { text: "Catherine Howard was Anne Boleyn's cousin", choices: ["False", "True"], correct: 1, explanation: "Catherine Howard was Anne Boleyn's cousin." },
            { text: "Who is known as William the Conqueror?", choices: ["William, the Duke of Normandy", "William, the Duke of France", "William, the Duke of Edinburgh", "William, the Duke of Lion"], correct: 0, explanation: "William, Duke of Normandy, conquered England in 1066." }
        ]
    },
    {
        id: 3,
        title: "Mock Exam #3 (Full Test)",
        questions: [
            { text: "What did Henry VII do?", choices: ["Restricted King's power", "Broke away from the Church of Rome", "Increased the power of the nobles", "Reduced the power of the nobles"], correct: 3, explanation: "Henry VII reduced the power of the nobles." },
            { text: "Which of these is not a music festival?", choices: ["Glastonbury", "Creamfields", "The Fringe", "V festival"], correct: 2, explanation: "The Fringe is a theatre and comedy festival, not a music festival." },
            { text: "Who is responsible for crime and immigration?", choices: ["Chancellor of the Exchequer", "Secretary of State", "Home Secretary", "Foreign Secretary"], correct: 2, explanation: "The Home Secretary is responsible for crime, policing and immigration." },
            { text: "When did the English civil war begin?", choices: ["1646", "1641", "1642", "1640"], correct: 2, explanation: "The English Civil War began in 1642." },
            { text: "In 1284 King Edward I of England introduced the Statute of Rhuddlan, which annexed Wales to the Crown of England.", choices: ["True", "False"], correct: 0, explanation: "True – the Statute of Rhuddlan annexed Wales to England." },
            { text: "When were the Anglo-Saxon kingdoms established in England?", choices: ["By AD 500", "By AD 600", "By AD 550", "By AD 410"], correct: 1, explanation: "By about AD 600, Anglo-Saxon kingdoms were established." },
            { text: "The Scottish Parliament (after the Magna Carta was established in England) was split into two estates: the Lords and the Commons", choices: ["True", "False"], correct: 1, explanation: "False – the Scottish Parliament had three estates: Lords, Commons and Clergy." },
            { text: "What is the Shadow Cabinet?", choices: ["The cabinet that is in trouble", "The name of the office of the Leader of the Opposition in the Parliament", "Senior members of the main opposition party who 'shadow' Government ministers in different departments", "The cabinet where the Prime Minister had to resign"], correct: 2, explanation: "The Shadow Cabinet consists of senior opposition MPs who shadow government ministers." },
            { text: "Who wrote about their experiences in the First World War?", choices: ["Lord Byron and John Masefield", "Wilfred Owen and William Blake", "Wilfred Owen and Siegfried Sassoon", "Elizabeth and Robert Browning"], correct: 2, explanation: "Wilfred Owen and Siegfried Sassoon wrote about their WWI experiences." },
            { text: "Discrimination in the workplace is a criminal offence", choices: ["False", "True"], correct: 0, explanation: "Discrimination in the workplace is a civil offence, not criminal." },
            { text: "What is the Giant's Causeway made of?", choices: ["Iron", "Bronze", "Volcanic Lava", "Stone"], correct: 2, explanation: "The Giant's Causeway is made of volcanic lava." },
            { text: "Conditions in Ireland in the 19th century were much better than in the rest of the UK", choices: ["False", "True"], correct: 0, explanation: "Conditions in Ireland were worse; a famine killed 1 million people." },
            { text: "Radar was developed by Scotsman Sir Robert Watson-Watt", choices: ["False", "True"], correct: 1, explanation: "True – Sir Robert Watson-Watt developed radar." },
            { text: "When did the BBC begin the world's first regular TV service?", choices: ["1922", "1938", "1936", "1921"], correct: 2, explanation: "The BBC began the world's first regular TV service in 1936." },
            { text: "Satirical magazines began to be published in the 19th century. When was 'Punch' first published?", choices: ["1890s", "1810s", "1870s", "1840s"], correct: 3, explanation: "'Punch' was first published in the 1840s." },
            { text: "What destroyed London in year 1666?", choices: ["Nuclear Plant", "Fire", "Water", "Plague"], correct: 1, explanation: "The Great Fire of London destroyed much of the city in 1666." },
            { text: "Other than London universities, which university was credited with the discovery of the DNA molecule in 1953?", choices: ["Cambridge", "Edinburgh", "Oxford", "Aberdeen"], correct: 0, explanation: "The structure of DNA was discovered at Cambridge University." },
            { text: "During the reigns of Elizabeth I and James I, where did the English government encourage Scottish and English Protestants to settle?", choices: ["Ulster", "Edinburgh", "East London", "Cardiff"], correct: 0, explanation: "Protestants were encouraged to settle in Ulster (Northern Ireland)." },
            { text: "Which architectural style are the famous London buildings of the 19th century, such as the House of Parliament and St Pancras Station, associated with?", choices: ["Roman", "Gothic", "Indian", "Catholic"], correct: 1, explanation: "Gothic style became popular again in the 19th century." },
            { text: "What can the Laws made by the EU also be called?", choices: ["Framework Decisions", "All of these", "Directives", "Regulations"], correct: 1, explanation: "EU laws can be called directives, regulations or framework decisions." },
            { text: "Which TWO things happened when Mary Stuart's husband got murdered?", choices: ["She fled to France", "She gave her throne to Elizabeth I", "She was suspected of involvement in the murder", "She asked Elizabeth I for help"], correct: [2, 3], explanation: "Mary was suspected of involvement and fled to England, asking Elizabeth I for help.", multiple: true },
            { text: "Whom did the serfs serve?", choices: ["Knights", "Lords", "Peasants", "Slaves"], correct: 1, explanation: "Serfs served the lords in the feudal system." },
            { text: "The Victoria Cross medal was introduced during which war?", choices: ["The Crimean War", "The First World War", "The Second World War", "The Hundred Years War"], correct: 0, explanation: "Queen Victoria introduced the Victoria Cross during the Crimean War." },
            { text: "What is the 'Divine Right of Kings'?", choices: ["Increased power of the parliament", "Reduced the power of the nobles", "The King was Appointed by God", "Reduced the power of the King"], correct: 2, explanation: "Divine Right means the king is appointed by God and does not need Parliament's approval." }
        ]
    }
,
{
    id: "exam4",
    title: "Practice Exam 4",
    questions: [
        {
            "text": "The jury decides on the penalty if the defendant is found guilty",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The jury has to listen to the evidence presented at the trial and then decide a verdict of 'guilty' or 'not guilty' based on what they have heard. In Scotland, a third verdict of 'not proven' is also possible. If the jury finds a defendant guilty , the judge decides on the penalty ."
        },
        {
            "text": "What country did Hitler invade in 1939?",
            "choices": [
                "The USA",
                "Poland",
                "Italy",
                "USSR"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The British government tried to avoid another war . However , when Hitler invaded Poland in 1939, Britain and France declared war in order to stop his aggression."
        },
        {
            "text": "Who established the Church of England?",
            "choices": [
                "The Pope",
                "Henry VII",
                "Henry VIII",
                "St George"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "To divorce his first wife, Henry VIII needed the approval of the Pope. When the Pope refused, Henry established the Church of England. In this new Church, the king, not the Pope, would have the power to appoint bishops and order how people should worship."
        },
        {
            "text": "Identify which of these TWO is correct about Halloween?",
            "choices": [
                "It is celebrated on the 31 October",
                "It is not celebrated in Scotland",
                "It is an ancient festival and has roots in the pagan festival to mark the beginning of winter",
                "It is when lovers exchange cards and gifts"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "beginning of winter Halloween, 31 October , is an ancient festival and has roots in the pagan festival to mark the beginning of winter . Young people will often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."
        },
        {
            "text": "Identify which of the following is the Giant's Causeway made of?",
            "choices": [
                "Iron",
                "Bronze",
                "Volcanic Lava",
                "Stone"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Located on the north-east coast of Northern Ireland, the Giant's Causeway is a land formation of columns made from volcanic lava. It was formed about 50 million years ago. There are many legends about the Causeway and how it was formed."
        },
        {
            "text": "What can the Laws made by the EU also be called?",
            "choices": [
                "Framework Decisions",
                "All of these",
                "Directives",
                "Regulations"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "EU law is legally binding in the UK and all the other EU member states. European laws are called directives, regulations or framework decisions."
        },
        {
            "text": "Where does the Prime Minister reside?",
            "choices": [
                "10 Downing Street",
                "76 Charlotte Street",
                "1 Devonshire Terrace",
                "The Buckingham palace"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament."
        },
        {
            "text": "The Speaker is an MP, he/she represents a constituency and deals with constituents' problems like any other MP",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Speaker is neutral and does not represent a political party , even though he or she is an MP, represents a constituency and deals with constituents' problems like any other MP ."
        },
        {
            "text": "In what year did the UK leave the EU following the Brexit Vote?",
            "choices": [
                "1957",
                "2020",
                "1987",
                "1973"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. After UK's Brexit vote in 2020, there are now 27 EU member states."
        },
        {
            "text": "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni. Identify which of the following is it known as now?",
            "choices": [
                "Western England",
                "Eastern England",
                "Northern England",
                "Southern England"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni in what is now eastern England. She is still remembered today and there is a statue of her on Westminster Bridge in London, near the Houses of Parliament."
        },
        {
            "text": "Which person is the heir to the throne?",
            "choices": [
                "Prince George",
                "Prince William",
                "Prince Harry",
                "Prince Philip"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The King's eldest son, Prince William (the Prince of Wales), is the heir to the throne."
        },
        {
            "text": "What university did Isaac Newton attend?",
            "choices": [
                "London State University",
                "Warwick",
                "Oxford",
                "Cambridge"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Born in Lincolnshire, eastern England, Isaac Newton first became interested in science when he studied at Cambridge University . He became an important figure in the field. His most famous published work was Philosophiae Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), which showed how gravity applied to the whole universe."
        },
        {
            "text": "In Northern Ireland some people speak Irish Gaelic",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Wales, many people speak Welsh - a completely dif ferent language from English - and it is taught in schools and universities. In Scotland, Gaelic (again, a dif ferent language) is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic."
        },
        {
            "text": "What party won the General Election in 2010?",
            "choices": [
                "Tories",
                "Labour Party",
                "Liberal democrats",
                "None, Liberal Democrats and Conservative party formed a Coalition"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In May 2010, and for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party , David Cameron, became Prime Minister ."
        },
        {
            "text": "In what year did the English Civil war begin?",
            "choices": [
                "1642",
                "1598",
                "1588",
                "1640"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Civil war between the king and Parliament began in 1642. The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
        },
        {
            "text": "Which person is known as William the Conqueror?",
            "choices": [
                "William, the Duke of Normandy",
                "William, the Duke of France",
                "William, the Duke of Edinburgh",
                "William, the Duke of Lion"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror ."
        },
        {
            "text": "Conditions in Ireland in the 19th century were much better than in the rest of the UK",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Conditions in Ireland were not as good as in the rest of the UK. Two-thirds of the population still depended on farming to make their living, often on very small plots of land. Many depended on potatoes as a large part of their diet. In the middle of the century the potato crop failed, and Ireland suf fered a famine. A million people died from disease and starvation."
        },
        {
            "text": "In what year did the first farmers arrive in Britain?",
            "choices": [
                "6,000 years ago",
                "8,000 years ago",
                "4,000 years ago",
                "10,000 years ago"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The first farmers arrived in Britain about 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land."
        },
        {
            "text": "Beefeaters, who tell visitors about the building's history are associated with Identify which of these?",
            "choices": [
                "The Tower of London",
                "Unesco",
                "Edinburgh Castle",
                "Big Ben"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Tower of London was first built by William the Conqueror after he became king in 1066. Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building's history . People can also see the Crown Jewels there."
        },
        {
            "text": "What can the Scottish Parliament do?",
            "choices": [
                "May pass legislation on anything not specifically reserved to the UK Parliament",
                "May pass laws on anything in Scotland",
                "May pass laws on general economic policy",
                "May pass laws on foreign and defence af fairs"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Parliament The Scottish Parliament can pass laws for Scotland on all matters which are not specifically reserved to the UK Parliament. The matters on which the Scottish Parliament can legislate include: civil and criminal law , health, education, planning and additional tax-raising powers."
        },
        {
            "text": "Ulster fry is a traditional food of which country?",
            "choices": [
                "Northern Ireland",
                "Wales",
                "Scotland",
                "England"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Northern Ireland's traditional food is 'Ulster fry' - a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread."
        },
        {
            "text": "In England & Wales, the small claims procedure is an informal way of helping people to settle minor disputes claims of less than?",
            "choices": [
                "\u00a32,000",
                "\u00a310,000",
                "\u00a34,000",
                "\u00a33,000"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer . This procedure is used for claims of less than \u00a310,000 in England and Wales; \u00a35,000 in Scotland and \u00a35,000 in Northern Ireland (Changed from \u00a33000)."
        },
        {
            "text": "Which TWO religions celebrate Diwali?",
            "choices": [
                "Islam",
                "Sikh",
                "Buddhism",
                "Hindu"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are dif ferent stories about how the festival came about. There is a famous celebration of Diwali in Leicester ."
        },
        {
            "text": "Who can only give 'advice, warn and encourage' about government matters?",
            "choices": [
                "The Speaker",
                "The Monarch",
                "Prime Minister",
                "Members of the police"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The monarch has regular meetings with the Prime Minister and can advice, warn and encourage, but the decisions on government policies are made by the Prime Minister and cabinet"
        }
    ]
},
{
    id: "exam5",
    title: "Practice Exam 5",
    questions: [
        {
            "text": "What awards event celebrates British theatre?",
            "choices": [
                "The Turner Prize",
                "The Mercury Prize",
                "The Brit Awards",
                "The Laurence Olivier Awards"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Laurence Olivier Awards take place annually at dif ferent venues in London. There are a variety of categories, including best director , best actor and best actress. The awards are named after the British actor Sir Laurence Olivier , later Lord Olivier , who was best known for his roles in various Shakespeare plays."
        },
        {
            "text": "Which person is responsible for crime and immigration?",
            "choices": [
                "Chancellor of the Exchequer",
                "Secretary of State",
                "Home Secretary",
                "Foreign Secretary"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Home Secretary is responsible for crime, policing and immigration."
        },
        {
            "text": "Which architectural style are the famous London buildings of the 19th century , such as the House of Parliament and St Pancras Station, associated with?",
            "choices": [
                "Roman",
                "Gothic",
                "Indian",
                "Catholic"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In the 19th century , the medieval 'gothic' style became popular again. As cities expanded, many great public buildings were built in this style. The Houses of Parliament and St Pancras Station were built at this time, as were the town halls in cities such as Manchester and Sheffield."
        },
        {
            "text": "Other than London universities, which university was credited with the discovery of the DNA molecule in 1953?",
            "choices": [
                "Cambridge",
                "Edinburgh",
                "Oxford",
                "Aberdeen"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. This discovery contributed to many scientific advances, particularly in medicine and fighting crime. Francis Crick (1916-2004), one of those awarded the Nobel Prize for this discovery , was British."
        },
        {
            "text": "What percentage of the total UK population lives in Wales?",
            "choices": [
                "5%",
                "1%",
                "20%",
                "10%"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "UK population is very unequally distributed over the four parts of the UK. Wales makes around 5%."
        },
        {
            "text": "What were the first Women's Social and Political Union group members called?",
            "choices": [
                "House of Lords",
                "Rotten boroughs",
                "Slaves",
                "Suffragettes"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Emmeline Pankhurst (1858-1928) was born in Manchester in 1858. She set up the Women's Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women's Social and Political Union (WSPU). This was the first group whose members were called 'suf fragettes'."
        },
        {
            "text": "In what year did the 'Battle of Agincourt' take place?",
            "choices": [
                "1716",
                "1613",
                "1415",
                "1200"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V's vastly outnumbered English army defeated the French. The English left France in the 1450s."
        },
        {
            "text": "Which is a famous area in London for theatres?",
            "choices": [
                "The City",
                "East End",
                "West End",
                "South End"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "There are theaters in most towns and cities throughout the UK, ranging from the large to the small. They are an important part of local communities and often show both professional and amateur productions. London's West End, also known as 'Theatreland', is particularly well known. The Mousetrap, a murder-mystery play by Dame Agatha Christie, has been running in the West End since 1952 and has had the longest initial run of any show in history ."
        },
        {
            "text": "One TV licence covers all of the equipment at one address, but people who rent different rooms in a shared house must buy a separate TV licence",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "One TV licence covers all of the equipment at one address, but people who rent dif ferent rooms in a shared house must buy a separate TV licence"
        },
        {
            "text": "The London Eye is situated on the southern bank of which river?",
            "choices": [
                "Walbrook",
                "Clyde",
                "Tyburn",
                "Thames"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. It was originally built as part of the UK's celebration of the new millennium and continues to be an important part of New Year celebrations."
        },
        {
            "text": "Identify which of the following is the 'Divine Right of Kings?",
            "choices": [
                "Increased power of the parliament",
                "Reduced the power of the nobles",
                "The King was Appointed by God",
                "Reduced the power of the King"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Divine Right of Kings' is the idea that the king was directly appointed by God to rule. The king should be able to act without having to seek approval from Parliament."
        },
        {
            "text": "Who won gold medals for ice dancing at the Olympic Games in 1984?",
            "choices": [
                "Peggy Fleming and Sasha Colin",
                "Jayne Torvill and Christopher Dean",
                "Bobby Moore and Dame Kelly Holmes",
                "Tessa Virtue and Scott Moir"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Jayne Torvill (1957-) and Christopher Dean (1958-) won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships."
        },
        {
            "text": "Which TWO things happened when Mary Stuart's husband got murdered?",
            "choices": [
                "She fled to France",
                "She gave her throne to Elizabeth I",
                "She was suspected of involvement in the murder",
                "She asked Elizabeth I for help"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "The queen of Scotland, Mary Stuart (often now called 'Mary , Queen of Scots') was a Catholic. She was only a week old when her father died and she became queen. Much of her childhood was spent in France. When she returned to Scotland, she was the centre of a power struggle between dif ferent groups. When her husband was murdered, Mary was suspected of involvement and fled to England. She gave her throne to her Protestant son, James VI of Scotland. Mary was Elizabeth I's cousin and hoped that Elizabeth might help her, but Elizabeth suspected Mary of wanting to take over the English throne, and kept her a prisoner for 20 years. Mary was eventually executed, accused of plotting against Elizabeth I."
        },
        {
            "text": "Catherine Howard was Anne Boleyn's cousin",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Catherine was a cousin of Anne Boleyn. She was also accused of taking lovers and executed."
        },
        {
            "text": "Which event is the bombing of English cities by the Germans?",
            "choices": [
                "The Blitz",
                "The Dunkirk spirit",
                "D-Day",
                "The Battle of Britain"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Blitz was the German air force bombing London and other British cities at night-time. The phrase 'the Blitz spirit' is still used today to describe Britons pulling together in the face of adversity ."
        },
        {
            "text": "In what year did English become the official language for documents?",
            "choices": [
                "1400",
                "1554",
                "1502",
                "1451"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "By 1400, in England, official documents were being written in English, and English had become the preferred language of the royal court and Parliament."
        },
        {
            "text": "Identify which of the following is the only major golf tournament held outside of the US?",
            "choices": [
                "The Wimbledon Championship",
                "Royal Ascot",
                "The English Premier League",
                "The Open Championship"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Open Championship is the only 'Major' golf tournament held outside the United States. It is hosted by a dif ferent golf course every year ."
        },
        {
            "text": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "A 60 second silence is observed on the Remembrance Day",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Remembrance Day , 11 November , commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 1 1 November 1918. People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London."
        },
        {
            "text": "When was the Scottish Parliament formed?",
            "choices": [
                "1978",
                "1989",
                "1991",
                "1999"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly af fect them. There has been a Welsh Assembly and a Scottish Parliament since 1999."
        },
        {
            "text": "A 2 minutes silence is observed on Easter to commemorate the death of Jesus Christ",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Remembrance Day , 11 November , commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 1 1 November 1918. People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London."
        },
        {
            "text": "In what year did the Habeas Corpus Act become law?",
            "choices": [
                "1685",
                "1687",
                "1679",
                "1683"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Habeas Corpus Act became law in 1679. This was a very important piece of legislation which remains relevant today . Habeas corpus is Latin for 'you must present the person in court'. The Act guaranteed that no one could be held prisoner unlawfully . Every prisoner has a right to a court hearing."
        },
        {
            "text": "Which TWO are Police duties?",
            "choices": [
                "Misuse their authority",
                "Protect life and property",
                "Detect and prevent crime",
                "Be corrupt"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "The job of the police in the UK is to: protect life and property; prevent disturbances (also known as keeping the peace); prevent and detect crime."
        },
        {
            "text": "Which TWO did the Romans establish in Britain?",
            "choices": [
                "Introduced new plants and animals",
                "Introduced constitutional monarchy",
                "Created a structure of law",
                "Introduced basic democracy"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "The Romans remained in Britain for 400 years. They built roads and public buildings, created a structure of law , and introduced new plants and animals"
        }
    ]
},
{
    id: "exam6",
    title: "Practice Exam 6",
    questions: [
        {
            "text": "NSPCC is a charity for Identify which of the following?",
            "choices": [
                "Children",
                "Environment",
                "Old people",
                "Animals"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Children - the National Society for the Prevention of Cruelty to Children (NSPCC); The homeless - Crisis and Shelter; Medical research charities - Cancer Research UK; Environmental charities- the National Trust and Friends of the Earth; Animals - People's Dispensary for Sick Animals (PDSA)."
        },
        {
            "text": "Identify which of these was said by Winston Churchill?",
            "choices": [
                "Never in the field of human conflict was so much owed by so many to so few' only",
                "I have nothing to of fer but blood, toil, tears and sweat' only",
                "We shall never surrender' only",
                "All of the these"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "All of these are examples of his speeches."
        },
        {
            "text": "When is St Patrick's day?",
            "choices": [
                "17th of March",
                "1st of March",
                "23rd of April",
                "30th of November"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "Which Two British film actors have recently won Oscars?",
            "choices": [
                "Jackie Stewart",
                "Colin Firth",
                "Tilda Swinton",
                "Leonardo DiCaprio"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "Recent British actors to have won Oscars include Colin Firth, Sir Anthony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton."
        },
        {
            "text": "Identify which of the following are TWO core values of a civil servant?",
            "choices": [
                "Sense of humour",
                "Integrity",
                "Must belong to a political party",
                "Impartiality"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Civil servants are expected to carry out their role with dedication and a commitment to the civil service and its core values. These are: integrity , honesty , objectivity and impartiality"
        },
        {
            "text": "Identify which of the following is the judiciary responsible for?",
            "choices": [
                "Deciding whether a person is guilty",
                "Looking after a jury",
                "Putting people in prison",
                "Interpreting the law"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Judges, who are together called 'the judiciary', are responsible for interpreting the law and ensuring that trials are conducted fairly ."
        },
        {
            "text": "\u00a310 \u00a320 \u00a350 \u00a3100 are the only banknotes currently allowed in the UK",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The currency in the UK is the pound sterling (symbol \u00a3). There are 100 pence in a pound. The denominations (values) of currency are - coins: 1p, 2p, 5p, 10p, 20p, 50p, \u00a31 and \u00a32; notes: \u00a35, \u00a310, \u00a320, \u00a350."
        },
        {
            "text": "Identify which of these venues is located in Greenwich?",
            "choices": [
                "The SECC",
                "The O2",
                "Auditorio de Tenerife",
                "The Copenhagen Concert Hall"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are many large venues that host music events throughout the year , such as: The O2 in Greenwich and the Scottish Exhibition and Conference Centre (SECC) in Glasgow ."
        },
        {
            "text": "Identify which of the following is the responsibility that you have as a UK citizen?",
            "choices": [
                "Keeping an allotment",
                "Look after yourself and your family",
                "Going to the library",
                "Going to the cinema"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Flowing from the fundamental principles are responsibilities and freedoms which are shared by all those living in the UK and which we expect all residents to respect. If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law; respect the rights of others, including their right to their own opinions; treat others with fairness; look after yourself and your family; look after the area in which you live and the environment."
        },
        {
            "text": "During the Bronze age people lived in roundhouses and buried their dead in tombs called round barrows",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The statement is true"
        },
        {
            "text": "The European Convention on Human Rights is incorporated into UK law",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Human Rights Act 1998 incorporated the European Convention on Human Rights into UK law . The government, public bodies and the courts must follow the principles of the Convention."
        },
        {
            "text": "The Speaker is elected by fellow MPs using the open ballot system",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Speaker is chosen by other MPs in a secret ballot."
        },
        {
            "text": "Identify which of the following is the capital of Wales?",
            "choices": [
                "Belfast",
                "Edinburgh",
                "Cardif f",
                "London"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Cardif f is the capital of Wales."
        },
        {
            "text": "What is the total number of senior MPs get appointed by the Prime Minister to become ministers in charge of departments?",
            "choices": [
                "5",
                "50",
                "40",
                "20"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Prime Minister appoints about 20 senior MPs to become ministers in charge of departments. These include: Chancellor of the Exchequer: responsible for the economy; Home Secretary:responsible for crime, policing and immigration; Foreign Secretary: responsible for managing relationships with foreign countries; other ministers (called 'Secretaries of State') are responsible for subjects such as education, health and defence."
        },
        {
            "text": "Nowadays, the House of Commons has more power than the House of Lords",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The House of Commons has powers to overrule the House of Lords, but these are not used often."
        },
        {
            "text": "The Channel Islands are self-governing",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are also several islands which are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man. These have their own governments and are called 'Crown dependencies'."
        },
        {
            "text": "Hadrian's Wall is a popular UNESCO World Heritage Site",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Parts of Hadrian's Wall, including the forts of Housesteads and Vindolanda, can still be seen. It is a popular area for walkers and is a UNESCO (United Nations Education, Scientific and Cultural Organization) World Heritage Site."
        },
        {
            "text": "What's the age requirement to drink wine with a meal with someone over 18?",
            "choices": [
                "21",
                "18",
                "17",
                "16"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "16 year olds can drink wine or beer with a meal in a hotel or restaurant as long as they are with someone over 18."
        },
        {
            "text": "Protestant Christian groups include Baptists, Methodists, Presbyterians and Quakers",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Protestant Christian groups in the UK are Baptists, Methodists, Presbyterians and Quakers. There are also other denominations of Christianity , the biggest of which is Roman Catholic."
        },
        {
            "text": "Members of the public are allowed to attend Youth Courts hearings",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Members of the public are not allowed in Youth Courts, and the name or photographs of the accused young person cannot be published in newspapers or used by the media."
        },
        {
            "text": "In what year did Ireland split into two countries?",
            "choices": [
                "1916",
                "1922",
                "1959",
                "1921"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "In 1921 a peace treaty was signed and in 1922 Ireland became two countries. The six counties in the north which were mainly Protestant remained part of the UK under the name Northern Ireland. The rest of Ireland became the Irish Free State. It had its own government and became a republic in 1949."
        },
        {
            "text": "Who built the Tower of London?",
            "choices": [
                "Henry VII",
                "Henry VIII",
                "Oliver Cromwell",
                "William the Conqueror"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Tower of London was built by William the Conqueror after he became king in 1066."
        },
        {
            "text": "What were the Irish people who favoured complete independence from the UK known as?",
            "choices": [
                "Cavaliers",
                "People of Ireland",
                "Fenians",
                "Roundheads"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Irish Nationalist movement had grown strongly through the 19th century . Some, such as the Fenians, favoured complete independence."
        },
        {
            "text": "The devolved administrations each have their own civil service.",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The devolved administrations each have their own civil service."
        }
    ]
},
{
    id: "exam7",
    title: "Practice Exam 7",
    questions: [
        {
            "text": "Who wrote the Canterbury Tales?",
            "choices": [
                "William Caxton",
                "J K Rowling",
                "Charles Dickens",
                "Geof frey Chaucer"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the years leading up to 1400, Geof frey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey , and the poems describe the travellers and some of the stories they told called The Canterbury Tales."
        },
        {
            "text": "Which person is the Patron St of Wales?",
            "choices": [
                "St Andrew",
                "St Patrick",
                "St George",
                "St David"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "Who had a great influence on the English language?",
            "choices": [
                "David Lean",
                "Wilfred Owen",
                "Oliver Cromwell",
                "William Shakespeare"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Shakespeare had a great influence on the English language and invented many words that are still common today ."
        },
        {
            "text": "The Battle of Somme resulted in What is the total number of British casualties on the first day?",
            "choices": [
                "40000",
                "140000",
                "120000",
                "60000"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "One battle, the British attack on the Somme in July 1916, resulted in about 60,000 British casualties on the first day alone."
        },
        {
            "text": "Protestant ideas gradually gained strength in England, Wales and Scotland during what century?",
            "choices": [
                "16th",
                "17th",
                "15th",
                "14th"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Protestant ideas gradually gained strength in England, Wales and Scotland during the 16th century ."
        },
        {
            "text": "Towns, cities and rural areas in the UK are governed by civil servants who are appointed by the Government?",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Towns, cities and rural areas in the UK are governed by democratically elected councils, often called 'local authorities'. Some areas have both district and county councils, which have dif ferent functions. Most large towns and cities have a single local authority ."
        },
        {
            "text": "People living and working in towns after Black Death led to the development of what?",
            "choices": [
                "Slavery",
                "Young Workforce",
                "Powerful Clans",
                "Strong Middle Class"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Following the Black Death, the smaller population meant there was less need to grow cereal crops. There were labour shortages and peasants began to demand higher wages. New social classes appeared, including owners of large areas of land (later called the gentry), and people left the countryside to live in the towns. In the towns, growing wealth led to the development of a strong middle class."
        },
        {
            "text": "Who developed a radar?",
            "choices": [
                "Patrick Steptoe",
                "Mary Peters",
                "James Goodfellow",
                "Sir Robert Watson-Watt"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Radar was developed by Scotsman Sir Robert Watson-Watt (1892-1973), who proposed that enemy aircraft could be detected by radio waves. The first successful radar test took place in 1935."
        },
        {
            "text": "Which patron Saint has a white cross on a blue ground?",
            "choices": [
                "St Andrew",
                "St David",
                "St George",
                "St Patrick"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Union Flag consists of three crosses: The cross of St George, patron saint of England, is a red cross on a white ground; The cross of St Andrew , patron saint of Scotland, is a diagonal white cross on a blue ground; The cross of St Patrick, patron saint of Ireland, is a diagonal red cross on a white ground."
        },
        {
            "text": "When were the Anglo-Saxon kingdoms established in England?",
            "choices": [
                "By AD 500",
                "By AD 600",
                "By AD 550",
                "By AD 410"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "By about AD 600, Anglo-Saxon kingdoms were established in Britain. These kingdoms were mainly in what is now England."
        },
        {
            "text": "Identify which of the following is the capital of Northern Ireland?",
            "choices": [
                "Edinburgh",
                "Belfast",
                "London",
                "Cardif f"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Belfast is the capital city of Northern Ireland."
        },
        {
            "text": "In which location is the UK geographically located with respect to Europe?",
            "choices": [
                "North-East",
                "South-West",
                "South-East",
                "North-West"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The UK is located in the North-West of Europe."
        },
        {
            "text": "Who can get a 50% discount on their TV licence?",
            "choices": [
                "Blind people",
                "Students",
                "Army Officers",
                "Deaf people"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "People over 75 can apply for a free TV licence and blind people can get a 50% discount."
        },
        {
            "text": "During the reigns of Elizabeth I and James I, where did the English government encourage Scottish and English Protestants to settle?",
            "choices": [
                "Ulster",
                "Edinburgh",
                "East London",
                "Cardif f"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "During the reigns of Elizabeth I and James I, many people in Ireland opposed rule by the Protestant government in England. There were a number of rebellions. The English government encouraged Scottish and English Protestants to settle in Ulster , the northern province of Ireland, taking over the land from Catholic landholders. These settlements were known as plantations."
        },
        {
            "text": "How long is the longest straight distance on the mainland?",
            "choices": [
                "845 miles",
                "870 miles",
                "1006 miles",
                "896 miles"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The longest distance on the mainland is from John O'Groats on the north coast of Scotland to Land's End in the south-west corner of England. It is about 870 miles (approximately 1,400 kilometres)."
        },
        {
            "text": "Which person is considered ineligible to do jury service?",
            "choices": [
                "Judges",
                "Non-Christians",
                "Police",
                "Anyone with a criminal conviction"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Everyone who is summoned to do jury service must do it unless they are not eligible (for example, because they have a criminal conviction) or they provide a good reason to be excused, such as ill health."
        },
        {
            "text": "What percentage of the population has a parent or a grandparent born outside of the UK due to post-war immigration?",
            "choices": [
                "16%",
                "12%",
                "10%",
                "14%"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Post-war immigration means that nearly 10% of the population has a parent or grandparent born outside the UK."
        },
        {
            "text": "Which religion did the Huguenots follow?",
            "choices": [
                "Protestantism",
                "Catholicism",
                "Buddhism",
                "Russian Orthodox"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Between 1680 and 1720 many refugees called Huguenots came from France. They were Protestants and had been persecuted for their religion. Many were educated and skilled and worked as scientists, in banking, or in weaving or other crafts."
        },
        {
            "text": "Which one of these countries in the UK requires you to complete your own registration form to get entitled to vote?",
            "choices": [
                "Wales",
                "Northern Ireland",
                "Scotland",
                "England"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Northern Ireland a dif ferent system operates. This is called 'individual registration' and all those entitled to vote must complete their own registration form. Once registered, people stay on the register provided their personal details do not change."
        },
        {
            "text": "Magna Carta is Latin for what?",
            "choices": [
                "The act of government",
                "The Bible law",
                "The British Agreement",
                "The Great Charter"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In Latin Magna Carta means the Great Charter"
        },
        {
            "text": "To be or not to be' is a famous Shakespeare line from which play or poem?",
            "choices": [
                "Henry V",
                "Hamlet",
                "As you like it",
                "Romeo and Juliet"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Lines from Shakespeare's plays and poems which are often still quoted include: Once more unto the breach (Henry V); To be or not to be (Hamlet); A rose by any other name (Romeo and Juliet); All the world's a stage (As You Like It); The darling buds of May (Sonnet 18 'Shall I Compare Thee To a Summer's Day)."
        },
        {
            "text": "Which individual was the first Danish king in England?",
            "choices": [
                "Cnut",
                "Edward",
                "Harold",
                "William"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Anglo-Saxon kings continued to rule what is now England, except for a short period when there were Danish kings. The first of these was Cnut, also called Canute."
        },
        {
            "text": "Identify which of the following is the Church of England usually known as in other countries?",
            "choices": [
                "The State Church",
                "The Anglican Church",
                "The Great Church",
                "The Episcopal Church"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The official Church of the state is the Church of England, called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States."
        },
        {
            "text": "Which individual was the 'Iron Duke' that defeated the Emperor Napoleon?",
            "choices": [
                "Churchill",
                "Sir Christopher Wren",
                "Wellington",
                "Admiral Nelson"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo. Wellington was known as the Iron Duke and later became Prime Minister ."
        }
    ]
},
{
    id: "exam8",
    title: "Practice Exam 8",
    questions: [
        {
            "text": "The Welsh Dragon doesn't appear on the Union Flag because Wales was already united with England in 1606",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Welsh dragon does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already united with England."
        },
        {
            "text": "Mothering Sunday is the third Sunday in June",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Mothering Sunday (or Mother's Day) is the Sunday three weeks before Easter . Children send cards or buy gifts for their mothers."
        },
        {
            "text": "Identify which of the following are the MPs who don't represent a political party called?",
            "choices": [
                "Independents",
                "Civil MP",
                "Neutrals",
                "Sole MP"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "There are a few MPs who do not represent any of the main political parties. They are called 'independents' and usually represent an issue important to their constituency ."
        },
        {
            "text": "What can be done to protect a person from being forced into a marriage, or to protect a person in a forced marriage?",
            "choices": [
                "Ask the priest to verify the identities",
                "Check the age of both people to make sure they are over 18",
                "Check the age of both people to make sure they are over 25",
                "Court orders can be obtained by a potential victim or someone acting for them"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "them Forced Marriage Protection Orders were introduced in 2008 for England, Wales and Northern Ireland under the Forced Marriage (Civil Protection) Act 2007. Court orders can be obtained to protect a person from being forced into a marriage, or to protect a person in a forced marriage. Similar Protection Orders were introduced in Scotland in November 201 1."
        },
        {
            "text": "D-Day is the day when the British evacuated the French from Normandy",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "On 6 June 1944, allied forces landed in Normandy (this event is often referred to as 'D-Day')."
        },
        {
            "text": "Identify which of the following is the National Citizen Service?",
            "choices": [
                "It provides free, confidential and impartial advice on consumer issues",
                "It is a volunteering programme for young people who want to do voluntary development work abroad",
                "It provides free, independent, impartial advice on your rights and responsibilities",
                "It helps you build your skills for work and life"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "There are many opportunities for young people to volunteer and receive accreditation which will help them to develop their skills. These include the National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project."
        },
        {
            "text": "In what year did the American Colonies declare their independence?",
            "choices": [
                "1776",
                "1749",
                "1733",
                "1783"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1776, 13 American colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British army and Britain recognised the colonies' independence in 1783."
        },
        {
            "text": "Robert Browning, William Blake and Lord Byron were all famous poets",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The statement is true"
        },
        {
            "text": "Identify which of the following is the 'King James' Bible?",
            "choices": [
                "The Protestant Version",
                "The Correct Version",
                "The First English Bible",
                "A new translation into English"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "One achievement of King James' reign was a new translation of the Bible into English. This translation is known as the 'King James Version' or the 'Authorised Version'. It was not the first English Bible but is a version which continues to be used in many Protestant churches today ."
        },
        {
            "text": "Sir Edward Elgar is known for his famous music work - 'The Planets'",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "More recently , important composers include Gustav Holst (1874-1934), whose work includes The Planets, a suite of pieces themed around the planets of the solar system. He adapted Jupiter , part of the Planets suite, as the tune for I vow to thee my country , a popular hymn in British churches."
        },
        {
            "text": "Magistrates and Justices of the Peace (JPs) are members of what?",
            "choices": [
                "Law Society",
                "Local Community",
                "Ruling Party",
                "Police Force"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Magistrates and Justices of the Peace (JPs) are members of the local community . In England, Wales and Scotland they usually work unpaid and do not need legal qualifications. They receive training to do the job and are supported by a legal adviser ."
        },
        {
            "text": "When is Halloween (an ancient festival) celebrated?",
            "choices": [
                "31st November",
                "31st October",
                "30th October",
                "30th November"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Halloween, 31 October , is an ancient festival and has roots in the pagan festival to mark the beginning of winter . Young people will often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."
        },
        {
            "text": "What county does Stonehenge stand in?",
            "choices": [
                "Wiltshire",
                "Dorset",
                "Lothians",
                "Lincolnshire"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Stonehenge still stands in what is now the English county of Wiltshire. Stonehenge was probably a special gathering place for seasonal ceremonies."
        },
        {
            "text": "Satirical magazines began to be published in the 19th century . When was 'Punch' first published?",
            "choices": [
                "1890s",
                "1810s",
                "1870s",
                "1840s"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Punch' was published for the first time in the 1840s"
        },
        {
            "text": "What yearly event happens between Oxford and Cambridge Universities?",
            "choices": [
                "A Rowing Race",
                "A Game of Football",
                "A Tennis Match",
                "A game of Basketball"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Rowing is also popular , both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities."
        },
        {
            "text": "What is the total number of members does The Northern Ireland Assembly have?",
            "choices": [
                "90",
                "129",
                "119",
                "110"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Northern Ireland Assembly was established soon after the Belfast Agreement (or Good Friday Agreement) in 1998. There is a power-sharing agreement which distributes ministerial Offices amongst the main parties. The Assembly has 90 elected members (reduced from 108 in 2016), known as MLAs (members of the Legislative Assembly). They are elected with a form of proportional representation. The Assembly is chaired by a Speaker and three deputy Speakers. At least 10 members (including the Speaker) must be present in order for a vote to be taken on any matter ."
        },
        {
            "text": "Who can nominate life peers? (Select TWO)",
            "choices": [
                "The Prime Minister",
                "The Monarchy",
                "The Speaker",
                "Leaders of other main political parties"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Since 1958, the Prime Minister has had the power to nominate peers just for their own lifetime. These are called life peers. Life peers are appointed by the monarch on the advice of the Prime Minister . They also include people nominated by the leaders of the other main political parties or by an independent Appointments Commission for non-party peers."
        },
        {
            "text": "Robert the Bruce is associated with which country?",
            "choices": [
                "England",
                "Ireland",
                "Scotland",
                "Wales"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1314 the Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn, and Scotland remained unconquered by the English."
        },
        {
            "text": "Discrimination in the workplace is a criminal offence",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "An example of civil laws are disputes over wages and cases of unfair dismissal or discrimination in the workplace."
        },
        {
            "text": "As per 2021 census, what percentage of the population in England and Wales doesn't follow a religion?",
            "choices": [
                "14%",
                "21%",
                "6%",
                "37%"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The 2021 Census results released so far show 37% of people in England and Wales (from a total sampled 60 million) stated not to follow any religion. 46% of people identified themselves as Christian. Much smaller proportions identified themselves as Hindu (2%), Sikh (1%), Jewish or Buddhist (both around 0.5%), while 0.5% of people followed another religion."
        },
        {
            "text": "In what year did Protestant ideas begin to spread?",
            "choices": [
                "15th century",
                "18th century",
                "17th century",
                "16th century"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Protestant ideas gradually gained strength in England, Wales and Scotland during the 16th century ."
        },
        {
            "text": "National Insurance is needed if you wish to work in the UK",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions. The money raised from National Insurance Contributions is used to pay for state benefits and services such as the state retirement pension and the National Health Service (NHS)."
        },
        {
            "text": "The Archbishop of Canterbury is the spiritual leader of the Church of England",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The spiritual leader of the Church of England is the Archbishop of Canterbury . The monarch has the right to select the Archbishop and other senior church officials, but usually the choice is made by the Prime Minister and a committee appointed by the Church. Several Church of England bishops sit in the House of Lords. The monarch is the head of state of the church."
        },
        {
            "text": "What did Henry VII do?",
            "choices": [
                "Restricted King's power",
                "Broke away from the Church of Rome",
                "Increased the power of the nobles",
                "Reduced the power of the nobles"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Henry VII wanted to make sure that England remained peaceful and that his position as king was secure. He deliberately strengthened the central administration of England and reduced the power of the nobles."
        }
    ]
},
{
    id: "exam9",
    title: "Practice Exam 9",
    questions: [
        {
            "text": "What was the system of land ownership used by the Normans known as?",
            "choices": [
                "The Magna Carta",
                "Noble land",
                "Feudalism",
                "Democracy"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Normans used a system of land ownership known as feudalism. The king gave land to his lords in return for help in war . Landowners had to send certain numbers of men to serve in the army . Some peasants had their own land but most were serfs."
        },
        {
            "text": "The small claims procedure in Northern Ireland is used for claims of less than what amount?",
            "choices": [
                "\u00a31,000",
                "\u00a35,000",
                "\u00a320,000",
                "\u00a310,000"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer . This procedure is used for claims of less than \u00a310,000 in England and Wales; \u00a35,000 in Scotland and \u00a35,000 in Northern Ireland (Changed from \u00a33000)."
        },
        {
            "text": "Where were the first farmers that came to Britain from?",
            "choices": [
                "South west Europe",
                "North Europe",
                "South east Europe",
                "North west Europe"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The first farmers arrived in Britain about 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe."
        },
        {
            "text": "When was the Emancipation Act signed? It abolished slavery throughout the British Empire",
            "choices": [
                "1837",
                "1807",
                "1817",
                "1833"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Along with other abolitionists (people who supported the abolition of slavery), William Wilberforce succeeded in turning public opinion against the slave trade. In 1807, it became illegal to trade slaves in British ships or from British ports, and in 1833 the Emancipation Act abolished slavery throughout the British Empire."
        },
        {
            "text": "For What is the total number of years did Charles I raise money without Parliament's approval?",
            "choices": [
                "11",
                "15",
                "12",
                "10"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "For 1 1 years, Charles I found ways in which to raise money without Parliament's approval but eventually trouble in Scotland meant that he had to recall Parliament."
        },
        {
            "text": "People living in the UK must pay tax on Identify which of the following TWO?",
            "choices": [
                "Payday Loans",
                "Wages from paid employment",
                "Student Loans",
                "Income from property , savings and dividends"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "People in the UK have to pay tax on their income, which includes: wages from paid employment; profits from self-employment, taxable benefits; pensions; income from property , savings and dividends."
        },
        {
            "text": "What was the name of the movement which protested against the Roman Catholic church during Henry VIII's time?",
            "choices": [
                "Glorious Revolution",
                "Rebellion of the Clans",
                "Holy Wars",
                "The Reformation"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "During Henry III's reign, the Reformation was happening across Europe. This was a movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church."
        },
        {
            "text": "Name the most famous cricket competition, which is a series of Test matches played between England and Australia",
            "choices": [
                "Lords",
                "Ashes",
                "Classics",
                "Masters"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The most famous competition is the Ashes, which is a series of Test matches played between England and Australia."
        },
        {
            "text": "Roast beef is a traditional food of which country?",
            "choices": [
                "England",
                "Northern Ireland",
                "Wales",
                "Scotland"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Roast beef, which is served with potatoes is an example of English traditional food."
        },
        {
            "text": "Who tried to arrest 5 parliamentary leaders from the House of Commons?",
            "choices": [
                "Charles I",
                "James I",
                "Henry VIII",
                "Henry VII"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Charles I entered the House of Commons and tried to arrest five parliamentary leaders, but they had been warned and were not there. This led to the English Civil war in 1642."
        },
        {
            "text": "Where was Emmeline Pankhurst born?",
            "choices": [
                "Aberdeen",
                "Glasgow",
                "Manchester",
                "London"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Emmeline Pankhurst was born in Manchester in 1858. She set up the Women's Franchise League in 1889, which fought to get the vote in local elections for married women."
        },
        {
            "text": "What system can be used to complete a tax return if you are self- employed?",
            "choices": [
                "PAYE (Pay as you earn)",
                "National Insurance contribution",
                "Self-checkout",
                "Self-assessment"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "For most people, the right amount of income tax is automatically taken from their income from employment by their employer and paid directly to HM Revenue Customs (HMRC), the government department that collects taxes. This system is called 'Pay As You Earn' (P AYE). If you are self-employed, you need to pay your own tax through a system called 'self- assessment', which includes completing a tax return."
        },
        {
            "text": "Identify which of the following is the name of the building where the Northern Irish Assembly meets?",
            "choices": [
                "Westminster",
                "Stormont",
                "Senedd",
                "Holyrood"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Northern Ireland elected members, known as MLAs, meet in the Northern Ireland Assembly at Stormont, in Belfast."
        },
        {
            "text": "Identify which of these is not a music festival?",
            "choices": [
                "Glastonbury",
                "Creamfields",
                "The Fringe",
                "Vfestival"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Edinburgh Festival takes place in Edinburgh, Scotland, every summer . The Fringe (One of the festivals) is a showcase of mainly theatre and comedy performances."
        },
        {
            "text": "Which person is Sir Chris Hoy?",
            "choices": [
                "A Scottish tennis player",
                "A Scottish rower",
                "A Scottish runner",
                "A Scottish cyclist"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Sir Chris Hoy (1976-) is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 1 1 world championship titles."
        },
        {
            "text": "Children's Hearings system is used in which country?",
            "choices": [
                "Wales",
                "Scotland",
                "Northern Ireland",
                "England"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Scotland a system called the Children's Hearings System is used to deal with children and young people who have committed an of fence. Northern Ireland has a system of youth conferencing to consider how a child should be dealt with when they have committed an offence."
        },
        {
            "text": "Volunteering is compulsory in the UK",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Volunteering is working for good causes without payment. It is not compulsory ."
        },
        {
            "text": "What can 'Carry on' be associated with?",
            "choices": [
                "Art",
                "Novels",
                "Music",
                "Films"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The 1950s and 1960s were a high point for British comedies, including Passport to Pimlico, The Ladykillers and, later , the Carry On films."
        },
        {
            "text": "The Victoria Cross medal was introduced during which war?",
            "choices": [
                "The Crimean War",
                "The First World War",
                "The Second World War",
                "The Hundred Years War"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Queen Victoria introduced the Victoria Cross medal during the Crimean war . It honours acts of valour by soldiers."
        },
        {
            "text": "Identify which of the following is Richard Arkwright remembered for?",
            "choices": [
                "Creating a carding machine",
                "Efficiently running factories",
                "Cutting hair",
                "Improving steam power"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Born in 1732, Arkwright originally trained and worked as a barber . He was able to dye hair and make wigs. When wigs became less popular , he started to work in textiles. He improved the original carding machine. Arkwright is particularly remembered for the efficient and profitable way that he ran his factories."
        },
        {
            "text": "The burial place of one of the kings was at Sutton Hoo in modern Suffolk",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The burial place of one of the Anglo-Saxon kings was at Sutton Hoo in modern Suf folk. This king was buried with treasure and armour , all placed in a ship which was then covered by a mound of earth."
        },
        {
            "text": "In 1284 King Edward I of England introduced the Statute of Rhuddlan, which annexed Wales to the Crown of England.",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1284 King Edward I of England introduced the Statute of Rhuddlan, which annexed Wales to the Crown of England."
        },
        {
            "text": "Who tells visitors about the history of the Tower of London?",
            "choices": [
                "Instructors",
                "London Guides",
                "Beefeaters",
                "History graduates"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Tower of London was first built by William the Conqueror after he became king in 1066. Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building's history . People can also see the Crown Jewels there."
        },
        {
            "text": "Identify which of the following statements does NOT apply to the United Nations?",
            "choices": [
                "It aims to prevent war",
                "It was set up after the Second World War",
                "The UN has five members in total",
                "The UK is one of five permanent members of the UN Security Council"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security . There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council."
        }
    ]
},
{
    id: "exam10",
    title: "Practice Exam 10",
    questions: [
        {
            "text": "As per 2021 survey , what percentage of Wales and England identified as Muslim?",
            "choices": [
                "11%",
                "6%",
                "2%",
                "16%"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Islam is the second largest religion in the United Kingdom. The 2021 Census results released so far show a population of 3,868,133 (6.5%) in England and Wales (from a total sampled 60 million). 46% of people identified themselves as Christian. Much smaller proportions identified themselves as Hindu (2%), Sikh (1%), Jewish or Buddhist (both around 0.5%), 0.5% of people followed another religion and 37% stated not to follow any religion."
        },
        {
            "text": "What exactly does the money raised from National Insurance Contributions pay for? (Choose TWO)",
            "choices": [
                "Child benefits",
                "NHS",
                "The state retirement pension",
                "Job allowances"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "The money raised from National Insurance Contributions is used to pay for state benefits and services such as the state retirement pension and the National Health Service (NHS)."
        },
        {
            "text": "The flag of which country is not part of the Union Flag?",
            "choices": [
                "Wales",
                "Ireland",
                "Scotland",
                "England"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Welsh dragon is not part of the Union Flag."
        },
        {
            "text": "Who in 2002 was voted the greatest Briton of all time?",
            "choices": [
                "Clement Attlee",
                "Margaret Thatcher",
                "Sir Robert Walpole",
                "Winston Churchill"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 2002, Winston Churchill was voted the greatest Briton of all time by the public."
        },
        {
            "text": "Identify which of the following is the name of the song sung by people in the UK and other countries when celebrating the New Year?",
            "choices": [
                "Auld Lang Syne",
                "Sense and Sensibility",
                "The Heart of the Matter",
                "Scoop"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "One of the songs sung by people in the UK at New Year is Auld Lang Syne."
        },
        {
            "text": "Identify which of these UK landmarks is in Wales?",
            "choices": [
                "The Lake District",
                "Snowdonia",
                "Loch Lomond",
                "The Giant's Causeway"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Snowdonia is a national park in North Wales. It covers an area of 838 square miles. Its most well-known landmark is Snowdon, which is the highest mountain in Wales."
        },
        {
            "text": "Who designed the new St Paul's?",
            "choices": [
                "Sir Christopher Wren",
                "Gertrude Jekyll",
                "Robert Adam",
                "Sir Edwin Lutyens"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1666, a great fire destroyed much of the city , including many churches and St Paul's Cathedral. London was rebuilt with a new St Paul's, which was designed by a famous architect, Sir Christopher Wren."
        },
        {
            "text": "The Commonwealth can suspend any of its members",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Membership is voluntary . The Commonwealth has no power over its members, although it can suspend membership."
        },
        {
            "text": "The Chartists are associated with the Civil War which took place in the 17th century",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In the 1830s and 1840s, a group called the Chartists campaigned for reform. They wanted six changes: for every man to have the vote; elections every year; for all regions to be equal in the electoral system; secret ballots; for any man to be able to stand as an MP; for MPs to be paid."
        },
        {
            "text": "The role and membership of the House of Lords has changed over the last 50 years",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The role and membership of the House of Lords has changed over the last 50 years."
        },
        {
            "text": "Who can stand for office as a Local Councillor?",
            "choices": [
                "British, Irish and Eligible Commonwealth citizens",
                "British citizens of the UK only",
                "All residents of the UK",
                "Foreign citizens only"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "British citizens can stand for Office as a local councillor , a member of Parliament (or the devolved equivalents). This is an opportunity to become even more involved in the political life of the UK. You may also be able to stand for Office if you are an Irish citizen, or an eligible Commonwealth citizen."
        },
        {
            "text": "In 1348, a disease, probably a form of plague, came to Britain. What was it called?",
            "choices": [
                "Giant Evil",
                "White Death",
                "Black Death",
                "Malaria"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1348, a disease, probably a form of plague, came to Britain. This was known as the Black Death. One third of the population of England died and a similar proportion in Scotland and Wales."
        },
        {
            "text": "Which TWO wives of Henry VIII were executed?",
            "choices": [
                "Jayne Seymour",
                "Catherine Howard",
                "Anne Boleyn",
                "Anne of Cleves"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "Anne Boleyn was English. She and Henry had one daughter , Elizabeth. Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London. Catherine was a cousin of Anne Boleyn. She was also accused of taking lovers and executed."
        },
        {
            "text": "How often do PM's Questions take place in the parliament?",
            "choices": [
                "Every Week",
                "Every Two Weeks",
                "Every Working Day",
                "Every Month"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The leader of the opposition leads his or her party in pointing out what they see as the government's failures and weaknesses. One important opportunity to do this is at Prime Minister's Questions, which takes place every week while Parliament is sitting."
        },
        {
            "text": "After the Black Death, a new social class appeared, - owners of large areas of land. What were they called?",
            "choices": [
                "The Gentry",
                "The Tudors",
                "The Clans",
                "The Serfs"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "New social classes appeared, including owners of large areas of land called 'the gentry', and people left the countryside to live in the towns. In the towns, growing wealth led to the development of a strong middle class."
        },
        {
            "text": "Identify which of the following is the BBC funded by?",
            "choices": [
                "The local council",
                "TV licences",
                "The government",
                "Advertisements"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Money from TV licences goes to the BBC."
        },
        {
            "text": "Which of the options given below is not necessary for a new car?",
            "choices": [
                "Car insurance",
                "Seat belts",
                "MOT test",
                "Road tax"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "If your vehicle is over three years old, you must take it for a Ministry of Transport (MOT) test every year . It is an of fence not to have an MOT certificate if your vehicle is more than three years old."
        },
        {
            "text": "Which country's national flower is a thistle?",
            "choices": [
                "Northern Ireland",
                "England",
                "Scotland",
                "Wales"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "A thistle is a national flower of Scotland."
        },
        {
            "text": "Whom did the serfs serve?",
            "choices": [
                "Knights",
                "Lords",
                "Peasants",
                "Slaves"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Normans used a system of land ownership known as feudalism. The king gave land to his lords in return for help in war . Landowners had to send certain numbers of men to serve in the army . Some peasants had their own land but most were serfs."
        },
        {
            "text": "The Proms is an eight-week summer season of what?",
            "choices": [
                "Classic Pop music",
                "Heavy metal music",
                "Orchestral classical music",
                "Underground Hip-Hop music"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Proms is an eight-week summer season of orchestral (or solo instrumental) classical music that takes place in various venues, including the Royal Albert Hall in London. It has been organised by the British Broadcasting Corporation (BBC) since 1927. The Last Night of the Proms is the most well-known concert and (along with others in the series) is broadcast on television."
        },
        {
            "text": "Great Britain' and 'the United Kingdom' have the same meaning",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The official name of the country is the United Kingdom of Great Britain and Northern Ireland. 'Great Britain' refers only to England, Scotland and Wales, not to Northern Ireland."
        },
        {
            "text": "How can you make a complaint about the Police? (Choose TWO)",
            "choices": [
                "Going to a police station",
                "Writing to the Chief Constable of the police force involved",
                "Visiting a council office",
                "Visiting the local polling places"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "Anyone can make a complaint about the police by going to a police station or writing to the Chief Constable of the police force involved."
        },
        {
            "text": "The Civil War in 1642 split the country into which two groups?",
            "choices": [
                "House of York and House of Lancaster",
                "The landowners and the slaves",
                "House of Commons and House of Lords",
                "The Roundheads and the Cavaliers"
            ],
            "multiple": true,
            "correct": [
                3,
                0
            ],
            "explanation": "Civil war between the king and Parliament could not now be avoided and began in 1642. The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
        },
        {
            "text": "What is the total number of member states does the Commonwealth have?",
            "choices": [
                "56",
                "48",
                "28",
                "77"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Queen/King is the ceremonial head of the Commonwealth, which currently has 56 member states. Membership is voluntary ."
        }
    ]
},
{
    id: "exam11",
    title: "Practice Exam 11",
    questions: [
        {
            "text": "Anyone Which person is on the electoral register and is aged 18-75 can be asked to serve on a jury",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "As well as getting the right to vote, people on the electoral register are randomly selected to serve on a jury . Anyone who is on the electoral register and is aged 18 to 75 can be asked to do this. The age limit has been raised from 70 to 75 in Wales and England in 2016."
        },
        {
            "text": "Who wrote about their experiences in the First World War?",
            "choices": [
                "Lord Byron and John Masefield",
                "Wilfred Owen and William Blake",
                "Wilfred Owen and Siegfried Sassoon",
                "Elizabeth and Robert Browning"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Wilfred Owen and Siegfried Sassoon - were inspired to write about their experiences in the First World War."
        },
        {
            "text": "Which TWO countries took part in the Battle of Agincourt?",
            "choices": [
                "France",
                "Scotland",
                "Wales",
                "England"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "English kings also fought a long war with France, called the Hundred Years War (even though it actually lasted 1 16 years). One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V's vastly outnumbered English army defeated the French. The English left France in the 1450s."
        },
        {
            "text": "Identify which of the following is the Shadow Cabinet?",
            "choices": [
                "The cabinet that is in trouble",
                "The name of the office of the Leader of the Opposition in the Parliament",
                "Senior members of the main opposition party who 'shadow' Government ministers in different departments",
                "The cabinet where the Prime Minister had to resign"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "ministers in different departments The leader of the opposition leads his or her party in pointing out what they see as the government's failures and weaknesses. The leader of the opposition also appoints senior opposition MPs to be 'shadow ministers'. They form the shadow cabinet and their role is to challenge the government and put forward alternative policies."
        },
        {
            "text": "What were James II's supporters known as?",
            "choices": [
                "Quakers",
                "Jacobites",
                "Cavaliers",
                "Roundheads"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Some continued to believe that James was the rightful king, particularly in Scotland. Some joined him in exile in France; others were secret supporters. James' supporters became known as Jacobites."
        },
        {
            "text": "Which Armed Force was used in the Battle of Britain?",
            "choices": [
                "Royal Navy",
                "Home Guards",
                "Army",
                "Royal Air Force"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Germans waged an air campaign against Britain, but the British resisted with their fighter planes and eventually won the crucial aerial battle against the Germans, called 'the Battle of Britain', in the summer of 1940. The most important planes used by the Royal Air Force in the Battle of Britain were the Spitfire and the Hurricane - which were designed and built in Britain."
        },
        {
            "text": "Which famous poet's work was inspired by Nature?",
            "choices": [
                "Sir Roger Bannister",
                "William Wordsworth",
                "Damon Hill",
                "Charles Dicken"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Other poets, including William Wordsworth, were inspired by nature. Sir Walter Scott wrote poems inspired by Scotland and the traditional stories and songs from the area on the borders of Scotland and England. He also wrote novels, many of which were set in Scotland."
        },
        {
            "text": "Who developed ideas about economics during the Enlightenment period which are still referred to today?",
            "choices": [
                "David Hume",
                "Adam Smith",
                "James Watt",
                "Isaac Newton"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Many of the great thinkers of the Enlightenment were Scottish. Adam Smith developed ideas about economics which are still referred to today . David Hume's ideas about human nature continue to influence philosophers. Scientific discoveries, such as James Watt's work on steam power , helped the progress of the Industrial Revolution."
        },
        {
            "text": "What is the total number of American colonies declared their independence in 1776?",
            "choices": [
                "13",
                "17",
                "7",
                "5"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1776, 13 American colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British army and Britain recognised the colonies' independence in 1783."
        },
        {
            "text": "Where does the Grand National takes place?",
            "choices": [
                "Near Suf folk",
                "Near London",
                "Near Manchester",
                "Near Liverpool"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "There are racecourses all over the UK. Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suf folk."
        },
        {
            "text": "What should you do when you move into a new house or apartment?",
            "choices": [
                "Do nothing",
                "Warn the people who live near you not to talk to you",
                "Tell the people who live near you not to make noise",
                "Introduce yourself to the people who live near you so they can help you"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "When you move into a new house or apartment, introduce yourself to the people who live near you. Getting to know your neighbours can help you to become part of the community and make friends."
        },
        {
            "text": "For what reason is it known as 'The Glorious Revolution'?",
            "choices": [
                "Women were given the right to vote",
                "Because of new technological advances",
                "Because there was no fighting",
                "Because of new achievements"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "This event was later called the 'Glorious Revolution' because there was no fighting in England and because it guaranteed the power of Parliament, ending the threat of a monarch ruling on his or her own as he or she wished."
        },
        {
            "text": "What created the United Kingdom of Great Britain and Ireland?",
            "choices": [
                "The Great governments",
                "The Act for the governments",
                "The Great Union",
                "The Act of Union"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Act of Union of 1800 created the United Kingdom of Great Britain and Ireland."
        },
        {
            "text": "Which person is credited with the introduction of the National Health Service (NHS) in 1948?",
            "choices": [
                "David Hume",
                "Florence Nightingale",
                "Aneurin Bevan",
                "Winston Churchill"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1948, Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS), which guaranteed a minimum standard of health care for all, free at the point of use"
        },
        {
            "text": "It is illegal to sell tobacco products such as cigarettes, cigars, roll-up tobacco to anyone under what age?",
            "choices": [
                "16",
                "21",
                "18",
                "17"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "It is illegal to sell tobacco products (for example, cigarettes, cigars, roll-up tobacco) to anyone under the age of 18."
        },
        {
            "text": "Peers nominated by the Prime Minister can only serve for their lifetime",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Since 1958, the Prime Minister has had the power to nominate peers just for their own lifetime. These are called life peers. They have usually had an important career in politics, business, law or another profession. Life peers are appointed by the monarch on the advice of the Prime Minister ."
        },
        {
            "text": "What religion were Puritans?",
            "choices": [
                "Jews",
                "Buddhists",
                "Catholics",
                "Protestants"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Puritans, a group of Protestants who advocated strict and simple religious doctrine and worship."
        },
        {
            "text": "It is illegal for any person under the age of 18 to buy a Lottery ticket",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There is a National Lottery for which draws are made every week. You can enter by buying a ticket or a scratch card. People under 18 (Changed in 2021 from 16 to 18) are not allowed to participate in the National Lottery ."
        },
        {
            "text": "Identify which of the following is meant by 'common law'?",
            "choices": [
                "Written down",
                "Codified",
                "Following previous decisions",
                "Sentence is decided by the jury"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In England, judges developed 'common law' by a process of precedence (that is, following previous decisions) and tradition. In Scotland, the legal system developed slightly dif ferently and laws were 'codified' (that is, written down)."
        },
        {
            "text": "What destroyed London in year 1666?",
            "choices": [
                "Nuclear Plant",
                "Fire",
                "Water",
                "Plague"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "During Charles II's reign, in 1665, there was a major outbreak of plague in London. Thousands of people died, especially in poorer areas. The following year , a great fire destroyed much of the city , including many churches and St Paul's Cathedral."
        },
        {
            "text": "Which individual was the first Briton to win the Olympic gold medal in the 10,000 meters?",
            "choices": [
                "Mo Farah",
                "Sir Chris Hoy",
                "Bradley Wiggins",
                "David Weir"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Mo Farah was the first British runner to win the gold medal in the 10 km."
        },
        {
            "text": "Which tribes invaded Britain after the Romans had left?",
            "choices": [
                "The Vikings",
                "The Jutes and the Anglo-Saxons",
                "The Celtics",
                "The Normans"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned. Britain was again invaded by tribes from northern Europe: the Jutes, the Angles and the Saxons."
        },
        {
            "text": "Identify which of the following is the money limit for the small claims procedure in England and Wales?",
            "choices": [
                "\u00a310,000",
                "\u00a33,000",
                "\u00a32,000",
                "\u00a34,000"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer . This procedure is used for claims of less than \u00a310,000 in England and Wales; \u00a35,000 in Scotland and \u00a35,000 in Northern Ireland (Changed from \u00a33000)."
        },
        {
            "text": "In which location is Snowdonia located?",
            "choices": [
                "Wales",
                "North England",
                "Scotland",
                "West England"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Snowdonia is a national park in North Wales. It covers an area of 838 square miles (2,170 square kilometres). Its most well-known landmark is Snowdon, which is the highest mountain in Wales."
        }
    ]
},
{
    id: "exam12",
    title: "Practice Exam 12",
    questions: [
        {
            "text": "Identify which of the following is referred to as Lent?",
            "choices": [
                "The 40 days before Easter",
                "The 40 days after Christmas",
                "The 40 days before Christmas",
                "The 40 days after Easter"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The 40 days before Easter are known as Lent."
        },
        {
            "text": "In what year did the BBC begin the world's first regular TV service?",
            "choices": [
                "1922",
                "1938",
                "1936",
                "1921"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The BBC started radio broadcasts in 1922 and began the world's first regular television service in 1936."
        },
        {
            "text": "It is a legal requirement that men and women should not be discriminated against due to their gender or marital status",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "UK laws ensure that people are not treated unfairly in any area of life or work because of their age, disability , sex, pregnancy and maternity , race, religion or belief, sexuality or marital status."
        },
        {
            "text": "Which individual was Queen Elizabeth II married to?",
            "choices": [
                "Prince Philip",
                "Prince William",
                "Prince Harry",
                "King Charles III"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Queen Elizabeth II reigned since her father's death in 1952, (she celebrated her Diamond Jubilee i.e. 60 years as queen) until she passed away in 2022. She was married to Prince Philip, the Duke of Edinburgh. Her eldest son, King Charles III (previously known as the Prince of Wales) became the sovereign monarch in 2022. His eldest son, heir to the throne, Prince William is the new Prince of Wales."
        },
        {
            "text": "Select TWO popular social networking websites",
            "choices": [
                "Telephone",
                "E-mail",
                "Twitter",
                "Facebook"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Social networking websites such as Facebook and Twitter are a popular way for people to stay in touch with friends, organise social events, and share photos, videos and opinions. Many people use social networking on their mobile phones when out and about."
        },
        {
            "text": "When was the Scottish Parliament established?",
            "choices": [
                "1999",
                "1997",
                "2000",
                "1998"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "There has been a Welsh Assembly and a Scottish Parliament since 1999."
        },
        {
            "text": "Where are the more serious civil cases dealt with in Scotland?",
            "choices": [
                "Court of Session in Edinburgh",
                "Sherif f Court",
                "High Court",
                "Peace Courts"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "More serious civil cases - for example, when a large amount of compensation is being claimed - are dealt with in the High Court in England, Wales and Northern Ireland. In Scotland, they are dealt with in the Court of Session in Edinburgh."
        },
        {
            "text": "It is illegal for shops and businesses to not accept the banknotes of Northern Ireland and Scotland",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However , shops and businesses do not have to accept them."
        },
        {
            "text": "Which languages were the basis of modern English?",
            "choices": [
                "Norman French and Anglo Saxon",
                "Gaelic and Celtic",
                "Norman French and Celtic",
                "Celtic and Anglo Saxon"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon. Gradually these two languages combined to become one English language."
        },
        {
            "text": "What is the total number of countries make up the EU?",
            "choices": [
                "54",
                "190",
                "15",
                "27"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. After the Brexit vote to leave in 2020, there are now 27 EU member states"
        },
        {
            "text": "Which flower is associated with England?",
            "choices": [
                "Rose",
                "Shamrock",
                "Thistle",
                "Daffodil"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "A rose is the flower associated with England."
        },
        {
            "text": "In what year did the English civil war begin?",
            "choices": [
                "1646",
                "1641",
                "1642",
                "1640"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Civil war between the king and Parliament could not now be avoided and began in 1642. The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
        },
        {
            "text": "Where was Isaac Newton born?",
            "choices": [
                "Wales",
                "England",
                "Ireland",
                "Scotland"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Born in Lincolnshire, eastern England, Isaac Newton first became interested in science when he studied at Cambridge University ."
        },
        {
            "text": "Which event is celebrated on the 5th of November each year?",
            "choices": [
                "The defeat of the Spanish Armada",
                "A plot to blow up the Houses of Parliament in 1605",
                "The end of the First World War",
                "The end of the Second World War"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Bonfire Night, 5 November , is an occasion when people in Great Britain set of f fireworks at home or in special displays. The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament."
        },
        {
            "text": "Radar was developed by Scotsman Sir Robert Watson-Watt",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Radar was developed by Scotsman Sir Robert Watson-Watt (1892-1973), who proposed that enemy aircraft could be detected by radio waves. The first successful radar test took place in 1935."
        },
        {
            "text": "The Scottish Parliament (after the Magna Carta was established in England) was split into two estates: the Lords and the Commons",
            "choices": [
                "True",
                "False"
            ],
            "multiple": true,
            "correct": [
                1,
                0
            ],
            "explanation": "In England, the nobility , great landowners and bishops sat in the House of Lords. Knights, who were usually smaller landowners, and wealthy people from towns and cities were elected to sit in the House of Commons. Only a small part of the population was able to join in electing the members of the Commons. In Scotland, the parliament had three Houses, called Estates: the Lords, the Commons and the Clergy ."
        },
        {
            "text": "During Slave trade, where did slaves primarily come from?",
            "choices": [
                "South Africa",
                "North Africa",
                "East Africa",
                "West Africa"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Slaves came primarily from West Africa. Travelling on British ships in horrible conditions, they were taken to America and the Caribbean, where they were made to work on tobacco and sugar plantations."
        },
        {
            "text": "In what year did the Irish Free State become a republic?",
            "choices": [
                "1922",
                "1931",
                "1937",
                "1949"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1922 Ireland became two countries. The six counties in the north which were mainly Protestant remained part of the UK under the name Northern Ireland. The rest of Ireland became the Irish Free State. It had its own government and became a republic in 1949."
        },
        {
            "text": "What were the people who supported the King known as in 1642?",
            "choices": [
                "Roundheads",
                "Quakers",
                "Chartists",
                "Cavaliers"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "During the English Civil War (1642) the country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
        },
        {
            "text": "Who mapped the coast of Australia?",
            "choices": [
                "James Cook",
                "Sake Dean Mahomet",
                "Sir Francis Drake",
                "Admiral Nelson"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Captain James Cook mapped the coast of Australia."
        },
        {
            "text": "St George is the national saint of Northern Ireland",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "When was The First British Prime minister (Sir Robert Walpole) in power?",
            "choices": [
                "1742-1746",
                "1714-1721",
                "1707-1714",
                "1721-1742"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The first man to be called 'Prime Minister' was Sir Robert Walpole, who was Prime Minister from 1721 to 1742."
        },
        {
            "text": "Identify which of the following is the money limit for the small claims procedure in England and Wales?",
            "choices": [
                "\u00a35,000",
                "\u00a34,000",
                "\u00a36,000",
                "\u00a310,000"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The small claims procedure is used for claims of less than \u00a310,000 in England and Wales."
        },
        {
            "text": "What should all new citizens do as part of the citizenship ceremony?",
            "choices": [
                "Take ceremonial pictures",
                "Sign passports and official citizenship certificates",
                "Swear or affirm loyalty to the King (or Queen)",
                "Prepare and make an individual speech during the ceremony"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "New citizens swear or affirm loyalty to the Queen as part of the citizenship ceremony ."
        }
    ]
},
{
    id: "exam13",
    title: "Practice Exam 13",
    questions: [
        {
            "text": "The jury decides on the penalty if the defendant is found guilty",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The jury has to listen to the evidence presented at the trial and then decide a verdict of 'guilty' or 'not guilty' based on what they have heard. In Scotland, a third verdict of 'not proven' is also possible. If the jury finds a defendant guilty , the judge decides on the penalty ."
        },
        {
            "text": "What country did Hitler invade in 1939?",
            "choices": [
                "The USA",
                "Poland",
                "Italy",
                "USSR"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The British government tried to avoid another war . However , when Hitler invaded Poland in 1939, Britain and France declared war in order to stop his aggression."
        },
        {
            "text": "Who established the Church of England?",
            "choices": [
                "The Pope",
                "Henry VII",
                "Henry VIII",
                "St George"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "To divorce his first wife, Henry VIII needed the approval of the Pope. When the Pope refused, Henry established the Church of England. In this new Church, the king, not the Pope, would have the power to appoint bishops and order how people should worship."
        },
        {
            "text": "Identify which of these TWO is correct about Halloween?",
            "choices": [
                "It is celebrated on the 31 October",
                "It is not celebrated in Scotland",
                "It is an ancient festival and has roots in the pagan festival to mark the beginning of winter",
                "It is when lovers exchange cards and gifts"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "beginning of winter Halloween, 31 October , is an ancient festival and has roots in the pagan festival to mark the beginning of winter . Young people will often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."
        },
        {
            "text": "Identify which of the following is the Giant's Causeway made of?",
            "choices": [
                "Iron",
                "Bronze",
                "Volcanic Lava",
                "Stone"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Located on the north-east coast of Northern Ireland, the Giant's Causeway is a land formation of columns made from volcanic lava. It was formed about 50 million years ago. There are many legends about the Causeway and how it was formed."
        },
        {
            "text": "What can the Laws made by the EU also be called?",
            "choices": [
                "Framework Decisions",
                "All of these",
                "Directives",
                "Regulations"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "EU law is legally binding in the UK and all the other EU member states. European laws are called directives, regulations or framework decisions."
        },
        {
            "text": "Where does the Prime Minister reside?",
            "choices": [
                "10 Downing Street",
                "76 Charlotte Street",
                "1 Devonshire Terrace",
                "The Buckingham palace"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament."
        },
        {
            "text": "The Speaker is an MP, he/she represents a constituency and deals with constituents' problems like any other MP",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Speaker is neutral and does not represent a political party , even though he or she is an MP, represents a constituency and deals with constituents' problems like any other MP ."
        },
        {
            "text": "In what year did the UK leave the EU following the Brexit Vote?",
            "choices": [
                "1957",
                "2020",
                "1987",
                "1973"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. After UK's Brexit vote in 2020, there are now 27 EU member states."
        },
        {
            "text": "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni. Identify which of the following is it known as now?",
            "choices": [
                "Western England",
                "Eastern England",
                "Northern England",
                "Southern England"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni in what is now eastern England. She is still remembered today and there is a statue of her on Westminster Bridge in London, near the Houses of Parliament."
        },
        {
            "text": "Which person is the heir to the throne?",
            "choices": [
                "Prince George",
                "Prince William",
                "Prince Harry",
                "Prince Philip"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The King's eldest son, Prince William (the Prince of Wales), is the heir to the throne."
        },
        {
            "text": "What university did Isaac Newton attend?",
            "choices": [
                "London State University",
                "Warwick",
                "Oxford",
                "Cambridge"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Born in Lincolnshire, eastern England, Isaac Newton first became interested in science when he studied at Cambridge University . He became an important figure in the field. His most famous published work was Philosophiae Naturalis Principia Mathematica (Mathematical Principles of Natural Philosophy), which showed how gravity applied to the whole universe."
        },
        {
            "text": "In Northern Ireland some people speak Irish Gaelic",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Wales, many people speak Welsh - a completely dif ferent language from English - and it is taught in schools and universities. In Scotland, Gaelic (again, a dif ferent language) is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic."
        },
        {
            "text": "What party won the General Election in 2010?",
            "choices": [
                "Tories",
                "Labour Party",
                "Liberal democrats",
                "None, Liberal Democrats and Conservative party formed a Coalition"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In May 2010, and for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party , David Cameron, became Prime Minister ."
        },
        {
            "text": "In what year did the English Civil war begin?",
            "choices": [
                "1642",
                "1598",
                "1588",
                "1640"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Civil war between the king and Parliament began in 1642. The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
        },
        {
            "text": "Which person is known as William the Conqueror?",
            "choices": [
                "William, the Duke of Normandy",
                "William, the Duke of France",
                "William, the Duke of Edinburgh",
                "William, the Duke of Lion"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror ."
        },
        {
            "text": "Conditions in Ireland in the 19th century were much better than in the rest of the UK",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Conditions in Ireland were not as good as in the rest of the UK. Two-thirds of the population still depended on farming to make their living, often on very small plots of land. Many depended on potatoes as a large part of their diet. In the middle of the century the potato crop failed, and Ireland suf fered a famine. A million people died from disease and starvation."
        },
        {
            "text": "In what year did the first farmers arrive in Britain?",
            "choices": [
                "6,000 years ago",
                "8,000 years ago",
                "4,000 years ago",
                "10,000 years ago"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The first farmers arrived in Britain about 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land."
        },
        {
            "text": "Beefeaters, who tell visitors about the building's history are associated with Identify which of these?",
            "choices": [
                "The Tower of London",
                "Unesco",
                "Edinburgh Castle",
                "Big Ben"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Tower of London was first built by William the Conqueror after he became king in 1066. Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building's history . People can also see the Crown Jewels there."
        },
        {
            "text": "What can the Scottish Parliament do?",
            "choices": [
                "May pass legislation on anything not specifically reserved to the UK Parliament",
                "May pass laws on anything in Scotland",
                "May pass laws on general economic policy",
                "May pass laws on foreign and defence af fairs"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Parliament The Scottish Parliament can pass laws for Scotland on all matters which are not specifically reserved to the UK Parliament. The matters on which the Scottish Parliament can legislate include: civil and criminal law , health, education, planning and additional tax-raising powers."
        },
        {
            "text": "Ulster fry is a traditional food of which country?",
            "choices": [
                "Northern Ireland",
                "Wales",
                "Scotland",
                "England"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Northern Ireland's traditional food is 'Ulster fry' - a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread."
        },
        {
            "text": "In England & Wales, the small claims procedure is an informal way of helping people to settle minor disputes claims of less than?",
            "choices": [
                "\u00a32,000",
                "\u00a310,000",
                "\u00a34,000",
                "\u00a33,000"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer . This procedure is used for claims of less than \u00a310,000 in England and Wales; \u00a35,000 in Scotland and \u00a35,000 in Northern Ireland (Changed from \u00a33000)."
        },
        {
            "text": "Which TWO religions celebrate Diwali?",
            "choices": [
                "Islam",
                "Sikh",
                "Buddhism",
                "Hindu"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are dif ferent stories about how the festival came about. There is a famous celebration of Diwali in Leicester ."
        },
        {
            "text": "Who can only give 'advice, warn and encourage' about government matters?",
            "choices": [
                "The Speaker",
                "The Monarch",
                "Prime Minister",
                "Members of the police"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The monarch has regular meetings with the Prime Minister and can advice, warn and encourage, but the decisions on government policies are made by the Prime Minister and cabinet"
        }
    ]
},
{
    id: "exam14",
    title: "Practice Exam 14",
    questions: [
        {
            "text": "What is the total number of times has the UK hosted the Olympic Games?",
            "choices": [
                "3",
                "2",
                "1",
                "4"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London."
        },
        {
            "text": "The Monarch is responsible for the opening of the new parliamentary session each year",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Monarch has important ceremonial roles, such as the opening of the new parliamentary session each year . On this occasion the Monarch makes a speech which summarises the government\u2019 s policies for the year ahead. All Acts of Parliament are made in her/his name."
        },
        {
            "text": "The British constitution is not written down in any single document, and therefore it is described as 'unwritten'.",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "A constitution is a set of principles by which a country is governed. It includes all of the institutions that are responsible for running the country and how their power is kept in check. The constitution also includes laws and conventions. The British constitution is not written down in any single document, and therefore it is described as 'unwritten'."
        },
        {
            "text": "Which TWO are associated with rugby?",
            "choices": [
                "The Super League",
                "The Premier League",
                "Wimbledon",
                "The Six Nations Championship"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy . The Super League is the most well- known rugby league (club) competition."
        },
        {
            "text": "Christmas Day , which celebrates the birth of Jesus Christ, is on which day?",
            "choices": [
                "25-Dec",
                "26-Dec",
                "31-Dec",
                "01-Jan"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Christmas Day , 25 December , celebrates the birth of Jesus Christ. It is a public holiday . Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself."
        },
        {
            "text": "In the Church of Scotland, Which person is the Moderator?",
            "choices": [
                "The chairperson of the General Assembly , who is appointed for one year only and often speaks on behalf of the Church",
                "A key figure who is responsible for all relations with the Church of England",
                "The spiritual leader of the Church, who is appointed for life",
                "A financial overseer who has overall responsibility for the accounts of the Church"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "only and often speaks on behalf of the Church In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator , who is appointed for one year only and often speaks on behalf of that Church."
        },
        {
            "text": "Which of the following is part of the UK?",
            "choices": [
                "Wales",
                "Channel Islands",
                "Canada",
                "St Helena"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The United Kingdom consists of Wales,England,Scotland and Northern Ireland."
        },
        {
            "text": "Which of the following is the minimum age for serving on a jury?",
            "choices": [
                "16",
                "21",
                "17",
                "18"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "As well as getting the right to vote, people on the electoral register are randomly selected to serve on a jury . Anyone who is on the electoral register and is aged 18 to 70 can be asked to do this."
        },
        {
            "text": "Sir Kingsley Amis was a famous English novelist and poet who wrote more than 20 novels, including 'Lucky Jim'",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Sir Kingsley Amis (1922-95) was an English novelist and poet. He wrote more than 20 novels. The most well-known is Lucky Jim."
        },
        {
            "text": "What exactly does the UK offer to its residents?",
            "choices": [
                "Freedom of belief and religion",
                "Luxurious Life",
                "Free TV license",
                "Untaxed income"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In return, the UK of fers: freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, a right to join in the election of a government."
        },
        {
            "text": "When was the Parliament of Northern Ireland first established?",
            "choices": [
                "1937",
                "1922",
                "1986",
                "1999"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "A Northern Ireland Parliament was established in 1922, when Ireland was divided, but it was abolished in 1972, shortly after the Troubles broke out in 1969. The Northern Ireland Assembly was established soon after the Belfast Agreement (or Good Friday Agreement) in 1998."
        },
        {
            "text": "When was the first public film shown in the UK?",
            "choices": [
                "1896",
                "1902",
                "1899",
                "1904"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Films were first shown publicly in the UK in 1896 and film screenings very quickly became popular . From the beginning, film makers became famous for clever special ef fects and this continues to be an area of British expertise."
        },
        {
            "text": "Where did the people of the Bronze Age bury their dead?",
            "choices": [
                "Round barrows",
                "Gardens",
                "Coffin Houses",
                "Graveyards"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "People lived in roundhouses and buried their dead in tombs called round barrows."
        },
        {
            "text": "Which of the following is Sir Isaac Newton's famous published work?",
            "choices": [
                "Quantum Photon Properties",
                "Relativistic theory of light",
                "Discovery of the God particle",
                "Mathematical Principles of Natural Philosophy"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "His most famous published work was Philosophiae Naturalis Principia Mathematica ('Mathematical Principles of Natural Philosophy'), which showed how gravity applied to the whole universe. Newton also discovered that white light is made up of the colours of the rainbow"
        },
        {
            "text": "How old was the Queen of Scotland, Mary Stuart when her father died and she became Queen?",
            "choices": [
                "1 year",
                "1 week",
                "1 month",
                "7 years"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The queen of Scotland, Mary Stuart (often now called 'Mary , Queen of Scots') was a Catholic. She was only a week old when her father died and she became queen."
        },
        {
            "text": "In what year did the BBC start the first radio broadcast?",
            "choices": [
                "1922",
                "1928",
                "1936",
                "1903"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The BBC started radio broadcasts in 1922 and began the world's first regular television service in 1936."
        },
        {
            "text": "When is St David's day?",
            "choices": [
                "23rd of April",
                "30th of November",
                "17th of March",
                "1st of March"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "St David's day is on the 1st of March. He is a Patron St of Wales."
        },
        {
            "text": "Which political party is still known as the Tories?",
            "choices": [
                "Liberal Democrats",
                "British National Party",
                "Conservative",
                "Labour"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The modern Conservative Party is still sometimes referred to as the Tories"
        },
        {
            "text": "Which Patron Saint day is on the 17th of March?",
            "choices": [
                "St David",
                "St Andrew",
                "St George",
                "St Patrick"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "Which of the statements is true?",
            "choices": [
                "Solicitors' charges are based on how serious the case is",
                "Solicitors' charges are based on how much time they spend on a case"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Solicitors' charges are usually based on how much time they spend on a case. It is very important to find out at the start how much a case is likely to cost."
        },
        {
            "text": "Which of the following is the Turner Prize given for?",
            "choices": [
                "Dancing",
                "Art",
                "Music",
                "Garden design"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Turner Prize is recognised as one of the most prestigious visual art awards in Europe. Previous winners include Damien Hirst and Richard Wright."
        },
        {
            "text": "Select TWO famous Athletes",
            "choices": [
                "Sir Roger Bannister",
                "Henry Moore",
                "Mo Farah",
                "John Barbour"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "Sir Roger Bannister (1929-) was the first man in the world to run a mile in under four minutes, in 1954. Mo Farah (1983-) is a British distance runner , born in Somalia. He won gold medals in the 2012 Olympics for the 5,000 and 10,000 metres and is the first Briton to win the Olympic gold medal in the 10,000 metres."
        },
        {
            "text": "On Valentine's Day people exchange gifts and cards and send anonymous cards to people they secretly admire",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Valentine's Day , 14 February , is when lovers exchange cards and gifts. Sometimes people send anonymous cards to someone they secretly admire."
        },
        {
            "text": "In 2003, The Lord of the Rings by JRR Tolkien was voted the country's best loved novel",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 2003, The Lord of the Rings by JRR Tolkien was voted the country's best loved novel"
        }
    ]
},
{
    id: "exam15",
    title: "Practice Exam 15",
    questions: [
        {
            "text": "Which of the following is the correct order of the Patron Saints' Days? (Starting from January)",
            "choices": [
                "St Patrick's Day , St David's Day , St Andrew's Day , St George's Day",
                "St George's Day , St David's Day , St Patrick's Day , St Andrew's Day",
                "St David's Day , St Patrick's Day , St George's Day , St Andrew's Day",
                "St David's Day , St Patrick's Day , St Andrew's Day , St George's Day"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Only Scotland and Northern Ireland have their patron saint's day as an official holiday . Events are held across Scotland, Northern Ireland and the rest of the country , especially where there are a lot of people of Scottish, Northern Irish and Irish heritage."
        },
        {
            "text": "Identify which of these is correct in the chronological order?",
            "choices": [
                "Magna Carta, the Black Death, Canterbury Tales,",
                "The Black Death, Magna Carta, Canterbury Tales",
                "The Black Death, Canterbury Tales, Magna Carta",
                "Canterbury Tales, the Black Death, Magna Carta"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Magna Carta(1215), The Black Death (1348), The Canterbury Tales(1400)"
        },
        {
            "text": "How often do you have to take the MOT test for an old vehicle?",
            "choices": [
                "Every 3 years",
                "Every 5 years",
                "Every year",
                "Every 2 years"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "If your vehicle is over three years old, you must take it for a Ministry of Transport (MOT) test every year . It is an of fence not to have an MOT certificate if your vehicle is more than three years old."
        },
        {
            "text": "Who sat in the House of Lords in the middle ages?",
            "choices": [
                "The nobility and great landowners",
                "Every Landowner",
                "Wealthy People",
                "Knights"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The nobility , great landowners and bishops sat in the House of Lords."
        },
        {
            "text": "The UK has a declining elderly population",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "People in the UK are living longer than ever before. This is due to improved living standards and better health care. There are now a record number of people aged 85 and over . This has an impact on the cost of pensions and health care."
        },
        {
            "text": "The jury decides whether a person is 'guilty' or 'not guilty' based on what they have heard",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The jury has to listen to the evidence presented at the trial and then decide a verdict of 'guilty' or 'not guilty' based on what they have heard. In Scotland, a third verdict of 'not proven' is also possible. If the jury finds a defendant guilty , the judge decides on the penalty . The judge is only responsible for interpreting the law ."
        },
        {
            "text": "Which individual was Isambard Kingdom Brunel?",
            "choices": [
                "An engineer",
                "A gardener",
                "An artist",
                "A novelist"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships."
        },
        {
            "text": "Many Scottish landlords destroyed individual small farms (known as 'crofts') to make space for large flocks of sheep and cattle. What was this known as?",
            "choices": [
                "Feudalism",
                "The rebellion of the landlords",
                "Pocket Boroughs",
                "Highland Clearances"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "A process began which became known as the 'Highland Clearances'. Many Scottish landlords destroyed individual small farms (known as 'crofts') to make space for large flocks of sheep and cattle. Evictions became very common in the early 19th century . Many Scottish people left for North America at this time."
        },
        {
            "text": "How old do you have to be to buy a lottery ticket or a scratch card?",
            "choices": [
                "15",
                "16",
                "18",
                "17"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "People under 18 (Changed in 2021) are not allowed to participate in the National Lottery . This includes buying Scratch Cards."
        },
        {
            "text": "When is the Bonfire Night celebrated?",
            "choices": [
                "28-Nov",
                "28-Oct",
                "05-Nov",
                "31-Oct"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Bonfire Night, 5 November , is an occasion when people in Great Britain set of f fireworks at home or in special displays. The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament."
        },
        {
            "text": "What was the main crop in Ireland in the 19th century?",
            "choices": [
                "Potato",
                "Wheat",
                "Cucumber",
                "Tomato"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the 19th century , many people in Ireland depended on potatoes as a large part of their diet. In the middle of the century the potato crop failed, and Ireland suf fered a famine. A million people died from disease and starvation."
        },
        {
            "text": "Which of the following is the most famous competition which is a series of Test matches played between England and Australia?",
            "choices": [
                "Formula One",
                "The Wimbledon Championship",
                "The Ashes",
                "The Open Championship"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Cricket originated in England and is now played in many countries. Games can last up to five days but still result in a draw! The idiosyncratic nature of the game and its complex laws are said to reflect the best of the British character and sense of fair play . You may come across expressions such as 'rain stopped play', 'batting on a sticky wicket', 'playing a straight bat', 'bowled a googly' or 'it's just not cricket', which have passed into everyday usage. The most famous competition is the Ashes, which is a series of Test matches played between England and Australia."
        },
        {
            "text": "The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries which were not have also joined."
        },
        {
            "text": "In which year was the first Union Flag created?",
            "choices": [
                "1707",
                "1801",
                "1800",
                "1606"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Welsh dragon does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already united with England."
        },
        {
            "text": "In Elizabeth I's time, English settlers began to colonise which part of the world?",
            "choices": [
                "Eastern coast of America",
                "Australia",
                "India",
                "Central Africa"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In Elizabeth I's time, English settlers first began to colonise the eastern coast of America. The Elizabethan period is also remembered for the richness of its poetry and drama, especially the plays and poems of William Shakespeare."
        },
        {
            "text": "What % of the UK population does Wales account for?",
            "choices": [
                "5",
                "1",
                "2",
                "10"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "As per 2021 census, the UK population at mid-year was estimated to be 67.0 million, an increase of 3.7 million (5.9%) on the population in mid-201 1. Wales accounted for 3,064,000 people - just above 4.5% of the UK population."
        },
        {
            "text": "Where can you find the ship HMS Victory now?",
            "choices": [
                "Edinburgh",
                "Dorset",
                "London",
                "Portsmouth"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "HMS Victory , can be visited in Portsmouth. It was Admiral Nelson's ship."
        },
        {
            "text": "Which of the following is the National Anthem of the UK?",
            "choices": [
                "United we stand",
                "King reign over the UK",
                "God Save the UK",
                "God Save the King/Queen"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The National Anthem of the UK is 'God Save the King/Queen'. It is played at important national occasions and at events attended by the King/Queen or the Royal Family . The first verse is: 'God save our gracious King! Long live our noble King! God save the King! Send him victorious, Happy and glorious, Long to reign over us, God save the King!'."
        },
        {
            "text": "Which individual was the monarch when the Book of Common Prayer was written to be used in the Church of England?",
            "choices": [
                "King Richard III",
                "Henry VIII",
                "Henry VII",
                "Edward VI"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Henry VIII was succeeded by his son Edward VI, who was strongly Protestant. During his reign, the Book of Common Prayer was written to be used in the Church of England. A version of this book is still used in some churches today ."
        },
        {
            "text": "Which of the following is the fundamental principle of British life?",
            "choices": [
                "The rule of law",
                "Taking part in festivals",
                "Supporting your local team",
                "Attending a Church on Sundays"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The rule of law is one of the fundamental principles of British Life."
        },
        {
            "text": "What marked the beginning of 'constitutional monarchy'?",
            "choices": [
                "The Glorious Revolution",
                "The English Civil War",
                "The Restoration",
                "The Magna Carta"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The laws passed after the Glorious Revolution are the beginning of what is called 'constitutional monarchy'."
        },
        {
            "text": "What term arose after the evacuation of 300,000 people from the beaches?",
            "choices": [
                "The British spirit",
                "The Dunkirk spirit",
                "D-Day",
                "The Blitz spirit"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk. The evacuation gave rise to the phrase 'the Dunkirk spirit'."
        },
        {
            "text": "Which of the following is the name of the first major railway built in Britain?",
            "choices": [
                "Southern Railway",
                "Blue Rail",
                "The Great Western Railway",
                "Victorian Rail"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Great Western Railway is the name of the first major railway built in Britain."
        },
        {
            "text": "Who were the first people to start living in Britain?",
            "choices": [
                "The Romans",
                "Hunter-gatherers",
                "Inventors",
                "Pirates"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The first people to live in Britain were hunter-gatherers, in what we call the Stone Age."
        }
    ]
},
{
    id: "exam16",
    title: "Practice Exam 16",
    questions: [
        {
            "text": "In what year did hereditary peers lose the automatic right to attend the House of Lords?",
            "choices": [
                "1979",
                "1969",
                "1989",
                "1999"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Since 1999, hereditary peers have lost the automatic right to attend the House of Lords. They now elect a few of their number to represent them in the House of Lords."
        },
        {
            "text": "Which TWO are facts about King William II of Scotland?",
            "choices": [
                "He was the Protestant rule of the Netherlands before he became King William II of Scotland",
                "He was defeated by King James II of England when the latter tried to take back the crown",
                "He was married to the young daughter of King James II of England, Wales and Ireland",
                "He was William of Orange before he became King William III of England. Wales and Ireland"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "William II of Scotland Wales and Ireland James II's elder daughter , Mary , was married to her cousin William of Orange, the Protestant ruler of the Netherlands. In 1688, important Protestants in England asked William to invade England and proclaim himself king. When William reached England, there was no resistance. James fled to France and William took over the throne, becoming William III in England, Wales and Ireland, and William II of Scotland."
        },
        {
            "text": "Who resides in 10 Downing Street?",
            "choices": [
                "King Charles III",
                "The Prime Minister",
                "The Speaker",
                "The President"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament. He or she also has a country house outside London called Chequers."
        },
        {
            "text": "You can find copies of Hansard report in large libraries and on the Internet",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Proceedings in Parliament are broadcast on television and published in official reports called Hansard. Written reports can be found in large libraries and online."
        },
        {
            "text": "When is St George's Day?",
            "choices": [
                "1st March",
                "17th March",
                "23rd April",
                "30th November"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "Which Scottish poet wrote 'The Bruce'?",
            "choices": [
                "Kevin MacDonald",
                "John Barbour",
                "Kevin MacAlpin",
                "Geof frey Chaucer"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Scotland, many people continued to speak Gaelic and the Scots language also developed. A number of poets began to write in the Scots language. One example is John Barbour , who wrote The Bruce about the Battle of Bannockburn."
        },
        {
            "text": "Which individual was Thomas Gainsborough?",
            "choices": [
                "Was a portrait painter who often painted people in country or garden scenery",
                "Was a landscape painter in modern style",
                "Is best known for his large bronze abstract sculptures",
                "Painted pictures on religious or literary themes in bright colours"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "scenery Thomas Gainsborough (1727-88) was a portrait painter who often painted people in country or garden scenery ."
        },
        {
            "text": "Winston Churchill lost the General Election in 1945",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Churchill was the son of a politician and, before becoming a Conservative MP in 1900, was a soldier and journalist. In May 1940 he became Prime Minister . He refused to surrender to the Nazis and was an inspirational leader to the British people in a time of great hardship. He lost the General Election in 1945 but returned as Prime Minister in 1951."
        },
        {
            "text": "What was the most important principle of the Enlightenment?",
            "choices": [
                "Freedom of religion and political views",
                "Constitutional democracy",
                "Complete democracy",
                "New technological advances"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "One of the most important principles of the Enlightenment was that everyone should have the right to their own political and religious beliefs and that the state should not try to dictate to them."
        },
        {
            "text": "Who had the title 'Lord Protector'?",
            "choices": [
                "Oliver Cromwell",
                "Sir Francis Drake",
                "Admiral Nelson",
                "Charles II"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "After his campaign in Ireland and victory over Charles II at Worcester , Cromwell was recognised as the leader of the new republic. He was given the title of Lord Protector and ruled until his death in 1658."
        },
        {
            "text": "English laws and the English language were introduced in Wales by the middle of which century?",
            "choices": [
                "15th century",
                "11th century",
                "17th century",
                "13th century"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "By the middle of the 15th century the last Welsh rebellions had been defeated. English laws and the English language were introduced."
        },
        {
            "text": "Which of the following is the name given to the PM's country house?",
            "choices": [
                "Chequers",
                "Country Retreat",
                "Quaker",
                "Windsor Palace"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament. He or she also has a country house outside London called Chequers."
        },
        {
            "text": "What is the total number of Olympic gold medals has the Scottish cyclist, Sir Chris Hoy , won?",
            "choices": [
                "2",
                "5",
                "6",
                "7"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Sir Chris Hoy (1976-) is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 1 1 world championship titles."
        },
        {
            "text": "At what age did Queen Victoria become Queen of the UK?",
            "choices": [
                "3 years old",
                "7 years old",
                "18 years old",
                "One week old"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1837, Queen Victoria became queen of the UK at the age of 18. She reigned until 1901, almost 64 years. At the date of writing (2013) this is the longest reign of any British monarch. Her reign is known as the Victorian Age."
        },
        {
            "text": "Which TWO of the following are protected by law from discrimination?",
            "choices": [
                "Choice of car",
                "Eye colour",
                "Disability",
                "Marital status"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "UK laws ensure that people are not treated unfairly in any area of life or work because of their age, disability , sex, pregnancy and maternity , race, religion or belief, sexuality or marital status."
        },
        {
            "text": "When was the Emancipation Act signed?",
            "choices": [
                "1833",
                "1807",
                "1813",
                "1821"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1807, it became illegal to trade slaves in British ships or from British ports, and in 1833 the Emancipation Act abolished slavery throughout the British Empire. The Royal Navy stopped slave ships from other countries, freed the slaves and punished the slave traders."
        },
        {
            "text": "You should respect someone's right in court. In return, you are offered the right to a fair trial.",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You should always respect everyone rights in court. Vise versa everyone should respect your rights."
        },
        {
            "text": "Which of the following is referred to as the Bessemer process?",
            "choices": [
                "Production of iron",
                "Production of coal",
                "Production of bronze",
                "Production of steel"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The development of the Bessemer process for the mass production of steel led to the development of the shipbuilding industry and the railways."
        },
        {
            "text": "What became the symbol of the House of Tudor?",
            "choices": [
                "A pink rose",
                "A red and white rose",
                "A red rose",
                "A white rose"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "This war was called the Wars of the Roses, because the symbol of Lancaster was a red rose and the symbol of York was a white rose. The war ended with the Battle of Bosworth Field in 1485 the House of Lancaster won. The symbol of the House of Tudor was a red rose with a white rose inside it as a sign that the Houses of York and Lancaster were now allies."
        },
        {
            "text": "Where can you see the 'Bayeux Tapestry' today?",
            "choices": [
                "Scotland",
                "England",
                "France",
                "Wales"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror . The battle is commemorated in a great piece of embroidery , known as the Bayeux Tapestry , which can still be seen in France today ."
        },
        {
            "text": "In the 20th century , what did Sir Edwin Lutyens design to be the seat of government in India?",
            "choices": [
                "New Delhi",
                "Bangalore",
                "Kolkata",
                "Mumbai"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the 20th century , Sir Edwin Lutyens had an influence throughout the British Empire. He designed New Delhi to be the seat of government in India. After the First World War, he was responsible for many war memorials throughout the world, including the Cenotaph in Whitehall."
        },
        {
            "text": "What tells us about how people lived just after the Norman Conquest?",
            "choices": [
                "The Great Charter",
                "The Domesday Book",
                "The Bayeux Tapestry",
                "The best preserved prehistoric village"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "William sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest."
        },
        {
            "text": "In what county can you see a hill fort at Maiden Castle?",
            "choices": [
                "Lancashire",
                "Cheshire",
                "Wiltshire",
                "Dorset"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "A very impressive hill fort can still be seen today at Maiden Castle, in the English county of Dorset."
        },
        {
            "text": "What is the total number of members does a jury in England, Wales and Northern Ireland have?",
            "choices": [
                "15",
                "13",
                "12",
                "14"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members."
        }
    ]
},
{
    id: "exam17",
    title: "Practice Exam 17",
    questions: [
        {
            "text": "Where are all minor criminal cases heard in England, Wales and Northern Ireland?",
            "choices": [
                "Magistrates' court",
                "Sherif f court",
                "High court",
                "County court"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates' Court. In Scotland, minor criminal of fences go to a Justice of the Peace Court."
        },
        {
            "text": "Who led the invasion of England in 1066?",
            "choices": [
                "Julius Caesar",
                "William the Duke of Normandy",
                "Harold the Saxon King",
                "King Alfred the Great"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror . The battle is commemorated in a great piece of embroidery , known as the Bayeux Tapestry , which can still be seen in France today ."
        },
        {
            "text": "What happens if an MP dies or resigns?",
            "choices": [
                "Someone takes over",
                "The closest MP will have to cover",
                "A new General Election is held",
                "A by-election is held"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "If an MP dies or resigns, there will be a fresh election, called a by-election, in his or her constituency ."
        },
        {
            "text": "What did the 'Bill of Rights' confirm?",
            "choices": [
                "Parliament's increased power",
                "King's increased power",
                "Kings can collect taxes",
                "Kings can administer justice"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king's power ."
        },
        {
            "text": "Who won gold medals in rowing in five consecutive Olympic Games?",
            "choices": [
                "Dame Ellen MacArthur",
                "Sir Chris Hoy",
                "Sir Steve Redgrave",
                "Sir Roger Bannister"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Sir Steve Redgrave won gold medals in rowing in five consecutive Olympic Games and is one of Britain's greatest Olympians."
        },
        {
            "text": "Where are the youth cases heard in Scotland?",
            "choices": [
                "There is a Children's Hearings System",
                "Sherif f Court",
                "Youth Court",
                "Crown Court"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In Scotland a system called the Children's Hearings System is used to deal with children and young people who have committed an of fence."
        },
        {
            "text": "What did R. A. Butler introduce?",
            "choices": [
                "Free secondary education in England",
                "Free university education in the UK",
                "Free college education in Scotland",
                "Free primary education in Wales"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "R.A. Butler oversaw the introduction of the Education Act 1944 (often called 'The Butler Act'), which introduced free secondary education in England and Wales."
        },
        {
            "text": "What exactly does the Turner Prize celebrate?",
            "choices": [
                "The Best Album",
                "The Best Song",
                "The Best Play",
                "Contemporary Art"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Turner Prize was established in 1984 and celebrates contemporary art."
        },
        {
            "text": "Identify which of these TWO countries are Commonwealth Members?",
            "choices": [
                "Namibia",
                "Germany",
                "Cameroon",
                "USA"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "Cameroon and Namibia are members of the Commonwealth"
        },
        {
            "text": "The Union Flag is made up of Welsh, Scottish, Irish and English crosses",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Union Flag consists of three crosses: The cross of St George, patron saint of England, is a red cross on a white ground; The cross of St Andrew , patron saint of Scotland, is a diagonal white cross on a blue ground; The cross of St Patrick, patron saint of Ireland, is a diagonal red cross on a white ground."
        },
        {
            "text": "Eid al-Fitr and Eid ul Adha are festivals celebrated by which religion?",
            "choices": [
                "Islam",
                "Christianity",
                "Sikhism",
                "Buddhism"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast. The date when it takes place changes every year . Muslims attend special services and meals. Eid ul Adha remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to. It reminds Muslims of their own commitment to God. Many Muslims sacrifice an animal to eat during this festival. In Britain this has to be done in a slaughterhouse."
        },
        {
            "text": "There is no upper age limit for doing jury service",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "As well as getting the right to vote, people on the electoral register are randomly selected to serve on a jury . Anyone who is on the electoral register and is aged 18 to 70 can be asked to do this."
        },
        {
            "text": "The Patron Saints' days are NOT public holidays in which TWO countries?",
            "choices": [
                "Scotland",
                "England",
                "Northern Ireland",
                "Wales"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Only Scotland and Northern Ireland have their Patron Saint's day as an official holiday . While the Patron Saints' days are no longer public holidays in England and Wales, they are still celebrated. Parades and small festivals are held all over the two countries."
        },
        {
            "text": "Who wrote music for George VI and Queen Elizabeth II?",
            "choices": [
                "George Frederick Handel",
                "Sir Edward Elgar",
                "Henry Purcell",
                "Sir William Walton"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Sir William Walton (1902-83) wrote a wide range of music, from film scores to opera. He wrote marches for the coronations of King George VI and Queen Elizabeth II but his best- known works are probably Facade, which became a ballet, and Balthazar's Feast, which is intended to be sung by a large choir ."
        },
        {
            "text": "What do you have to pay tax on in the UK?",
            "choices": [
                "All kind of benefits",
                "Buying goods from supermarkets",
                "Pensions",
                "The Personal Allowance"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "People in the UK have to pay tax on their income, which includes: wages from paid employment; profits from self-employment, taxable benefits; pensions; income from property , savings and dividends."
        },
        {
            "text": "Where were the MacDonalds of Glencoe originally from?",
            "choices": [
                "England",
                "Scotland",
                "Wales",
                "Ireland"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "All Scottish clans were required formally to accept William as king by taking an oath. The MacDonalds of Glencoe were late in taking the oath and were all killed. The memory of this massacre meant some Scots distrusted the new government."
        },
        {
            "text": "The people of the Bronze Age were accomplished glassworkers",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The people of the Bronze Age were accomplished metalworkers"
        },
        {
            "text": "Identify which of these drugs can you buy or sell legally in UK?",
            "choices": [
                "Cannabis",
                "Paracetamol",
                "Ecstasy",
                "Heroin"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Selling or buying drugs such as heroin, cocaine, ecstasy and cannabis is illegal in the UK."
        },
        {
            "text": "Which British TV shows are popular in the UK now?",
            "choices": [
                "Coronation Street",
                "The Big Bang theory",
                "How I met your mother",
                "Friends"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Popular programmes include regular soap operas such as Coronation Street and EastEnders."
        },
        {
            "text": "What organisations try to influence government policy?",
            "choices": [
                "Chartists",
                "Pressure and lobby groups",
                "The Cabinet",
                "Quakers"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Pressure and lobby groups are organisations which try to influence government policy . They play an important role in politics."
        },
        {
            "text": "Which of the following is the British Constitution often described as?",
            "choices": [
                "Unwritten",
                "Written down",
                "Documented",
                "Preserved"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The British constitution is not written down in any single document, and therefore it is described as 'unwritten'. This is mainly because the UK, unlike America or France, has never had a revolution which led permanently to a totally new system of government."
        },
        {
            "text": "Which court deals with the most serious cases in Scotland?",
            "choices": [
                "Sherif f Court",
                "Justice of the Peace Court",
                "High Court",
                "Crown Court"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The most serious cases in Scotland, such as murder , are heard at a High Court with a judge and jury ."
        },
        {
            "text": "You can contact MPs only at their office in the House of Commons",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You can contact MPs by letter or telephone at their constituency Office, or at their Office in the House of Commons."
        },
        {
            "text": "What is the total number of members does the Welsh Assembly have?",
            "choices": [
                "60",
                "108",
                "129",
                "140"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Welsh Assembly has 60 members, with forty members chosen to represent individual Senedd constituencies, and twenty to represent the five electoral regions of the Senedd in Wales."
        }
    ]
},
{
    id: "exam18",
    title: "Practice Exam 18",
    questions: [
        {
            "text": "Which pair won gold medals for Ice dancing at the Olympic Games in 1984 and in four consecutive world championships?",
            "choices": [
                "Jennifer Nicks and John Nicks",
                "Doreen Denny and Courtney Jones",
                "Jean Westwood and Lawrence Demmy",
                "Jayne Torvill and Christopher Dean"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Jayne Torvill (1957-) and Christopher Dean (1958-) won gold medals for ice dancing at the Olympic Games in 1984 and in four consecutive world championships."
        },
        {
            "text": "In what year did Britain become separated from the continent?",
            "choices": [
                "8,000 years ago",
                "6,000 years ago",
                "4,000 years ago",
                "10,000 years ago"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Britain only became permanently separated from the continent by the Channel about 10,000 years ago."
        },
        {
            "text": "Who won the Wars of the Roses?",
            "choices": [
                "House of Lancaster",
                "House of York",
                "House of Commons",
                "House of Lords"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "This war was called the Wars of the Roses, because the symbol of Lancaster was a red rose and the symbol of York was a white rose. The war ended with the Battle of Bosworth Field in 1485. King Richard III of the House of York was killed in the battle and Henry Tudor, the leader of the House of Lancaster , became King Henry VII."
        },
        {
            "text": "Which person is the head of the Church of England?",
            "choices": [
                "The Pope",
                "The Duke of Edinburgh",
                "The Prime Minister",
                "The Monarch"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The monarch is the head of the Church of England. The spiritual leader of the Church of England is the Archbishop of Canterbury ."
        },
        {
            "text": "What percentage of the workforce are women?",
            "choices": [
                "30%",
                "60%",
                "50%",
                "40%"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Women in Britain today make up about half of the workforce. On average, girls leave school with better qualifications than boys. More women than men study at university ."
        },
        {
            "text": "Where does the UK government sit?",
            "choices": [
                "Westminster",
                "Stormont",
                "Senedd",
                "Holyrood"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The UK is governed by the parliament sitting in Westminster ."
        },
        {
            "text": "Which event is the landing of allied forces in Normandy?",
            "choices": [
                "D-Day",
                "The Dunkirk spirit",
                "The Battle of Britain",
                "The Blitz"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "On 6 June 1944, allied forces landed in Normandy (this event is often referred to as 'D-Day')."
        },
        {
            "text": "The process 'Highland Clearances' happened due to rebellion of slaves",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "A process began which became known as the 'Highland Clearances'. Many Scottish landlords destroyed individual small farms (known as 'crofts') to make space for large flocks of sheep and cattle. Evictions became very common in the early 19th century . Many Scottish people left for North America at this time."
        },
        {
            "text": "How can you visit the Welsh Assembly?",
            "choices": [
                "Through visitors services",
                "By queuing at the public entrance all day",
                "Using the booking service",
                "By contacting the education service"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Senedd is an open building. You can book guided tours or seats in the public galleries for the Welsh Assembly . To make a booking, contact the Assembly Booking Service"
        },
        {
            "text": "Which person is considered ineligible to do jury service?",
            "choices": [
                "Judges",
                "Members of Parliament",
                "Police",
                "Anyone with a criminal conviction"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Everyone who is summoned to do jury service must do it unless they are not eligible (for example, because they have a criminal conviction) or they provide a good reason to be excused, such as ill health."
        },
        {
            "text": "Which battle did William the Conqueror fight in?",
            "choices": [
                "The Battle of Agincourt",
                "The Battle of Bannockburn",
                "The Battle of Bosworth Field",
                "The Battle of Hastings"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror . The battle is commemorated in a great piece of embroidery , known as the Bayeux Tapestry , which can still be seen in France today ."
        },
        {
            "text": "St Augustine led missionaries from Rome. Where did he spread Christianity?",
            "choices": [
                "In the North",
                "In the West",
                "In the South",
                "In the East"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Anglo-Saxons were not Christians when they first came to Britain but, during this period, missionaries came to Britain to preach about Christianity . Missionaries from Ireland spread the religion in the north. The most famous of these were St Patrick, who would become the patron saint of Ireland and St Columba, who founded a monastery on the island of Iona, of f the coast of what is now Scotland. St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury ."
        },
        {
            "text": "Scotland, Wales and Northern Ireland each have devolved administrations which give them full control over all policies and laws",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Policy and laws governing defence, foreign af fairs, immigration, taxation and social security all remain under central UK government control. However , many other public services, such as education, are controlled by the devolved administrations."
        },
        {
            "text": "What is the total number of members does the UN Security Council have?",
            "choices": [
                "150",
                "15",
                "5",
                "54"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security . There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council."
        },
        {
            "text": "What's the objective of the Commonwealth?",
            "choices": [
                "Allow visa free migration across the member states",
                "Achieve goals in democracy and development",
                "Promote free trade",
                "Promote peace across the world"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries which were not have also joined."
        },
        {
            "text": "Identify which of these is an Anglo-Saxon poem?",
            "choices": [
                "Beowulf",
                "Mr Hyde",
                "Jude the Obscure",
                "Pride and Prejudice"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Anglo-Saxon poem 'Beowulf' tells of its hero's battles against monsters and is still translated into modern English."
        },
        {
            "text": "Which of the following is the official name of the country?",
            "choices": [
                "Great Britain",
                "United Kingdom",
                "The United Kingdom of Great Britain and Northern Ireland",
                "The UK and Ireland"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The official name of the country is the United Kingdom of Great Britain and Northern Ireland. 'Great Britain' refers only to England, Scotland and Wales, not to Northern Ireland."
        },
        {
            "text": "Which of the following is the name given to rented additional land which people use to grow fruit and vegetable?",
            "choices": [
                "Garden",
                "Allotment",
                "Roomage",
                "Spacage"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "A lot of people have gardens at home and will spend their free time looking after them. Some people rent additional land called 'an allotment', where they grow fruit and vegetables. Gardening and flower shows range from major national exhibitions to small local events."
        },
        {
            "text": "Which flower is associated with Northern Ireland?",
            "choices": [
                "Rose",
                "Thistle",
                "Daffodil",
                "Shamrock"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Shamrock is associated with Northern Ireland"
        },
        {
            "text": "After the Emancipation Act, What is the total number of Indian and Chinese workers were employed to replace the slaves?",
            "choices": [
                "2 million",
                "1 million",
                "1.4 million",
                "2.6 million"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Emancipation Act of 1833 abolished slavery throughout British Empire. William Wilberforce was leading abolitionist and Quakers set up first anti-slavery groups. More than 2 million migrants came from India and China to replace labour force."
        },
        {
            "text": "Which of the following is the Church of England also known as in Scotland and the US?",
            "choices": [
                "Episcopal Church",
                "Catholic Church",
                "Anglican Church",
                "Protestant Church"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In England, there is a constitutional link between Church and state. The official Church of the state is the Church of England (called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States). It is a Protestant Church and has existed since the Reformation in the 1530s"
        },
        {
            "text": "How long did the Hundred Years War last for?",
            "choices": [
                "100 years",
                "116 years",
                "97 years",
                "108 years"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "English kings also fought a long war with France, called the Hundred Years War (even though it actually lasted 1 16 years). One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V's vastly outnumbered English army defeated the French. The English left France in the 1450s."
        },
        {
            "text": "On what day does 'Lent' begin?",
            "choices": [
                "Ash Wednesday",
                "Good Friday",
                "Shrove Tuesday",
                "Pancake day"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The 40 days before Easter are known as Lent. It is a time when Christians take time to reflect and prepare for Easter . Traditionally , people would fast during this period and today many people will give something up, like a favourite food. The day before Lent starts is called Shrove Tuesday , or Pancake Day . Lent begins on Ash Wednesday ."
        },
        {
            "text": "Which of the following is the 'Grand National'?",
            "choices": [
                "A horse race",
                "A football cup competition",
                "A tennis championship",
                "A motor race"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Grand National at Aintree near Liverpool and the Scottish Grand National at Ayr are well known horse racing events."
        }
    ]
},
{
    id: "exam19",
    title: "Practice Exam 19",
    questions: [
        {
            "text": "Which of the following is the most famous rugby tournament?",
            "choices": [
                "The Six Nations Championship",
                "The Super Bowl",
                "Royal Ascot",
                "The Wimbledon Championship"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy . The Super League is the most well- known rugby league (club) competition."
        },
        {
            "text": "Which of the following is Boxing Day?(Choose TWO)",
            "choices": [
                "The day after Christmas Day",
                "The day before New Year",
                "A public holiday",
                "When people watch boxing championship"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "Boxing Day is the day after Christmas Day and is a public holiday ."
        },
        {
            "text": "What area is the Home Secretary responsible for?",
            "choices": [
                "Education",
                "Defence",
                "Health",
                "Police"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Prime Minister appoints about 20 senior MPs to become ministers in charge of departments. These include: Chancellor of the Exchequer: responsible for the economy; Home Secretary:responsible for crime, policing and immigration; Foreign Secretary: responsible for managing relationships with foreign countries; other ministers (called 'Secretaries of State') are responsible for subjects such as education, health and defence."
        },
        {
            "text": "Queen Mary was a Protestant and persecuted Catholics (for this reason, she became known as 'Bloody Mary')",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Mary was a devout Catholic and persecuted Protestants (for this reason, she became known as 'Bloody Mary'). Mary also died after a short reign and the next monarch was her half- sister , Elizabeth, the daughter of Henry VIII and Anne Boleyn."
        },
        {
            "text": "Nick Park created the 'Wallace and Gromit' film. What kind of film was it?",
            "choices": [
                "Adventure film",
                "Detective film",
                "Animated film",
                "Romance film"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Britain continues to be particularly strong in special ef fects and animation. One example is the work of Nick Park, who has won four Oscars for his animated films, including three for films featuring Wallace and Gromit."
        },
        {
            "text": "In what year did the Vikings first attack Britain?",
            "choices": [
                "AD 798",
                "AD 879",
                "AD 897",
                "AD 789"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Vikings came from Denmark and Norway . They first visited Britain in AD 789 to raid coastal towns and take away goods and slaves."
        },
        {
            "text": "In which years did British Film Studios flourish?",
            "choices": [
                "1970's",
                "1950's",
                "1930's",
                "1910's"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "British studios flourished in the 1930s. The 1950s and 1960s were a high point for British comedies, including Passport to Pimlico, The Ladykillers and, later , the Carry On films."
        },
        {
            "text": "Charles Dickens, Thomas Hardy and Jane Austen are famous writers",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "They are all famous authors and writers."
        },
        {
            "text": "Forced Marriage Protection Orders were introduced in 2008 for England, Wales and Northern Ireland",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Forced Marriage Protection Orders were introduced in 2008 for England, Wales and Northern Ireland under the Forced Marriage (Civil Protection) Act 2007."
        },
        {
            "text": "Forced marriages are an offence in the UK",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Forced marriage is where one or both parties do not or cannot give their consent to enter into the partnership. Forcing another person to marry is a criminal of fence."
        },
        {
            "text": "Which film or film franchise produced in UK has been the biggest gross earner?",
            "choices": [
                "Charlie Chaplin",
                "James Bond",
                "Lord of the rings",
                "Matrix"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Many of the films now produced in the UK are made by foreign companies, using British expertise. Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and James Bond), have been produced in the UK."
        },
        {
            "text": "Which of the following is the reason for more ageing population? Choose Two",
            "choices": [
                "Improved Education",
                "Better Living Standards",
                "Better Health Care",
                "Cheaper Food"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "People in the UK are living longer than ever before. This is due to improved living standards and better health care. There are now a record number of people aged 85 and over . This has an impact on the cost of pensions and health care."
        },
        {
            "text": "The Prime Minister cannot be changed until the next General election",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Prime Minister can be changed if the MPs in the governing party decide to do so, or if he or she wishes to resign."
        },
        {
            "text": "In what year did motor-car racing start in the UK?",
            "choices": [
                "1896",
                "1899",
                "1930s",
                "1902"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Motor-car racing in the UK started in 1902. The UK continues to be a world leader in the development and manufacture of motor-sport technology . A Formula 1 Grand Prix event is held in the UK each year and a number of British Grand Prix drivers have won the Formula 1 World Championship. Recent British winners include Damon Hill, Lewis Hamilton and Jenson Button."
        },
        {
            "text": "Scotland and Wales remained free of Anglo-Saxon rule",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Parts of the west of Britain, including much of what is now Wales, and Scotland, remained free of Anglo-Saxon rule."
        },
        {
            "text": "It is a civil offence to carry a weapon",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "It is a criminal of fence to carry a weapon."
        },
        {
            "text": "Which individual was Catherine of Aragon (the first of Henry VIII's six wives)?",
            "choices": [
                "Swedish princess",
                "Dutch princess",
                "French princess",
                "Spanish princess"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Catherine was a Spanish princess. She and Henry had a number of children but only one, Mary , survived. When Catherine was too old to give him another child, Henry decided to divorce her , hoping that another wife would give him a son to be his heir ."
        },
        {
            "text": "What did the Chartists campaign for?",
            "choices": [
                "Open ballots",
                "Every man to have a vote",
                "Anyone to be able to stand as an MP",
                "Elections every 5 years"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In the 1830s and 1840s, a group called the Chartists campaigned for reform. They wanted six changes: for every man to have the vote; elections every year; for all regions to be equal in the electoral system; secret ballots; for any man to be able to stand as an MP; for MPs to be paid."
        },
        {
            "text": "In what year did Scotland abolish the authority of the Pope?",
            "choices": [
                "1501",
                "1450",
                "1560",
                "1600"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Scotland had also been strongly influenced by Protestant ideas. In 1560, the predominantly Protestant Scottish Parliament abolished the authority of the Pope in Scotland and Roman Catholic religious services became illegal."
        },
        {
            "text": "Which two things should you do if you wish to be a permanent resident or citizen of the UK?",
            "choices": [
                "Look after yourself and your family",
                "Look after your stairs",
                "Look after the roads",
                "Look after the area in which you live and the environment"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law; respect the rights of others, including their right to their own opinions; treat others with fairness; look after yourself and your family; look after the area in which you live and the environment."
        },
        {
            "text": "All Acts of Parliament are made in who's name?",
            "choices": [
                "The Prime Minister's",
                "The Prince's",
                "The Parliament's",
                "The King's"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Monarch (King Charles III) has important ceremonial roles, such as the opening of the new parliamentary session each year . On this occasion the King makes a speech which summarises the government\u2019 s policies for the year ahead. All Acts of Parliament are made in his name."
        },
        {
            "text": "In what year did Queen Elizabeth II celebrate her Diamond Jubilee?",
            "choices": [
                "2013",
                "2012",
                "2011",
                "2010"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Big Ben tower is named 'Elizabeth Tower' in honour of Queen Elizabeth II's Diamond Jubilee in 2012."
        },
        {
            "text": "How long can you use an EU driving licence for?",
            "choices": [
                "12 months",
                "2 years",
                "5 years",
                "As long as it's valid"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "If your driving licence is from a country in the European Union (EU), Iceland, Liechtenstein or Norway , you can drive in the UK for as long as your licence is valid, subject to UK licence renewal requirements (at the age of 70, or three years after the driver becomes resident). If you have a licence from any other country , you may use it in the UK for up to 12 months."
        },
        {
            "text": "In which location is the Eden Project located?",
            "choices": [
                "Cornwall",
                "Dorset",
                "London",
                "Liverpool"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Eden Project is located in Cornwall, in the south west of England. Its biomes, which are like giant greenhouses, house plants from all over the world. The Eden Project is also a charity which runs environmental and social projects internationally ."
        }
    ]
},
{
    id: "exam20",
    title: "Practice Exam 20",
    questions: [
        {
            "text": "The band called Beatles was popular and some alteration to social laws occurred during which period?",
            "choices": [
                "1970s",
                "1960s",
                "1980s",
                "1950s"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The decade of the 1960s was a period of significant social change. It was known as 'the Swinging Sixties'. There was growth in British fashion, cinema and popular music. Two well- known pop music groups at the time were The Beatles and The Rolling Stones. It was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland. The position of women in the workplace also improved."
        },
        {
            "text": "Which one of the following is the most famous play written by Shakespeare?",
            "choices": [
                "The Canterbury Tales",
                "A Midsummer Night's Dream",
                "The Jungle Book",
                "Under Milk Wood"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Shakespeare was born in Stratford-upon-A von, England. He was a playwright and actor and wrote many poems and plays. His most famous plays include A Midsummer Night's Dream, Hamlet, Macbeth and Romeo and Juliet."
        },
        {
            "text": "Which country(s) did Britain fight against during the Battle of Trafalgar?",
            "choices": [
                "Spain and France",
                "Only France",
                "Only the Netherlands",
                "France and the Netherlands"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Britain's navy fought against combined French and Spanish fleets, winning the Battle of Trafalgar in 1805."
        },
        {
            "text": "In what year did the WWI begin?",
            "choices": [
                "1914",
                "1918",
                "1939",
                "1941"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The first World War began in 1914 and ended in 1918."
        },
        {
            "text": "William defeated James II at the Battle of the Boyne in Ireland in 1690. This event is celebrated in which country?",
            "choices": [
                "Northern Ireland",
                "Wales",
                "Scotland",
                "England"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "William defeated James II at the Battle of the Boyne in Ireland in 1690, an event which is still celebrated by some in Northern Ireland today . William re-conquered Ireland and James fled back to France."
        },
        {
            "text": "Who captained the English cricket team and holds a number of records, both for batting and bowling?",
            "choices": [
                "Brian Lara",
                "Ian Botham",
                "Shane Warne",
                "Wasim Akram"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Sir Ian Botham (1955-) captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling."
        },
        {
            "text": "Where in Scotland is known as the home of golf?",
            "choices": [
                "St Andrews",
                "Aberdeen",
                "Glasgow",
                "Edinburgh"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "St Andrews in Scotland is known as the home of golf."
        },
        {
            "text": "Who wrote 'The Lord of the Rings'?",
            "choices": [
                "JRR Tolkien",
                "Charles Dickens",
                "J K Rowling",
                "Ian Fleming"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Lord of the Rings by JRR Tolkien was voted the country's best-loved novel in 2003."
        },
        {
            "text": "In what year did the English defeat the Spanish Armada?",
            "choices": [
                "1588",
                "1600",
                "1597",
                "1584"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Elizabeth became one of the most popular monarchs in English history , particularly after 1588, when the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism."
        },
        {
            "text": "Where did many of the Viking settle after they got defeated?",
            "choices": [
                "Danelaw",
                "Dorset",
                "Lancashire",
                "Pale"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings. Many of the Viking invaders stayed in Britain - especially in the east and north of England, in an area known as the Danelaw (many places names there, such as Grimsby and Scunthorpe, come from the Viking languages)."
        },
        {
            "text": "Who became one of the most popular monarchs in the 16th century?",
            "choices": [
                "Elizabeth I",
                "Henry VII",
                "Henry VIII",
                "Mary I"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Queen Elizabeth I became one of the most popular monarchs in English history , particularly after 1588, when the English defeated the Spanish Armada."
        },
        {
            "text": "What do many theatres produce at Christmas time?",
            "choices": [
                "Pantomime",
                "New Years Celebration",
                "Tragedy Play",
                "Huge Display"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "One British tradition is the pantomime. Many theatres produce a pantomime at Christmas time. They are based on fairy stories and are light-hearted plays with music and comedy , enjoyed by family audiences. One of the traditional characters is the Dame, a woman played by a man. There is often also a pantomime horse or cow played by two actors in the same costume."
        },
        {
            "text": "Which TWO scientists led a team which was the first to clone an animal?",
            "choices": [
                "James Goodfellow",
                "Sir Ian Wilmot",
                "Keith Campbell",
                "Ernest Rutherford"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "In 1996, two British scientists, Sir Ian Wilmot (1944-) and Keith Campbell (1954-2012), led a team which was the first to succeed in cloning a mammal, Dolly the sheep. This has led to further research into the possible use of cloning to preserve endangered species and for medical purposes."
        },
        {
            "text": "In what year did a group of Catholics led by Guy Fawkes fail in their plan to kill the Protestant king with a bomb in the Houses of Parliament?",
            "choices": [
                "5th November 1705",
                "5th November 1605",
                "5th November 1405",
                "5th November 1505"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Bonfire Night, 5 November , is an occasion when people in Great Britain set of f fireworks at home or in special displays. The origin of this celebration was an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament."
        },
        {
            "text": "Which individual was the Prime minister and inspiration leader during the World War Two?",
            "choices": [
                "Clement Attlee",
                "Winston Churchill",
                "Alexander Fleming",
                "R A Butler"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "Churchill was the son of a politician and, before becoming a Conservative MP in 1900, was a soldier and journalist. In May 1940 he became Prime Minister . He refused to surrender to the Nazis and was an inspirational leader to the British people in a time of great hardship. He lost the General Election in 1945 but returned as Prime Minister in 1951."
        },
        {
            "text": "What did the Chartists campaign for?",
            "choices": [
                "The right to vote for the working class",
                "The right to vote for the 21 year olds",
                "The right to vote for the 18 year olds",
                "The right to vote for the women"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Chartists demanded the vote for the working classes and other people without property ."
        },
        {
            "text": "Why is 1928 an important date for women's rights?",
            "choices": [
                "None of these",
                "Women could vote at 18, the same age as men",
                "Women could vote at 21, the same age as men",
                "Women could vote if they were over 30 years old"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Emmeline Pankhurst was born in Manchester in 1858. She set up the Women's Franchise League in 1889, which fought to get the vote in local elections for married women. In 1918, women over the age of 30 were given voting rights. Shortly before Emmeline's death in 1928, women were given the right to vote at the age of 21, the same as men."
        },
        {
            "text": "Oliver Cromwell took the title 'King of Ireland'",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Cromwell was given the title of Lord Protector and ruled until his death in 1658. Henry VIII took the title 'King of Ireland'"
        },
        {
            "text": "Identify which of these is NOT part of the Commonwealth?",
            "choices": [
                "Canada",
                "USA",
                "Barbados",
                "UK"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The US is not part of the Commonwealth."
        },
        {
            "text": "What was build as part of the UK's celebration of the new millennium?",
            "choices": [
                "The London Eye",
                "Big Ben",
                "The Eden Project",
                "The Tower of London"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. It was originally built as part of the UK's celebration of the new millennium and continues to be an important part of New Year celebrations."
        },
        {
            "text": "Which of the following is the 'Divine Right of Kings'?",
            "choices": [
                "Increased power of the parliament",
                "The King was Appointed by God",
                "Reduced the power of the nobles",
                "Reduced the power of the King"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Divine Right of Kings' is the idea that the king was directly appointed by God to rule. The king should be able to act without having to seek approval from Parliament."
        },
        {
            "text": "When William of Orange re-conquered Ireland (in 1690) he took the title 'William the Conqueror'",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror ."
        },
        {
            "text": "What percentage of the population has a grandparent born outside of the UK?",
            "choices": [
                "10%",
                "20%",
                "5%",
                "15%"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Post-war immigration means that nearly 10% of the population has a parent or grandparent born outside the UK."
        },
        {
            "text": "What exactly does an aged population have an impact on?",
            "choices": [
                "The cost of Bus Fares",
                "The price of food",
                "The cost of Insurance",
                "The cost of Health Care"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "People in the UK are living longer than ever before. This is due to improved living standards and better health care. There are now a record number of people aged 85 and over . This has an impact on the cost of pensions and health care."
        }
    ]
},
{
    id: "exam21",
    title: "Practice Exam 21",
    questions: [
        {
            "text": "In which year was there a major outbreak of plague in London?",
            "choices": [
                "1465",
                "1765",
                "1665",
                "1565"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "During Charles II's reign, in 1665, there was a major outbreak of plague in London. Thousands of people died, especially in poorer areas. The following year , a great fire destroyed much of the city , including many churches and St Paul's Cathedral."
        },
        {
            "text": "Which person is the next heir to the throne?",
            "choices": [
                "Prince Harry",
                "Prince William",
                "Queen Elizabeth II's eldest son",
                "Queen Elizabeth II's husband"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Queen Elizabeth II reigned since her father's death in 1952 (in 2012 she celebrated her Diamond Jubilee - 60 years as queen) until she passed away in 2022. Her eldest son, King Charles III (previously the Prince of Wales) became the new monarch. His elder son, William, Prince of Wales is next in line."
        },
        {
            "text": "It is compulsory to join National Citizen Service programme for 16 and 17 year olds",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are many opportunities for young people to volunteer and receive accreditation which will help them to develop their skills. These include the National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project."
        },
        {
            "text": "Which of the following is a traditional pub game?",
            "choices": [
                "Chess",
                "Poker",
                "Roulette",
                "Pool"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Pub quizzes are popular . Pool and darts are traditional pub games."
        },
        {
            "text": "Who designed the Clifton Suspension Bridge?",
            "choices": [
                "Florence Nightingale",
                "Sir Christopher Wren",
                "Richard Arkwright",
                "Isambard Kingdom Brunel"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Brunel was originally from Portsmouth, England. He was an engineer who built tunnels, bridges, railway lines and ships. He was responsible for constructing the Great Western Railway and the Clifton Suspension Bridge."
        },
        {
            "text": "Henry VIII's fourth wife, Anne of Cleves was a Spanish princess",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Anne of Cleves was a German princess. Henry married her for political reasons but divorced her soon after ."
        },
        {
            "text": "What do you need to apply for UK citizenship?",
            "choices": [
                "Have a driving license",
                "Have a university degree",
                "Be able to use computers in English",
                "Speak and read English"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "To apply to become a permanent resident or citizen of the UK, you will need to: speak and read English; have a good understanding of life in the UK."
        },
        {
            "text": "In what year did people learn how to make bronze?",
            "choices": [
                "6,000 years ago",
                "4,000 years ago",
                "10,000 years ago",
                "8,000 years ago"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Around 4,000 years ago, people learned to make bronze"
        },
        {
            "text": "Which TWO of these were introduced before the First World War in 1914?",
            "choices": [
                "Child Benefit payments",
                "National Health Service",
                "Free school meals",
                "State retirement pension"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Financial help for the unemployed, old-age pensions and free school meals were just a few of the important measures introduced."
        },
        {
            "text": "Constituencies which had hardly any voters were called 'Pocket Boroughs'",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Some constituencies were controlled by a single wealthy family . These were called 'pocket boroughs'. Other constituencies had hardly any voters and were called 'rotten boroughs'."
        },
        {
            "text": "In what year did William of Orange invade England?",
            "choices": [
                "1684",
                "1688",
                "1692",
                "1696"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1688, important Protestants in England asked William to invade England and proclaim himself king."
        },
        {
            "text": "Which play was written by Shakespeare?",
            "choices": [
                "Freedom of Love",
                "Come, Walk with me",
                "Hamlet",
                "Before the Dawn"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Shakespeare was born in Stratford-upon-A von, England. He was a playwright and actor and wrote many poems and plays. His most famous plays include A Midsummer Night's Dream, Hamlet, Macbeth and Romeo and Juliet. Lines from his plays and poems which are often still quoted include: Once more unto the breach (Henry V); To be or not to be (Hamlet); A rose by any other name (Romeo and Juliet); All the world's a stage (As You Like It); The darling buds of May (Sonnet 18, Shall I Compare Thee To a Summer's Day)."
        },
        {
            "text": "In what year did the American colonies declare independence?",
            "choices": [
                "1779",
                "1783",
                "1776",
                "1781"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1776, 13 American colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British army and Britain recognised the colonies' independence in 1783."
        },
        {
            "text": "In what year did many Scottish people leave for North America?",
            "choices": [
                "17th century",
                "18th century",
                "20th century",
                "19th century"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "A process began which became known as the 'Highland Clearances'. Many Scottish landlords destroyed individual small farms (known as 'crofts') to make space for large flocks of sheep and cattle. Evictions became very common in the early 19th century . Many Scottish people left for North America at this time."
        },
        {
            "text": "Britain became fully democratic in the 19th century",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The UK has had a fully democratic voting system since 1928 (20th century). The present voting age of 18 was set in 1969 and (with a few exceptions) all UK-born and naturalised adult citizens have the right to vote."
        },
        {
            "text": "The Bill of Rights confirmed the rights of Parliament and the limits of the King's power",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king's power ."
        },
        {
            "text": "Civil servants are expected to be politically neutral, what core values should they have?",
            "choices": [
                "Impartiality",
                "Sense of humour",
                "Misleading",
                "Corruption"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Civil servants are expected to carry out their role with dedication and a commitment to the civil service and its core values. These are: integrity , honesty , objectivity and impartiality (including being politically neutral)."
        },
        {
            "text": "In which location is Sutton Hoo?",
            "choices": [
                "Essex",
                "Norfolk",
                "Suffolk",
                "Sussex"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The burial place of one of the kings was at Sutton Hoo in modern Suf folk. This king was buried with treasure and armour , all placed in a ship which was then covered by a mound of earth."
        },
        {
            "text": "Which person is Sir Edward Elgar(1857-1934)?",
            "choices": [
                "An actor",
                "A doctor",
                "A politician",
                "A musician"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Sir Edward Elgar (1857-1934) was born in Worcester , England. His best-known work is probably the Pomp and Circumstance Marches. March No 1 (Land of Hope and Glory) is usually played at the Last Night of the Proms at the Royal Albert Hall."
        },
        {
            "text": "In what year did Queen Victoria become queen?",
            "choices": [
                "1845",
                "1877",
                "1861",
                "1837"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1837, Queen Victoria became queen of the UK at the age of 18. She reigned until 1901, almost 64 years."
        },
        {
            "text": "The Man Booker Prize is awarded in which area?",
            "choices": [
                "Theatre",
                "Music",
                "Movies",
                "Literature"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Man Booker Prize for Fiction is awarded annually for the best fiction novel written by an author from the Commonwealth, Ireland or Zimbabwe. It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes."
        },
        {
            "text": "During the Victorian period, transport link improved, enabling goods and people to move easily around the country",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The statement is true"
        },
        {
            "text": "During the WWII, the evacuation of more than 300,000 British and French soldiers from France gave rise to which phrase?",
            "choices": [
                "The British rescue",
                "The Dunkirk spirit",
                "The Blitz",
                "The Great escape"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk. Although many lives and a lot of equipment were lost, the evacuation was a success and meant that Britain was better able to continue the fight against the Germans. The evacuation gave rise to the phrase 'the Dunkirk spirit'."
        },
        {
            "text": "Which of the following is the main purpose of the Opposition?",
            "choices": [
                "To challenge the government",
                "To participate in public debates",
                "To represent the people of the UK",
                "To change laws"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The opposition form the shadow cabinet and their role is to challenge the government and put forward alternative policies."
        }
    ]
},
{
    id: "exam22",
    title: "Practice Exam 22",
    questions: [
        {
            "text": "Which TWO words appear in the first two lines of the national anthem 'God save the Queen/King'?",
            "choices": [
                "Gracious",
                "Noble",
                "Royal",
                "Majesty"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "The first verse is: 'God save our gracious King! Long live our noble King! God save the King! Send him victorious, Happy and glorious, Long to reign over us, God save the King!'."
        },
        {
            "text": "What exactly does Eid al-Fitr celebrate?",
            "choices": [
                "The struggle for religious freedom",
                "The end of Ramadan",
                "That the prophet Ibrahim was willing to sacrifice his son when God ordered him to",
                "The founding of the Muslim community"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast. The date when it takes place changes every year . Muslims attend special services and meals."
        },
        {
            "text": "Where did the supporters of Charles Edward Stuart come from?",
            "choices": [
                "Edinburgh",
                "Glasgow",
                "Aberdeen",
                "Highlands"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Charles Edward Stuart (Bonnie Prince Charlie), the grandson of James II, landed in Scotland. He was supported by clansmen from the Scottish highlands and raised an army ."
        },
        {
            "text": "Where can you find Boudicca, the Queen of the Iceni statue?",
            "choices": [
                "Suffolk",
                "London",
                "Portsmouth",
                "Kent"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "One of the tribal leaders who fought against the Romans was Boudicca, the queen of the Iceni in what is now eastern England. She is still remembered today and there is a statue of her on Westminster Bridge in London, near the Houses of Parliament."
        },
        {
            "text": "In which location is the Royal Crescent is located?",
            "choices": [
                "Portsmouth",
                "Edinburgh",
                "Bath",
                "London"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In the 18th century , simpler designs became popular . The Scottish architect Robert Adam influenced the development of architecture in the UK, Europe and America. He designed the inside decoration as well as the building itself in great houses such as Dumfries House in Scotland. His ideas influenced architects in cities such as Bath, where the Royal Crescent was built."
        },
        {
            "text": "In what year did the 'Battle of the Boyne' happen?",
            "choices": [
                "1690",
                "1697",
                "1693",
                "1695"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "James II wanted to regain the throne and invaded Ireland with the help of a French army . William defeated James II at the Battle of the Boyne in Ireland in 1690, an event which is still celebrated by some in Northern Ireland today . William re-conquered Ireland and James fled back to France."
        },
        {
            "text": "Members in the Welsh Assembly can speak English and Welsh, and all publications of the Assembly are in both languages",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The statement is true"
        },
        {
            "text": "Which official holiday is celebrated on the 30th November in Scotland?",
            "choices": [
                "Hogmanay",
                "Father's Day",
                "St Andrew's Day",
                "Bonfire Night"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Only Scotland and Northern Ireland have their patron saint's day as an official holiday . Events are held across Scotland, Northern Ireland and the rest of the country , especially where there are a lot of people of Scottish, Northern Irish and Irish heritage."
        },
        {
            "text": "In which year did the UK join the European Union (EU)?",
            "choices": [
                "1953",
                "1973",
                "1957",
                "1949"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. After UK's Brexit vote, there are now 27 EU member states."
        },
        {
            "text": "Which word comes from the Viking language?",
            "choices": [
                "Scunthorpe",
                "Arm",
                "Cow",
                "Leg"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Grimsby and Scunthorpe are the examples of words that come from the Viking languages."
        },
        {
            "text": "Where do the Laurence Olivier Awards take place?",
            "choices": [
                "Edinburgh",
                "Kent",
                "Manchester",
                "London"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Laurence Olivier Awards take place annually at dif ferent venues in London. There are a variety of categories, including best director , best actor and best actress. The awards are named after the British actor Sir Laurence Olivier , later Lord Olivier , who was best known for his roles in various Shakespeare plays."
        },
        {
            "text": "What was the 'Black Death'?",
            "choices": [
                "Lack of water",
                "A form of plague",
                "Lack of food",
                "A battle"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1348, a disease, probably a form of plague, came to Britain. This was known as the Black Death. One third of the population of England died and a similar proportion in Scotland and Wales."
        },
        {
            "text": "Which sport often refers to the phrase 'rain stopped play'?",
            "choices": [
                "Cricket",
                "Rugby",
                "Tennis",
                "Football"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "You may come across expressions such as 'rain stopped play', 'batting on a sticky wicket', 'playing a straight bat', 'bowled a googly' or 'it's just not cricket', which have passed into everyday usage. The most famous cricket competition is the Ashes, which is a series of Test matches played between England and Australia."
        },
        {
            "text": "Who invented the World Wide Web?",
            "choices": [
                "Sir Tim Berners-Lee",
                "Florence Nightingale",
                "Alexander Fleming",
                "James Goodfellow"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "World Wide Web was invented by Sir Tim Berners-Lee (1955-) who is British. Information was successfully transferred via the web for the first time on 25 December 1990."
        },
        {
            "text": "What was the more probable use for the Stonehenge?",
            "choices": [
                "A hiding place from enemies",
                "A fort for soldiers",
                "A safe place for shelter",
                "A special gathering place for seasonal ceremonies"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Stonehenge, still stands in what is now the English county of Wiltshire. Stonehenge was probably a special gathering place for seasonal ceremonies"
        },
        {
            "text": "Can the devolved administrations control sectors such as immigration, foreign affairs and taxation?",
            "choices": [
                "Only in Scotland",
                "No",
                "Yes",
                "Only if the local people support them"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly af fect them. Policy and laws governing defence, foreign af fairs, immigration, taxation and social security all remain under central UK government control. However , many other public services, such as education, are controlled by the devolved administrations."
        },
        {
            "text": "What prehistoric village (off the north coast of Scotland) has helped archaeologists to understand more about how people lived near the end of the Stone Age?",
            "choices": [
                "Falkland Islands",
                "St Helena",
                "Shetland",
                "Skara Brae on Orkney"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Skara Brae on Orkney , off the north coast of Scotland, is the best preserved prehistoric village in northern Europe, and has helped archaeologists to understand more about how people lived near the end of the Stone Age."
        },
        {
            "text": "Which one is not a valid UK coin?",
            "choices": [
                "5p",
                "2p",
                "25p",
                "50p"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The currency in the UK is the pound sterling (symbol \u00a3). There are 100 pence in a pound. The denominations (values) of currency are - coins: 1p, 2p, 5p, 10p, 20p, 50p, \u00a31 and \u00a32; notes: \u00a35, \u00a310, \u00a320, \u00a350."
        },
        {
            "text": "What party won the election in 1945 (After WWII)?",
            "choices": [
                "Conservative",
                "A coalition",
                "Liberal Democrats",
                "Labour"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1945 the British people elected a Labour government. The new Prime Minister was Clement Attlee, who promised to introduce the welfare state outlined in the Beveridge Report. In 1948, Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS), which guaranteed a minimum standard of health care for all, free at the point of use."
        },
        {
            "text": "Which of the following is an example of a Criminal Offence?",
            "choices": [
                "Discrimination in the workplace",
                "Owing Money",
                "Housing disputes",
                "Selling Tobacco to under 18's"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Examples of criminal laws are: Carrying a weapon, selling or buying drugs, racial crime, selling tobacco to under 18s, smoking/drinking in public in inappropriate places, buying alcohol for under 18s."
        },
        {
            "text": "Wales wasn't under Anglo-Saxon rule",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Parts of the west of Britain, including much of what is now Wales, and Scotland, remained free of Anglo-Saxon rule."
        },
        {
            "text": "Whose powers were increased by the Bill of Rights of 1689?",
            "choices": [
                "King's",
                "Prisoners'",
                "Slaves'",
                "Parliament's"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king's power . Parliament took control of who could be monarch and declared that the king or queen must be a Protestant. A new Parliament had to be elected at least every three years."
        },
        {
            "text": "Identify which of these countries did NOT fight on the side of the Allied Powers during the First World War?",
            "choices": [
                "Serbia",
                "USA",
                "Bulgaria",
                "Italy"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Allies fought against the Central Powers - mainly Germany , the Austro-Hungarian Empire, the Ottoman Empire and later Bulgaria."
        },
        {
            "text": "Who wrote 'The Lord of the Rings'?",
            "choices": [
                "Charles Dickens",
                "JRR Tolkien",
                "Ian Fleming",
                "J K Rowling"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Lord of the Rings by JRR Tolkien was voted the country's best-loved novel in 2003."
        }
    ]
},
{
    id: "exam23",
    title: "Practice Exam 23",
    questions: [
        {
            "text": "How is the Speaker elected?",
            "choices": [
                "Fellow MPs choose the Speaker",
                "The PM chooses the Speaker",
                "The Archbishop of Canterbury chooses the Speaker",
                "The Monarch appoints the Speaker"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Debates in the House of Commons are chaired by the Speaker . This person is the chief Officer of the House of Commons. The Speaker is neutral and does not represent a political party , even though he or she is an MP, represents a constituency and deals with constituents' problems like any other MP . The Speaker is chosen by other MPs in a secret ballot."
        },
        {
            "text": "Which TWO are NOT part of the UK?",
            "choices": [
                "Wales",
                "Northern Ireland",
                "The Isle of Man",
                "The Channel Islands"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "The UK is made up of England, Scotland, Wales and Northern Ireland."
        },
        {
            "text": "Select TWO early members of the Royal Society",
            "choices": [
                "Sir William Shakespeare",
                "Sir Isaac Newton",
                "Sir Geof frey Chaucer",
                "Sir Edmund Halley"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Charles II was interested in science. During his reign, the Royal Society was formed to promote 'natural knowledge'. This is the oldest surviving scientific society in the world. Among its early members were Sir Edmund Halley , who successfully predicted the return of the comet now called Halley's Comet, and Sir Isaac Newton."
        },
        {
            "text": "Which organization looks after the Edinburgh Castle?",
            "choices": [
                "The National Trust",
                "NSPCC",
                "The Red Cross",
                "Historic Scotland"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Edinburgh Castle has a long history , dating back to the early Middle Ages. It is looked after by Historic Scotland, a Scottish government agency ."
        },
        {
            "text": "What Palace was a cast-iron and plate-glass building originally erected in Hyde Park, London, England, to house the Great Exhibition of 1851?",
            "choices": [
                "Dream Palace",
                "Gold Palace",
                "The Great Palace",
                "Crystal Palace"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "British industry led the world in the 19th century . The UK produced more than half of the world's iron, coal and cotton cloth. The UK also became a centre for financial services, including insurance and banking. In 1851, the Great Exhibition opened in Hyde Park in the Crystal Palace, a huge building made of steel and glass. Exhibits ranged from huge machines to handmade goods. Countries from all over the world showed their goods but most of the objects were made in Britain."
        },
        {
            "text": "Which of the following is an important part of the UK character?",
            "choices": [
                "Go to the pub every Friday",
                "Go to University",
                "To have fish and chips every lunch",
                "The ability to laugh at ourselves"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The traditions of comedy and satire, and the ability to laugh at ourselves, are an important part of the UK character ."
        },
        {
            "text": "Who ordered to write the Book of Common Prayer?",
            "choices": [
                "Edward VI",
                "Queen Mary",
                "Henry VIII",
                "Henry VII"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Henry VIII was succeeded by his son Edward VI, who was strongly Protestant. During his reign, the Book of Common Prayer was written to be used in the Church of England."
        },
        {
            "text": "Why was the Habeas Corpus Act (1679) so important?",
            "choices": [
                "It limited the power of the monarch",
                "It gave women the right to vote",
                "It gave women their property rights",
                "It guaranteed that no one could be held prisoner unlawfully"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Habeas Corpus Act became law in 1679. This was a very important piece of legislation which remains relevant today . Habeas corpus is Latin for 'you must present the person in court'. The Act guaranteed that no one could be held prisoner unlawfully . Every prisoner has a right to a court hearing."
        },
        {
            "text": "In 1913, the British government promised 'Home Rule' for Ireland, why was this postponed?",
            "choices": [
                "The Scottish people also wanted to self-govern",
                "The outbreak of World War I",
                "The English people complained",
                "It was opposed by Catholics"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1913, the British government promised 'Home Rule' for Ireland. It was opposed by the Protestants in the north of Ireland, who threatened to resist Home Rule by force. The outbreak of the First World War led the British government to postpone any changes in Ireland. Irish Nationalists were not willing to wait and in 1916 there was an uprising (the Easter Rising) against the British in Dublin. A guerilla war against the British army and the police in Ireland followed. In 1921 a peace treaty was signed and in 1922 Ireland became two countries."
        },
        {
            "text": "When were the women given the right to vote at the same age as men?",
            "choices": [
                "1928",
                "1957",
                "1969",
                "1918"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Emmeline Pankhurst was born in Manchester in 1858. She set up the Women's Franchise League in 1889, which fought to get the vote in local elections for married women. Shortly before Emmeline's death in 1928, women were given the right to vote at the age of 21, the same as men."
        },
        {
            "text": "Which individual was the Prime Minister during 1945-1951?",
            "choices": [
                "Clement Attlee",
                "R A Butler",
                "Winston Churchill",
                "Dylan Thomas"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Clement Attlee was born in London in 1883. He was Prime Minister from 1945 to 1951 and led the Labour Party for 20 years."
        },
        {
            "text": "John Constable (1776-1837) founded the modern Police force in England",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "John Constable (1776-1837) was a landscape painter most famous for his works of Dedham Vale on the Suf folk-Essex border in the east of England."
        },
        {
            "text": "Who discovered Insulin?",
            "choices": [
                "Patrick Steptoe",
                "Ian Wilmot",
                "Mary Peters",
                "John MacLeod"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Scottish physician and researcher John MacLeod (1876-1935) was the co-discoverer of insulin, used to treat diabetes."
        },
        {
            "text": "Identify which of these statements is correct?",
            "choices": [
                "Life peers are appointed by the Prime Minister on the advice of the monarchy",
                "Life peers are appointed by the monarchy on the advice of the Prime Minister"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Minister Since 1958, the Prime Minister has had the power to nominate peers just for their own lifetime. These are called life peers. They have usually had an important career in politics, business, law or another profession. Life peers are appointed by the monarch on the advice of the Prime Minister ."
        },
        {
            "text": "Which party formed the government in 2010?",
            "choices": [
                "Liberal Democrats only",
                "It was a coalition",
                "Conservative Party only",
                "Labour Party only"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In May 2010, and for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition and the leader of the Conservative Party , David Cameron, became Prime Minister ."
        },
        {
            "text": "Adult citizens of the UK, and citizens of the Commonwealth and the Irish Republic who are resident in the UK, can vote in all public elections",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Adult citizens of the UK, and citizens of the Commonwealth and the Irish Republic who are resident in the UK, can vote in all public elections."
        },
        {
            "text": "On which TWO occasions will there be a fresh election, called a by- election, in MP's constituency?",
            "choices": [
                "Goes abroad",
                "Dies",
                "Gets ill",
                "Resigns"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "MPs are elected at a General Election, which is held at least every five years. If an MP dies or resigns, there will be a fresh election, called a by-election, in his or her constituency . MPs are elected through a system called 'first past the post'."
        },
        {
            "text": "Who chairs the debates in the House of Commons?",
            "choices": [
                "The Shadow Minister",
                "The Speaker",
                "The Prime Minister",
                "The Judge"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Debates in the House of Commons are chaired by the Speaker . This person is the chief Officer of the House of Commons. The Speaker is neutral and does not represent a political party , even though he or she is an MP, represents a constituency and deals with constituents' problems like any other MP . The Speaker is chosen by other MPs in a secret ballot."
        },
        {
            "text": "Which of the following is Diwali?",
            "choices": [
                "Festival of Lights",
                "Festival of Sun",
                "Festival of White",
                "Festival of Happiness"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are dif ferent stories about how the festival came about. There is a famous celebration of Diwali in Leicester ."
        },
        {
            "text": "What exactly does the 'R' Plate stand for?",
            "choices": [
                "Refreshed Data",
                "Rage Drinking",
                "Repaired Damages",
                "Restricted Driver"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In Northern Ireland, a newly qualified driver must display an 'R' plate (for restricted driver) for one year after passing the test."
        },
        {
            "text": "Which of the following is the Grand National?",
            "choices": [
                "Football",
                "Horse racing",
                "Golf",
                "Cricket"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr."
        },
        {
            "text": "Identify which of these charities works with children?",
            "choices": [
                "NSPCC",
                "Crisis and Shelter",
                "PDSA",
                "The National Trust"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The National Society for the Prevention of Cruelty to Children (NSPCC) works with children."
        },
        {
            "text": "When is Valentine's Day?",
            "choices": [
                "16th of December",
                "14th of February",
                "23rd of April",
                "31st of December"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Valentine's Day , 14 February , is when lovers exchange cards and gifts. Sometimes people send anonymous cards to someone they secretly admire."
        },
        {
            "text": "What was the population of the UK in 1998?",
            "choices": [
                "57 million",
                "60 million",
                "50 million",
                "40 million"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Population growth in the UK (Year, Population): (1600, Just over 4 million), (1700, 5 million), (1801, 8 million), (1851, 20 million), (1901, 40 million), (1951, 50 million), (1998, 57 million), (2005, Just under 60 million), (2010, Just over 62 million)."
        }
    ]
},
{
    id: "exam24",
    title: "Practice Exam 24",
    questions: [
        {
            "text": "Which was the last successful invasion of Britain?",
            "choices": [
                "The Anglo Saxon invasion",
                "The Norman Conquest",
                "The Roman invasion",
                "The Viking invasion"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Norman Conquest was the last successful foreign invasion of England and led to many changes in government and social structures in England."
        },
        {
            "text": "What did the Magna Carta do?",
            "choices": [
                "Introduced Democracy",
                "Introduced Christianity",
                "Allowed to collect taxes",
                "Restricted King's power"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Magna Carta established the idea that even the king was subject to the law . It protected the rights of the nobility and restricted the king's power to collect taxes or to make or change laws."
        },
        {
            "text": "Which Monarch entered the House of Commons to arrest 5 parliamentary leaders?",
            "choices": [
                "James I",
                "Charles I",
                "James II",
                "Oliver Cromwell"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Charles I entered the House of Commons and tried to arrest five parliamentary leaders, but they had been warned and were not there. (No monarch has set foot in the Commons since.) Civil war between the king and Parliament could not now be avoided and began in 1642. The country split into those who supported the king (the Cavaliers) and those who supported Parliament (the Roundheads)."
        },
        {
            "text": "James VI of Scotland was not related to Queen Elizabeth I of England",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Mary was suspected of murdering her husband and fled to England. She gave her throne to her Protestant son, James VI of Scotland. Mary was Elizabeth I's cousin."
        },
        {
            "text": "What county is 'Maiden Castle' in?",
            "choices": [
                "Berkshire",
                "Wiltshire",
                "Dorset",
                "Lothians"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "A very impressive hill fort can still be seen today at Maiden Castle, in the English county of Dorset."
        },
        {
            "text": "The Monarch appoints the members of the Cabinet",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Prime Minister (PM) is the leader of the political party in power . He or she appoints the members of the Cabinet and has control over many important public appointments."
        },
        {
            "text": "The Lake District is the largest national park in Scotland",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Lake District is England's largest national park. It covers 885 square miles (2,292 square kilometres). It is famous for its lakes and mountains and is very popular with climbers, walkers and sailors. The biggest stretch of water is Windermere. In 2007, television viewers voted Wastwater as Britain's favourite view ."
        },
        {
            "text": "Which popular yearly sporting event takes place between Oxford and Cambridge universities?",
            "choices": [
                "Rowing",
                "Sailing",
                "Horse Racing",
                "Rugby"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Rowing is also popular , both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities."
        },
        {
            "text": "Which clan was killed because of not taking an oath?",
            "choices": [
                "The MacDonalds of Glencoe",
                "The MacDonalds of Sleat",
                "The MacDonalds of Keppoch",
                "The MacDonalds of Clanranald"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "All Scottish clans were required formally to accept William as king by taking an oath. The MacDonalds of Glencoe were late in taking the oath and were all killed."
        },
        {
            "text": "Where does the Fringe take place?",
            "choices": [
                "Liverpool",
                "Newcastle",
                "Edinburgh",
                "London"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Edinburgh Festival takes place in Edinburgh, Scotland, every summer . The most well- known is the Edinburgh Festival Fringe, also known as the Fringe."
        },
        {
            "text": "During the Middle Ages, which TWO wars were fought abroad?",
            "choices": [
                "The War of the Roses",
                "Hundred Years War",
                "Crusaders",
                "Battle of Hastings"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "During the Middle Ages, the English kings also fought a number of wars abroad. Many knights took part in the Crusades, in which European Christians fought for control of the Holy Land. English kings also fought a long war with France, called the Hundred Years War (even though it actually lasted 1 16 years)."
        },
        {
            "text": "Which TWO are associated with a Bank Holiday?",
            "choices": [
                "A public holiday",
                "A day of f for all the banks in the country",
                "A holiday which is always on a Monday",
                "A day when most people have an official day of f"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Bank holidays are public holidays, when banks and many other businesses are closed for the day ."
        },
        {
            "text": "What country did Britain fight against during the Crimean War?",
            "choices": [
                "France",
                "Turkey",
                "India",
                "Russia"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "From 1853 to 1856, Britain fought with Turkey and France against Russia in the Crimean War. It was the first war to be extensively covered by the media through news stories and photographs. Many soldiers died from illnesses they caught in the hospitals, rather than from war wounds. Queen Victoria introduced the Victoria Cross medal during this war ."
        },
        {
            "text": "What was the population of the UK in 1901?",
            "choices": [
                "40 million",
                "27 million",
                "60 million",
                "50 million"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The population of the UK was 40 million in 1901."
        },
        {
            "text": "How often are the European Parliament elections held?",
            "choices": [
                "3",
                "1",
                "4",
                "5"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Elections for the European Parliament are also held every five years. Elected members are called members of the European Parliament (MEPs). Elections to the European Parliament use a system of proportional representation, where seats are allocated to each party in proportion to the total number of votes it has won."
        },
        {
            "text": "Which TWO materials did the UK produce more than half of the world in the 19th century?",
            "choices": [
                "Cotton Cloth",
                "Iron",
                "Bronze",
                "Potatoes"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "British industry led the world in the 19th century . The UK produced more than half of the world's iron, coal and cotton cloth."
        },
        {
            "text": "Who led the team of scientists to 'split the atom' for the first time?",
            "choices": [
                "Ernest Rutherford",
                "Alexander Fleming",
                "Dylan Thomas",
                "Sir Ian Wilmot"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University , were the first to 'split the atom' and took part in the Manhattan Project in the United States, which developed the atomic bomb."
        },
        {
            "text": "Who appoints the government, which most people have chosen in a democratic election?",
            "choices": [
                "The Monarch",
                "The Prime Minister",
                "The House of Lords",
                "The House of Commons"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The monarch does not rule the country but appoints the government, which the people have chosen in a democratic election. The monarch invites the leader of the party with the largest number of MPs, or the leader of a coalition between more than one party , to become the Prime Minister ."
        },
        {
            "text": "People of the Iron Age sometimes defended sites. What were these sites?",
            "choices": [
                "Hill forts",
                "Round barrows",
                "Hill barrows",
                "Skara Braes"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "People still lived in roundhouses, grouped together into larger settlements, and sometimes defended sites called hill forts. A very impressive hill fort can still be seen today at Maiden Castle, in the English county of Dorset."
        },
        {
            "text": "What followed the Bronze Age?",
            "choices": [
                "The medieval period",
                "The Silver Age",
                "The Stone Age",
                "The Iron Age"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Bronze Age was followed by the Iron Age, when people learned how to make weapons and tools out of iron."
        },
        {
            "text": "You are not responsible for cleaning up after your pet in public places",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The owner is responsible for keeping the dog under control and for cleaning up after the animal in a public place."
        },
        {
            "text": "In which location is the Hadrian Wall?",
            "choices": [
                "In the north of England",
                "In the north of Ireland",
                "In the north of Wales",
                "In the north of Scotland"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Areas of what is now Scotland were never conquered by the Romans, and the Emperor Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)."
        },
        {
            "text": "The Reform Act of 1832 took away the automatic right of hereditary peers to attend the House of Lords",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Since 1999, hereditary peers have lost the automatic right to attend the House of Lords. The Reform Act of 1832 had greatly increased the number of people with the right to vote. The Act also abolished the old pocket and rotten boroughs and more parliamentary seats were given to the towns and cities."
        },
        {
            "text": "When is Halloween celebrated?",
            "choices": [
                "31st of October",
                "31st of November",
                "30th of November",
                "30th of October"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Halloween, 31 October , is an ancient festival and has roots in the pagan festival to mark the beginning of winter . Young people will often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."
        }
    ]
},
{
    id: "exam25",
    title: "Practice Exam 25",
    questions: [
        {
            "text": "What exactly does the York Minster have?",
            "choices": [
                "Stained Glass",
                "Stained Wood",
                "Stained Limestone",
                "Stained Bricks"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "York Minster had windows of stained glass, telling stories about the Bible and Christian saints."
        },
        {
            "text": "What do many theatres in the UK produce at Christmas time?",
            "choices": [
                "A pantomime",
                "A stand up comedy show",
                "An opera",
                "A music event"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "One British tradition is the pantomime. Many theatres produce a pantomime at Christmas time. They are based on fairy stories and are light-hearted plays with music and comedy , enjoyed by family audiences. One of the traditional characters is the Dame, a woman played by a man."
        },
        {
            "text": "Who appoints life peers to the House of Lords?",
            "choices": [
                "The monarch",
                "Their parents/guardians",
                "The cabinet",
                "The prime minister"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Life peers are appointed by the monarch on the advice of the Prime Minister ."
        },
        {
            "text": "Mary Stuart (also known as 'Mary , Queen of Scots') fled to England. She was suspected of trying to take over the throne and was kept a prisoner for 20 years",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The statement is true."
        },
        {
            "text": "Which of the following is the highest denomination of coins one can find in the UK?",
            "choices": [
                "\u00a320",
                "\u00a31",
                "\u00a32",
                "\u00a350"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The currency in the UK is the pound sterling (symbol \u00a3). There are 100 pence in a pound. The denominations (values) of currency are - coins: 1p, 2p, 5p, 10p, 20p, 50p, \u00a31 and \u00a32; notes: \u00a35, \u00a310, \u00a320, \u00a350."
        },
        {
            "text": "In which country was Charles II residing before he was invited to England by the Parliament?",
            "choices": [
                "Netherlands",
                "France",
                "Germany",
                "Ireland"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In May 1660, Parliament invited Charles II to come back from exile in the Netherlands. He was crowned King Charles II of England, Wales, Scotland and Ireland."
        },
        {
            "text": "What programme helps teenagers develop their skills?",
            "choices": [
                "The Teenage Programme",
                "The Youth Development Service",
                "Youth Opportunities",
                "The National Citizen Service"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "There are many opportunities for young people to volunteer and receive accreditation which will help them to develop their skills. These include the National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project."
        },
        {
            "text": "When was the famous satirical magazine 'Punch' published?",
            "choices": [
                "1820s",
                "1880s",
                "1860s",
                "1840s"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the 19th century , satirical magazines began to be published. The most famous was 'Punch', which was published for the first time in the 1840s. Today , political cartoons continue to be published in newspapers, and magazines such as Private Eye continue the tradition of satire."
        },
        {
            "text": "When is Vaisakhi celebrated?",
            "choices": [
                "In June",
                "In April",
                "In May",
                "In March"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Vaisakhi (also spelled Baisakhi) is a Sikh festival which celebrates the founding of the Sikh community known as the Khalsa. It is celebrated on 14 April each year with parades, dancing and singing."
        },
        {
            "text": "You need to buy a TV Licence if there are no TVs in your house but you watch TV programs on your mobile phone",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You must pay for a licence to watch TV through any medium."
        },
        {
            "text": "Which TWO are correct about King Henry's wives?",
            "choices": [
                "Three wives were called Catherine",
                "Two wives were called Anne",
                "All were British",
                "Two of the wives were sisters"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "3 of the wives were called Catherine and 2 were called Anne."
        },
        {
            "text": "The Speaker also represents Parliament on ceremonial occasions",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Speaker keeps order during political debates to make sure the rules are followed. This includes making sure the opposition (see The government) has a guaranteed amount of time to debate issues which it chooses. The Speaker also represents Parliament on ceremonial occasions."
        },
        {
            "text": "Puritans are a group of Catholics who advocate complex religious doctrine and worship",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Puritans, a group of Protestants who advocated strict and simple religious doctrine and worship."
        },
        {
            "text": "The Anglo-Saxons established Christianity when they invaded Britain",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Anglo-Saxons were not Christians when they first came to Britain but, during this period, missionaries came to Britain to preach about Christianity ."
        },
        {
            "text": "In the UK, under the Individual Electoral Registration (IER) system, every eligible person is individually responsible for their own registration.",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Individual Electoral Registration system replaced the old \"head of household\" method where one person could register everyone in the home. Now , each eligible person is legally responsible for their own registration."
        },
        {
            "text": "The members of the Armed Forces can stand for Public Office",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over can stand for Public Office. There are some exceptions, including: members of the armed forces; civil servants; people found guilty of certain criminal of fences."
        },
        {
            "text": "Identify which of these was a British plane in WWII?",
            "choices": [
                "Hurricane",
                "F-22",
                "PAK-22",
                "Mig-21"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The most important planes used by the Royal Air Force in the Battle of Britain were the Spitfire and the Hurricane - which were designed and built in Britain."
        },
        {
            "text": "Which TWO industries developed during the Great Depression?",
            "choices": [
                "Aviation",
                "Agriculture",
                "Shipbuilding",
                "Automobile"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "During the Great Depression (1929),he traditional heavy industries such as shipbuilding were badly af fected but new industries - including the automobile and aviation industries - developed."
        },
        {
            "text": "Identify which of these flowers is closely associated with Remembrance Day?",
            "choices": [
                "Lily",
                "Rose",
                "Daffodil",
                "Poppy"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The poppy has become the symbol of Remembrance worn during the weeks leading to Remembrance Sunday and Armistice Day ."
        },
        {
            "text": "The anthem 'God save the King/Queen' can only be played in presence of the Monarch",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You can play the Anthem in anyone's presence"
        },
        {
            "text": "What happens at 1 1:00 on the Remembrance Day?",
            "choices": [
                "A 1 minute silence",
                "A 2 minute silence",
                "A 10 second silence",
                "A 30 second silence"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Remembrance Day , 11 November , commemorates those who died fighting for the UK and its allies. Originally it commemorated the dead of the First World War, which ended on 1 1 November 1918. People wear poppies (the red flower found on the battlefields of the First World War). At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London."
        },
        {
            "text": "Which person is the head of the Church of England?",
            "choices": [
                "The Prime Minister",
                "The Monarch",
                "The Duke of Edinburgh",
                "The Pope"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The monarch is the head of the Church of England. The spiritual leader of the Church of England is the Archbishop of Canterbury ."
        },
        {
            "text": "What did the Chartists campaign for?",
            "choices": [
                "Anyone to be able to stand as an MP",
                "Open ballots",
                "Elections every 5 years",
                "Every man to have a vote"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the 1830s and 1840s, a group called the Chartists campaigned for reform. They wanted six changes: for every man to have the vote;elections every year;for all regions to be equal in the electoral system; secret ballots; for any man to be able to stand as an MP; for MPs to be paid."
        },
        {
            "text": "Which TWO British Actors have recently won Oscars?",
            "choices": [
                "Dame Kelly Holmes",
                "Kate Winslet",
                "Dame Judi Dench",
                "Simon Cowell"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "British actors continue to be popular and continue to win awards throughout the world. Recent British actors to have won Oscars include Colin Firth, Sir Anthony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton."
        }
    ]
},
{
    id: "exam26",
    title: "Practice Exam 26",
    questions: [
        {
            "text": "Which of the following are the 40 days before Easter known as?",
            "choices": [
                "Starve",
                "Dent",
                "Fast",
                "Lent"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The 40 days before Easter are known as Lent. It is a time when Christians take time to reflect and prepare for Easter . Traditionally , people would fast during this period and today many people will give something up, like a favourite food. The day before Lent starts is called Shrove Tuesday , or Pancake Day . Lent begins on Ash Wednesday ."
        },
        {
            "text": "After Cromwell defeated Charles II at Worcester , where did Charles II hide?",
            "choices": [
                "In a house",
                "In an oak tree",
                "In a lake",
                "In a field"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Scots had not agreed to the execution of Charles I and declared his son Charles II to be king. He was crowned king of Scotland and led a Scottish army into England. Cromwell defeated this army in the Battles of Dunbar and Worcester . Charles II escaped from Worcester , famously hiding in an oak tree on one occasion, and eventually fled to Europe."
        },
        {
            "text": "In what year did the Anglo-Saxon kingdoms establish in Britain?",
            "choices": [
                "AD 410",
                "AD 698",
                "AD 789",
                "AD 600"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Britain was invaded by tribes from northern Europe: the Jutes, the Angles and the Saxons. The languages they spoke are the basis of modern-day English. Battles were fought against these invaders but, by about AD 600, Anglo-Saxon kingdoms were established in Britain."
        },
        {
            "text": "What did the Beveridge Report of 1942, by William Beveridge, provide the basis for?",
            "choices": [
                "The Modern Welfare State",
                "NHS",
                "Education for All",
                "Equal Rights for Women"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "William Beveridge (later Lord Beveridge) was a British economist and social reformer . He served briefly as a Liberal MP and was subsequently the leader of the Liberals in the House of Lords but is best known for the 1942 report Social Insurance and Allied Services (known as the Beveridge Report). The report was commissioned by the wartime government in 1941. It recommended that the government should find ways of fighting the five 'Giant Evils' of Want, Disease, Ignorance, Squalor and Idleness and provided the basis of the modern welfare state."
        },
        {
            "text": "Which of the following is the Cenotaph associated with?",
            "choices": [
                "Garden",
                "Government office",
                "War Memorial",
                "Park"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "After the First World War, Sir Edwin Lutyens was responsible for many war memorials throughout the world, including the Cenotaph in Whitehall. The Cenotaph is the site of the annual Remembrance Day service attended by the Queen/King, politicians and foreign ambassadors"
        },
        {
            "text": "Which TWO of the athletes are paralympians?",
            "choices": [
                "Andy Murray",
                "Jessica Ennis",
                "David Weir",
                "Ellie Simmonds"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Ellie Simmonds (1994-) is a Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and holds a number of world records. She was the youngest member of the British team at the 2008 Games. David Weir (1979-) is a Paralympian who uses a wheelchair and has won six gold medals over two Paralympic Games. He has also won the London Marathon six times."
        },
        {
            "text": "Which of the following is the name of the charity that works to preserve important buildings, coastline and countryside in the UK?",
            "choices": [
                "National Trust",
                "NSPCC",
                "Red Cross",
                "Eden Project"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Many parts of the countryside and places of interest are kept open by the National Trust in England, Wales and Northern Ireland and the National Trust for Scotland. Both are charities that work to preserve important buildings, coastline and countryside in the UK. The National Trust was founded in 1895 by three volunteers. There are now more than 61,000 volunteers helping to keep the organisation running."
        },
        {
            "text": "During Queen Elizabeth I's reign the English (1588) defeated a large fleet of ships. Where did the ships come from?",
            "choices": [
                "France",
                "Netherlands",
                "Spain",
                "Spain and France"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Elizabeth became one of the most popular monarchs in English history , particularly after 1588, when the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism."
        },
        {
            "text": "People don't celebrate Christmas as much as they used to before",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Christmas remains very popular in the UK. People usually spend the day at home and eat a special meal, which often includes roast turkey , Christmas pudding and mince pies."
        },
        {
            "text": "Who helped found the Women's Social and Political Union (WSPU) in 1903?",
            "choices": [
                "Jane Seymour",
                "Emmeline Pankhurst",
                "Mary Peters",
                "Elizabeth of York"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Emmeline Pankhurst was born in Manchester in 1858. She set up the Women's Franchise League in 1889, which fought to get the vote in local elections for married women. In 1903 she helped found the Women's Social and Political Union (WSPU)."
        },
        {
            "text": "What is the total number of members does a jury have in Scotland?",
            "choices": [
                "14",
                "15",
                "12",
                "13"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members."
        },
        {
            "text": "What character did Charlie Chaplin play?",
            "choices": [
                "Tramp",
                "Hero",
                "Comedian",
                "Detective"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood."
        },
        {
            "text": "Which flag has a white cross on a blue background?",
            "choices": [
                "English",
                "Scottish",
                "Irish",
                "Welsh"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Scottish flag has a white cross on a blue background because St Andrew was the Patron Saint of Scotland."
        },
        {
            "text": "Which of the following statements is correct?",
            "choices": [
                "Charles I's army was defeated at the Battle of Marston Moor but won the Battle of Naseby",
                "Parliament won the English Civil War"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The king's army was defeated at the Battles of Marston Moor and Naseby . By 1646, it was clear that Parliament had won the war . Charles was held prisoner by the parliamentary army . He was still unwilling to reach any agreement with Parliament and in 1649 he was executed."
        },
        {
            "text": "There is a dragon on the official flag of Wales",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "here is also an official Welsh flag, which shows a Welsh dragon. The Welsh dragon does not appear on the Union Flag because, when the first Union Flag was created in 1606 from the flags of Scotland and England, the Principality of Wales was already united with England."
        },
        {
            "text": "Those who don't respect the law should not expect to be allowed to become permanent residents",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "If you don't respect the law you should not expect to be allowed to settle in the UK"
        },
        {
            "text": "Which of the following is a William Wordsworth's poem?",
            "choices": [
                "The Tyger",
                "She Walks in Beauty",
                "The Daf fodils",
                "Home Thoughts from Abroad"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "All 4 options are poems, but all written by dif ferent poets.(Robert Browning, 1812-89 'Home Thoughts from Abroad'), (Lord Byron, 1788-1824 'She Walks in Beauty'), (William Blake, 1757-1827 'The Tyger'), (William Wordsworth, 1770-1850 'The Daf fodils' - 'I wander'd lonely as a cloud, That floats on high o'er vales and hills, When all at once I saw a crowd, A host of golden daf fodils')."
        },
        {
            "text": "Areas of Which of the following is now Scotland were never conquered by the Romans",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Areas of what is now Scotland were never conquered by the Romans, and the Emperor Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)."
        },
        {
            "text": "Which of the following is Diwali often called?",
            "choices": [
                "The Festival of Love",
                "The Festival of Lights",
                "The Festival of the Sun",
                "The Festival of Fire"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights. It is celebrated by Hindus and Sikhs. It celebrates the victory of good over evil and the gaining of knowledge. There are dif ferent stories about how the festival came about. There is a famous celebration of Diwali in Leicester ."
        },
        {
            "text": "How is the Church of England often called?",
            "choices": [
                "The Catholic Church",
                "The New Age Church",
                "The Christian Church",
                "The Anglican Church"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In England, there is a constitutional link between Church and state. The official Church of the state is the Church of England called the Anglican Church in other countries and the Episcopal Church in Scotland and the United States."
        },
        {
            "text": "The European Union was originally called the EEC",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. After UK's Brexit vote, there are now 27 EU member states."
        },
        {
            "text": "Which TWO are associated with the 'Dunkirk Spirit'?",
            "choices": [
                "The rescue of 300,000 men",
                "Small boats coming to the rescue",
                "Invasion of Berlin on May 9",
                "Landings on D-Day"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk. Although many lives and a lot of equipment were lost, the evacuation was a success and meant that Britain was better able to continue the fight against the Germans. The evacuation gave rise to the phrase 'the Dunkirk spirit'."
        },
        {
            "text": "Which of the following is the name given to the conflict between those wishing for full Irish independence and those wishing to remain loyal to the UK government?",
            "choices": [
                "The Great Depression",
                "The Problems",
                "The Troubles",
                "The Clearances"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The conflict between those wishing for full Irish independence and those wishing to remain loyal to the British government is often referred to as 'the Troubles'."
        },
        {
            "text": "In what year did the Troubles break out?",
            "choices": [
                "1969",
                "1921",
                "1922",
                "1957"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Some 3,000 people lost their lives in the decades after 1969 in the violence in Northern Ireland. The conflict between those wishing for full Irish independence and those wishing to remain loyal to the British government is often referred to as 'the Troubles'."
        }
    ]
},
{
    id: "exam27",
    title: "Practice Exam 27",
    questions: [
        {
            "text": "Where can you get help from if you are facing domestic violence?",
            "choices": [
                "Citizens advice Bureau",
                "Your Family",
                "NSPCC",
                "High Court"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "It is important for anyone facing domestic violence to get help as soon as possible. A solicitor or the Citizens Advice Bureau can explain the available options."
        },
        {
            "text": "What was the purpose of the Corn Laws in 1846?",
            "choices": [
                "To prevent the import of cheap grain",
                "To build railways",
                "To improve transport systems",
                "To improve working conditions"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Corn Laws in 1846 had prevented the import of cheap grain."
        },
        {
            "text": "Which of the following are Halloween lanterns traditionally made out of?",
            "choices": [
                "Potatoes",
                "Pumpkins",
                "Cucumbers",
                "Apples"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Halloween, 31 October , is an ancient festival and has roots in the pagan festival to mark the beginning of winter . Young people will often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks on them. A lot of people carve lanterns out of pumpkins and put a candle inside."
        },
        {
            "text": "Which of the following is the minimum age for going into betting shops or gambling clubs?",
            "choices": [
                "18",
                "16",
                "17",
                "21"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "You have to be 18 to go into betting shops or gambling clubs."
        },
        {
            "text": "The House of Lords is more independent of the government than the House of Commons",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The House of Lords is normally more independent of the government than the House of Commons. It can suggest amendments or propose new laws, which are then discussed by MPs. The House of Lords checks laws that have been passed by the House of Commons to ensure they are fit for purpose."
        },
        {
            "text": "Why is 1969 a very important year in British history?",
            "choices": [
                "Women were given the right to vote at the age of 21, same as men",
                "Women were given the right to vote",
                "Women were given the right to vote at the age of 18",
                "Women were given the right to vote at the age of 30"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The voting franchise was also extended to women over 30, and then in 1928 to men and women over 21. In 1969, the voting age was reduced to 18 for men and women."
        },
        {
            "text": "The Corn Laws were repealed in 1846. These had prevented the import of cheap grain",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The statement is true."
        },
        {
            "text": "Where are the minor criminal cases dealt with in England, Wales and N. Ireland?",
            "choices": [
                "High Court",
                "Justice of the Peace Court",
                "Magistrates' Court",
                "Crown Court"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates' Court. In Scotland, minor criminal of fences go to a Justice of the Peace Court."
        },
        {
            "text": "How is the New Year often called in Scotland?",
            "choices": [
                "New Year",
                "New Year's eve",
                "Second Christmas",
                "Hogmanay"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Known in Scotland as 'The Bard', Robert Burns was a Scottish poet. His best-known work is probably the song Auld Lang Syne, which is sung by people in the UK and other countries when they are celebrating the New Year (or Hogmanay as it is called in Scotland)."
        },
        {
            "text": "Which TWO countries took part in the development of Concorde?",
            "choices": [
                "Russia",
                "UK",
                "USA",
                "France"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "The 1960s was also a time of technological progress. Britain and France developed the world's only supersonic commercial airliner , Concorde. New styles of architecture, including high-rise buildings and the use of concrete and steel, became common."
        },
        {
            "text": "Which TWO are famous UK sports stars?",
            "choices": [
                "Thomas Gainsborough",
                "William Shakespeare",
                "Sir Chris Hoy",
                "Jackie Stewart"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Sir Jackie Stewart (1939-) is a Scottish former racing driver who won the Formula 1 world championship three times. Sir Chris Hoy (1976-) is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 1 1 world championship titles."
        },
        {
            "text": "Where does the Scottish Grand National take place?",
            "choices": [
                "The borders",
                "Ayr",
                "Aintree",
                "Berkshire"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk."
        },
        {
            "text": "In what year did the Romans successfully invade Britain?",
            "choices": [
                "55 BC",
                "63 AD",
                "63 BC",
                "43 AD"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Julius Caesar led a Roman invasion of Britain in 55 BC. This was unsuccessful and for nearly 100 years Britain remained separate from the Roman Empire. In AD 43 the Emperor Claudius led the Roman army in a new invasion. This time, there was resistance from some of the British tribes but the Romans were successful in occupying almost all of Britain."
        },
        {
            "text": "Every MP in the UK has his/her own constituency",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Voters in each constituency elect their member of Parliament (MP) in a General Election. All of the elected MPs from the House of Commons. Most MPs belong to a political party , and the party with the majority of MPs forms the government."
        },
        {
            "text": "Falkland Islands are a Crown Dependency",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "There are also several islands which are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man. These have their own governments and are called 'Crown dependencies'. There are also several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands. They are also linked to the UK but are not a part of it."
        },
        {
            "text": "Which of the following is the capital of Wales?",
            "choices": [
                "Cardif f",
                "Swansea",
                "Belfast",
                "Edinburgh"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Cardif f is the capital city of Wales"
        },
        {
            "text": "What information about you is asked at the polling station?",
            "choices": [
                "Your name and telephone number",
                "Your name and age",
                "Your name, contact details and age",
                "Your name and address"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "When you arrive at the polling station, the staf f will ask for your name and address. In Northern Ireland you will also have to show photographic identification."
        },
        {
            "text": "The Welsh language, spoken in Wales and is taught in schools and universities, is a completely different language from English",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The English language has many accents and dialects. In Wales, many people speak Welsh - a completely dif ferent language from English - and it is taught in schools and universities. In Scotland, Gaelic (again, a dif ferent language) is spoken in some parts of the Highlands and Islands, and in Northern Ireland some people speak Irish Gaelic."
        },
        {
            "text": "How can you contact your MP?",
            "choices": [
                "By using social networks",
                "By writing a letter",
                "By sending an Email",
                "By sending a text message"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You can contact MPs by letter or telephone at their constituency Office, or at their Office in the House of Commons"
        },
        {
            "text": "Who appoints the members of the Cabinet?",
            "choices": [
                "The people of the UK",
                "The Prime Minister",
                "The Monarch",
                "The Speaker"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Prime Minister appoints about 20 senior MPs to become ministers in charge of departments which together form the cabinet."
        },
        {
            "text": "Which TWO are used when making Haggis?",
            "choices": [
                "Dough",
                "Chicken",
                "Oatmeal",
                "Onions"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Scottish Traditional Food: Haggis, a sheep's stomach stuf fed with of fal, suet, onions and oatmeal."
        },
        {
            "text": "What is the total number of member states does the UN have?",
            "choices": [
                "27",
                "190",
                "15",
                "5"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members."
        },
        {
            "text": "What is the total number of times did Sir Jackie Stewart win the Formula 1 championship?",
            "choices": [
                "4",
                "2",
                "3",
                "1"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Sir Jackie Stewart (1939-) is a Scottish former racing driver who won the Formula 1 world championship three times."
        },
        {
            "text": "Queen Elizabeth II was married to Prince Phillip",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The statement is true"
        }
    ]
},
{
    id: "exam28",
    title: "Practice Exam 28",
    questions: [
        {
            "text": "The National Citizen Service provides military training to young people",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project."
        },
        {
            "text": "In Northern Ireland, minor cases are heard by a District Judge or Deputy District Judge, Which person is legally qualified and paid",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates' Court. In Scotland, minor criminal of fences go to a Justice of the Peace Court. In Northern Ireland, cases are heard by a District Judge or Deputy District Judge, who is legally qualified and paid."
        },
        {
            "text": "Which of the following is the maximum fine if you watch TV without a valid TV licence?",
            "choices": [
                "\u00a31,000",
                "\u00a3500",
                "\u00a33,000",
                "\u00a32,000"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "You will receive a fine of up to \u00a31,000 if you watch TV but do not have a TV licence."
        },
        {
            "text": "The Protestants formed their own churches during the Reformation",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "At the same time the Reformation was happening across Europe. This was a movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church. The Protestants formed their own churches. They read the Bible in their own languages instead of in Latin; they did not pray to saints or at shrines; and they believed that a person's own relationship with God was more important than submitting to the authority of the Church. Protestant ideas gradually gained strength in England, Wales and Scotland during the 16th century ."
        },
        {
            "text": "What exactly does St Patrick's cross look like?",
            "choices": [
                "A diagonal white cross on a blue ground",
                "Welsh dragon cross",
                "A red cross on a white ground",
                "A diagonal red cross on a white ground"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Union Flag consists of three crosses: The cross of St George, patron saint of England, is a red cross on a white ground; The cross of St Andrew , patron saint of Scotland, is a diagonal white cross on a blue ground; The cross of St Patrick, patron saint of Ireland, is a diagonal red cross on a white ground."
        },
        {
            "text": "A very impressive hill fort can still be seen today at Maiden Castle, what English county does it stand in?",
            "choices": [
                "Cornwall",
                "East Lothian",
                "Dorset",
                "Danebury"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "A very impressive hill fort can still be seen today at Maiden Castle, in the English county of Dorset."
        },
        {
            "text": "On election day , you will get your ballot paper , which you take to a polling booth to fill in front of the polling officer",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "When you arrive at the polling station, the staf f will ask for your name and address. In Northern Ireland you will also have to show photographic identification. You will then get your ballot paper , which you take to a polling booth to fill in privately"
        },
        {
            "text": "What did the Queen Elizabeth II celebrate in 2012?",
            "choices": [
                "Platinum Jubilee",
                "Gold Jubilee",
                "Silver Jubilee",
                "Diamond Jubilee"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Queen Elizabeth II celebrated her Diamond Jubilee in 2012. The clock tower 'Big Ben' was named 'Elizabeth Tower' in honour of this event."
        },
        {
            "text": "Who led the Scottish, in 1314, to defeat the English at the Battle of Bannockburn?",
            "choices": [
                "Robert Burns",
                "William of Orange",
                "Oliver Cromwell",
                "Robert the Bruce"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In Scotland, the English kings were less successful. In 1314 the Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn, and Scotland remained unconquered by the English."
        },
        {
            "text": "What was the first war to be extensively covered by the media?",
            "choices": [
                "The Crimean War",
                "The Battle of Hastings",
                "The Battle of Waterloo",
                "The Battle Of Britain"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "From 1853 to 1856, Britain fought with Turkey and France against Russia in the Crimean War. It was the first war to be extensively covered by the media through news stories and photographs"
        },
        {
            "text": "Which of the following is the National Anthem of the UK?",
            "choices": [
                "God Save the King/Queen",
                "United we stand",
                "King reign over the UK",
                "God Save the UK"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The National Anthem of the UK is 'God Save the King/Queen'. It is played at important national occasions and at events attended by the King/Queen or the Royal Family . The first verse is: 'God save our gracious King! Long live our noble King! God save the King! Send him victorious, Happy and glorious, Long to reign over us, God save the King!'."
        },
        {
            "text": "The leader of the Opposition usually becomes Prime Minister if his or her party wins the next General Election",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The second-largest party in the House of Commons is called the opposition. The leader of the opposition usually becomes Prime Minister if his or her party wins the next General Election."
        },
        {
            "text": "How can you help looking after the environment?",
            "choices": [
                "Studying your area",
                "Recycling your waste",
                "Going shopping carefully",
                "Not smoking in public"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "It is important to recycle as much of your waste as you can. Using recycled materials to make new products uses less energy and means that we do not need to extract more raw materials from the earth. It also means that less rubbish is created, so the amount being put into landfill is reduced."
        },
        {
            "text": "The Industrial Revolution was the rapid development of industry in Britain in the 18th and 19th centuries",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Industrial Revolution was the rapid development of industry in Britain in the 18th and 19th centuries."
        },
        {
            "text": "In which location is the Cenotaph located?",
            "choices": [
                "Whitehall",
                "Wiltshire",
                "Dorset",
                "Trafalgar Square"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Cenotaph can be visited in London in Whitehall."
        },
        {
            "text": "Which government was elected in 1945?",
            "choices": [
                "Liberal Democrats",
                "Conservative",
                "Labour",
                "UKIP"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Clement Attlee was Winston Churchill's Deputy Prime Minister in the wartime coalition government and became Prime Minister after the Labour Party won the 1945 election. He was Prime Minister from 1945 to 1951 and led the Labour Party for 20 years. Attlee's government undertook the nationalisation of major industries (like coal and steel), created the National Health Service and implemented many of Beveridge's plans for a stronger welfare state."
        },
        {
            "text": "Who should you contact to get your National Insurance number?",
            "choices": [
                "Local government",
                "The Home secretary",
                "Your local school",
                "DWP (Department for Work and Pensions)"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "You will need to telephone the Department for Work and Pensions (DWP) to arrange to get a National Insurance number ."
        },
        {
            "text": "Which TWO of these are cycling athletes?",
            "choices": [
                "Sir Steve Redgrave",
                "Bradley Wiggins",
                "Jessica Ennis",
                "Sir Chris Hoy"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Sir Chris Hoy (1976-) is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 1 1 world championship titles. Bradley Wiggins (1980-) is a cyclist. In 2012, he became the first Briton to win the Tour de France. He has won seven Olympic medals, including gold medals in the 2004, 2008 and 2012 Olympic Games."
        },
        {
            "text": "Which was a crucial aerial battle against the Germans?",
            "choices": [
                "The Battle of Britain",
                "D-Day",
                "The Blitz spirit",
                "The Dunkirk spirit"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Germans waged an air campaign against Britain, but the British resisted with their fighter planes and eventually won the crucial aerial battle against the Germans, called 'the Battle of Britain'."
        },
        {
            "text": "What treaty was signed in 1707?",
            "choices": [
                "The Great Union",
                "The Act of Union",
                "The Act for Government of Wales",
                "The Act of Great Britain"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Act of Union, known as the Treaty of Union in Scotland, was therefore agreed in 1707, creating the Kingdom of Great Britain."
        },
        {
            "text": "The chairperson of the General Assembly of the Church of Scotland is the Moderator , Which person is appointed for the whole lifetime to speak on behalf of that Church.",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator , who is appointed for one year only and often speaks on behalf of that Church."
        },
        {
            "text": "Ralph Vaughan Williams was strongly influenced by traditional English folk music",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Ralph Vaughan Williams (1872-1958) wrote music for orchestras and choirs. He was strongly influenced by traditional English folk music."
        },
        {
            "text": "In what year did the First World War end?",
            "choices": [
                "9th of july",
                "18th of August",
                "9th of May",
                "11th of November"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The First World War ended at 1 1.00 am on 1 1th November 1918 with victory for Britain and its allies."
        },
        {
            "text": "Which of the following traditional heavy industries were badly affected during the great depression?",
            "choices": [
                "Aviation",
                "Shipbuilding",
                "Automobile",
                "Railway"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The ef fects of the depression of the 1930s were felt dif ferently in dif ferent parts of the UK. The traditional heavy industries such as shipbuilding were badly af fected but new industries - including the automobile and aviation industries - developed."
        }
    ]
},
{
    id: "exam29",
    title: "Practice Exam 29",
    questions: [
        {
            "text": "How long does it take to give blood?",
            "choices": [
                "About 3 hours",
                "About 1 hour",
                "About 20 mins",
                "About 10 mins"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Donated blood is used by hospitals to help people with a wide range of injuries and illnesses. Giving blood only takes about an hour to do."
        },
        {
            "text": "George Frederick wrote which oratorio, which is sung regularly by choirs, often at Easter time?",
            "choices": [
                "The Origin",
                "Elijah",
                "Messiah",
                "The Light of the Moon"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The German-born composer George Frideric Handel (1695-1759) spent many years in the UK and became a British citizen in 1727. He wrote the Water Music for King George I and Music for the Royal Fireworks for his son, George II. Both these pieces continue to be very popular . Handel also wrote an oratorio, Messiah, which is sung regularly by choirs, often at Easter time."
        },
        {
            "text": "In what year did newspapers begin to operate without a government licence?",
            "choices": [
                "1708",
                "1695",
                "1681",
                "1712"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "This was also an important time for the development of a free press (newspapers and other publications which are not controlled by the government). From 1695, newspapers were allowed to operate without a government licence. Increasing numbers of newspapers began to be published."
        },
        {
            "text": "How long does it take to give blood?",
            "choices": [
                "10 minutes",
                "2 hours",
                "20 minutes",
                "1 hour"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Donated blood is used by hospitals to help people with a wide range of injuries and illnesses, it takes about an hour to do so."
        },
        {
            "text": "Big Ben was named 'Elizabeth Tower' in honour of Queen Elizabeth I",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Big Ben is the nickname for the great bell of the clock at the Houses of Parliament in London. Many people call the clock Big Ben as well. The clock is over 150 years old and is a popular tourist attraction. The clock tower is named 'Elizabeth Tower' in honour of Queen Elizabeth II's Diamond Jubilee in 2012."
        },
        {
            "text": "You need to be a member of a political party to be able to stand for election as an MP",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Anyone aged 18 or over can stand for election as an MP but they are unlikely to win unless they have been nominated to represent one of the major political parties."
        },
        {
            "text": "The National Citizen Service programme gives 16 and 17 year olds the opportunity to enjoy outdoor activities, develop their skills",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are many opportunities for young people to volunteer and receive accreditation which will help them to develop their skills. These include the National Citizen Service programme, which gives 16- and 17-year-olds the opportunity to enjoy outdoor activities, develop their skills and take part in a community project"
        },
        {
            "text": "If you wish to be a permanent resident of the UK, you should look after yourself. In return you are guaranteed a job",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You are not guaranteed a job if you settle in the UK."
        },
        {
            "text": "Blood and organ donations are compulsory in the UK",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "it's a donation, thus its not compulsory . Donated blood is used by hospitals to help people with a wide range of injuries and illnesses. Giving blood only takes about an hour to do."
        },
        {
            "text": "Which TWO of the following are major horse-racing events in the UK?",
            "choices": [
                "Scottish Grand National",
                "Six Nations Championship",
                "The Open Championship",
                "Royal Ascot"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk."
        },
        {
            "text": "Which TWO of these aircrafts were used by Britain in WWII?",
            "choices": [
                "Spitfire",
                "Mig-21",
                "Hurricane",
                "F-22"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "The most important planes used by the Royal Air Force in the Battle of Britain(1940) were the Spitfire and the Hurricane - which were designed and built in Britain."
        },
        {
            "text": "Who mapped the coast of Australia?",
            "choices": [
                "Sir Francis George",
                "Admiral Nelson",
                "James Cook",
                "Sir Francis Drake"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Captain James Cook mapped the coast of Australia and a few colonies were established there. Britain gained control over Canada, and the East India Company , originally set up to trade, gained control of large parts of India."
        },
        {
            "text": "What is the total number of 'local authorities' does the city of London have?",
            "choices": [
                "21",
                "5",
                "15",
                "33"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "London has 33 local authorities, with the Greater London Authority and the Mayor of London coordinating policies across the capital."
        },
        {
            "text": "Which is an example of a Civil Offence?",
            "choices": [
                "Discrimination in the workplace",
                "Selling Tobacco to under 18's",
                "Smoking in public places",
                "Carrying a weapon"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Examples of civil laws are - Housing law: this includes disputes between landlords and tenants over issues such as repairs and eviction; Consumer rights: an example of this is a dispute about faulty goods or services; Employment law: these cases include disputes over wages and cases of unfair dismissal or discrimination in the workplace; Debt: people might be taken to court if they owe money to someone."
        },
        {
            "text": "When was the first coin in Britain made?",
            "choices": [
                "The Iron age",
                "The Middle ages",
                "The Gold age",
                "The Stone age"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Iron Age people made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings."
        },
        {
            "text": "What did the Statute of Rhuddlan do?",
            "choices": [
                "Annexed Wales to England",
                "Annexed Britain to England",
                "Annexed Ireland to England",
                "Annexed Scotland to England"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1284 King Edward I of England introduced the Statute of Rhuddlan, which annexed Wales to the Crown of England."
        },
        {
            "text": "Which person is currently the Head of State of the UK?",
            "choices": [
                "Prince Philip",
                "King Charles III",
                "Prince Charles",
                "The Prime Minister"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "King Charles III is the head of state of the UK. He is also the monarch or head of state for many countries in the Commonwealth."
        },
        {
            "text": "By which year did the English rule an area around Dublin called the Pale?",
            "choices": [
                "1100",
                "1200",
                "1300",
                "1400"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "At the beginning of the Middle Ages, Ireland was an independent country . The English first went to Ireland as troops to help the Irish king and remained to build their own settlements. By 1200, the English ruled an area of Ireland known as the Pale, around Dublin. Some of the important lords in other parts of Ireland accepted the authority of the English king."
        },
        {
            "text": "The Union Jack is comprised of four countries' crosses. They are: England, Wales, Scotland and Northern Ireland.",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "One symbol of the union between England, Scotland, Wales and Ireland was a new version of the official flag, the Union Flag. This is often called the Union Jack. The flag combined crosses associated with England, Scotland and Ireland. It is still used today as the official flag of the UK."
        },
        {
            "text": "The Scottish Parliament has 33 members",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are 129 members of the Scottish Parliament (MSPs), elected by a form of proportional representation. The Scottish Parliament can pass laws for Scotland on all matters which are not specifically reserved to the UK Parliament."
        },
        {
            "text": "Identify which of these venues is located in Scotland?",
            "choices": [
                "The SECC",
                "Troxy",
                "Wembley Stadium",
                "The O2"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Scottish Exhibition and Conference Centre (SECC) is located in Glasgow , Scotland."
        },
        {
            "text": "Which of the following is the capital of Scotland?",
            "choices": [
                "Edinburgh",
                "Belfast",
                "Cardif f",
                "London"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Edinburgh is the capital city of Scotland."
        },
        {
            "text": "Which TWO changes did the Chartists campaign for?",
            "choices": [
                "Secret ballots",
                "Elections every 3 years",
                "Elections every year",
                "For every woman to have the vote"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "In the 1830s and 1840s, a group called the Chartists campaigned for reform. They wanted six changes: for every man to have the vote; elections every year; for all regions to be equal in the electoral system; secret ballots; for any man to be able to stand as an MP; for MPs to be paid."
        },
        {
            "text": "Where can you visit Admiral Nelson's ship , HMS Victory?",
            "choices": [
                "Cheshire",
                "London",
                "Portsmouth",
                "Lincolnshire"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Admiral Nelson's ship, HMS Victory , can be visited in Portsmouth"
        }
    ]
},
{
    id: "exam30",
    title: "Practice Exam 30",
    questions: [
        {
            "text": "National Trust is a charity that works to preserve important buildings, coastline and countryside",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Many parts of the countryside and places of interest are kept open by the National Trust in England, Wales and Northern Ireland and the National Trust for Scotland. Both are charities that work to preserve important buildings, coastline and countryside in the UK. The National Trust was founded in 1895 by three volunteers. There are now more than 61,000 volunteers helping to keep the organisation running."
        },
        {
            "text": "Which TWO are famous British sailors?",
            "choices": [
                "Sir Robin Knox-Johnston",
                "Sir Francis Chichester",
                "Sir Ian Botham",
                "Sir Jackie Stewart"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "A British sailor , Sir Francis Chichester , was the first person to sail single-handed around the world, in . Two years later , Sir Robin Knox-Johnston became the first person to do this without stopping."
        },
        {
            "text": "When were women given the right to vote at the age of 18?",
            "choices": [
                "1918",
                "1928",
                "1969",
                "1959"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "By 1918, the voting franchise was extended to women over 30, and then in 1928 to men and women over 21. In 1969, the voting age was reduced to 18 for men and women."
        },
        {
            "text": "You have to be 21 years old to stand as an MP",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Anyone aged 18 or over can stand for election as an MP but they are unlikely to win unless they have been nominated to represent one of the major political parties. These are the Conservative Party , the Labour Party , the Liberal Democrats, or one of the parties representing Scottish, Welsh or Northern Irish interests."
        },
        {
            "text": "Which is not a Protestant Christian group?",
            "choices": [
                "Catholics",
                "Baptists",
                "Presbyterians",
                "Methodists"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "There is no established Church in Wales or Northern Ireland. Other Protestant Christian groups in the UK are Baptists, Methodists, Presbyterians and Quakers. There are also other denominations of Christianity , the biggest of which is Roman Catholic."
        },
        {
            "text": "The UK has hosted the Olympic Games three times. In what year did the UK host the games in the 20th century? (Choose TWO)",
            "choices": [
                "1928",
                "1908",
                "1916",
                "1948"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The main Olympic site for the 2012 Games was in Stratford, East London. The British team was very successful, across a wide range of Olympic sports, finishing third in the medal table."
        },
        {
            "text": "Which individual was one of the founders of England's naval tradition?",
            "choices": [
                "Sir Francis Drake",
                "King James",
                "William Shakespeare",
                "Oliver Cromwell"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Sir Francis Drake, one of the commanders in the defeat of the Spanish Armada, was one of the founders of England's naval tradition. His ship (The Golden Hind) was one of the first to sail around the world."
        },
        {
            "text": "When was the time of growing patriotism?",
            "choices": [
                "The Victorian Age",
                "The Iron Age",
                "The Golden Age",
                "The Elizabethan period"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Elizabethan period in England was a time of growing patriotism: a feeling of pride in being English. English explorers sought new trade routes and tried to expand British trade into the Spanish colonies in the Americas."
        },
        {
            "text": "Which TWO of these roles, in the UK, are unpaid?",
            "choices": [
                "Special Constable",
                "Magistrate",
                "District Judge",
                "Chief of Police"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "You can volunteer with the police, and become a special constable or a lay (non-police) representative. You can also apply to become a Magistrate."
        },
        {
            "text": "What proportion of the population died because of the Black Death?",
            "choices": [
                "One third",
                "One half",
                "One fifth",
                "One fourth"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "One third of the population of England and a similar proportion in Scotland and Wales died because of the Black Death."
        },
        {
            "text": "Which individual was R. A. Butler?",
            "choices": [
                "An Economist",
                "A Poet",
                "A Conservative MP",
                "Minister of Health"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Richard Austen Butler (later Lord Butler) was born in 1902. He became a Conservative MP in 1923 and held several positions before becoming responsible for education in 1941."
        },
        {
            "text": "Which individual was Henry Purcell?",
            "choices": [
                "A musician",
                "A gardener",
                "An actor",
                "A poet"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Henry Purcell (1659-95) was the organist at Westminster Abbey . He wrote church music and operas."
        },
        {
            "text": "What was the estimated population of the British Empire?",
            "choices": [
                "300 million",
                "350 million",
                "400 million",
                "250 million"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa. It became the largest empire the world has ever seen, with an estimated population of more than 400 million people."
        },
        {
            "text": "It is illegal for shops and businesses to not accept the banknotes of Northern Ireland and Scotland",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However , shops and businesses do not have to accept them."
        },
        {
            "text": "Which movement campaigned for the women's rights?",
            "choices": [
                "Bishops",
                "Quakers",
                "Chartists",
                "Suffragettes"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the late 19th and early 20th centuries, an increasing number of women campaigned and demonstrated for greater rights and, in particular , the right to vote. They formed the women's suffrage movement and became known as 'suf fragettes'."
        },
        {
            "text": "Easter eggs are often given as presents at Easter as a symbol of new life",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Easter is also celebrated by people who are not religious. 'Easter eggs' are chocolate eggs often given as presents at Easter as a symbol of new life."
        },
        {
            "text": "Who designed the new St Paul Cathedral?",
            "choices": [
                "Sir Christopher Wren",
                "Isaac Newton",
                "Isambard Kingdom Brunel",
                "Samuel Pepys"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Christopher Wren designed a new St Paul Cathedral after the previous one was destroyed by a great fire in 1666."
        },
        {
            "text": "The Medieval Period is referred to the period after the Norman Conquest up until what year?",
            "choices": [
                "1455",
                "1385",
                "1485",
                "1400"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The period after the Norman Conquest up until about 1485 is called the Middle Ages (or the medieval period). It was a time of almost constant war ."
        },
        {
            "text": "Which TWO kings believed in the 'Divine Right of Kings'?",
            "choices": [
                "Charles I",
                "William of Orange",
                "James I",
                "Henry VIII"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "James I and his son Charles I were less skilled politically . Both believed in the 'Divine Right of Kings': the idea that the king was directly appointed by God to rule. They thought that the king should be able to act without having to seek approval from Parliament."
        },
        {
            "text": "What type of literature are 'The Canterbury Tales' written by Geoffrey Chaucer?",
            "choices": [
                "Poems",
                "Plays",
                "Novels",
                "Sonnets"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the years leading up to 1400, Geof frey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey , and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales. It was one of the first books to be printed by William Caxton, the first person in England to print books using a printing press. Many of the stories are still popular . Some have been made into plays and television programmes."
        },
        {
            "text": "Which TWO of these are English civil war battles?",
            "choices": [
                "Marston Moor",
                "Agincourt",
                "Naseby",
                "Bannockburn"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "During the civil war , the king's army was defeated at the Battles of Marston Moor and Naseby . By 1646, it was clear that Parliament had won the war . Charles was held prisoner by the parliamentary army . He was still unwilling to reach any agreement with Parliament and in 1649 he was executed."
        },
        {
            "text": "Who defeated Napoleon at the Battle of Waterloo?",
            "choices": [
                "Henry VII",
                "Louis XIV",
                "The Duke of Wellington",
                "Nelson"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo."
        },
        {
            "text": "Which of the following is the official report that contains everything said in Parliament called?",
            "choices": [
                "Hansard",
                "The Government press",
                "The Government report",
                "The Domesday Book"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Proceedings in Parliament are broadcast on television and published in official reports called Hansard."
        },
        {
            "text": "What do the Brit Awards celebrate?",
            "choices": [
                "Music",
                "Art",
                "Theatre",
                "Movies"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Brit Awards is an annual event that gives awards in a range of categories, such as best British group and best British solo artist."
        }
    ]
},
{
    id: "exam31",
    title: "Practice Exam 31",
    questions: [
        {
            "text": "Pressure groups and lobby groups are organisations which try to influence government policy",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Pressure and lobby groups are organisations which try to influence government policy . They play an important role in politics."
        },
        {
            "text": "Who, in 1810 opened the first curry house in Britain called 'The Hindoostane Coffee House' in George Street, London?",
            "choices": [
                "Ali Kerimov",
                "Alexander Burns",
                "Richard Arkwright",
                "Sake Dean Mahomet"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1810 Sake Dean Mahomet opened the Hindoostane Cof fee House in George Street, London. It was the first curry house to open in Britain. Mahomet and his wife also introduced 'shampooing', the Indian art of head massage, to Britain."
        },
        {
            "text": "Identify which of these statements is incorrect?",
            "choices": [
                "It's a criminal of fence to of fend one's religion or ethnic origin",
                "It's a criminal of fence to owe someone money",
                "Selling or buying drugs such as heroin is illegal in the UK",
                "It's a criminal of fence to carry a weapon of any kind"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Owing money is a civil of fence"
        },
        {
            "text": "What is the total number of ski centres are there in Scotland?",
            "choices": [
                "1",
                "5",
                "13",
                "2"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are five ski centres in Scotland, as well as Europe's longest dry ski slope near Edinburgh."
        },
        {
            "text": "What were the refugees that came from France between 1680 and 1720 called?",
            "choices": [
                "Quakers",
                "Sikhs",
                "Chartists",
                "Huguenots"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Between 1680 and 1720 many refugees called Huguenots came from France. They were Protestants and had been persecuted for their religion."
        },
        {
            "text": "How long is Hanukkah celebrated for?",
            "choices": [
                "8 days",
                "9 days",
                "10 days",
                "7 days"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Hanukkah is in November or December and is celebrated for eight days. It is to remember the Jews' struggle for religious freedom. On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight."
        },
        {
            "text": "Who ran 1 mile in 4 minutes in 1954?",
            "choices": [
                "Sir Jackie Stewart",
                "Sir Roger Bannister",
                "Sir Steve Redgrave",
                "Sir Chris Hoy"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Sir Roger Bannister (1929-) was the first man in the world to run a mile in under four minutes, in 1954."
        },
        {
            "text": "How are members of Parliament (MPs) elected?",
            "choices": [
                "Proportional representation",
                "Online Voting",
                "Open Ballot",
                "First past the post"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "MPs are elected through a system called 'first past the post'. In each constituency , the candidate who gets the most votes is elected. The government is usually formed by the party that wins the majority of constituencies. If no party wins a majority , two parties may join together to form a coalition."
        },
        {
            "text": "Which of the following is the responsibility that you have as a UK citizen?",
            "choices": [
                "Look after yourself and your family",
                "Going to the cinema",
                "Keeping an allotment",
                "Going to the library"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Flowing from the fundamental principles are responsibilities and freedoms which are shared by all those living in the UK and which we expect all residents to respect. If you wish to be a permanent resident or citizen of the UK, you should: respect and obey the law; respect the rights of others, including their right to their own opinions; treat others with fairness; look after yourself and your family; look after the area in which you live and the environment."
        },
        {
            "text": "How old do you have to be to buy a lottery ticket or a scratch card?",
            "choices": [
                "15",
                "18",
                "17",
                "16"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "As of 2021, people under 18 are not allowed to participate in the National Lottery (Previously 16). This includes buying Scratch Cards."
        },
        {
            "text": "In the 2021 England and Wales census, what percentage of people identified themselves as Christian?",
            "choices": [
                "91%",
                "34%",
                "46%",
                "63%"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The 2021 Census results released so far show that 46% of people in England and Wales (from a total sampled 60 million) identified themselves as Christian. Much smaller proportions identified themselves as Hindu (2%), Sikh (1%), Jewish or Buddhist (both around 0.5%), 37% stated not to follow any religion and 0.5% of people followed another religion"
        },
        {
            "text": "What time do Public Houses open at?",
            "choices": [
                "10:00",
                "Noon",
                "11:00",
                "09:00"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Public houses (pubs) are an important part of the UK social culture. Pubs are usually open during the day from 1 1.00 am (12 noon on Sundays)."
        },
        {
            "text": "Which individual was the first woman Prime Minister?",
            "choices": [
                "Margaret Thatcher",
                "Elizabeth Brown",
                "Mary Peters",
                "Florence Nightingale"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1979, Margaret Thatcher became the first woman Prime Minister of the UK. She was the longest-serving Prime Minister of the 20th century , remaining in Office until 1990."
        },
        {
            "text": "Dame Ellen MacArthur is famous for her achievements in which sport?",
            "choices": [
                "Swimming",
                "Athletics",
                "Sailing",
                "Cycling"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Dame Ellen MacArthur (1976-) is a yachtswoman and in 2004 became the fastest person to sail around the world single handed."
        },
        {
            "text": "When were women given the right to vote at the same age as men?",
            "choices": [
                "1832",
                "1918",
                "1928",
                "1969"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war ef fort during the First World War. Shortly before Emmeline's death in 1928, women were given the right to vote at the age of 21, the same as men."
        },
        {
            "text": "Which TWO of these are core values and responsibilities of the British society?",
            "choices": [
                "Always share the same views as your partner",
                "To vote in local and national government elections",
                "Not to behave responsibly",
                "To work to provide for yourself and your family"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Although Britain is one of the world's most diverse societies, there is a set of shared values and responsibilities that everyone can agree with. These values and responsibilities include: to obey and respect the law; to be aware of the rights of others and respect those rights; to treat others with fairness; to behave responsibly; to help and protect your family; to respect and preserve the environment; to treat everyone equally , regardless of sex, race, religion, age, disability , class or sexual orientation; to work to provide for yourself and your family; to help others; to vote in local and national government elections."
        },
        {
            "text": "What helped the progress of the industrial revolution?",
            "choices": [
                "Human Nature ideas",
                "New Political Ideas",
                "Steam Power",
                "New Economics ideas"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Scientific discoveries, such as James Watt's work on steam power , helped the progress of the Industrial Revolution."
        },
        {
            "text": "Who built the Hadrian's Wall to keep out the Picts?",
            "choices": [
                "Henry Hadrian",
                "Emperor Hadrian",
                "Sutton Hoo",
                "King Alfred the Great"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Areas of what is now Scotland were never conquered by the Romans, and the Emperor Hadrian built a wall in the north of England to keep out the Picts (ancestors of the Scottish people)."
        },
        {
            "text": "Which party forms the government?",
            "choices": [
                "The party appointed by the Monarch",
                "The party with the majority of the members of Parliament (MPs)",
                "The party with the most votes",
                "The party which is the most popular"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Most MPs belong to a political party , and the party with the majority of MPs forms the government. If one party does not get a majority , two parties can join together to form a coalition."
        },
        {
            "text": "For which TWO subjects are the Secretaries of State responsible?",
            "choices": [
                "Education",
                "Policing",
                "Economy",
                "Defence"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Secretaries of State are responsible for subjects such as education, health and defence."
        },
        {
            "text": "Queen Elizabeth I was a devout Catholic and persecuted Protestants",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Mary was a devout Catholic and persecuted Protestants (for this reason, she became known as 'Bloody Mary'). Mary also died after a short reign and the next monarch was her half- sister , Elizabeth, the daughter of Henry VIII and Anne Boleyn."
        },
        {
            "text": "In what year did the UK join the EU?",
            "choices": [
                "1957",
                "1961",
                "1967",
                "1973"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973. After UK's Brexit vote, there are now 27 EU member states."
        },
        {
            "text": "Where did the Vikings come from?",
            "choices": [
                "Norway and Sweden",
                "Austria and Germany",
                "Spain and France",
                "Norway and Denmark"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Vikings came from Denmark and Norway . They first visited Britain in AD 789 to raid coastal towns and take away goods and slaves."
        },
        {
            "text": "What county does Stonehenge stand in?",
            "choices": [
                "Lancashire",
                "Wiltshire",
                "Lothians",
                "Berkshire"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Stonehenge, still stands in what is now the English county of Wiltshire. Stonehenge was probably a special gathering place for seasonal ceremonies."
        }
    ]
},
{
    id: "exam32",
    title: "Practice Exam 32",
    questions: [
        {
            "text": "How old do you have to be to go into betting shops or gambling clubs?",
            "choices": [
                "21",
                "16",
                "20",
                "18"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "You have to be 18 to go into betting shops or gambling clubs."
        },
        {
            "text": "How often are Elections for the European parliament held?",
            "choices": [
                "Every 6 years",
                "Every 3 years",
                "Every 4 years",
                "Every 5 years"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Elections for the European Parliament are also held every five years. Elected members are called members of the European Parliament (MEPs)."
        },
        {
            "text": "Which of the following is the currency used in the UK?",
            "choices": [
                "Dollars",
                "Euro",
                "Pound sterling",
                "Gold"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The currency in the UK is the pound sterling (symbol \u00a3). There are 100 pence in a pound."
        },
        {
            "text": "Identify which of these statements is correct?",
            "choices": [
                "People found guilty of certain criminal of fences cannot stand for Public Office",
                "People found guilty of all criminal of fences cannot stand for Public Office"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Office Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over can stand for Public Office. There are some exceptions, including: members of the armed forces; civil servants; people found guilty of certain criminal of fences."
        },
        {
            "text": "Identify which of these international events was held in London in 2012?",
            "choices": [
                "EURO 2012",
                "The Paralympic Games",
                "The Commonwealth Games",
                "The World Cup"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012. The Paralympic Games for 2012 were also hosted in London."
        },
        {
            "text": "What is the total number of counties in Ireland remained in the UK under Northern Ireland?",
            "choices": [
                "6",
                "3",
                "12",
                "9"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1921 a peace treaty was signed and in 1922 Ireland became two countries. The six counties in the north which were mainly Protestant remained part of the UK under the name Northern Ireland. The rest of Ireland became the Irish Free State. It had its own government and became a republic in 1949."
        },
        {
            "text": "The devolved governments do not have the power to legislate on any issues but can advise and encourage",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Policy and laws governing defence, foreign af fairs, immigration, taxation and social security all remain under central UK government control. However , many other public services, such as education, are controlled by the devolved administrations."
        },
        {
            "text": "Pakistan is part of the Commonwealth",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Pakistan is currently part of the Commonwealth"
        },
        {
            "text": "Which individual was the first Danish King?",
            "choices": [
                "Cnut also 'Canute'",
                "William",
                "Harold",
                "Kenneth MacAlpin"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The first Danish King was Cnut, also called Canute."
        },
        {
            "text": "In what year did the Roman army leave Britain?",
            "choices": [
                "AD 43",
                "AD 630",
                "AD 410",
                "AD 100"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned."
        },
        {
            "text": "Which TWO houses formed the House of Tudor?",
            "choices": [
                "House of Lords",
                "House of York",
                "House of Commons",
                "House of Lancaster"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "King Richard III of the House of York was killed in the battle and Henry Tudor, the leader of the House of Lancaster , became King Henry VII. Henry then married King Richard's niece, Elizabeth of York, and united the two families. Henry was the first king of the House of Tudor. The symbol of the House of Tudor was a red rose with a white rose inside it as a sign that the Houses of York and Lancaster were now allies."
        },
        {
            "text": "Who developed important Economics ideas?",
            "choices": [
                "James Watt",
                "Richard Arkwright",
                "Adam Smith",
                "David Hume"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Many of the great thinkers of the Enlightenment were Scottish. Adam Smith developed ideas about economics which are still referred to today ."
        },
        {
            "text": "Sir Ian Botham is famous for his achievements in which sport?",
            "choices": [
                "Cycling",
                "Cricket",
                "Rugby",
                "Football"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Sir Ian Botham (1955-) captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling."
        },
        {
            "text": "What do you have to pay tax on in the UK?",
            "choices": [
                "Attendance Allowance",
                "Pensions",
                "All ISAs and Savings Certificates",
                "Disability Living Allowance"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "People in the UK have to pay tax on their income, which includes: wages from paid employment; profits from self-employment, taxable benefits; pensions; income from property , savings and dividends."
        },
        {
            "text": "Who established the Church of England?",
            "choices": [
                "The Pope",
                "Henry VIII",
                "Charles II",
                "Edward II"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "To divorce his first wife, Henry needed the approval of the Pope. When the Pope refused, Henry established the Church of England. In this new Church, the king, not the Pope, would have the power to appoint bishops and order how people should worship."
        },
        {
            "text": "Which house won the War of the Roses?",
            "choices": [
                "The House of Lords",
                "The House of Lancaster",
                "The House of York",
                "The House of Commons"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The war ended with the Battle of Bosworth Field in 1485. King Richard III of the House of York was killed in the battle and Henry Tudor, the leader of the House of Lancaster , became King Henry VII."
        },
        {
            "text": "At the beginning of the Middle Ages, Ireland was an independent country",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "At the beginning of the Middle Ages, Ireland was an independent country . The English first went to Ireland as troops to help the Irish king and remained to build their own settlements. By 1200, the English ruled an area of Ireland known as the Pale, around Dublin. Some of the important lords in other parts of Ireland accepted the authority of the English king."
        },
        {
            "text": "To be able to vote in a parliamentary , local or European election, you must have your name on the electoral register",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "To be able to vote in a parliamentary , local or European election, you must have your name on the electoral register . If you are eligible to vote, you can register by contacting your local council electoral registration Office."
        },
        {
            "text": "What was the purpose of the Emancipation Act?",
            "choices": [
                "Freedom of religion",
                "Freedom of speech",
                "No one could be held prisoner unlawfully",
                "Abolish slavery in the British Empire"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1807, it became illegal to trade slaves in British ships or from British ports, and in 1833 the Emancipation Act abolished slavery throughout the British Empire."
        },
        {
            "text": "In what year did the first farmers start settling in Britain?",
            "choices": [
                "8500 years ago",
                "4000 years ago",
                "6000 years ago",
                "10000 years ago"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The first farmers arrived in Britain about 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe. These people built houses, tombs and monuments on the land."
        },
        {
            "text": "As per 2021 England and Wales census, what's the percetage of Jewish or Buddhist people in the UK?",
            "choices": [
                "10%",
                "15%",
                "5%",
                "1%"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the 2021 England and Wales census, around 525,000 people from the sampled population of 60 million identified as Sikh. 46% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (6.5%), Hindu (2%), Sikh (1%), Jewish or Buddhist (both around 0.5%), 0.5% of people followed another religion and 37% stated not to follow any religion."
        },
        {
            "text": "Where does the Scottish Grand National take place?",
            "choices": [
                "Berkshire",
                "The borders",
                "Aintree",
                "Ayr"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Famous horse-racing events include: Royal Ascot, a five-day race meeting in Berkshire attended by members of the Royal Family; the Grand National at Aintree near Liverpool; and the Scottish Grand National at Ayr. There is a National Horseracing Museum in Newmarket, Suffolk."
        },
        {
            "text": "Which individual was the first 'Scottish King'?",
            "choices": [
                "Harold",
                "William I",
                "Kenneth MacAlpin",
                "Cnut also 'Canute'"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In the north, the threat of attack by Vikings had encouraged the people to unite under one king, Kenneth MacAlpin. The term Scotland began to be used to describe that country ."
        },
        {
            "text": "In Northern Ireland, Deputy District Judges hear minor criminal cases",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates' Court. In Scotland, minor criminal of fences go to a Justice of the Peace Court. In Northern Ireland, cases are heard by a District Judge or Deputy District Judge, who is legally qualified and paid."
        }
    ]
},
{
    id: "exam33",
    title: "Practice Exam 33",
    questions: [
        {
            "text": "Identify which of these are 'Crown Dependencies'?",
            "choices": [
                "The Channel Islands and the Isle of Man",
                "St Helena and Falkland Islands",
                "Ireland and the Channel Islands",
                "St Helena and Wales"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Channel Islands and the Isle of Man are closely related to the UK but are not part of it. They have their own governments and are called 'Crown dependencies'."
        },
        {
            "text": "In which TWO countries were PCCs elected in?",
            "choices": [
                "England",
                "Northern Ireland",
                "Wales",
                "Scotland"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "In November 2012, the public elected Police and Crime Commissioners (PCCs) in England and Wales. These are directly elected individuals who are responsible for the delivery of an efficient and ef fective police force that reflects the needs of their local communities. PCCs set local police priorities and the local policing budget. They also appoint the Chief Constable."
        },
        {
            "text": "Who won two gold medals for running in the 2004 Olympic Games?",
            "choices": [
                "Dame Kelly Holmes",
                "Christopher Dean",
                "Jayne Torvill",
                "Dame Ellen MacArthur"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "Dame Kelly Holmes (1970-) won two gold medals for running in the 2004 Olympic Games."
        },
        {
            "text": "Why was Mary known as 'Bloody Mary'?",
            "choices": [
                "She killed her father",
                "She persecuted Protestants",
                "She fought in numerous battles",
                "She put her sister in prison"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Mary was a devout Catholic and persecuted Protestants."
        },
        {
            "text": "Identify which of these words is based on Norman words?",
            "choices": [
                "Summer",
                "Cow",
                "Park",
                "Apple"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Some words in modern English - for example, 'park' and 'beauty' - are based on Norman French words. Others - for example, 'apple', 'cow' and 'summer' - are based on Anglo-Saxon words."
        },
        {
            "text": "In Scotland, judges developed 'common law' by following previous decisions. It was referred to as 'unwritten'",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In England, judges developed 'common law' by a process of precedence (that is, following previous decisions) and tradition. In Scotland, the legal system developed slightly dif ferently and laws were 'codified' (that is, written down)."
        },
        {
            "text": "You must treat everyone equally , regardless of sex, race, age, religion, disability , class or sexual orientation",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The statement is true."
        },
        {
            "text": "How often do the PM's questions take place?",
            "choices": [
                "Every week",
                "Every year",
                "Every month",
                "Every day"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The leader of the opposition leads his or her party in pointing out what they see as the government's failures and weaknesses. One important opportunity to do this is at Prime Minister's Questions, which takes place every week while Parliament is sitting"
        },
        {
            "text": "In which location is the SECC located?",
            "choices": [
                "Swansea",
                "London",
                "Wales",
                "Glasgow"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "There are many large venues that host music events throughout the year , such as: Wembley Stadium; The O2 in Greenwich, south-east London; and the Scottish Exhibition and Conference Centre (SECC) in Glasgow ."
        },
        {
            "text": "Identify which of these countries was NOT UK's ally in the WWII?",
            "choices": [
                "Japan",
                "Poland",
                "France",
                "Soviet Union"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The war was initially fought between the Axis powers (fascist Germany and Italy and the Empire of Japan) and the Allies"
        },
        {
            "text": "What's the Monarch's yearly parliamentary speech for?",
            "choices": [
                "Credit distinguished politicians and policy-makers",
                "Summarise all of the last year's policies",
                "Set out the government's legislative plans for the next year",
                "Give advice to the general public on upcoming legislations"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The King has important ceremonial roles, such as the opening of the new parliamentary session each year . On this occasion the Monarch makes a speech which summarises the government's policies for the year ahead. All Acts of Parliament are made in his name."
        },
        {
            "text": "Which Admiral's Column is in Trafalgar Square, London?",
            "choices": [
                "Charles I",
                "Francis Drake",
                "Nelson",
                "Christopher Wren"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Britain's navy fought against combined French and Spanish fleets, winning the Battle of Trafalgar in 1805. Admiral Nelson was in charge of the British fleet at Trafalgar and was killed in the battle. Nelson's Column in Trafalgar Square, London, is a monument to him. His ship, HMS Victory , can be visited in Portsmouth."
        },
        {
            "text": "Which TWO are safe places to go and stay in for anyone facing domestic violence?",
            "choices": [
                "Refuge",
                "Shelter",
                "Carehome",
                "Community Centre"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "It is important for anyone facing domestic violence to get help as soon as possible. A solicitor or the Citizens Advice Bureau can explain the available options. In some areas there are safe places to go and stay in, called refuges or shelters."
        },
        {
            "text": "Identify which of these is known as West End in London?",
            "choices": [
                "Playland",
                "Actland",
                "Theatreland",
                "Actorland"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "There are theatres in most towns and cities throughout the UK, ranging from the large to the small. London's West End, also known as 'Theatreland', is particularly well known."
        },
        {
            "text": "During Queen Elizabeth's reign the British Empire became the largest empire the world had ever seen",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa. It became the largest empire the world has ever seen, with an estimated population of more than 400 million people."
        },
        {
            "text": "Who became famous in silent movies for his tramp character?",
            "choices": [
                "Sir Francis Drake",
                "Sir Christopher Wren",
                "Sir Chris Hoy",
                "Sir Charles Chaplin"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood."
        },
        {
            "text": "Which TWO are British Overseas territories?",
            "choices": [
                "Ireland",
                "St Helena",
                "The Falkland Islands",
                "Hawaii"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "There are also several islands which are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man. These have their own governments and are called 'Crown dependencies'. There are also several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands. They are also linked to the UK but are not a part of it."
        },
        {
            "text": "Which of the following is the country house owned by the Prime Minister called?",
            "choices": [
                "Chalet",
                "Chequers",
                "Cottage",
                "Dormitory"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament. He or she also has a country house outside London called Chequers."
        },
        {
            "text": "When was a Turing machine invented?",
            "choices": [
                "1970s",
                "1910s",
                "1930s",
                "1950s"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "A Turing machine is a theoretical mathematical device invented by Alan Turing (1912-54), a British mathematician, in the 1930s. The theory was influential in the development of computer science and the modern-day computer ."
        },
        {
            "text": "How can you arrange to get a National Insurance number?",
            "choices": [
                "Contact your employer",
                "Contact the Department for Work and Pensions",
                "Write to your MP",
                "Contact your local council"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "If you have permission to work in the UK, you will need to telephone the Department for Work and Pensions (DWP) to arrange to get a National Insurance number ."
        },
        {
            "text": "What country is Swansea in?",
            "choices": [
                "Scotland",
                "England",
                "Wales",
                "Northern Ireland"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Swansea is a Welsh city ."
        },
        {
            "text": "What is the total number of Houses did the Scottish Parliament have in the middle ages?",
            "choices": [
                "3",
                "6",
                "2",
                "4"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the middle ages the Scottish Parliament had three Houses, called Estates: the lords, the commons and the clergy ."
        },
        {
            "text": "The King James' Bible is a new translation of the Bible into English",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "One achievement of King James' reign was a new translation of the Bible into English. This translation is known as the 'King James Version' or the 'Authorised Version'. It was not the first English Bible but is a version which continues to be used in many Protestant churches today ."
        },
        {
            "text": "What was encouraged to develop the UK economy in 1950?",
            "choices": [
                "Slave Trade",
                "Immigration",
                "Education",
                "Savings Accounts"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "During the 1950s, there was still a shortage of labour in the UK. Further immigration was therefore encouraged for economic reasons, and many industries advertised for workers from overseas."
        }
    ]
},
{
    id: "exam34",
    title: "Practice Exam 34",
    questions: [
        {
            "text": "Everything found in Hansard is available online",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Proceedings in Parliament are broadcast on television and published in official reports called Hansard. Written reports can be found in large libraries and online."
        },
        {
            "text": "Which of the following discoveries contributed to the progress of the Industrial Revolution?",
            "choices": [
                "Television",
                "Jet Engine",
                "Penicillin",
                "Steam Power"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "During the 18th century , new ideas about politics, philosophy and science were developed. This is often called 'the Enlightenment'. Many of the great thinkers of the Enlightenment were Scottish. Adam Smith developed ideas about economics which are still referred to today . David Hume's ideas about human nature continue to influence philosophers. Scientific discoveries, such as James Watt's work on steam power , helped the progress of the Industrial Revolution."
        },
        {
            "text": "Identify which of these is a famous classical music event in the UK?",
            "choices": [
                "The Proms",
                "Glastonbury Festival",
                "Creamfields",
                "Tin the Park"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Proms is an eight-week summer season of classical music (orchestral or solo instrumental and nowadays may feature non-classical music) that takes place in various venues, including the Royal Albert Hall in London."
        },
        {
            "text": "The King Charles III's eldest son, Prince William, is also known as?",
            "choices": [
                "The Prince of Wales",
                "Prince Harry",
                "The King of Ireland",
                "The Duke of Edinburgh"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Queen Elizabeth II reigned since her father's death in 1952, (she celebrated her Diamond Jubilee i.e. 60 years as queen) until she passed away in 2022. She was married to Prince Philip, the Duke of Edinburgh. Her eldest son, King Charles III (previously known as the Prince of Wales) became the sovereign monarch in 2022. His eldest son, heir to the throne, Prince William is the new Prince of Wales."
        },
        {
            "text": "In which UK country can you find the best preserved prehistoric village in northern Europe?",
            "choices": [
                "Northern Ireland",
                "Wales",
                "England",
                "Scotland"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Skara Brae on Orkney , off the north coast of Scotland, is the best preserved prehistoric village in northern Europe, and has helped archaeologists to understand more about how people lived near the end of the Stone Age."
        },
        {
            "text": "In what year did the first Christian communities appear in Britain?",
            "choices": [
                "2nd and 3rd centuries",
                "1st and 2nd centuries",
                "4th and 5th centuries",
                "3rd and 4th centuries"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "It was during the 3rd and 4th centuries AD that the first Christian communities began to appear in Britain."
        },
        {
            "text": "When is Christmas Eve?",
            "choices": [
                "24th of December",
                "23rd of December",
                "26th of December",
                "25th of December"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Christmas Day is on the 25th of December . Christmas Eve is the day before that which is the 24th of December ."
        },
        {
            "text": "The devolved administrations each have their own civil service",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The devolved administrations each have their own civil service."
        },
        {
            "text": "In Northern Ireland, what letter does a newly qualified driver has to display for one year after passing the test?",
            "choices": [
                "T",
                "R",
                "D",
                "L"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Northern Ireland, a newly qualified driver must display an 'R' place (for restricted driver) for one year after passing the test."
        },
        {
            "text": "In what year did the Industrial Revolution take place?",
            "choices": [
                "18th and 19th centuries",
                "18th century only",
                "19th and 20th centuries",
                "19th century only"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Industrial Revolution was the rapid development of industry in Britain in the 18th and 19th centuries."
        },
        {
            "text": "Select TWO famous Paralympians",
            "choices": [
                "Jessica Ennis",
                "Baroness Tanni Grey-Thompson",
                "Dame Ellen MacArthur",
                "Ellie Simmonds"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Baroness Tanni-Grey Thompson (1969-) is an athlete who uses a wheelchair and won 16 Paralympic medals, including 1 1 gold medals, in races over five Paralympic Games. She won the London Marathon six times and broke a total of 30 world records. Ellie Simmonds (1994-) is a Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and holds a number of world records. She was the youngest member of the British team at the 2008 Games."
        },
        {
            "text": "Which of the following is your responsibility as UK citizen? Select TWO answers.",
            "choices": [
                "To go to your local pub",
                "To help and protect your family",
                "To earn money",
                "To vote in local and national government elections"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Although Britain is one of the world's most diverse societies, there is a set of shared values and responsibilities that everyone can agree with. These values and responsibilities include: to obey and respect the law; to be aware of the rights of others and respect those rights; to treat others with fairness; to behave responsibly; to help and protect your family; to respect and preserve the environment; to treat everyone equally , regardless of sex, race, religion, age, disability , class or sexual orientation; to work to provide for yourself and your family; to help others; to vote in local and national government elections."
        },
        {
            "text": "Where can you get details about the small claims procedure?",
            "choices": [
                "Any council office",
                "Your local County Court",
                "High Court",
                "Your local polling station"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "You can get details about the small claims procedure from your local County Court or Sherif f Court."
        },
        {
            "text": "People over 70 can apply for a free TV licence and blind people can get a 75% discount",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "People over 75 can apply for a free TV licence and blind people can get a 50% discount. You will receive a fine of up to \u00a31,000 if you watch TV but do not have a TV licence."
        },
        {
            "text": "What celebration takes place on the 25th of December each year?",
            "choices": [
                "Christmas Day",
                "Hogmanay",
                "Boxing Day",
                "Father's Day"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Christmas Day , 25 December , celebrates the birth of Jesus Christ. It is a public holiday . Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself."
        },
        {
            "text": "What did Sir Frank Whittle invent in the 1930s?",
            "choices": [
                "Telephone",
                "Computer",
                "Ballpoint pen",
                "Jet engine"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The jet engine was developed in Britain in the 1930s by Sir Frank Whittle (1907-96), a British Royal Air Force engineer Officer ."
        },
        {
            "text": "The Scottish Parliament was formed in 1998 and sits in Edinburgh",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Scottish Parliament was formed in 1999."
        },
        {
            "text": "The British constitution is described as 'unwritten'",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The British constitution is not written down in any single document, and therefore it is described as 'unwritten'. This is mainly because the UK, unlike America or France, has never had a revolution which led permanently to a totally new system of government. Our most important institutions have developed over hundreds of years."
        },
        {
            "text": "Who will remain the longest reigning monarch until 9 September 2015?",
            "choices": [
                "Victoria",
                "Mary",
                "Elizabeth I",
                "Elizabeth II"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1837, Queen Victoria became queen of the UK at the age of 18. She reigned until 1901, almost 64 years. Her reign is known as the Victorian Age. On September 9 2015, Queen Elizabeth II will pass the record set by her great-great-grandmother Queen Victoria."
        },
        {
            "text": "What was the name of plague that killed one third of the population of England in 1348?",
            "choices": [
                "The Pale Flu",
                "The White Death",
                "The Black Death",
                "Bird Flu"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1348, a disease, probably a form of plague called 'the Black Death', came to Britain."
        },
        {
            "text": "Civil servants cannot stand for Office",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over can stand for public Office. There are some exceptions, including: members of the armed forces; civil servants; people found guilty of certain criminal of fences."
        },
        {
            "text": "Eid ul Adha remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Eid ul Adha remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to. It reminds Muslims of their own commitment to God. Many Muslims sacrifice an animal to eat during this festival. In Britain this has to be done in a slaughterhouse."
        },
        {
            "text": "The Commonwealth is made up of countries which were once part of the British Empire only",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries which were not have also joined."
        },
        {
            "text": "In what year was Germany comprehensively defeated by the Allies during the WWII?",
            "choices": [
                "Apr-44",
                "May-39",
                "Jun-46",
                "May-45"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Following victory on the beaches of Normandy , the allied forces pressed on through France and eventually into Germany . The Allies comprehensively defeated Germany in May 1945."
        }
    ]
},
{
    id: "exam35",
    title: "Practice Exam 35",
    questions: [
        {
            "text": "Which person is the author of 'Charlie and the Chocolate Factory'?",
            "choices": [
                "Roald Dahl",
                "Charles Dickens",
                "Jane Kipling",
                "J.R.R. Tolkien"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Roald Dahl was born in Wales to Norwegian parents. He served in the Royal Air Force during the Second World War. His best-known works include Charlie and the Chocolate Factory and George's Marvellous Medicine."
        },
        {
            "text": "Who wrote the popular operas HMS Pinafore, The Pirates of Penzance and the Mikado?",
            "choices": [
                "Gilbert and Sullivan",
                "Laurence Olivier",
                "Andrew Webber",
                "Tim Rice"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the 19th century , Gilbert and Sullivan wrote comic operas, often making fun of popular culture and politics. These operas include HMS Pinafore, The Pirates of Penzance and The Mikado."
        },
        {
            "text": "Identify which of these is correct?",
            "choices": [
                "Any man who forces a woman to have sex, including her husband, can be charged with rape",
                "Any man who forces a woman to have sex, excluding her husband, can be charged with rape"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "be charged with rape Rape in a romantic relationship and marriage is considered Marital Rape. This includes forced sex and sexual assault between spouses. It is an of fense."
        },
        {
            "text": "In what year did Ireland split into 2 countries?",
            "choices": [
                "1949",
                "1925",
                "1922",
                "1934"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Ireland became two countries in 1922."
        },
        {
            "text": "Who invented the World Wide Web?",
            "choices": [
                "Mo Farah",
                "Sir Tim Berners-Lee",
                "Winston Churchill",
                "Sir Robert Watson-Watt"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The inventor of the World Wide Web, Sir Tim Berners-Lee (1955-), is British. Information was successfully transferred via the web for the first time on 25 December 1990."
        },
        {
            "text": "Which TWO of the following are examples of criminal law?",
            "choices": [
                "Selling tobacco to anyone under the age of 18",
                "Disputes about faulty goods",
                "Discrimination in the workplace",
                "Racial crime"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Examples of criminal laws are: Carrying a weapon; Selling or buying illegal drugs; Racial crime; Selling tobacco; Smoking in public places; Buying alcohol; Drinking in public."
        },
        {
            "text": "Why was Mary known as 'Bloody Mary'?",
            "choices": [
                "She fought in numerous battles",
                "She persecuted Protestants",
                "She put her sister in prison",
                "She killed her father"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Mary was a devout Catholic and persecuted Protestants."
        },
        {
            "text": "Who designed New Delhi to be the seat of government in India?",
            "choices": [
                "Inigo Jones",
                "Sir Edwin Lutyens",
                "Robert Adam",
                "Sir Christopher Wren"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In the 20th century , Sir Edwin Lutyens had an influence throughout the British Empire. He designed New Delhi to be the seat of government in India. He was responsible for many war memorials throughout the world, including the Cenotaph in Whitehall."
        },
        {
            "text": "In which year did John Logie Baird make the first TV broadcast between Glasgow and London?",
            "choices": [
                "1945",
                "1920",
                "1955",
                "1932"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The television was developed by Scotsman John Logie Baird (1888-1946) in the 1920s. In 1932 he made the first television broadcast between London and Glasgow ."
        },
        {
            "text": "Since the Middle Ages, In what year did the first Jews come to Britain to settle in London?",
            "choices": [
                "1646",
                "1680",
                "1656",
                "1652"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The first Jews to come to Britain since the Middle Ages settled in London in 1656."
        },
        {
            "text": "What do the National Insurance Contributions fund?",
            "choices": [
                "The NHS and state pension",
                "Schools and Education",
                "The NHS and Police",
                "The Police, NHS and Education"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions. The money raised from National Insurance Contributions is used to pay for state benefits and services such as the state retirement pension and the National Health Service (NHS)."
        },
        {
            "text": "Which TWO of these are associated with Sir Francis Drake?",
            "choices": [
                "Building the Titanic",
                "The Spanish Armada invasion",
                "Invasion of Ireland",
                "Sailing around the world"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Sir Francis Drake, one of the commanders in the defeat of the Spanish Armada, was one of the founders of England's naval tradition. His ship, the Golden Hind, was one of the first to sail right around ('circumnavigate') the world."
        },
        {
            "text": "Which of the following is the official report that contains everything said in Parliament called?",
            "choices": [
                "The Government report",
                "Hansard",
                "The Domesday Book",
                "The Government press"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Proceedings in Parliament are broadcast on television and published in official reports called Hansard."
        },
        {
            "text": "What type of painter was Joseph Turner?",
            "choices": [
                "Portrait",
                "Abstract Sculpture",
                "Landscape",
                "Stained Glass"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Joseph Turner (1775-1851) was an influential landscape painter in a modern style. He is considered the artist who raised the profile of landscape painting."
        },
        {
            "text": "What is the total number of AMs does the Welsh government have?",
            "choices": [
                "129",
                "92",
                "108",
                "60"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Welsh government and National Assembly for Wales are based in Cardif f, the capital city of Wales. The National Assembly (Senedd) consists of 60 elected Assembly members (AMs) and elections are held every four years using a form of proportional representation. Members can speak in either Welsh or English and all of the Assembly\u2019 s publications are in both languages."
        },
        {
            "text": "Christmas Day celebrates the birth of Jesus Christ",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Christmas Day , 25 December , celebrates the birth of Jesus Christ. It is a public holiday . Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself."
        },
        {
            "text": "Which of the following flowers represents England?",
            "choices": [
                "Thistle",
                "Shamrock",
                "Rose",
                "Daffodil"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The national flower of England is the Rose."
        },
        {
            "text": "How often is the electoral register updated?",
            "choices": [
                "Monthly",
                "Weekly",
                "Daily",
                "Yearly"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The electoral register is updated every year in September or October . An electoral registration form is sent to every household and this has to be completed and returned with the names of everyone who is resident in the household and eligible to vote."
        },
        {
            "text": "Which individual was John Constable?",
            "choices": [
                "A Welsh artist, best known for his engravings and stained glass",
                "An important contributor to the 'pop art' movement of the 1960s",
                "A landscape painter , most famous for his works of Dedham Vale on the Suf folk-Essex border in the East of England",
                "A very successful Northern Irish portrait painter"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Suffolk-Essex border in the East of England John Constable (1776-1837) was a landscape painter most famous for his works of Dedham Vale on the Suf folk, Essex border in the east of England."
        },
        {
            "text": "What profession was Florence Nightingale famous for?",
            "choices": [
                "Nurse",
                "Painter",
                "Gardener",
                "Political Leader"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "At the age of 31, Florence Nightingale trained as a nurse in Germany . In 1854, she went to Turkey and worked in military hospitals, treating soldiers who were fighting in the Crimean War."
        },
        {
            "text": "Mary Stuart, often now called Mary Queen of Scots was a Protestant",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The queen of Scotland, Mary Stuart (often now called 'Mary , Queen of Scots') was a Catholic. She was only a week old when her father died and she became queen"
        },
        {
            "text": "What religion did Queen Elizabeth I practise?",
            "choices": [
                "Catholic",
                "Atheist",
                "Protestant",
                "Sikh"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Queen Elizabeth I was a Protestant. She re-established the Church of England as the official Church in England. Everyone had to attend their local church and there were laws about the type of religious services and the prayers which could be said, but Elizabeth did not ask about people's real beliefs. She succeeded in finding a balance between the views of Catholics and the more extreme Protestants."
        },
        {
            "text": "What must the police officer tell you if you get arrested?",
            "choices": [
                "The reason for your arrest",
                "Ask about your background",
                "To put your arms in the air",
                "To follow his instructions"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "A Police officer will tell you the reason for your arrest and you will be able to seek legal advice."
        },
        {
            "text": "Which TWO are notable British artists?",
            "choices": [
                "Rembrandt Peale",
                "Matthew Harris Jouett",
                "Joseph Turner",
                "John Constable"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Joseph Turner (1775-1851) was an influential landscape painter in a modern style. He is considered the artist who raised the profile of landscape painting. John Constable (1776- 1837) was a landscape painter most famous for his works of Dedham Vale on the Suf folk, Essex border in the east of England."
        }
    ]
},
{
    id: "exam36",
    title: "Practice Exam 36",
    questions: [
        {
            "text": "In what year did England win the World Cup?",
            "choices": [
                "1970",
                "1974",
                "1962",
                "1966"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Bobby Moore (1941-93) captained the English football team that won the World Cup in 1966."
        },
        {
            "text": "In which location is the Millennium Stadium located?",
            "choices": [
                "Cardif f",
                "London",
                "Manchester",
                "Edinburgh"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Sporting events take place at major stadiums such as Wembley Stadium in London and the Millennium Stadium in Cardif f."
        },
        {
            "text": "Which novel is the satirical novelist Evelyn Waugh best known for?",
            "choices": [
                "Brideshead Revisited",
                "The Harry Potter Series",
                "Lord of the Rings",
                "Romeo and Juliet"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Evelyn Waugh (1903-66) wrote satirical novels, including Decline and Fall and Scoop. He is perhaps best known for Brideshead Revisited."
        },
        {
            "text": "Women over 30 were allowed to vote as a result of their contribution towards the war effort. Which war was it?",
            "choices": [
                "Boer War",
                "First World War",
                "Second World War",
                "Crimean war"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war ef fort during the First World War. Shortly before Emmeline's death in 1928, women were given the right to vote at the age of 21, the same as men."
        },
        {
            "text": "Arranged marriages are allowed in the UK",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "A marriage should be entered into with the full and free consent of both people involved. Arranged marriages, where both parties agree to the marriage, are acceptable in the UK."
        },
        {
            "text": "Under which king did the people unite to defeat the Vikings?",
            "choices": [
                "King Alfred the Great",
                "Harold",
                "King William",
                "Henry I"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings."
        },
        {
            "text": "Where did the engineers come from in the middle ages?",
            "choices": [
                "Holland",
                "Germany",
                "France",
                "Italy"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "People came to England from abroad to trade and also to work. Engineers came from Germany ."
        },
        {
            "text": "What kind of event is The Wimbledon Championship?",
            "choices": [
                "Water sport",
                "Rugby",
                "Tennis",
                "Cricket"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Tennis evolved in England in the late 19th century . The first tennis club was founded in Leamington Spa in 1872. The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only 'Grand Slam' event played on grass."
        },
        {
            "text": "Which of the following is the monarch's ceremonial role?",
            "choices": [
                "Opening a parliamentary session",
                "Making parliamentary policies",
                "Travelling in the UK",
                "Travelling abroad for banquets and to negotiate with foreign dignitaries"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Monarch has important ceremonial roles, such as the opening of the new parliamentary session each year ."
        },
        {
            "text": "What is the total number of members does the Scottish Parliament have?",
            "choices": [
                "108",
                "129",
                "94",
                "76"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are 129 members of the Scottish Parliament (MSPs), elected by a form of proportional representation. The Scottish Parliament can pass laws for Scotland on all matters which are not specifically reserved to the UK Parliament. The matters on which the Scottish Parliament can legislate include: civil and criminal law , health, education, planning, additional tax-raising powers."
        },
        {
            "text": "In the middle of the 19th century the potato crop failed, and Ireland suffered a famine",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In the middle of the 19th century the potato crop failed, and Ireland suf fered a famine. A million people died from disease and starvation. Another million and a half left Ireland."
        },
        {
            "text": "Which TWO are 20th century British inventions?",
            "choices": [
                "Television",
                "Aspirin",
                "AC motor",
                "Concorde"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Britain and France developed Concorde, the world's only supersonic passenger aircraft. It first flew in 1969 and began carrying passengers in 1976. Concorde was retired from service in 2003. The television was developed by Scotsman John Logie Baird in the 1920s. In 1932 he made the first television broadcast between London and Glasgow ."
        },
        {
            "text": "Which of the following are elected members of the National Assembly of Wales known as?",
            "choices": [
                "MEPs",
                "AMs",
                "MLAs",
                "MPs"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In Wales the elected members, known as AMs, meet in the Welsh Assembly in the Senedd in Cardif f Bay"
        },
        {
            "text": "In what year did the First World War end?",
            "choices": [
                "1917",
                "1916",
                "1919",
                "1918"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The First World War ended at 1 1.00 am on 1 1th November 1918 with victory for Britain and its allies."
        },
        {
            "text": "What were the Canterbury Tales about?",
            "choices": [
                "People fighting near Canterbury",
                "Canterbury tales about the King",
                "Canterbury life",
                "The stories people told each other"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the years leading up to 1400, Geof frey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey , and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales."
        },
        {
            "text": "Identify which of these is a British invention/discovery?",
            "choices": [
                "Hovercraft tank",
                "The structure of the DNA molecule",
                "Fire extinguisher",
                "Radiator"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. This discovery contributed to many scientific advances, particularly in medicine and fighting crime. Francis Crick (1916-2004), one of those awarded the Nobel Prize for this discovery , was British."
        },
        {
            "text": "Who established the Church of England?",
            "choices": [
                "The Pope",
                "St George",
                "Henry VII",
                "Henry VIII"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "To divorce his first wife, Henry VIII needed the approval of the Pope. When the Pope refused, Henry established the Church of England. In this new Church, the king, not the Pope, would have the power to appoint bishops and order how people should worship."
        },
        {
            "text": "Which countries are in Great Britain?",
            "choices": [
                "England, Wales, Scotland",
                "Wales, Northern Ireland, Scotland",
                "England, Scotland, Ireland",
                "England, Wales, Scotland, Northern Ireland"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Great Britain consists of 3 countries: England, Wales and Scotland."
        },
        {
            "text": "Where did the ancestors of the first farmers come from?",
            "choices": [
                "South-East Europe",
                "North-East Europe",
                "North-West Europe",
                "North Europe"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The first farmers came to Britain 6,000 years ago. The ancestors of these first farmers probably came from south-east Europe."
        },
        {
            "text": "The 39 steps was directed by David Lean in 1980",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The 39 Steps (1935), directed by Alfred Hitchcock"
        },
        {
            "text": "What is the total number of years did Mary , the Queen of Scots spend in prison?",
            "choices": [
                "30",
                "11",
                "20",
                "4"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Mary was Elizabeth I's cousin and hoped that Elizabeth might help her , but Elizabeth suspected Mary of wanting to take over the English throne, and kept her a prisoner for 20 years. Mary was eventually executed, accused of plotting against Elizabeth I."
        },
        {
            "text": "When is Boxing Day?",
            "choices": [
                "The day before Christmas Day",
                "The day after Easter",
                "The day before Easter",
                "The day after Christmas Day"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Boxing Day (26th of December) is the day after Christmas Day (25th of December) and is a public holiday ."
        },
        {
            "text": "Throughout the 1990s, Britain played a leading role in coalition forces involved in the liberation of Kuwait",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Throughout the 1990s, Britain played a leading role in coalition forces involved in the liberation of Kuwait, following the Iraqi invasion in 1990, and the conflict in the Former Republic of Yugoslavia. Since 2000, British armed forces have been engaged in the global fight against international terrorism and against the proliferation of weapons of mass destruction, including operations in Afghanistan and Iraq."
        },
        {
            "text": "Julius Caesar led a Roman invasion of Britain in 55 BC but this was unsuccessful. For What is the total number of years did Britain remain separate from the Roman Empire?",
            "choices": [
                "200",
                "100",
                "300",
                "400"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Julius Caesar led a Roman invasion of Britain in 55 BC. This was unsuccessful and for nearly 100 years Britain remained separate from the Roman Empire. In AD 43 the Emperor Claudius led the Roman army in a new invasion. This time, there was resistance from some of the British tribes but the Romans were successful in occupying almost all of Britain."
        }
    ]
},
{
    id: "exam37",
    title: "Practice Exam 37",
    questions: [
        {
            "text": "What tells us about how people lived just after the Norman Conquest?",
            "choices": [
                "The Domesday book",
                "Historical Landmarks",
                "The Bayeux Tapestry",
                "Historical Villages"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "William sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest."
        },
        {
            "text": "Where was Robert Burns from?",
            "choices": [
                "Northern Ireland",
                "Scotland",
                "Wales",
                "England"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Robert Burns is a famous Scottish Poet"
        },
        {
            "text": "How old do you have to be to stand for election as an MP?",
            "choices": [
                "16",
                "18",
                "25",
                "21"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Anyone aged 18 or over can stand for election as an MP but they are unlikely to win unless they have been nominated to represent one of the major political parties"
        },
        {
            "text": "The Boer War of 1899 to 1902 established the idea that the British Empire is a force for good",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Boer War of 1899 to 1902 made the discussions about the future of the Empire more urgent. The British went to war in South Africa with settlers from the Netherlands called the Boers. The Boers fought fiercely and the war went on for over three years. Many died in the fighting and many more from disease. There was some public sympathy for the Boers and people began to question whether the Empire could continue."
        },
        {
            "text": "Which General remains a controversial figure in Ireland?",
            "choices": [
                "James Cook",
                "Francis Drake",
                "Oliver Cromwell",
                "Nelson"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Cromwell was successful in establishing the authority of the English Parliament in Ireland but did this with such violence that even today Cromwell remains a controversial figure."
        },
        {
            "text": "Who built the Tower of London?",
            "choices": [
                "William the Conqueror",
                "Oliver Cromwell",
                "Henry VIII",
                "Henry VII"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Tower of London was built by William the Conqueror after he became king in 1066."
        },
        {
            "text": "Complaints against the Police can only be made by writing to the Police Complaints Commissioner",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Anyone can make a complaint about the police by going to a police station or writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland."
        },
        {
            "text": "What service can you use to find a lawyer or a solicitor?",
            "choices": [
                "The Police",
                "The Citizens Advice Bureau",
                "NSPCC",
                "County Courts"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Citizens Advice Bureau can give you names of local solicitors and which areas of law they specialise in. You can also get this information from the Law Society ."
        },
        {
            "text": "Which of the following is the origin of Parliament?",
            "choices": [
                "The Noblemen's council of governance",
                "The Church's system of governance",
                "The King's council of advisers",
                "The Knights' round table"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In the Middle Ages, Parliament began to develop into the institution it is today . Its origins can be traced to the king's council of advisers, which included important noblemen and the leaders of the Church."
        },
        {
            "text": "What was 'Shampooing' when it was first introduced?",
            "choices": [
                "The Indian art of washing",
                "Cleaning your hair",
                "Washing your head with soap",
                "The Indian art of head massage"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Mahomet and his wife also introduced 'shampooing', the Indian art of head massage, to Britain."
        },
        {
            "text": "When is St Patrick's day?",
            "choices": [
                "1st of March",
                "23rd of April",
                "30th of November",
                "17th of March"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "Which flower is associated with Northern Ireland?",
            "choices": [
                "A shamrock",
                "A daffodil",
                "A thistle",
                "A rose"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "A shamrock is associated with Northern Ireland. A rose is associated with England, a thistle with Scotland and a daf fodil with Wales."
        },
        {
            "text": "What percentage of the total population lives in Scotland?",
            "choices": [
                "14%",
                "8%",
                "21%",
                "2%"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8% and Northern Ireland less than 3%."
        },
        {
            "text": "Which of the following is correct?",
            "choices": [
                "Wales makes up 6% of the total population",
                "England makes up 83% of the total population",
                "Scotland makes up 8% of the total population",
                "Northern Ireland makes up 4% of the total population"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8% and Northern Ireland less than 3%."
        },
        {
            "text": "Which of the following is a good way to support your local community?",
            "choices": [
                "Buying good from large supermarkets",
                "Shop for products locally where you can",
                "Driving everywhere",
                "Donating to boost the economy"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "A good way to support your local community is to shop for products locally where you can. This will help businesses and farmers in your area and in Britain. It will also reduce your carbon footprint, because the products you buy will not have had to travel as far ."
        },
        {
            "text": "Which TWO buildings were built during the Middle Ages?",
            "choices": [
                "Edinburgh Castle",
                "The building of Parliament",
                "Lincoln Cathedral",
                "New St Paul's Cathedral"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "The Middle Ages also saw a change in the type of buildings in Britain. Castles were built in many places in Britain and Ireland, partly for defence. Today many are in ruins, although some, such as Windsor and Edinburgh, are still in use. Great cathedrals - for example, Lincoln Cathedral - were also built, and many of these are still used for worship."
        },
        {
            "text": "When are Pantomimes usually produced?",
            "choices": [
                "School holidays",
                "Christmas",
                "Halloween",
                "Easter"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "One British tradition is the pantomime. Many theatres produce a pantomime at Christmas time. They are based on fairy stories and are light-hearted plays with music and comedy , enjoyed by family audiences. One of the traditional characters is the Dame, a woman played by a man. There is often also a pantomime horse or cow played by two actors in the same costume."
        },
        {
            "text": "When was the Magna Carta established?",
            "choices": [
                "1516",
                "1415",
                "1215",
                "1314"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "There were few formal limits to the king's power until 1215. In that year , King John was forced by his noblemen to agree to a number of demands. The result was a charter of rights called the Magna Carta (which means the Great Charter). The Magna Carta established the idea that even the king was subject to the law . It protected the rights of the nobility and restricted the king's power to collect taxes or to make or change laws."
        },
        {
            "text": "How can you look after the environment? (Choose TWO)",
            "choices": [
                "Shop for fresh products only",
                "Shop for products locally as this reduces your carbon footprint",
                "Recycle as much as you can",
                "Always use your own car"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "It is important to recycle as much of your waste as you can. A good way to support your local community is to shop for products locally where you can. This will help businesses and farmers in your area and in Britain. It will also reduce your carbon footprint, because the products you buy will not have had to travel as far ."
        },
        {
            "text": "Where was one of the Anglo Saxon kings buried with treasure and armour?",
            "choices": [
                "Suffolk",
                "Newcastle",
                "Kent",
                "London"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The burial place of one of the kings was at Sutton Hoo in modern Suf folk. This king was buried with treasure and armour , all placed in a ship which was then covered by a mound of earth. Scotland and Wales remained free of Anglo Saxon rule."
        },
        {
            "text": "Which stories are associated with Geoffrey Chaucer?",
            "choices": [
                "The London Tales",
                "The Westend Tales",
                "The Eastend Tales",
                "The Canterbury Tales"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the years leading up to 1400, Geof frey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage. The people decided to tell each other stories on the journey , and the poems describe the travellers and some of the stories they told. This collection of poems is called The Canterbury Tales."
        },
        {
            "text": "Who invented the Jet Engine?",
            "choices": [
                "Sir Frank Whittle",
                "Sir Tim Berners-Lee",
                "John Logie Baird",
                "John MacLeod"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Jet Engine was developed in Britain in the 1930s by Sir Frank Whittle (1907-96), a British Royal Air Force engineer Officer ."
        },
        {
            "text": "What exactly does the UN aim to do?",
            "choices": [
                "Prevent Diseases",
                "Prevent Starvation",
                "Prevent High Inflation",
                "Prevent War"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security ."
        },
        {
            "text": "Which TWO describe the Wimbledon Championships?",
            "choices": [
                "Only 'Major' tournament held outside the US",
                "Only 'Grand Slam' event played on grass",
                "Only tennis tournament that Andy Murray won",
                "Oldest tennis tournament in the world"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Modern tennis evolved in England in the late 19th century . The first tennis club was founded in Leamington Spa in 1872. The most famous tournament hosted in Britain is The Wimbledon Championships, which takes place each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only 'Grand Slam' event played on grass."
        }
    ]
},
{
    id: "exam38",
    title: "Practice Exam 38",
    questions: [
        {
            "text": "Who wrote music for King George I?",
            "choices": [
                "Sir William Walton",
                "Sir Edward Elgar",
                "Benjamin Britten",
                "George Frederick Handel"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The German-born composer George Frideric Handel (1695-1759) spent many years in the UK and became a British citizen in 1727. He wrote the Water Music for King George I and Music for the Royal Fireworks for his son, George II."
        },
        {
            "text": "What created The Kingdom of Great Britain in 1707?",
            "choices": [
                "The Kingdom Act",
                "The Bill of Rights",
                "The Act of Union",
                "The act of Government of Wales"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Act of Union, known as the Treaty of Union in Scotland, was agreed in 1707, creating the Kingdom of Great Britain."
        },
        {
            "text": "How often do the ministers meet to discuss important issues?",
            "choices": [
                "Yearly",
                "Daily",
                "Weekly",
                "Monthly"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Ministers form the cabinet, a committee which usually meets weekly and makes important decisions about government policy . Many of these decisions have to be debated or approved by Parliament."
        },
        {
            "text": "Northern Ireland has its own banknotes which are valid everywhere in the UK",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However , shops and businesses do not have to accept them."
        },
        {
            "text": "Who appoints 'Life peers'?",
            "choices": [
                "The Prime Minister",
                "The Monarch",
                "The Speaker",
                "The Shadow Cabinet"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Life peers are appointed by the monarch on the advice of the Prime Minister ."
        },
        {
            "text": "What is the total number of ski centres are there in Scotland?",
            "choices": [
                "1",
                "2",
                "13",
                "5"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Skiing is increasingly popular in the UK. Many people go abroad to ski and there are also dry ski slopes throughout the UK. Skiing on snow may also be possible during the winter . There are five ski centres in Scotland, as well as Europe's longest dry ski slope near Edinburgh."
        },
        {
            "text": "What exactly does the abbreviation PT A stand for?",
            "choices": [
                "Parent Teacher Association",
                "Personal Trainer Awards",
                "Premier Tennis Association",
                "Primary Teaching Agency"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Sometimes school events are organised by parent-teacher associations (PT As)"
        },
        {
            "text": "Which style of architecture became popular in the 19th century?",
            "choices": [
                "Gothic",
                "Neoclassical",
                "Simple",
                "Classical"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the 19th century , the medieval 'gothic' style became popular once again."
        },
        {
            "text": "Which TWO are used in making an Ulster fry?",
            "choices": [
                "Oatmeal",
                "Bacon",
                "Sausage",
                "Beef"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "Ulster fry - a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread."
        },
        {
            "text": "Where are the most serious civil cases heard in England and Wales?",
            "choices": [
                "Crown Court",
                "Sherif f Court",
                "The Court of Session",
                "High Court"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "More serious civil cases - for example, when a large amount of compensation is being claimed - are dealt with in the High Court in England, Wales and Northern Ireland."
        },
        {
            "text": "Which river banks the London eye?",
            "choices": [
                "Wye",
                "Trent",
                "Severn",
                "Thames"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The London Eye is situated on the southern bank of the River Thames and is a Ferris wheel that is 443 feet (135 metres) tall. It was originally built as part of the UK's celebration of the new millennium and continues to be an important part of New Year celebrations."
        },
        {
            "text": "What percentage of the total population lives in England?",
            "choices": [
                "52%",
                "95%",
                "67%",
                "84%"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The population is very unequally distributed over the four parts of the UK. England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8% and Northern Ireland less than 3%."
        },
        {
            "text": "Which of the following is referred to as 'canvassing'?",
            "choices": [
                "Persuade people to vote for the party you represent",
                "Filling in the ballot paper for those who cannot do it themselves"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Political parties are particularly busy at election times. Members work hard to persuade people to vote for their candidates - for instance, by handing out leaflets in the street or by knocking on people's doors and asking for their support."
        },
        {
            "text": "Which individual was the Queen of the Iceni? She is still remembered today and there is a statue of her on Westminster Bridge in London",
            "choices": [
                "Elizabeth",
                "Mary",
                "Boudicca",
                "Elefieta"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "One of the tribal leaders who fought against the Romans was Boudicca, the Queen of the Iceni in what is now eastern England."
        },
        {
            "text": "The Battle of Hastings is commemorated in a piece of embroidery , known as the Bayeux Tapestry",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The battle of Hastings is commemorated in a great piece of embroidery , known as the Bayeux Tapestry , which can still be seen in France today ."
        },
        {
            "text": "Choose TWO examples of a civil law offence",
            "choices": [
                "Murder , racial crime",
                "Unfair dismissal or discrimination in the workplace",
                "Disputes between landlords and tenants",
                "Theft and assault"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "Examples of civil laws are - Housing law: this includes disputes between landlords and tenants over issues such as repairs and eviction; Consumer rights: an example of this is a dispute about faulty goods or services; Employment law: these cases include disputes over wages and cases of unfair dismissal or discrimination in the workplace; Debt: people might be taken to court if they owe money to someone."
        },
        {
            "text": "Many people volunteer simply because they want to help other people",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Volunteering and helping your community are an important part of being a good citizen. They enable you to integrate and get to know other people. It helps to make your community a better place if residents support each other ."
        },
        {
            "text": "What was the population of the UK in 1801?",
            "choices": [
                "5 million",
                "20 million",
                "8 million",
                "4 million"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The population of the UK was just 8 million in 1801."
        },
        {
            "text": "Which person is responsible for the economy?",
            "choices": [
                "Chancellor of the Exchequer",
                "Secretary of State",
                "Foreign Secretary",
                "Home Secretary"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Prime Minister appoints about 20 senior MPs to become ministers in charge of departments. These include: Chancellor of the Exchequer: responsible for the economy; Home Secretary:responsible for crime, policing and immigration; Foreign Secretary: responsible for managing relationships with foreign countries; other ministers (called 'Secretaries of State') are responsible for subjects such as education, health and defence."
        },
        {
            "text": "Which TWO are part of the Government?",
            "choices": [
                "The parliament",
                "Local business",
                "Local people",
                "The civil service"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "In the UK, there are several dif ferent parts of government. The main ones are: the monarchy , Parliament (the House of Commons and the House of Lords), the Prime Minister , the cabinet, the judiciary (courts) ,the police, the civil service, local government."
        },
        {
            "text": "Where in Scotland is known as the home of golf?",
            "choices": [
                "Edinburgh",
                "St Andrews",
                "Inverness",
                "Glasgow"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Game of golf can be traced back to 15th century Scotland. It is a popular sport played socially as well as professionally . There are public and private golf courses all over the UK. St Andrews in Scotland is known as the home of golf."
        },
        {
            "text": "What did the first farmers build in Britain?",
            "choices": [
                "Theatres and Houses",
                "Tombs and Stadiums",
                "Houses and Monuments",
                "Hospitals and Roads"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The first farmers built houses, tombs and monuments on the land."
        },
        {
            "text": "In which year was Britain's first woman Prime Minister , Margaret Thatcher , elected to join the parliament of United Kingdom?",
            "choices": [
                "1986",
                "1979",
                "1949",
                "1959"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Margaret Thatcher was the daughter of a grocer from Grantham in Lincolnshire. She trained as a chemist and lawyer . She was elected as a Conservative MP in 1959 and became a cabinet minister in 1970 as the Secretary of State for Education and Science. In 1975 she was elected as Leader of the Conservative Party and so became Leader of the Opposition."
        },
        {
            "text": "As per 2021 census, Which of the following is the percentage of Muslims living in England and Wales?",
            "choices": [
                "1%",
                "15%",
                "11%",
                "6%"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Islam is the second largest religion in the United Kingdom. The 2021 Census results released so far show a population of 3,868,133 (6.5%) in England and Wales (from a total sampled 60 million). 46% of people identified themselves as Christian. Much smaller proportions identified themselves as Hindu (2%), Sikh (1%), Jewish or Buddhist (both around 0.5%), 0.5% of people followed another religion and 37% stated not to follow any religion."
        }
    ]
},
{
    id: "exam39",
    title: "Practice Exam 39",
    questions: [
        {
            "text": "Members of the European Union can vote in all public UK elections",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Prior to Brexit, adult citizens of other EU states who are resident in the UK could vote in all elections except General Elections. As of 2020, EU citizens' local voting rights have also changed and are now set on individual, per-country basis."
        },
        {
            "text": "What event is known as the evacuation of 300,000 people from the beaches?",
            "choices": [
                "The Blitz spirit",
                "The Dunkirk spirit",
                "The Battle of Britain",
                "D-Day"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Many civilian volunteers in small pleasure and fishing boats from Britain helped the Navy to rescue more than 300,000 men from the beaches around Dunkirk. The evacuation gave rise to the phrase 'the Dunkirk spirit'."
        },
        {
            "text": "Who became Prime Minister during WWII?",
            "choices": [
                "Winston Churchill",
                "Tony Blair",
                "Robert Walpole",
                "Margaret Thatcher"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Hitler invaded Poland and took control of Belgium and the Netherlands. At this time of national crisis, Winston Churchill became Prime Minister ."
        },
        {
            "text": "In 1982, which country invaded the Falklands prompting UK to send its naval force in defense?",
            "choices": [
                "Spain",
                "Argentina",
                "France",
                "Belgium"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1982, Argentina invaded the Falkland Islands, a British overseas territory in the South Atlantic. A naval task force was sent from the UK and military action led to the recovery of the islands."
        },
        {
            "text": "What can schools do to raise money?",
            "choices": [
                "Ask the local council for extra funding",
                "Reduce teachers' wages",
                "Ask parents for money",
                "Organise events"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Many schools organise events to raise money for extra equipment or out-of-school activities. Activities might include book sales, toy sales or bringing food to sell."
        },
        {
            "text": "Where are the most serious criminal cases in Scotland heard at?",
            "choices": [
                "Sherif f Court",
                "Court of Session",
                "Crown Court",
                "High Court"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The most serious cases in Scotland, such as murder , are heard at a High Court with a judge and jury ."
        },
        {
            "text": "Who makes a speech which summarises the government's policies for the year ahead?",
            "choices": [
                "Local Authorities",
                "The Cabinet",
                "The Monarch",
                "The Prime Minister"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The Monarch (King Charles III at the time of writing) has important ceremonial roles, such as the opening of the new parliamentary session each year . On this occasion the Monarch makes a speech which summarises the government's policies for the year ahead. All Acts of Parliament are made in his name."
        },
        {
            "text": "Many schools organise events to raise money for extra equipment or out- of-school activities",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Many schools organise events to raise money for extra equipment or out-of-school activities. Activities might include book sales, toy sales or bringing food to sell."
        },
        {
            "text": "Which of the following is the period after the Norman Conquest up until 1485 called?",
            "choices": [
                "The Middle Ages",
                "The Iron Age",
                "The Bronze Age",
                "The Stone age"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The period after the Norman Conquest up until about 1485 is called the Middle Ages or the medieval period. It was a time of almost constant war ."
        },
        {
            "text": "The system of government in the UK is a parliamentary democracy",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The system of government in the UK is a parliamentary democracy . The UK is divided into parliamentary constituencies. Voters in each constituency elect their member of Parliament (MP) in a General Election. All of the elected MPs from the House of Commons. Most MPs belong to a political party , and the party with the majority of MPs forms the government. If one party does not get a majority , two parties can join together to form a coalition."
        },
        {
            "text": "The UK government has used the power to suspend the Northern Ireland Assembly",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly af fect them. There has been a Welsh Assembly and a Scottish Parliament since 1999. There is also a Northern Ireland Assembly , although this has been suspended on a few occasions."
        },
        {
            "text": "Which TWO are located in Scotland?",
            "choices": [
                "The Eden Project",
                "The Giant's Causeway",
                "Loch Lomond",
                "Edinburgh Castle"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Loch Lomond and the Edinburgh Castle are located in Scotland."
        },
        {
            "text": "Which of the following was written by Lord Byron?",
            "choices": [
                "The Daf fodils",
                "The Tyger",
                "Anthem for Doomed Youth",
                "She Walks in Beauty"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "She Walks in Beauty is a short poem by Lord Byron"
        },
        {
            "text": "Which of the following is the national flower of Northern Ireland?",
            "choices": [
                "A Thistle",
                "A Lily",
                "A Shamrock",
                "A Rose"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "A Shamrock is the national flower of Northern Ireland."
        },
        {
            "text": "Who led the Scottish Army during the Battle of Bannockburn?",
            "choices": [
                "Edward I",
                "William the Conqueror",
                "King Alfred the Great",
                "Robert the Bruce"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In Scotland, the English kings were less successful. In 1314 the Scottish, led by Robert the Bruce, defeated the English at the Battle of Bannockburn, and Scotland remained unconquered by the English."
        },
        {
            "text": "When were the last Welsh rebellions defeated?",
            "choices": [
                "17th century",
                "16th century",
                "15th century",
                "14th century"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "By the middle of the 15th century the last Welsh rebellions had been defeated. English laws and the English language were introduced."
        },
        {
            "text": "David Hockney was an important contributor to the 'pop art' movement of the 1960s",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "David Hockney (1937-) was an important contributor to the 'pop art' movement of the 1960s and continues to be influential today ."
        },
        {
            "text": "Identify which of these are British Overseas Territories?",
            "choices": [
                "The Channel Islands and the Isle of Man",
                "St Helena and Falkland Islands",
                "USA and Australia",
                "St Helena and the Isle of Man"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are also several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands. They are also linked to the UK but are not a part of it."
        },
        {
            "text": "Names of places, such as Grimsby and Scunthorpe come from which language?",
            "choices": [
                "Celtic",
                "Viking",
                "Saxon",
                "Norman"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Many places names, such as Grimsby and Scunthorpe, come from the Viking languages"
        },
        {
            "text": "In which location is Loch Lomond located?",
            "choices": [
                "England",
                "Northern Ireland",
                "Wales",
                "Scotland"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Loch Lomond is the largest expanse of freshwater in mainland Britain and probably the best- known part of the park. It is located in Scotland."
        },
        {
            "text": "What name is given to the official flag that represents the union between England, Scotland, Wales and Northern Ireland?",
            "choices": [
                "Union Ace",
                "Union King",
                "Union Jack",
                "Union Queen"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "One symbol of the union between England, Scotland, Wales and Northern Ireland was a new version of the official flag, the Union Flag. This is often called the Union Jack."
        },
        {
            "text": "The Glorious Revolution was called the 'Glorious revolution' because there was no fighting in England and it guaranteed the power of Parliament",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Glorious Revolution was called the 'Glorious revolution' because there was no fighting in England and it guaranteed the power of Parliament"
        },
        {
            "text": "In which location is the Cenotaph located?",
            "choices": [
                "Dorset",
                "New Delhi",
                "Derbyshire",
                "Whitehall"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London."
        },
        {
            "text": "Who first introduced James Bond?",
            "choices": [
                "Ian Fleming",
                "Charles Dickens",
                "JRR Tolkien",
                "J K Rowling"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Ian Fleming's books introduced James Bond."
        }
    ]
},
{
    id: "exam40",
    title: "Practice Exam 40",
    questions: [
        {
            "text": "Which of the following is the system that automatically deducts tax called?",
            "choices": [
                "PAYE",
                "Self-Assessment",
                "HMRC",
                "PAYG"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "This system that deducts tax automatically is called 'Pay As You Earn', also known as P AYE."
        },
        {
            "text": "Which individual was the British scientist Which individual was awarded the Nobel prize for the discovery of the structure of the DNA molecule?",
            "choices": [
                "James Goodfellow",
                "Alan Turing",
                "John Macleod",
                "Francis Crick"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The structure of the DNA molecule was discovered in 1953 through work at British universities in London and Cambridge. This discovery contributed to many scientific advances, particularly in medicine and fighting crime. Francis Crick (1916-2004), one of those awarded the Nobel Prize for this discovery , was British."
        },
        {
            "text": "Which of the following is the judiciary responsible for?",
            "choices": [
                "Deciding whether a person is guilty",
                "Putting people in prison",
                "Looking after a jury",
                "Interpreting the law"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Judges, who are together called 'the judiciary', are responsible for interpreting the law and ensuring that trials are conducted fairly ."
        },
        {
            "text": "What is the total number of crosses does the Union flag have?",
            "choices": [
                "2",
                "5",
                "4",
                "3"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Union Flag consists of three crosses: The cross of St George, patron saint of England, is a red cross on a white ground; The cross of St Andrew , patron saint of Scotland, is a diagonal white cross on a blue ground; The cross of St Patrick, patron saint of Ireland, is a diagonal red cross on a white ground."
        },
        {
            "text": "Northern Ireland and Scotland have their own banknotes valid everywhere in the UK",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However , shops and businesses do not have to accept them."
        },
        {
            "text": "In which location is the best preserved prehistoric village 'Skara Brae on Orkney' located?",
            "choices": [
                "Wales",
                "Scotland",
                "England",
                "Ireland"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Skara Brae on Orkney , off the north coast of Scotland, is the best preserved prehistoric village in northern Europe, and has helped archaeologists to understand more about how people lived near the end of the Stone Age."
        },
        {
            "text": "Which person is a Patron St of Scotland?",
            "choices": [
                "St Andrew",
                "St Patrick",
                "St George",
                "St David"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint. Each saint has a special day: 1 March: St David's Day , Wales;17 March: St Patrick's Day, Northern Ireland; 23 April: St George's Day , England; 30 November: St Andrew's Day , Scotland."
        },
        {
            "text": "EastEnders and Coronation Street are popular soap operas.",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "British television shows a wide variety of programmes. Popular programmes include regular soap operas such as Coronation Street and EastEnders."
        },
        {
            "text": "Where can you find a solicitor in the UK?",
            "choices": [
                "Paying expensive Law firms to find one",
                "By contacting the police",
                "Go to one of the Youth Courts",
                "The Citizens Advice Bureau"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Solicitors are trained lawyers who give advice on legal matters. They take action for their clients and represent them in court. The Citizens Advice Bureau can give you names of local solicitors and which areas of law they specialise in. You can also get this information from the Law Society ."
        },
        {
            "text": "What percentage of the UK population lives in England?",
            "choices": [
                "95%",
                "71%",
                "62%",
                "84%"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "England more or less consistently makes up 84% of the total population, Wales around 5%, Scotland just over 8% and Northern Ireland less than 3%."
        },
        {
            "text": "What is the total number of colonies were granted independence in 1947?",
            "choices": [
                "11",
                "13",
                "7",
                "9"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Another aspect of change was self-government for former colonies. In 1947, independence was granted to nine countries, including India, Pakistan and Ceylon (now Sri Lanka). Other colonies in Africa, the Caribbean and the Pacific achieved independence over the next 20 years."
        },
        {
            "text": "During the civil war of 1455, what colour rose was the symbol of the House of Lancaster?",
            "choices": [
                "White",
                "Red",
                "Orange",
                "Red and White"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In 1455, a civil war was begun to decide who should be king of England. It was fought between the supporters of two families: the House of Lancaster and the House of York. This war was called the Wars of the Roses, because the symbol of Lancaster was a red rose and the symbol of York was a white rose."
        },
        {
            "text": "Which TWO will you be agreeing with when applying to become a permanent resident?",
            "choices": [
                "To accept the responsibilities which come with 'Settlement'",
                "To support the Coalition Government",
                "To remain in the UK forever",
                "To respect the law , values and traditions of the UK"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "You should accept all responsibilities that come with permanent residency and fundamental principles of British life"
        },
        {
            "text": "How is the Queen Elizabeth II's husband, Prince Philip, often called?",
            "choices": [
                "The Duke of Swansea",
                "The Duke of Edinburgh",
                "The Duke of Belfast",
                "The Duke of London"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Queen Elizabeth II reigned since her father's death in 1952, in 2012 she celebrated her Diamond Jubilee (60 years as queen) until she passed away in 2022. She was married to Prince Philip, the Duke of Edinburgh. Her eldest son, Prince Charles (the Prince of Wales) became the sovereign monarch in 2022."
        },
        {
            "text": "Which of the following is associated with the Elizabethan period in England?",
            "choices": [
                "Growing patriotism",
                "Scientific movement",
                "Women rights",
                "Civil wars"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Elizabethan period in England was a time of growing patriotism: a feeling of pride in being English. The Elizabethan period is also remembered for the richness of its poetry and drama, especially the plays and poems of William Shakespeare."
        },
        {
            "text": "Local councils, in the UK, are often called local authorities",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The statement is correct"
        },
        {
            "text": "When walking your dog in a public place, what must you ensure?",
            "choices": [
                "That your dog wears a special dog coat",
                "That your dog never strays more than 3 metres away from you",
                "That your dog wears a collar showing the name and address of the owner",
                "That your dog does not come into contact with other dogs"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "owner A lot of people in the UK have pets such as cats or dogs. They might have them for company or because they enjoy looking after them. It is against the law to treat a pet cruelly or to neglect it. All dogs in public places must wear a collar showing the name and address of the owner . The owner is responsible for keeping the dog under control and for cleaning up after the animal in a public place."
        },
        {
            "text": "In what year did the Glorious Revolution happen?",
            "choices": [
                "1688",
                "1685",
                "1680",
                "1692"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1688, important Protestants in England asked William to invade England and proclaim himself king. When William reached England, there was no resistance. This event was later called the 'Glorious Revolution' because there was no fighting in England and because it guaranteed the power of Parliament, ending the threat of a monarch ruling on his or her own as he or she wished."
        },
        {
            "text": "In what year did the British troops leave Iraq?",
            "choices": [
                "2000",
                "2013",
                "2009",
                "2004"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Since 2000, British armed forces have been engaged in the global fight against international terrorism and against the proliferation of weapons of mass destruction, including operations in Afghanistan and Iraq. British combat troops left Iraq in 2009."
        },
        {
            "text": "What country is Swansea in?",
            "choices": [
                "Wales",
                "Scotland",
                "England",
                "Northern Ireland"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Swansea is a Welsh city ."
        },
        {
            "text": "Which of the following is the second biggest country in the UK?",
            "choices": [
                "England",
                "Scotland",
                "Wales",
                "Northern Ireland"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Scotland has the second highest population and area."
        },
        {
            "text": "What language did the Iron Age people speak?",
            "choices": [
                "English",
                "Viking",
                "Anglo-Saxon",
                "Celtic"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Their language was part of the Celtic language family ."
        },
        {
            "text": "Women over 21 were allowed to vote for the first time in 1969",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The voting franchise was also extended to women over 30, and then in 1928 to men and women over 21. In 1969, the voting age was reduced to 18 for men and women."
        },
        {
            "text": "What language did the peasants speak after the Norman conquest?",
            "choices": [
                "Norman French",
                "Anglo Saxon",
                "Gaelic",
                "English"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Middle Ages saw the development of a national culture and identity . After the Norman Conquest, the king and his noblemen had spoken Norman French and the peasants had continued to speak Anglo-Saxon. Gradually these two languages combined to become one English language."
        }
    ]
},
{
    id: "exam41",
    title: "Practice Exam 41",
    questions: [
        {
            "text": "Which Castles are in use to this day?",
            "choices": [
                "Edinburgh and Windsor",
                "Edinburgh and London",
                "Edinburgh and Dublin",
                "Edinburgh and Aberdeen"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Castles were built in many places in Britain and Ireland, partly for defence. Today many are in ruins, although some, such as Windsor and Edinburgh, are still in use."
        },
        {
            "text": "What celebrates the end of Ramadan?",
            "choices": [
                "Hanukkah",
                "Eid ul Adha",
                "Eid al-Fitr",
                "Vaisakhi"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast."
        },
        {
            "text": "In 1998, what was the estimated population of the UK?",
            "choices": [
                "62 million",
                "57 million",
                "42 million",
                "75 million"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "(1951, 50 million), (1998, 57 million), (2005, Just under 60 million), (2010, Just over 62 million)"
        },
        {
            "text": "What is the total number of people lost their lives in the decades after 1969 due to violence in Northern Ireland?",
            "choices": [
                "3,000",
                "12,000",
                "30,000",
                "60,000"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Some 3,000 people lost their lives in the decades after 1969 in the violence in Northern Ireland."
        },
        {
            "text": "Which of the following is the day before Lent called?",
            "choices": [
                "Shrove Monday",
                "Pancake Day",
                "Easter Monday",
                "Ash Wednesday"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The 40 days before Easter are known as Lent. The day before Lent starts is called Shrove Tuesday , or Pancake Day ."
        },
        {
            "text": "Which of the following are TWO responsibilities of members of Parliament (MPs)?",
            "choices": [
                "Appoint the Prime Minister (PM)",
                "Scrutinise and comment on what the government is doing",
                "They represent everyone in their constituency",
                "Represent only those who voted for them"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "MPs have a number of dif ferent responsibilities. They:; represent everyone in their constituency; ; help to create new laws; ; scrutinise and comment on what the government is doing; ; debate important national issues;"
        },
        {
            "text": "Who set up the first formal anti-slavery campaigns?",
            "choices": [
                "Jacobites",
                "The Quakers",
                "Cavaliers",
                "Roundheads"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The first formal anti-slavery groups were set up by the Quakers in the late 1700s, and they petitioned Parliament to ban the practice."
        },
        {
            "text": "When were films first shown publicly in the UK?",
            "choices": [
                "1890",
                "1896",
                "1901",
                "1906"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Films were first shown publicly in the UK in 1896 and film screenings very quickly became popular"
        },
        {
            "text": "If you think someone is trying to persuade you to join an extremist or terrorist cause, who should you notify?",
            "choices": [
                "Church",
                "Council office",
                "Police force",
                "MP"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local police force."
        },
        {
            "text": "First professional football clubs were formed in the late 19th century",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "its True. The first professional football clubs were formed in the late 19th century ."
        },
        {
            "text": "Which of the following is the capital of England?",
            "choices": [
                "Belfast",
                "Cardif f",
                "Edinburgh",
                "London"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "London is the capital city of England and the United Kingdom."
        },
        {
            "text": "Hanukkah is celebrated to remember the Jews' struggle for religious freedom and it is in November or December for What is the total number of days?",
            "choices": [
                "9",
                "6",
                "7",
                "8"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Hanukkah is in November or December and is celebrated for eight days. It is to remember the Jews' struggle for religious freedom. On each day of the festival a candle is lit on a stand of eight candles (called a menorah) to remember the story of the festival, where oil that should have lasted only a day did so for eight."
        },
        {
            "text": "Who directed the British movie the Belles of St Trinian's in 1954?",
            "choices": [
                "Mary Peters",
                "Alfred Hitchcock",
                "David Lean",
                "Frank Launder"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Belles of St Trinian's (1954) was directed by Frank Launder"
        },
        {
            "text": "Which TWO major welfare changes were introduced between 1945 and 1950?",
            "choices": [
                "A social security system for everyone",
                "Employment benefits",
                "State pension",
                "The NHS"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "In 1948, Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS). A national system of benefits was also introduced to provide 'social security', so that the population would be protected from the 'cradle to the grave'."
        },
        {
            "text": "Haggis is a traditional food of which country?",
            "choices": [
                "England",
                "Scotland",
                "Wales",
                "Northern Ireland"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Scotland's food is Haggis - a sheep's stomach stuf fed with of fal, suet, onions and oatmeal."
        },
        {
            "text": "Which of the following are TWO of the roles of the House of Lords?",
            "choices": [
                "Represent everyone in their constituency",
                "Suggest amendments or propose new laws, which are then discussed by the MPs",
                "Check laws that have been passed to ensure that they are fit for purpose",
                "Scrutinise and comment on what the government is doing"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "the MPs The House of Lords can suggest amendments or propose new laws, which are then discussed by MPs. It checks laws that have been passed by the House of Commons to ensure they are fit for purpose. It also holds the government to account to make sure that it is working in the best interests of the people."
        },
        {
            "text": "By law , radio and television coverage of the political parties must be _____ , so equal time has to be given to rival viewpoints",
            "choices": [
                "Ethical",
                "Loyal",
                "Classified",
                "Balanced"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "By law , radio and television coverage of the political parties must be balanced, so equal time has to be given to rival viewpoints."
        },
        {
            "text": "Which person is able to change the Prime Minister during his/her term?",
            "choices": [
                "The Governing Party",
                "Fellow MPs",
                "The Monarch",
                "The Speaker"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Prime Minister can be changed if the MPs in the governing party decide to do so, or if he or she wishes to resign. The Prime Minister usually resigns if his or her party loses a General Election."
        },
        {
            "text": "When Queen Anne died, a German, George of Hanover , became the next King of England",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "When Queen Anne died in 1714, Parliament chose a German, George I, to be the next King, because he was Anne's nearest Protestant relative. An attempt by Scottish Jacobites to put James II's son on the throne instead was quickly defeated."
        },
        {
            "text": "When King Charles I tried to impose a revised Prayer Book on the Presbyterian Church in Scotland, which TWO events occurred?",
            "choices": [
                "King Charles I recalled Parliament to ask it for funds to form his own army",
                "King Charles I formed his own army without asking for help from Parliament",
                "A Scottish army was formed and it invaded England",
                "Parliament only gave the money to King Charles when the Scottish army invaded England"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "army Charles I wanted the worship of the Church of England to include more ceremony and introduced a revised Prayer Book. He tried to impose this Prayer Book on the Presbyterian Church in Scotland and this led to serious unrest. A Scottish army was formed and Charles could not find the money he needed for his own army without the help of Parliament. In 1640, he recalled Parliament to ask it for funds. Many in Parliament were Puritans, a group of Protestants who advocated strict and simple religious doctrine and worship. They did not agree with the king's religious views and disliked his reforms of the Church of England. Parliament refused to give the king the money he asked for , even after the Scottish army invaded England."
        },
        {
            "text": "It is a criminal offence to owe money to someone and you might be taken to court",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Owing money is a civil of fence"
        },
        {
            "text": "What kind of battle was the Battle of Britain (1940)?",
            "choices": [
                "All of these",
                "Air Battle",
                "Sea Battle",
                "Border Battle"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Germans waged an air campaign against Britain, but the British resisted with their fighter planes and eventually won the crucial aerial battle against the Germans, called 'the Battle of Britain', in the summer of 1940. The most important planes used by the Royal Air Force in the Battle of Britain were the Spitfire and the Hurricane - which were designed and built in Britain."
        },
        {
            "text": "Identify which of these is not a valid bank note?",
            "choices": [
                "\u00a35",
                "\u00a350",
                "\u00a3100",
                "\u00a320"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The currency in the UK is the pound sterling (symbol \u00a3). There are 100 pence in a pound. The denominations (values) of currency are - coins: 1p, 2p, 5p, 10p, 20p, 50p, \u00a31 and \u00a32; notes: \u00a35, \u00a310, \u00a320, \u00a350."
        },
        {
            "text": "What is the total number of National Parks are there in the UK?",
            "choices": [
                "15",
                "12",
                "10",
                "7"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape."
        }
    ]
},
{
    id: "exam42",
    title: "Practice Exam 42",
    questions: [
        {
            "text": "Which comedy double act by Nick Park won many Oscars?",
            "choices": [
                "Gavin and Stacey",
                "Wallace and Gromit",
                "Laurel and Hardy",
                "Thelma and Louise"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Nick Park, who has won four Oscars for his animated films, including three for films featuring Wallace and Gromit."
        },
        {
            "text": "The Swinging Sixties was a period of new ideas about politics, philosophy and science",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "he decade of the 1960s was a period of significant social change. It was known as 'the Swinging Sixties'. There was growth in British fashion, cinema and popular music. Two well- known pop music groups at the time were The Beatles and The Rolling Stones. People started to become better of f and many bought cars and other consumer goods. It was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland."
        },
        {
            "text": "What is the total number of members does a jury have in Scotland?",
            "choices": [
                "18",
                "12",
                "15",
                "21"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "A jury is made up of members of the public chosen at random from the local electoral register (see The Electoral Register). In England, Wales and Northern Ireland a jury has 12 members, and in Scotland a jury has 15 members."
        },
        {
            "text": "Which of the following is the longest distance on the mainland in the UK?",
            "choices": [
                "1400 miles",
                "870 miles",
                "1240 miles",
                "950 miles"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The longest distance on the mainland is from John O'Groats on the north coast of Scotland to Land's End in the south-west corner of England. It is about 870 miles (approximately 1,400 kilometres)."
        },
        {
            "text": "Which of the following are the parliaments in Scotland, Wales and Northern Ireland also known as?",
            "choices": [
                "Political parties",
                "Local authorities",
                "Devolved administrations",
                "Formal institutions"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Since 1997, some powers have been devolved from the central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly af fect them. These powers are also known as devolved administrations."
        },
        {
            "text": "What lead the American colonies to declare their independence?",
            "choices": [
                "The UK wanting to stop the slave trade",
                "The UK not sending enough money",
                "The UK not providing enough health care",
                "The UK wanting to tax the colonies"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "By the 1760s, there were substantial British colonies in North America. The colonies were wealthy and largely in control of their own af fairs. Many of the colonist families had originally gone to North America in order to have religious freedom. They were well educated and interested in ideas of liberty . The British government wanted to tax the colonies."
        },
        {
            "text": "The people of which age made the first coins to be minted in Britain?",
            "choices": [
                "Bronze Age",
                "Gold Age",
                "Stone Age",
                "Iron Age"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The people of the Iron Age had a sophisticated culture and economy . They made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings. This marks the beginnings of British history ."
        },
        {
            "text": "Who receives ambassadors and high commissioners, entertains visiting heads of state and makes state visits overseas in support of diplomatic and economic relationships with other countries?",
            "choices": [
                "The Speaker",
                "The Foreign Secretary",
                "The Prime Minister",
                "The Monarch"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The Monarch (King Charles III) represents the UK to the rest of the world. He receives foreign ambassadors and high commissioners, entertains visiting heads of state, and makes state visits overseas in support of diplomatic and economic relationships with other countries."
        },
        {
            "text": "When is Boxing Day?",
            "choices": [
                "The day before Christmas Day",
                "The day after Easter",
                "The day before Easter",
                "The day after Christmas Day"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Boxing Day (26th of December) is the day after Christmas Day (25th of December) and is a public holiday ."
        },
        {
            "text": "Which tribes invaded Britain after the Romans had left?",
            "choices": [
                "The Normans",
                "The Jutes and the Anglo-Saxons",
                "The Vikings",
                "The Celtics"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire and never returned. Britain was again invaded by tribes from northern Europe: the Jutes, the Angles and the Saxons."
        },
        {
            "text": "Clans lost a lot of their power and influence after which event?",
            "choices": [
                "The Battle of Trafalgar",
                "The Battle of Culloden",
                "The Crimean War",
                "The Battle of Agincourt"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The clans lost a lot of their power and influence after the Battle of Culloden (1746). Chieftains became landlords if they had the favour of the English king, and clansmen became tenants who had to pay for the land they used."
        },
        {
            "text": "Which TWO developments are associated with the 'Swinging Sixties'?",
            "choices": [
                "Abortion Law Reform",
                "Divorce Law Reform",
                "Establishment of the NHS",
                "Children's Rights Law Reform"
            ],
            "multiple": true,
            "correct": [
                0,
                1
            ],
            "explanation": "The Swinging Sixties was also a time when social laws were liberalised, for example in relation to divorce and to abortion in England, Wales and Scotland. The position of women in the workplace also improved. It was quite common at the time for employers to ask women to leave their jobs when they got married, but Parliament passed new laws giving women the right to equal pay and made it illegal for employers to discriminate against women because of their gender ."
        },
        {
            "text": "The EU was set up by 6 western countries who signed the Treaty of Rome on which date?",
            "choices": [
                "01-Mar-77",
                "17-May-67",
                "30-May-47",
                "25-Mar-57"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries (Belgium, France, Germany , Italy , Luxembourg and the Netherlands) who signed the Treaty of Rome on 25 March 1957. The UK originally decided not to join this group but it became a member in 1973."
        },
        {
            "text": "The Domesday Book gives a picture of society in England just after the Norman Conquest",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "William the Conqueror (the Duke of Normandy) sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest."
        },
        {
            "text": "Where do you have to be registered to be able to vote?",
            "choices": [
                "The electoral register",
                "The UK registry",
                "The Home office",
                "The UK database"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "To be able to vote in a parliamentary , local or European election, you must have your name on the electoral register ."
        },
        {
            "text": "Which of the following is the capital of Wales?",
            "choices": [
                "Belfast",
                "Edinburgh",
                "London",
                "Cardif f"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Cardif f is the capital of Wales."
        },
        {
            "text": "Which person is known as William the Conqueror?",
            "choices": [
                "William, the Duke of Lion",
                "William, the Duke of Edinburgh",
                "William, the Duke of Normandy",
                "William, the Duke of France"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror ."
        },
        {
            "text": "Which country (or colony) did NOT gain its independence from the British Empire in 1947?",
            "choices": [
                "The British West Indies",
                "Sri Lanka",
                "Pakistan",
                "India"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In 1947, independence was granted to nine countries, including India, Pakistan and Ceylon (now Sri Lanka). Other colonies in Africa, the Caribbean (e.g. The British West Indies) and the Pacific achieved independence over the next 20 years."
        },
        {
            "text": "What service does the TV licence pay for?",
            "choices": [
                "Free radio and tv channels",
                "The BBC",
                "Freeview channels",
                "None of these"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The money from TV licences is used to pay for the British Broadcasting Corporation (BBC)."
        },
        {
            "text": "In what year was there a revolution in France which led to a war with Britain?",
            "choices": [
                "1789",
                "1298",
                "1679",
                "1097"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "During the 18th century , Britain fought a number of wars with France. In 1789, there was a revolution in France and the new French government soon declared war on Britain. Napoleon, who became Emperor of France, continued the war ."
        },
        {
            "text": "Identify which of these is a charity working with animals?",
            "choices": [
                "Crisis and Shelter",
                "NSPCC",
                "Age UK",
                "PDSA"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "People's Dispensary for Sick Animals (PDSA)is the charity that works with animals"
        },
        {
            "text": "Which TWO are some of the key roles of Governors and school boards?",
            "choices": [
                "Setting the strategic direction",
                "Looking after school's finances",
                "Monitoring expenses",
                "Evaluating school performance"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "Governors and school boards have an important part to play in raising school standards. They have three key roles: setting the strategic direction of the school; ensuring accountability; monitoring and evaluating school performance."
        },
        {
            "text": "The UK is a diverse and dynamic nation which welcomes those who want to make a positive contribution to the society",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The UK is a diverse and welcoming country . It welcomes those who want to make a positive contribution to the society"
        },
        {
            "text": "What do you require by law to watch TV using any medium?",
            "choices": [
                "The Internet",
                "A valid TV licence",
                "A TV",
                "An Antenna"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "If you watch or record live TV programmes on any channel, or download or watch BBC programmes on BBC iPlayer on any digital devices, you need to be covered by a TV Licence."
        }
    ]
},
{
    id: "exam43",
    title: "Practice Exam 43",
    questions: [
        {
            "text": "What will happen to any driver who has either taken more than the acceptable quantity of alcohol or refused to take the test?",
            "choices": [
                "Arrested",
                "Asked to provide medical certificate",
                "Given a warning",
                "Taken to his home"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "If you are found driving while exceeding the alcohol limit you will be arrested."
        },
        {
            "text": "Mince pies are traditionally eaten on which day?",
            "choices": [
                "Diwali",
                "Easter",
                "Halloween",
                "Christmas"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Christmas is celebrated in a traditional way . People usually spend the day at home and eat a special meal, which often includes roast turkey , Christmas pudding and mince pies."
        },
        {
            "text": "Which individual was made a Dame of the British Empire in 2000?",
            "choices": [
                "Jayne Torvill",
                "Dame Kelly Holmes",
                "Mary Peters",
                "Dame Ellen MacArthur"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Born in Manchester , Mary Peters moved to Northern Ireland as a child. She was a talented athlete who won an Olympic gold medal in the pentathlon in 1972. After this, she raised money for local athletics and became the team manager for the women's British Olympic team. She continues to promote sport and tourism in Northern Ireland and was made a Dame of the British Empire in 2000 in recognition of her work."
        },
        {
            "text": "What was the Spanish Armada?",
            "choices": [
                "A French and Spanish army",
                "A large army of people",
                "A large fleet of ships",
                "An illness"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Elizabeth became one of the most popular monarchs in English history , particularly after 1588, when the English defeated the Spanish Armada (a large fleet of ships), which had been sent by Spain to conquer England and restore Catholicism."
        },
        {
            "text": "In which location is Tate Britain and Tate Modern located?",
            "choices": [
                "Cardif f",
                "London",
                "Edinburgh",
                "Manchester"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Works by British and international artists are displayed in galleries across the UK. Some of the most well-known galleries are The National Gallery , Tate Britain and Tate Modern in London, the National Museum in Cardif f, and the National Gallery of Scotland in Edinburgh."
        },
        {
            "text": "Which TWO principles are included in the European Convention on Human Rights?",
            "choices": [
                "Freedom of forced labour",
                "Prohibition of life",
                "Right to a fair trial",
                "Right to liberty and security"
            ],
            "multiple": true,
            "correct": [
                2,
                3
            ],
            "explanation": "Some of the principles included in the European Convention on Human Rights are: right to life; prohibition of torture; prohibition of slavery and forced labour; right to liberty and security; right to a fair trial; freedom of thought, conscience and religion; freedom of expression (speech)."
        },
        {
            "text": "Where was Anne Boleyn, the wife of Henry VIII Which individual was accused of taking lovers, executed?",
            "choices": [
                "Maiden Castle",
                "The Tower of London",
                "Stonehenge",
                "Windsor Castle"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Anne Boleyn was English. She and Henry had one daughter , Elizabeth. Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London."
        },
        {
            "text": "Which of the following is not a fundamental principle of British life?",
            "choices": [
                "Treating others with fairness",
                "Looking after yourself and family",
                "Driving a car",
                "Looking after the environment"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Driving a car is NOT one of the fundamental principles of British life"
        },
        {
            "text": "People who are self-employed need to pay National Insurance Contributions themselves",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Almost everybody in the UK who is in paid work, including self-employed people, must pay National Insurance Contributions."
        },
        {
            "text": "Who took the title 'King of Ireland'?",
            "choices": [
                "Henry VIII",
                "James VI",
                "Henry VII",
                "Charles II"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Henry VII and Henry VIII had extended English control outside the Pale. Henry VIII took the title 'King of Ireland' and English laws were introduced."
        },
        {
            "text": "Rudyard Kipling was born in South Africa",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Rudyard Kipling was born in India in 1865 and later lived in India, the UK and the USA. He wrote books and poems set in both India and the UK. His poems and novels reflected the idea that the British Empire was a force for good. Kipling was awarded the Nobel Prize in Literature in 1907."
        },
        {
            "text": "Where can you get help if you can't afford to pay a vet?",
            "choices": [
                "Family",
                "Charities",
                "Your vet",
                "Friends"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Vaccinations and medical treatment for animals are available from veterinary surgeons (vets). There are charities which may help people who cannot af ford to pay a vet."
        },
        {
            "text": "For how long did England remain a republic?",
            "choices": [
                "11 years",
                "14 years",
                "12 years",
                "10 years"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Britain had been a republic for 1 1 years."
        },
        {
            "text": "It is an offence not to have an MOT certificate if your vehicle is more than _____ years old",
            "choices": [
                "3",
                "4",
                "5",
                "2"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "If your vehicle is over three years old, you must take it for a Ministry of Transport (MOT) test every year . It is an of fence not to have an MOT certificate if your vehicle is more than three years old."
        },
        {
            "text": "The Prime Minister is the head of the Commonwealth",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The Monarch (King Charles III at the time of writing) is the ceremonial head of the Commonwealth, which currently has 56 member states."
        },
        {
            "text": "What was an important English export in the Middle Ages?",
            "choices": [
                "Potatoes",
                "Stone",
                "Glass",
                "Wool"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "English wool became a very important export in the middle ages. People came to England from abroad to trade and also to work. Many had special skills, such as weavers from France, engineers from Germany , glass manufacturers from Italy and canal builders from Holland."
        },
        {
            "text": "Which of the following is the percentage of Sikh living in the UK?",
            "choices": [
                "1%",
                "5%",
                "9%",
                "13.00%"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In the 2021 England and Wales census, around 525,000 (0.9%) people from the sampled population of 60 million identified as Sikh. 46% of people identified themselves as Christian. Much smaller proportions identified themselves as Muslim (6.5%), Hindu (2%), Sikh (1%), Jewish or Buddhist (both around 0.5%), 0.5% of people followed another religion and 37% stated not to follow any religion."
        },
        {
            "text": "When do pubs usually open?",
            "choices": [
                "22:00",
                "11:00",
                "13:00",
                "16:00"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Public Houses, also known as Pubs, usually open at 1 1:00 AM, 12:00 PM on Sundays."
        },
        {
            "text": "Who wrote the Canterbury Tales?",
            "choices": [
                "John Barbour",
                "Geof frey Chaucer",
                "William Caxton",
                "William Walton"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "In the years leading up to 1400, Geof frey Chaucer wrote a series of poems in English about a group of people going to Canterbury on a pilgrimage."
        },
        {
            "text": "Who became the first Briton to win the Tour de France?",
            "choices": [
                "Mo Farah",
                "Bradley Wiggins",
                "Sir Chris Hoy",
                "Andy Murray"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Bradley Wiggins (1980-) is a cyclist. In 2012, he became the first Briton to win the Tour de France. He has won seven Olympic medals, including gold medals in the 2004, 2008 and 2012 Olympic Games."
        },
        {
            "text": "What method is used to elect UK MPs?",
            "choices": [
                "Popularity",
                "Proportional Representation",
                "First past the post system",
                "Instant runof f"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "MPs are elected through a system called 'first past the post'. In each constituency , the candidate who gets the most votes is elected. The government is usually formed by the party that wins the majority of constituencies. If no party wins a majority , two parties may join together to form a coalition."
        },
        {
            "text": "Which charity works to preserve important buildings?",
            "choices": [
                "The National Trust",
                "The Red Cross",
                "NSPCC",
                "Age UK"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Many parts of the countryside and places of interest are kept open by the National Trust. It aims to preserve important buildings, coastline and countryside in the UK. The National Trust was founded in 1895 by three volunteers. There are now more than 61,000 volunteers helping to keep the organisation running."
        },
        {
            "text": "Which party did Margaret Thatcher belong to?",
            "choices": [
                "UKIP",
                "Labour",
                "Liberal Democrats",
                "Conservative"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Margaret Thatcher , Britain's first woman Prime Minister , led the Conservative government from 1979 to 1990."
        },
        {
            "text": "The UN was set up straight after the First World War. It now has over 190 countries as members",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The UK is part of the United Nations (UN), an international organisation with more than 190 countries as members. The UN was set up after the Second World War and aims to prevent war and promote international peace and security . There are 15 members on the UN Security Council, which recommends action when there are international crises and threats to peace. The UK is one of five permanent members of the Security Council."
        }
    ]
},
{
    id: "exam44",
    title: "Practice Exam 44",
    questions: [
        {
            "text": "In what year did the first Christian communities begin to appear in Britain?",
            "choices": [
                "5th and 6th centuries",
                "4th and 5th centuries",
                "3rd and 4th centuries",
                "2nd and 3rd centuries"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "It was during the 3rd and 4th centuries AD that the first Christian communities began to appear in Britain."
        },
        {
            "text": "Who lost a lot of their power after the Battle of Culloden in 1746?",
            "choices": [
                "The Farmers",
                "The Clans",
                "The King",
                "The Parliament"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The clans lost a lot of their power and influence after Culloden. Chieftains became landlords if they had the favour of the English king, and clansmen became tenants who had to pay for the land they used."
        },
        {
            "text": "Which of the following is the geographic position of the UK in Europe?",
            "choices": [
                "South",
                "East",
                "West",
                "North West"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The UK is located in the North West of Europe."
        },
        {
            "text": "Who founded a monastery on the Island of Iona?",
            "choices": [
                "St Columba",
                "St Patrick",
                "St Andrew",
                "St Augustine"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Missionaries from Ireland spread the religion in the north. The most famous of these were St Patrick, who would become the patron saint of Ireland, and St Columba, who founded a monastery on the island of Iona, of f the coast of what is now Scotland. St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury ."
        },
        {
            "text": "NATO aims to maintain peace between all of its members",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "NATO is a group of European and North American countries that have agreed to help each other if they come under attack. It also aims to maintain peace between all of its members."
        },
        {
            "text": "In what year did Britain recognise the American colonies' independence?",
            "choices": [
                "1776",
                "1751",
                "1763",
                "1783"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In 1776, 13 American colonies declared their independence, stating that people had a right to establish their own governments. The colonists eventually defeated the British army and Britain recognised the colonies' independence in 1783."
        },
        {
            "text": "What tools did the Bronze age people introduce?",
            "choices": [
                "Gold Currency",
                "Ornaments and weapons",
                "Basic farming machinery",
                "Roads"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The people of the Bronze Age were accomplished metalworkers who made many beautiful objects in bronze and gold, including tools, ornaments and weapons."
        },
        {
            "text": "Who sat in the House of Commons in the Middle Ages?",
            "choices": [
                "The Nobility",
                "Bishops",
                "Great Landowners",
                "Knights"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "In the middle ages, the nobility , great landowners and bishops sat in the House of Lords. Knights, who were usually smaller landowners, and wealthy people from towns and cities were elected to sit in the House of Commons."
        },
        {
            "text": "Who led a team of scientists to develop the atomic bomb?",
            "choices": [
                "Isaac Newton",
                "Sir John Lavery",
                "Ernest Rutherford",
                "Dylan Thomas"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Scientists led by Ernest Rutherford, working at Manchester and then Cambridge University , were the first to 'split the atom' and took part in the Manhattan Project in the United States, which developed the atomic bomb."
        },
        {
            "text": "Which country invented Cricket?",
            "choices": [
                "Australia",
                "England",
                "Scotland",
                "Wales"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Cricket originated in England and is now played in many countries. Games can last up to five days but still result in a draw! The most famous Cricket competition is the Ashes, which is a series of Test matches played between England and Australia."
        },
        {
            "text": "What is the total number of Russian and Polish Jews came to Britain between 1870-1914?",
            "choices": [
                "30,000",
                "140,000",
                "120,000",
                "60,000"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "People continued to come to Britain from other parts of the world. For example, between 1870 and 1914, around 120,000 Russian and Polish Jews came to Britain to escape persecution."
        },
        {
            "text": "Which TWO are correct about Mary Stuart?",
            "choices": [
                "She spent much of her childhood in France",
                "She was Elizabeth I's sister",
                "She died of the Black Death",
                "She was only a week old when she became queen"
            ],
            "multiple": true,
            "correct": [
                0,
                3
            ],
            "explanation": "The queen of Scotland, Mary Stuart (often now called 'Mary , Queen of Scots') was a Catholic. She was only a week old when her father died and she became queen. Much of her childhood was spent in France. When she returned to Scotland, she was the centre of a power struggle between dif ferent groups. When her husband was murdered, Mary was suspected of involvement and fled to England. She gave her throne to her Protestant son, James VI of Scotland. Mary was Elizabeth I's cousin and hoped that Elizabeth might help her, but Elizabeth suspected Mary of wanting to take over the English throne, and kept her a prisoner for 20 years. Mary was eventually executed, accused of plotting against Elizabeth I."
        },
        {
            "text": "Which TWO are famous British fashion designers?",
            "choices": [
                "Isambard Kingdom Brunel",
                "Alexander McQueen",
                "Robert Adam",
                "Mary Quant"
            ],
            "multiple": true,
            "correct": [
                1,
                3
            ],
            "explanation": "Britain has produced many great designers, from Thomas Chippendale (who designed furniture in the 18th century) to Clarice Clif f (who designed Art Deco ceramics) to Sir Terence Conran (a 20th-century interior designer). Leading fashion designers of recent years include Mary Quant, Alexander McQueen and Vivienne Westwood."
        },
        {
            "text": "In year 1066, William the Conqueror invaded England in which battle?",
            "choices": [
                "Battle of Culloden",
                "Battle of Britain",
                "Battle of Hastings",
                "Battle of Agincourt"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In 1066, an invasion led by William, the Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle. William became king of England and is known as William the Conqueror . The battle is commemorated in a great piece of embroidery , known as the Bayeux Tapestry , which can still be seen in France today ."
        },
        {
            "text": "The leader of the Opposition appoints senior opposition MPs to be what?",
            "choices": [
                "Home Secretary",
                "Shadow Ministers",
                "Chancellor of the Exchequer",
                "Local Mayors"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The leader of the Opposition also appoints senior opposition MPs to be 'shadow ministers'. They form the shadow cabinet and their role is to challenge the government and put forward alternative policies."
        },
        {
            "text": "Which person is responsible for subjects such as education, health and defence?",
            "choices": [
                "Foreign Secretary",
                "Secretary of State",
                "Chancellor of the Exchequer",
                "Home Secretary"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Secretaries of State are responsible for subjects such as education, health and defence."
        },
        {
            "text": "Who designed the Cenotaph?",
            "choices": [
                "Sir Christopher Wren",
                "Sir Edwin Lutyens",
                "Inigo Jones",
                "Robert Adam"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Sir Edwin Lutyens was responsible for many war memorials throughout the world, including the Cenotaph in Whitehall. The Cenotaph is the site of the annual Remembrance Day service attended by the Queen and many others."
        },
        {
            "text": "Which of Henry VIII's wives were executed?",
            "choices": [
                "Catherine of Aragon and Anne Boleyn",
                "Catherine Parr and Anne of Cleves",
                "Anne Boleyn and Catherine Howard",
                "Anne of Cleves and Jane Seymour"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Anne Boleyn was English. She and Henry had one daughter , Elizabeth. Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London. Catherine was a cousin of Anne Boleyn. She was also accused of taking lovers and executed."
        },
        {
            "text": "The BBC is controlled by the UK government",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The BBC is the largest broadcaster in the world. It is the only wholly state-funded media organisation that is independent of government. Other UK channels are primarily funded through advertisements and subscriptions."
        },
        {
            "text": "In England and Wales, the small claims procedure is used for claims of less than what amount?",
            "choices": [
                "\u00a311,000",
                "\u00a33,000",
                "\u00a310,000",
                "\u00a37,000"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "The small claims procedure is an informal way of helping people to settle minor disputes without spending a lot of time and money using a lawyer . This procedure is used for claims of less than \u00a310,000 in England and Wales; \u00a35,000 in Scotland and \u00a35,000 in Northern Ireland (Changed from \u00a33000)."
        },
        {
            "text": "What UK landmark was voted as Britain's favourite view?",
            "choices": [
                "Snowdonia",
                "The Lake District",
                "Loch Lomond",
                "Edinburgh Castle"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Lake District is England's largest national park. It covers 885 square miles (2,292 square kilometres). It is famous for its lakes and mountains and is very popular with climbers, walkers and sailors. The biggest stretch of water is Windermere. In 2007, television viewers voted Wastwater as Britain's favourite view ."
        },
        {
            "text": "What food is traditionally associated with Wales?",
            "choices": [
                "Haggis",
                "Roast beef, which is served with potatoes, vegetables, Yorkshire puddings",
                "Welsh cakes",
                "Ulster fry"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Welsh cakes - a traditional Welsh snack made from flour , dried fruits and spices, and served either hot or cold."
        },
        {
            "text": "Which TWO are compulsory in the UK if you own an old car?",
            "choices": [
                "Mortgage",
                "A valid MOT test certificate",
                "Car insurance",
                "Life insurance"
            ],
            "multiple": true,
            "correct": [
                1,
                2
            ],
            "explanation": "It is an of fence not to have an MOT certificate if your vehicle is more than three years old or without car insurance."
        },
        {
            "text": "What was the longest British War with France called?",
            "choices": [
                "The Battle of Bannockburn",
                "The Battle of the Boyne",
                "The Battle of Trafalgar",
                "The Hundred Years War"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "English kings also fought a long war with France, called the Hundred Years War (even though it actually lasted 1 16 years). One of the most famous battles of the Hundred Years War was the Battle of Agincourt in 1415, where King Henry V's vastly outnumbered English army defeated the French. The English left France in the 1450s."
        }
    ]
},
{
    id: "exam45",
    title: "Practice Exam 45",
    questions: [
        {
            "text": "Identify which of these statements is correct?",
            "choices": [
                "During Queen Victoria's reign the British Empire became the largest empire the world has ever seen",
                "During Queen Elizabeth's reign the British Empire became the largest empire the world has ever seen"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "empire the world has ever seen During the Victorian period, the British Empire grew to cover all of India, Australia and large parts of Africa. It became the largest empire the world has ever seen, with an estimated population of more than 400 million people."
        },
        {
            "text": "Which person is Andy Murray?",
            "choices": [
                "A Scottish cyclist",
                "A Scottish tennis player",
                "A Scottish rower",
                "A Scottish runner"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "Andy Murray (1987-) is a Scottish tennis player who in 2012 won the men's singles in the US Open. He is the first British man to win a singles title in a Grand Slam tournament since 1936. In the same year , he won Olympic gold and silver medals."
        },
        {
            "text": "Identify which of these names was Henry VIII and Anne Boleyn's child's name?",
            "choices": [
                "Elizabeth",
                "Mary",
                "Catherine",
                "Edward"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Anne Boleyn was English. She and Henry had one daughter , Elizabeth. Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London."
        },
        {
            "text": "Who appoints the local Chief Constable?",
            "choices": [
                "The Prime Minister",
                "The Monarch",
                "The Speaker",
                "Police and Crime Commissioners"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "PCCs (Police and Crime Commissioners) set local police priorities and the local policing budget. They also appoint the Chief Constable."
        },
        {
            "text": "Who requested to write The Domesday book?",
            "choices": [
                "King Alfred the Great",
                "Kenneth Macalpin",
                "William the Conqueror",
                "Edward I"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "William sent people all over England to draw up lists of all the towns and villages. The people who lived there, who owned the land and what animals they owned were also listed. This was called the Domesday Book. It still exists today and gives a picture of society in England just after the Norman Conquest."
        },
        {
            "text": "Which of the following is MP's responsibility?",
            "choices": [
                "To represent everyone in their constituency",
                "To get as many votes as possible",
                "To point out failures",
                "To represent everyone in the UK"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "MPs have a number of dif ferent responsibilities. They: represent everyone in their constituency , help to create new laws, scrutinise and comment on what the government is doing, debate important national issues."
        },
        {
            "text": "What is the total number of volunteers is The National Trust run by?",
            "choices": [
                "4",
                "3",
                "4500",
                "61000"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "The National Trust was set up by just 3 volunteers. Now over 61,000 people help to run it."
        },
        {
            "text": "Which individual was the first man to be called the 'Prime Minister'?",
            "choices": [
                "Sir Robert Walpole",
                "Clement Attlee",
                "Margaret Thatcher",
                "Winston Churchill"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "The first man to be called 'Prime Minister' was Sir Robert Walpole, who was Prime Minister from 1721 to 1742."
        },
        {
            "text": "What is the total number of years did Charles I try to rule without Parliament?",
            "choices": [
                "11",
                "14",
                "16",
                "20"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "For 1 1 years, Charles I found ways in which to raise money without Parliament's approval but eventually trouble in Scotland meant that he had to recall Parliament."
        },
        {
            "text": "St Augustine led missionaries from Rome, who spread Christianity in the south. Who did he become?",
            "choices": [
                "The first prime minister",
                "The first King of England",
                "The first Viking invader",
                "The first Archbishop of Canterbury"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury (see the Archbishop of Canterbury and the Church in Britain today)."
        },
        {
            "text": "What did the 'Bill of Rights' confirm?",
            "choices": [
                "Kings can administer justice",
                "Parliament's increased power",
                "King's increased power",
                "Kings can collect taxes"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king's power ."
        },
        {
            "text": "What should you do to make a complaint about the Police?",
            "choices": [
                "Write a complaint letter to the House of Commons",
                "Write to your MP",
                "Write to the Chief Constable of the Police force",
                "Complain to the Police force directly"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Anyone can make a complaint about the police by going to a police station or writing to the Chief Constable of the police force involved. Complaints can also be made to an independent body: the Independent Police Complaints Commission in England and Wales, the Police Complaints Commissioner for Scotland or the Police Ombudsman for Northern Ireland."
        },
        {
            "text": "Where did the canal builders come from in the middle ages?",
            "choices": [
                "Holland",
                "Italy",
                "Germany",
                "France"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "People came to England from abroad to trade and also to work. Many had special skills, such as weavers from France, engineers from Germany , glass manufacturers from Italy and canal builders from Holland."
        },
        {
            "text": "Who governs the Church of Scotland?",
            "choices": [
                "Local Authorities",
                "The Pope",
                "Ministers and elders",
                "The Archbishop of Canterbury"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "In Scotland, the national Church is the Church of Scotland, which is a Presbyterian Church. It is governed by ministers and elders. The chairperson of the General Assembly of the Church of Scotland is the Moderator , who is appointed for one year only and often speaks on behalf of that Church."
        },
        {
            "text": "There are charities which may help people who cannot afford to pay for a vet",
            "choices": [
                "True",
                "False"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Vaccinations and medical treatment for animals are available from veterinary surgeons (vets). There are charities which may help people who cannot af ford to pay a vet."
        },
        {
            "text": "James Watt was famous for his work on what?",
            "choices": [
                "Steam Power",
                "Economics",
                "Human nature",
                "Radio"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "James Watt's work on steam power , helped the progress of the Industrial Revolution."
        },
        {
            "text": "In what year did the English settlers first begin to colonise the eastern coast of America?",
            "choices": [
                "In Elizabeth I's time",
                "In Mary I's time",
                "In Diana's time",
                "In William I's time"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "In Elizabeth I's time, English settlers first began to colonise the eastern coast of America. This colonisation, particularly by people who disagreed with the religious views of the next two kings, greatly increased in the next century ."
        },
        {
            "text": "Which of the following is a fundamental principle of British life?",
            "choices": [
                "Intolerance",
                "Individual liberty",
                "Inequality",
                "Extremism"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "The fundamental principles of British life include: Democracy; The rule of law; Individual liberty; Tolerance of those with dif ferent faiths and beliefs; Participation in community life."
        },
        {
            "text": "Identify which of these gardens is located in Wales?",
            "choices": [
                "Bodnant Garden",
                "Sissinghurst",
                "Mount Stewart",
                "Hidcote"
            ],
            "multiple": false,
            "correct": 0,
            "explanation": "Bodnant Garden is in Wales."
        },
        {
            "text": "Which TWO are major political parties in the UK?",
            "choices": [
                "Conservative Party",
                "Republicans",
                "Labour Party",
                "Democrats"
            ],
            "multiple": true,
            "correct": [
                0,
                2
            ],
            "explanation": "The Conservative Party , the Labour Party , the Liberal Democrats are big political parties"
        },
        {
            "text": "Identify which of these athletes is a Paralympian who won gold medals for swimming?",
            "choices": [
                "Jessica Ennis",
                "David Weir",
                "Baroness Tanni Grey-Thompson",
                "Ellie Simmonds"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "Ellie Simmonds (1994-) is a Paralympian who won gold medals for swimming at the 2008 and 2012 Paralympic Games and holds a number of world records. She was the youngest member of the British team at the 2008 Games."
        },
        {
            "text": "There are some MPs (Members of Parliament) who do not represent any of the main political parties",
            "choices": [
                "False",
                "True"
            ],
            "multiple": false,
            "correct": 1,
            "explanation": "There are a few MPs who do not represent any of the main political parties. They are called 'independents' and usually represent an issue important to their constituency ."
        },
        {
            "text": "Which individual was the first Archbishop of Canterbury?",
            "choices": [
                "St Columba",
                "St Patrick",
                "St Augustine",
                "St George"
            ],
            "multiple": false,
            "correct": 2,
            "explanation": "Missionaries from Ireland spread the religion in the north. The most famous of these were St Patrick, who would become the patron saint of Ireland, and St Columba, who founded a monastery on the island of Iona, of f the coast of what is now Scotland. St Augustine led missionaries from Rome, who spread Christianity in the south. St Augustine became the first Archbishop of Canterbury ."
        },
        {
            "text": "What is the total number of national parks are there in England, Wales and Scotland?",
            "choices": [
                "25",
                "8",
                "5",
                "15"
            ],
            "multiple": false,
            "correct": 3,
            "explanation": "There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape."
        }
    ]
}
];
