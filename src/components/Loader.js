import React from "react";
import { motion } from "framer-motion";
import { loaderVariants } from "../config/animations";

const Loader = ({ ...props }) => {
  return (
    <motion.div
      className="loader"
      variants={loaderVariants}
      animate="animationOne"
      {...props}
    />
  );
};

export default Loader;
