import React, { useState, useEffect, useRef } from "react";

export default function LazyCardWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once loaded, we can disconnect to avoid re-triggering overhead
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px", // Load card 300px before it enters the viewport
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

  if (!isVisible) {
    // Render a lightweight, blank placeholder card of the same height (h-56)
    return (
      <div 
        ref={placeholderRef} 
        className="h-56 rounded-2xl bg-gray-100/50 border border-gray-100 animate-pulse"
      />
    );
  }

  return children;
}
