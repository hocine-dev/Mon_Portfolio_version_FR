import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, sections }) => {
  return (
    <li className="group relative my-12 xs:my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-center justify-between">
      <LiIcon className="xs:hidden" />
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative w-full"
      >
        {/* Fond glassmorphism avec effet hover */}
        <div className="absolute -inset-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/10 to-red-600/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative p-8 xs:p-6 space-y-4">
          {/* Titre avec design moderne */}
          <div className="space-y-2">
            <h3 className="text-3xl xs:text-xl font-bold leading-tight">
              <span className="block xs:inline bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                {position}
              </span>
              <span className="block xs:inline text-gray-700 dark:text-gray-300 text-2xl xs:text-lg mt-1 xs:mt-0">
                @{company}
              </span>
            </h3>
            
            {/* Badge de temps avec design moderne */}
            <motion.span 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold 
                bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-950 dark:to-red-950 
                text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
              whileHover={{ scale: 1.05 }}
            >
              {time}
            </motion.span>
          </div>

          {/* Modern Education Sections */}
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative mt-6 first:mt-2"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-gray-50/80 to-white/80 dark:from-gray-800/80 dark:to-gray-900/80 rounded-2xl border border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-4">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-r ${section.color}`}></span>
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{section.title}</span>
                </h4>
                
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-base xs:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {section.content}
                  </p>
                </div>
                
                {section.skills && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {section.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 shadow-sm backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <motion.div 
      className="relative mt-32 xs:mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-red-600/8 to-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/8 to-red-600/8 rounded-full blur-2xl" />
      </div>

      {/* Titre avec design moderne */}
      <div className="text-center relative mb-20 xs:mb-12">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-[50px] blur-3xl opacity-30" />
        <h2 className="relative font-bold text-8xl xs:text-4xl sm:text-4xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
          Education
        </h2>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-600 rounded-full" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative px-4">
        {/* Timeline moderne */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute xs:hidden left-8 top-0 w-1 h-full bg-gradient-to-b from-blue-600 via-purple-500 to-red-600 origin-top rounded-full shadow-lg"
        />
        
        {/* Marqueurs de timeline */}
        <div className="absolute xs:hidden left-6 top-0 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full shadow-lg" />
        <div className="absolute xs:hidden left-6 top-80 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-red-600 rounded-full shadow-lg" />

        <ul className="w-full flex flex-col items-start justify-between ml-20 xs:ml-0 xs:w-full space-y-8">
          <Details
            position="Licence Informatique"
            company="UNIVERSITÉ LE HAVRE NORMANDIE"
            time="2021-2025"
            sections={[
              {
                title: "Fondamentaux",
                color: "from-blue-600 to-indigo-600",
                content: "Cursus complet couvrant la programmation, l'architecture des systèmes et les réseaux, me dotant d'une vision globale des technologies informatiques et de leur implémentation.",
                skills: ["Algorithmique", "Structures de données", "Architecture système", "Réseaux"]
              },
              {
                title: "Spécialisation Web",
                color: "from-indigo-600 to-purple-600",
                content: "Focus sur le développement web avec maîtrise des technologies front-end et back-end. C'est le socle qui me permet de maîtriser aussi bien la logique back-end que les interactions complexes du front-end.",
                skills: ["HTML/CSS", "JavaScript", "PHP", "SQL", "Node.js"]
              },
              {
                title: "Projets pratiques",
                color: "from-purple-600 to-pink-600",
                content: "Réalisation de projets individuels et en équipe permettant d'appliquer les connaissances théoriques dans un contexte concret et de développer des compétences en gestion de projet.",
                skills: ["Gestion de projet", "Git", "Méthodologies Agile", "Tests unitaires"]
              }
            ]}
          />
          <Details
            position="Master Informatique"
            company="UNIVERSITÉ LE HAVRE NORMANDIE"
            time="2025-2027"
            sections={[
              {
                title: "Technologies émergentes",
                color: "from-red-600 to-orange-600",
                content: "Formation axée sur les technologies de nouvelle génération pour architecturer les écosystèmes applicatifs de demain, incluant l'intelligence artificielle et l'Internet des objets.",
                skills: ["AI/ML", "IoT", "Edge Computing", "Cloud Architecture"]
              },
              {
                title: "Applications distribuées",
                color: "from-orange-600 to-amber-600",
                content: "Apprentissage des techniques avancées pour créer des applications web distribuées à haute performance, hautement disponibles et scalables pour les environnements d'entreprise.",
                skills: ["Microservices", "Containers", "Serverless", "API Gateway"]
              },
              {
                title: "Recherche & Innovation",
                color: "from-amber-600 to-yellow-600",
                content: "L'objectif est de maîtriser la chaîne complète, de l'objet connecté (IoT) à l'application web distribuée, pour créer des solutions numériques intégrées et innovantes.",
                skills: ["Veille technologique", "Méthodologie de recherche", "Prototypage", "UX/UI avancé"]
              }
            ]}
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;