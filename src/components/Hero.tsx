import * as motion from "framer-motion/client"
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-[9rem] flex items-center justify-center bg-gradient-to-br from-slate-50 to-primary-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text text-primary-highliter">
              Ajmal Ali
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600">
              Frontend Engineer
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-8 text-4xl md:text-6xl font-bold text-primary-highliter tracking-wider"
          >
            WORK IN PROGRESS...
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            Crafting beautiful digital experiences with modern web technologies
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-primary-highliter text-white rounded-full flex items-center justify-center gap-2 hover:bg-primary-700 transition-all duration-300"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <a
              href="#projects"
              className="px-8 py-4 bg-white text-slate-800 rounded-full hover:bg-slate-100 transition-all duration-300"
            >
              View Projects
            </a> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
