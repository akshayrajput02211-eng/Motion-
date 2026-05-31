import gsap from "gsap";
import { useEffect,useRef } from "react";
export default function InfiniteMarqueeSection() {
    const trackRef=useRef();
    useEffect(()=>{
        gsap.to(trackRef.current,{
            xPercent:-50,
            duration:35,
            repeat:-1,
            ease:"none",
        });
    },[]);
    return (
    <section className="py-20 overflow-hidden">
      <h2 className="text-center text-5xl font-black mb-16">
        Infinite Marquee
      </h2>

      <div ref={trackRef} className="flex gap-20 w-max">
        {[...Array(20)].map((_,i)=>(
            <h1 key={i}
            className="text-7xl font-black text-sky-500">
                Aasha
            </h1>
        ))}
      </div>
      </section>
    );
}
