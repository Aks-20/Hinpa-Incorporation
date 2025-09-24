import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/WhatsApp Image 2025-09-23 at 4.51.00 PM.jpeg'; // adjust path to your logo file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                {/* replaced gradient div with logo image */}
                <img
                  src={logo}
                  alt="HINPA Logo"
                  className="w-40 h-20 object-contain"
                />
                {/* <span className="text-xl font-bold text-gray-800">HINPA</span> */}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-800 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">Services</a>
              <a href="#careers" className="text-gray-600 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">Careers</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 px-3 py-2 text-lg font-medium transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-800 block px-3 py-2 text-base font-medium">Home</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">About Us</a>
              <a href="#services" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">Services</a>
              <a href="#careers" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">Careers</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 block px-3 py-2 text-base font-medium">Contact</a>
              <button className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-green-700 transition-colors mt-2">
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
