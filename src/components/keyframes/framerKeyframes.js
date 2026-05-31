export const framerKeyframes = {

  floating: {
    animate: {
      y: [0, -20, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  floatingRotate: {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 3, -3, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },

  scalePulse: {
    animate: {
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },

  rotate360: {
    animate: {
      rotate: [0, 360],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    },
  },

  opacityBlink: {
    animate: {
      opacity: [1, 0.3, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },

  slideX: {
    animate: {
      x: [0, 100, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },

  slideY: {
    animate: {
      y: [0, -50, 50, 0],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },

  skewEffect: {
    animate: {
      skewX: [0, 10, -10, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },

  colorCycle: {
    animate: {
      backgroundColor: [
        "#06b6d4",
        "#8b5cf6",
        "#ec4899",
        "#06b6d4",
      ],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },

  rainbowText: {
    animate: {
      color: [
        "#06b6d4",
        "#8b5cf6",
        "#ec4899",
        "#f59e0b",
        "#06b6d4",
      ],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },

  wobble: {
    animate: {
      rotate: [0, 10, -10, 10, 0],
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },

  heartbeat: {
    animate: {
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  },

  bounce: {
    animate: {
      y: [0, -50, 0],
    },
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },

  shake: {
    animate: {
      x: [0, -10, 10, -10, 10, 0],
    },
    transition: {
      duration: 0.5,
      repeat: Infinity,
    },
  },

  complex: {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};