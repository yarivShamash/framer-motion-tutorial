import React from "react";
import { motion } from "framer-motion";
import {
  logoDragConstraints,
  logoDragElastics,
  svgVariants,
  pathVariants,
} from "../config/animations";

const Header = () => {
  const titleInitial = { y: -250 };
  const titleAnimation = { y: -10 };
  const titleTransition = { delay: 0.2, type: "spring", stiffness: 200 };
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={logoDragConstraints}
        dragElastics={logoDragElastics}
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="initial"
          animate="visible"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
            initial="initial"
            animate="visible"
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
            initial="initial"
            animate="visible"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        initial={titleInitial}
        animate={titleAnimation}
        transition={titleTransition}
      >
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
