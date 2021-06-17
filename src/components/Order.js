import React from "react";
import { motion } from "framer-motion";
// import StepContainer from "./StepContainer";

const containerVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      stiffness: 99,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childVariants}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
