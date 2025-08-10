'use client';

import { useState, useEffect } from 'react';
import { flashShows, formatFlashShow } from '@/data/flashShows';
import { siteConfig } from '@/data/siteData';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PreHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentShow, setCurrentShow] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const activeShows = flashShows.filter(show => show.isActive);

  useEffect(() => {
    if (activeShows.length > 0) {
      const showInterval = setInterval(() => {
        setCurrentShow((prev) => (prev + 1) % activeShows.length);
        setAnimationKey(prev => prev + 1); // Force animation restart
      }, 8000); // Change show every 8 seconds
      
      return () => clearInterval(showInterval);
    }
  }, [activeShows.length]);

  if (!isVisible || activeShows.length === 0) return null;

  const handleClose = () => setIsVisible(false);

  const scrollToUpcoming = () => {
    const element = document.querySelector('#upcoming-shows');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactNumber = siteConfig.social.phone;

  return (
    <div className="bg-white text-black relative border-b border-gray-200 mx-auto">
      <div className="flex justify-center">
        <div className="w-full max-w-[90%] md:max-w-[85%] px-2 sm:px-4 h-6 sm:h-5 md:h-7 flex items-center justify-between">
          
          {/* Left: Upcoming Show Label */}
          {/* <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <span className="text-xs sm:text-xs md:text-sm font-medium">
              <span className="hidden sm:inline">🎭 Upcoming Show</span>
              <span className="sm:hidden">🎭 Show</span>
            </span>
          </div> */}

          {/* Center: Single Show Scrolling Right to Left */}
          <div 
            className="flex-1 overflow-hidden cursor-pointer px-2 touch-manipulation relative"
            onClick={scrollToUpcoming}
          >
            <div className="whitespace-nowrap font-medium text-xs sm:text-xs md:text-sm flex animate-marquee">
              {/* Duplicate for seamless loop */}
              <span className="hidden sm:inline">
                💥💥📅 {formatFlashShow(activeShows[currentShow])} 💥💥 &nbsp;&nbsp;&nbsp;
              </span>
              <span className="hidden sm:inline">
                💥💥📅 {formatFlashShow(activeShows[currentShow])} 💥💥 &nbsp;&nbsp;&nbsp;
              </span>

              <span className="sm:hidden">
                📅 {formatFlashShow(activeShows[currentShow])} &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sm:hidden">
                📅 {formatFlashShow(activeShows[currentShow])} &nbsp;&nbsp;&nbsp;
              </span>
            </div>
        </div>
          {/* Right: Contact */}
          {/* <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <span className="font-bold text-xs sm:text-xs md:text-sm">
              <span className="hidden sm:inline">📞 Contact:</span>
            </span>
            <a 
              href={`tel:${contactNumber}`} 
              className="hover:underline font-medium text-xs sm:text-xs md:text-sm touch-manipulation"
            >
              {contactNumber}
            </a>
          </div> */}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-1/2 right-1 sm:right-2 md:right-4 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors p-1.5 sm:p-1 z-10 group bg-black/5 rounded-full touch-manipulation min-h-[32px] min-w-[32px] sm:min-h-[24px] sm:min-w-[24px] flex items-center justify-center"
        aria-label="Close flash strip"
      >
        <XMarkIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default PreHeader;
