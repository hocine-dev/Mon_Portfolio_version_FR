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
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
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

          {/* Modern Experience Sections */}
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

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
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
        <div className="absolute top-40 left-20 w-40 h-40 bg-gradient-to-br from-blue-600/8 to-red-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-red-600/8 to-blue-600/8 rounded-full blur-2xl" />
      </div>

      {/* Titre avec design moderne */}
      <div className="text-center relative mb-20 xs:mb-12">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-[50px] blur-3xl opacity-30" />
        <h2 className="relative font-bold text-8xl xs:text-4xl sm:text-4xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
          Expérience
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
        
        <ul className="w-full flex flex-col items-start justify-between ml-20 xs:ml-0 xs:w-full space-y-8">
          <Details
            position="Développeur Web Full Stack"
            company="Freelancer"
            time="2020-Aujourd'hui"
            sections={[
              {
                title: "Expertise Technique",
                color: "from-blue-600 to-indigo-600",
                content: "Maîtrise des écosystèmes JavaScript et PHP pour développer des solutions performantes et sur mesure. Spécialisation dans les frameworks modernes et les architectures scalables.",
                skills: ["React", "Next.js", "Node.js", "Symfony", "Express", "TypeScript"]
              },
              {
                title: "E-commerce & Plateformes",
                color: "from-indigo-600 to-purple-600",
                content: "Architecture et développement de plateformes e-commerce à fort trafic avec optimisation des Core Web Vitals et intégration de systèmes de paiement complexes.",
                skills: ["Stripe", "PayPal", "SEO", "Performance Web", "UX E-commerce"]
              },
              {
                title: "APIs & Backend",
                color: "from-purple-600 to-pink-600",
                content: "Conception d'APIs RESTful robustes et sécurisées alimentant des applications métiers et des tableaux de bord analytiques avec une attention particulière à la scalabilité.",
                skills: ["RESTful", "GraphQL", "JWT", "OAuth", "Base de données SQL/NoSQL"]
              },
              {
                title: "UI/UX Design",
                color: "from-pink-600 to-red-600",
                content: "Création d'interfaces utilisateur dynamiques et interactives assurant une expérience utilisateur fluide et un design responsive adapté à tous les appareils.",
                skills: ["Tailwind CSS", "Framer Motion", "Material UI", "Design System"]
              }
            ]}
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;