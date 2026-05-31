import { useRef } from "react";
import gsap from "gsap";

export default function RotateSection() {
  const boxRef = useRef();

  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="bg-white rounded-3xl p-12 shadow-xl">

        <h2 className="text-4xl font-bold mb-10">
          Rotate
        </h2>

        <div className="flex flex-col items-center gap-10">

          <div
            ref={boxRef}
            className="w-40 h-40 rounded-3xl bg-purple-400"
          />

          <button
            onClick={() =>
              gsap.to(boxRef.current, {
                rotation: 360,
                duration: 1.5,
              })
            }
            className="bg-pink-500 px-8 py-4 rounded-xl text-white"
          >
            Rotate
          </button>

        </div>
      </div>
    </section>
  );
}