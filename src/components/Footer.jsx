const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HINPA Incorporation</h3>
            <p className="text-gray-600">
              Hunt N Hire - Powering businesses with talent and technology solutions globally.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Executive Search</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Payroll Services</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">IT Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2025 HINPA Incorporation | Hunt N Hire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
