'use client';

import { useEffect, useState } from 'react';
import { heroData } from '@/data/siteData';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 7.07.17 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 7.07.44 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 7.07.45 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 7.07.45 PM (1).jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 7.07.45 PM (2).jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.21.35 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.21.43 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.36.01 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.36.02 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.36.02 PM (1).jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.37.27 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.37.28 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.38.10 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.38.14 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.41.21 PM.jpeg',
    '/images/Hero sections/WhatsApp Image 2025-08-08 at 10.41.21 PM (1).jpeg',
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToPoetry = () => {
    const element = document.querySelector('#poetry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`मुकेश गौतम जी का प्रदर्शन ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 md:p-1 text-white hover:text-[#FDF5AA] transition-all duration-300 hover:scale-110 touch-manipulation"
        aria-label="पिछली तस्वीर"
      >
        <ChevronLeftIcon className="w-6 h-6 md:w-5 md:h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 md:p-1 text-white hover:text-[#FDF5AA] transition-all duration-300 hover:scale-110 touch-manipulation"
        aria-label="अगली तस्वीर"
      >
        <ChevronRightIcon className="w-6 h-6 md:w-5 md:h-5" />
      </button>

      {/* Text & CTA stacked in center */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full min-h-screen pt-16 md:pt-0">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Title */}
          <div className='mb-4 md:mb-6'>
            <h1  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-2xl leading-tight tracking-tight mb-2 md:mb-4 px-4">
            <span className="inline-block bg-gradient-to-r from-white via-[#FDF5AA] to-white bg-clip-text text-transparent">
              {heroData.title}
            </span>
          </h1>
          </div>

          {/* English Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 italic max-w-2xl mx-auto drop-shadow-md mb-2 md:mb-3 px-4">
            "{heroData.subtitleEnglish}"
          </p>

          {/* Hindi Description */}
            <p className="text-sm sm:text-sm md:text-base lg:text-lg font-bold text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md mb-6 md:mb-8 px-4">
              🎊{heroData.description}🎊
            </p>

          {/* CTA Button - Themed and Centered */}
          <div className="flex justify-center mt-4 md:mt-5">
            <button
              onClick={scrollToPoetry}
              className="group relative bg-[#113F67] text-white/90 px-6 py-3 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-md hindi-text shadow-lg transform hover:scale-110 active:scale-95 transition-all duration-500 flex items-center justify-center gap-2 md:gap-3 min-w-[180px] md:min-w-[200px] touch-manipulation bg-[length:200%_200%] animate-[gradientMove_3s_linear_infinite]"
            >
              <span className="text-center">{heroData.ctaText}</span>
              <span className="icon group-hover:translate-x-1 transition-transform duration-300">
                <ChevronDownIcon className="h-5 w-5 group-hover:animate-bounce" />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20">
        {/* <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 max-w-xs mx-auto">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 md:w-1 md:h-1 sm:h-1 sm:w-1 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentSlide
                  ? 'bg-[#FDF5AA] scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`स्लाइड ${index + 1} पर जाएं`}
            />
          ))}
        </div> */}

        {/* Slide Counter */}
        {/* <div className="mt-2 text-center">
          <span className="text-xs sm:text-sm text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
            {currentSlide + 1} / {heroImages.length}
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
