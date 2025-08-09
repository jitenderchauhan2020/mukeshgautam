'use client';

import { useState, useEffect } from 'react';
import { upcomingShows } from '@/data/poemsData';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const UpcomingShows = () => {
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

    const section = document.querySelector('#upcoming-shows');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hi-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <section id="upcoming-shows" className="section-padding bg-[#58A0C8]">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="heading-2 text-white mb-3 md:mb-4 hindi-artistic">
              आगामी कार्यक्रम
            </h2>
            <p className="text-lg md:text-xl text-white/90 hindi-text">
              मिलिए मुझसे इन आगामी हास्य कार्यक्रमों में
            </p>
          </div>

          {/* Shows List */}
          {upcomingShows.length > 0 ? (
            <div className="space-y-6 md:space-y-8">
              {upcomingShows.map((show, index) => (
                <div
                  key={show.id}
                  className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
                    {/* Event Details */}
                    <div className="flex-1">
                      {/* Event Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-[#113F67] mb-3 md:mb-4 hindi-text">
                        {show.title}
                      </h3>

                      {/* Event Info */}
                      <div className="space-y-2 md:space-y-3 mb-4">
                        {/* Date & Time */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center text-[#34699A]">
                            <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                            <span className="text-sm md:text-base hindi-text">
                              {formatDate(show.date)}
                            </span>
                          </div>
                          <div className="flex items-center text-[#34699A]">
                            <ClockIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                            <span className="text-sm md:text-base hindi-text">
                              {show.time}
                            </span>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-[#34699A]">
                          <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                          <span className="text-sm md:text-base hindi-text">
                            {show.venue}, {show.city}, {show.state}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm md:text-base hindi-text mb-4">
                        {show.description}
                      </p>

                      {/* Event Type Badge */}
                      <span className="inline-block bg-[#FDF5AA] text-[#113F67] px-3 py-1 rounded-full text-xs md:text-sm font-medium hindi-text">
                        {show.type}
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="lg:flex-shrink-0">
                      {show.ticketLink ? (
                        <a
                          href={show.ticketLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full lg:w-auto"
                        >
                          टिकट बुक करें
                        </a>
                      ) : (
                        <button className="btn-primary w-full lg:w-auto cursor-not-allowed opacity-75">
                          जल्द आएंगी जानकारी
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Shows Message */
            <div className={`text-center py-12 md:py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CalendarIcon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 hindi-text">
                  नए कार्यक्रमों की तैयारी चल रही है
                </h3>
                <p className="text-white/80 hindi-text text-base md:text-lg mb-6">
                  जल्द ही नए हास्य कार्यक्रमों की जानकारी यहाँ अपडेट की जाएगी
                </p>
                <p className="text-white/60 hindi-text text-sm md:text-base">
                  सूचनाओं के लिए हमारे सोशल मीडिया को फॉलो करें
                </p>
              </div>
            </div>
          )}

          {/* Call to Action for Booking */}
          <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 hindi-text">
                अपने कार्यक्रम के लिए बुक करें
              </h3>
              <p className="text-white/80 hindi-text mb-6 text-sm md:text-base">
                कवि सम्मेलन, हास्य कार्यक्रम, या कॉर्पोरेट इवेंट के लिए संपर्क करें
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary bg-[#FDF5AA] text-[#113F67] hover:bg-white"
              >
                संपर्क करें
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;
