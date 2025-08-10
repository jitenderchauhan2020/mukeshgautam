'use client';

import { useEffect, useState } from 'react';
import { aboutData } from '@/data/siteData';
import Image from 'next/image';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const aboutImages = [
    '/images/About/IMG-20250809-WA0021.jpg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.21.41 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.34.15 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.38.09 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 22.36.00_767f39dc.jpg',
    '/images/About/WhatsApp Image 2025-08-08 at 22.38.13_fb966191.jpg',
  ];

  return (
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
                </div>
              </div>
            </div>

            {/* Images Section - Cleaner Layout */}
            <div className={`transition-all duration-1000 delay-400 order-1 lg:order-2 mb-8 lg:mb-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                
                {/* Main Grid Layout - 6 images */}
                <div className="space-y-4 md:space-y-6">
                  
                  {/* Top Row - 2 images */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
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
                      className={`relative h-48 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
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
                  
                  {/* Middle Row - 2 images */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
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
                      className={`relative h-40 md:h-52 lg:h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
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
                  
                  {/* Bottom Row - 2 images */}
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
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
                      className={`relative h-36 md:h-48 lg:h-56 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000`}
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
  );
};

export default About;