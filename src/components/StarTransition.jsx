// components/StarTransition.jsx
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import starImg from "../assets/star.png";

export default function StarTransition({ onComplete }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: (Math.random() * 0.05 + 0.01) * window.innerWidth,
      delay: Math.random() * 0.8,
    }));
    setStars(generated);

    const timeout = setTimeout(() => {
      onComplete?.();
    }, 1500); // total duration of transition

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="fixed inset-0 bg-black z-50 overflow-hidden pointer-events-none"
    >
      {stars.map((star) => (
        <motion.img
          key={star.id}
          src={starImg}
          alt="star"
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{
            duration: 1,
            delay: star.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </motion.div>
  );
}