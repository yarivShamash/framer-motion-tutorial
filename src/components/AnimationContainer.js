import React from "react";
import { motion } from "framer-motion";

const StepContainer = ({ animationVariants, children, props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className="base container"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StepContainer;
