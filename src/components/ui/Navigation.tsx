'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteData';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`md:top-10 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#113F67] shadow-lg' : 'bg-[#113F67]/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-2 md:py-2">
          {/* Left: Profile Section */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Circular Profile Image */}
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-[#FDF5AA] shadow-lg">
                <img 
                  src="/images/Profile.jpeg" 
                  alt="डॉ. मुकेश गौतम" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback gradient */}
                <div className="w-full h-full bg-gradient-to-br from-[#FDF5AA] to-[#58A0C8] flex items-center justify-center" style={{display: 'none'}}>
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#113F67]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {/* Online/Active indicator */}
              {/* <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div> */}
            </div>

            {/* Name and Title */}
            <div className="flex flex-col">
              <h1 className="text-sm sm:text-base md:text-xl font-bold text-white hindi-text leading-tight">
                Mukesh Gautam
              </h1>
              <p className="text-xs sm:text-sm md:text-sm text-[#FDF5AA] hindi-text leading-tight">
                <span className="hidden sm:inline">Hasya kavi | Stand-up Comedian | Manch sanchalak</span>
                <span className="sm:hidden">Hasya kavi | Comedian</span>
                {/* हास्य कवि | स्टैंड-अप कॉमेडियन | मंच संचालक */}
              </p>
            </div>
          </div>

          {/* Right: Navigation Links - Desktop */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {siteConfig.navigation.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link text-white hover:text-[#FDF5AA] text-sm xl:text-base font-medium hindi-text transition-colors duration-200 relative group"
                >
                  {item.name}
                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FDF5AA] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FDF5AA] p-3 rounded-md transition-colors bg-[#34699A]/20 backdrop-blur-sm touch-manipulation"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      } overflow-hidden`}>
        <div className="bg-[#113F67] border-t border-[#34699A]/30">
          <div className="container-custom">
            <div className="py-4 md:py-6 space-y-1">
              {siteConfig.navigation.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-4 text-white hover:text-[#FDF5AA] hover:bg-[#34699A]/20 rounded-lg text-base font-medium hindi-text transition-all duration-200 transform hover:translate-x-2 active:scale-95 touch-manipulation min-h-[48px] flex items-center"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="flex items-center space-x-3 w-full">
                    <span className="w-2 h-2 bg-[#FDF5AA] rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"></span>
                    <span>{item.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;