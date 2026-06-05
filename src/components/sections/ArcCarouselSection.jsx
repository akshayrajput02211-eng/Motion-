import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

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
    title: "Creative Dev",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    title: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

export default function ArcCarouselSection() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const cards =
      containerRef.current.querySelectorAll(".arc-card");

    const radius = 450;

    cards.forEach((card, index) => {
      const angle =
        ((360 / cards.length) * index + rotation) *
        (Math.PI / 180);

      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      const scale =
        (z + radius) / (radius * 2);

      gsap.to(card, {
        x,
        z,
        scale: 0.7 + scale * 0.6,
        opacity: 0.3 + scale,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, [rotation]);

  const handleMouseMove = (e) => {
    const width = window.innerWidth;

    const percentage =
      (e.clientX / width - 0.5) * 2;

    setRotation(percentage * 120);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="
      h-screen
      overflow-hidden
      bg-sky-200
      flex
      items-center
      justify-center
      relative
    "
    >
      <h2
        className="
        absolute
        top-3
        text-6xl
        font-bold
        text-white
      "
      >
        Arc Carousel
      </h2>

      <div
        ref={containerRef}
        className="
        relative
        w-full
        h-full
        flex
        items-center
        justify-center
        perspective-[3000px]
      "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              arc-card
              absolute
              w-[200px]
              h-[300px]
              rounded-[40px]
              overflow-hidden
              bg-white
              shadow-xl
              will-change-transform
            "
          >
            <img
              src={card.image}
              alt=""
              className="
                w-full
                h-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-pink-300
              "
            />

            <h3
              className="
                absolute
                bottom-6
                left-6
                text-3xl
                font-bold
                text-white
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