
import "./styles/App.css"
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom"
import {AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

import Home from "./pages/Home"
import Guess from "./pages/Guess"
import StarTransition from "./components/StarTransition"


export default function App() {
  const location =  useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [nextPath, setNextPath] = useState(location.pathname);

  useEffect(() => {
    // Trigger transition on route change
    if (location.pathname !== nextPath) {
      setShowTransition(true);
      setNextPath(location.pathname);
    }
  }, [location.pathname, nextPath]);


  return (
    <>
      {showTransition && (
        <StarTransition
          onComplete={() => setShowTransition(false)}
        />
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/guess" element={<Guess />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
