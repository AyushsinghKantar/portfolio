import * as motion from "framer-motion/client"
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Tech Innovation Labs',
    period: '2021 - Present',
    description:
      'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern web technologies.',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Agency',
    period: '2019 - 2021',
    description:
      'Developed responsive web applications and collaborated with design teams to create seamless user experiences.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2018 - 2019',
    description:
      'Built and maintained client websites, implemented responsive designs, and optimized web performance.',
    skills: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="my-20 bg-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-12 text-sectionHadingColor-800">
            <Briefcase className="w-8 h-8 text-primary-600" />
            Work Experience
          </h2>

          <div
            className="relative border-l-2 pl-8 ml-4"
            style={{
              borderColor: 'rgb(165 163 229)',
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative"
              >
                <div
                  className="absolute -left-[43px] bg-white border-4 w-5 h-5 rounded-full"
                  style={{
                    borderColor: 'rgb(165 163 229)',
                  }}
                />
                <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-800">
                      {exp.title}
                    </h3>
                    <span className="text-primary-600 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-slate-600 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-red-50 text-primary-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
