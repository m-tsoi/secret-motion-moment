import {motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function MyButton() {
  const navigate = useNavigate();

  return (
    <motion.button 
      animate={{rotate: 360}} 
      whileHover ={{scale: 1.2}} 
      onClick={() => navigate("/guess")}
      whileTap={{ scale: 0.9 }}
    >
      Enter
    </motion.button>
  );
}

export default function Home(){
  return (
    <motion.div 
      className="container"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
    >
      <motion.h1>Guess That Character!</motion.h1>
      <MyButton/>
    </motion.div>);
}