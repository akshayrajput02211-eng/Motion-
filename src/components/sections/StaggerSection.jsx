import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StaggerSection() {
  const floatingRef = useRef();

useEffect(() => {
  gsap.from(".stagger-card", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    onComplete: () => {
      gsap.timeline()
        .to(".stagger-card", {
          rotation: -5,
          stagger: 0.1,
          yoyo: true,
          repeat: 1,
          duration: 0.15,
        })
        .to(".stagger-card", {
          y: -10,
          rotation: 2,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
        });
    },
    onStart: () => {
      gsap.to(floatingRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    },
  });
}, []);

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-100">

      

        <div className="mb-12">
          <p className="text-sky-500 flex justify-end font-semibold uppercase tracking-widest">
            GSAP Basics
          </p>

          <h2 className="text-3xl font-mono text-slate-800 mt-3">
            Stagger • Reveal • Floating
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl">
            Learn stagger animations, reveal effects and infinite floating
            motion using GSAP.
          </p>
        </div>


        <div className="flex justify-center mb-20">

          <div
            ref={floatingRef}
            className="
              w-32
              h-32
              rounded-full
              bg-gradient-to-br
              from-sky-400
              to-pink-400
              shadow-xl
            "
          />

        </div>

      

        <div className="grid md:grid-cols-4 gap-8">

          {["", "", "", ""].map((item) => (
            <div
              key={item}
              className="
                stagger-card
                h-60
                rounded-3xl
                bg-gradient-to-br
                from-sky-500
                to-pink-500
                border
                border-sky-400
                shadow-lg
                flex
                items-center
                justify-center
              "
            >
              <h3 className="text-2xl font-bold text-slate-700">
                 {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}