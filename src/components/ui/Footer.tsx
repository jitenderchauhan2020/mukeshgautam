'use client';

import { siteConfig } from '@/data/siteData';

const Footer = () => {
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

  return (
    <footer className="bg-[#113F67] text-white">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold hindi-artistic mb-3 md:mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-white/80 hindi-text mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
              शब्दों की शक्ति से हृदय को छूने वाली कविताएं। 
              यहाँ हर भावना को अपनी आवाज़ मिलती है।
            </p>
            <p className="text-white/60 english-text italic text-sm md:text-base">
              "{siteConfig.taglineEnglish}"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-base md:text-lg font-semibold hindi-text mb-3 md:mb-4">
              त्वरित लिंक
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-white/80 hover:text-[#FDF5AA] transition-colors hindi-text text-sm md:text-base"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-base md:text-lg font-semibold hindi-text mb-3 md:mb-4">
              संपर्क
            </h4>
            <div className="space-y-1 md:space-y-2 text-white/80 text-sm md:text-base">
              <p className="english-text break-all">{siteConfig.social.email}</p>
              <p className="english-text">{siteConfig.social.phone}</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-3 md:space-x-4 mt-3 md:mt-4">
              <a 
                href={siteConfig.social.instagram}
                className="text-white/80 hover:text-[#FDF5AA] transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a 
                href={siteConfig.social.facebook}
                className="text-white/80 hover:text-[#FDF5AA] transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href={siteConfig.social.youtube}
                className="text-white/80 hover:text-[#FDF5AA] transition-colors p-1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/60 hindi-text text-xs md:text-sm text-center md:text-left">
              © {currentYear} {siteConfig.name} | सभी अधिकार सुरक्षित
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <button
                onClick={scrollToTop}
                className="text-white/60 hover:text-[#FDF5AA] transition-colors hindi-text text-xs md:text-sm"
              >
                वापस ऊपर जाएं ↑
              </button>
              
              <p className="text-white/40 english-text text-xs md:text-sm">
                Made with ❤️ for Hindi Poetry
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
