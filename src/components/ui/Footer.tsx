'use client';

import { useState } from 'react';
import { siteConfig, featuredVideos } from '@/data/siteData';
import { 
  StarIcon, 
  HeartIcon,
  ArrowUpIcon,
  PlayIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const services = [
  { name: "कवि सम्मेलन", nameEn: "Poetry Conventions" },
  { name: "हास्य कार्यक्रम", nameEn: "Comedy Shows" },
  { name: "कॉर्पोरेट कार्यक्रम", nameEn: "Corporate Entertainment" },
  { name: "टीवी शो", nameEn: "Television Appearances" },
  { name: "स्टैंड-अप कॉमेडी", nameEn: "Stand-up Performances" }
];


  return (
    <footer className="relative bg-gradient-to-r from-[#FDF5AA] via-[#FDF5AA]/98 to-[#FDF5AA] text-[#113F67] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#113F67]/8 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#34699A]/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Dense Main Content */}
        <div className="py-8 md:py-10">
          
          {/* Top Row - Brand, Contact & Social */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-6">
            
            {/* Left - Brand Info */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <div className=" md:text-left text-left">
                <h3 className="text-2xl leading-10 md:text-3xl font-bold hindi-artistic bg-gradient-to-r from-[#113F67] to-[#34699A] bg-clip-text text-transparent ">
                  {siteConfig.name}
                </h3>
                <p className="text-xs md:text-sm hindi-text text-[#113F67]/90 mt-1">
                  Hasya kavi | Stand-up Comedian | Manch  sanchalak
                </p>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-[#113F67]/20"></div>
              
              {/* Quick Bio */}
              <div className="max-w-md">
                <p className="text-xs md:text-sm text-[#113F67]/80 hindi-text leading-relaxed">
                  राष्ट्रीय पुरस्कार विजेता हास्य कवि। 30+ वर्षों का अनुभव, 2500+ प्रस्तुतियां।
                </p>
              </div>
            </div>

            {/* Right - Contact & Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              
              {/* Contact Info */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-[#34699A]" />
                  <a href={`tel:${siteConfig.social.phone}`} className="text-xs md:text-sm text-[#113F67] english-text hover:text-[#34699A] transition-colors">
                    {siteConfig.social.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <EnvelopeIcon className="h-4 w-4 text-[#34699A]" />
                  <a href={`mailto:${siteConfig.social.email}`} className="text-xs md:text-sm text-[#113F67] english-text hover:text-[#34699A] transition-colors">
                    Email
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#113F67]/60 english-text mr-1"> </span>
                <a 
                  href={siteConfig.social.instagram}
                  className="w-8 h-8 bg-[#113F67]/10 rounded-lg flex items-center justify-center hover:bg-[#34699A]/20 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-[#113F67] group-hover:text-[#34699A] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href={siteConfig.social.facebook}
                  className="w-8 h-8 bg-[#113F67]/10 rounded-lg flex items-center justify-center hover:bg-[#34699A]/20 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-[#113F67] group-hover:text-[#34699A] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href={siteConfig.social.youtube}
                  className="w-8 h-8 bg-[#113F67]/10 rounded-lg flex items-center justify-center hover:bg-[#34699A]/20 transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 text-[#113F67] group-hover:text-[#34699A] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Row - Services & Navigation */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-6 lg:gap-8 border-t border-[#113F67]/15 pt-4 md:pt-6">
            
            {/* Services */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <HeartIcon className="h-4 w-4 text-[#34699A]" />
                <h4 className="text-sm font-bold text-[#113F67] hindi-text">सेवाएं</h4>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <div key={index} className="bg-[#113F67]/8 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg">
                    <span className="text-xs font-medium text-[#113F67] hindi-text">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 lg:max-w-sm w-full lg:w-auto mt-3">
              <h4 className="text-sm font-bold text-[#113F67] hindi-text mb-3">Quick Links</h4>
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-x-3 sm:gap-x-4 gap-y-1">
                {siteConfig.navigation.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm cursor-pointer hover:underline text-[#113F67]/80 hover:text-[#34699A] transition-colors text-left sm:text-center touch-manipulation py-1"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bottom Bar */}
        <div className="border-t border-[#113F67]/15 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Left - Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-xs text-[#113F67]/70 hindi-text">
                <span className="hidden sm:inline">© {currentYear} Dr. Mukesh Gautam • सभी अधिकार सुरक्षित • Made with ❤️ for Hindi Poetry</span>
                <span className="sm:hidden">© {currentYear} Dr. Mukesh Gautam<br />All Rights Reserved</span>
              </p>
            </div>

            {/* Right - Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 bg-[#113F67]/10 hover:bg-[#34699A]/15 px-4 py-2 md:px-3 md:py-1.5 rounded-lg transition-all duration-300 hover:scale-105 touch-manipulation"
            >
              <ArrowUpIcon className="h-4 w-4 md:h-3.5 md:w-3.5 text-[#113F67] group-hover:text-[#34699A] transition-colors" />
              <span className="text-sm md:text-xs text-[#113F67] group-hover:text-[#34699A] hindi-text font-medium">
               Go to Top
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;