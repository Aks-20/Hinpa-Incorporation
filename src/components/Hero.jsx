// Replace all instances of bg-green-600, hover:bg-green-700, border-green-600, hover:text-green-600, bg-green-400 with custom color #3CA26E

import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden min-h-screen font-sans"
    >
      {/* Import Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Scattered Icons and Arrows - positioned to avoid text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top area scattered elements */}
        <div className="absolute top-16 left-20 w-10 h-10 bg-yellow-400 rounded-full"></div>
        <ArrowUp className="absolute top-12 right-32 w-6 h-6 text-gray-500 transform rotate-12" />
        <div className="absolute top-24 right-64 w-6 h-6" style={{ background: "#3CA26E", transform: "rotate(45deg)" }}></div>
        <ArrowDown className="absolute top-8 left-1/3 w-5 h-5 text-gray-400 transform -rotate-12" />

        {/* Left side scattered elements */}
        <div
          className="absolute top-1/4 left-8 w-8 h-8"
          style={{
            background: "#3CA26E",
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
            transform: "rotate(12deg)",
          }}
        ></div>
        <ArrowUp className="absolute top-1/3 left-16 w-7 h-7 text-gray-600" />
        <div className="absolute top-2/3 left-12 w-6 h-6 bg-purple-400 rounded-full"></div>
        <ArrowDown className="absolute bottom-1/4 left-8 w-6 h-6 text-gray-500 transform rotate-45" />

        {/* Right side scattered elements */}
        <div className="absolute top-1/4 right-12 w-0 h-0 border-l-5 border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-orange-400"></div>
        <ArrowUp className="absolute top-1/2 right-8 w-6 h-6 text-gray-600 transform -rotate-12" />
        <div className="absolute top-3/4 right-16 w-7 h-7" style={{ background: "#3CA26E", transform: "rotate(45deg)" }}></div>
        <ArrowDown className="absolute bottom-1/3 right-12 w-5 h-5 text-gray-400" />

        {/* Bottom area scattered elements */}
        <div className="absolute bottom-16 left-1/4 w-8 h-8 bg-red-400 rounded-full"></div>
        <ArrowUp className="absolute bottom-12 right-1/4 w-6 h-6 text-gray-500 transform rotate-45" />
        <div className="absolute bottom-20 left-3/4 w-6 h-6 bg-indigo-500 transform rotate-12"></div>
        <ArrowDown className="absolute bottom-8 left-2/3 w-5 h-5 text-gray-400 transform -rotate-45" />

        {/* Additional scattered elements */}
        <div className="absolute top-1/6 left-2/3 w-5 h-5 bg-pink-400 transform rotate-45"></div>
        <ArrowUp className="absolute top-3/4 left-1/5 w-6 h-6 text-gray-500" />
        <div className="absolute bottom-2/3 right-1/3 w-4 h-4 bg-teal-400 rounded-full"></div>
        <ArrowDown className="absolute top-2/3 right-2/3 w-5 h-5 text-gray-400 transform rotate-30" />

        {/* Corner elements */}
        <div className="absolute top-4 left-4 w-6 h-6 bg-cyan-400 transform rotate-45"></div>
        <ArrowUp className="absolute top-4 right-4 w-5 h-5 text-gray-500" />
        <div className="absolute bottom-4 left-4 w-5 h-5 bg-amber-400 rounded-full"></div>
        <ArrowDown className="absolute bottom-4 right-4 w-6 h-6 text-gray-400 transform rotate-12" />
      </div>

      {/* Flowing curved lines in background only */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          {/* Main flowing curve */}
          <path
            d="M 100 200 Q 300 100 500 200 T 900 150 Q 1100 100 1200 200"
            stroke="#f3f4f6"
            strokeWidth="2"
            fill="none"
          />

          {/* Secondary curves */}
          <path
            d="M 50 400 Q 250 350 450 400 T 850 380"
            stroke="#f3f4f6"
            strokeWidth="1"
            fill="none"
          />

          {/* Horizontal connecting lines */}
          <path
            d="M 50 320 L 200 320"
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="none"
          />

          <path
            d="M 1000 280 L 1150 280"
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center min-h-[70vh] relative">
          {/* Center Content */}
          <div className="text-center space-y-10 max-w-5xl z-10 bg-white bg-opacity-95 rounded-2xl p-8 backdrop-blur-sm">
            <div className="space-y-8">
              <h1
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Redefining Talent & Technology for Tomorrow's Businesses
              </h1>

              <p
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                From executive search to IT solutions, we bridge the gap between
                people, processes, and performance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <button
                className="text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
                style={{
                  fontFamily: "Inter, sans-serif",
                  background: "#3CA26E",
                }}
              >
                Get Started
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderColor: "#3CA26E",
                  color: "#3CA26E",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#3CA26E";
                  e.currentTarget.style.color = "#3CA26E";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.color = "#374151";
                }}
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Circular element positioned separately */}
      </div>
    </section>
  );
};

export default HeroSection;
