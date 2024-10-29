import * as motion from "framer-motion/client"
import { Cpu } from 'lucide-react';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostman,
  SiGit,
  SiDocker,
  SiJest,
  SiJenkins,
} from 'react-icons/si';

const skills = {
  Frontend: [
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'REST APIs', icon: SiPostman },
  ],
  'Tools & Others': [
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
    { name: 'Jest', icon: SiJest },
    { name: 'CI/CD', icon: SiJenkins },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="my-20 bg-white">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-12 text-sectionHadingColor-800">
            <Cpu className="w-8 h-8 text-primary-600" />
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl p-6 shadow-sm bg-slate-50"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-6">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        <Icon className="w-8 h-8 text-primary-600" />
                        <span className="text-sm font-medium text-slate-600">
                          {skill.name}
                        </span>
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
