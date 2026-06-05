import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CreativeLoader() {
  const loaderRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 1;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }

      setCount(current);
    }, 80);

    const tl = gsap.timeline();

    tl.from(".letter", {
      y: 100,
      opacity: 0,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .from(
        ".loader-line",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 2,
        },
        "-=0.3"
      )
      .to(loaderRef.current, {
        y: "-100%",
        duration: 1.4,
        
        ease: "power4.inOut",
      });

    return () => clearInterval(interval);
  }, []);

  const text = "AKSHAY".split("");

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        bg-gradient-to-br
        from-pink-300
        via-white
        to-sky-300
      "
    >
      {/* Glow Effects */}

      <div className="absolute w-[800px] h-[700px] bg-pink-300/40 rounded-full blur-[120px] -top-40 -left-20 animate-pulse" />

      <div className="absolute w-[800px] h-[700px] bg-sky-300/40 rounded-full blur-[120px] -bottom-40 -right-20 animate-pulse" />

      {/* Glass Card */}

      <div
  className=" 
    relative
    backdrop-blur-3xl
    bg-white/15
    border
    border-white/40
    w-[850px]
    h-[320px]
    rounded-[40px]
    shadow-[0_20px_80px_rgba(255,255,255,0.25)]
    flex
    flex-col
    justify-center
    items-center
    overflow-hidden
  "
>
  <div
  className="
    absolute
    w-[900px]
    h-[350px]
    rounded-[50px]
    bg-gradient-to-r
    from-pink-300/20
    to-sky-300/20
    blur-3xl
    -z-10
  "
/>
      <h1
  className="
    flex
    text-[110px]
    font-black
    tracking-[12px]
    text-black/90
    drop-shadow-[0_10px_20px_rgba(255,255,255,0.4)]
  "
>
          {text.map((letter, index) => (
            <span key={index} className="letter inline-block">
              {letter}
            </span>
          ))}
        </h1>

      <div className="w-[70%] mt-8">
  <div className="overflow-hidden rounded-full">
    <div
      className="
        loader-line
        h-3
        w-full
        rounded-full
        bg-gradient-to-r
        from-pink-400
        via-fuchsia-300
        to-sky-400
      "
    />
  </div>

  <p className="mt-4 text-center text-black text-xl font-bold">
    {count}%
  </p>
</div>
      </div>

      {/* Bottom Text */}

      <p className="absolute bottom-10 text-black/70 font-medium tracking-[6px]">
        CREATIVE DEVELOPER
      </p>
    </div>
  );
}