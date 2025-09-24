import React from 'react';
import { Globe, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Mindset',
      description: 'International reach with deep understanding of diverse markets and cultures'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Approach',
      description: 'Tailored solutions that fit your unique business needs and challenges'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Agile Excellence',
      description: 'Fast, flexible delivery with continuous improvement and adaptation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  About HINPA Incorporation
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Redefining Talent & Technology for Tomorrow's Businesses
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                HINPA Incorporation (domain: Hunt N Hire) is a global consulting and technology partner. 
                We specialize in connecting the right talent with the right businesses while also delivering 
                IT solutions that drive innovation.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With a boutique approach and global reach, we help companies navigate the evolving future 
                of work. From executive search to IT solutions, we bridge the gap between people, processes, 
                and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative">
              {/* Updated Gradient */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-green-100 leading-relaxed">
                    To be the bridge between exceptional talent and innovative technology, 
                    empowering businesses to scale globally while fostering sustainable growth 
                    in an ever-evolving digital landscape.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">50+</div>
                      <div className="text-green-200 text-sm">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">99%</div>
                      <div className="text-green-200 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500 rounded-lg transform rotate-12"></div>
              <div className="absolute top-1/3 -right-8 w-8 h-8 bg-pink-400 rounded-full"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Industry Recognition</div>
                  <div className="text-sm text-gray-600">Awarded Best HR Technology Partner 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
