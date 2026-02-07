import React, { useEffect, useRef, useState } from "react";
import { Code, Smartphone, Globe, Database, Cloud, Shield, Zap, Users, Award, TrendingUp, CheckCircle, ArrowRight, ImageOff } from "lucide-react";

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
      icon: <Code size={36} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and MongoDB.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"]
    },
    {
      icon: <Smartphone size={36} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["iOS & Android", "React Native", "Cloud Integration", "Push Notifications"]
    },
    {
      icon: <Globe size={36} />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions with data-driven design.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
    },
    {
      icon: <Database size={36} />,
      title: "Database Solutions",
      description: "Robust database architecture and management for efficient data storage and retrieval.",
      features: ["SQL & NoSQL", "Data Migration", "Backup Systems", "Performance Tuning"]
    },
    {
      icon: <Cloud size={36} />,
      title: "Cloud Services",
      description: "Cloud infrastructure setup and management on AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Migration", "Auto Scaling", "Load Balancing", "Cost Optimization"]
    },
    {
      icon: <Shield size={36} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your applications and data from threats.",
      features: ["Security Audits", "Penetration Testing", "Encryption", "Compliance"]
    }
  ];

  const features = [
    { icon: <Zap size={28} />, title: "Fast Delivery", desc: "Quick turnaround times without compromising quality" },
    { icon: <Users size={28} />, title: "Expert Team", desc: "Experienced professionals dedicated to your success" },
    { icon: <Award size={28} />, title: "Quality Assured", desc: "Rigorous testing and quality control processes" },
    { icon: <TrendingUp size={28} />, title: "Scalable Solutions", desc: "Built to grow with your business needs" }
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
    <div className="min-h-screen bg-zinc-950 text-gray-100 relative overflow-hidden">
      {/* SUBTLE GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>

      {/* GRADIENT ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-32 right-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-700/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* HERO SECTION */}
      <div ref={heroRef} className="relative z-10 text-center py-20 px-6 border-b border-zinc-800/50">
        <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block mb-4 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <span className="text-sm font-medium text-amber-400">Professional Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight">
            Services
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Comprehensive technology solutions designed to transform your business and accelerate growth
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* SERVICES GRID */}
        <div ref={servicesRef} data-section="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group bg-zinc-900/50 backdrop-blur-sm p-7 rounded-xl border border-zinc-800/80 hover:border-amber-500/30 transition-all duration-500 hover:bg-zinc-900/80 ${isVisible.services ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="mb-5 text-amber-500/90 group-hover:text-amber-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-amber-50 transition-colors">{service.title}</h3>
              <p className="text-zinc-400 mb-5 text-[15px] leading-relaxed">{service.description}</p>
              <div className="space-y-2.5 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-zinc-400">
                    <CheckCircle size={16} className="text-amber-500/70 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-2.5 px-4 bg-zinc-800/50 hover:bg-amber-500/10 border border-zinc-700/50 hover:border-amber-500/30 text-zinc-300 hover:text-amber-400 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 text-sm">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* WHY CHOOSE US */}
        {/* <div ref={featuresRef} data-section="features" className="mb-24">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Why Choose Us</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/60 hover:border-zinc-700/80 text-center transition-all duration-500 hover:bg-zinc-900/60 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="inline-flex p-3 bg-amber-500/5 border border-amber-500/10 rounded-lg text-amber-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* OUR PROCESS */}
        {/* <div ref={processRef} data-section="process" className="mb-20">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Process</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step, idx) => (
              <div
                key={idx}
                className={`bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/50 hover:border-zinc-700/70 transition-all duration-500 hover:bg-zinc-900/50 ${isVisible.process ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="text-4xl font-bold text-amber-500/20 mb-3">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA SECTION */}
        {/* <div ref={ctaRef} data-section="cta" className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/20 border border-zinc-800/70 rounded-2xl p-10 text-center transition-all duration-1000 transform ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-zinc-400 max-w-xl mx-auto font-light">
              Let's discuss how we can help transform your business with our expert services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-7 py-3 bg-amber-500 hover:bg-amber-400 text-black rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
                Contact Us
              </button>
              <button className="px-7 py-3 bg-transparent border border-zinc-700 hover:border-amber-500/50 text-zinc-300 hover:text-white rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;