import React from "react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, suffix = "" }) => {
  const ref = useRef(null);              // ✅ real ref
  const isInView = useInView(ref, { once: true }); // ✅ boolean
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(end / (duration / 16)));

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
