import React from 'react';
import { Search, Users, Code, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Executive / Boutique Search',
      description:
        'Leadership hiring, niche searches, and international talent mapping for C-suite and specialized roles.',
      features: [
        'Leadership & CXO hiring',
        'International executive search',
        'Specialized roles across industries',
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Payroll & Workforce Solutions',
      description:
        'Third-party deputation, SaaS-based HR/payroll, and workforce augmentation for scalable growth.',
      features: [
        'Off-roll staffing & deputation',
        'SaaS-based payroll management',
        'Augmented staff hiring',
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'IT Services & Custom Solutions',
      description:
        'Providing reliable software development and automation — an essential but not core-highlight service.',
      features: [
        'End-to-end software development',
        'Enterprise IT integration',
        'Cloud and automation support',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-orange-100 text-[#E0904E] px-3 py-1 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Pillars of Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions spanning talent acquisition, workforce management, and technology innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              {/* Header Bar */}
              <div
                className="p-6 text-white"
                style={{ backgroundColor: '#E0904E' }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    {service.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: '#E0904E' }}
                      ></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    className="font-semibold text-sm flex items-center transition-colors"
                    style={{ color: '#E0904E' }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

   
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our integrated approach to talent and technology can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
                style={{ backgroundColor: '#E0904E' }}
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                className="border-2 px-8 py-3 rounded-lg font-semibold text-gray-700 transition-colors"
                style={{ borderColor: '#E0904E', color: '#E0904E' }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
