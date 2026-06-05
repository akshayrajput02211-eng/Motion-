import { motion } from "framer-motion";

const cards = [
  {
    title: "GSAP",
    desc: "Smooth animations and interactions",
    size: "col-span-2 row-span-1",
  },
  {
    title: "React",
    desc: "Reusable component architecture",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Three.js",
    desc: "Interactive 3D experiences",
    size: "col-span-1 row-span-2",
  },
  {
    title: "Framer Motion",
    desc: "Modern UI animations",
    size: "col-span-2 row-span-1",
  },
  {
    title: "Creative Developer",
    desc: "Building immersive web experiences",
    size: "col-span-2 row-span-1",
  },
];

export default function BentoGridSection() {
  return (
    <section className="relative max-w-[1600px] mx-auto px-8 py-28 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-400/30 rounded-full blur-[120px]" />

      {/* Heading */}

      <h2 className="text-5xl font-memo text-slate-900 text-center mb-16">
        Bento Grid
      </h2>

      {/* Grid */}

      <div className="grid grid-cols-3 auto-rows-[240px] gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className={`
              group
              ${card.size}
              relative
              overflow-hidden
              rounded-[32px]
              backdrop-blur-2xl
              bg-white/40
              border
              border-white/50
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              hover:shadow-[0_30px_80px_rgba(56,189,248,0.18)]
              p-8
              cursor-pointer
            `}
          >
            {/* Gradient Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-white/20 to-sky-400/20" />

            {/* Top Glow */}

            <div
              className="
                absolute
                -top-20
                -right-20
                w-56
                h-56
                rounded-full
                bg-pink-300/30
                blur-3xl
                group-hover:scale-150
                transition-all
                duration-700
              "
            />

            {/* Bottom Glow */}

            <div
              className="
                absolute
                -bottom-20
                -left-20
                w-56
                h-56
                rounded-full
                bg-sky-400/30
                blur-3xl
                group-hover:scale-150
                transition-all
                duration-700
              "
            />

            {/* Shine Effect */}

            <div
              className="
                absolute
                top-0
                -left-full
                h-full
                w-[50%]
                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent
                skew-x-12
                group-hover:left-[150%]
                transition-all
                duration-1000
              "
            />

            {/* Content Center */}

            <div
              className="
                relative
                z-10
                h-full
                flex
                flex-col
                justify-center
                items-center
                text-center
              "
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="
                  text-4xl
                  font-black
                  text-slate-900
                  mb-4
                "
              >
                {card.title}
              </motion.h3>

              <p
                className="
                  text-slate-700
                  text-lg
                  leading-relaxed
                  max-w-[80%]
                "
              >
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}