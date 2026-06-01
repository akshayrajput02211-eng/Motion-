import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CreativeLoader() {
  const loaderRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".loader-text", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
    }).to(loaderRef.current, {
      y: "-100%",
      delay: 1,
      duration: 1.2,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        bg-black
        text-white
        z-[9999]
        flex
        items-center
        justify-center
      "
    >
      <h1 className="loader-text text-7xl font-black">
        AKSHAY
      </h1>
    </div>
  );
}