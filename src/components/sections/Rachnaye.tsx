'use client';

import { useState, useEffect } from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';

// Book images data
const bookImages = [
  {
    id: 'book-1',
    src: '/images/Books/book-1.jpeg',
    title: 'साहित्य संग्रह',
    description: 'मुकेश गौतम की रचनाओं का संकलन',
    alt: 'Book Cover - Literary Collection'
  },
  {
    id: 'book-2',
    src: '/images/Books/book-2.jpeg',
    title: 'हास्य कविता संग्रह',
    description: 'हास्य कविताओं का अनूठा संकलन',
    alt: 'Book Cover - Comedy Poetry Collection'
  },
  {
    id: 'book-3',
    src: '/images/Books/book-3.jpeg',
    title: 'व्यंग्य रचनाएं',
    description: 'समसामयिक विषयों पर व्यंग्यात्मक रचनाएं',
    alt: 'Book Cover - Satirical Writings'
  },
  {
    id: 'book-4',
    src: '/images/Books/book-4.jpeg',
    title: 'काव्य संग्रह',
    description: 'भावनाओं से भरपूर कविताओं का संग्रह',
    alt: 'Book Cover - Poetry Collection'
  },
  {
    id: 'book-5',
    src: '/images/Books/book-5.jpeg',
    title: 'हास्य व्यंग्य',
    description: 'हास्य और व्यंग्य की मिश्रित रचनाएं',
    alt: 'Book Cover - Humor and Satire'
  },
  {
    id: 'book-6',
    src: '/images/Books/book-6.jpeg',
    title: 'गद्य संग्रह',
    description: 'गद्य की विविधता से भरपूर संकलन',
    alt: 'Book Cover - Prose Collection'
  }
];

interface BookImage {
  id: string;
  src: string;
  title: string;
  description: string;
  alt: string;
}

const Rachnaye = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<BookImage | null>(null);
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

    const section = document.querySelector('#rachnaye');
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
  const openImageModal = (image: BookImage, index: number) => {
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
    const nextIndex = (currentIndex + 1) % bookImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(bookImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? bookImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(bookImages[prevIndex]);
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

  return (
    <>
      <section id="rachnaye" className="section-padding bg-gradient-to-br from-[#FDF5AA] to-[#FFFACD] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23113F67' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section Title */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16 px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#113F67] rounded-full mb-4 md:mb-6">
                <BookOpenIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#FDF5AA]" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#113F67] mb-3 md:mb-4 hindi-artistic">
                रचनाएं
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#113F67]/80 hindi-text max-w-2xl mx-auto leading-relaxed">
                साहित्यिक कृतियों का संग्रह - पुस्तकों और लेखन की दुनिया
              </p>
            </div>

            {/* Books Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 max-w-7xl mx-auto px-4">
              {bookImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-[#113F67]/20`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                  onClick={() => openImageModal(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden">
                    {/* Loading Spinner */}
                    {!isImageLoaded(image.id) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#113F67] to-[#58A0C8] flex items-center justify-center z-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FDF5AA]"></div>
                        <span className="ml-2 text-[#FDF5AA] text-xs">Loading...</span>
                      </div>
                    )}
                    
                    {/* Error Placeholder */}
                    {isImageFailed(image.id) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#113F67] to-[#58A0C8] flex items-center justify-center z-10">
                        <div className="text-center p-4">
                          <BookOpenIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-[#FDF5AA]/50" />
                          <p className="text-[#FDF5AA] text-sm md:text-base hindi-text font-medium">
                            {image.title}
                          </p>
                          <p className="text-[#FDF5AA]/70 text-xs hindi-text mt-1">
                            (चित्र लोड नहीं हो सका)
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#113F67]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-3 text-white w-full">
                        <h3 className="text-sm md:text-base font-semibold hindi-artistic truncate">
                          {image.title}
                        </h3>
                        {image.description && (
                          <p className="text-xs hindi-text opacity-90 truncate">
                            {image.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* View Icon */}
                    <div className="absolute top-2 right-2 bg-[#113F67]/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-[#FDF5AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="text-center mt-8 md:mt-12 px-4">
              <p className="text-[#113F67]/80 text-sm md:text-base hindi-text">
                साहित्य की दुनिया में मुकेश गौतम की अमूल्य कृतियां
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
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
              {currentIndex + 1} / {bookImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rachnaye;
