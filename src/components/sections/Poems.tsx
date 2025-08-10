'use client';

import { useState, useEffect } from 'react';
import { hindiPoems, HindiPoem } from '@/data/poemsData';
import { HeartIcon, ChatBubbleOvalLeftIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const Poems = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [expandedPoems, setExpandedPoems] = useState<string[]>([]);
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

    const section = document.querySelector('#poetry');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const toggleFavorite = (poemId: string) => {
    setFavorites(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  const toggleExpand = (poemId: string) => {
    setExpandedPoems(prev =>
      prev.includes(poemId)
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  const isExpanded = (poemId: string) => expandedPoems.includes(poemId);

  const shouldShowSeeMore = (poem: HindiPoem) => {
    return poem.fullPoem.length > 8; // Show "See More" if poem has more than 8 lines
  };

  const getDisplayPoem = (poem: HindiPoem) => {
    if (isExpanded(poem.id) || !shouldShowSeeMore(poem)) {
      return poem.fullPoem;
    }
    // Show first 5 lines as preview
    return poem.fullPoem.slice(0, 5);
  };

  return (
    <section id="poetry" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-6 md:mb-8 lg:mb-10 px-4">
            <h2 className="heading-2 text-[#113F67] mb-3 md:mb-2 hindi-artistic">
              मेरी कविताएं
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#34699A] hindi-text bg-gray-100 p-3 md:p-3 rounded-md">
              भावनाओं का संगम, शब्दों में ढली अनुभूति
            </p>
          </div>

          {/* Social Media Style Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {hindiPoems.map((poem, index) => (
              <div
                key={poem.id}
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 mx-auto w-full max-w-md md:max-w-none`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Post Header */}
                <div className="p-4 sm:p-3 md:p-4 pb-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 sm:space-x-2">
                      <div className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#113F67] to-[#58A0C8] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-xs md:text-sm">MG</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-xs md:text-sm hindi-text truncate">
                          {poem.author}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Hasya Kavi
                        </p>
                      </div>
                    </div>
                    <span className="bg-[#58A0C8] text-white px-2 py-1 rounded-full text-xs hindi-text whitespace-nowrap">
                      {poem.category}
                    </span>
                  </div>

                  {/* Poem Title */}
                  <h2 className="text-base sm:text-sm md:text-base font-bold text-[#113F67] mb-3 sm:mb-2 md:mb-3 hindi-artistic text-center leading-tight">
                    {poem.title}
                  </h2>
                </div>

                {/* Poem Content */}
                <div className="px-4 sm:px-3 md:px-4 pb-2">
                  <div className="poem-text text-sm sm:text-xs md:text-xs bg-gray-100 rounded-lg p-4 sm:p-3 md:p-4">
                    {getDisplayPoem(poem).map((line, lineIndex) => (
                      <p key={lineIndex} className="text-center leading-relaxed sm:leading-normal md:leading-relaxed">
                        {line || <br />}
                      </p>
                    ))}
                    
                    {/* See More / See Less Button */}
                    {shouldShowSeeMore(poem) && (
                      <div className="text-center pt-3 sm:pt-2">
                        <button
                          onClick={() => toggleExpand(poem.id)}
                          className="text-[#58A0C8] hover:text-[#113F67] active:text-[#113F67] font-medium hindi-text transition-colors text-sm sm:text-xs cursor-pointer touch-manipulation min-h-[44px] sm:min-h-[36px] flex items-center justify-center mx-auto"
                        >
                          {isExpanded(poem.id) ? 'कम देखें...' : 'और देखें...'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Post Actions */}
                <div className="px-4 sm:px-3 md:px-4 pb-4 sm:pb-3 md:pb-4">
                  <div className="flex items-center justify-between pt-3 sm:pt-2 border-t border-gray-100">
                    <button
                      onClick={() => toggleFavorite(poem.id)}
                      className={`flex items-center space-x-1 sm:space-x-1 px-3 py-2 sm:px-2 sm:py-1 rounded-lg transition-all duration-300 touch-manipulation min-h-[44px] sm:min-h-[36px] ${
                        favorites.includes(poem.id)
                          ? 'text-red-500 bg-red-50'
                          : 'text-gray-600 hover:text-red-500 hover:bg-red-50 active:bg-red-100'
                      }`}
                    >
                      {favorites.includes(poem.id) ? (
                        <HeartSolidIcon className="h-4 w-4 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                      ) : (
                        <HeartIcon className="h-4 w-4 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                      )}
                      <span className="text-sm sm:text-xs font-medium">
                        {favorites.includes(poem.id) ? 'पसंद' : 'पसंद'}
                      </span>
                    </button>

                    <button className="flex items-center space-x-1 sm:space-x-1 px-3 py-2 sm:px-2 sm:py-1 rounded-lg text-gray-600 hover:text-[#58A0C8] hover:bg-blue-50 active:bg-blue-100 transition-all duration-300 touch-manipulation min-h-[44px] sm:min-h-[36px]">
                      <ChatBubbleOvalLeftIcon className="h-4 w-4 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                      <span className="text-sm sm:text-xs font-medium hindi-text">टिप्पणी</span>
                    </button>

                    <button className="flex items-center space-x-1 sm:space-x-1 px-3 py-2 sm:px-2 sm:py-1 rounded-lg text-gray-600 hover:text-[#58A0C8] hover:bg-blue-50 active:bg-blue-100 transition-all duration-300 touch-manipulation min-h-[44px] sm:min-h-[36px]">
                      <ShareIcon className="h-4 w-4 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                      <span className="text-sm sm:text-xs font-medium hindi-text">साझा</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Upcoming Poem Card */}
            <div className="bg-gradient-to-br from-[#FDF5AA] to-[#F7E98E] rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-yellow-200 mx-auto w-full max-w-md md:max-w-none">
              <div className="p-4 sm:p-3 md:p-4">
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#113F67] to-[#58A0C8] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-xl sm:text-lg md:text-xl">+</span>
                  </div>
                  <h3 className="text-base sm:text-sm md:text-base font-bold text-[#113F67] mb-2 hindi-artistic">
                    नई कविता
                  </h3>
                  <p className="text-sm sm:text-xs md:text-sm text-[#34699A] hindi-text mb-4">
                    जल्द ही आने वाली है एक नई कविता
                  </p>
                  <div className="bg-white/50 rounded-lg p-3 mb-4">
                    <p className="text-sm sm:text-xs md:text-sm text-gray-600 hindi-text italic leading-relaxed">
                      "शब्दों का एक नया संसार<br/>
                      जल्द ही होगा तैयार..."
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-1 text-[#58A0C8]">
                    <span className="text-sm sm:text-xs font-medium hindi-text">जल्द आ रहा है</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poems;
