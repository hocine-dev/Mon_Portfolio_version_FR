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

      <main className="flex w-full flex-col items-center justify-center lg:mt-5">
        <Layout className="pt-16 xs:p-0 xs:pt-16">
          <AnimatedText
            text="En savoir plus sur moi"
            className="mb-16 lg:!text-4xl  xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className=" xs:min-w-[100vw] col-span-3 flex flex-col items-start justify-start xs:col-span-5 sm:col-span-8 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 xs:ps-5 xs:w-full xs:text-center">
              À propos de Moi
              </h2>
              <div className="font-medium xs:px-5">
               <h2 className="text-2xl font-bold mb-4">
    Développeur Web Full-Stack à Paris | 5+ ans d&apos;expérience
  </h2>

  <p className="mb-4">
    Je suis un développeur web full-stack passionné. Fort de plus de 5 ans d&apos;expérience, je suis spécialisé dans la création de sites web sur mesure.
  </p>

  <ul className="list-disc list-inside mb-4 space-y-2">
    <li>
      <strong>Front-end :</strong> Je conçois des interfaces utilisateur intuitives et responsives qui garantissent une expérience utilisateur (UX) exceptionnelle.
    </li>
    <li>
      <strong>Back-end :</strong> Je construis des architectures serveur robustes, des API sécurisées et des bases de données performantes pour assurer la solidité de votre projet.
    </li>
  </ul>

  <p>
    Contactez-moi pour discuter de votre projet et donner vie à votre solution digitale.
  </p>
              </div>
            </div>
           

            <div className=" md:col-span-8  xs:min-w-[100vw] col-span-2 sm:col-span-8 sm:items-center md:items-center flex flex-col items-end xs:!items-center justify-between xs:col-span-5  xl:col-span-8 xl:flex-row">
              <div className="flex flex-col items-end xs:!items-center sm:items-center md:items-center justify-center">
                <span className="inline-block text-7xl front-bold lg:text-6xl">
                  {<AnimatedNumbers value={50} />}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                Clients satisfaits
                </h2>
              </div>
              <div className="flex flex-col items-end xs:!items-center justify-center sm:items-center md:items-center">
                <span className="inline-block text-7xl front-bold lg:text-6xl">
                  {<AnimatedNumbers value={50} />}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                Projets réalisés
                </h2>
              </div>
              <div className="flex flex-col items-end xs:!items-center justify-center sm:items-center md:items-center">
                <span className="inline-block text-7xl front-bold lg:text-6xl">
                  {<AnimatedNumbers value={7} />}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                Années d&apos;expérience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
      <BackToTop />
    </>
  );
};

export default About;
