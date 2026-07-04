import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya",
    location: "London",
    text: "I was so nervous about the test, but the 5-day guaranteed pass path was a lifesaver. It told me exactly what to study each day. Getting Premium was totally worth it."
  },
  {
    name: "Mohammed",
    location: "Birmingham",
    text: "I failed the first time because I didn't know where I was going wrong. The detailed analytics in the Premium version showed me I was terrible at the 'British history' section. I focused on that, smashed the mock exams, and passed the next :D"
  },
  {
    name: "Anya",
    location: "Manchester",
    text: "I commute a lot, so having the offline PDF guides was a game changer. I could study on the tram on my way to work without using my internet."
  },
  {
    name: "Kwame",
    location: "Leeds",
    text: "Honestly, the free version is really good, flash cards help keep remember basic notes stuff."
  },
  {
    name: "Asim",
    location: "Bradford",
    text: "I'm not great with technology, so having something simple to remember and take tests was easy and helped me pass in first attempt."
  },
  {
    name: "Raj",
    location: "Leicester",
    text: "I only had 8 days to prepare this website was easy to navigate, remember and give tests all in one place."
  },
  {
    name: "Hassan",
    location: "Newcastle",
    text: "I didn't think I needed Premium at first, but the dashboard thingy showed me exactly where I was weak. Focused on those topics for a few days and passed without any drama."
  },
  {
    name: "Tom",
    location: "Bristol",
    text: "I kept putting off studying because it felt overwhelming. I took one every day until I was confident. Getting Premium was definitely the right choice."
  },
  {
    name: "Zara",
    location: "Sheffield",
    text: "I wanted to make sure I passed the first time to save money and time. It's worth every penny."
  },
  {
    name: "Ola",
    location: "Cardiff",
    text: "Good test, premium version is better and tests are actually helpful than other free websites"
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-slate-100 rounded-2xl p-6 shadow-sm relative overflow-hidden mt-6">
      <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-3 text-center">Success Stories & Reviews</h4>
      <div className="min-h-[110px] flex flex-col justify-center transition-all duration-500 ease-in-out">
        <p className="text-sm italic text-slate-600 text-center mb-4">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="text-xs font-bold text-slate-800 text-center">
          — {testimonials[currentIndex].name}, {testimonials[currentIndex].location}
        </p>
      </div>
      <div className="flex justify-center gap-1.5 mt-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentIndex === idx ? 'bg-indigo-600 w-3' : 'bg-slate-200'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
