import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextSplitRevealSection() {
  const charsRef = useRef();
  const wordsRef = useRef();
  const blurRef = useRef();
  const rotateRef = useRef();
  const waveRef = useRef();
  const gradientRef = useRef();
  const maskRef = useRef();
  const scrollRef = useRef();
  const typeRef = useRef();
  const magneticRef = useRef();
  const distortRef = useRef();
  const scrambleRef = useRef();

  useEffect(() => {
    const createSplitAnimation = (
      element,
      options = {}
    ) => {
      const split = new SplitType(element, {
        types: "chars",
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 80,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",
       

        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },

        ...options,
      });
    };

    // CHARS

    createSplitAnimation(charsRef.current);

    // WORDS

    const words = new SplitType(wordsRef.current, {
      types: "words",
    });

gsap.from(words.words, {
  opacity: 0,
  y: 80,
  stagger: 0.08,
  duration: 1,

  scrollTrigger: {
    trigger: wordsRef.current,
    start: "top 85%",
    toggleActions:
      "play reverse play reverse",
  },
});

    // BLUR

    const blur = new SplitType(blurRef.current, {
      types: "chars",
    });

    gsap.from(blur.chars, {
      opacity: 0,
      filter: "blur(20px)",
      y: 50,
      stagger: 0.03,

      scrollTrigger: {
        trigger: blurRef.current,
        start: "top 80%",
        toggleActions: "restart none restart none",
      },
    });

    // ROTATE

    const rotate = new SplitType(rotateRef.current, {
      types: "chars",
    });

    gsap.from(rotate.chars, {
      rotationX: 90,
      opacity: 0,
      stagger: 0.03,
      transformOrigin: "top center",
      ease: "back.out(2)",

      scrollTrigger: {
        trigger: rotateRef.current,
        start: "top 80%",
          toggleActions: "restart none restart none",
      },
    });

    // WAVE

    const wave = new SplitType(waveRef.current, {
      types: "chars",
    });

    gsap.from(wave.chars, {
      y: -100,
      opacity: 0,

      stagger: {
        each: 0.04,
        from: "center",
      },

      ease: "elastic.out(1,0.3)",

      scrollTrigger: {
        trigger: waveRef.current,
        start: "top 80%",
        toggleActions: "restart none restart none",
      },
    });

    // GRADIENT

    const gradient = new SplitType(
      gradientRef.current,
      {
        types: "chars",
      }
    );

   gsap.from(gradientRef.current, {
  opacity: 0,
  scale: 0.5,
  y: 100,
  duration: 1.2,
  ease: "back.out(2)",

  scrollTrigger: {
    trigger: gradientRef.current,
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

    // MASK

    gsap.from(maskRef.current, {
      yPercent: 100,
      duration: 1,

      scrollTrigger: {
        trigger: maskRef.current,
        start: "top 80%",
          toggleActions: "restart none restart none",
      },
    });

    // SCROLL SPLIT

    const scrollSplit = new SplitType(
      scrollRef.current,
      {
        types: "chars",
      }
    );

    gsap.from(scrollSplit.chars, {
      opacity: 0,
      y: 80,
      stagger: 0.03,

      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 80%",
          toggleActions: "restart none restart none",
      },
    });

    // TYPEWRITER

   ScrollTrigger.create({
  trigger: typeRef.current,
  start: "top 80%",

  onEnter: () => {
    typeRef.current.textContent = "";

    const text = "TYPEWRITER EFFECT";
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        typeRef.current.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  },

  onLeaveBack: () => {
    typeRef.current.textContent = "";
  },
});
    // SCRAMBLE

    const original =
      "SCRAMBLE TEXT EFFECT";

    scrambleRef.current.addEventListener(
      "mouseenter",
      () => {
        let iteration = 0;

        const interval = setInterval(() => {
          scrambleRef.current.innerText =
            original
              .split("")
              .map((letter, index) => {
                if (index < iteration) {
                  return original[index];
                }

                return String.fromCharCode(
                  65 +
                    Math.floor(
                      Math.random() * 26
                    )
                );
              })
              .join("");

          if (iteration >= original.length)
            clearInterval(interval);

          iteration += 0.5;
        }, 30);
      }
    );

    // MAGNETIC

    const magnetic = magneticRef.current;

    magnetic.addEventListener(
      "mousemove",
      (e) => {
        const rect =
          magnetic.getBoundingClientRect();

        const x =
          e.clientX -
          rect.left -
          rect.width / 2;

        const y =
          e.clientY -
          rect.top -
          rect.height / 2;

        gsap.to(magnetic, {
          x: x * 0.2,
          y: y * 0.2,
        });
      }
    );

    magnetic.addEventListener(
      "mouseleave",
      () => {
        gsap.to(magnetic, {
          x: 0,
          y: 0,
        });
      }
    );

    // DISTORT

    distortRef.current.addEventListener(
      "mousemove",
      () => {
        gsap.to(distortRef.current, {
          skewX: 15,
          scale: 1.1,
          duration: 0.2,
        });
      }
    );

    distortRef.current.addEventListener(
      "mouseleave",
      () => {
        gsap.to(distortRef.current, {
          skewX: 0,
          scale: 1,
        });
      }
    );
  }, []);

  return (
    <section className="py-40 space-y-52 overflow-hidden text-center">

      <h1
        ref={charsRef}
        className="text-[7vw] font-black text-sky-300"
      >
        CHARS REVEAL
      </h1>

      <h1
        ref={wordsRef}
        className="text-[7vw] font-black text-pink-300"
      >
        WORDS REVEAL UP
      </h1>

      <h1
        ref={blurRef}
        className="text-[7vw] font-black text-sky-300"
      >
        BLUR REVEAL
      </h1>

      <h1
        ref={rotateRef}
        className="text-[7vw] font-black text-pink-300"
      >
        ROTATE REVEAL
      </h1>

      <h1
        ref={waveRef}
        className="text-[7vw] font-black text-sky-300"
      >
        WAVE TEXT REVEAL
      </h1>

      <h1
        ref={gradientRef}
        className="
   text-[8vw]
  font-black
  inline-block
  bg-gradient-to-r
  from-sky-300
  via-pink-300
  to-sky-300
  bg-clip-text
  text-transparent
       
        
      "
      >
        PREMIUM GRADIENT
      </h1>

      <div className="overflow-hidden">
        <h1
          ref={maskRef}
          className="
          text-[7vw]
          font-black
          text-pink-300
        "
        >
          TEXT MASK REVEAL
        </h1>
      </div>

      <h1
        ref={scrollRef}
        className="
        text-[7vw]
        font-black
        text-sky-300
      "
      >
        SCROLL SPLIT REVEAL
      </h1>

      <h1
        ref={typeRef}
        className="
        text-[7vw]
        font-black
        text-pink-300
      "
      />

      <h1
        ref={scrambleRef}
        className="
        cursor-pointer
        text-[7vw]
        font-black
        text-sky-300
      "
      >
    MOUSE SCRAMBLE
      </h1>

      <h1
        ref={magneticRef}
        className="
        cursor-pointer
        text-[7vw]
        font-black
        text-pink-300
      "
      >
        MAGNETIC CURSOR
      </h1>

      <h1
        ref={distortRef}
        className="
        cursor-pointer
        text-[7vw]
        font-black
        text-sky-300
      "
      >
        CURSOR DISTORTION
      </h1>

    </section>
  );
}