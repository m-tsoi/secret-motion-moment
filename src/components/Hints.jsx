import { motion } from "motion/react";

import "../styles/App.css";
import fluffy from "../assets/fluffy.png";


const hints = [
  { type:"text", content: "Red" },
  { type:"text", content: "Part of the Joui 4" },
  { type:"text", content: "Voted Most Likely to be a Buisness Major" },
  { type:"text", content: "哈哈哈哈哈哈哈哈哈" },
  { type:"image", content: fluffy },
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