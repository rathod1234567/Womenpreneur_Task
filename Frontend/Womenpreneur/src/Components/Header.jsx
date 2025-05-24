import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: '#biography', label: 'Biography', ariaLabel: 'Go to Biography section' },
    { href: '#achievements', label: 'Achievements', ariaLabel: 'Go to Achievements section' },
    { href: '#quote', label: 'Inspiration', ariaLabel: 'Go to Quote section' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900 shadow-lg py-2 sm:py-3' 
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="My Startup TV - Womenpreneur Show"
          >
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
            <span className="hidden xs:inline sm:inline">Womenpreneur Show</span>
            <span className="xs:hidden sm:hidden">WS</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 xl:space-x-10">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-white hover:text-amber-400 transition-colors duration-200 text-sm lg:text-base font-medium relative group"
                    aria-label={item.ariaLabel}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-white hover:text-amber-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 rounded-md"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="border-t border-gray-700 pt-4">
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block text-white hover:text-amber-400 transition-colors duration-200 text-base font-medium py-2 px-2 rounded-md hover:bg-gray-800"
                    aria-label={item.ariaLabel}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 -z-10"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;