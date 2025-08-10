'use client';

import { useState, useEffect } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

const ContactNew = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Contact email from environment variable
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@drmukeshgautam.com';

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

  // Form validation
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!/^[\+]?[\d\s\-\(\)]+$/.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid contact number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit form data to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          'name': formData.name,
          'contact': formData.contact,
          'email': formData.email,
          'message': formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', contact: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative Background Elements - Footer Style */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#113F67]/8 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#34699A]/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#FDF5AA]/12 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#113F67] mb-3">
              Contact Me
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto hindi-text leading-relaxed px-4">
              कोई प्रश्न है या शो बुक करना चाहते हैं? मैं आपसे सुनना चाहूंगा। 
              मुझे एक संदेश भेजें और मैं जल्द से जल्द जवाब दूंगा।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
                
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#113F67] mb-4">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 mb-6 hindi-text text-sm md:text-base leading-relaxed">
                    इनमें से किसी भी माध्यम से बेझिझक संपर्क करें। 
                    मैं हमेशा साथी कॉमेडी प्रेमियों और संभावित सहयोगियों से जुड़ने में खुश हूं।
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                      <EnvelopeIcon className="h-5 w-5 md:h-6 md:w-6 text-[#113F67]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-[#113F67] font-semibold mb-1 text-sm md:text-base">Email</h4>
                      <a 
                        href={`mailto:${contactEmail}`}
                        className="text-[#34699A] hover:text-[#113F67] transition-colors text-sm md:text-base break-all touch-manipulation"
                      >
                        {contactEmail}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/50 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                      <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="text-[#113F67] font-semibold mb-1 text-sm md:text-base">Phone</h4>
                      <a 
                        href="tel:+919876543210"
                        className="text-[#34699A] hover:text-[#113F67] transition-colors text-sm md:text-base touch-manipulation"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-3 p-3 rounded-xl">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#FDF5AA] rounded-full flex items-center justify-center">
                      <MapPinIcon className="h-5 w-5 md:h-6 md:w-6 text-[#113F67]" />
                    </div>
                    <div>
                      <h4 className="text-[#113F67] font-semibold mb-1 text-sm md:text-base">Location</h4>
                      <p className="text-gray-600 text-sm md:text-base">India</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4 border-t border-gray-300">
                  <h4 className="text-[#113F67] font-semibold mb-4 text-base md:text-lg hindi-text">Follow Me</h4>
                  <div className="flex flex-wrap gap-3">
                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/kavimukeshgautam?igsh=c2k4dmt0ejZmd2t5&utm_source=qr"
                      className="w-12 h-12 bg-[#34699A] rounded-full flex items-center justify-center hover:bg-[#113F67] transition-colors group touch-manipulation"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a 
                      href="https://www.facebook.com/share/16mqRtaG7c/?mibextid=wwXIfr"
                      className="w-10 h-10 bg-[#34699A] rounded-full flex items-center justify-center hover:bg-[#113F67] transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a 
                      href="https://youtube.com/@mukeshgautamofficial?si=gXlrIhpyf_ZlbLB0"
                      className="w-10 h-10 bg-[#34699A] rounded-full flex items-center justify-center hover:bg-[#113F67] transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-[#113F67] mb-4 ">
                  Send message
                </h3>

                {/* Hidden form for Netlify detection */}
                <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                  <input type="text" name="name" />
                  <input type="text" name="contact" />
                  <input type="email" name="email" />
                  <textarea name="message"></textarea>
                </form>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-4" data-netlify="true" name="contact">
                  {/* Netlify honeypot field */}
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-sm font-semibold text-[#113F67] mb-2 hindi-text">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 md:py-3 border-2 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-[#34699A] transition-colors text-base md:text-sm ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="अपना पूरा नाम दर्ज करें"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Contact Field */}
                  <div>
                    <label htmlFor="contact" className="block text-sm md:text-sm font-semibold text-[#113F67] mb-2 hindi-text">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 md:py-3 border-2 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-[#34699A] transition-colors text-base md:text-sm ${
                        errors.contact 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {errors.contact && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-sm font-semibold text-[#113F67] mb-2 hindi-text">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 md:py-3 border-2 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-[#34699A] transition-colors text-base md:text-sm ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm md:text-sm font-semibold text-[#113F67] mb-2 hindi-text">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-4 md:py-3 border-2 rounded-xl md:rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-[#34699A] transition-colors resize-none text-base md:text-sm ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="अपने कार्यक्रम, पूछताछ या बस हैलो के बारे में बताएं..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-[#34699A] hover:bg-[#113F67] active:bg-[#113F67] text-white font-semibold py-4 md:py-3 px-6 rounded-xl md:rounded-lg transition-all duration-200 flex items-center justify-center text-base md:text-sm hindi-text touch-manipulation min-h-[48px] ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        भेजा जा रहा है...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center text-green-800">
                        <CheckCircleIcon className="h-4 w-4 mr-2" />
                        <span className="font-medium">Message sent successfully!</span>
                      </div>
                      <p className="mt-1 text-green-700 text-sm">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <div className="flex items-center text-red-800">
                        <ExclamationCircleIcon className="h-4 w-4 mr-2" />
                        <span className="font-medium">Failed to send message</span>
                      </div>
                      <p className="mt-1 text-red-700 text-sm">
                        Please try again or contact me directly via email or phone.
                      </p>
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

export default ContactNew;