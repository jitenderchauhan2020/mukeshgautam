'use client';

import { useEffect, useState } from 'react';
import { heroData } from '@/data/siteData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPoetry = () => {
    const element = document.querySelector('#poetry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 md:top-10 md:left-10 w-16 h-16 md:w-32 md:h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-8 md:right-20 w-8 h-8 md:w-16 md:h-16 border border-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 md:w-24 md:h-24 border border-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-4 md:right-10 w-10 h-10 md:w-20 md:h-20 border border-white rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Title */}
          <h1 className="heading-1 text-white mb-4 md:mb-6 hindi-artistic">
            {heroData.title}
          </h1>

          {/* Subtitle in Hindi */}
          <h2 className="text-xl md:text-2xl lg:text-4xl text-[#FDF5AA] mb-3 md:mb-4 hindi-text font-medium">
            {heroData.subtitle}
          </h2>

          {/* English subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 english-text italic">
            "{heroData.subtitleEnglish}"
          </p>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 md:mb-12 hindi-text max-w-3xl mx-auto leading-relaxed px-4">
            {heroData.description}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToPoetry}
            className="btn-primary bg-[#FDF5AA] text-[#113F67] hover:bg-white hover:shadow-lg transform hover:-translate-y-1"
          >
            {heroData.ctaText}
            <ChevronDownIcon className="ml-2 h-4 w-4 md:h-5 md:w-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDownIcon className="h-6 w-6 md:h-8 md:w-8" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-10 md:top-20 left-10 md:left-20 w-8 h-8 md:w-16 md:h-16 text-white/20 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        
        <svg className="absolute bottom-20 md:bottom-32 right-16 md:right-32 w-6 h-6 md:w-12 md:h-12 text-white/20 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
