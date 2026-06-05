import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    title: "React Portfolio",
    category: "Frontend Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
  },
  {
    title: "GSAP Experience",
    category: "Creative Animation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
  },
  {
    title: "Three.js Galaxy",
    category: "Interactive 3D",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
  },
  {
    title: "Creative UI Design",
    category: "UI / UX",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
  },
  {
    title: "Motion Website",
    category: "GSAP + React",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
  },
];

export default function ImageRevealSection() {
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(
      imageWrapRef.current,
      "x",
      {
        duration: 0.4,
        ease: "power3.out",
      }
    );

    const yTo = gsap.quickTo(
      imageWrapRef.current,
      "y",
      {
        duration: 0.4,
        ease: "power3.out",
      }
    );

    const moveImage = (e) => {
      xTo(e.clientX + 50);
      yTo(e.clientY - 180);

      const rotate =
        (e.clientX / window.innerWidth - 0.5) *
        20;

      gsap.to(imageWrapRef.current, {
        rotation: rotate,
        duration: 0.4,
      });
    };

    window.addEventListener(
      "mousemove",
      moveImage
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveImage
      );
    };
  }, []);

  const showImage = (image) => {
    imageRef.current.src = image;

    gsap.to(imageWrapRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const hideImage = () => {
    gsap.to(imageWrapRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section
      className="
      relative
      min-h-screen
      bg-sky-100
      overflow-hidden
      px-8
      py-24
    "
    >
      {/* Noise Layer */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        pointer-events-none
      "
        style={{
          backgroundImage: `
          radial-gradient(
            rgba(255,255,255,.15) 1px,
            transparent 1px
          )
        `,
          backgroundSize: "4px 4px",
        }}
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <h2
          className="
          text-7xl
          md:text-8xl
          font-bold
          text-pink-400
          mb-20
          h-12
        "
        >
          
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() =>
              showImage(project.image)
            }
            onMouseLeave={hideImage}
            className="
              group
              py-12
              border-b
              border-white/10
              cursor-pointer
            "
          >
            <div
              className="
              flex
              justify-between
              items-center
            "
            >
              <h3
                className="
                text-3xl
                md:text-2xl
                font-semibold
                text-pink-400
                transition-all
                duration-300
                group-hover:text-sky-400
              "
              >
                {project.title}
              </h3>

              <span
                className="
                text-slate-400
                text-2xl
              "
              >
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image */}

      <div
        ref={imageWrapRef}
        className="
        fixed
        top-0
        left-0
        pointer-events-none
        z-[9999]
        opacity-0
        scale-75
      "
      >
        <div
          className="
          relative
          w-[340px]
          h-[460px]
          rounded-[36px]
          overflow-hidden
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          shadow-[0_30px_80px_rgba(0,0,0,.5)]
        "
        >
          <img
            ref={imageRef}
            alt=""
            className="
            w-full
            h-full
            object-cover
          "
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/40
            via-transparent
            to-transparent
          "
          />

          <div
            className="
            absolute
            inset-0
            bg-white/5
            backdrop-blur-[2px]
          "
          />
        </div>
      </div>
    </section>
  );
}