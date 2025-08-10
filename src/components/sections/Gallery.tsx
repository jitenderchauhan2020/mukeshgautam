'use client';

import { useState, useEffect } from 'react';
import { galleryImages, GalleryImage } from '@/data/completeGalleryData';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState(20); // Show 20 images by default

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#gallery');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Image loading handler with better debugging
  const handleImageLoad = (imageId: string, imageSrc: string) => {
    console.log(`✅ Image loaded successfully: ${imageId} - ${imageSrc}`);
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const handleImageError = (imageId: string, imageSrc: string) => {
    console.error(`❌ Image failed to load: ${imageId} - ${imageSrc}`);
    setFailedImages(prev => new Set([...prev, imageId]));
    setLoadedImages(prev => new Set([...prev, imageId])); // Mark as loaded to hide spinner
  };

  // Check image loading status
  const isImageLoaded = (imageId: string) => loadedImages.has(imageId);
  const isImageFailed = (imageId: string) => failedImages.has(imageId);

  // Get visible images based on current count
  const visibleImages = galleryImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < galleryImages.length;

  // Load more images function
  const loadMoreImages = () => {
    setVisibleCount(prev => Math.min(prev + 10, galleryImages.length));
  };

  // Open image in modal
  const openImageModal = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Navigate in modal (works with all images, not just visible ones)
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
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
      <section id="gallery" className="section-padding bg-[#58A0C8]">
        <div className="container-custom">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section Title */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="heading-2 text-white mb-3 md:mb-4 ">
                Photo Gallery
              </h2>
              <p className="text-lg md:text-xl text-white/90 hindi-text">
                जीवन के खूबसूरत पलों की झलकियां
              </p>
            </div>

            {/* Simple Grid Gallery - Shows Visible Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 max-w-7xl mx-auto">
              {visibleImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${index * 50}ms`
                  }}
                  onClick={() => openImageModal(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-40 md:h-48 lg:h-52 overflow-hidden">
                    {/* Loading Spinner - Show when image is not loaded yet */}
                    {!isImageLoaded(image.id) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA] to-[#113F67] flex items-center justify-center z-20">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                        <span className="ml-2 text-white text-xs">Loading...</span>
                      </div>
                    )}
                    
                    {/* Error Placeholder - Show when image failed to load */}
                    {isImageFailed(image.id) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5AA] to-[#113F67] flex items-center justify-center z-10">
                        <div className="text-center p-4">
                          <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-[#113F67]/50" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                          </svg>
                          <p className="text-[#113F67] text-sm md:text-base hindi-text font-medium">
                            {image.title}
                          </p>
                          <p className="text-[#113F67]/70 text-xs hindi-text mt-1">
                            (चित्र लोड नहीं हो सका)
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {/* Main Image */}
                    <img
                      key={image.id} // Force re-render if needed
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                        isImageLoaded(image.id) && !isImageFailed(image.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(image.id, image.src)}
                      onError={() => handleImageError(image.id, image.src)}
                      loading="lazy"
                      // Better error handling attributes
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            {hasMoreImages && (
              <div className="text-center mt-8 md:mt-12">
                <button
                  onClick={loadMoreImages}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/30 hover:border-white/50"
                >
                  <div className="flex items-center space-x-2">
                    <span className="hindi-text font-medium">और देखें</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center mt-8 md:mt-16">
              <p className="text-lg md:text-xl text-white mb-4 md:mb-6">
                Follow us on social media to see more pictures
              </p>
              <div className="flex justify-center items-center space-x-4 md:space-x-6">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/16mqRtaG7c/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/kavimukeshgautam?igsh=c2k4dmt0ejZmd2t5&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/@mukeshgautamofficial?si=gXlrIhpyf_ZlbLB0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Twitter */}
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30 hover:border-white/50"
                >
                  <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

              {/* Additional Info */}
              {/* <div className="mt-4 text-center">
                <p className="text-white/70 text-sm">
                  Find more photos on our social media
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Main Image */}
            <div 
              className="flex items-center justify-center w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-full max-h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 hindi-artistic">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.description && (
                    <p className="text-base hindi-text opacity-90">
                      {selectedImage.description}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-white/70">
                      {currentIndex + 1} / {galleryImages.length}
                    </span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
              {galleryImages.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((img, idx) => {
                const realIndex = Math.max(0, currentIndex - 2) + idx;
                return (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(realIndex);
                      setSelectedImage(galleryImages[realIndex]);
                    }}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      realIndex === currentIndex 
                        ? 'border-white scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;