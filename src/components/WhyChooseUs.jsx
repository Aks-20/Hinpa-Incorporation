import React from "react";
import {
  Globe,
  Zap,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach, Local Care",
      detail:
        "We combine international expertise with a boutique approach across 50+ countries.",
      stat: "50+",
      label: "Countries",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tech-Driven HR",
      detail:
        "SaaS-enabled processes that streamline HR with automation and smart tools.",
      stat: "99%",
      label: "Automation",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "One-Stop Partner",
      detail:
        "From recruitment to IT solutions, we deliver end-to-end services you can trust.",
      stat: "24/7",
      label: "Support",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Agile & Transparent",
      detail:
        "Flexible models, responsive delivery, and full visibility at every stage.",
      stat: "<48h",
      label: "Response",
    },
  ];

  const competitors = [
    { name: "Vital Change", gap: "Limited global presence" },
    { name: "ABC Consultant", gap: "No integrated IT support" },
    { name: "Traditional Agencies", gap: "Outdated processes" },
  ];

  const keyPoints = [
    "Boutique approach, global scale",
    "SaaS-powered HR & workforce processes",
    "Seamless blend of hiring & IT services",
    "Trusted by enterprises & startups alike",
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-16 right-20 w-24 h-24 bg-orange-100 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300 rotate-45 opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
            What Sets HINPA Apart
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We merge global know-how, modern technology, and personalized
            service to give your business an edge.
          </p>

          {/* Key Points List */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            {keyPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-gray-700 text-base"
              >
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 border border-orange-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-xl shadow-lg">
                  {item.icon}
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">
                        {item.stat}
                      </div>
                      <div className="text-xs text-gray-500">{item.label}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.detail}</p>
                  <div className="flex items-center gap-2 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                    <span className="text-sm text-gray-500">Client Rated</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                How We Compare
              </h3>
              <p className="text-lg text-gray-600">
                Unlike others who offer isolated services, we deliver a
                connected ecosystem designed for growth.
              </p>
              <div className="space-y-4">
                {competitors.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                  >
                    <span className="font-medium text-gray-700">{c.name}</span>
                    <span className="text-sm text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {c.gap}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-orange-500 rounded-lg text-white shadow-lg">
                  <span className="font-bold">HINPA Incorporation</span>
                  <span className="bg-white/20 text-sm px-3 py-1 rounded-full">
                    Complete Solution ✓
                  </span>
                </div>
              </div>
            </div>

            {/* Growth impact card */}
            <div className="relative">
              <div className="bg-white ml-10 rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition duration-500">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-orange-600" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      Growth Metrics
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-orange-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        300%
                      </div>
                      <div className="text-sm text-gray-600">Faster Hiring</div>
                    </div>
                    <div className="p-4 bg-orange-100 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        85%
                      </div>
                      <div className="text-sm text-gray-600">
                        Cost Reduction
                      </div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-400">
                        99.5%
                      </div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="p-4 bg-orange-100 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                  <div className="border-t pt-4 flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-orange-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-orange-300 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-gray-600">
                      Trusted by Fortune 500 clients
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-orange-300 rounded-lg rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-4">
              “HINPA streamlined our hiring and IT processes. Their integrated
              approach boosted our efficiency and saved us months of effort.”
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  Sarah Johnson
                </div>
                <div className="text-sm text-gray-600">
                  CEO, TechCorp Industries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
