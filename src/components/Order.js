import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  orderContainerVariants,
  staggeredChildAnimationVariants,
} from "../config/animations";
import AnimationContainer from "./AnimationContainer";
import AnimatedStaggeredChild from "./AnimatedStaggeredChild";

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [setShowModal]);

  return (
    <AnimationContainer
      animationVariants={orderContainerVariants}
      initial="hidden"
      animate="visible"
      className="container order"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={staggeredChildAnimationVariants}>
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
          animationVariants={staggeredChildAnimationVariants}
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
