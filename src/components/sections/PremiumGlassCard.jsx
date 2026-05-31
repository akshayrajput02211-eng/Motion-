import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function PremiumGlassCard() {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 15;
      const rotateX = -((y - centerY) / centerY) * 15;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.6,
        ease: "power3.out",
        transformPerspective: 1000,
        transformOrigin: "center",
      });

      gsap.to(shineRef.current, {
        x: x - 150,
        y: y - 150,
        duration: 0.5,
        ease: "power3.out",
      });

      const layers = card.querySelectorAll(".parallax");

      layers.forEach((layer) => {
        const speed = layer.dataset.speed;

        gsap.to(layer, {
          x: ((x - centerX) * speed) / 30,
          y: ((y - centerY) * speed) / 30,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });

      gsap.to(".parallax", {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
      });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="min-h-screen bg-pink-100 flex items-center justify-center overflow-hidden px-6">

      <div
        ref={cardRef}
        className="
          relative
          w-[500px]
          h-[600px]
          rounded-[40px]
          overflow-hidden
          border
          border-white/10
          backdrop-blur-xl
          bg-zinc-200
          shadow-[0_0_60px_rgba(56,189,248,.15)]
          cursor-pointer
        "
        style={{
          transformStyle: "preserve-3d",
        }}
      >

       
        <div
          ref={shineRef}
          className="
            absolute
            w-[300px]
            h-[300px]
            rounded-full
            bg-yellow-400/30
            blur-3xl
            pointer-events-none
          "
        />

       
        <div
          data-speed="2"
          className="
            parallax
            absolute
            top-10
            left-10
            w-20
            h-20
            rounded-full
            bg-sky-400/40
            blur-xl
          "
        />

        <div
          data-speed="4"
          className="
            parallax
            absolute
            top-20
            right-20
            w-16
            h-16
            rounded-full
            bg-pink-400/40
            blur-xl
          "
        />

        <div
          data-speed="6"
          className="
            parallax
            absolute
            bottom-20
            left-20
            w-24
            h-24
            rounded-full
            bg-cyan-400/40
            blur-xl
          "
        />

       
        <div
          className="
            relative
            z-20
            h-full
            flex
            flex-col
            justify-center
            items-center
            text-center
            px-10
          "
        >

          <p
            data-speed="8"
            className="
              parallax
              uppercase
              tracking-[8px]
              text-pink-600
              text-sm
            "
          >
            Interactive Experience
          </p>

          <h1
            data-speed="10"
            className="
              parallax
              text-6xl
              font-black
              text-sky-300
              mt-6
            "
          >
            GLASS
          </h1>

          <h1
            data-speed="12"
            className="
              parallax
              text-6xl
              font-black
              text-sky-300
            "
          >
            CARD
          </h1>

          <p
            data-speed="14"
            className="
              parallax
              text-pink-400
              mt-6
              h-5
              max-w-xs
            "
          >
            
          </p>

          <button
            data-speed="16"
            className="
              parallax
              mt-10
              px-8
              py-4
              w-56
              rounded-full
              bg-sky-500
              text-white
              font-semibold
            "
          >
            Explore
          </button>

        </div>
      </div>
    </section>
  );
}