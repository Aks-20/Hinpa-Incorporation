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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Row: About & Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Column */}
          <div className="space-y-6 max-w-lg">
            <span className="bg-orange-50 text-orange-400 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
              About HINPA Incorporation
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
              Redefining Talent & Technology for Tomorrow&apos;s Businesses
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              HINPA Incorporation (domain: Hunt N Hire) is a global consulting
              and technology partner. We specialize in connecting the right
              talent with the right businesses while also delivering IT
              solutions that drive innovation.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a boutique approach and global reach, we help companies
              navigate the evolving future of work. From executive search to
              IT solutions, we bridge the gap between people, processes, and
              performance.
            </p>
          </div>

          {/* Mission Column */}
          <div className="relative self-start mt-25">
            <div className="bg-[#E0904E] from-orange-500 to-orange-400 rounded-2xl p-10 text-white shadow-2xl">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="text-green-100 leading-relaxed">
                  To be the bridge between exceptional talent and innovative
                  technology, empowering businesses to scale globally while
                  fostering sustainable growth in an ever-evolving digital
                  landscape.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">50+</div>
                    <div className="text-green-100 text-sm">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white">99%</div>
                    <div className="text-green-100 text-sm">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20 blur-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400 rounded-lg rotate-12 opacity-20 blur-md"></div>
            </div>

            {/* Floating Recognition Card */}
            <div className="absolute -bottom-8 left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs border border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="font-semibold text-black">
                    Industry Recognition
                  </div>
                  <div className="text-sm text-gray-700">
                    Awarded Best HR Technology Partner 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-12 h-12 mb-4 bg-orange-100 rounded-lg flex items-center justify-center text-orange-400">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
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
