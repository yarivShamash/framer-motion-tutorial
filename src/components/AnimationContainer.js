import React from "react";
import { motion } from "framer-motion";

const StepContainer = ({ animationVariants, children, props }) => {
  return (
    <motion.div
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default StepContainer;
