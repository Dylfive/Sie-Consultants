import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold-light">SIE Consultants Ltd.</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Providing Practical Solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold-light">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-gold-light transition-colors text-sm">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-300 hover:text-brand-gold-light transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-gold-light transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-gold-light transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-gold-light">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-gold-light flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Vancouver Island, BC
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-gold-light flex-shrink-0" />
                <span className="text-gray-300 text-sm">250-812-6614</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-gold-light flex-shrink-0" />
                <a href="mailto:sienvironmental@shaw.ca" className="text-gray-300 hover:text-brand-gold-light transition-colors text-sm">
                  sienvironmental@shaw.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SIE Consultants Ltd. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            Website migrated to React/Vite
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
