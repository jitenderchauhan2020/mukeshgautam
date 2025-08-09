'use client';

import { useEffect, useState } from 'react';
import { aboutData } from '@/data/siteData';

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

  return (
    <section 
      id="about"
      className="section-padding bg-[#34699A] text-white"
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
          <div className="grid-responsive-1-2 items-center">
            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              {aboutData.bio.map((paragraph, index) => (
                <p 
                  key={index}
                  className={`text-base md:text-lg leading-relaxed hindi-text transition-all duration-1000`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Achievements */}
              <div className={`mt-6 md:mt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#FDF5AA] hindi-text">
                  उपलब्धियां
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {aboutData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start hindi-text text-sm md:text-base">
                      <span className="text-[#FDF5AA] mr-2 mt-1 text-lg">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className={`transition-all duration-1000 delay-400 order-1 lg:order-2 mb-6 lg:mb-0 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                  {/* Placeholder for poet's image */}
                  <div className="w-full h-full bg-gradient-to-br from-[#58A0C8] to-[#113F67] flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-10 h-10 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-white/80 hindi-text text-sm md:text-base">
                        कवि की तस्वीर यहाँ आएगी
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 h-12 md:w-24 md:h-24 bg-[#FDF5AA] rounded-full opacity-50"></div>
                <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-8 h-8 md:w-16 md:h-16 bg-[#58A0C8] rounded-full opacity-70"></div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <blockquote className="text-lg md:text-2xl lg:text-3xl font-light italic text-[#FDF5AA] hindi-artistic max-w-4xl mx-auto px-4">
              "कविता मेरे लिए सिर्फ शब्दों का खेल नहीं, बल्कि आत्मा की अभिव्यक्ति है।"
            </blockquote>
            <cite className="block mt-3 md:mt-4 text-sm md:text-lg text-white/80 english-text">
              "Poetry for me is not just a play of words, but the expression of the soul."
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
