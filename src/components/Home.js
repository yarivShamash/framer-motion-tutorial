import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedH2 from "./AnimatedH2";
import AnimatedButton from "./AnimatedButton";
import { buttonVariants } from "../config/animations";

const Home = () => {
  const [showTitle, setShowTitle] = useState(true);
  const containerInitial = { opacity: 0 };
  const containerAnimation = { opacity: 1 };
  const containerTransition = { delay: 0.3, duration: 1.5 };

  return (
    <motion.div
      className="home container"
      initial={containerInitial}
      animate={containerAnimation}
      transition={containerTransition}
    >
      <AnimatePresence>
        {showTitle && <AnimatedH2>Welcome to Pizza Joint</AnimatedH2>}
      </AnimatePresence>
      <button onClick={() => setShowTitle(!showTitle)}>
        Fly title flyyyyy!
      </button>
      <Link onClick={() => setShowTitle(!showTitle)} to="/base">
        <AnimatedButton animationVariants={buttonVariants}>
          Create Your Pizza
        </AnimatedButton>
      </Link>
    </motion.div>
  );
};

export default Home;
