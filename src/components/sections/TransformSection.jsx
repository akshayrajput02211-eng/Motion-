import { useRef } from "react";
import gsap from "gsap";

export default function TransformSection() {
  const boxRef = useRef(null);

  const animateBox = () => {
    gsap.killTweensOf(boxRef.current);

    gsap.to(boxRef.current, {
      x: 600,
      filter: "blur(2px)",
      duration: 1,
      yoyo: true,
      repeat: 1,

      onComplete: () => {
        gsap.set(boxRef.current, {
          x: 0,
          filter: "blur(0px)",
        });
      },
    });
  };


  return (
    <section className="max-w-[1600px] mx-auto px-8">
         <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-sky-300/40 blur-3xl" />

      

        <div className="mb-18">
          <p className="text-sky-500 font-semibold uppercase flex justify-end tracking-widest">
            GSAP Basics
          </p>

          <h2 className="text-3xl  mask-radial-from-neutral-100 text-slate-800 ">
            Transform Section
          </h2>

          <p className="text-slate-500 mt-4">
            Learn GSAP tweens, refs, DOM targeting, animation control, yoyo, repeat, reset.
          </p>
        </div>

       

        <div className="flex flex-col items-center gap-8">

          <div
            ref={boxRef}
            className="w-40 h-40 rounded-3xl bg-sky-500"
          />

          <button
            onClick={animateBox}
            className="px-16 py-10 w-40 bg-pink-400 text-white rounded-l
            shadow-md
        hover:bg-sky-500
        hover:-translate-y-0.5
        transition-all"
          >
            Animate Box
          </button>

        </div>

    </section>
  );
}