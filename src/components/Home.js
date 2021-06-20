import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedButton from "./AnimatedButton";
import Loader from "./Loader";
import { buttonVariants, homeContainerVariants } from "../config/animations";

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>

      <Link to="/base">
        <AnimatedButton animationVariants={buttonVariants}>
          Create Your Pizza
        </AnimatedButton>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
