'use client';
import React, { useState, useEffect, useRef } from 'react';
import { galleryImages, type GalleryImage } from '../../data/galleryData';
import './gallery.css';

const Gallery = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  // Auto-advance functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000); // 1 second interval
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, galleryImages.length]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Pause/Resume auto-play
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };
  // Touch/Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Image lazy loading
  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>Explore our collection of beautiful images</p>
      </div>
      <div 
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-wrapper">
          <div 
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {galleryImages.map((image, index) => (
              <div key={image.id} className="carousel-slide">
                {/* Lazy loading: only load current, previous, and next images */}
                {Math.abs(index - currentIndex) <= 1 ? (
                  <div className="image-container">
                    {!loadedImages.has(image.id) && (
                      <div className="image-placeholder">
                        <div className="loading-spinner"></div>
                      </div>
                    )}
                    <img
                      src={image.src}
                      alt={image.alt}
                      onLoad={() => handleImageLoad(image.id)}
                      style={{
                        opacity: loadedImages.has(image.id) ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                      }}
                    />
                    <div className="image-overlay">
                      <h3>{image.alt}</h3>
                      <p>{image.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <div className="loading-spinner"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <button 
          className="carousel-btn carousel-btn-prev" 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ❮
        </button>
        <button 
          className="carousel-btn carousel-btn-next" 
          onClick={goToNext}
          aria-label="Next image"
        >
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="carousel-controls">
          <button
            className="play-pause-btn"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>

      {/* Image Counter */}
      <div className="image-counter">
        <span>{currentIndex + 1} / {galleryImages.length}</span>
      </div>
    </div>
  );
};

export default Gallery;