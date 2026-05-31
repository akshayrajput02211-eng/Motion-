import { useRef } from "react";
import gsap from "gsap";

export default function CounterSection() {
  const numRef = useRef();

  const startCounter = () => {
    let counter = { value: 0 };

    gsap.to(counter, {
      value: 1000,
      duration: 3,
      ease: "power3.out",

      onUpdate: () => {
        numRef.current.innerHTML = Math.floor(counter.value);
      },
    });
  };
  const resetCounter = () => {
  let counter = {
    value: parseInt(numRef.current.innerHTML) || 0,
  };
//   const resetCounter = () => {
//   numRef.current.innerHTML = 0;
// };

  gsap.to(counter, {
    value: 0,
    duration: 1,
    ease: "power2.inOut",

    onUpdate: () => {
      numRef.current.innerHTML = Math.floor(counter.value);
    },
  });
};

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white  p-12 shadow-xl border border-sky-100">

            <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-sky-300/40 blur-3xl" />

        <div className="mb-12">
          <p className="text-sky-500 flex justify-end font-semibold uppercase tracking-widest">
            GSAP Basics
          </p>

          <h2 className="text-3xl my-3 text-slate-800">
            Counter Section
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl">
            Learn how to animate numbers smoothly using GSAP.
          </p>
        </div>

       

        <div className="flex flex-col items-center justify-center gap-8 py-10">

          <div
            className="
            w-72
            h-72
          
            rounded-full
            bg-gradient-to-br
            from-sky-400
            to-pink-400
            flex
            items-center
            justify-center
            shadow-xl
          "
          >
            <h1
              ref={numRef}
              className="text-8xl font-black text-white"
            >
              0
            </h1>
          </div>

          <button
            onClick={startCounter}
            className="
            h-14
            px-20
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
            Start Counter
          </button>
            <button
    onClick={resetCounter}
    className="   h-12
            px-16
            w-56
            rounded-xl
            bg-sky-500
            text-white
            font-semibold
            shadow-lg
            hover:bg-pink-500
            hover:-translate-y-1
            transition-all"
  >
    Reset Counter
  </button>

        </div>

      </div>
    </section>
  );
}