import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "The Full Stack Development course transformed my career. Hands-on projects and expert guidance helped me land my dream job!",
  },
  {
    name: "Priya Patel",
    role: "Frontend Developer ",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Amazing learning experience! The instructors are knowledgeable and very supportive.",
  },
  {
    name: "Amit Kumar",
    role: "Python Developer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text:
      "Best decision was joining the Python course. Industry-relevant curriculum and excellent placement support.",
  },
  {
    name: "Sneha Reddy",
    role: "ML Engineer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "The Machine Learning course exceeded expectations. Real-world projects made all the difference.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials = () => {
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
            Success Stories
          </p>
          <h2 className="text-4xl font-bold mt-2">
            What Our Students Say
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {reviews.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
