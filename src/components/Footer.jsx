export default function Footer() {
  return (
    <footer className="relative min-h-screen overflow-hidden bg-sky-100">

     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-sky-300/20 blur-[120px]" />

      <div className="relative max-w-[1600px] mx-auto px-16 min-h-screen flex flex-col justify-between">

       
        <div className="flex flex-col items-center justify-center text-center gap-39 pt-56">

          <p className="uppercase tracking-[8px] text-sky-500 font-semibold mb-8">
            AVAILABLE FOR COLLABORATION
          </p>

          <h2 className="text-5xl md:text-8xl font-black text-slate-800 leading-[0.9]">
            Let's Create
            <br />
            Something Meaningful
          </h2>

        </div>

       <div className="border-t border-sky-200 py-20">

  <div className="max-w-[1600px] mx-auto px-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-56">

     
      <div>

        <h3 className="font-bold text-slate-800 text-xl ml-5 mb-8">
          Contact
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Available for freelance projects, creative
          collaborations and frontend development work.
        </p>
        <br/>

        <div className="mt-8 space-y-3 text-slate-700">

          <p>akshayrajput02211@gmail.com</p>
       

        </div>

      </div>

      
      <div>

        <h3 className="font-bold text-slate-800 text-xl mb-8">
          Navigation
        </h3>

        <div className="flex flex-col gap-4 text-slate-600">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>

        </div>

      </div>

     
      <div>

        <h3 className="font-bold text-slate-800 text-xl mb-8">
          Expertise
        </h3>

        <div className="flex flex-col gap-4 text-slate-600">

          <span>React Development</span>
          <span>GSAP Animation</span>
          <span>Creative Interfaces</span>
          <span>Frontend Architecture</span>

        </div>

      </div>

      
      <div>

        <h3 className="font-bold text-slate-800 text-xl mb-8">
          Connect
        </h3>

        <div className="flex flex-col gap-4 text-slate-600">

          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Behance</a>

        </div>

      </div>

    </div>

  </div>

</div>
     
        <div className="border-t border-sky-200 py-10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <p className="text-slate-500">
              Designed and developed by Akshay.
            </p>

            <div className="flex gap-8 text-slate-500">

              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>

            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                h-12
                w-44
                rounded-xl
                bg-pink-400
                text-white
                font-semibold
                shadow-md
                hover:bg-pink-500
                transition-all
              "
            >
              Back To Top
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}