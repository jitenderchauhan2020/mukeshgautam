'use client';

import { useState, useEffect } from 'react';
import { tvShows } from '@/data/siteData';

const TVShows = () => {
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

    const section = document.querySelector('#tv-shows');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tv-shows" className="section-padding bg-white">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="heading-2 text-[#113F67] mb-3 md:mb-4 hindi-artistic">
              टेलीविजन कार्यक्रम
            </h2>
            <p className="text-lg md:text-xl text-[#34699A] hindi-text">
              प्रसिद्ध टीवी चैनलों पर मेरी उपस्थिति
            </p>
          </div>

          {/* TV Shows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tvShows.map((show, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#FDF5AA] to-[#58A0C8]/20 rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Show Name */}
                  <h3 className="text-lg md:text-xl font-bold text-[#113F67] mb-2 md:mb-3 hindi-text leading-tight">
                    {show.name}
                  </h3>
                  
                  {/* Channel */}
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className="w-2 h-2 bg-[#34699A] rounded-full mr-2"></div>
                    <span className="text-[#34699A] font-medium hindi-text text-sm md:text-base">
                      {show.channel}
                    </span>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="mt-auto">
                    <span className="inline-block bg-[#113F67] text-white px-3 py-1 rounded-full text-xs md:text-sm hindi-text">
                      {show.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-[#34699A] rounded-2xl p-6 md:p-8 text-white">
              <h3 className="text-xl md:text-2xl font-bold hindi-text mb-4 md:mb-6">
                टेलीविजन में उपलब्धियां
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FDF5AA] mb-2">16+</div>
                  <div className="text-sm md:text-base hindi-text">प्रसिद्ध टीवी शो</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FDF5AA] mb-2">30+</div>
                  <div className="text-sm md:text-base hindi-text">वर्षों का अनुभव</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FDF5AA] mb-2">2500+</div>
                  <div className="text-sm md:text-base hindi-text">हास्य प्रस्तुतियां</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVShows;
