import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ animationVariants, children, ...props }) => {
  console.log({ animationVariants });
  return (
    <motion.button
      variants={animationVariants}
      animate="visible"
      whileHover="hover"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
