import JSConfetti from "js-confetti";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

import "../styles/App.css";
import revealTweet from "../assets/heaven.png";

import Hints from "../components/Hints";
import GuessForm from "../components/GuessForm";
import ResultDisplay from "../components/ResultDisplay";

export default function Guess() {
  const [count, setCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState(null);

  const answer = "Reigen Arataka";

  const jsConfettiRef = useRef(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  useEffect(() => {
    if (result === "correct") {
      jsConfettiRef.current.addConfetti({
        confettiColors: ["#ff0000"]
      });
    }
  }, [result]);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess.toLowerCase().trim() === answer.toLowerCase()) {
      setResult("correct");
    } else {
      setResult("wrong");
    }

    setGuess("");
  };

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Hints attempts={count} />
      
      <ResultDisplay
        result={result}
        count={count}
        image={revealTweet}
      />

      <GuessForm
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
        increase={increase}
      />
    </motion.div>
  );
}