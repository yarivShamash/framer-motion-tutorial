import React from "react";
import { motion } from "framer-motion";
import { orderContainerVariants } from "../config/animations";
import AnimationContainer from "./AnimationContainer";
import AnimatedStaggeredChild from "./AnimatedStaggeredChild";

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
      {/* //NOTE: when using motion.li here the entier list will be animated */}
      {/* <AnimatedStaggeredChild
        tag={"ul"}
        animationVariants={childAnimationVariants}
      > */}
      {pizza.toppings.map((topping) => (
        <AnimatedStaggeredChild
          tag={"li"}
          animationVariants={childAnimationVariants}
          key={topping}
        >
          {topping}
        </AnimatedStaggeredChild>
      ))}
      {/* </AnimatedStaggeredChild> */}
    </AnimationContainer>
  );
};

export default Order;
