import React from 'react';
import { Globe, Target, Award } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Mindset',
      description:
        'International reach with deep understanding of diverse markets and cultures',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Approach',
      description:
        'Tailored solutions that fit your unique business needs and challenges',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Agile Excellence',
      description:
        'Fast, flexible delivery with continuous improvement and adaptation',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Top Row: About & Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Column */}
          <div className="space-y-6 max-w-lg">
            <span className="bg-orange-100 text-orange-500 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
              About HINPA Incorporation
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Redefining Talent & Technology for Tomorrow&apos;s Businesses
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-orange-500">HINPA Incorporation (Hunt N Hire)</span> is a mission-driven 
              consulting and technology partner. We specialize in bridging 
              workforce solutions and IT innovation, helping organizations 
              achieve sustainable global growth.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a boutique approach and global reach, we enable companies 
              to thrive in the evolving future of work. From executive search 
              to enterprise IT solutions, we seamlessly connect 
              <span className="text-orange-500 font-medium"> people, processes, and performance</span>.
            </p>
          </div>

          {/* Mission Column */}
          <div className="relative self-start">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="text-orange-100 leading-relaxed">
                  To be the bridge between exceptional talent and innovative 
                  technology — empowering businesses to scale internationally 
                  while driving sustainable growth in a digital-first world.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">50+</div>
                    <div className="text-orange-100 text-sm">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">99%</div>
                    <div className="text-orange-100 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-300 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-orange-400 rounded-xl rotate-12 opacity-20 blur-md"></div>
            </div>

            {/* Floating Recognition Card */}
            <div className="absolute -bottom-16 left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-gray-200 z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                 
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Industry Recognition
                  </div>
                  <div className="text-sm text-gray-600">
                    Awarded Best HR Technology Partner 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors shadow-sm"
            >
              <div className="w-12 h-12 mb-4 bg-orange-100 rounded-lg flex items-center justify-center text-orange-500">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-700">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;