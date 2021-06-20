import React from "react";
import { motion } from "framer-motion";
import { listItemHover, listItemTransition } from "../config/animations";

const AnimatedStaggeredChild = ({
  tag,
  animationVariants,
  children,
  ...props
}) => {
  const ContainerTag = tag;
  return (
    <ContainerTag {...props}>
      <motion.span variants={animationVariants}>{children}</motion.span>
    </ContainerTag>
  );
};

export default AnimatedStaggeredChild;
