import React from "react";
import { motion, useCycle } from "framer-motion";
import { loaderVariants } from "../config/animations";

const BouncyBall = ({ ...props }) => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
        {...props}
      />
      <button onClick={() => cycleAnimation()}>Change animation</button>
    </>
  );
};

export default BouncyBall;
