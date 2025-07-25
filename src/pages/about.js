import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";
import { motion } from "framer-motion";

const AnimatedNumbers = (value) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  const myValue = value.value;

  useEffect(() => {
    if (isInView) {
      motionValue.set(myValue);
    }
  }, [isInView, myValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= myValue) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, myValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  // Animations variants pour 2025
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Head>
        <title>À propos de Moi</title>
        <meta
          name="description"
          content="Hocine HAMAMA, développeur web Full Stack avec 7 ans d'expérience, vous aide à créer des sites web professionnels (vitrine, e-commerce, applications). Services sur mesure, SEO, design responsive, sécurité et performance. Contactez-moi pour un site clé en main."
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="relative flex w-full flex-col items-center justify-center lg:mt-5 overflow-hidden">
        {/* Éléments décoratifs flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-32 left-10 w-40 h-40 bg-gradient-to-br from-blue-600/10 to-red-600/10 rounded-full blur-2xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "3s" }}
            className="absolute top-96 right-20 w-60 h-60 bg-gradient-to-br from-blue-600/8 via-white/5 to-red-600/8 rounded-full blur-3xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1.5s" }}
            className="absolute bottom-40 left-1/3 w-32 h-32 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-full blur-xl"
          />
        </div>

        <Layout className="pt-16 xs:p-0 xs:pt-16 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-20 xs:space-y-16"
          >
            {/* Section titre avec effet moderne */}
            <motion.div variants={itemVariants} className="text-center relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-[50px] blur-3xl opacity-30" />
              <AnimatedText
                text="En savoir plus sur moi"
                className="relative mb-16 lg:!text-4xl xs:!text-4xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-blue-600 to-red-600 rounded-full" />
            </motion.div>

            {/* Section principale avec nouveau layout */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Section À propos */}
              <div className="lg:col-span-8 order-1">
                <div className="relative group">
                  {/* Fond glassmorphism */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl group-hover:shadow-2xl transition-all duration-700" />
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/10 to-red-600/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative p-8 xs:px-0 space-y-6">
                    <h2 className="text-center xs:text-center sm:text-left text-xl xs:text-lg sm:text-2xl md:text-3xl font-bold uppercase bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent tracking-wide py-2 xs:py-1 sm:py-2 mx-4 xs:mx-[2.5vw] sm:mx-8 md:mx-12" style={{maxWidth: '95vw'}}>
                      À propos de Moi
                    </h2>
                    
                    <div className="space-y-6 font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                     <h3 className="text-xl  sm:ms-2 sm:me-8  sm:text-2xl font-bold text-gray-900 dark:text-white text-center sm:text-left">
                        Développeur Web Full-Stack à Paris | 5+ ans d&apos;expérience
                      </h3>

                         <p className="sm:mx-5 text-base sm:text-lg text-center sm:text-left">
                        Je suis un développeur web full-stack passionné. Fort de plus de 5 ans d&apos;expérience, je
                        suis spécialisé dans la création de sites web sur mesure.
                      </p>

                      <div className="space-y-4">
                        <div className="group/item flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/30 dark:to-transparent border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 w-full xs:w-[95vw] xs:mx-[2.5vw]" style={{maxWidth: '95vw'}}>
                          <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <strong className="text-blue-600 dark:text-blue-400">Front-end :</strong> Je conçois des interfaces utilisateur intuitives et responsives qui garantissent une expérience utilisateur (UX) exceptionnelle.
                          </div>
                        </div>
                        
                        <div className="group/item flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-r from-red-50/50 to-transparent dark:from-red-950/30 dark:to-transparent border-l-4 border-red-500 hover:shadow-lg transition-all duration-300 w-full xs:w-[95vw] xs:mx-[2.5vw]" style={{maxWidth: '95vw'}}>
                          <div className="w-3 h-3 rounded-full bg-red-500 mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" />
                          <div>
                            <strong className="text-red-600 dark:text-red-400">Back-end :</strong> Je construis des architectures serveur robustes, des API sécurisées et des bases de données performantes pour assurer la solidité de votre projet.
                          </div>
                        </div>
                      </div>

                    
                    </div>
                  </div>
                </div>
              </div>

             
            </motion.div>

            {/* Sections Skills, Experience, Education */}
            <motion.div variants={itemVariants}>
              <Skills />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Experience />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Education />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
      <BackToTop />
    </>
  );
};

export default About;