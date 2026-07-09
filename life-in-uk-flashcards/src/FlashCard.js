import { useState } from "react";

const pastelColors = [
    "bg-pink-100/90", "bg-blue-100/90", "bg-green-100/90",
    "bg-yellow-100/90", "bg-purple-100/90", "bg-orange-100/90", "bg-indigo-100/90"
];

export default function FlashCard({ card, index, isRead, onToggleRead }) {
    const [flip, setFlip] = useState(false);

    const handleCardClick = (e) => {
        // If clicking the read-status checkbox/badge, don't flip the card
        if (e.target.closest(".read-toggle")) {
            e.stopPropagation();
            onToggleRead(!isRead);
            return;
        }
        
        const newFlip = !flip;
        setFlip(newFlip);
        
        // Auto-mark as read when flipped to show answer
        if (newFlip && !isRead) {
            onToggleRead(true);
        }
    };

    return (
        <div className="perspective cursor-pointer h-full w-full" onClick={handleCardClick}>
            <div className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${flip ? "rotate-y-180" : ""}`}>
                {/* FRONT */}
                <div className={`absolute w-full h-full backface-hidden rounded-2xl shadow-sm border border-slate-200/60 p-5 flex flex-col justify-center items-center text-center ${pastelColors[index % pastelColors.length]}`}>
                    {/* Read Checkbox (Front) */}
                    <button 
                        type="button"
                        className="read-toggle absolute top-3 right-3 text-slate-500 hover:text-indigo-600 transition p-1"
                        title={isRead ? "Mark as unread" : "Mark as read"}
                    >
                        {isRead ? (
                            <span className="text-xl">✅</span>
                        ) : (
                            <span className="w-5 h-5 rounded-full border-2 border-slate-400 block hover:border-indigo-500" />
                        )}
                    </button>

                    <p className="text-base font-semibold leading-snug text-slate-800 px-2">{card.front}</p>
                    <span className="text-[10px] mt-4 opacity-40 uppercase tracking-wider font-semibold">Click to Reveal</span>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-md p-5 flex flex-col justify-between items-center text-center bg-white border-2 border-indigo-200">
                    {/* Read Checkbox (Back) */}
                    <button 
                        type="button"
                        className="read-toggle absolute top-3 right-3 text-slate-500 hover:text-indigo-600 transition p-1"
                        title={isRead ? "Mark as unread" : "Mark as read"}
                    >
                        {isRead ? (
                            <span className="text-xl">✅</span>
                        ) : (
                            <span className="w-5 h-5 rounded-full border-2 border-slate-400 block hover:border-indigo-500" />
                        )}
                    </button>

                    {/* Question at the top */}
                    <div className="w-full text-left border-b border-indigo-50 pb-1.5 mb-1 pr-6">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Question</span>
                        <span className="text-xs text-slate-500 font-medium truncate block">{card.front}</span>
                    </div>

                    {/* Answer in center */}
                    <div className="flex-1 flex items-center justify-center w-full my-1">
                        <p className="text-sm font-bold text-indigo-950 whitespace-pre-line leading-snug">
                            {card.back}
                        </p>
                    </div>

                    <span className="text-[9px] opacity-35 uppercase tracking-wider font-semibold">Click to Flip Back</span>
                </div>
            </div>
        </div>
    );
}