export const svgVariants = {
  initial: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

export const pathVariants = {
  initial: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

export const homeContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 1.5 } },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

export const stepContianerVariants = {
  hidden: { x: "200vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.5, stiffness: 99 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

export const logoDragConstraints = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
export const logoDragElastics = 0.9;

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
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

export const nextButtonContainerVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0, transition: { type: "spring", delay: 0.5 } },
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

export const modalBackDropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};

export const staggeredChildAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
