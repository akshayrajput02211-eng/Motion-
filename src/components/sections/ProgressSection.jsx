import { useRef } from "react";
import gsap from "gsap";

export default function ProgressSection() {
  const progressRef = useRef(null);

  const startProgress = () => {
    gsap.fromTo(
      progressRef.current,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 4,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      }
    );
  };

  return (
    <section className="max-w-[1600px] mx-auto px-8 mt-48">
      <div className="bg-white p-16 shadow-xl border border-sky-100">
        
      
        <div className="mb-12">
            
          <p className="text-sky-500 flex justify-end font-semibold uppercase tracking-widest">
            GSAP Basics
          </p>

          <h2 className="text-3xl my-3 text-slate-800">
            Progress Section
          </h2>
           <div className="flex justify-center mt-10">
          <button
            onClick={startProgress}
            className="px-10 py-14 w-56 bg-pink-400 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Progress
          </button>
        </div>

          <p className="text-slate-500 mt-4 text-lg">
            Learn GSAP progress animations, width transitions and tween control.
          </p>
        </div>

        <div className="w-full h-6 rounded-full bg-slate-200 overflow-hidden">
          <div
            ref={progressRef}
            className="h-full w-0 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full"
          />
        </div>

      
       

      </div>
    </section>
  );
}