import React, { useState, useEffect, useRef } from "react";

export default function LazyCardWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "400px 0px", // Load card before it enters the viewport
      }
    );

    const currentRef = placeholderRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // We always render the outer div with placeholderRef so that the observer can track it
  return (
    <div ref={placeholderRef} className="h-56">
      {isVisible ? (
        children
      ) : (
        <div className="w-full h-full rounded-2xl bg-slate-100/50 border border-slate-100 animate-pulse" />
      )}
    </div>
  );
}
