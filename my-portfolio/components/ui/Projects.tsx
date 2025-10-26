"use client";

import { motion } from "framer-motion";

// ===== Données projets =====
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const webProjects: Project[] = [
  {
    title: "Projet 1 Web",
    description: "Mon CV digital (version web - non à jour). Ici vous retrouverez plus d'informations sur mon parcours",
    image: "/images/digital_resume.png",
    link: "https://ange-marie-05.github.io/digitalresume/",
  },
  {
    title: "Projet de groupe",
    description: "Job board afin de faciliter la rencontre entre stagiaire ou alternant et recruteurs. Je me suis occupé du frontend avec Tailwind css",
    image: "/images/job_board.png",
    link: "https://job-board-aaa.vercel.app/",
  },
];

const uxProjects: Project[] = [
  {
    title: "Projet 1 UX/UI",
    description: "Maquette portfolio 1",
    image: "/images/portfolio_1.png",
    link: "https://www.figma.com/proto/Uz72R9USMEIIRN43hKxulP/portfolio_prototype?node-id=1-2&t=2Ys7HvPOrLXZ0S7y-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Projet 2 UX/UI",
    description: "Optima, site qui devait apporter des nouveautés dans le domaine de la nutrition, via intégration d'agent IA",
    image: "/images/optima.png",
    link: "https://www.figma.com/proto/nSQvCxB0emnFlcbJVUwpuo/Untitled?node-id=153-255&p=f&t=5M4MVFuPd1d5fl2b-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Projet 3 UX/UI",
    description: "Projet pratique et test de quelques notions en UI/UX sur Figma",
    image: "/images/test.png",
    link: "https://www.figma.com/proto/3V5aUR69nrQEPLcHYK146B/t_e_s_t?node-id=70-240&t=XIB0qfb1wyRLdBrb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

// ===== Composant Carte Web =====
function WebProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 cursor-pointer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Contenu */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Badge hover */}
        <div className="pt-2 flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all duration-300">
          <span>Voir le projet</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
    </motion.a>
  );
}

// ===== Composant Carte UX/UI =====
function UXProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
        
        {/* Image avec effet */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Badge "Voir sur Figma" en overlay */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                Voir sur Figma →
              </span>
            </a>
          </div>
        </motion.div>

        {/* Contenu texte */}
        <div className={`w-full lg:w-1/2 space-y-6 ${isEven ? 'lg:pl-8' : 'lg:pr-8'} text-center lg:text-left`}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-4 border border-cyan-500/30">
              UX/UI Design
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
              {project.title}
            </h3>
            <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Bouton externe */}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Découvrir le projet</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ===== Composant principal =====
export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-12 xl:px-20 bg-black text-white overflow-hidden">
      
      {/* Fond décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto space-y-24">
        
        {/* ===== Section Web & Mobile ===== */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full mb-4 border border-cyan-500/30">
              Développement
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Projets Web & Mobile
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Découvre mes réalisations en développement frontend
            </p>
          </motion.div>

          {/* Carrousel horizontal */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory">
              {webProjects.map((project, index) => (
                <WebProjectCard key={index} project={project} index={index} />
              ))}
            </div>
            
            {/* Indicateur de scroll */}
            <div className="flex justify-center gap-2 mt-6">
              {webProjects.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-cyan-500/30" />
              ))}
            </div>
          </div>
        </div>

        {/* ===== Section UX/UI ===== */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1 bg-pink-500/20 text-pink-400 text-sm font-semibold rounded-full mb-4 border border-pink-500/30">
              Design
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
              Projets UX/UI Design
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Mes créations et maquettes sur Figma
            </p>
          </motion.div>

          {/* Grille alternée */}
          <div className="space-y-24">
            {uxProjects.map((project, index) => (
              <UXProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}