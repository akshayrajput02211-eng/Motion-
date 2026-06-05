import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "React",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "GSAP",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Three.js",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Framer Motion",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
  },
  {
    title: "WebGL",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    title: "Creative Dev",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

export default function QuantumFlowCarousel() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const cardElements =
      wrapperRef.current.querySelectorAll(".q-card");

    const radius = 700;
    let rotation = 0;

    const renderCards = () => {
      cardElements.forEach((card, i) => {
        const angle =
          ((360 / cardElements.length) * i +
            rotation) *
          (Math.PI / 180);

        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        const scale =
          0.5 + ((z + radius) / (radius * 2));

        const blur =
          Math.max(0, 12 - scale * 12);

        gsap.set(card, {
          x,
          z,
          scale,
          opacity: scale,
          rotateY:
            -angle * (180 / Math.PI),
          filter: `blur(${blur}px)`,
          zIndex: Math.floor(scale * 100),
          transformPerspective: 3000,
        });

        const img =
          card.querySelector(".q-image");

        gsap.set(img, {
          x: x * 0.05,
        });
      });
    };

    renderCards();

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",

      // 2 rounds
      end: "+=4000",

      pin: true,
      pinSpacing: true,
      scrub: 1,

      markers: false,

      onUpdate: (self) => {
        rotation = self.progress * 720;
        renderCards();
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      h-screen
      bg-pink-300
      overflow-hidden
      relative
      flex
      items-center
      justify-center
    "
    >
      <h2
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        text-white
        text-6xl
        font-bold
        z-50
      "
      >
        Quantum Flow
      </h2>

      <div
        ref={wrapperRef}
        className="
        relative
        w-full
        h-full
        flex
        items-center
        justify-center
        perspective-[4000px]
      "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
            q-card
            absolute
            w-[150px]
            h-[180px]
            rounded-[10px]
            overflow-hidden
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            shadow-[0_20px_80px_rgba(255,255,255,.1)]
            will-change-transform
          "
          >
            <img
              src={card.image}
              alt={card.title}
              className="
              q-image
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
            />

            <div
              className="
              absolute
              inset-0
              bg-sky-200
            "
            />

            <h3
              className="
              absolute
              bottom-8
              left-8
              text-white
              text-3xl
              font-bold
            "
            >
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}