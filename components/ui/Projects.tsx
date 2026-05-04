"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

const webProjects: Project[] = [
  {
    title: "Mon CV Digital (v1)",
    description: "CV digital version web. Infos sur mon parcours.",
    image: "/images/digital_resume.png",
    link: "https://ange-marie-05.github.io/digitalresume/",
    tags: ["HTML/CSS", "GitHub Pages"],
  },
  {
    title: "Job Board",
    description: "Plateforme pour stagiaires/alternants et recruteurs.",
    image: "/images/job_board.png",
    link: "https://job-board-aaa.vercel.app/",
    tags: ["React", "Vercel"],
  },
  {
    title: "Concorde",
    description:
      "Application de chat temps réel type Discord (serveurs, channels, rôles), avec frontend sur Vercel, backend sur Railway et base de données sur Supabase.",
    image: "/images/concorde.png",
    link: "https://rtc-strikes-back-ren3.vercel.app/servers",
    tags: ["React", "Supabase", "Railway"],
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

function WebProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/60 transition-all duration-300 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Image 16/9 */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm flex-1">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span className="text-sm font-semibold text-cyan-400 group-hover:text-pink-400 transition-colors">
          Voir le projet →
        </span>
      </div>
    </motion.a>
  );
}

function UXProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <p className="text-gray-400">
            {project.description}
          </p>

          <a
            href={project.link}
            target="_blank"
            className="inline-block px-6 py-3 bg-linear-to-r from-cyan-500 to-pink-500 text-white rounded-full"
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
    <section className="py-16 px-4 sm:px-6 lg:px-12 xl:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* WEB */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">
            Projets Web
          </h2>

          {/* GRID FIX */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {webProjects.map((p, i) => (
              <WebProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* UX */}
        <div className="space-y-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-400">
            Projets UX/UI
          </h2>

          <div className="space-y-16">
            {uxProjects.map((p, i) => (
              <UXProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}