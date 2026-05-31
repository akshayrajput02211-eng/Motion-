import gsap from "gsap";

export const gsapKeyframes = {

  floating(target) {
    gsap.to(target, {
      y: -30,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  },

  rotate(target) {
    gsap.to(target, {
      rotation: 360,
      repeat: -1,
      duration: 6,
      ease: "linear",
    });
  },

  scale(target) {
    gsap.to(target, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  },

  opacity(target) {
    gsap.to(target, {
      opacity: 0.2,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },

  slideX(target) {
    gsap.to(target, {
      x: 150,
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  },

  slideY(target) {
    gsap.to(target, {
      y: 100,
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  },

  skew(target) {
    gsap.to(target, {
      skewX: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
    });
  },

  color(target) {
    gsap.to(target, {
      backgroundColor: "#8b5cf6",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });
  },

  bounce(target) {
    gsap.to(target, {
      y: -60,
      repeat: -1,
      yoyo: true,
      ease: "bounce.out",
    });
  },

  shake(target) {
    gsap.to(target, {
      x: 20,
      repeat: -1,
      yoyo: true,
      duration: 0.1,
    });
  },

  wobble(target) {
    gsap.to(target, {
      rotation: 15,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  },

  complex(target) {
    gsap.to(target, {
      duration: 4,
      repeat: -1,

      keyframes: [
        {
          y: -30,
        },
        {
          rotation: 10,
        },
        {
          scale: 1.1,
        },
        {
          opacity: 0.7,
        },
        {
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
        },
      ],
    });
  },

};