import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlobCursorSection() {
  const blobRef = useRef();

  useEffect(() => {
    const moveBlob = (e) => {
      gsap.to(blobRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveBlob);

    return () => {
      window.removeEventListener("mousemove", moveBlob);
    };
  }, []);

  return (
    <section className="max-w-[1600px] mx-auto px-8">
      <div className="bg-white  p-20 shadow-xl border border-sky-100">

        <h2 className="text-3xl font-memo justify text-slate-800">
          Blob Cursor
        </h2>

        <div
          ref={blobRef}
          className="
            fixed
            top-0
            left-0
            w-56
            h-56
            rounded-full
            bg-pink-400/30
            blur-3xl
            pointer-events-none
            z-[998]
            -translate-x-1/2
            -translate-y-1/2
          "
        />

      </div>
    </section>
  );
}