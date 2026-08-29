import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-brand-dark text-white py-1 px-4 sm:px-6 lg:px-8 text-sm flex justify-between items-center">
        <span>Serving Vancouver Island</span>
        <a href="mailto:sienvironmental@shaw.ca" className="flex items-center hover:text-brand-gold-light transition-colors">
          <Mail className="w-4 h-4 mr-2" />
          sienvironmental@shaw.ca
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={`${import.meta.env.BASE_URL}images/SIE-Consultants-Ltd-Logo.png`} alt="SIE Consultants Ltd." className="h-12 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-brand-gold border-b-2 border-brand-gold'
                    : 'text-gray-700 hover:text-brand-gold'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-brand-gold focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive(item.href)
                    ? 'bg-brand-gray text-brand-dark'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-gold'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
