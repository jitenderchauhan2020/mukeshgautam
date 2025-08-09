'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteData';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#34699A]">
      <div className="container-custom">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="heading-2 text-white mb-3 md:mb-4 hindi-artistic">
              संपर्क करें
            </h2>
            <p className="text-lg md:text-xl text-white/90 hindi-text">
              अपने विचार साझा करें, मैं आपका इंतजार कर रहा हूं
            </p>
          </div>

          <div className="grid-responsive-1-2 items-stretch">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 hindi-text">
                  मुझसे जुड़ें
                </h3>
                
                <div className="space-y-4 md:space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                      <EnvelopeIcon className="h-5 w-5 md:h-6 md:w-6 text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium hindi-text mb-1 text-sm md:text-base">ईमेल</h4>
                      <a 
                        href={`mailto:${siteConfig.social.email}`}
                        className="text-[#FDF5AA] hover:text-white transition-colors english-text text-sm md:text-base"
                      >
                        {siteConfig.social.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                      <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium hindi-text mb-1 text-sm md:text-base">फोन</h4>
                      <a 
                        href={`tel:${siteConfig.social.phone}`}
                        className="text-[#FDF5AA] hover:text-white transition-colors english-text text-sm md:text-base"
                      >
                        {siteConfig.social.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                      <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium hindi-text mb-1 text-sm md:text-base">स्थान</h4>
                      <p className="text-[#FDF5AA] hindi-text text-sm md:text-base">
                        भारत
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-6 md:mt-8">
                  <h4 className="text-white font-medium hindi-text mb-3 md:mb-4 text-sm md:text-base">सोशल मीडिया</h4>
                  <div className="flex space-x-3 md:space-x-4">
                    {/* Instagram */}
                    <a 
                      href={siteConfig.social.instagram}
                      className="w-8 h-8 md:w-10 md:h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#113F67] group-hover:text-[#34699A]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a 
                      href={siteConfig.social.facebook}
                      className="w-8 h-8 md:w-10 md:h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#113F67] group-hover:text-[#34699A]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a 
                      href={siteConfig.social.youtube}
                      className="w-8 h-8 md:w-10 md:h-10 bg-[#FDF5AA] rounded-full flex items-center justify-center hover:bg-white transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-[#113F67] group-hover:text-[#34699A]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-[#113F67] mb-4 md:mb-6 hindi-text">
                  संदेश भेजें
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#113F67] mb-2 hindi-text">
                      नाम
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="आपका नाम"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#113F67] mb-2 hindi-text">
                      ईमेल
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input english-text"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#113F67] mb-2 hindi-text">
                      संदेश
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="form-input resize-none hindi-text"
                      placeholder="अपना संदेश यहाँ लिखें..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        भेजा जा रहा है...
                      </>
                    ) : (
                      <>
                        संदेश भेजें
                        <PaperAirplaneIcon className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </>
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg hindi-text text-sm md:text-base">
                      धन्यवाद! आपका संदेश भेज दिया गया है।
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg hindi-text text-sm md:text-base">
                      क्षमा करें, संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
