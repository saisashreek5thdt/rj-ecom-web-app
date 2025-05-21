"use client";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function CircularText() {
  const [textArray, setTextArray] = useState([]);

  const text = "EXPERIENCE • STYLE • FASHION • TREND •";

  useEffect(() => {
    setTextArray(text.split(""));
  }, []);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-72 h-72 flex items-center justify-center group antialiased">
      <div className="relative w-full h-full mt-[500px]">
        {/* Rotating Circle of Text */}
        <div className="absolute inset-0 animate-spin-smooth group-hover:paused-spin">
          {textArray.map((char, index) => {
            const angle = (360 / textArray.length) * index;
            return (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 text-white group-hover:text-[#b2996e] transition-colors duration-300 text-xs sm:text-sm font-medium"
                style={{
                  transform: `rotate(${angle}deg) translate(5.4rem) rotate(90deg)`,
                  transformOrigin: "0 0",
                  wordSpacing: "0.8rem", // Add spacing between words
                  letterSpacing: "0.08rem", // Optional for finer control
                }}
              >
                {char}
              </span>
            );
          })}
        </div>

        {/* Center Circle with Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white group-hover:border-[#b2996e] flex items-center justify-center">
            <FaPlay className="text-white group-hover:text-[#b2996e] text-xl -scale-x-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
