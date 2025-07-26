import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import BackToTop from "@/components/BackToTop";

// Données des services
const servicesData = [
  {
    icon: "🚀",
    title: "Création de sites web sur mesure",
    description:
      "Développement de sites vitrines, e-commerce et landing pages optimisés pour les TPE/PME et indépendants à Paris et en Île-de-France. Chaque site est performant, évolutif et parfaitement adapté à votre image.",
    items: [
      "Sites vitrines performants et évolutifs",
      "Sites e-commerce (Shopify, Headless)",
      "Landing pages optimisées pour la conversion",
    ],
  },
  {
    icon: "⚙️",
    title: "Développement Full Stack",
    description:
      "En tant que développeur Full Stack, je construis des applications web interactives et robustes avec Next.js, React, et Node.js. Je conçois des API RESTful sécurisées et des bases de données performantes pour des solutions complètes.",
    items: [
      "Applications web interactives (Next.js, React)",
      "API sécurisées (Node.js, Express)",
      "Intégration de bases de données (MongoDB, SQL)",
    ],
  },
  {
    icon: "📈",
    title: "Optimisation SEO & Performance",
    description:
      "J'optimise le SEO technique de votre site pour un meilleur classement sur Google. J'améliore les Core Web Vitals pour une expérience utilisateur rapide et fluide, un atout majeur pour les entreprises visant le marché parisien.",
    items: [
      "Optimisation SEO on-page et technique",
      "Amélioration des Core Web Vitals",
      "Gestion du référencement local (Île-de-France)",
    ],
  },
  {
    icon: "🔍",
    title: "Consulting & Accompagnement",
    description:
      "Je vous accompagne dans vos projets digitaux, du choix de l'architecture technique à la réalisation de votre MVP. Mon expertise de développeur web est à votre service pour assurer le succès de votre projet.",
    items: [
      "Conseil en architecture et stack technique",
      "Accompagnement de projets (MVP, SaaS)",
      "Support technique pour agences et startups",
    ],
  },
  {
    icon: "🧠",
    title: "Formation & Compétences",
    description:
      "Je propose des formations sur mesure pour vous ou vos équipes sur des technologies comme React, Next.js, et le SEO. Chaque projet est livré avec une documentation technique claire pour garantir votre autonomie.",
    items: [
      "Formations personnalisées (React, Next.js, SEO)",
      "Documentation technique complète des projets",
      "Transfert de compétences pour la maintenance",
    ],
  },
];

// Composant pour une carte de service
const ServiceCard = ({ icon, title, description, items, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative group w-full h-full"
    >
      {/* Fond glassmorphism */}
      <div className="absolute -inset-4 bg-gradient-to-br from-white/70 to-gray-50/70 dark:from-gray-900/70 dark:to-gray-800/70 backdrop-blur-xl rounded-3xl border border-gray-200/40 dark:border-gray-700/40 shadow-lg group-hover:shadow-2xl transition-all duration-500" />
      <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 to-red-600/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col p-8 h-full space-y-6">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="text-5xl"
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
          {description}
        </p>

        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <span className="text-blue-500">✔</span>
              <span className="text-gray-800 dark:text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Services | Développeur Web Full Stack à Paris</title>
        <meta
          name="description"
          content="Développeur web freelance à Paris, je propose des services de création de site sur mesure, développement Full Stack (Next.js, React), et optimisation SEO pour les entreprises en Île-de-France."
        />
      </Head>
      <TransitionEffect />
      <main className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16 sm:pt-8">
          {/* Titre */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center relative mb-20 xs:mb-12"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-[50px] blur-3xl opacity-30" />
            <AnimatedText
              text="Mes Services de Développeur Web"
              className="relative !text-6xl lg:!text-5xl md:!text-4xl xs:!text-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
            />
            <p className="text-lg md:text-base text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
              En tant que développeur web freelance à Paris, je vous aide à
              concrétiser vos projets digitaux avec des solutions modernes,
              performantes et optimisées pour le SEO.
            </p>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-600 rounded-full" />
          </motion.div>

          {/* Grille de services */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </motion.div>
        </Layout>
      </main>
      <BackToTop />
    </>
  );
};

export default Services;
