import React from 'react';
import { Search, Users, Code, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Executive / Boutique Search',
      description: 'Leadership hiring, niche searches, international talent mapping for C-suite and specialized roles across industries.',
      features: ['Leadership & CXO hiring', 'International executive search', 'Specialized roles across industries'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Payroll & Workforce Solutions',
      description: 'Third-party deputation, SaaS-based HR/payroll, workforce augmentation for scalable business growth.',
      features: ['Off-roll staffing & deputation', 'SaaS-based payroll management', 'Augmented staff hiring'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'IT Services & Custom Solutions',
      description: 'End-to-end software development, digital transformation, and automation solutions for modern enterprises.',
      features: ['End-to-end software development', 'Enterprise IT integration', 'Scalable cloud and automation solutions'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Pillars of Excellence
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions spanning talent acquisition, workforce management, and technology innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 relative`}>
                <div className="flex items-center justify-between text-white">
                  <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                    {service.icon}
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-8 -mt-8"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors flex items-center group-hover:translate-x-1 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how our integrated approach to talent and technology can accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors">
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