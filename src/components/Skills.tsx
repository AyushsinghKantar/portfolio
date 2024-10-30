import * as motion from "framer-motion/client"
import { Cpu, Sparkles } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiStrapi,
  SiPostman,
  SiGit,
  SiJenkins,
  SiFlutter
} from 'react-icons/si';
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";

const skills = {
  Frontend: [
    { name: 'JavaScript', icon: IoLogoJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'HTML5', icon: IoLogoHtml5, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'CSS', icon: IoLogoCss3, color: '#1572B6' },
  ],
  Backend: [
    { name: 'Strapi', icon: SiStrapi, color: '#4945ff' },
    { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
  ],
  'Tools & Others': [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="my-20 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <Cpu className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-600">
                Skills & Expertise
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 max-w-2xl mx-auto"
            >
              A comprehensive toolkit that enables me to build modern, scalable, and user-friendly applications
            </motion.p>
          </div>

          <div className="grid gap-8">
            {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="relative"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary-600" />
                  <h3 className="text-2xl font-bold text-slate-800">{category}</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
                        <div className="relative bg-white rounded-xl p-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-slate-100">
                          <div className="flex flex-col items-center gap-4">
                            <div className="p-3 rounded-lg bg-slate-50 group-hover:bg-white transition-colors duration-300">
                              <Icon
                                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: skill.color }}
                              />
                            </div>
                            <div className="text-center">
                              <h4 className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors duration-300">
                                {skill.name}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}