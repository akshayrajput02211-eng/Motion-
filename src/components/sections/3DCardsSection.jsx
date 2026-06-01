
import { useRef } from "react";

export default function ThreeDCardsSection() {
  const cardRef = useRef();

  const handleMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateY(${x / 20}deg)
      rotateX(${-y / 20}deg)
      scale(1.03)
    `;
  };

  const reset = () => {
    cardRef.current.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section className="py-40 flex justify-center">

      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="
         w-[500px]
h-[350px]
rounded-3xl
bg-gradient-to-br
from-sky-300
via-white
to-pink-300
shadow-[0_30px_100px_rgba(0,0,0,0.15)]
transition-transform
duration-300
        "
      />
      <h2 className="text-3xl font-memo z-10 text-slate-800 absolute top-20">
        3D Card
      </h2>
    </section>
  );
}
 