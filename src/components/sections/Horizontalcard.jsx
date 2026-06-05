import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const baseCards = [
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

const cards = [
  ...baseCards,
  ...baseCards,
  ...baseCards,
  ...baseCards,
];

export default function QuantumFlowCarousel() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

useEffect(() => {
  const cardElements =
    gsap.utils.toArray(".q-card");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",

      // Long pinned section
      end: "+=6000",

      scrub: 0.5,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to(sliderRef.current, {
    x: () =>
      -(
        sliderRef.current.scrollWidth -
        window.innerWidth
      ),
    ease: "none",
  });

  cardElements.forEach((card) => {
    gsap.fromTo(
      card,
      {
        scale: 0.75,
        opacity: 0.4,
        y: 80,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,

        scrollTrigger: {
          trigger: card,
          containerAnimation: tl,
          start: "left center",
          end: "center center",
          scrub: true,
        },
      }
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach((st) =>
      st.kill()
    );
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-pink-100 overflow-hidden"
    >
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50">
        <h2 className="text-white text-6xl font-bold">
          Quantum Flow
        </h2>
      </div>

      <div
        ref={sliderRef}
        className="
          h-full
          flex
          items-center
          gap-20
          px-[20vw]
          w-max
        "
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              q-card
              relative
              w-[420px]
              h-[550px]
              rounded-[40px]
              overflow-hidden
              shrink-0
              bg-white/10
              border
              border-white/20
              backdrop-blur-xl
            "
          >
            <img
              src={card.image}
              alt={card.title}
              className="
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
               bg-sky-300
                to-transparent
              "
            />

            <h3
              className="
                absolute
                bottom-10
                left-10
                text-white
                text-4xl
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