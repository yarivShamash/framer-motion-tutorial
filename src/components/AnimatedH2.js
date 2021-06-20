import React from "react";
import { motion } from "framer-motion";

const AnimatedH2 = ({ animationVariants, children, ...props }) => {
  return (
    <motion.h2 exit={{ y: -1000 }} {...props}>
      {children}
    </motion.h2>
  );
};

export default AnimatedH2;
