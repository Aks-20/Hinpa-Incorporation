import { Building2, Users2, Server } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Client <span className="text-indigo-600">Success Stories</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Real-world impact we’ve created for businesses across industries — 
          from workforce solutions to digital transformation.
        </p>

        {/* Case Study Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          
          {/* Case Study 1 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
            <Building2 className="w-10 h-10 text-indigo-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Leadership Hiring for Growth
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Helped <b>XYZ Company</b> scale into new markets by placing 
              senior leadership talent across APAC and Europe.
            </p>
          </div>

          {/* Case Study 2 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
            <Users2 className="w-10 h-10 text-indigo-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              SaaS-Enabled Payroll
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Delivered a <b>SaaS-based payroll system</b> that now manages 
              salaries, compliance, and reporting for <b>1000+ employees</b>.
            </p>
          </div>

          {/* Case Study 3 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition text-left">
            <Server className="w-10 h-10 text-indigo-600" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Digital Transformation
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Partnered with a mid-sized enterprise to build custom 
              <b> automation & software solutions</b>, boosting efficiency by 40%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
