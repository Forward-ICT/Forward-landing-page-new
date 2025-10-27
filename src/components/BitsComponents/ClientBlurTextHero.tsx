"use client";

import { useState, useEffect } from "react";

export default function ClientBlurTextHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <span className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Empowering Ethiopia's Digital Entertainment
      </span>
    </div>
  );
}