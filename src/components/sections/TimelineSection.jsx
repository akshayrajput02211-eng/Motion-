import { useRef } from "react";
import gsap from "gsap";

export default function TimelineSection() {
  const boxRef = useRef();

  const playTimeline = () => {
    gsap.killTweensOf(boxRef.current);

    const tl = gsap.timeline();

    tl.to(boxRef.current, {
      x: 550,
      duration: 2,
      ease: "power3.out",
    })

      .to(boxRef.current, {
        rotation: 720,
        duration: 1,
        ease: "back.out(1.7)",
      })

      .to(boxRef.current, {
        scale: 1.5,
        duration: 0.8,
      })

      .to(boxRef.current, {
        backgroundColor: "#ec4899",
        duration: 0.1,
      })

      .to(boxRef.current, {
        x: 0,
        rotation: 360,
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
        backgroundColor: "#3b82f2",
      });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-100">

        

        <div className="mb-12">
          <p className="text-sky-500 flex justify-end font-semibold uppercase tracking-widest">
            GSAP Basics
          </p>

          <h2 className="text-3xl font-mono text-slate-800 mt-3">
            Timeline Section
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl">
            Learn how to chain multiple animations together using
            GSAP Timeline.
          </p>
        </div>

        {/* Playground */}

        <div className="flex flex-col items-center gap-12 py-30">

          <div className="w-full flex items-center justify-center overflow-visible">

            <div
              ref={boxRef}
              className="
                w-30
                h-30
                rounded-2xl
                bg-sky-500
                shadow-xl
              "
            />

          </div>

          <button
            onClick={playTimeline}
            className="
              h-14
              px-10
              w-56
              rounded-xl
              bg-sky-500
              text-white
              font-semibold
              shadow-lg
              hover:bg-pink-500
              hover:-translate-y-1
              transition-all
            "
          >
            Play Timeline
          </button>

        </div>

      </div>
    </section>
  );
}