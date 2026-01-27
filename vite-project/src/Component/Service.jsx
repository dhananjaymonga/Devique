import React, { useEffect, useRef, useState } from "react";
import { Code, Smartphone, Globe, Database, Cloud, Shield, Zap, Users, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    features: false,
    process: false,
    cta: false
  });

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

    const sections = [servicesRef, featuresRef, processRef, ctaRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["iOS & Android", "React Native", "Cloud Integration", "Push Notifications"]
    },
    {
      icon: <Globe size={40} />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions with data-driven design.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
    },
    {
      icon: <Database size={40} />,
      title: "Database Solutions",
      description: "Robust database architecture and management for efficient data storage and retrieval.",
      features: ["SQL & NoSQL", "Data Migration", "Backup Systems", "Performance Tuning"]
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management on AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Migration", "Auto Scaling", "Load Balancing", "Cost Optimization"]
    },
    {
      icon: <Shield size={40} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your applications and data from threats.",
      features: ["Security Audits", "Penetration Testing", "Encryption", "Compliance"]
    }
  ];

  const features = [
    { icon: <Zap size={32} />, title: "Fast Delivery", desc: "Quick turnaround times without compromising quality" },
    { icon: <Users size={32} />, title: "Expert Team", desc: "Experienced professionals dedicated to your success" },
    { icon: <Award size={32} />, title: "Quality Assured", desc: "Rigorous testing and quality control processes" },
    { icon: <TrendingUp size={32} />, title: "Scalable Solutions", desc: "Built to grow with your business needs" }
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
    { step: "02", title: "Planning", desc: "Creating a detailed roadmap" },
    { step: "03", title: "Development", desc: "Building your solution" },
    { step: "04", title: "Testing", desc: "Ensuring quality and performance" },
    { step: "05", title: "Launch", desc: "Deploying to production" },
    { step: "06", title: "Support", desc: "Ongoing maintenance and updates" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 relative overflow-hidden">
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* HERO SECTION */}
      <div ref={heroRef} className="relative z-10 text-center py-24 px-6">
        <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions to transform your business and drive growth
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        {/* SERVICES GRID */}
        <div ref={servicesRef} data-section="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${isVisible.services ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        <div ref={featuresRef} data-section="features" className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR PROCESS */}
        <div ref={processRef} data-section="process" className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600 transition-all duration-1000 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-700 ${isVisible.process ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-5xl font-bold text-blue-200 mb-4">{step.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-blue-600">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div ref={ctaRef} data-section="cta" className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white transition-all duration-1000 transform ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our expert services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;