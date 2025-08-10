'use client';

import { useState, useEffect } from 'react';
import { tvShows, featuredVideos } from '@/data/siteData';
import { PlayIcon, TvIcon } from '@heroicons/react/24/solid';

const TVShows = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <>
      <section id="tv-shows" className="section-padding bg-gradient-to-br from-[#113F67] to-[#34699A] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section Title */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#FDF5AA] rounded-full mb-4 md:mb-6">
                <TvIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#113F67]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 hindi-artistic">
                टेलीविजन कार्यक्रम
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#FDF5AA] hindi-text max-w-2xl mx-auto leading-relaxed">
                प्रसिद्ध टीवी चैनलों पर मेरी हास्य प्रस्तुतियां
              </p>
            </div>

            {/* Featured Videos Section */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FDF5AA] text-center mb-6 md:mb-8 hindi-artistic">
                विशेष प्रस्तुतियां
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
                {featuredVideos.map((video, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-500 hover:scale-105 active:scale-95 touch-manipulation"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transitionDelay: `${index * 150}ms`
                    }}
                    onClick={() => openVideo(video.videoUrl)}
                  >
                    <div className="relative bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm border border-white/20">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.classList.remove('hidden');
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA] to-[#58A0C8] hidden"></div>
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-all">
                          <PlayIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white group-hover:scale-110 transition-transform drop-shadow-lg" />
                        </div>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h4 className="font-bold text-white mb-1 hindi-text text-sm sm:text-sm md:text-base leading-tight">
                          {video.title}
                        </h4>
                        <p className="text-[#FDF5AA] text-xs sm:text-xs md:text-sm">
                          {video.channel}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TV Shows Compact List */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[#FDF5AA] text-center mb-6 md:mb-8 hindi-artistic">
                टेलीविजन सफर
              </h3>
              
              <div className="max-w-5xl mx-auto px-4">
                {/* Mobile: Single Column Layout */}
                <div className="md:hidden space-y-3">
                  {tvShows.map((show, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: `${index * 50}ms`,
                        transition: 'all 0.5s ease-out'
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-[#FDF5AA] text-[#113F67] rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold text-white mb-1 hindi-text leading-tight">
                            {show.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-[#FDF5AA] text-sm">
                            <TvIcon className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium">
                              {show.channel}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF5AA]/10 to-[#58A0C8]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>

                {/* Desktop: Multi-Column Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tvShows.map((show, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transitionDelay: `${index * 50}ms`,
                        transition: 'all 0.5s ease-out'
                      }}
                    >
                      <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FDF5AA] text-[#113F67] rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      
                      <div>
                        <h4 className="text-sm md:text-base font-bold text-white mb-2 hindi-text leading-tight">
                          {show.name}
                        </h4>
                        <div className="flex items-center space-x-2 text-[#FDF5AA] text-xs md:text-sm">
                          <TvIcon className="h-3 w-3 flex-shrink-0" />
                          <span className="font-medium truncate">
                            {show.channel}
                          </span>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FDF5AA]/20 to-[#58A0C8]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-6 md:mt-8">
                  <p className="text-[#FDF5AA] text-sm md:text-base hindi-text">
                    16+ प्रसिद्ध टेलीविजन चैनलों पर सफल प्रस्तुतियां
                  </p>
                </div>
              </div>
            </div>

            {/* Cool Stats Section */}
            <div className="text-center transition-all duration-1000 delay-1000 px-4">
              <div className="relative bg-gradient-to-r from-[#FDF5AA] via-white to-[#FDF5AA] rounded-2xl p-1 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-[#113F67] to-[#34699A] rounded-xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, #FDF5AA 0%, transparent 50%), radial-gradient(circle at 75% 75%, #58A0C8 0%, transparent 50%)`
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-center justify-center mb-6 space-y-2 sm:space-y-0">
                      <TvIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#FDF5AA] sm:mr-3" />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold hindi-text text-center sm:text-left">
                        टेलीविजन में उपलब्धियां
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
                      <div className="text-center group">
                        <div className="bg-[#FDF5AA]/20 backdrop-blur rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-[#FDF5AA]/30">
                          <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-black text-[#FDF5AA] group-hover:scale-110 transition-transform">
                            16+
                          </div>
                        </div>
                        <div className="text-xs sm:text-base md:text-sm lg:text-base hindi-text font-semibold text-[#FDF5AA] leading-tight">प्रसिद्ध टीवी शो</div>
                        <div className="text-xs sm:text-sm md:text-xs text-gray-300 mt-1 hidden sm:block">National Television</div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="bg-[#58A0C8]/20 backdrop-blur rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-[#58A0C8]/30">
                          <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-black text-[#58A0C8] group-hover:scale-110 transition-transform">
                            30+
                          </div>
                        </div>
                        <div className="text-xs sm:text-base md:text-sm lg:text-base hindi-text font-semibold text-[#58A0C8] leading-tight">वर्षों का अनुभव</div>
                        <div className="text-xs sm:text-sm md:text-xs text-gray-300 mt-1 hidden sm:block">Years of Excellence</div>
                      </div>
                      
                      <div className="text-center group">
                        <div className="bg-white/20 backdrop-blur rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                          <div className="text-xs sm:text-lg md:text-xl lg:text-2xl font-black text-white group-hover:scale-110 transition-transform">
                            2500+
                          </div>
                        </div>
                        <div className="text-xs sm:text-base md:text-sm lg:text-base hindi-text font-semibold text-white leading-tight">हास्य प्रस्तुतियां</div>
                        <div className="text-xs sm:text-sm md:text-xs text-gray-300 mt-1 hidden sm:block">Comedy Shows</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="w-24 h-1 bg-gradient-to-r from-[#FDF5AA] via-[#58A0C8] to-[#FDF5AA] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={getYouTubeEmbedUrl(selectedVideo)}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default TVShows;
