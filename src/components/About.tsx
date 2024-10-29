import * as motion from "framer-motion/client"
import { User, Code2, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="my-20 bg-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-12 text-sectionHadingColor-800">
            <User className="w-8 h-8 text-primary-600" />
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600">
                I&apos;m a passionate Frontend Engineer with a keen eye for creating
                elegant and efficient web solutions. With years of experience in
                web development, I specialize in building responsive and
                user-friendly applications.
              </p>
              <div className="flex items-start gap-3">
                <Code2 className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Technical Excellence
                  </h3>
                  <p className="text-slate-600">
                    Committed to writing clean, maintainable code and staying
                    current with the latest web technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Innovation Driven
                  </h3>
                  <p className="text-slate-600">
                    Always exploring new ways to push the boundaries of web
                    development and create exceptional user experiences.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                    5+ years of development experience
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                    Worked with 20+ global clients
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                    Led 10+ successful projects
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                    Regular tech conference speaker
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
