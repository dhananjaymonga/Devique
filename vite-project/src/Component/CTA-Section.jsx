import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-28 bg-gradient-to-b from-[#0b1220] to-[#020617] text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Transform Your Future?
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Join thousands of satisfied clients and successful students.
        Start your journey with Devique today.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-white text-black font-semibold"
        >
          Get in Touch
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full border border-white text-white font-semibold"
        >
          Browse Courses
        </motion.button>
      </div>
    </motion.section>
  );
}
