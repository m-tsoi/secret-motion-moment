import {motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import arrowGif from "../assets/blinking_red_arrow.gif";
import starGif from "../assets/spin_star.gif";
import mossPng from "../assets/moss_name.png";
import websitesAndSuchPng from "../assets/websites_such_logo.png";


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
      <div className="arrow-line">
        <img className="star star-green" src={starGif} ></img>        
        <img className="star star-pink" src={starGif} ></img>
        <img src={websitesAndSuchPng} width="700" height="100"></img>
        <img className="star star-blue" src={starGif} ></img>
        <img className="star" src={starGif} ></img>
      </div>
      <motion.h1 whileHover={{scale:1.1}}>Guess <span className="big">That</span> Character!</motion.h1>
      <motion.h2> The 21st Century's Greatest Game</motion.h2>
      <motion.img src={mossPng} width="500" height="150" initial={{scale:1}} animate={{scale:[1,1.1,1]}} transition={{duration:1, repeat: Infinity}}></motion.img>
      <motion.p className="turq-text">Click now to play the game!!</motion.p>
      <div className="arrow-line">
        <img className="arrow" src={arrowGif} ></img>
        <img className="arrow" src={arrowGif} ></img>
        <MyButton/>
        <img className="arrow rotate-arrow" src={arrowGif} ></img>
        <img className="arrow rotate-arrow" src={arrowGif} ></img>
      </div>
    </motion.div>);
}