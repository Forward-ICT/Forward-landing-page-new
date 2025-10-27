"use client";

import { useState, useEffect } from "react";

export default function ClientBlurTextHeroSub() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <p className="text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">
        At ZEN, we don't just build platforms we ignite possibilities. From cutting-edge games to seamless payments, we're pioneering smart technology to unlock Ethiopia's gaming revolution.
      </p>
    </div>
  );
}