import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Twitter, Globe, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirement: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', requirement: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      details: ['Sector 49, Gurugram', 'Haryana 122018, India'],
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 124 456 7890', '+91 98765 43210'],
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@huntnhire.com', 'careers@huntnhire.com'],
      color: 'bg-orange-100 text-orange-700'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <Globe className="w-5 h-5" />, name: 'Website', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
            Let’s Start a Conversation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Looking for the right partner in talent or technology? We’d love to hear from you and discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a message</h3>
            <p className="text-gray-600 mb-8">Fill out the form below and we’ll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                >
                  <option value="">Select a service</option>
                  <option value="executive-search">Executive Search</option>
                  <option value="payroll-services">Payroll Services</option>
                  <option value="workforce-solutions">Workforce Solutions</option>
                  <option value="it-services">IT Services</option>
                  <option value="custom-solutions">Custom Solutions</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </button>

              <div className="text-center text-sm text-gray-500">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h4>
              <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Sector 49, Gurugram, Haryana</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-yellow-800" />
                </div>
                <h4 className="text-lg font-semibold text-yellow-800">Quick Response Guarantee</h4>
              </div>
              <p className="text-yellow-700 text-sm">
                We typically respond within 2 business hours during weekdays, and within 24 hours on weekends and holidays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
