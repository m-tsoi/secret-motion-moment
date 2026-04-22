import { motion } from "motion/react";

import "../styles/App.css";
import imageHint from "../assets/single_moms.jpeg";


const hints = [
  { type:"text", content: "👻" },
  { type:"text", content: "👻👻👻" },
  { type:"text", content: "👻👻👻👻" },
  { type:"text", content: "#2 Tumblr Sexyman" },
  { type:"image", content: imageHint },
];

export default function Hints({attempts}){
    const hintIndex = Math.floor(attempts / 2) % hints.length;
    const activeHint = hints[hintIndex];

    return (
    <div className="floating-container">
        <motion.div
          key={hintIndex}
          className="floating-hint"
          initial={{ 
            x: "100vw",
            y: Math.random() * window.innerHeight}}
          animate={{ x: "-100vw" }}
          transition={{
            duration: 8,
            ease: "linear",
          }}
        >
          {activeHint.type === "text" ? (activeHint.content) : ( <img src={activeHint.content} className="floating-image"/>)}
        </motion.div>
    </div>
  );
}