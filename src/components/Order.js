import React from "react";
import { motion } from "framer-motion";
import { orderContainerVariants } from "../config/animations";
import AnimationContainer from "./AnimationContainer";

const childAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Order = ({ pizza }) => {
  return (
    <AnimationContainer
      animationVariants={orderContainerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childAnimationVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childAnimationVariants}>
          {topping}
        </motion.div>
      ))}
    </AnimationContainer>
  );
};

export default Order;
