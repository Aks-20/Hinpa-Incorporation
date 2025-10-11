import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/HinpaIncorporationOrginial.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img
                  src={logo}
                  alt="HINPA Logo"
                  className="w-40 h-20 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-800 hover:text-[#E0904E] px-3 py-2 text-lg font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-[#E0904E] px-3 py-2 text-lg font-medium transition-colors">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-[#E0904E] px-3 py-2 text-lg font-medium transition-colors">Services</a>
              <a href="#careers" className="text-gray-600 hover:text-[#E0904E] px-3 py-2 text-lg font-medium transition-colors">Careers</a>
              <a href="#contact" className="text-gray-600 hover:text-[#E0904E] px-3 py-2 text-lg font-medium transition-colors">Contact</a>
            </div>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button
              className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ backgroundColor: '#E0904E' }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-800 block px-3 py-2 text-base font-medium hover:text-[#E0904E]">Home</a>
              <a href="#about" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-[#E0904E]">About Us</a>
              <a href="#services" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-[#E0904E]">Services</a>
              <a href="#careers" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-[#E0904E]">Careers</a>
              <a href="#contact" className="text-gray-600 block px-3 py-2 text-base font-medium hover:text-[#E0904E]">Contact</a>
              <button
                className="w-full text-left text-white px-3 py-2 rounded-lg text-base font-medium transition-colors mt-2"
                style={{ backgroundColor: '#E0904E' }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
