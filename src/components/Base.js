import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import StepContainer from "./AnimationContainer";
import { stepContianerVariants, buttonVariants } from "../config/animations";
import AnimatedListItem from "./AnimatedListItem";
import AnimatedButton from "./AnimatedButton";

const nextButtonVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", delay: 0.5 } },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <StepContainer
      animationVariants={stepContianerVariants}
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
          // animate="visible"
          // initial="hidden" //NOTE: animate and initial are not needed because animations propogate from parent because I used the same keys see config/amimations>stepContainerVariants
          variants={nextButtonVariants}
          className="next"
        >
          <Link to="/toppings">
            <AnimatedButton animationVariants={buttonVariants}>
              Next
            </AnimatedButton>
          </Link>
        </motion.div>
      )}
    </StepContainer>
  );
};

export default Base;
