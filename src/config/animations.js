export const homeContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 1.5 } },
};

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
      mass: 0.4, // NOTE: Heiher mass moves slower
      damping: 8, // NOTE: Heiher damping force moves slower
      stiffness: 99,
      // when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    // scale: [1.1, 1, 1.1, 1, 1.1, 1], //NOTE: when passing an array as the value it created keyframes just like in css
    textShadow: "0px  0px 8px #fff",
    boxShadow: "0px  0px 8px #fff",
    transition: {
      yoyo: 5, // transition.yoyo is used to repeart animations a certain amount of times, Infinity causes the animation to repeat indefinitely
    },
  },
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
