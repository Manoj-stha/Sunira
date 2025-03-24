import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-16 right-10 z-1">
      <button
        onClick={scrollToTop}
        className={`bg-gray-800 text-white p-3 w-[4rem] h-[4rem] rounded-full shadow-md transition-all duration-300 flex items-center justify-center relative ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <FaArrowUp className="text-xl z-10" />
        {/* SVG Circular Progress Bar */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="white"
            strokeWidth="3"
            fill="none"
            strokeDasharray="113"
            strokeDashoffset={`${113 - (113 * scrollProgress) / 100}`}
            strokeLinecap="round"
            transform="rotate(-90 20 20)"
          />
        </svg>
      </button>
    </div>
  );
};

export default GoToTop;
