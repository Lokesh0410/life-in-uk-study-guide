// src/utils/generateLeadMagnet.js
// Free 1-page teaser PDF (Key Dates + Patron Saints) used as an email-gated
// lead magnet. Deliberately smaller than the premium cheat sheet — a taste
// of the content quality, not the full product. Facts mirror the live
// KeyDatesTimeline.js and PatronSaintsAndSymbols.js pages exactly.
import { cleanPDF } from './generateCheatSheet';
import { TOP_KEY_DATES, PATRON_SAINTS } from './leadMagnetData';

export const generateLeadMagnet = (doc, autoTable) => {
    const pageW = doc.internal.pageSize.getWidth();
    const margin = 14;

    doc.setFontSize(22);
    doc.setTextColor(63, 81, 181);
    doc.text(cleanPDF('Life in the UK: Free Cheat Sheet'), pageW / 2, 18, { align: 'center' });
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text(cleanPDF('Key Dates & Patron Saints, handbook-verified'), pageW / 2, 25, { align: 'center' });

    let y = 34;

    doc.setFontSize(14);
    doc.setTextColor(63, 81, 181);
    doc.text(cleanPDF('Key Dates'), margin, y);
    y += 4;

    autoTable(doc, {
        startY: y,
        head: [['Year', 'Event', 'What it means']],
        body: TOP_KEY_DATES.map(row => row.map(cleanPDF)),
        theme: 'grid',
        styles: { fontSize: 7.5, cellPadding: 1.5 },
        headStyles: { fillColor: [63, 81, 181] },
        margin: { left: margin, right: margin },
    });

    y = doc.lastAutoTable.finalY + 8;

    doc.setFontSize(14);
    doc.setTextColor(63, 81, 181);
    doc.text(cleanPDF('Patron Saints of the UK'), margin, y);
    y += 4;

    autoTable(doc, {
        startY: y,
        head: [['Nation', 'Saint', 'Day', 'Status']],
        body: PATRON_SAINTS.map(row => row.map(cleanPDF)),
        theme: 'grid',
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [63, 81, 181] },
        margin: { left: margin, right: margin },
    });

    y = doc.lastAutoTable.finalY + 12;

    doc.setFillColor(238, 242, 255);
    doc.roundedRect(margin, y, pageW - margin * 2, 22, 3, 3, 'F');
    doc.setFontSize(10);
    doc.setTextColor(63, 81, 181);
    doc.text(cleanPDF('Want the full study guide?'), margin + 5, y + 8);
    doc.setFontSize(8.5);
    doc.setTextColor(80, 80, 80);
    doc.text(cleanPDF('1,000+ practice questions, all 45 mock exams, and the complete offline cheat sheet.'), margin + 5, y + 14);
    doc.setTextColor(63, 81, 181);
    doc.text(cleanPDF('Unlock Premium (GBP 7.99) -- lifeinukcoach.co.uk/pricing'), margin + 5, y + 19.5);
};
