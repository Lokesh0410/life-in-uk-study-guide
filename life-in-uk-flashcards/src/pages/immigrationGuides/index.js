// src/pages/immigrationGuides/index.js
// Aggregator for all immigration guide data files

import ilrGuide from "../ilrGuideBook";
import citizenshipGuide from "../citizenshipGuide";
import skilledWorkerILR from "../skilledWorkerILR";
import spouseVisaILR from "../spouseVisaILR";
import globalTalentILR from "../globalTalentILR";
import longResidenceILR from "../longResidenceILR";
import englishRequirement from "../englishRequirement";
import lifeInUKRequirement from "../lifeInUKRequirement";
import ukvcas from "../ukvcas";
import evisa from "../evisa";
import citizenshipCeremony from "../citizenshipCeremony";
import britishPassport from "../britishPassport";

// All guides in a single array
const allGuides = [
    ilrGuide,
    citizenshipGuide,
    skilledWorkerILR,
    spouseVisaILR,
    globalTalentILR,
    longResidenceILR,
    englishRequirement,
    lifeInUKRequirement,
    ukvcas,
    evisa,
    citizenshipCeremony,
    britishPassport,
];

// Lookup by slug for route matching
const guideBySlug = {};
allGuides.forEach((guide) => {
    guideBySlug[guide.slug] = guide;
});

export { allGuides, guideBySlug };
export default allGuides;
