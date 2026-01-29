import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Globe,
  Laptop,
  Smartphone,
  Settings,
  Wrench,
  BadgeIndianRupee 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    desc:
      "Custom, responsive websites built with modern technologies to drive results.",
    points: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    desc:
      "Tailored software solutions to streamline processes and boost productivity.",
    points: ["Custom Solutions", "Scalable Architecture", "Cloud Integration"],
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc:
      "Native and cross-platform mobile apps for Android and iOS users.",
    points: ["Android Apps", "iOS Apps", "Cross Platform"],
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: BadgeIndianRupee,
    title: "Billing & Accounting Software",
    desc:
      "Smart billing and accounting systems to manage finances efficiently.",
    points: ["Invoice Generation", "Tax Management", "Reports"],
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Settings,
    title: "Business Automation Software",
    desc:
      "Automate workflows to reduce cost and increase operational efficiency.",
    points: ["Workflow Automation", "Process Optimization", "Integrations"],
    color: "from-indigo-500 to-blue-400",
  },
  {
    icon: Wrench,
    title: "IT Consulting & Support",
    desc:
      "Expert consulting and 24/7 IT support to keep systems running smoothly.",
    points: ["24/7 Support", "Infrastructure Planning", "Security Audits"],
    color: "from-red-500 to-rose-400",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest text-blue-500 uppercase">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold mt-2">Our Services</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group rounded-2xl border border-gray-200 p-6 bg-white transition-all overflow-hidden"
              >
                {/* Gradient glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${service.color} blur-2xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-semibold mt-5">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 mt-2 text-sm">
                    {service.desc}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
        <Link to="/services">
  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-7 py-3 text-white hover:scale-105 transition">
    View All Services →
  </button>
</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
