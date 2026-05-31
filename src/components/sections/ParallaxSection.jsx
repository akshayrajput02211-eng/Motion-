import { useRef } from "react";

export default function ParallaxCardSection() {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const layers = card.querySelectorAll(".layer");

    layers.forEach((layer) => {
      const speed = layer.dataset.speed;

      const moveX = (rect.width / 2 - x) * speed / 50;
      const moveY = (rect.height / 2 - y) * speed / 50;

      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  const handleLeave = () => {
    const layers =
      cardRef.current.querySelectorAll(".layer");

    layers.forEach((layer) => {
      layer.style.transform = "translate(0px,0px)";
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="
          relative
          w-[500px]
          h-[350px]
          rounded-3xl
          overflow-hidden
          bg-sky-300/50
          border
          border-sky-100
          shadow-2xl
          cursor-pointer
        "
      >
     
        <div
          data-speed="2"
          className="
            layer
            absolute
            top-10
            left-10
            w-40
            h-40
            rounded-full
            bg-sky-300/50
            blur-3xl
          "
        />

        <div
          data-speed="2"
          className="
            layer
            absolute
            bottom-10
            right-10
            w-40
            h-40
            rounded-full
            bg-pink-300
            blur-3xl
          "
        />

       
        <div
          data-speed="2"
          className="
            layer
            absolute
            top-16
            right-20
            w-16
            h-16
            rounded-full
            bg-yellow-300
          "
        />

        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <h2 className="layer text-5xl font-black text-sky-500"
              data-speed="8">
            PARALLAX
          </h2>

          <p
            className="layer text-slate-500 mt-4"
            data-speed="10"
          >
            Mouse Move Effect
          </p>
        </div>
      </div>
    </section>
  );
}