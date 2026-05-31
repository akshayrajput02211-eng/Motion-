import { useEffect } from "react";
import gsap from "gsap";

export default function CursorTrailSection() {
  useEffect(() => {
    const dots = document.querySelectorAll(".trail-dot");

    const moveTrail = (e) => {
      dots.forEach((dot, index) => {
        gsap.to(dot, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.2 + index * 0.08,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("mousemove", moveTrail);

    return () => {
      window.removeEventListener("mousemove", moveTrail);
    };
  }, []);

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white  p-20 shadow-xl border border-sky-100">

        <h2 className="text-3xl font-memo text-left text-slate-800">
          Cursor Trail
        </h2>

        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="
              trail-dot
              fixed
              top-0
              left-0
              w-4
              h-4
              rounded-full
              bg-gradient-to-r
              from-sky-500
              to-pink-500
              pointer-events-none
              z-[999]
              -translate-x-1/2
              -translate-y-1/2
            "
          />
        ))}

      </div>
    </section>
  );
}