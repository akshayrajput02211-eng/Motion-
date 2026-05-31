import { useRef } from "react";
import gsap from "gsap";

export default function MagneticButtonSection() {
  const btnRef = useRef();

  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
    });
  };

  const reset = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
    });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white  p-20 shadow-xl border border-sky-100">

        <h2 className="text-3xl font-memo justify-center mb-20 text-slate-800">
          Magnetic Button
        </h2>

        <div className="flex justify-center">

          <button
            ref={btnRef}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            className="
              px-12
              py-6
              w-56
              rounded-l
              bg-sky-500
              text-white
              font-bold
              text-xl
            "
          >
            Hover Me
          </button>

        </div>

      </div>
    </section>
  );
}