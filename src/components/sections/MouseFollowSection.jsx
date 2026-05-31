import { useRef } from "react";
import gsap from "gsap";

export default function MouseFollowSection() {
  const ballRef = useRef();

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(ballRef.current, {
      x,
      y,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white  p-12 shadow-xl border border-sky-100">

        <div className="mb-10">
          <p className="text-sky-500 flex justify-end font-semibold uppercase tracking-widest">
            Interactive Effects
          </p>

          <h2 className="text-3xl font-mono text-slate-800 mt-3">
            Mouse Follow
          </h2>

          <p className="text-slate-500 mt-4">
            Object follows the mouse smoothly.
          </p>
        </div>

        <div
          onMouseMove={handleMove}
          className="
            relative
            h-[500px]
            rounded-3xl
            border-2
            border-dashed
            border-sky-200
            overflow-hidden
          "
        >

          <div
            ref={ballRef}
            className="
              absolute
              w-24
              h-24
              rounded-full
              bg-gradient-to-r
              from-sky-400
              to-pink-400
              -translate-x-1/2
              -translate-y-1/2
            "
          />

        </div>

      </div>
    </section>
  );
}