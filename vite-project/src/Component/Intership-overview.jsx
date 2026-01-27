import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Award,
  Calendar,
  GraduationCap,
  Infinity,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CoursesSection() {
  useEffect(() => {
    gsap.fromTo(
      ".course-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".courses-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  const courses = [
    {
      title: "Full Stack Development",
      img: "/images/fullstack.jpg",
      duration: "6 Months",
      level: "Intermediate",
      price: "₹25,000",
      desc: "Master frontend & backend development with modern tools.",
    },
    {
      title: "Frontend Development",
      img: "/images/frontend.jpg",
      duration: "4 Months",
      level: "Beginner",
      price: "₹18,000",
      desc: "Build responsive interfaces using HTML, CSS, JS & React.",
    },
    {
      title: "Backend Development",
      img: "/images/backend.jpg",
      duration: "5 Months",
      level: "Intermediate",
      price: "₹22,000",
      desc: "Learn server-side programming, databases & APIs.",
    },
  ];

  return (
    <section className="courses-section relative py-24 bg-slate-50 overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 tracking-widest text-sm mb-2">LEARN & GROW</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Training & Internship Programs
          </h2>
          <p className="text-gray-500 mt-4">
            Industry-relevant courses designed to launch your tech career
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {courses.map((c) => (
            <div
              key={c.title}
              className="course-card bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              <img
                src={c.img}
                alt={c.title}
                className="rounded-t-2xl h-52 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {c.duration}
                  </span>
                  <span className="text-xs bg-slate-100 text-gray-600 px-3 py-1 rounded-full">
                    {c.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{c.desc}</p>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-bold text-lg">{c.price}</span>
                  <NavLink
                    to="/courses"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn More →
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* Benefits */}
<div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-20">
  {[
    {
      title: "Real-world Projects",
      desc: "Work on live industry projects",
      icon: Briefcase,
    },
    {
      title: "Expert Mentors",
      desc: "Learn from industry professionals",
      icon: Users,
    },
    {
      title: "Certificate",
      desc: "Industry-recognized certification",
      icon: Award,
    },
    {
      title: "Flexible Schedule",
      desc: "Weekend & weekday batches",
      icon: Calendar,
    },
    {
      title: "Placement Support",
      desc: "Career guidance & placement",
      icon: GraduationCap,
    },
    {
      title: "Lifetime Access",
      desc: "Access materials forever",
      icon: Infinity,
    },
  ].map((item, i) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.05 }}
      className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl flex flex-col items-center"
    >
      <item.icon className="h-10 w-10 text-blue-500 mb-4" />

      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
        {item.title}
      </h4>
      <p className="text-xs text-gray-500">{item.desc}</p>
    </motion.div>
  ))}
</div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <NavLink
            to="/courses"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
          >
            Apply for Internship →
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

