import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const containerInitial = { opacity: 0 };
  const containerAnimation = { opacity: 1 };

  const buttonAnimation = {};
  return (
    <motion.div
      className="home container"
      initial={containerInitial}
      animate={containerAnimation}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button animate={buttonAnimation}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
