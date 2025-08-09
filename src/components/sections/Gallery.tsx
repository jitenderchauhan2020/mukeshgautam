'use client';

import { useState, useEffect } from 'react';
import { galleryImages, GalleryImage } from '@/data/poemsData';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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

  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-[#58A0C8]">
        <div className="container-custom">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Section Title */}
            <div className="text-center mb-8 md:mb-16">
              <h2 className="heading-2 text-white mb-3 md:mb-4 hindi-artistic">
                चित्र संग्रह
              </h2>
              <p className="text-lg md:text-xl text-white/90 hindi-text">
                जीवन के खूबसूरत पलों की झलकियां
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid-responsive-1-2-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-item bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 100}ms`
                  }}
                  onClick={() => openImageModal(image)}
                >
                  {/* Placeholder for image */}
                  <div className="w-full h-48 md:h-64 bg-gradient-to-br from-[#FDF5AA] to-[#113F67] flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-[#113F67]/50" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-[#113F67] text-sm md:text-base hindi-text font-medium">
                        {image.title}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay with Description */}
                  <div className="gallery-overlay">
                    <div className="gallery-text">
                      <h3 className="text-lg md:text-xl font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm md:text-lg leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Additional Gallery Items Placeholder */}
              {[1, 2, 3].map((index) => (
                <div
                  key={`placeholder-${index}`}
                  className={`gallery-item bg-white/10 backdrop-blur-sm rounded-xl border-2 border-dashed border-white/30 overflow-hidden transition-all duration-500`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${index * 100 + 400}ms`
                  }}
                >
                  <div className="w-full h-48 md:h-64 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <p className="text-white/70 text-xs md:text-sm hindi-text">
                        नई तस्वीरें जल्द आएंगी
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8 md:mt-16">
              <p className="text-lg md:text-xl text-white mb-4 md:mb-6 hindi-text">
                और भी तस्वीरें देखने के लिए सोशल मीडिया पर फॉलो करें
              </p>
              <div className="flex justify-center space-x-4 md:space-x-6">
                <a href="#" className="text-white hover:text-[#FDF5AA] transition-colors p-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#FDF5AA] transition-colors p-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#FDF5AA] transition-colors p-2">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImageModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4 md:mb-6">
              <div className="flex-1 pr-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#113F67] hindi-artistic mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-[#34699A] hindi-text text-base md:text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
              <button
                onClick={closeImageModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 flex-shrink-0"
              >
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Large Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#FDF5AA] to-[#113F67] rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 text-[#113F67]/50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
                <p className="text-[#113F67] text-base md:text-lg hindi-text font-medium">
                  {selectedImage.title}
                </p>
                <p className="text-[#113F67]/70 text-xs md:text-sm hindi-text mt-2">
                  (यहाँ बड़ी तस्वीर दिखाई जाएगी)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
