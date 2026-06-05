import { useState } from "react";

const cards = [
  {
    title: "GSAP Animations",
    
    image:
      "./public/1.png",
  },
  {
    title: "Framer-Motion",
    
    image:
      "./public/2.png",
  },
  {
    title: "Three.js",
    
    image:
      "./public/3.png",
  },
  {
    title: "React Development",
    
    image:
      "./public/4.png",
  },
];

export default function ExpandCardSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-[1600px] mx-auto px-8 py-20">
      <h2 className="text-5xl font-mono text-sky-300 font-bold mb-12">
        Expand Cards
      </h2>

      <div className="flex gap-5 h-[500px]">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setActive(index)}
            className={`
              relative
              rounded-3xl
              overflow-hidden
             
              transition-all
              duration-700
              ${
                active === index
                  ? "flex-[5]"
                  : "flex-[1]"
              }
            `}
          >
            <img
              src={card.image}
              alt=""
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-black/40
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                p-8
                text-white
              "
            >
              <h3 className="text-2xl font-bold mb-3">
                {card.title}
              </h3>

              {active === index && (
                <p className="max-w-md text-slate-200">
                  {card.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}