import {useEffect, useRef} from "react";
import gsap from "gsap";
export default function CoustomCursorSection(){
    const cursorRef = useRef();
    useEffect(()=>{
        const moveCouser =(e)=>{
            gsap.to(cursorRef.current,{
                x:e.clientX,
                y:e.clientY,
                duration:0.3,
                ease:"power3.out",
            });
        };
        window.addEventListener("mousemove",moveCouser);
        

            return()=>{
                window.removeEventListener("mousemove",moveCouser);


            };

        
    },[]);
    return(
        <section className="max-w-[1600px] mx-auto px-8">
           <div className="bg-white  p-20 shadow-xl border border-blue-100">
            <h2 className="text-3xl font-memo justify-start text-slate-800">
                Custom Cursor
            </h2>
            <p className="text-center text-slate-500 mt-5">
                Move your mouse around
            </p>
            <div ref={cursorRef}
            className="fixed top-0 left-0 w-3 h-3 rounded-full bg-sky-500 pointer-event-none z-[999] -translate-x-1/2 -translate-y-1/2">

            </div>
           </div>



        </section>
    )
}
