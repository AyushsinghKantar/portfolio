/* eslint-disable @next/next/no-img-element */
import * as motion from "framer-motion/client"

 const  Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200 h-[80px]">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold gradient-text"
          >
            <img
              src="/assets/portfolio-logo.png"
              alt="portfolio"
              className="h-[40px] w-[40px] object-contain"
            />
          </motion.div>
          <div className="hidden md:flex gap-8">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-sectionHadingColor-800 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;