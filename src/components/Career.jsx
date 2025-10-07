import React from 'react';
import { ArrowRight, Users, Globe, Heart, Lightbulb, TrendingUp } from 'lucide-react';

const CareersSection = () => {
  const accentColor = "text-[#D97A29]"; // darker logo orange (from mission box)
  const bgAccent = "bg-[#D97A29]"; // used sparingly

  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Opportunities',
      description: 'Work with international clients and expand your horizons'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Continuous learning and advancement opportunities'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and wellness programs'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation Culture',
      description: 'Be part of cutting-edge projects and technologies'
    }
  ];

  return (
    <section
      id="careers"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden"
    >
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-20 h-20 bg-gray-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 bg-gray-200 transform rotate-45 opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className={`bg-gray-100 ${accentColor} px-3 py-1 rounded-full text-sm font-semibold`}>
              Join Our Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Shape the Future of Work
          </h2>
          <p className="text-xl text-gray-600">
            Join a growing team of innovators, consultants, and changemakers. 
            Be a part of the future of work and help businesses transform globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Work With Us?</h3>
              <p className="text-lg text-gray-600">
                At HINPA, we believe our people are our greatest asset. 
                We foster a culture of innovation, collaboration, and growth 
                where every team member can thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 ${bgAccent} rounded-lg flex items-center justify-center text-white`}>
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Culture block */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Users className={`w-8 h-8 ${accentColor}`} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Our Culture</h4>
                  <p className="text-gray-600">Diverse, inclusive, and forward-thinking</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className={`text-2xl font-bold ${accentColor}`}>50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${accentColor}`}>15+</div>
                  <div className="text-sm text-gray-600">Nationalities</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold ${accentColor}`}>95%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Employee Spotlight */}
          <div className={`${bgAccent} rounded-2xl p-8 text-white`}>
            <h4 className="text-xl font-bold mb-4">Employee Spotlight</h4>
            <blockquote className="text-orange-50 italic mb-4">
              "Working at HINPA has been an incredible journey. 
              The diversity of projects and supportive environment 
              has helped me grow both professionally and personally."
            </blockquote>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">Priya Sharma</div>
                <div className="text-orange-100 text-sm">Senior Consultant</div>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Work With Us?
            </h3>
            <p className="text-gray-600 mb-6">
              Send us a message with your resume — we’ll reach out if a role matches your expertise.
            </p>
            <button
              className={`${bgAccent} text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center mx-auto`}
            >
              Send Message
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
