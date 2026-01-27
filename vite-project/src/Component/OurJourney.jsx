import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    year: "2019",
    title: "Foundation of Excellence",
    desc: "Established with a clear vision to deliver reliable and innovative IT solutions.",
  },
  {
    year: "2020",
    title: "Brand Launch",
    desc: "Launched our professional brand identity and expanded services for startups and enterprises.",
  },
  {
    year: "2021",
    title: "Training & Internship Programs",
    desc: "Started industry-oriented training programs focused on real-world projects.",
  },
  {
    year: "2023",
    title: "Technology Expansion",
    desc: "Entered AI, Machine Learning, and automation software solutions.",
  },
  {
    year: "2025",
    title: "Future Innovation",
    desc: "Building scalable, intelligent systems with next-generation technologies.",
  },
];

const OurJourney = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".journey-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 60,
      stagger: 0.25,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Journey
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted IT solutions and
            training partner, our journey reflects growth and innovation.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Center Line (NOW SAFE) */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-100 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`journey-item flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2 bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
                  <h3 className="text-lg font-semibold text-blue-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Dot + Year */}
                <div className="md:w-1/2 flex md:justify-center relative">
                  <div className="flex items-center gap-4 bg-white px-3">
                    <span className="w-4 h-4 rounded-full bg-blue-500 shadow-md" />
                    <span className="text-sm font-semibold text-blue-500">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
