import React from 'react';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { number: '680+', label: 'Successful Placements' },
    { number: '120+', label: 'Partner Companies' },
    { number: '450+', label: 'IT Solutions Delivered' }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 via-white to-green-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500 transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 transform rotate-12 opacity-20"></div>
        
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,300 Q250,200 500,300 T1000,300 L1000,1000 L0,1000 Z" fill="url(#gradient)" opacity="0.1"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981"/>
              <stop offset="100%" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    focused
                  </span>
                  <div className="absolute -top-8 -right-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </span>{' '}
                on the latest digital transformation
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide technology expertise and advisory for the latest technology & business transformation challenges for large to medium size enterprises at all levels.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center group">
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  With technology at the core, we are keen to eliminate complexity & increase scale
                </h3>
                
                <p className="text-gray-600">
                  Founded in 2017 by two college friends holding leading software development positions elsewhere, Innovance has spearheaded to a market-leading position in Turkey and ventured into European markets.
                </p>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Trusted by 100+ companies</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 right-4 w-12 h-12 bg-yellow-400 rounded-lg transform rotate-12 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-2 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -right-6 w-6 h-6 bg-blue-400 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;