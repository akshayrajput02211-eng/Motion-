import {useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
  

gsap.registerPlugin(ScrollTrigger);
export default function CardStackSection(){
    const sectionRef = useRef();
    useEffect(()=>{
        const cards = gsap.utils.toArray(".stack-card");

        cards.forEach((card,index)=>{
            gsap.to(card,{
                scale:0.8+index*0.02,
                 ease:"back.in",

                scrollTrigger:{
                    trigger:card,
                    start:"top center",
                    end:"bottom center",
                    scrub:true,
                     toggleActions: "play reverse play reverse",
  invalidateOnRefresh: true,
                     
                    
                },
            });
        });
    },[]);

    return(
        <section ref={sectionRef}
        className='bg-[#f5faff] py-40'>
            <div className='text-center mb-20'>
                <h2 className='text-3xl font-memo text-slate-800'>
                    Cards Stack
                </h2>
                <p className='text-slate-500 mt-5'>
                    Scroll down to see stacking cards.

                </p>
            </div>
            {['Akshay',"love","animation","beyond"].map((item)=>(
                <div key={item}

                className='stack-card sticky top-32  h-[700px] mb-10
                rounded-3xl bg-pink-300 shadow-xl border border-sky-100
                flex items-center justify-center'>
                    <h1 className='text-8xl font-black text-sky-500
                    '>{item}</h1>
                </div>
            ))}
        </section>
    )
}