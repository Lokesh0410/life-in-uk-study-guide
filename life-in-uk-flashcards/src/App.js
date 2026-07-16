import { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import MockExam from "./MockExam";
import { sections } from "./studyGuideData";
import PremiumModal from "./PremiumModal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import LazyCardWrapper from "./LazyCardWrapper";
import Pricing from "./pages/Pricing";
import BritishHistory from "./pages/BritishHistory";
import GovernmentAndLaw from "./pages/GovernmentAndLaw";
import QuickFireChallenge from "./QuickFireChallenge";
import TestDatePicker from "./TestDatePicker";
import ProgressGraph from "./ProgressGraph";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import react-router-dom components
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

// Terms of Service modal
const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-slate-800">Terms of Service & Refund Policy</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-gray-600 space-y-4">
          <p><strong>Last updated: July 2026</strong></p>
          <p>Welcome to <strong>Life in the UK Test Coach</strong> ("we", "us", "our"). By purchasing or using our services, you agree to these terms.</p>
          <h4 className="font-semibold text-gray-800">1. Digital Content & Access</h4>
          <p>Upon payment of the £7.99 premium fee, you are granted immediate, non-transferable access to advanced mock exams, offline cheat sheets, and personal metrics. This is a one-time charge with no recurring fees.</p>
          <h4 className="font-semibold text-gray-800">2. Refund & Pass Guarantee Policy</h4>
          <p>We stand by our material. We offer a <strong>100% Pass Guarantee</strong> under the following conditions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must have completed and passed all 45 mock tests available on our platform prior to your official test date.</li>
            <li>If you still fail the official Life in the UK test, we will issue a full refund of your £7.99 purchase fee.</li>
            <li>To claim, email a copy of your official Home Office fail notification along with your purchase email address to <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 underline">help@lifeinukcoach.co.uk</a> within 90 days of purchase.</li>
          </ul>
          <h4 className="font-semibold text-gray-800">3. Intellectual Property & License Limitation</h4>
          <p>All test questions, system scripts, design assets, and compiled PDFs are intellectual property of our platform. Users may download files solely for personal educational use. Commercial redistribution or sharing account access is prohibited.</p>
          <h4 className="font-semibold text-gray-800">4. Limitation of Liability</h4>
          <p>We provide prep resources. Passing our mock exams does not guarantee passing the official Government test. We are not responsible for any official exam rescheduling fees or application costs.</p>
          <p className="text-xs text-gray-400 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 underline">help@lifeinukcoach.co.uk</a></p>
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-slate-100 text-slate-700 py-2 rounded-lg hover:bg-slate-200 transition font-medium">Close</button>
      </div>
    </div>
  );
};

// Legal Disclaimer modal
const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-slate-800">Legal Disclaimer & Copyright Notice</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-gray-600 space-y-4">
          <p>
            <strong>lifeinukcoach.co.uk</strong> is an independent educational platform
            privately owned and operated. This website is <strong>not affiliated with,
              endorsed by, or connected to the UK Home Office or the UK Government</strong>.
          </p>
          <p>
            The practice questions, study guides, and mock exams provided on this platform
            are intended solely for educational preparation purposes. While we strive to
            replicate authentic exam conditions, passing these mock exams does not guarantee
            success on the official Life in the UK test.
          </p>
          <p>
            <strong>Public Sector Information:</strong> Materials on this website contain
            public sector information licensed under the
            <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
              Open Government Licence v3.0
            </a>.
            Official test guidelines and registration should always be verified via the official
            <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">GOV.UK portal</a>.
          </p>
          <p className="text-xs text-gray-400 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 underline">help@lifeinukcoach.co.uk</a></p>
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-slate-100 text-slate-700 py-2 rounded-lg hover:bg-slate-200 transition font-medium">Close</button>
      </div>
    </div>
  );
};

// Cookie Notice Banner
const CookieBanner = () => {
  const [visible, setVisible] = useState(() => !localStorage.getItem("lifeInUkCookieAccepted"));

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("lifeInUkCookieAccepted", "true");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-slate-900 text-white p-4 rounded-xl shadow-2xl z-50 border border-slate-800 flex flex-col gap-3">
      <p className="text-xs leading-relaxed text-slate-300">
        🍪 We use essential browser local storage to save your flashcard learning status, completed mock exam history, and premium license activation. No tracking cookies are used.
      </p>
      <div className="flex justify-end">
        <button onClick={accept} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-lg font-bold transition">
          Accept &amp; Continue
        </button>
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
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");
  const [redeemError, setRedeemError] = useState("");
  const [showQuickFire, setShowQuickFire] = useState(false);
  const [mockResults, setMockResults] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("lifeInUkMockResults") || "[]");
    } catch {
      return [];
    }
  });

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

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
        <style>{`
          .perspective { perspective: 1000px; }
          .transform-style { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}</style>

        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">✅ Pass Your Life in the UK Test First Time!</h1>
            <p className="text-slate-700 font-medium">
              Access 45 realistic mock exams, instant feedback, and a structured study approach.
            </p>
            <p className="text-xs text-slate-500 mt-1">
              The ultimate online platform for your British Citizenship and ILR 2026 preparation.
            </p>
            <nav className="mt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full font-medium transition ${view === "flashcards" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-300"
                  }`}
                onClick={() => setView("flashcards")}
              >
                📚 Flashcards
              </Link>
              <Link
                to="/mock-exams"
                className={`px-4 py-2 rounded-full font-medium transition ${view === "mockExam" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-300"
                  }`}
                onClick={() => setView("mockExam")}
              >
                📝 Mock Exams
              </Link>
              <Link
                to="/pricing"
                className={`px-4 py-2 rounded-full font-medium transition ${view === "pricing" ? "bg-indigo-600 text-white" : "bg-white text-indigo-600 border border-indigo-300"
                  }`}
                onClick={() => setView("pricing")}
              >
                ⭐ Pricing
              </Link>
              <button
                onClick={() => setShowQuickFire(true)}
                className="px-4 py-2 rounded-full font-medium transition bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:shadow-lg shadow-sm font-bold"
              >
                ⚡ Quick-Fire
              </button>
              <button
                onClick={handleDownloadCheatSheet}
                className="px-4 py-2 rounded-full font-medium transition bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50 shadow-sm"
              >
                {isPremium ? "📥 Download Cheat Sheet" : "✨ Unlock Cheat Sheet"}
              </button>
            </nav>

            <div className="mt-4 flex flex-wrap justify-center gap-3 items-center">
              <TestDatePicker />
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

          <Routes>
            <Route path="/" element={(
              <>
                {/* Progress Graph for free users (sneak peek) */}
                {mockResults.length >= 2 && (
                  <div className="mb-8 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-slate-800">📈 Your Progress</h3>
                      {!isPremium && (
                        <button
                          onClick={() => setShowPremiumModal(true)}
                          className="text-xs text-indigo-600 hover:text-indigo-800 font-medium underline"
                        >
                          Unlock full analytics 🔒
                        </button>
                      )}
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <div className="w-full max-w-xs">
                        <ProgressGraph results={mockResults} maxResults={5} />
                      </div>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>📊 Last {Math.min(mockResults.length, 5)} exams</p>
                        <p>🏆 Best: <strong>{Math.max(...mockResults.map(r => r.score))}%</strong></p>
                        <p>📈 Average: <strong>{(mockResults.reduce((s, r) => s + r.score, 0) / mockResults.length).toFixed(1)}%</strong></p>
                        {!isPremium && (
                          <p className="text-xs text-amber-600 mt-2">⭐ Premium unlocks detailed analytics, confidence score & study plan</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-4 text-center text-sm text-gray-500">
                  📚 Browse all flashcards by topic below • Click any card to flip
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
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold transition ${isAllRead
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
              </>
            )} />
            <Route path="/mock-exams" element={(
              <MockExam
                onBack={() => setView("flashcards")}
                isPremium={isPremium}
                setIsPremium={setIsPremium}
                onUnlockPremium={() => setShowPremiumModal(true)}
                onResultsUpdate={(results) => setMockResults(results)}
              />
            )} />
            <Route path="/pricing" element={<Pricing onUnlockPremium={() => setShowPremiumModal(true)} isPremium={isPremium} />} />
            <Route path="/study-guide/british-history" element={<BritishHistory />} />
            <Route path="/study-guide/government-and-law" element={<GovernmentAndLaw />} />
          </Routes>

          {/* Testimonials shown to everyone at the bottom */}
          <TestimonialsCarousel />

          {/* Global Footer (shows on all views) */}
          <footer className="text-center py-10 mt-12 border-t border-slate-200 text-slate-400 text-sm space-y-4">
            <p className="font-semibold text-slate-500">🎓 Based on official Life in the UK Handbook (3rd edition) & mock test patterns. Good luck! 🇬🇧</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
              <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-500 hover:text-indigo-700 transition">✉️ Help & Support (help@lifeinukcoach.co.uk)</a>
              <button onClick={() => setShowTermsModal(true)} className="text-indigo-500 hover:text-indigo-700 transition">📜 Terms of Service & Refund Guarantee</button>
              <button onClick={() => setShowPrivacyModal(true)} className="text-indigo-500 hover:text-indigo-700 transition">🔒 Privacy Policy</button>
              <button onClick={() => setShowDisclaimerModal(true)} className="text-indigo-500 hover:text-indigo-700 transition">⚖️ Legal Disclaimer</button>
              <button onClick={() => setShowPremiumModal(true)} className="text-indigo-500 hover:text-indigo-700 transition">⭐ Restore Premium</button>
            </div>
            <div className="text-[11px] text-slate-400 max-w-2xl mx-auto space-y-2 pt-2 border-t border-slate-100">
              <p>This website is an independent educational platform. It is <strong>not affiliated with, endorsed by, or connected to the UK Home Office or the UK Government</strong>.</p>
              <p>Contains public sector information licensed under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-500 transition">Open Government Licence v3.0</a>.</p>
            </div>
          </footer>
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

        <TermsModal
          isOpen={showTermsModal}
          onClose={() => setShowTermsModal(false)}
        />

        <DisclaimerModal
          isOpen={showDisclaimerModal}
          onClose={() => setShowDisclaimerModal(false)}
        />

        <CookieBanner />

        {showQuickFire && (
          <QuickFireChallenge onClose={() => setShowQuickFire(false)} />
        )}
      </div>
    </Router>
  );
}