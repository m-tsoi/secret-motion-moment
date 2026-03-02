import { motion } from "motion/react";

export default function ResultDisplay({
  result,
  count,
  image
}) {
  if (result === "correct") {
    return (
      <>
        <motion.img
          src={image}
          alt="Correct answer"
          className="result-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />
        <p className="text-green-600">Correct!!!</p>
      </>
    );
  }

  if (result === "wrong") {
    return (
      <motion.p
        key={count}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, ease: "linear" }}
      >
        Nope! x{count}
      </motion.p>
    );
  }

  return null;
}