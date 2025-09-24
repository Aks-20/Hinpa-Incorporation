import React from 'react';
import { Globe, Zap, Shield, CheckCircle, Star, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach, Boutique Approach',
      description: 'Personalized service with international scale and expertise across 50+ countries',
      stat: '50+',
      statLabel: 'Countries'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'SaaS-Enabled HR Processes',
      description: 'Technology-first approach to streamline all HR operations with cutting-edge tools',
      stat: '99%',
      statLabel: 'Automation'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'End-to-End Solutions',
      description: 'Complete hiring and IT services under one trusted roof with seamless integration',
      stat: '24/7',
      statLabel: 'Support'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Transparent & Agile',
      description: 'Clear engagement models with flexible, responsive delivery and real-time tracking',
      stat: '< 48hrs',
      statLabel: 'Response'
    }
  ];

  const competitors = [
    { name: 'Vital Change', weakness: 'Limited global reach' },
    { name: 'ABC Consultant', weakness: 'No integrated IT services' },
    { name: 'Traditional Agencies', weakness: 'Outdated processes' }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-100 transform rotate-45 opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Why Choose HINPA
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600">
            Our unique blend of global expertise, cutting-edge technology, and personalized service sets us apart from the competition
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {feature.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{feature.stat}</div>
                      <div className="text-xs text-gray-500">{feature.statLabel}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center space-x-2 pt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Rated by clients</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                How We Compare
              </h3>
              <p className="text-lg text-gray-600">
                While others focus on single solutions, we provide the complete ecosystem your business needs to thrive
              </p>

              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-semibold text-gray-700">{competitor.name}</span>
                    <span className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {competitor.weakness}
                    </span>
                  </div>
                ))}
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg text-white">
                  <span className="font-bold">HINPA Incorporation</span>
                  <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    Complete Solution ✓
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <h4 className="text-xl font-bold text-gray-900">Growth Impact</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">300%</div>
                      <div className="text-sm text-gray-600">Faster Hiring</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">99.5%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                        <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-gray-600">Trusted by Fortune 500 companies</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-500 rounded-lg transform rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "HINPA transformed our hiring process and delivered exceptional IT solutions. Their integrated approach saved us months of work and significantly improved our efficiency."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-600">CEO, TechCorp Industries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;