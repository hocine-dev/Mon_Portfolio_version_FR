import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

// Importer les icônes
import emailIcon from "../../public/images/svgs/email.webp";
import calendlyIcon from "../../public/images/svgs/calendy.png";
import whatsappIcon from "../../public/images/svgs/whatsapp.svg";
import linkedinIcon from "../../public/images/svgs/linkedin.svg";
import githubIcon from "../../public/images/svgs/logo-github.svg";

// --- Variants pour Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// --- Composant réutilisable pour chaque option de contact ---
const ContactCard = ({ icon, title, description, buttonText, href, isExternal = true }) => {
  const MotionLink = motion(Link);

  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 p-6 rounded-2xl border border-solid border-dark/10 dark:border-light/10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <Image src={icon} alt={`${title} icon`} width={48} height={48} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-dark dark:text-light">{title}</h3>
      <p className="text-dark/75 dark:text-light/75 mb-6 text-[1.5rem] flex-grow">{description}</p>
      <MotionLink
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        className="group mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 bg-dark text-light hover:bg-dark/80 dark:bg-light dark:text-dark dark:hover:bg-light/80 transform hover:-translate-y-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          &rarr;
        </motion.span>
      </MotionLink>
    </motion.div>
  );
};

export default function Contact() {
  const contactOptions = [
    {
      icon: emailIcon,
      title: "Email",
      description: "Vous préférez la méthode classique ? Envoyez-moi un email.",
      buttonText: "Envoyer un email",
      href: "mailto:hocinedev4@gmail.com?subject=Prise%20de%20contact&body=Bonjour%20Hocine,%0D%0A%0D%0A",
      isExternal: false,
    },
    {
      icon: calendlyIcon,
      title: "Planifier une Visio",
      description: "Vous préférez un contact visuel ? Prenez un rendez-vous pour un échange sur Meet.",
      buttonText: "Prendre RDV",
      href: "https://calendly.com/hocinehamama/30min",
    },
    {
      icon: whatsappIcon,
      title: "WhatsApp",
      description: "Vous préférez les messages ? Contactez-moi directement sur WhatsApp.",
      buttonText: "Démarrer la discussion",
      href: "https://wa.me/33651859944",
    },
  ];

  return (
    <>
      <Head>
        <title>Contact | Hocine HAMAMA</title>
        <meta name="description" content="Contactez Hocine HAMAMA - Développeur Web Full Stack freelance. Email, WhatsApp, Calendly - Choisissez le moyen qui vous convient pour démarrer notre collaboration." />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light overflow-y-auto">
        <Layout className="pt-16 pb-16 xs:p-6">
          <AnimatedText
            text="Contactez-moi pour concrétiser vos projets"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent sm:mb-8"
          />

          <div
            className="grid grid-cols-1 md:grid-cols-2 xs:grid-cols-1 gap-8 w-full max-w-6xl mx-auto bg-gradient-to-r from-blue-100/50 to-red-100/50 dark:from-blue-950/30 dark:to-red-950/30 rounded-3xl p-6 shadow-lg"
          >
            <p className="text-dark/75 dark:text-light/75 mb-6 text-[1.5rem]">Vous avez un projet, une idée ou une question ?<br></br>
            Choisissez simplement le moyen qui vous convient le mieux pour entrer en contact avec moi.</p>
            {contactOptions.map((option) => (
              <ContactCard key={option.title} {...option} />
            ))}
          </div>

          <div className="text-center mt-20">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Vous aimez les réseaux ?<br></br>Voici mes comptes:</h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/hocinedev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Hocine HAMAMA"
                className="w-6 m-5"
              >
                <Image src={linkedinIcon} alt="LinkedIn" style={{ scale: "2.5" }} />
              </a>
              <a
                href="https://github.com/hocine-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub de Hocine HAMAMA"
                className="w-6 m-5"
              >
                <Image src={githubIcon} alt="GitHub" style={{ scale: "2.5" }} />
              </a>
            </div>
          </div>
        </Layout>
      </main>
      <BackToTop />
    </>
  );
}