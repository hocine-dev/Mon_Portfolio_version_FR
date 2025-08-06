import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import p1 from "../../public/images/projects/p1.png";
import p2 from "../../public/images/projects/p2.png";
import p3 from "../../public/images/projects/p3.png";
import p4 from "../../public/images/projects/p4.png";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, tech }) => {
  return (
    <article className="sm:flex-col md:flex-col sm:last:pb-3 sm:p-1 xs:flex-col xs:last:pb-3 xs:p-1 relative p-6 md:p-10 w-full flex items-center justify-between rounded-3xl border border-solid bg-white/70 backdrop-blur-lg  transition-all duration-300 hover:scale-[1.025] hover:shadow-blue-200/40 hover:border-primary">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-gradient-to-br from-primary/30 via-white/60 to-dark/10" />
      <Link
        href={link}
        target="blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-2xl shadow-lg xs:w-full sm:w-full md:w-[90%] border border-primary/20 bg-white/60 backdrop-blur-md transition-transform duration-300"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 xs:w-full sm:w-full md:w-full mt-4 md:mt-0">
        <span className="text-primary font-semibold text-lg uppercase tracking-widest sm:w-full sm:flex sm:justify-center xs:w-full xs:flex xs:justify-center md:w-full md:flex md:justify-center p-2">
          <span>{type}</span>
        </span>
        <Link href={link} target="blank">
          <h2
            className="w-full my-2 text-left text-3xl md:text-4xl font-extrabold hover:underline underline-offset-4 text-dark drop-shadow-sm"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark/80 text-base md:text-lg leading-relaxed">{summary}</p>
        <span className="font-bold xs:flex xs:flex-col sm:flex sm:flex-col mt-2">
          <span className="text-xs text-dark/60 uppercase tracking-widest">Compétences</span>
          <span className="text-primary font-bold break-all text-base">{tech}</span>
        </span>
        <br></br>
        <span className="xs:flex xs:justify-center sm:flex sm:justify-center md:flex md:justify-center w-full mt-4">
          <Link
            href={link}
            target="blank"
            className="bg-primary/90 hover:bg-primary text-light rounded-full py-2 px-6 text-base font-semibold shadow-md transition-colors duration-200"
          >
            Voir le projet
          </Link>
        </span>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, tech }) => {
  return (
    <article
      className="w-full  flex-col flex items-center justify-center rounded-2xl border-solid border-dark border
  bg-light relative mt-4 "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark" />
      <Link
        href={link}
        target="blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto p-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between p-5 ">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="blank">
          <h2 className="w-full my-2 text-left text-4xl font-bold hover:underline underline-offset-2">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <span className="font-bold">
        compétences:&nbsp;
          <span className="text-primary font-bold ">{tech}</span>
        </span>
        <br></br>
        <Link
          href={link}
          target="blank"
          className="ml-4 bg-dark rounded text-light p-2 px-6 text-lg font-semibold"
        >
          Lien vers le projet
        </Link>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Quelques projets que j&apos;ai réalisés</title>
        <meta
          name="description"
          content="Explore my impressive web developer portfolio  expert in HTML, CSS, JS, and responsive design. Hire me for your next project"
        ></meta>
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="w-full mb-16 flex flex-col items-center justify-center lg:mt-5">
        <Layout className="pt-16">
          <AnimatedText
            text="Quelques projets que j'ai réalisés"
            className="mb-16 xs:!text-3xl"
          />

          {/* Projects data array */}
          {(() => {
           const projectsData = [
              {
                title: "Smarteam Digital Consulting - Partenaire web",
                summary: "Un site web professionnel et engageant pour une agence de conseil digital spécialisée en développement web. Le site présente leur expertise, leurs réalisations et leur approche personnalisée, invitant les visiteurs à les contacter pour leurs projets numériques.",
                link: "https://smarteam.netlify.app/",
                img: p1,
                type: "Web Site",
                tech: "Html,Css,Javascript"
              },
              {
                title: "Cocon Précieux - Baume multi-usage naturel",
                summary: "Un site web apaisant et esthétique pour un baume multi-usage naturel, végan et bio. Le site détaille les bienfaits du produit, l'histoire de la marque et ses valeurs, offrant une expérience utilisateur douce et informative.",
                link: "https://cocon-precieux.vercel.app/",
                img: p2,
                type: "Web Site",
                tech: "Html,Css,Javascript"
              },
              {
                title: "Grengou - Experts en additifs alimentaires",
                summary: "Un site web élégant et informatif présentant une entreprise spécialisée dans l'importation et la commercialisation d'additifs alimentaires. Le site met en avant leur expertise, leur gamme de produits et leurs coordonnées, avec un design clair et une navigation intuitive.",
                link: "https://grengou.vercel.app/",
                img: p3,
                type: "Web Site",
                tech: "Html,Css,Javascript"
              },
              {
                title: "ParisAppart.com - Vente de nom de domaine immobilier",
                summary: "Un site web concis et direct pour la vente du nom de domaine premium \"ParisAppart.com\". Il met en évidence les avantages stratégiques du domaine pour le marché immobilier parisien, avec un processus d'enchères clair et sécurisé.",
                link: "https://parisappart.vercel.app/",
                img: p4,
                type: "Web Site",
                tech: "Html,Css,Javascript"
              }
            ];

            return (
              <div className="grid grid-cols-1  gap-10 md:gap-12 w-full px-2 md:px-0">
                {projectsData.map((project, idx) => (
                  <FeaturedProject key={idx} {...project} />
                ))}
              </div>
            );
          })()}
        </Layout>
      </main>
      <BackToTop/>
    </>
  );
};

export default projects;
