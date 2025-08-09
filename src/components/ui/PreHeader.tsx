'use client';

import { useState, useEffect } from 'react';
import { flashShows, formatFlashShow } from '@/data/flashShows';
import { siteConfig } from '@/data/siteData';
import { XMarkIcon } from '@heroicons/react/24/outline';

const PreHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentShow, setCurrentShow] = useState(0);

  const activeShows = flashShows.filter(show => show.isActive);

  useEffect(() => {
    if (activeShows.length > 1) {
      const interval = setInterval(() => {
        setCurrentShow((prev) => (prev + 1) % activeShows.length);
      }, 5000);
      return () => clearInterval(interval);
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
        <div className="w-full max-w-[85%] px-4 h-10 md:h-12 flex items-center justify-between">
          
          {/* Left: Upcoming Show Label */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className=" text-sm md:text-base">🎭 Upcoming Show</span>
          </div>

          {/* Center: Animated Show Details */}
          <div 
            className="flex-1 overflow-hidden cursor-pointer text-center"
            onClick={scrollToUpcoming}
          >
            <div 
              key={currentShow}
              className="inline-block whitespace-nowrap animate-scroll-ltr font-medium text-sm md:text-base"
            >
              💥💥📅 {formatFlashShow(activeShows[currentShow])} 💥💥
            </div>
          </div>

          {/* Right: Contact */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="font-bold text-sm md:text-base">📞 Contact:</span>
            <a 
              href={`tel:${contactNumber}`} 
              className="hover:underline font-medium text-sm md:text-base"
            >
              {contactNumber}
            </a>
          </div>
        </div>
      </div>


      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors p-1 z-10 group bg-black/5 rounded-full"
        aria-label="Close flash strip"
      >
        <XMarkIcon className="h-4 w-4 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default PreHeader;
