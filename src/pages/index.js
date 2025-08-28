import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import mainImg from "../../public/images/home/mainimg.png";
import circularImg from "../../public/images/home/circular.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HomeStyle from "../styles/Home.module.css";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";
import { useState, useEffect } from "react";
import ModernImage from "@/components/ModernImage";
import { motion } from "framer-motion";

export default function Home() {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if userAgentData is available (for browsers like Chrome)
      if (
        window.navigator.userAgentData &&
        window.navigator.userAgentData.mobile
      ) {
        setIsMobile(window.navigator.userAgentData.mobile);
      } else {
        // Fallback to checking screen width for mobile detection
        setIsMobile(window.innerWidth <= 768); // You can adjust the width as needed
      }
    }
  }, []);

  // Animations variants pour 2025
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <Head>
        <title>Créer un site internet à Paris | Développeur web à Paris</title>
        <meta
          name="description"
          content="Vous êtes à Paris et vous cherchez à créer votre site internet ? Développeur web à Paris, je réalise la création de site vitrine, blog ou portfolio,site pour une nouvelle marque.Contactez-moi pour un site web sur-mesure, rapide et moderne avec un budget correct."
        />
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="relative flex items-center text-dark w-full min-h-screen xs:min-h-[90vh] dark:text-light overflow-hidden lg:mt-3">
        {/* Éléments décoratifs flottants */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-red-600/10 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-600/10 via-white/10 to-red-600/10 rounded-full blur-xl"
          />
        </div>

        <Layout className="pt-0 md:pt-16 sm:mt-8 xs:px-16 xs:py-0 relative ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-between w-full lg:flex-col gap-12 lg:gap-8"
          >
            {/* Section Image avec nouveau design */}
            <motion.div
              variants={itemVariants}
              style={{ width: "45%" }}
              className="md:!w-full xs:!w-[90vw] relative"
            >
              {/* Fond décoratif */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-[50px] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

              <ModernImage
                src={mainImg}
                alt="Une photo de Hocine, développeur web"
                variant="organic"
                glassmorphism={true}
                animate={true}
                {...(IsMobile
                  ? { width: 369, height: 369 }
                  : { sizes: "(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 45vw" })}
                quality={70}
                priority
                containerClassName="relative  transform hover:scale-[1.02] transition-transform duration-700"
              />
            </motion.div>

            {/* Section Contenu avec nouveau layout */}
            <motion.div
              variants={itemVariants}
              className="w-[53%] flex flex-col items-center self-center lg:min-w-[100vw] lg:text-center space-y-6"
            >
              {/* Titre avec effet dégradé moderne */}
              <div className="relative">
                <AnimatedText
                  text="Bonjour, je m'appelle Hocine"
                  className="xs:!text-3xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl lg:p-1 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
                />
                <div className="absolute -bottom-2 left-0 h-1 w-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-full lg:mx-auto lg:left-1/2 lg:-translate-x-1/2" />
              </div>

              {/* Description avec nouveau style */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-100/50 to-red-100/50 dark:from-blue-950/30 dark:to-red-950/30 rounded-3xl blur-sm opacity-50" />
                <p className="relative my-4 text-base font-medium !text-left xs:px-3 leading-relaxed bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                  Je suis un <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">développeur web freelance</strong> avec plus de 5 ans d’expérience.<br /><br />
                  Si vous souhaitez créer votre site internet, alors vous êtes au bon endroit.<br />
                  Je vous accompagne dans la création de votre <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">site internet sur-mesure</strong>, que ce soit un <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">site vitrine</strong>, un site pour lancer une nouvelle marque, un <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">site e-commerce</strong> ou un <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">portfolio</strong>. Je suis là pour vous aider à le créer, avec un design moderne, adapté à vos besoins et optimisé pour les résultats de <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">recherche sur Google</strong>.<br /><br />
                  Profitez d&apos;un service <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">professionnel</strong> avec un <strong className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">budget</strong> correct et sans passer par une agence, <Link href="/contact" className="underline text-blue-700 hover:text-red-600 font-semibold">contactez-moi</Link> pour commencer.
                </p>
              </motion.div>

              {/* Boutons avec nouveau design 2025 */}
              <motion.div
                variants={itemVariants}
                className="flex items-center mt-2 w-full justify-evenly lg:self-center xs:mt-5 gap-4 lg:flex-col"
              >
                <Link
                  href="/projects"
                  className="!w-[80vw] md:w-auto group relative xs:!text-sm xs:px-1 flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 overflow-hidden bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 xs:mb-2"
                >
                  <span className="relative flex items-center">
                    Voir mes réalisations
                    <motion.span
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-2 text-2xl"
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Link>

               
              </motion.div>
            </motion.div>
          </motion.div>
        </Layout>

        {/* Badge de qualité redesigné */}
        {!IsMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            className={`fixed left-4 bottom-4 flex items-center justify-center overflow-hidden ${HomeStyle.spin} z-20`}
          >
            <div className="w-48 h-auto flex items-center justify-center relative">
              <Image
                src={circularImg}
                alt="circular Img"
                className="opacity-0"
              />

              <div className="group flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 shadow-2xl border-2 border-gray-200/20 dark:border-gray-700/20 w-28 h-28 rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-xl backdrop-blur-sm">
                <div className="flex text-yellow-400 text-sm mb-1 transform group-hover:scale-110 transition-transform duration-300">
                  {"★★★★★"}
                </div>
                <span className="text-xs text-center leading-tight">
                  Qualité
                  <br />
                  garantie
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <BackToTop />
    </>
  );
}