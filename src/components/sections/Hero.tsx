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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:text-[#FDF5AA] transition-all duration-300 hover:scale-110"
        aria-label="पिछली तस्वीर"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:text-[#FDF5AA] transition-all duration-300 hover:scale-110"
        aria-label="अगली तस्वीर"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Text & CTA stacked in center */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Title */}
          <div className=''>
            <h1  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            <span className="inline-block bg-gradient-to-r from-white via-[#FDF5AA] to-white bg-clip-text text-transparent leading-24">
              {heroData.title}
            </span>
          </h1>
          </div>

          {/* English Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 italic mb-6 max-w-2xl mx-auto drop-shadow-md">
            "{heroData.subtitleEnglish}"
          </p>

          {/* Hindi Description */}
            <p className="text-sm font-bold sm:text-base md:text-lg text-white mb-32 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {heroData.description}
            </p>



          {/* CTA Button - Themed and Centered */}
          <div className="flex justify-center mt-16">
            <button
              onClick={scrollToPoetry}
              className="group bg-blue-950 text-white px-4 py-6 rounded-full font-bold text-md hindi-text shadow-md transform hover:scale-101 transition-all duration-500 flex items-center justify-center gap-3 min-w-[200px] "
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-wrap justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-[#FDF5AA] scale-125 shadow-lg'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`स्लाइड ${index + 1} पर जाएं`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="mt-2 text-center">
          <span className="text-xs sm:text-sm text-white/80 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1">
            {currentSlide + 1} / {heroImages.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
