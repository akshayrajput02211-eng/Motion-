import { useRef } from "react";

const cards = [
  {
    title: "React Development",
    desc: "Build scalable and reusable applications.",
  },
  {
    title: "GSAP Animations",
    desc: "Create immersive motion experiences.",
  },
  {
    title: "Three.js",
    desc: "Build interactive 3D experiences.",
  },
  {
    title: "UI / UX Design",
    desc: "Design modern user interfaces.",
  },
  {
    title: "Creative Coding",
    desc: "Blend technology and creativity.",
  },
  {
    title: "Performance",
    desc: "Optimize for speed and smoothness.",
  },
];

function Card({ title, desc }) {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const card = cardRef.current;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="
        light-card
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-sky-100/10
        p-8
        min-h-[250px]
        cursor-pointer
        transition-all
        duration-300
      "
    >
      <div className="light-overlay" />

      <div className="relative z-10">
        <h3 className="text-2xl font-bold flex justify-center items-center text-white mb-4">
          {title}
        </h3>

        <p className="text-slate-400 flex justify-center leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function HoverLightCardsSection() {
  return (
    <section className="bg-black py-24 px-8">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-3xl text-white font-bold h-12 mt-24">
          
        </h2>

        <div className="grid flex justify-center items-center md:grid-cols-3 gap-15">
          {cards.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}