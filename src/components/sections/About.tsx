'use client';

import { useEffect, useState } from 'react';
import { aboutData } from '@/data/siteData';
import Image from 'next/image';

// Newspaper images data
const newspaperImages = [
  {
    id: 'news-1',
    src: '/images/Newspapers/WhatsApp Image 2025-08-11 at 8.38.26 PM.jpeg',
    title: 'समाचार पत्र में विशेष स्थान',
    description: 'प्रसिद्ध दैनिक में कविता प्रकाशन',
    alt: 'Newspaper Coverage 1'
  },
  {
    id: 'news-2',
    src: '/images/Newspapers/WhatsApp Image 2025-08-11 at 8.38.27 PM (1).jpeg',
    title: 'साहित्यिक पुरस्कार समाचार',
    description: 'पुरस्कार प्राप्ति की खबर',
    alt: 'Newspaper Coverage 2'
  },
  {
    id: 'news-3',
    src: '/images/Newspapers/WhatsApp Image 2025-08-11 at 8.38.27 PM (2).jpeg',
    title: 'टीवी शो की समीक्षा',
    description: 'हास्य प्रस्तुति की चर्चा',
    alt: 'Newspaper Coverage 3'
  },
  {
    id: 'news-4',
    src: '/images/Newspapers/WhatsApp Image 2025-08-11 at 8.38.27 PM.jpeg',
    title: 'काव्य गोष्ठी रिपोर्ट',
    description: 'कविता सम्मेलन का विवरण',
    alt: 'Newspaper Coverage 4'
  },
  {
    id: 'news-5',
    src: '/images/Newspapers/WhatsApp Image 2025-08-11 at 8.38.28 PM.jpeg',
    title: 'मीडिया में चर्चा',
    description: 'व्यापक मीडिया कवरेज',
    alt: 'Newspaper Coverage 5'
  }
];

interface NewspaperImage {
  id: string;
  src: string;
  title: string;
  description: string;
  alt: string;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<NewspaperImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Image loading handlers
  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const handleImageError = (imageId: string) => {
    setFailedImages(prev => new Set([...prev, imageId]));
    setLoadedImages(prev => new Set([...prev, imageId])); // Mark as loaded to hide spinner
  };

  // Check image loading status
  const isImageLoaded = (imageId: string) => loadedImages.has(imageId);
  const isImageFailed = (imageId: string) => failedImages.has(imageId);

  // Open image in modal
  const openImageModal = (image: NewspaperImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Navigate in modal
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % newspaperImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(newspaperImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? newspaperImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(newspaperImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') closeImageModal();
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  const aboutImages = [
    '/images/About/IMG-20250809-WA0021.jpg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.21.41 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.34.15 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.38.09 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 22.36.00_767f39dc.jpg',
    '/images/About/WhatsApp Image 2025-08-08 at 22.38.13_fb966191.jpg',
  ];

  return (
    <>
    <section 
      id="about"
      className="section-padding bg-[#34699A] text-white relative overflow-hidden"
    >
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Title */}
          <div className="text-center mb-8 lg:mb-16 px-4">
            <h2 className="heading-2 mb-4 hindi-artistic">
              {aboutData.title}
            </h2>
            <p className="text-lg md:text-xl text-[#FDF5AA] hindi-text font-medium">
              {aboutData.subtitleEn}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              {/* Glass morphism container */}
              <div className="relative backdrop-blur-lg bg-white/10 rounded-3xl p-6 md:p-8 lg:p-10 border border-white/20 shadow-2xl">
                
                {/* Education Section */}
                <div className={`mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-[#34699A]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FDF5AA] hindi-text">
                      Education
                    </h3>
                  </div>
                  <div className="ml-13 space-y-2">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {['MA', 'Ph.D.', 'L.L.B.', 'L.L.M'].map((degree, index) => (
                        <span 
                          key={degree}
                          className={`px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium transition-all duration-500`}
                          style={{ 
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: `${index * 100 + 200}ms`
                          }}
                        >
                          {degree}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="space-y-4 lg:space-y-5 mb-6 md:mb-8">
                  {aboutData.bio.map((paragraph, index) => (
                    <p 
                      key={index}
                      className={`text-sm sm:text-base md:text-lg leading-relaxed hindi-text transition-all duration-1000`}
                      style={{ 
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transitionDelay: `${index * 200 + 400}ms`
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Achievements */}
                <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-5 h-5 text-[#34699A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#FDF5AA] hindi-text">
                      Awards & Achievements
                    </h3>
                  </div>
                  <ul className="ml-13 space-y-3">
                    {aboutData.achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className={`flex items-start hindi-text text-sm md:text-base leading-relaxed transition-all duration-500`}
                        style={{ 
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transitionDelay: `${index * 150 + 800}ms`
                        }}
                      >
                        <div className="w-2 h-2 bg-[#FDF5AA] rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Newspaper Gallery Section */}
                  <div className="mt-8 md:mt-10">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-[#34699A]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v1z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-[#FDF5AA] hindi-text">
                        मीडिया कवरेज
                      </h3>
                    </div>
                    
                    {/* Newspaper Images Grid - Single Column Layout */}
                    <div className="ml-13 grid grid-cols-1 gap-3 md:gap-4 mt-4">
                      {newspaperImages.map((image, index) => (
                        <div
                          key={image.id}
                          className={`group relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl border border-white/20`}
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: `${index * 100 + 1200}ms`
                          }}
                          onClick={() => openImageModal(image, index)}
                        >
                          {/* Image Container - Wider for single column */}
                          <div className="relative w-full h-32 md:h-40 lg:h-48 overflow-hidden">
                            {/* Loading Spinner */}
                            {!isImageLoaded(image.id) && (
                              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA] to-[#34699A] flex items-center justify-center z-20">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              </div>
                            )}
                            
                            {/* Error Placeholder */}
                            {isImageFailed(image.id) && (
                              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA] to-[#34699A] flex items-center justify-center z-10">
                                <div className="text-center p-2">
                                  <svg className="w-6 h-6 mx-auto mb-1 text-[#34699A]/50" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                  </svg>
                                  <p className="text-[#34699A] text-xs hindi-text font-medium">
                                    समाचार
                                  </p>
                                </div>
                              </div>
                            )}
                            
                            {/* Main Image */}
                            <img
                              src={image.src}
                              alt={image.alt}
                              className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                                isImageLoaded(image.id) && !isImageFailed(image.id) ? 'opacity-100' : 'opacity-0'
                              }`}
                              onLoad={() => handleImageLoad(image.id)}
                              onError={() => handleImageError(image.id)}
                              loading="lazy"
                              decoding="async"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#34699A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                              <div className="p-3 text-white w-full">
                                <h4 className="text-sm md:text-base font-semibold hindi-artistic truncate">
                                  {image.title}
                                </h4>
                                <p className="text-xs md:text-sm hindi-text opacity-90 truncate">
                                  {image.description}
                                </p>
                              </div>
                            </div>

                            {/* View Icon */}
                            <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Images Section - Cleaner Layout */}
            <div className={`transition-all duration-1000 delay-400 order-1 lg:order-2 mb-8 lg:mb-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative max-w-md mx-auto lg:max-w-lg">
                
                {/* Main Grid Layout - 6 images */}
                <div className="space-y-4 md:space-y-6">
                  
                  {/* Row 1 - 2 images on mobile, 1 on desktop */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                    <div 
                      className={`relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
                      style={{ 
                        transform: isVisible ? 'rotate(-2deg)' : 'rotate(-6deg) scale(0.9)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '600ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[0]} 
                        alt="Dr. Mukesh Gautam performing" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <div 
                      className={`relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 lg:hidden`}
                      style={{ 
                        transform: isVisible ? 'rotate(3deg)' : 'rotate(7deg) scale(0.9)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '800ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[1]} 
                        alt="Dr. Mukesh Gautam in performance" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Row 2 - Hidden on mobile (lg:hidden from previous), Show as single on desktop */}
                  <div className="hidden lg:block">
                    <div 
                      className={`relative h-72 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
                      style={{ 
                        transform: isVisible ? 'rotate(3deg)' : 'rotate(7deg) scale(0.9)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '800ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[1]} 
                        alt="Dr. Mukesh Gautam in performance" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Row 3 - 2 images on mobile, 1 on desktop */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                    <div 
                      className={`relative h-40 md:h-52 lg:h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
                      style={{ 
                        transform: isVisible ? 'rotate(-1deg)' : 'rotate(-3deg) scale(0.95)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '1000ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[2]} 
                        alt="Dr. Mukesh Gautam with audience" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <div 
                      className={`relative h-40 md:h-52 lg:h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 lg:hidden`}
                      style={{ 
                        transform: isVisible ? 'rotate(2deg)' : 'rotate(5deg) scale(0.95)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '1200ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[3]} 
                        alt="Dr. Mukesh Gautam award ceremony" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Row 4 - Hidden on mobile, Show as single on desktop */}
                  <div className="hidden lg:block">
                    <div 
                      className={`relative h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
                      style={{ 
                        transform: isVisible ? 'rotate(2deg)' : 'rotate(5deg) scale(0.95)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '1200ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[3]} 
                        alt="Dr. Mukesh Gautam award ceremony" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Row 5 - 2 images on mobile, 1 on desktop */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                    <div 
                      className={`relative h-36 md:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
                      style={{ 
                        transform: isVisible ? 'rotate(1deg)' : 'rotate(4deg) scale(0.9)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '1400ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[4]} 
                        alt="Dr. Mukesh Gautam stage performance" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    <div 
                      className={`relative h-36 md:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 lg:hidden`}
                      style={{ 
                        transform: isVisible ? 'rotate(-2deg)' : 'rotate(-5deg) scale(0.9)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '1600ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[5]} 
                        alt="Dr. Mukesh Gautam with fans" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Row 6 - Hidden on mobile, Show as single on desktop */}
                  <div className="hidden lg:block">
                    <div 
                      className={`relative h-56 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
                      style={{ 
                        transform: isVisible ? 'rotate(-2deg)' : 'rotate(-5deg) scale(0.9)',
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: '1600ms'
                      }}
                    >
                      <Image 
                        src={aboutImages[5]} 
                        alt="Dr. Mukesh Gautam with fans" 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FDF5AA]/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute top-1/3 -left-6 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-[#58A0C8]/30 rounded-full blur-sm animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <svg className="w-12 h-12 text-[#FDF5AA] mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-light italic text-[#FDF5AA] hindi-artistic mb-4 md:mb-6 max-w-4xl mx-auto px-4 leading-relaxed">
              "कविता मेरे लिए सिर्फ शब्दों का खेल नहीं, बल्कि आत्मा की अभिव्यक्ति है।"
            </blockquote>
            <cite className="block text-lg text-white/70 english-text">
              "Poetry for me is not just a play of words, but the expression of the soul."
            </cite>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#FDF5AA]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#58A0C8]/5 rounded-full blur-3xl -z-10"></div>
    </section>

    {/* Newspaper Image Modal */}
    {selectedImage && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeImageModal}>
        <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-20 bg-black/50 rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3 z-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Image */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-xl font-bold text-white hindi-artistic mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 hindi-text">
                {selectedImage.description}
              </p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {newspaperImages.length}
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default About;