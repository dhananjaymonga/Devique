import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle, AlertCircle, Copy, Check } from "lucide-react";

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);
  const socialRef = useRef(null);
  const faqRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    message: ""
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    form: false,
    info: false,
    map: false,
    social: false,
    faq: false
  });

  const qualifications = [
    { value: "", label: "Select Qualification" },
    { value: "10th", label: "10th Standard" },
    { value: "12th", label: "12th Standard" },
    { value: "graduation", label: "Graduation" },
    { value: "postgraduation", label: "Post Graduation" }
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.section;
            if (id) {
              setIsVisible(prev => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [formRef, infoRef, mapRef, socialRef, faqRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.qualification) {
      newErrors.qualification = "Please select your qualification";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormState({ isSubmitting: true, isSuccess: false, error: null });

    try {
      // Send data to backend
      const response = await fetch('https://devique-1.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log('Success:', result);
      
      setFormState({ isSubmitting: false, isSuccess: true, error: null });
      setFormData({ name: "", email: "", phone: "", city: "", qualification: "", message: "" });
      setErrors({});
      
      setTimeout(() => {
        setFormState({ isSubmitting: false, isSuccess: false, error: null });
      }, 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setFormState({ 
        isSubmitting: false, 
        isSuccess: false, 
        error: 'Failed to send message. Please try again.' 
      });
      
      setTimeout(() => {
        setFormState({ isSubmitting: false, isSuccess: false, error: null });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const faqs = [
    {
      question: "What are your response times?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Do you offer phone consultations?",
      answer: "Yes! Schedule a call by mentioning your preferred time in the message above."
    },
    {
      question: "Can I visit your office?",
      answer: "Absolutely! We welcome visitors. Please schedule an appointment in advance."
    },
    {
      question: "What's the best way to reach you for urgent matters?",
      answer: "For urgent inquiries, please call us directly at +1 (234) 567-890."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-900 relative overflow-hidden">
      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* HERO */}
      <div ref={heroRef} className="text-center py-20 px-6 relative z-10">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          Get in Touch
        </h1>
        <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Have questions or want to collaborate? Send us a message and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div ref={formRef} data-section="form" className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 shadow-2xl transition-all duration-1000 ${isVisible.form ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Send Us a Message</h2>
            
            {formState.isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <CheckCircle className="text-green-600" size={24} />
                <p className="text-green-700">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {formState.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <AlertCircle className="text-red-600" size={24} />
                <p className="text-red-700">{formState.error}</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-300`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.phone ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="10 digit number"
                    maxLength="10"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.city ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-300`}
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Qualification *</label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border ${errors.qualification ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 transition-all duration-300`}
                  >
                    {qualifications.map((qual) => (
                      <option key={qual.value} value={qual.value}>
                        {qual.label}
                      </option>
                    ))}
                  </select>
                  {errors.qualification && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.qualification}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-red-400' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 transition-all duration-300 resize-none`}
                  placeholder="Tell us how we can help you..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={formState.isSubmitting}
                className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formState.isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div ref={infoRef} data-section="info" className="space-y-6">
              {[
                {
                  icon: <Mail size={24} />,
                  gradient: "from-blue-500 to-blue-600",
                  title: "Email Us",
                  color: "text-blue-600",
                  content: (
                    <>
                      <div className="flex items-center justify-between group">
                        <p className="text-gray-700">contact@yourdomain.com</p>
                        <button
                          onClick={() => copyToClipboard('contact@yourdomain.com', 'email')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded"
                        >
                          {copiedEmail ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-gray-600" />}
                        </button>
                      </div>
                      <p className="text-gray-700">support@yourdomain.com</p>
                    </>
                  )
                },
                {
                  icon: <Phone size={24} />,
                  gradient: "from-blue-500 to-blue-600",
                  title: "Call Us",
                  color: "text-blue-600",
                  content: (
                    <>
                      <div className="flex items-center justify-between group">
                        <p className="text-gray-700">+1 (234) 567-890</p>
                        <button
                          onClick={() => copyToClipboard('+1 (234) 567-890', 'phone')}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded"
                        >
                          {copiedPhone ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-gray-600" />}
                        </button>
                      </div>
                      <p className="text-gray-700">+1 (234) 567-891</p>
                    </>
                  )
                },
                {
                  icon: <MapPin size={24} />,
                  gradient: "from-blue-500 to-blue-600",
                  title: "Visit Us",
                  color: "text-blue-600",
                  content: (
                    <>
                      <p className="text-gray-700">123 Tech Street</p>
                      <p className="text-gray-700">Silicon Valley, CA 94025</p>
                    </>
                  )
                },
                {
                  icon: <Clock size={24} />,
                  gradient: "from-blue-500 to-blue-600",
                  title: "Business Hours",
                  color: "text-blue-600",
                  content: (
                    <>
                      <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-700">Sat - Sun: Closed</p>
                    </>
                  )
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-700 transform hover:-translate-y-1 ${isVisible.info ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-lg text-white`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div ref={mapRef} data-section="map" className={`mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-1000 ${isVisible.map ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1589991111111!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
            className="grayscale-0 hover:saturate-150 transition-all duration-500"
          ></iframe>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-16">
          <h2 className={`text-4xl font-bold text-center mb-12 text-blue-600 transition-all duration-1000 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Frequently Asked Questions
          </h2>
          <div ref={faqRef} data-section="faq" className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-700 ${isVisible.faq ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-blue-600">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOCIAL LINKS & ADDITIONAL INFO */}
        <div ref={socialRef} data-section="social" className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Globe size={40} />, color: "text-blue-600", title: "Website", link: "www.yourdomain.com", href: "https://yourdomain.com" },
            { emoji: "🐦", color: "text-blue-600", title: "Twitter", link: "@yourdomain", href: "https://twitter.com/yourdomain" },
            { emoji: "💼", color: "text-blue-600", title: "LinkedIn", link: "/company/yourdomain", href: "https://linkedin.com/company/yourdomain" }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 text-center hover:bg-white hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${isVisible.social ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.icon ? (
                <div className={`mx-auto mb-4 ${item.color}`}>{item.icon}</div>
              ) : (
                <div className="text-4xl mb-4">{item.emoji}</div>
              )}
              <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
              <a href={item.href} className={`${item.color} hover:opacity-70 transition-colors`}>
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;