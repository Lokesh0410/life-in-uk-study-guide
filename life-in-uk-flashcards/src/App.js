import { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import MockExam from "./MockExam";
import { sections } from "./studyGuideData";
import PremiumModal from "./PremiumModal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import LazyCardWrapper from "./LazyCardWrapper";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import confetti from "canvas-confetti";

const PREMIUM_KEY = 'lifeInUkPremium';

// Success dialog shown after redeem code / payment
const PremiumSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-8 shadow-xl text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-indigo-800 mb-2">Premium Unlocked!</h3>
        <p className="text-gray-600 mb-2">You now have full access to:</p>
        <ul className="text-sm text-gray-700 mb-6 space-y-1 text-left mx-auto inline-block">
          <li>✅ All 45 Mock Exams</li>
          <li>✅ Performance Dashboard & Analytics</li>
          <li>✅ Downloadable Offline Cheat Sheet</li>
          <li>✅ 5-Day Guaranteed Pass Path</li>
        </ul>
        <button
          onClick={onClose}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition shadow-md"
        >
          Start Studying 🚀
        </button>
      </div>
    </div>
  );
};

// Privacy Policy modal
const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-slate-800">Privacy Policy</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-gray-600 space-y-4">
          <p><strong>Last updated: July 2026</strong></p>
          <p>This Privacy Policy explains how <strong>Life in the UK Study Guide</strong> ("we", "us") handles your information when you use our website.</p>
          <h4 className="font-semibold text-gray-800">What we collect</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Payment information:</strong> When you purchase Premium, your payment is processed securely by <strong>Stripe</strong>. We do not store your card details. Stripe stores your email address to process the transaction.</li>
            <li><strong>Local data:</strong> Your exam results and premium status are stored in your browser's localStorage only — we do not store this on any server.</li>
            <li><strong>Contact form:</strong> If you contact us via the in-app form, your name, email, and message are sent to us via Formspree.</li>
          </ul>
          <h4 className="font-semibold text-gray-800">How we use it</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process and verify your Premium purchase</li>
            <li>To respond to support enquiries</li>
            <li>We do not sell, share, or use your data for advertising</li>
          </ul>
          <h4 className="font-semibold text-gray-800">Your rights (GDPR)</h4>
          <p>You have the right to request deletion of any personal data we hold. Email us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 underline">help@lifeinukcoach.co.uk</a> and we will respond within 30 days.</p>
          <h4 className="font-semibold text-gray-800">Cookies</h4>
          <p>We use only essential browser localStorage. No tracking cookies or third-party analytics scripts are used beyond standard Netlify and Stripe integrations.</p>
          <p className="text-xs text-gray-400 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 underline">help@lifeinukcoach.co.uk</a></p>
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-slate-100 text-slate-700 py-2 rounded-lg hover:bg-slate-200 transition font-medium">Close</button>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState("flashcards"); // "flashcards" or "mockExam"
  const [isPremium, setIsPremium] = useState(() => localStorage.getItem(PREMIUM_KEY) === "true");
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showPremiumSuccess, setShowPremiumSuccess] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");
  const [redeemError, setRedeemError] = useState("");

  // Tracking read flashcards (key: 'sectionIndex-cardIndex')
  const [readCards, setReadCards] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lifeInUkReadCards") || "{}");
    } catch {
      return {};
    }
  });

  // Tracking collapsed flashcard categories
  const [collapsedSections, setCollapsedSections] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lifeInUkCollapsedSections") || "{}");
    } catch {
      return {};
    }
  });

  const handleToggleRead = (sectionIdx, cardIdx, isReadVal) => {
    const key = `${sectionIdx}-${cardIdx}`;
    const newReadCards = { ...readCards };
    if (isReadVal) {
      newReadCards[key] = true;
    } else {
      delete newReadCards[key];
    }
    setReadCards(newReadCards);
    localStorage.setItem("lifeInUkReadCards", JSON.stringify(newReadCards));
  };

  const handleToggleCollapse = (sectionIdx) => {
    const newCollapsed = { ...collapsedSections };
    newCollapsed[sectionIdx] = !newCollapsed[sectionIdx];
    setCollapsedSections(newCollapsed);
    localStorage.setItem("lifeInUkCollapsedSections", JSON.stringify(newCollapsed));
  };

  const getReadCount = (section, sectionIdx) => {
    return section.cards.reduce((sum, _, cardIdx) => {
      return sum + (readCards[`${sectionIdx}-${cardIdx}`] ? 1 : 0);
    }, 0);
  };


  const triggerConfetti = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('premium') === 'true') {
      localStorage.setItem(PREMIUM_KEY, 'true');
      setIsPremium(true);
      triggerConfetti();
      setTimeout(triggerConfetti, 600);
      setShowPremiumSuccess(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleSubscribe = async () => {
    try {
      const response = await fetch('/.netlify/functions/createCheckout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error('Checkout error response:', err);
        alert(err.error || 'Error starting checkout. Please try again.');
        return;
      }
      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      } else {
        alert('Error starting checkout. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Sorry, there was an error. Please contact support.');
    }
  };

  const handleRedeemCode = () => {
    if (redeemCode.trim().toLowerCase() === 'premium2026') {
      localStorage.setItem(PREMIUM_KEY, 'true');
      setIsPremium(true);
      setRedeemError('');
      setShowPremiumModal(false);
      triggerConfetti();
      setTimeout(triggerConfetti, 600);
      setShowPremiumSuccess(true);
    } else {
      setRedeemError('Invalid code. Please contact us to get a valid code.');
    }
  };

  // Called by PremiumModal after a successful Stripe email verification
  const handleRestoreAccess = () => {
    localStorage.setItem(PREMIUM_KEY, 'true');
    setIsPremium(true);
    setShowPremiumModal(false);
    triggerConfetti();
    setTimeout(triggerConfetti, 600);
    setShowPremiumSuccess(true);
  };

  const handleDownloadCheatSheet = () => {
    if (!isPremium) {
      setShowPremiumModal(true);
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(63, 81, 181);
    doc.text("Life in the UK 2026 - Premium Study Guide", 14, 20);
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.text("Exclusive offline review material for premium users.", 14, 28);
    let startY = 35;

    sections.forEach((section, index) => {
      doc.setFontSize(14);
      doc.setTextColor(33, 33, 33);
      doc.text(section.title.replace(/[^\x20-\x7E\n\r]/g, "").trim(), 14, startY);
      startY += 6;
      const tableData = section.cards.map(card => [
        card.front.replace(/[^\x20-\x7E\n\r]/g, "").trim(),
        card.back.replace(/[^\x20-\x7E\n\r]/g, "").trim()
      ]);
      autoTable(doc, {
        startY: startY,
        head: [['Topic / Question', 'Answer / Details']],
        body: tableData,
        theme: 'striped',
        headStyles: { fillColor: [63, 81, 181] },
        styles: { fontSize: 10, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 70 },
          1: { cellWidth: 'auto' }
        },
        margin: { top: 10 }
      });
      startY = doc.lastAutoTable.finalY + 15;
      if (startY > 260 && index < sections.length - 1) {
        doc.addPage();
        startY = 20;
      }
    });
    doc.save("Life_in_the_UK_Cheat_Sheet_2026.pdf");
  };

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
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">🇬🇧 Life in the UK</h1>
          <p className="text-slate-500 font-medium">Master the official test, one flip at a time.</p>
          <p className="text-xs text-slate-400 mt-1">The ultimate study guide for your British Citizenship and ILR 2026 preparation.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setView("flashcards")}
              className={`px-4 py-2 rounded-full font-medium transition ${view === "flashcards" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-300"
                }`}
            >
              📚 Flashcards
            </button>
            <button
              onClick={() => setView("mockExam")}
              className={`px-4 py-2 rounded-full font-medium transition ${view === "mockExam" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-300"
                }`}
            >
              📝 Mock Exams
            </button>
            <button
              onClick={handleDownloadCheatSheet}
              className="px-4 py-2 rounded-full font-medium transition bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 shadow-sm"
            >
              {isPremium ? "📥 Download Cheat Sheet" : "✨ Unlock Cheat Sheet"}
            </button>
          </div>

          {!isPremium && (
            <div className="mt-6 inline-block bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-4 max-w-lg mx-auto shadow-sm w-full">
              <p className="text-sm text-slate-700 font-medium mb-1">
                🚀 Want to pass in 5 days?
              </p>
              <p className="text-xs text-slate-500 mb-3">
                Get our personalized 5-day guaranteed pass path, unlocks all 45 mock exams, and downloads detailed cheat sheets.
              </p>
              <button
                onClick={() => setShowPremiumModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-lg font-bold transition shadow-sm"
              >
                Get 5-Day Guaranteed Path (£7.99)
              </button>
            </div>
          )}
        </header>

        {view === "flashcards" ? (
          <>
            <div className="mb-4 text-center text-sm text-gray-500">
              {totalCards} flashcards • Click any card to flip
            </div>
            {sections.map((section, i) => {
              const readCount = getReadCount(section, i);
              const totalCount = section.cards.length;
              const isAllRead = readCount === totalCount;
              const isCollapsed = !!collapsedSections[i];

              return (
                <section key={i} className="mb-12 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <div 
                    onClick={() => handleToggleCollapse(i)} 
                    className="flex justify-between items-center cursor-pointer pb-2 border-b-2 border-slate-100 mb-6 select-none"
                  >
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-bold text-slate-800">
                        {section.title}
                      </h2>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold transition ${
                        isAllRead 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      }`}>
                        {readCount} / {totalCount} read {isAllRead && "🎉"}
                      </span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleCollapse(i);
                      }}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg border border-indigo-100 shadow-sm"
                    >
                      {isCollapsed ? "Expand 📂" : "Collapse 📁"}
                    </button>
                  </div>
                  
                  {!isCollapsed && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.cards.map((card, idx) => {
                        const isRead = !!readCards[`${i}-${idx}`];
                        return (
                          <LazyCardWrapper key={idx}>
                            <FlashCard 
                              card={card} 
                              index={idx + i * 100} 
                              isRead={isRead} 
                              onToggleRead={(isReadVal) => handleToggleRead(i, idx, isReadVal)}
                            />
                          </LazyCardWrapper>
                        );
                      })}
                    </div>
                  )}
                </section>
              );
            })}
            <footer className="text-center py-10 border-t border-slate-200 text-slate-400 text-sm">
              🎓 Based on official Life in the UK Handbook (3rd edition) &amp; mock test patterns. Good luck! 🇬🇧
              <div className="mt-3 flex justify-center gap-4 text-xs">
                <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-400 hover:text-indigo-600 transition">✉️ Contact Us</a>
                <button onClick={() => setShowPrivacyModal(true)} className="text-indigo-400 hover:text-indigo-600 transition">🔒 Privacy Policy</button>
                <button onClick={() => setShowPremiumModal(true)} className="text-indigo-400 hover:text-indigo-600 transition">⭐ Restore Premium</button>
              </div>
            </footer>
          </>
        ) : (
          <MockExam
            onBack={() => setView("flashcards")}
            isPremium={isPremium}
            setIsPremium={setIsPremium}
            onUnlockPremium={() => setShowPremiumModal(true)}
          />
        )}

        {/* Testimonials shown to everyone at the bottom */}
        <TestimonialsCarousel />
      </div>

      <PremiumModal
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
        redeemCode={redeemCode}
        setRedeemCode={setRedeemCode}
        redeemError={redeemError}
        onRedeem={handleRedeemCode}
        onSubscribe={handleSubscribe}
        onRestoreAccess={handleRestoreAccess}
      />

      <PremiumSuccessModal
        isOpen={showPremiumSuccess}
        onClose={() => setShowPremiumSuccess(false)}
      />

      <PrivacyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
    </div>
  );
}