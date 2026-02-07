import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import OurJourney from "../Component/OurJourney.jsx";

const About = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white overflow-hidden"
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f5f9ff] to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),transparent_60%)]" />

        <div ref={heroRef} className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-sm tracking-widest text-blue-500 uppercase mb-4">
            About Us
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Innovative IT Solutions &
            <span className="text-blue-500"> Industry Training</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We build modern digital solutions and train professionals for
            real-world industry success.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600">
              We specialize in web development, custom software, mobile
              applications, automation solutions, and industry-oriented IT
              training.
            </p>
            <p className="mt-4 text-gray-600">
              Our focus is simple: build scalable digital products and prepare
              students to become confident, job-ready professionals.
            </p>
          </div>

          <div className="bg-blue-50 p-10 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Real-world project exposure</li>
              <li>✔ Industry-experienced mentors</li>
              <li>✔ Secure & scalable solutions</li>
              <li>✔ Career-driven training programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses and individuals through innovative
              technology solutions and practical, industry-focused training
              that drives real growth.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted global technology partner and a leading IT
              training institute that shapes the future of digital
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Innovation", desc: "We embrace modern technologies." },
              { title: "Quality", desc: "We deliver reliable solutions." },
              { title: "Integrity", desc: "We build trust through honesty." },
              { title: "Growth", desc: "We grow together with our clients." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-lg mb-2 text-blue-500">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / IMPACT */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="opacity-90 mt-2">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="opacity-90 mt-2">Students Trained</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="opacity-90 mt-2">Industry Mentors</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">5★</h3>
            <p className="opacity-90 mt-2">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <OurJourney />
    </motion.div>
  );
};

export default About;
