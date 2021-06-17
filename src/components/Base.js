import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedListItem from "./AnimatedListItem";
import AnimatedButton from "./AnimatedButton";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const containerInit = { x: "200vw" };
  const containerAnimation = { x: 0 };
  const containerTransition = { type: "spring", stiffness: 90 };

  const buttonInit = { x: "-100vw" };
  const buttonAnimation = { x: 0 };
  const buttonTransition = { type: "spring", delay: 0.5 };

  return (
    <motion.div
      initial={containerInit}
      animate={containerAnimation}
      transition={containerTransition}
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
          initial={buttonInit}
          animate={buttonAnimation}
          transition={buttonTransition}
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
