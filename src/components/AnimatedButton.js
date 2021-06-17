import React from "react";
import { motion } from "framer-motion";
import { buttonHover } from "../config/animations";

const AnimatedButton = ({ children, ...props }) => {
  return (
    <motion.button whileHover={buttonHover} {...props}>
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
