import { useEffect, useRef, useState } from "react";

const links = ["Home", "About", "Contact"];

export default function Navbar() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    const bars = Array.from(
      { length: 100 },
      () => ({
        height:
          Math.random() * 30 + 10,
        speed:
          Math.random() * 1.5 + 0.5,
      })
    );

    let frameId;

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      const barWidth =
        canvas.width / bars.length;

      bars.forEach((bar, index) => {
        if (playing) {
          bar.height +=
            (Math.random() - 0.5) *
            bar.speed *
            6;
        } else {
          bar.height +=
            (Math.random() - 0.5) *
            0.8;
        }

        if (bar.height < 8)
          bar.height = 8;

        if (bar.height > 75)
          bar.height = 75;

        const gradient =
          ctx.createLinearGradient(
            0,
            0,
            0,
            canvas.height
          );

        gradient.addColorStop(
          0,
          "#7dd3fc"
        );

        gradient.addColorStop(
          1,
          "#f9a8d4"
        );

        ctx.fillStyle = gradient;

        ctx.fillRect(
          index * barWidth,
          canvas.height - bar.height,
          barWidth - 2,
          bar.height
        );
      });

      frameId =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        loop
      />

      <nav className="fixed top-5 left-0 w-full z-50 px-20">
        <div className="max-w-[1800px] mx-auto">
          <div
            className="
              relative
              overflow-hidden
              h-24
              rounded-3xl
              border
              border-white/40
              bg-white/30
              backdrop-blur-2xl
              px-10
              flex
              items-center
              justify-between
              shadow-[0_10px_50px_rgba(0,0,0,0.08)]
            "
          >
            {/* Frequency Bars */}

            <canvas
              ref={canvasRef}
              className="
                absolute
                inset-0
                w-full
                h-full
                opacity-20
                pointer-events-none
              "
            />

            {/* Glow Effects */}

            <div className="absolute -left-20 top-0 w-60 h-60 bg-pink-400 blur-3xl rounded-full" />

            <div className="absolute -right-20 top-0 w-60 h-60 bg-sky-400 blur-3xl rounded-full" />

            {/* Left */}

            <button
              className="
                relative
                z-10
                h-14
                w-100
                px-16
                rounded-2xl
                bg-gradient-to-r
                from-pink-300
                to-sky-300
                text-slate-800
                font-bold
                shadow-lg
                hover:scale-105
                transition-all
              "
            >
              AKSHAY
            </button>

            {/* Center Links */}

            <div className="relative z-10 hidden md:flex items-center gap-12">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="
                    text-slate-700
                    font-semibold
                    text-lg
                    hover:text-sky-600
                    transition
                  "
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right Side */}

            <div className="relative z-10 flex items-center gap-4">
              {/* Music Toggle */}

              <button
                onClick={toggleMusic}
                className="
                  h-14
                  w-14
                  w-36
                  rounded-2xl
                  bg-yellow-400/60
                  backdrop-blur-xl
                  border
                  border-white/50
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  hover:scale-105
                  transition-all
                "
              >
                {playing ? (
                  <div className="flex items-end gap-[2px]">
                    <span className="w-1 h-4 bg-pink-400 rounded-full animate-pulse" />
                    <span className="w-1 h-7 bg-sky-400 rounded-full animate-pulse" />
                    <span className="w-1 h-5 bg-pink-400 rounded-full animate-pulse" />
                  </div>
                ) : (
                  <span className="text-xl font-semibold text-slate-800">
                    Play Music
                  </span>
                )}
              </button>

              {/* Project Button */}

              <button
                className="
                  h-14
                  px-10
                  w-56
                  rounded-2xl
                  bg-gradient-to-r
                  from-sky-300
                  to-pink-300
                  text-slate-800
                  font-bold
                  shadow-lg
                  hover:scale-105
                  transition-all
                "
              >
                Suggest Project
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}