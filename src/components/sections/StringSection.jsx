import { useRef } from "react";
import gsap from "gsap";

export default function StringSection() {
  const pathRef = useRef();

  const initialPath = "M 10 100 Q 500 100 990 100";

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newPath = `M 10 100 Q ${x} ${y} 990 100`;

    gsap.to(pathRef.current, {
      attr: { d: newPath },
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: {
        d: initialPath,
      },
      duration: 1.5,
      ease: "elastic.out(1,0.2)",
    });
  };

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white rounded-3xl p-12 shadow-xl border border-sky-100">

        <div className="mb-10">
          <p className="text-sky-500 flex justify-end font-semibold uppercase tracking-widest">
            Advanced GSAP
          </p>

          <h2 className="text-3xl font-mono text-slate-800 mt-3">
            SVG String Effect
          </h2>

          <p className="text-slate-500 mt-4">
            Interactive elastic SVG curve following mouse movement.
          </p>
        </div>

        <div
          className="w-full h-[250px] flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            width="1000"
            height="200"
            className="overflow-visible"
          >
            <path
              ref={pathRef}
              d={initialPath}
              stroke="#0ea5e9"
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}