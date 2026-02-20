import {motion } from "motion/react";


export default function About(){
  return (
    <motion.div 
    className="container"
      initial={{opacity: 0, x: "100%"}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity:0, x:"-100%"}}
      transition={{duration: 0.8, ease: "easeInOut"}}
    >
      <motion.h1 align="center">AGAJWHLJVFHO:EVGEFHJFBFWKBJWFKEBBKJ</motion.h1>
    </motion.div>);
}