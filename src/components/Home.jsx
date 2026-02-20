import {motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function MyButton() {
  const navigate = useNavigate();

  return (
    <motion.button 
      animate={{rotate: 360}} 
      whileHover ={{scale: 1.2}} 
      onClick={() => navigate("/about")}
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
      <motion.h1>Welcom</motion.h1>
      <MyButton/>
    </motion.div>);
}