import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { buttonVariants } from "../config/animations";

const Home = () => {
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
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <AnimatedButton animationVariants={buttonVariants}>
          Create Your Pizza
        </AnimatedButton>
      </Link>
    </motion.div>
  );
};

export default Home;
