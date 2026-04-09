import { useState } from "react";

const pastelColors = [
    "bg-pink-100", "bg-blue-100", "bg-green-100",
    "bg-yellow-100", "bg-purple-100", "bg-orange-100", "bg-indigo-100"
];

export default function FlashCard({ card, index }) {
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