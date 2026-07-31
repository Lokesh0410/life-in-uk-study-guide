import { useState, useEffect, Suspense, lazy } from "react";
import './App.css';
import FlashCard from "./FlashCard";
import { sections } from "./studyGuideData";
import PremiumModal from "./PremiumModal";
import TestimonialsCarousel from "./TestimonialsCarousel";
import LazyCardWrapper from "./LazyCardWrapper";
import Pricing from "./pages/Pricing";
import StudyGuideIndex from "./pages/StudyGuideIndex";
import BritishHistory from "./pages/BritishHistory";
import CultureAndTraditions from "./pages/CultureAndTraditions";
import PatronSaintsAndSymbols from "./pages/PatronSaintsAndSymbols";
import FestivalsAndCelebrations from "./pages/FestivalsAndCelebrations";
import SportsAndTraditions from "./pages/SportsAndTraditions";
import ModernBritain from "./pages/ModernBritain";
import HumanRightsAndCitizenship from "./pages/HumanRightsAndCitizenship";
import TaxationAndDriving from "./pages/TaxationAndDriving";
import BritainInTheWorld from "./pages/BritainInTheWorld";
import MonarchsTimeline from "./pages/MonarchsTimeline";
import PeopleMatrix from "./pages/PeopleMatrix";
import InventionsTimeline from "./pages/InventionsTimeline";
import KeyDatesTimeline from "./pages/KeyDatesTimeline";
import GovernmentAndLaw from "./pages/GovernmentAndLaw";
import ElectionsCheatSheet from "./pages/ElectionsCheatSheet";
import DevolvedNations from "./pages/DevolvedNations";
import CourtHierarchy from "./pages/CourtHierarchy";
import ILRGuide from "./pages/ILRGuide";
import GuidePage from "./pages/GuidePage";
import CheatSheet from "./pages/CheatSheet";
import FreeCheatSheet from "./pages/FreeCheatSheet";
import { guideBySlug } from "./pages/immigrationGuides/index";
import TestDatePicker from "./TestDatePicker";
import ProgressGraph from "./ProgressGraph";
import ErrorBoundary from "./ErrorBoundary";
import { useDarkMode } from "./useDarkMode";
import useDocumentMeta from "./useDocumentMeta";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigationType } from "react-router-dom"; // Import react-router-dom components
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import confetti from "canvas-confetti";
import { safeGetItem, safeSetItem } from "./safeStorage";
import { generateCheatSheet } from "./utils/generateCheatSheet";

// Code-split: both pull in mockExamsData.js (14k+ lines), so keep them
// out of the main bundle — most visitors (SEO/guide-page traffic) never touch either.
const MockExam = lazy(() => import("./MockExam"));
const QuickFireChallenge = lazy(() => import("./QuickFireChallenge"));

const PREMIUM_KEY = 'lifeInUkPremium';

// Success dialog shown after redeem code / payment
const PremiumSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-sm w-full p-8 shadow-xl text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400 mb-2">Premium Unlocked!</h3>
        <p className="text-gray-600 dark:text-slate-300 mb-2">You now have full access to:</p>
        <ul className="text-sm text-gray-700 dark:text-slate-300 mb-6 space-y-1 text-left mx-auto inline-block">
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
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Privacy Policy</h3>
          <button onClick={onClose} className="text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-gray-600 dark:text-slate-300 space-y-4">
          <p><strong>Last updated: July 2026</strong></p>
          <p>This Privacy Policy explains how <strong>Life in the UK Study Guide</strong> ("we", "us") handles your information when you use our website.</p>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">What we collect</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Payment information:</strong> When you purchase Premium, your payment is processed securely by <strong>Stripe</strong>. We do not store your card details. Stripe stores your email address to process the transaction.</li>
            <li><strong>Local data:</strong> Your exam results and premium status are stored in your browser's localStorage only. We do not store this on any server.</li>
            <li><strong>Contact form:</strong> If you contact us via the in-app form, your name, email, and message are sent to us via Formspree.</li>
          </ul>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">How we use it</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>To process and verify your Premium purchase</li>
            <li>To respond to support enquiries</li>
            <li>We do not sell, share, or use your data for advertising</li>
          </ul>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">Your rights (GDPR)</h4>
          <p>You have the right to request deletion of any personal data we hold. Email us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a> and we will respond within 30 days.</p>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">Cookies</h4>
          <p>We use only essential browser localStorage. No tracking cookies or third-party analytics scripts are used beyond standard Netlify and Stripe integrations.</p>
          <p className="text-xs text-gray-400 dark:text-slate-500 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a></p>
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition font-medium">Close</button>
      </div>
    </div>
  );
};

// Terms of Service modal
const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Terms of Service & Refund Policy</h3>
          <button onClick={onClose} className="text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-gray-600 dark:text-slate-300 space-y-4">
          <p><strong>Last updated: July 2026</strong></p>
          <p>Welcome to <strong>Life in the UK Test Coach</strong> ("we", "us", "our"). By purchasing or using our services, you agree to these terms.</p>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">1. Digital Content & Access</h4>
          <p>Upon payment of the £7.99 premium fee, you are granted immediate, non-transferable access to advanced mock exams, offline cheat sheets, and personal metrics. This is a one-time charge with no recurring fees.</p>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">2. Refund & Pass Guarantee Policy</h4>
          <p>We stand by our material. We offer a <strong>100% Pass Guarantee</strong> under the following conditions:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You must have completed and passed all 45 mock tests available on our platform prior to your official test date.</li>
            <li>If you still fail the official Life in the UK test, we will issue a full refund of your £7.99 purchase fee.</li>
            <li>To claim, email a copy of your official Home Office fail notification along with your purchase email address to <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a> within 90 days of purchase.</li>
          </ul>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">3. Intellectual Property & License Limitation</h4>
          <p>All test questions, system scripts, design assets, and compiled PDFs are intellectual property of our platform. Users may download files solely for personal educational use. Commercial redistribution or sharing account access is prohibited.</p>
          <h4 className="font-semibold text-gray-800 dark:text-slate-200">4. Limitation of Liability</h4>
          <p>We provide prep resources. Passing our mock exams does not guarantee passing the official Government test. We are not responsible for any official exam rescheduling fees or application costs.</p>
          <p className="text-xs text-gray-400 dark:text-slate-500 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a></p>
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition font-medium">Close</button>
      </div>
    </div>
  );
};

// Legal Disclaimer modal
const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-xl max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Legal Disclaimer & Copyright Notice</h3>
          <button onClick={onClose} className="text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200 text-2xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-gray-600 dark:text-slate-300 space-y-4">
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
            <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">
              Open Government Licence v3.0
            </a>.
            Official test guidelines and registration should always be verified via the official
            <a href="https://www.gov.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline">GOV.UK portal</a>.
          </p>
          <p className="text-xs text-gray-400 dark:text-slate-500 pt-2">Questions? Contact us at <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-600 dark:text-indigo-400 underline">help@lifeinukcoach.co.uk</a></p>
        </div>
        <button onClick={onClose} className="mt-6 w-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition font-medium">Close</button>
      </div>
    </div>
  );
};

// Cookie Notice Banner
const CookieBanner = () => {
  const [visible, setVisible] = useState(() => !safeGetItem("lifeInUkCookieAccepted"));

  if (!visible) return null;

  const accept = () => {
    safeSetItem("lifeInUkCookieAccepted", "true");
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


// Gated wrapper for the /cheat-sheet route: shows a paywall for free users,
// otherwise renders the full cheat sheet with a working PDF download button.
function CheatSheetPage({ isPremium, onUnlockPremium, onDownloadPdf }) {
  if (!isPremium) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="text-6xl mb-4">🔒</div>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Premium Cheat Sheet is locked</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          Unlock the full visual quick-reference guide: timeline, government structure, key dates, monarchs, patron saints, British values, and more, plus a downloadable PDF version.
        </p>
        <button
          onClick={onUnlockPremium}
          className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition"
        >
          Unlock Premium Insights (£7.99)
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto flex justify-end mb-4">
        <button
          onClick={onDownloadPdf}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition"
        >
          📥 Download PDF
        </button>
      </div>
      <CheatSheet />
    </div>
  );
}

// Remembers each page's scroll position across navigations (Link clicks and
// browser back/forward alike), so returning to a page you've visited before
// restores where you were instead of always snapping to the top.
const scrollPositions = new Map();

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const saved = scrollPositions.get(pathname);
    if (saved !== undefined) {
      window.scrollTo(0, saved);
    } else if (navigationType !== "POP") {
      window.scrollTo(0, 0);
    }

    return () => {
      scrollPositions.set(pathname, window.scrollY);
    };
  }, [pathname, navigationType]);

  useDocumentMeta({
    title: pathname === "/" ? "Life in the UK Mock Test 2026 | Free Practice Questions & Flashcards" : undefined,
    description: pathname === "/" ? "Life in the UK Mock Test with 220+ free flashcards and 3 free mock exams. Practice real test questions, track your progress, and get a 5-day guaranteed pass path for British Citizenship and ILR 2026." : undefined,
    path: pathname === "/" ? "/" : undefined,
  });

  return null;
}

function PromoBanner({ isPremium, onUnlockPremium }) {
  const { pathname } = useLocation();

  if (isPremium) return null;

  if (pathname === "/") {
    return (
      <div className="mt-6 inline-block bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-100 dark:border-indigo-900 rounded-xl p-4 max-w-lg mx-auto shadow-sm w-full">
        <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
          📊 The national first-time pass rate is around 70–75%: preparation makes the difference.
        </p>
        <p className="text-sm text-slate-700 dark:text-slate-200 font-medium mb-1">
          🚀 Want to pass in 5 days?
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          Get our personalized 5-day guaranteed pass path, unlocks all 45 mock exams, and downloads detailed cheat sheets.
        </p>
        <button
          onClick={onUnlockPremium}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-4 py-2 rounded-lg font-bold transition shadow-sm"
        >
          Get 5-Day Guaranteed Path (£7.99)
        </button>
      </div>
    );
  }

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={onUnlockPremium}
        className="inline-flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-300 text-[11px] font-semibold px-3 py-1.5 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition shadow-sm"
      >
        🚀 Get 5-Day Guaranteed Path (£7.99)
      </button>
    </div>
  );
}

// Nav pill/tab whose active state is derived from the current route rather
// than the legacy `view` state var, so it stays in sync for every page
// (including ones like Study Guide that don't call setView).
function NavPill({ to, activeClass, inactiveClass, onClick, children }) {
  const { pathname } = useLocation();
  const isActive = to === "/" ? pathname === "/" : pathname.startsWith(to);
  return (
    <Link to={to} onClick={onClick} className={isActive ? activeClass : inactiveClass}>
      {children}
    </Link>
  );
}

export default function App() {
  const { isDark, toggleTheme } = useDarkMode();
  const [isPremium, setIsPremium] = useState(() => safeGetItem(PREMIUM_KEY) === "true");
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showPremiumSuccess, setShowPremiumSuccess] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");
  const [redeemError, setRedeemError] = useState("");
  const [showQuickFire, setShowQuickFire] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [showMobileMoreSheet, setShowMobileMoreSheet] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [mockResults, setMockResults] = useState(() => {
    try {
      return safeGetItem("lifeInUkMockResults", []);
    } catch {
      return [];
    }
  });

  // Tracking read flashcards (key: 'sectionIndex-cardIndex')
  const [readCards, setReadCards] = useState(() => {
    try {
      return safeGetItem("lifeInUkReadCards", {});
    } catch {
      return {};
    }
  });

  // Tracking collapsed flashcard categories
  const [collapsedSections, setCollapsedSections] = useState(() => {
    try {
      return safeGetItem("lifeInUkCollapsedSections", {});
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
    safeSetItem("lifeInUkReadCards", newReadCards);
  };

  const handleToggleCollapse = (sectionIdx) => {
    const newCollapsed = { ...collapsedSections };
    newCollapsed[sectionIdx] = !newCollapsed[sectionIdx];
    setCollapsedSections(newCollapsed);
    safeSetItem("lifeInUkCollapsedSections", newCollapsed);
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
    const sessionId = urlParams.get('session_id');
    
    // Server-side session verification to prevent ?premium=true bypass
    if (sessionId) {
      fetch('/.netlify/functions/verifySession', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.isPremium) {
            safeSetItem(PREMIUM_KEY, 'true');
            setIsPremium(true);
            triggerConfetti();
            setTimeout(triggerConfetti, 600);
            setShowPremiumSuccess(true);
          }
        })
        .catch((err) => console.error('Session verification error:', err))
        .finally(() => {
          window.history.replaceState({}, document.title, window.location.pathname);
        });
    } else if (urlParams.get('premium') === 'true') {
      // Clean query param if session_id is missing
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleSubscribe = async () => {
    if (isCheckoutLoading) return;
    setIsCheckoutLoading(true);
    try {
      const response = await fetch('/.netlify/functions/createCheckout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error('Checkout error response:', err);
        alert(err.error || 'Error starting checkout. Please try again.');
        setIsCheckoutLoading(false);
        return;
      }
      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      } else {
        alert('Error starting checkout. Please try again.');
        setIsCheckoutLoading(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Sorry, there was an error. Please contact support.');
      setIsCheckoutLoading(false);
    }
  };

  const handleRedeemCode = async () => {
    if (!redeemCode.trim()) return;

    // Local development bypass for testing
    const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const trimmedCode = redeemCode.trim();
    const devCodes = ['premium2026', 'devtest2026'];

    if (isLocalDev && devCodes.includes(trimmedCode.toLowerCase())) {
      safeSetItem(PREMIUM_KEY, 'true');
      setIsPremium(true);
      setRedeemError('');
      setShowPremiumModal(false);
      triggerConfetti();
      setTimeout(triggerConfetti, 600);
      setShowPremiumSuccess(true);
      return;
    }

    try {
      const res = await fetch('/.netlify/functions/validateRedeemCode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: trimmedCode }),
      });
      const data = await res.json();
      if (data.valid) {
        safeSetItem(PREMIUM_KEY, 'true');
        setIsPremium(true);
        setRedeemError('');
        setShowPremiumModal(false);
        triggerConfetti();
        setTimeout(triggerConfetti, 600);
        setShowPremiumSuccess(true);
      } else {
        setRedeemError(data.error || 'Invalid code. Please contact us to get a valid code.');
      }
    } catch (err) {
      setRedeemError('Network error. Please try again.');
    }
  };

  // Called by PremiumModal after a successful Stripe email verification
  const handleRestoreAccess = () => {
    safeSetItem(PREMIUM_KEY, 'true');
    setIsPremium(true);
    setShowPremiumModal(false);
    triggerConfetti();
    setTimeout(triggerConfetti, 600);
    setShowPremiumSuccess(true);
  };

  // ----- Enhanced Premium Cheat Sheet -----
  const handleDownloadCheatSheet = () => {
    if (!isPremium) {
      setShowPremiumModal(true);
      return;
    }

    const doc = new jsPDF();
    generateCheatSheet(doc, sections, autoTable);
  };

  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 md:p-8 pb-20 md:pb-8 font-sans transition-colors">

          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-6">
              <div className="flex justify-end mb-2">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition shadow-sm"
                >
                  {isDark ? "☀️" : "🌙"}
                </button>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-2">✅ Pass First Time with Your AI Coach</h1>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                45 mock exams that adapt to your weak spots, so every minute of practice counts.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                The only adaptive prep platform for British Citizenship and ILR 2026.
              </p>
              <div className="mt-4 flex justify-center">
                <TestDatePicker />
              </div>
              {/* Desktop nav: pill row (hidden on mobile, replaced by bottom tab bar) */}
              <nav className="hidden md:flex mt-4 flex-wrap justify-center gap-4">
                <NavPill
                  to="/"
                  activeClass="px-4 py-2 rounded-full font-medium transition text-base bg-indigo-600 text-white"
                  inactiveClass="px-4 py-2 rounded-full font-medium transition text-base bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-slate-700"
                >
                  📚 Flashcards
                </NavPill>
                <NavPill
                  to="/mock-exams"
                  activeClass="px-4 py-2 rounded-full font-medium transition text-base bg-indigo-600 text-white"
                  inactiveClass="px-4 py-2 rounded-full font-medium transition text-base bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-slate-700"
                >
                  📝 Mock Exams
                </NavPill>
                <NavPill
                  to="/study-guide"
                  activeClass="px-4 py-2 rounded-full font-medium transition text-base bg-indigo-600 text-white"
                  inactiveClass="px-4 py-2 rounded-full font-medium transition text-base bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-slate-700"
                >
                  📚 Study Guide
                </NavPill>
                <NavPill
                  to="/ilr-guide"
                  activeClass="px-4 py-2 rounded-full font-medium transition text-base bg-indigo-600 text-white"
                  inactiveClass="px-4 py-2 rounded-full font-medium transition text-base bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-300 dark:border-slate-700"
                >
                  🇬🇧 ILR Guide
                </NavPill>
                <button
                  onClick={() => setShowQuickFire(true)}
                  className="px-4 py-2 rounded-full font-medium transition text-base bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 hover:shadow-lg shadow-sm font-bold"
                >
                  ⚡ Quick-Fire
                </button>

                {/* More menu - secondary items */}
                <div className="relative inline-block">
                  <button
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                    className="px-4 py-2 rounded-full font-medium transition text-base bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    ☰ More
                  </button>
                  {showMoreMenu && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setShowMoreMenu(false)} />
                      <div className="absolute right-0 top-full mt-2 z-50 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-2 min-w-[220px] space-y-1">
                        <Link
                          to="/cheat-sheet"
                          onClick={() => setShowMoreMenu(false)}
                          className="flex items-center gap-2 w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-400 transition"
                        >
                          {isPremium ? "📖 View Cheat Sheet" : "✨ Unlock Cheat Sheet"}
                        </Link>
                        <Link
                          to="/pricing"
                          onClick={() => setShowMoreMenu(false)}
                          className="flex items-center gap-2 w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-700 dark:hover:text-indigo-400 transition"
                        >
                          ⭐ Pricing
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </nav>

              {/* Mobile nav: fixed bottom tab bar */}
              <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-stretch justify-around shadow-[0_-2px_8px_rgba(0,0,0,0.06)]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
                <NavPill
                  to="/"
                  activeClass="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition text-indigo-600 dark:text-indigo-400"
                  inactiveClass="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition text-slate-500 dark:text-slate-400"
                >
                  <span className="text-lg leading-none">📚</span>
                  Cards
                </NavPill>
                <NavPill
                  to="/mock-exams"
                  activeClass="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition text-indigo-600 dark:text-indigo-400"
                  inactiveClass="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition text-slate-500 dark:text-slate-400"
                >
                  <span className="text-lg leading-none">📝</span>
                  Exams
                </NavPill>
                <NavPill
                  to="/study-guide"
                  activeClass="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition text-indigo-600 dark:text-indigo-400"
                  inactiveClass="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition text-slate-500 dark:text-slate-400"
                >
                  <span className="text-lg leading-none">📚</span>
                  Guide
                </NavPill>
                <button
                  onClick={() => setShowQuickFire(true)}
                  className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-bold text-amber-600 dark:text-amber-400 transition"
                >
                  <span className="text-lg leading-none">⚡</span>
                  Quick-Fire
                </button>
                <button
                  onClick={() => setShowMobileMoreSheet(true)}
                  className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium text-slate-500 dark:text-slate-400 transition"
                >
                  <span className="text-lg leading-none">☰</span>
                  More
                </button>
              </nav>

              {/* Mobile "More" bottom sheet */}
              {showMobileMoreSheet && (
                <div className="md:hidden fixed inset-0 z-50">
                  <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileMoreSheet(false)} />
                  <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 rounded-t-2xl shadow-2xl p-4 pb-8 space-y-1">
                    <div className="w-10 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-3" />
                    <Link
                      to="/ilr-guide"
                      onClick={() => setShowMobileMoreSheet(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 transition"
                    >
                      🇬🇧 ILR Guide
                    </Link>
                    <Link
                      to="/cheat-sheet"
                      onClick={() => setShowMobileMoreSheet(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 transition"
                    >
                      {isPremium ? "📖 View Cheat Sheet" : "✨ Unlock Cheat Sheet"}
                    </Link>
                    <Link
                      to="/pricing"
                      onClick={() => setShowMobileMoreSheet(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 transition"
                    >
                      ⭐ Pricing
                    </Link>
                    <div className="px-4 py-3">
                      <TestDatePicker />
                    </div>
                  </div>
                </div>
              )}

              <PromoBanner isPremium={isPremium} onUnlockPremium={() => setShowPremiumModal(true)} />
            </header>

            <Routes>
              <Route path="/" element={(
                <>
                  {/* Progress Graph for free users (sneak peek) */}
                  {mockResults.length >= 2 && (
                    <div className="mb-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">📈 Your Progress</h3>
                        {!isPremium && (
                          <button
                            onClick={() => setShowPremiumModal(true)}
                            className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium underline"
                          >
                            Unlock full analytics 🔒
                          </button>
                        )}
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-full max-w-xs">
                          <ProgressGraph results={mockResults} maxResults={5} />
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                          <p>📊 Last {Math.min(mockResults.length, 5)} exams</p>
                          <p>🏆 Best: <strong>{Math.max(...mockResults.map(r => r.score))}%</strong></p>
                          <p>📈 Average: <strong>{(mockResults.reduce((s, r) => s + r.score, 0) / mockResults.length).toFixed(1)}%</strong></p>
                          {!isPremium && (
                            <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">⭐ Premium unlocks detailed analytics, confidence score & study plan</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4 text-center text-sm text-gray-500 dark:text-slate-400">
                    📚 Browse all flashcards by topic below • Click any card to flip
                  </div>
                  {sections.map((section, i) => {

                    const readCount = getReadCount(section, i);
                    const totalCount = section.cards.length;
                    const isAllRead = readCount === totalCount;
                    const isCollapsed = !!collapsedSections[i];

                    return (
                      <section key={i} className="mb-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
                        <div
                          onClick={() => handleToggleCollapse(i)}
                          className="flex justify-between items-center cursor-pointer pb-2 border-b-2 border-slate-100 dark:border-slate-800 mb-6 select-none"
                        >
                          <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                              {section.title}
                            </h2>
                            <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold transition ${isAllRead
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                              : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900'
                              }`}>
                              {readCount} / {totalCount} read {isAllRead && "🎉"}
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleCollapse(i);
                            }}
                            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 dark:hover:bg-indigo-900 px-3 py-1.5 rounded-lg border border-indigo-100 dark:border-indigo-900 shadow-sm"
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
                <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-400 dark:text-slate-500">Loading mock exams...</div>}>
                  <MockExam
                    isPremium={isPremium}
                    setIsPremium={setIsPremium}
                    onUnlockPremium={() => setShowPremiumModal(true)}
                    onResultsUpdate={(results) => setMockResults(results)}
                  />
                </Suspense>
              )} />
              <Route path="/pricing" element={<Pricing onUnlockPremium={() => setShowPremiumModal(true)} isPremium={isPremium} />} />
              <Route path="/cheat-sheet" element={(
                <CheatSheetPage
                  isPremium={isPremium}
                  onUnlockPremium={() => setShowPremiumModal(true)}
                  onDownloadPdf={handleDownloadCheatSheet}
                />
              )} />
              <Route path="/free-cheat-sheet" element={<FreeCheatSheet />} />
              <Route path="/study-guide" element={<StudyGuideIndex />} />
              <Route path="/study-guide/british-history" element={<BritishHistory />} />
              <Route path="/study-guide/monarchs-timeline" element={<MonarchsTimeline />} />
              <Route path="/study-guide/people-matrix" element={<PeopleMatrix />} />
              <Route path="/study-guide/inventions-timeline" element={<InventionsTimeline />} />
              <Route path="/study-guide/key-dates" element={<KeyDatesTimeline />} />
              <Route path="/study-guide/government-and-law" element={<GovernmentAndLaw />} />
              <Route path="/study-guide/elections-cheat-sheet" element={<ElectionsCheatSheet />} />
              <Route path="/study-guide/devolved-nations" element={<DevolvedNations />} />
              <Route path="/study-guide/court-hierarchy" element={<CourtHierarchy />} />
              <Route path="/study-guide/culture-and-traditions" element={<CultureAndTraditions />} />
              <Route path="/study-guide/patron-saints" element={<PatronSaintsAndSymbols />} />
              <Route path="/study-guide/festivals-and-celebrations" element={<FestivalsAndCelebrations />} />
              <Route path="/study-guide/sports-and-traditions" element={<SportsAndTraditions />} />
              <Route path="/study-guide/modern-britain" element={<ModernBritain />} />
              <Route path="/study-guide/human-rights" element={<HumanRightsAndCitizenship />} />
              <Route path="/study-guide/taxation-and-driving" element={<TaxationAndDriving />} />
              <Route path="/study-guide/britain-in-the-world" element={<BritainInTheWorld />} />
              <Route path="/ilr-guide" element={<ILRGuide />} />
              {/* Dynamic immigration guide routes */}
              <Route path="/british-citizenship-guide" element={<GuidePage guide={guideBySlug["british-citizenship-guide"]} />} />
              <Route path="/skilled-worker-ilr" element={<GuidePage guide={guideBySlug["skilled-worker-ilr"]} />} />
              <Route path="/spouse-visa-ilr" element={<GuidePage guide={guideBySlug["spouse-visa-ilr"]} />} />
              <Route path="/global-talent-ilr" element={<GuidePage guide={guideBySlug["global-talent-ilr"]} />} />
              <Route path="/long-residence-ilr" element={<GuidePage guide={guideBySlug["long-residence-ilr"]} />} />
              <Route path="/english-requirement" element={<GuidePage guide={guideBySlug["english-requirement"]} />} />
              <Route path="/life-in-uk-requirement" element={<GuidePage guide={guideBySlug["life-in-uk-requirement"]} />} />
              <Route path="/ukvcas-appointment" element={<GuidePage guide={guideBySlug["ukvcas-appointment"]} />} />
              <Route path="/evisa-explained" element={<GuidePage guide={guideBySlug["evisa-explained"]} />} />
              <Route path="/citizenship-ceremony" element={<GuidePage guide={guideBySlug["citizenship-ceremony"]} />} />
              <Route path="/british-passport-application" element={<GuidePage guide={guideBySlug["british-passport-application"]} />} />
              <Route path="/dual-citizenship" element={<GuidePage guide={guideBySlug["dual-citizenship"]} />} />
              <Route path="/skilled-worker-redundancy" element={<GuidePage guide={guideBySlug["skilled-worker-redundancy"]} />} />
              {/* 404 catch-all route */}
              <Route path="*" element={(
                <div className="text-center py-20">
                  <div className="text-7xl mb-4">🔍</div>
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">Page Not Found</h2>
                  <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                  <Link
                    to="/"
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-md"
                  >
                    ← Back to Home
                  </Link>
                </div>
              )} />
            </Routes>

            {/* Testimonials shown to everyone at the bottom */}
            <TestimonialsCarousel />

            {/* Global Footer (shows on all views) */}
            <footer className="text-center py-10 mt-12 border-t border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 text-sm space-y-4">
              <p className="font-semibold text-slate-500 dark:text-slate-400">🎓 Based on official Life in the UK Handbook (3rd edition) & mock test patterns. Good luck! 🇬🇧</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
                <a href="mailto:help@lifeinukcoach.co.uk" className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">✉️ Help & Support (help@lifeinukcoach.co.uk)</a>
                <Link to="/ilr-guide" className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">🇬🇧 ILR & Citizenship Guide</Link>
                <button onClick={() => setShowTermsModal(true)} className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">📜 Terms of Service & Refund Guarantee</button>
                <button onClick={() => setShowPrivacyModal(true)} className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">🔒 Privacy Policy</button>
                <button onClick={() => setShowDisclaimerModal(true)} className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">⚖️ Legal Disclaimer</button>
                <button onClick={() => setShowPremiumModal(true)} className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition">⭐ Restore Premium</button>
              </div>
              <div className="text-[11px] text-slate-400 dark:text-slate-500 max-w-2xl mx-auto space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <p>This website is an independent educational platform. It is <strong>not affiliated with, endorsed by, or connected to the UK Home Office or the UK Government</strong>.</p>
                <p>Contains public sector information licensed under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-500 dark:hover:text-slate-400 transition">Open Government Licence v3.0</a>.</p>
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
            <Suspense fallback={null}>
              <QuickFireChallenge
                onClose={() => setShowQuickFire(false)}
                isPremium={isPremium}
                onUnlockPremium={() => setShowPremiumModal(true)}
              />
            </Suspense>
          )}
        </div>
      </ErrorBoundary>
    </Router>
  );
}