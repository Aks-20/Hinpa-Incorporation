import React from 'react';
import { ArrowRight, Users, Briefcase, Globe, Heart, Lightbulb, TrendingUp } from 'lucide-react';

const CareersSection = () => {
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

  const openRoles = [
    {
      title: 'Senior Executive Search Consultant',
      location: 'Mumbai, India',
      type: 'Full-time',
      department: 'Talent Acquisition'
    },
    {
      title: 'Full-Stack Developer',
      location: 'Bangalore, India',
      type: 'Full-time',
      department: 'Technology'
    },
    {
      title: 'HR Technology Specialist',
      location: 'Gurugram, India',
      type: 'Full-time',
      department: 'HR Tech'
    },
    {
      title: 'Business Development Manager',
      location: 'Delhi, India',
      type: 'Full-time',
      department: 'Sales'
    }
  ];

  return (
    <section
      id="careers"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-20 h-20 bg-green-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-16 h-16 bg-emerald-200 transform rotate-45 opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-green-100 rounded-full opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Join Our Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Shape the Future of Work
          </h2>
          <p className="text-xl text-gray-600">
            Join a growing team of innovators, consultants, and changemakers. Be a part of the
            future of work and help businesses transform globally.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Work With Us?</h3>
              <p className="text-lg text-gray-600">
                At HINPA, we believe our people are our greatest asset. We foster a culture of
                innovation, collaboration, and continuous growth where every team member can thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3CA26E] from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Our Culture</h4>
                  <p className="text-gray-600">Diverse, inclusive, and forward-thinking</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-600">Nationalities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-700">95%</div>
                  <div className="text-sm text-gray-600">Retention Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Open Positions */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="w-8 h-8 text-[#3CA26E]" />
                <h3 className="text-2xl font-bold text-gray-900">Open Positions</h3>
              </div>

              <div className="space-y-4">
                {openRoles.map((role, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-green-300 hover:bg-green-50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                          {role.title}
                        </h4>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>{role.location}</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                            {role.type}
                          </span>
                          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {role.department}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-[#3CA26E] from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  View All Openings
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Employee Spotlight */}
            <div className="bg-[#3CA26E] from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Employee Spotlight</h4>
              <blockquote className="text-green-100 italic mb-4">
                "Working at HINPA has been an incredible journey. The diversity of projects and
                supportive team environment has helped me grow both professionally and personally."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Priya Sharma</div>
                  <div className="text-green-100 text-sm">Senior Consultant</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and
              let's explore how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#3CA26E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                Send Your Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
