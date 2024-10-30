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
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12 text-primary-600">
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
              <p className="text-base md:text-lg text-slate-600 text-justify">
              As a dedicated Frontend Engineer, I&apos;ve a passion for crafting visually
      appealing and high-performance web applications. With hands-on experience
      in technologies like React, Next.js, and Tailwind CSS, I specialize in
      building responsive, user-focused solutions that make a lasting impact.
              </p>
              <div className="flex items-start gap-3">
                <Code2 className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-800">
                    Technical Excellence
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base">
                    Committed to writing clean, maintainable code and staying
                    current with the latest web technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="w-6 h-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-800">
                    Innovation Driven
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base">
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
              <ul className="space-y-3 text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                  1.6+ years of experience in frontend development
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                  Proficient in React.js, Next.js, and Tailwind CSS
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                  Developed and optimized e-commerce and SaaS applications
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                  Integrated payment solutions with Stripe API
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                  Hands-on experience with Strapi CMS and Prisma ORM
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-slate-600">
                  Focused on performance optimization and user experience
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
