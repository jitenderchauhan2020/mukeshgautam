'use client';

import { useState, useEffect } from 'react';
import { hindiPoems, poemCategories, HindiPoem } from '@/data/poemsData';
import { XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const Poems = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPoem, setSelectedPoem] = useState<HindiPoem | null>(null);
  const [filteredPoems, setFilteredPoems] = useState<HindiPoem[]>(hindiPoems);
  const [favorites, setFavorites] = useState<string[]>([]);
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

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPoems(hindiPoems);
    } else {
      setFilteredPoems(hindiPoems.filter(poem => poem.category === selectedCategory));
    }
  }, [selectedCategory]);

  const toggleFavorite = (poemId: string) => {
    setFavorites(prev => 
      prev.includes(poemId) 
        ? prev.filter(id => id !== poemId)
        : [...prev, poemId]
    );
  };

  const openPoemModal = (poem: HindiPoem) => {
    setSelectedPoem(poem);
    document.body.style.overflow = 'hidden';
  };

  const closePoemModal = () => {
    setSelectedPoem(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="poetry" className="section-padding bg-white">
        <div className="container-custom">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section Title */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="heading-2 text-[#113F67] mb-3 md:mb-4 hindi-artistic">
                मेरी कविताएं
              </h2>
              <p className="text-lg md:text-xl text-[#34699A] hindi-text">
                भावनाओं का संगम, शब्दों में ढली अनुभूति
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
              {poemCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-3 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium hindi-text transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-[#113F67] text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-[#113F67] hover:bg-[#FDF5AA] hover:text-[#113F67]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Poems Grid */}
            <div className="grid-responsive-1-2-3">
              {filteredPoems.map((poem, index) => (
                <div
                  key={poem.id}
                  className={`poem-card cursor-pointer group transition-all duration-500`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                  onClick={() => openPoemModal(poem)}
                >
                  {/* Category Badge and Favorite */}
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <span className="bg-[#58A0C8] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm hindi-text">
                      {poem.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(poem.id);
                      }}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      {favorites.includes(poem.id) ? (
                        <HeartSolidIcon className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
                      ) : (
                        <HeartIcon className="h-5 w-5 md:h-6 md:w-6" />
                      )}
                    </button>
                  </div>

                  {/* Poem Title */}
                  <h3 className="poem-title text-lg md:text-xl mb-3 md:mb-4 group-hover:text-[#58A0C8] transition-colors">
                    {poem.title}
                  </h3>

                  {/* Poem Excerpt */}
                  <div className="poem-text space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
                    {poem.excerpt.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-center">
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="text-center">
                    <span className="inline-flex items-center text-[#58A0C8] font-medium hindi-text group-hover:text-[#113F67] transition-colors text-sm md:text-base">
                      पूरी कविता पढ़ें
                      <svg className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* No poems message */}
            {filteredPoems.length === 0 && (
              <div className="text-center py-8 md:py-12">
                <p className="text-[#34699A] hindi-text text-lg">
                  इस श्रेणी में कोई कविता नहीं मिली
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Poem Modal */}
      {selectedPoem && (
        <div className="modal-overlay" onClick={closePoemModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4 md:mb-6">
              <div className="flex-1 pr-4">
                <span className="bg-[#58A0C8] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm hindi-text mb-2 inline-block">
                  {selectedPoem.category}
                </span>
                <h2 className="poem-title text-xl md:text-2xl mb-1">{selectedPoem.title}</h2>
                {selectedPoem.titleEnglish && (
                  <p className="text-gray-600 english-text italic text-sm md:text-base">{selectedPoem.titleEnglish}</p>
                )}
              </div>
              <button
                onClick={closePoemModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 flex-shrink-0"
              >
                <XMarkIcon className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            <div className="poem-text space-y-2 md:space-y-3 max-h-60 md:max-h-96 overflow-y-auto text-sm md:text-base">
              {selectedPoem.fullPoem.map((line, index) => (
                <p key={index} className="text-center">
                  {line}
                </p>
              ))}
            </div>
            
            <div className="mt-4 md:mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <span className="text-xs md:text-sm text-gray-600 hindi-text">
                {new Date(selectedPoem.date).toLocaleDateString('hi-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <button
                onClick={() => toggleFavorite(selectedPoem.id)}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
              >
                {favorites.includes(selectedPoem.id) ? (
                  <HeartSolidIcon className="h-4 w-4 md:h-5 md:w-5 text-red-500 mr-1" />
                ) : (
                  <HeartIcon className="h-4 w-4 md:h-5 md:w-5 mr-1" />
                )}
                <span className="text-xs md:text-sm hindi-text">
                  {favorites.includes(selectedPoem.id) ? 'पसंदीदा में शामिल' : 'पसंदीदा में जोड़ें'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Poems;
