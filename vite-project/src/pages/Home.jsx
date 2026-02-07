import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Star from "../Component/Star";
import Services from "../Component/Services";
import InternshipSection from "../Component/Intership-overview";
import Testimonials from "../Component/Testimonials";
import CTASection from "../Component/CTA-Section"; 
import TextType from "../animation/TextType";
import CourseScrollStack from "../Component/Demo";

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
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
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
              delay: i * -0.8,
              ease: "linear"
            }}
            className="absolute text-zinc-400 font-mono text-sm md:text-base whitespace-nowrap font-semibold"
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
              delay: i * -1.2,
              ease: "linear"
            }}
            className="absolute text-zinc-400 font-mono text-xs md:text-sm whitespace-nowrap font-semibold"
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
              delay: i * -1.5,
              ease: "linear"
            }}
            className="absolute text-zinc-400 font-mono text-xs md:text-sm whitespace-nowrap font-semibold"
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
          className="text-xs tracking-widest text-amber-400 mb-4 font-mono"
        >
          WELCOME TO DEVIQUE
        </motion.p>
        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Innovative IT Solutions  &{" "}
          <br />
          <span className=" bg-gradient-to-r text-3xl md:text-5xl lg:text-5xl font-extrabold from-amber-400 to-amber-600 bg-clip-text text-transparent">
            {/* Tech Training */}
            <TextType 
  text={["Tech Training", "Real software. Real impact.", "Engineering, not shortcuts."]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="|"
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={.5}
/>
          </span>
        </h1>
       

 <p className="hero-sub mt-6 text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Transform your business with cutting-edge software solutions and
          empower your career with industry-leading training programs
        </p>

        <div className="hero-btn mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
            to="/services"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251,191,36,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-zinc-600 hover:from-amber-600 hover:to-zinc-700 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-amber-500/30 transition-all"
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
            className="inline-flex items-center gap-2 border-2 border-amber-400 text-amber-400 hover:bg-amber-400/10 px-8 py-3 rounded-full font-medium backdrop-blur-sm transition-all"
          >
            Explore Courses
          </MotionLink>
        </div>
      </div>
    </section>
    <Star />
    <CourseScrollStack/>
    {/* <Services/> */}
    <InternshipSection/>
    <Testimonials/>
    <CTASection/>
    </>
  );
}