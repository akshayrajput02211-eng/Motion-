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

 {[...Array(12)].map((_, i) => (
  <div
    key={i}
    className="trail-dot fixed top-0 left-0 pointer-events-none z-[9999]"
    style={{
      width: `${18 - i * 1.5}px`,
      height: `${18 - i * 1.5}px`,
      opacity: 0.8 - i * 0.08,
      background:
        "linear-gradient(to right,#38bdf8,#f9a8d4)",
      borderRadius: "999px",
      transform: "translate(-50%, -50%)",
    }}
  />
))}

      </div>
    </section>
  );
}