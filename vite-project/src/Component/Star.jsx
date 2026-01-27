import React from "react";
import {motion} from "framer-motion";
import Counter from "./Counter";

const stats = [
  { value: 500, label: "Students Trained", suffix: "+" },
  { value: 50, label: "Corporate Clients", suffix: "+" },
  { value: 95, label: "Placement Rate", suffix: "%" },
  { value: 10, label: "Years Experience", suffix: "+" },
];

const Stats = () => {
  return (
    <section className="bg-[#0b1220] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <Counter end={item.value} suffix={item.suffix} />
            </h2>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
