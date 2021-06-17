import React from "react";
import { motion } from "framer-motion";
import { listItemHover, listItemTransition } from "../config/animations";

const AnimatedListItem = ({ children, ...props }) => {
  return (
    <motion.li
      whileHover={listItemHover}
      transition={listItemTransition}
      {...props}
    >
      {children}
    </motion.li>
  );
};

export default AnimatedListItem;
