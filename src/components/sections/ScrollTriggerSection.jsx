import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerSection() {
  const cardRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.6,
        rotate: -20,
        filter: "blur(20px)",
        borderRadius: "100px",
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        borderRadius: "32px",

        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 95%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-[100vh] flex items-center justify-center bg-blue-100">
      <div
        ref={cardRef}
        className="
          relative
          w-[450px]
          h-[500px]
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-br
          from-sky-600
          via-cyan-600
          to-pink-600
          shadow-[0_0_80px_rgba(56,189,248,.5)]
        "
      >
      
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-full
            bg-white/10
            backdrop-blur-md
          "
        />

        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <p className="uppercase tracking-[8px] text-sm">
            ScrollTrigger
          </p>

          <h2 className="text-6xl font-black mt-4">
            Akshay
          </h2>

          <p className="mt-6 text-center max-w-xs text-white/80">
            Scroll down to reveal and transform
            this interactive card.
          </p>
        </div>
      </div>
    </section>
  );
}