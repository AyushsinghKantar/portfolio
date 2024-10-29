/* eslint-disable @next/next/no-img-element */
import * as motion from "framer-motion/client"
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js and GraphQL',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'GraphQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Real-time task management application with team collaboration features',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using OpenAI API',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'OpenAI', 'Node.js', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold mb-12 text-sectionHadingColor-800">
            <FolderGit2 className="w-8 h-8 text-primary-600" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-50 relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white-50 text-slate-600 rounded text-sm border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
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
