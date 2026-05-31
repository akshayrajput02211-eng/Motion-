import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5FAFF]">
      
      {/* Background Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-sky-300/40 blur-3xl" />

      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-pink-300/40 blur-3xl" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-200/20 blur-[120px]" />

      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-32 w-8 h-8 rounded-full bg-sky-400"
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 left-32 w-6 h-6 rounded-full bg-pink-400"
      />

      {/* Content */}
      <div className="text-center max-w-6xl px-6 relative z-10">
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[8px] text-sky-600 font-semibold mb-8"
        >
          Creative Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            text-7xl
            md:text-[9rem]
            font-black
            leading-none
            bg-gradient-to-r
            from-sky-500
            via-cyan-400
            to-pink-500
            bg-clip-text
            text-transparent
          "
        >
          AKSHAY
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="mt-6 text-3xl md:text-5xl font-bold text-slate-700"
        >
          Motion Design Playground
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="
            mt-8
            h-12
            max-w-3xl
            mx-auto
            text-slate-500
            text-xl
            leading-relaxed
          "
        >
          
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-24">

          {/* Explore Button */}
          <motion.a
            href="#sections"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.08,
              rotate: -2,
              y: -8,
              boxShadow:
                "0px 20px 50px rgba(14,165,233,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              group
              relative
              overflow-hidden
              h-16
              w-64
              rounded-2xl
              bg-sky-500
              text-white
              font-bold
              flex
              items-center
              justify-center
              shadow-xl
            "
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 0.8 }}
            />

            <span className="relative z-10 flex items-center gap-3">
              Explore Sections

              <motion.span
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Journey Button */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              boxShadow:
                "0px 20px 50px rgba(236,72,153,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
              relative
              overflow-hidden
              h-16
              w-64
              rounded-2xl
              bg-pink-500
              text-white
              font-bold
              shadow-xl
            "
          >
            {/* Animated Shine */}
            <motion.div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-pink-500
                via-white/30
                to-pink-500
              "
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            />

            <span className="relative z-10 flex items-center justify-center gap-2">
              View Journey

              <motion.span
                animate={{
                  rotate: [0, 20, -20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                }}
              >
                ✦
              </motion.span>
            </span>
          </motion.button>

        </div>

      
        <motion.div
         animate={{
            y: [0, 12, 0],
            
          }}
         initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
         
          transition={{
            
            duration: 2,
            delay: 1,
            yoyo: true,
          }}
          className="mt-24 flex justify-center"
        >
          <div className="w-8 h-14 rounded-full border-2 border-slate-400 flex justify-center">
            <div className="w-2 h-2 bg-slate-500 rounded-full mt-2" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}