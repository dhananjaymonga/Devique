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

  return (
    <>    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-widest text-gray-500 mb-4"
        >
          WELCOME TO DEVIQUE
        </motion.p>

        <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
          Innovative IT Solutions &{" "}
          <span className="text-blue-500">Tech Training</span>
        </h1>

        <p className="hero-sub mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Transform your business with cutting-edge software solutions and
          empower your career with industry-leading training programs.
        </p>

        <div className="hero-btn mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
  to="/services"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg"
>
  Our Services <ArrowRight size={18} />
</MotionLink>

<MotionLink
  to="/courses"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full font-medium"
>
  Explore Courses
</MotionLink>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-6 h-10 rounded-full border-2 border-blue-400 flex items-start justify-center"
        >
          <span className="w-1 h-2 bg-blue-500 rounded-full mt-2" />
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
