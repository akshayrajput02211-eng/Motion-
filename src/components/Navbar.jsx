const links = ["Home", "About", "Contact"];

export default function Navbar() {
  return (
   <nav className="fixed top-5 left-0 w-full z-50 px-20">
  <div className="max-w-10xl mx-auto">
    <div
     className="
  h-24
  rounded-2xl
  border border-sky-200/30
  bg-sky-100/95
  backdrop-blur-md
  px-20
  flex items-center justify-between
  shadow-lg
"
>
    
    <div className="flex items-center justify-between px-10  gap-10 pl-4">
       <button
        className="
        h-14
        px-20
        w-56
        
        flex
        justify-center
        items-center
        rounded-xl
        bg-pink-400
        text-white
        font-semibold
        shadow-md
        hover:bg-sky-500
        hover:-translate-y-0.5
        transition-all
      "
      >
        Akshay
      </button></div>

  
      <div className="hidden md:flex items-center gap-12">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="
              text-slate-700
              font-semibold
              hover:text-sky-600
              transition
            "
          >
            {link}
          </a>
        ))}
      </div>

      
      <button
        className="
        h-14
        px-20
        mr-8
        
        w-56
        flex
        justify-center
        items-center
        rounded-xl
        bg-sky-500
        text-white
        font-semibold
        shadow-md
        hover:bg-pink-500
        hover:-translate-y-0.5
        transition-all
      "
      >
        Suggest Project 
      </button>
    </div>
  </div>
</nav>
  )
}