'use client';

import { useState, useEffect } from 'react';
import { upcomingShows } from '@/data/poemsData';
import { CalendarIcon, MapPinIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { CalendarIcon as CalendarSolid, MapPinIcon as MapPinSolid } from '@heroicons/react/24/solid';

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
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });
  };

  const formatDateShort = (dateString: string): { day: string, month: string, year: string } => {
    const date = new Date(dateString);
    const day = date.getDate().toString();
    const month = date.toLocaleDateString('en-IN', { month: 'short' });
    const year = date.getFullYear().toString();
    return { day, month, year };
  };

  return (
    <section id="upcoming-shows" className="relative py-16 md:py-20 bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#FDF5AA]/10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full"></div>
      </div>

      {/* Classical Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Elegant Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px top-1/2 transform -translate-y-1/2"></div>
              <h2 className="relative inline-block px-8 text-3xl md:text-4xl lg:text-5xl font-bold text-white bg-gradient-to-br from-[#113F67] via-[#34699A] to-[#58A0C8] bg-clip-text">
                Upcoming Shows
              </h2>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FDF5AA]"></div>
              <StarIcon className="h-5 w-5 text-[#FDF5AA]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FDF5AA]"></div>
            </div>
            <p className="mt-4 text-lg md:text-xl text-white/90 hindi-text max-w-2xl mx-auto leading-relaxed">
              मिलिए मुझसे इन आगामी हास्य कार्यक्रमों में
            </p>
          </div>

          {/* Shows Container - 2 Cards per Row */}
          {upcomingShows.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {upcomingShows.map((show, index) => {
                const dateInfo = formatDateShort(show.date);
                return (
                  <div
                    key={show.id}
                    className={`group relative transition-all duration-700 hover:scale-105`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                      transitionDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Compact Stunning Card Design */}
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                      
                      {/* Animated Background Elements */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#FDF5AA]/10 to-transparent rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-[#34699A]/8 to-transparent rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                      </div>

                      {/* Golden Accent Border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FDF5AA] via-[#FDF5AA]/60 to-[#FDF5AA] group-hover:h-2 transition-all duration-300"></div>
                      
                      {/* Content Container */}
                      <div className="relative p-6 z-10">
                        <div className="flex gap-4">
                          
                          {/* Compact Date Card */}
                          <div className="flex-shrink-0">
                            <div className="relative bg-gradient-to-br from-[#113F67] to-[#34699A] rounded-xl p-4 text-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                              <div className="relative">
                                <CalendarSolid className="h-5 w-5 text-[#FDF5AA] mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white hindi-text mb-1">
                                  {dateInfo.day}
                                </div>
                                <div className="text-[#FDF5AA] text-sm font-semibold hindi-text mb-1">
                                  {dateInfo.month}
                                </div>
                                <div className="text-white/80 text-xs hindi-text">
                                  {dateInfo.year}
                                </div>
                              </div>
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA]/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="flex-1 min-w-0">
                            {/* Event Title */}
                            <div className="relative mb-3">
                              <h3 className="text-xl md:text-2xl font-bold text-[#113F67] english-text leading-tight mb-2 group-hover:text-[#34699A] transition-colors duration-300">
                                {show.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <div className="h-1 w-8 bg-gradient-to-r from-[#34699A] to-[#58A0C8] rounded group-hover:w-12 transition-all duration-300"></div>
                                <div className="h-1 w-4 bg-[#FDF5AA] rounded group-hover:w-6 transition-all duration-300"></div>
                              </div>
                            </div>

                            {/* Compact Information Grid */}
                            <div className="space-y-2 mb-3">
                              {/* Time */}
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-[#58A0C8]/15 rounded-lg flex items-center justify-center group-hover:bg-[#58A0C8]/25 transition-colors duration-300">
                                  <ClockIcon className="h-3 w-3 text-[#34699A]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm font-semibold text-[#113F67] english-text">
                                    {show.time}
                                  </span>
                                </div>
                              </div>

                              {/* Location */}
                              <div className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-[#58A0C8]/15 rounded-lg flex items-center justify-center group-hover:bg-[#58A0C8]/25 transition-colors duration-300">
                                  <MapPinSolid className="h-3 w-3 text-[#34699A]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-[#113F67] english-text truncate">
                                    {show.venue}
                                  </div>
                                  <div className="text-xs text-gray-600 english-text">
                                    {show.city}, {show.state}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Compact Description */}
                            <div className="mb-4">
                              <p className="text-gray-700 text-sm hindi-text leading-relaxed line-clamp-2">
                                {show.description}
                              </p>
                            </div>

                            {/* Bottom Section - Type Badge and Action */}
                            <div className="flex items-center justify-between">
                              {/* Event Type Badge */}
                              <div className="bg-gradient-to-r from-[#FDF5AA]/80 to-[#FDF5AA]/60 px-3 py-1 rounded-full group-hover:from-[#FDF5AA] group-hover:to-[#FDF5AA]/80 transition-all duration-300">
                                <span className="text-[#113F67] font-semibold hindi-text text-xs">
                                  {show.type}
                                </span>
                              </div>

                              {/* Action Button */}
                              <button className="group/btn flex items-center gap-2 text-[#34699A] hover:text-[#113F67] font-medium text-sm transition-all duration-300 hover:scale-105">
                                <span className="english-text">Learn More</span>
                                <div className="w-4 h-4 rounded-full bg-[#34699A]/20 flex items-center justify-center group-hover/btn:bg-[#34699A]/30 transition-colors duration-300">
                                  <svg className="w-2 h-2 text-[#34699A] transform group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="currentColor" viewBox="0 0 8 8">
                                    <path d="M0 0v8l8-4z"/>
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Elegant Corner Accents */}
                      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FDF5AA]/40 rounded-tr-lg group-hover:border-[#FDF5AA]/60 group-hover:scale-125 transition-all duration-300"></div>
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FDF5AA]/40 rounded-bl-lg group-hover:border-[#FDF5AA]/60 group-hover:scale-125 transition-all duration-300"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA]/5 via-transparent to-[#34699A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Elegant No Shows Message */
            <div className={`text-center py-12 md:py-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/20">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                
                <div className="relative">
                  {/* Icon Container */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#FDF5AA]/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <CalendarIcon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    <div className="absolute -inset-2 border border-white/10 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 hindi-text">
                    नए कार्यक्रमों की तैयारी चल रही है
                  </h3>
                  
                  <p className="text-white/80 hindi-text text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                    जल्द ही नए हास्य कार्यक्रमों की जानकारी यहाँ अपडेट की जाएगी
                  </p>

                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
                    <StarIcon className="h-4 w-4 text-[#FDF5AA]" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
                  </div>
                  
                  <p className="text-white/60 hindi-text text-xs md:text-sm">
                    सूचनाओं के लिए हमारे सोशल मीडिया को फॉलो करें
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Premium Booking CTA Section - Unique Animated Design */}
          <div className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-br from-white/15 via-white/25 to-white/15 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/30 group hover:border-white/50 transition-all duration-500">
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Floating Particles */}
                <div className="absolute top-10 left-10 w-2 h-2 bg-[#FDF5AA]/60 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-16 left-20 w-1 h-1 bg-[#FDF5AA]/80 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-10 right-10 w-2.5 h-2.5 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
                
                {/* Animated Gradient Orbs */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#FDF5AA]/20 to-transparent rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-white/10 to-transparent rounded-full animate-pulse" style={{animationDuration: '6s'}}></div>
                
                {/* Moving Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FDF5AA]/50 to-transparent transform -skew-x-12 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/30 to-transparent transform skew-x-12 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>

              {/* Elegant Corner Decorations with Animation */}
              <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-[#FDF5AA]/70 rounded-tl-xl transform group-hover:scale-125 transition-transform duration-500"></div>
              <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-[#FDF5AA]/70 rounded-tr-xl transform group-hover:scale-125 transition-transform duration-500 delay-100"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-[#FDF5AA]/70 rounded-bl-xl transform group-hover:scale-125 transition-transform duration-500 delay-200"></div>
              <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-[#FDF5AA]/70 rounded-br-xl transform group-hover:scale-125 transition-transform duration-500 delay-300"></div>

              <div className="relative p-8 md:p-12 z-10">
                {/* Premium Header with Animation */}
                <div className="relative mb-8">
                  {/* Animated Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 english-text transform group-hover:scale-105 transition-transform duration-500">
                    Book Your Event
                  </h3>
                  
                  {/* Hindi Subtitle with Glow Effect */}
                  <p className="text-xl md:text-2xl text-[#FDF5AA] hindi-text font-semibold mb-6 transform group-hover:scale-105 transition-all duration-500 drop-shadow-lg">
                    आपके खास मौकों के लिए हास्य और साहित्य का तड़का
                  </p>

                  {/* Animated Decorative Line */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#FDF5AA] to-white animate-pulse"></div>
                    <div className="w-3 h-3 bg-gradient-to-br from-[#FDF5AA] to-white rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent via-white to-[#FDF5AA] animate-pulse"></div>
                  </div>
                </div>

                {/* Premium Services Grid with Hover Effects */}
                <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
                  
                  {/* Poetry Conventions */}
                  <div className="group/service relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FDF5AA]/50 transition-all duration-500 hover:scale-105 hover:bg-white/20">
                    {/* Service Card Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA]/5 to-transparent rounded-2xl opacity-0 group-hover/service:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FDF5AA]/30 to-[#FDF5AA]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/service:scale-110 transition-transform duration-500">
                        <StarIcon className="h-7 w-7 text-[#FDF5AA] group-hover/service:animate-pulse" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 english-text group-hover/service:text-[#FDF5AA] transition-colors duration-300">Poetry Conventions</h4>
                      <p className="text-base text-[#FDF5AA]/90 hindi-text font-medium mb-3 group-hover/service:scale-105 transition-transform duration-300">
                        कवि सम्मेलन और साहित्यिक सभाएं
                      </p>
                      <p className="text-white/80 text-sm english-text leading-relaxed">
                        Traditional poetry with modern humor for cultural events and literary gatherings
                      </p>
                    </div>
                  </div>

                  {/* Comedy Shows */}
                  <div className="group/service relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FDF5AA]/50 transition-all duration-500 hover:scale-105 hover:bg-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA]/5 to-transparent rounded-2xl opacity-0 group-hover/service:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FDF5AA]/30 to-[#FDF5AA]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/service:scale-110 transition-transform duration-500">
                        <StarIcon className="h-7 w-7 text-[#FDF5AA] group-hover/service:animate-pulse" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 english-text group-hover/service:text-[#FDF5AA] transition-colors duration-300">Comedy Shows</h4>
                      <p className="text-base text-[#FDF5AA]/90 hindi-text font-medium mb-3 group-hover/service:scale-105 transition-transform duration-300">
                        हास्य कार्यक्रम और मनोरंजन शो
                      </p>
                      <p className="text-white/80 text-sm english-text leading-relaxed">
                        Stand-up comedy and humorous performances for all types of celebrations
                      </p>
                    </div>
                  </div>

                  {/* Corporate Events */}
                  <div className="group/service relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-[#FDF5AA]/50 transition-all duration-500 hover:scale-105 hover:bg-white/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA]/5 to-transparent rounded-2xl opacity-0 group-hover/service:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FDF5AA]/30 to-[#FDF5AA]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/service:scale-110 transition-transform duration-500">
                        <StarIcon className="h-7 w-7 text-[#FDF5AA] group-hover/service:animate-pulse" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 english-text group-hover/service:text-[#FDF5AA] transition-colors duration-300">Corporate Events</h4>
                      <p className="text-base text-[#FDF5AA]/90 hindi-text font-medium mb-3 group-hover/service:scale-105 transition-transform duration-300">
                        कॉर्पोरेट कार्यक्रम और व्यावसायिक समारोह
                      </p>
                      <p className="text-white/80 text-sm english-text leading-relaxed">
                        Professional entertainment for corporate functions and business celebrations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Features with Animation */}
                <div className="relative bg-white/8 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-4xl mx-auto border border-white/20 group-hover:border-white/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FDF5AA]/5 via-transparent to-[#FDF5AA]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-white mb-3 english-text">Why Choose Excellence</h4>
                    <p className="text-lg text-[#FDF5AA]/90 hindi-text font-medium mb-6">क्यों चुनें डॉ. मुकेश गौतम को?</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-left">
                      <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-3 h-3 bg-gradient-to-br from-[#FDF5AA] to-white rounded-full animate-pulse"></div>
                        <span className="text-white/90 english-text text-sm">National Award-Winning Poet</span>
                      </div>
                      <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300 delay-75">
                        <div className="w-3 h-3 bg-gradient-to-br from-[#FDF5AA] to-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-white/90 english-text text-sm">30+ Years Stage Experience</span>
                      </div>
                      <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300 delay-150">
                        <div className="w-3 h-3 bg-gradient-to-br from-[#FDF5AA] to-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-white/90 english-text text-sm">2500+ Successful Performances</span>
                      </div>
                      <div className="flex items-center gap-3 group-hover:scale-105 transition-transform duration-300 delay-225">
                        <div className="w-3 h-3 bg-gradient-to-br from-[#FDF5AA] to-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                        <span className="text-white/90 english-text text-sm">Pan-India Availability</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium CTA Button with Unique Animation */}
                <div className="relative">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group/cta relative inline-flex items-center gap-4 bg-gradient-to-r from-[#FDF5AA] via-[#FDF5AA]/95 to-[#FDF5AA] text-[#113F67] px-12 py-5 rounded-2xl font-bold english-text text-lg transition-all duration-500 hover:shadow-2xl hover:scale-110 transform hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Button Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 transform -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Button Content */}
                    <div className="relative z-10 flex items-center gap-4">
                      <MapPinIcon className="h-6 w-6 group-hover/cta:scale-125 group-hover/cta:rotate-12 transition-all duration-500" />
                      <span className="group-hover/cta:scale-105 transition-transform duration-300">Book Your Show Now</span>
                      <div className="w-2 h-2 bg-[#113F67]/60 rounded-full group-hover/cta:animate-ping"></div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FDF5AA] to-white rounded-2xl opacity-0 group-hover/cta:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                  </a>

                  {/* Additional Hindi CTA Text */}
                  <p className="text-[#FDF5AA]/90 hindi-text text-lg font-medium mt-4 animate-pulse">
                    आज ही बुक करें • तुरंत पुष्टि • प्रीमियम सेवा गारंटी
                  </p>
                  
                  {/* Availability Info */}
                  <p className="text-white/60 english-text text-sm mt-3">
                    Available Nationwide • Flexible Scheduling • Professional Entertainment Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingShows;