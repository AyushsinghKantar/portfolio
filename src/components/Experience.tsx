import * as motion from "framer-motion/client"
import { Briefcase, Code2 } from 'lucide-react';

const experiences = [
  {
    title: "Seniour Frontend Engineer",
    company: "Paexskin Solution Pvt Ltd.",
    period: "Oct 2021 - Present",
    description: (
      <>
        <p className="text-sm md:text-base text-slate-600 mt-5">
          🚀 <strong>Seniour Frontend Engineer : </strong>I began my journey
          with Paexskin as an Associate Software developer and promoted to a
          Seniour role due to my contributions and passion for building
          intuitive, high-performance applications.
        </p>
        <p className="text-sm md:text-base text-slate-600 mt-5">
          📈 <strong>Key Contributions: </strong> I’ve played a central role in
          developing a sophisticated Web app tailored for interior contractors.
          This application includes complex features such as:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-slate-600 mt-5">
          <li style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>
            <strong>Implementation of Highcharts:</strong> I integrated
            Highcharts to display different data sets across various chart types
            and implemented both local and global filters, allowing dynamic data
            and chart updates based on filter selections. This improved user
            experience by enabling flexible data visualization and analysis.
          </li>
          <li
            style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}
            className=""
          >
            <strong>Web Worker Integration:</strong> I integrated a Web Worker
            to handle calculations for large data nodes in the background,
            improving rendering performance and ensuring a smoother user
            experience by offloading heavy processing tasks.
          </li>
          <li style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>
            <strong>Performance improvement:</strong> I optimized the
            application by implementing lazy loading to reduce initial load
            times, using Web Workers for background processing of large data
            sets, and managing state with NgRx for efficient data handling.
            These enhancements significantly improved the application's
            responsiveness and overall performance.
          </li>
        </ul>
        <p className="text-sm md:text-base text-slate-600 mt-5">
          This role has allowed me to hone my skills in frontend development,
          collaborate with a talented team, and continuously deliver value
          through meaningful solutions for the industry.
        </p>
      </>
    ),
    skills: [
      "JavaScript",
      "TypeScript",
      "Angular",
      "Underscore.js",
      "Web worker",
      "NgRx",
      "RxJS",
      "Http Module",
      "Highcharts",
      "HTML5",
      "CSS",
      "SCSS",
      "Bootstrap",
    ],
  },
  {
    title: " Juniour Frontend Engineer",
    company: "Akashic Soft Pvt Ltd.",
    period: "SEP 2020 - OCT 2021",
    description: (
      <>
      <p className="text-sm md:text-base text-slate-600 mt-5">
        🚀 <strong>Juniour Frontend Engineer : </strong>I began my journey
        with Akashic as an interner developer and transition into a
        full time role due to my contributions and passion for building
        intuitive, high-performance applications.
      </p>
      <p className="text-sm md:text-base text-slate-600 mt-5">
        📈 <strong>Key Contributions: </strong> As a junior developer, I had the opportunity to contribute to various features of an advanced web application.
         This experience allowed me to explore and work on some backend components using Node.js. 
         Some of the key features I worked on include:
      </p>
      <ul className="list-disc list-inside text-sm md:text-base text-slate-600 mt-5">
        <li style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>
          <strong>Socket Connection :</strong> I implemented a socket connection to enable a seamless chat experience within the application. 
          I also designed the chat interface, allowing users to send messages, share documents and images, and view their chat history..
        </li>
        <li
          style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}
          className=""
        >
          <strong>Auth Guard Integration for Authorization:</strong> I integrated Auth Guards to secure routes and ensure proper authorization within the application, 
          restricting access based on user roles and permissions for enhanced security and user management.
        </li>
        <li style={{ textIndent: "-1.4em", paddingLeft: "1.2em" }}>
          <strong>Handling REST API :</strong> I managed REST API integrations for seamless data exchange between the frontend and backend, 
          ensuring efficient data retrieval, updates, and error handling for a smooth user experience.
        </li>
      </ul>
      <p className="text-sm md:text-base text-slate-600 mt-5">
      In this role, I've strengthened my frontend development expertise, gained exposure to backend code, 
      worked closely with a talented team, and contributed valuable solutions that make a real impact in the industry.
      </p>
    </>
    ),
    skills: ["Angular", "NgRx","RxJS", "Http Module",, "JavaScript", "Bootstrap" , "HTML5" , "SCSS", "Jquery" , "socket.io", "Node.js" ],
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
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12 text-primary-600">
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
                  <div className="mb-4">{exp.description}</div>
                  <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          delay: index * 0.1 + skillIndex * 0.1,
                          duration: 0.2,
                        }}
                        className="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 text-primary-700 rounded-lg text-sm font-medium border border-primary-200 shadow-sm flex items-center gap-1.5 transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        {skill}
                      </motion.span>
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
