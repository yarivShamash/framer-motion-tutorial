import React from "react";
import { motion } from "framer-motion";

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
