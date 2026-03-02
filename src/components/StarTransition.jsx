import { motion } from "motion/react";

export default function StarTransition({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 bg-black z-50 pointer-events-none"
    />
  );
}