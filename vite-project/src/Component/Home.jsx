import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Star from "./Star";
import Services from "./Services";
import InternshipSection from "./Intership-overview";
import Testimonials from "./Testimonials";
import CTASection from "./CTA-Section"; 

export default function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".hero-sub", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out",
    });

    gsap.from(".hero-btn", {
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
      ease: "back.out(1.7)",
    });
  }, []);
  
  const MotionLink = motion(Link);

  // Animated code snippets for background
  const codeSnippets = [
    "const innovate = () => success;",
    "function buildFuture() { }",
    "import { Skills } from 'devique';",
    "export default Excellence;",
    "<Component learning={true} />",
    "npm install success",
    "git commit -m 'Transform'",
    "class Innovation extends Tech",
    "async function learn() { }",
    "const tech = await master();",
    "return <Future />",
    "console.log('Growth');",
    "let success = true;",
    "if (practice) { skill++ }",
    "while(learning) { grow() }",
    "const code = 'art';",
    "try { innovate(); }",
    "map(idea => reality)"
  ];

  return (
    <>    
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated coding background - Layer 1 (Downward) */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.map((snippet, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: (i * 150) % window.innerWidth,
              y: -100,
              opacity: 0 
            }}
            animate={{ 
              y: window.innerHeight + 100,
              opacity: [0, 0.5, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
            className="absolute text-blue-300/50 font-mono text-sm md:text-base whitespace-nowrap font-semibold"
            style={{ 
              textShadow: "0 0 10px rgba(59, 130, 246, 0.4)"
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Layer 2 (Upward from different positions) */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.slice(0, 9).map((snippet, i) => (
          <motion.div
            key={`layer2-${i}`}
            initial={{ 
              x: ((i * 180) + 50) % window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0 
            }}
            animate={{ 
              y: -100,
              opacity: [0, 0.45, 0.45, 0.45, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear"
            }}
            className="absolute text-cyan-300/45 font-mono text-xs md:text-sm whitespace-nowrap font-semibold"
            style={{ 
              textShadow: "0 0 8px rgba(34, 211, 238, 0.3)"
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Layer 3 (Diagonal movement) */}
      <div className="absolute inset-0 overflow-hidden">
        {codeSnippets.slice(9).map((snippet, i) => (
          <motion.div
            key={`layer3-${i}`}
            initial={{ 
              x: -200,
              y: (i * 100) % window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: window.innerWidth + 200,
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
            className="absolute text-blue-400/40 font-mono text-xs md:text-sm whitespace-nowrap font-semibold"
            style={{ 
              textShadow: "0 0 8px rgba(59, 130, 246, 0.3)"
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-widest text-blue-400 mb-4 font-mono"
        >
          WELCOME TO DEVIQUE
        </motion.p>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Innovative IT Solutions &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Training
          </span>
        </h1>

        <p className="hero-sub mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Transform your business with cutting-edge software solutions and
          empower your career with industry-leading training programs
        </p>

        <div className="hero-btn mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
            to="/services"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30 transition-all"
          >
            Our Services 
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </MotionLink>

          <MotionLink
            to="/courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all"
          >
            Explore Courses
          </MotionLink>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-6 h-10 rounded-full border-2 border-blue-400 flex items-start justify-center"
        >
          <motion.span 
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
    <Star />
    <Services/>
    <InternshipSection/>
    <Testimonials/>
    <CTASection/>
    </>
  );
}