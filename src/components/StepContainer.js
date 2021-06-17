import React from "react";
import { motion } from "framer-motion";
import { stepContianerVariants } from "../config/animations";

const StepContainer = ({ children, props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stepContianerVariants}
      className="base container"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StepContainer;
