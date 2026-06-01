import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursorSection() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white p-20 shadow-xl border border-sky-100">

        <h2 className="text-3xl font-bold text-slate-800">
          Custom Cursor
        </h2>

        <p className="text-slate-500 mt-4">
          Move your mouse around
        </p>

        {/* Cursor */}

        <div
          ref={cursorRef}
          className="
            fixed
            top-0
            left-0
            w-6
            h-6
            rounded-full
            bg-sky-400
            pointer-events-none
            z-[9999]
            -translate-x-1/2
            -translate-y-1/2
            shadow-[0_0_25px_rgba(56,189,248,0.7)]
          "
        />

      </div>
    </section>
  );
}