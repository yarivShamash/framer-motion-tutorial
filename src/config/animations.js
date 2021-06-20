export const stepContianerVariants = {
  hidden: { x: "200vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5, stiffness: 99 },
  },
};

export const orderContainerVariants = {
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

export const buttonHover = {
  scale: 1.1,
  textShadow: "0px  0px 8px #fff",
  boxShadow: "0px  0px 8px #fff",
};

export const listItemHover = {
  scale: 1.3,
  originX: 0,
  color: "#f8e112",
};

export const listItemTransition = {
  type: "spring",
  stiffness: 300,
};
