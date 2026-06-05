import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./pages/Sections";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Global Audio */}
      <audio
        ref={audioRef}
        src="/music/song.mp3"
        loop
      />

      <Navbar
        audioRef={audioRef}
        playing={playing}
        setPlaying={setPlaying}
      />

      <Hero />

      <Sections
        audioRef={audioRef}
        playing={playing}
      />
    </>
  );
}

export default App;