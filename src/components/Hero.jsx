import React from "react";
import { ArrowRight } from "lucide-react";

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

      {/* Flowing curved background lines only */}
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

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center min-h-[70vh] relative">
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
                  background: "#E0904E", // orange shade
                }}
              >
                Get Started
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  borderColor: "#E0904E",
                  color: "#E0904E",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E0904E";
                  e.currentTarget.style.color = "#E0904E";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#d1d5db";
                  e.currentTarget.style.color = "#374151";
                }}
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
