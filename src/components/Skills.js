"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaWordpress, FaLaravel, FaSymfony } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"

// Composant de compétence avec icône et effet glassmorphism moderne
const Skill = ({ name, icon, index, category }) => (
  <motion.div
    className="
      relative flex flex-col items-center justify-center gap-3
      rounded-2xl backdrop-blur-md bg-white/15 dark:bg-black/15
      border border-white/20 dark:border-gray-800/50
      py-6 px-4 h-[120px] w-full
      shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.05)]
      hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
      transition-all duration-300 cursor-pointer
    "
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3 },
    }}
    initial={{ scale: 0, opacity: 0, y: 50 }}
    whileInView={{
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }}
    viewport={{ once: true }}
  >
    <div className="text-4xl text-gray-800 dark:text-gray-100 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">{name}</span>

    {/* Effet de glow au hover */}
    <div
      className={`
        absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300
        ${
          category === "framework"
            ? "bg-gradient-to-br from-blue-500/10 to-red-500/10 dark:from-blue-400/10 dark:to-red-400/10"
            : "bg-gradient-to-br from-blue-600/10 to-red-600/10 dark:from-blue-500/10 dark:to-red-500/10"
        }
      `}
    />

    {/* Bordure animée au hover */}
    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
      <div
        className={`
          absolute inset-0 rounded-2xl
          ${
            category === "framework"
              ? "bg-gradient-to-r from-blue-500/20 via-red-500/20 to-blue-500/20"
              : "bg-gradient-to-r from-blue-600/20 via-red-600/20 to-blue-600/20"
          }
        `}
        style={{ padding: "1px" }}
      >
        <div className="w-full h-full rounded-2xl bg-white/15 dark:bg-black/15 backdrop-blur-md" />
      </div>
    </div>
  </motion.div>
)

const SkillsGrid = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Frameworks (première ligne)
  const frameworks = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      category: "framework",
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      category: "framework",
    },
    {
      name: "Symfony",
      icon: <FaSymfony className="text-[#000000] dark:text-white" />,
      category: "framework",
    },
    {
      name: "Laravel",
      icon: <FaLaravel className="text-[#FF2D20]" />,
      category: "framework",
    },
  ]

  // Technologies core (lignes suivantes)
  const coreSkills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      category: "core",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      category: "core",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-[#F7DF1E]" />,
      category: "core",
    },
    {
      name: "PHP",
      icon: <FaPhp className="text-[#777BB4]" />,
      category: "core",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      category: "core",
    },
    {
      name: "WordPress",
      icon: <FaWordpress className="text-[#21759B]" />,
      category: "core",
    },
  ]

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-16 px-8">
      {/* Effet de particules en arrière-plan */}
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/20 dark:bg-blue-500/20"
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Titre moderne centré */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400">
              Compétences
            </span>
          </h2>
          <motion.div
            className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Technologies et frameworks que j&apos;utilise pour créer des expériences digitales exceptionnelles
          </p>
        </motion.div>

        {/* Section Frameworks */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400">
              Frameworks & Bibliothèques
            </span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {frameworks.map((skill, index) => (
              <Skill key={skill.name} name={skill.name} icon={skill.icon} index={index} category={skill.category} />
            ))}
          </div>
        </motion.div>

        {/* Section Technologies Core */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-400 dark:to-red-400">
              Technologies Fondamentales
            </span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {coreSkills.map((skill, index) => (
              <Skill
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                index={index + frameworks.length} // Décalage basé sur le nombre de frameworks
                category={skill.category}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const Skills = () => {
  return <SkillsGrid />
}

export default Skills