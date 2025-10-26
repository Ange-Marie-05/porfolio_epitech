"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const webProjects: Project[] = [
  {
    title: "Mon CV Digital",
    description: "CV digital version web. Infos sur mon parcours.",
    image: "/images/digital_resume.png",
    link: "https://ange-marie-05.github.io/digitalresume/",
  },
  {
    title: "Job Board",
    description: "Plateforme pour stagiaires/alternants et recruteurs.",
    image: "/images/job_board.png",
    link: "https://job-board-aaa.vercel.app/",
  },
];

const uxProjects: Project[] = [
  {
    title: "Portfolio 1",
    description: "Maquette de mon premier portfolio.",
    image: "/images/portfolio_1.png",
    link: "https://www.figma.com/proto/Uz72R9USMEIIRN43hKxulP/portfolio_prototype",
  },
  {
    title: "Optima",
    description: "Site nutrition avec fonctionnalités IA.",
    image: "/images/optima.png",
    link: "https://www.figma.com/proto/nSQvCxB0emnFlcbJVUwpuo/Untitled",
  },
  {
    title: "Test UI/UX",
    description: "Test de concepts UI/UX sur Figma.",
    image: "/images/test.png",
    link: "https://www.figma.com/proto/3V5aUR69nrQEPLcHYK146B/t_e_s_t",
  },
];

function WebProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-full sm:w-auto bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-cyan-500/50 transition-all cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-3 bg-gray-900">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
        <span className="inline-block mt-2 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg group-hover:bg-pink-500 transition-colors">
          Voir le projet →
        </span>
      </div>
    </motion.a>
  );
}

function UXProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            {project.description}
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-linear-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Voir sur Figma →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20 bg-black text-white overflow-hidden"
      id="projects"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* SECTION WEB & MOBILE */}
        <div className="space-y-8" id="web-mobile">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500">
            Projets Web & Mobile
          </h2>
          <div
            className="
              flex flex-col gap-6 
              md:flex-row sm:overflow-x-auto sm:pb-4 
              snap-x snap-mandatory 
              scrollbar-thin scrollbar-thumb-cyan-500/40
            "
          >
            {webProjects.map((p, i) => (
              <div key={i} className="snap-start w-full sm:w-auto">
                <WebProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION UX/UI */}
        <div className="space-y-12" id="design">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-pink-400 to-purple-500">
            Projets UX/UI
          </h2>
          <div className="space-y-16">
            {uxProjects.map((p, i) => (
              <UXProjectCard key={i} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}