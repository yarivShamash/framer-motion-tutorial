import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedListItem from "./AnimatedListItem";
import AnimatedButton from "./AnimatedButton";

const containerVariants = {
  hidden: { x: "200vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5, stiffness: 99 },
  },
};

const nextButtonVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", delay: 0.5 } },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <AnimatedListItem key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </AnimatedListItem>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          // initial="hidden" //NOTE: animations propogate from parent because I used the same keys
          // animate="visible" //NOTE: animations propogate from parent because I used the same keys
          variants={nextButtonVariants}
          className="next"
        >
          <Link to="/toppings">
            <AnimatedButton>Next</AnimatedButton>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
