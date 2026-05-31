import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HorizontalSection() {
  const containerRef = useRef();

  useEffect(() => {
    gsap.to(containerRef.current, {
      x: -1000,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="overflow-hidden py-20">

      <h2 className="text-center text-5xl font-black mb-16">
        Horizontal Motion
      </h2>

      <div
        ref={containerRef}
        className="flex gap-10 w-max"
      >
        {[1, 2, 3, 4,5,6].map((card) => (
          <div
            key={card}
            className="
              w-[400px]
              h-[250px]
              rounded-3xl
              bg-gradient-to-r
              from-sky-400
              to-pink-400
            "
          />
        ))}
      </div>

    </section>
  );
}