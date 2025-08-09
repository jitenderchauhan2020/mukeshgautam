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
    '/images/About/WhatsApp Image 2025-08-08 at 10.21.41 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.21.42 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.21.57 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.34.15 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.38.09 PM.jpeg',
    '/images/About/WhatsApp Image 2025-08-08 at 10.34.23 PM.jpeg',
  ];

  return (
    <section 
      id="about"
      className="section-padding bg-[#34699A] text-white relative overflow-hidden"
    >
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="heading-2 mb-3 md:mb-4 hindi-artistic">
              {aboutData.title}
            </h2>
            <p className="text-lg md:text-xl text-[#FDF5AA] hindi-text font-medium">
              {aboutData.subtitle}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid-responsive-1-2 items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              {/* Glass morphism container */}
              <div className="relative backdrop-blur-lg bg-white/10 rounded-3xl md:p-8 lg:p-10 border border-white/20 shadow-2xl">
                {/* Education Section */}
                <div className={`mb-6 md:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#34699A]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#FDF5AA] hindi-text">
                      उच्च शिक्षित
                    </h3>
                  </div>
                  <div className="ml-11 md:ml-13 space-y-2">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {['MA', 'Ph.D.', 'L.L.B.', 'L.L.M'].map((degree, index) => (
                        <span 
                          key={degree}
                          className={`md:px-4 md:py-2 bg-white/20 rounded-full text-sm md:text-base font-medium transition-all duration-500`}
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
                <div className="space-y-4 md:space-y-5">
                  {aboutData.bio.map((paragraph, index) => (
                    <p 
                      key={index}
                      className={`text-base md:text-lg leading-relaxed hindi-text transition-all duration-1000`}
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
                <div className={`mt-6 md:mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#34699A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#FDF5AA] hindi-text">
                      उपलब्धियां
                    </h3>
                  </div>
                  <ul className="ml-11 md:ml-13 space-y-2 md:space-y-3">
                    {aboutData.achievements.map((achievement, index) => (
                      <li 
                        key={index} 
                        className={`flex items-start hindi-text text-sm md:text-base transition-all duration-500`}
                        style={{ 
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                          transitionDelay: `${index * 150 + 800}ms`
                        }}
                      >
                        <div className="w-2 h-2 bg-[#FDF5AA] rounded-full mr-3 mt-2 md:mt-2.5 flex-shrink-0"></div>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Overlapping Images Section */}
            <div className={`transition-all duration-1000 delay-400 order-1 lg:order-2 mb-6 lg:mb-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] max-w-md lg:max-w-none mx-auto">
                {/* Image 1 - Main large image */}
                <div 
                  className={`absolute top-0 right-0 w-48 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 xl:w-80 xl:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000`}
                  style={{ 
                    transform: isVisible ? 'translate(0, 0) rotate(2deg)' : 'translate(20px, -20px) rotate(8deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '600ms'
                  }}
                >
                  <Image 
                    src={aboutImages[0]} 
                    alt="About Image 1" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Image 2 - Medium left */}
                <div 
                  className={`absolute top-4 left-0 w-32 h-40 md:w-40 md:h-52 lg:w-48 lg:h-64 xl:w-56 xl:h-72 rounded-xl md:rounded-2xl overflow-hidden shadow-xl transition-all duration-1000`}
                  style={{ 
                    transform: isVisible ? 'translate(0, 0) rotate(-3deg)' : 'translate(-30px, -10px) rotate(-8deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '800ms'
                  }}
                >
                  <Image 
                    src={aboutImages[1]} 
                    alt="About Image 2" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Image 3 - Small top center */}
                <div 
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-32 md:w-32 md:h-40 lg:w-36 lg:h-48 xl:w-40 xl:h-52 rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-1000 z-10`}
                  style={{ 
                    transform: isVisible ? 'translate(-50%, 0) rotate(1deg)' : 'translate(-50%, -30px) rotate(5deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '1000ms'
                  }}
                >
                  <Image 
                    src={aboutImages[2]} 
                    alt="About Image 3" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Image 4 - Small bottom right */}
                <div 
                  className={`absolute bottom-8 right-4 md:bottom-12 md:right-8 w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-44 xl:w-36 xl:h-48 rounded-lg md:rounded-xl overflow-hidden shadow-lg transition-all duration-1000`}
                  style={{ 
                    transform: isVisible ? 'translate(0, 0) rotate(-2deg)' : 'translate(20px, 20px) rotate(-6deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '1200ms'
                  }}
                >
                  <Image 
                    src={aboutImages[3]} 
                    alt="About Image 4" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Image 5 - Small bottom left */}
                <div 
                  className={`absolute bottom-4 left-8 md:bottom-8 md:left-12 w-16 h-24 md:w-24 md:h-32 lg:w-28 lg:h-36 xl:w-32 xl:h-40 rounded-lg overflow-hidden shadow-lg transition-all duration-1000`}
                  style={{ 
                    transform: isVisible ? 'translate(0, 0) rotate(4deg)' : 'translate(-20px, 30px) rotate(8deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '1400ms'
                  }}
                >
                  <Image 
                    src={aboutImages[4]} 
                    alt="About Image 5" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Image 6 - Small center right */}
                <div 
                  className={`absolute top-1/2 right-8 md:right-12 w-20 h-28 md:w-28 md:h-36 lg:w-32 lg:h-44 xl:w-36 xl:h-48 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 z-10`}
                  style={{ 
                    transform: isVisible ? 'translate(0, -50%) rotate(-1deg)' : 'translate(30px, -50%) rotate(-5deg)',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: '1600ms'
                  }}
                >
                  <Image 
                    src={aboutImages[5]} 
                    alt="About Image 6" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-6 h-6 md:w-12 md:h-12 bg-[#FDF5AA]/30 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute top-1/3 -left-4 md:-left-8 w-4 h-4 md:w-8 md:h-8 bg-white/20 rounded-full blur-sm animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 -right-6 md:-right-12 w-8 h-8 md:w-16 md:h-16 bg-[#58A0C8]/30 rounded-full blur-sm animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Quote Section with Apple-style glassmorphism */}
          <div className={`mt-12 md:mt-16 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative backdrop-blur-lg bg-white/5 rounded-3xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto">
              <div className="text-center">
                <svg className="w-8 h-8 md:w-12 md:h-12 text-[#FDF5AA] mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <blockquote className="text-lg md:text-2xl lg:text-3xl font-light italic text-[#FDF5AA] hindi-artistic mb-4 md:mb-6">
                  "कविता मेरे लिए सिर्फ शब्दों का खेल नहीं, बल्कि आत्मा की अभिव्यक्ति है।"
                </blockquote>
                <cite className="block text-sm md:text-lg text-white/70 english-text">
                  "Poetry for me is not just a play of words, but the expression of the soul."
                </cite>
              </div>
              
              {/* Subtle glow effect */}
              {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FDF5AA]/5 via-transparent to-[#58A0C8]/5 -z-10"></div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#FDF5AA]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-24 h-24 md:w-48 md:h-48 bg-[#58A0C8]/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
