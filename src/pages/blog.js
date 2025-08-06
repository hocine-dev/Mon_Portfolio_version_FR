import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/images/articles/img1.jpeg";
import img2 from "../../public/images/articles/img2.png";
import img3 from "../../public/images/articles/img4.jpg";
import img4 from "../../public/images/articles/img4.png";
import img5 from "../../public/images/articles/img5.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  // fallback image if not provided
  const displayImg = img || img1;
  return (
    <li className="w-full  mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg mb-12 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-primary/30">
      <Link href={link} target="blank" className="block w-full">
        <FramerImage
          src={displayImg}
          alt={title}
          className="w-full h-60 md:h-72 object-cover object-center transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="flex flex-col gap-3 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-xs md:text-sm rounded-full px-3 py-1 tracking-widest uppercase">{time}</span>
        </div>
        <Link href={link} target="blank">
          <h2 className="text-2xl md:text-3xl font-extrabold text-dark leading-tight hover:underline underline-offset-4 mb-2">
            {title}
          </h2>
        </Link>
        <p className="text-base md:text-lg text-dark/80 leading-relaxed mb-4">{summary}</p>
        <div className="flex xs:justify-center justify-end">
          <Link href={link} target="blank" className="inline-block bg-primary text-white font-semibold rounded-full px-6 py-2 text-sm md:text-base shadow-md hover:bg-primary/90 transition-colors duration-200">Lire l'article</Link>
        </div>
      </div>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handelMouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX), y.set(-10);
  }
  function handelMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0), y.set(0);
  }

  return (
    <Link href={link} onMouseMove={handelMouse} onMouseLeave={handelMouseLeave} target="blank">
      <h2 className="capitalize text-x1 font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li initial={{y:200}}
    whileInView={{y:0,transition:{duration:0.5,ease:"easeInOut"}}}
    viewport={{once:true}}
    className="xs:flex xs:flex-col md:flex md:flex-col sm:flex sm:flex-col border-r-4 border-b-4 relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 pt-5 xs:w-full"><a href={link} target="blank">En savoir plus</a></span>
    </motion.li>
  );
};

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Hocine HAMAMA</title>
        <meta
          name="description"
          content="Explore My blog for expert insights and trends in web development. Discover cutting-edge techniques, best practices, and industry updates to stay ahead in the ever-evolving world of web development."
        ></meta>
      </Head>

      <TransitionEffect></TransitionEffect>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden lg:mt-5">
        <Layout className="pt-16 xs:p-6">
          <AnimatedText text="Les mots peuvent changer le monde !" className="mb-16 xs:!text-2xl " />
          
          {(() => {
            const articles = [
              {
                img: img1,
                title: "Reconversion professionnelle en informatique En 2025",
                time: "5 minutes",
                link: "https://www.linkedin.com/pulse/reconversion-professionnelle-en-informatique-une-2025-hocine-hamama-bqaff",
                summary: "En 2025, l’informatique continue d’être l’un des secteurs les plus dynamiques et porteurs d’avenir. Avec l’essor constant de l’intelligence artificielle, du cloud computing, de la cybersécurité et de la transformation numérique des entreprises, les besoins en compétences techniques n’ont jamais été aussi importants."
              },
              {
                img: img2,
                title: "Le marché de l'emploi en tech en 2025 : à quoi s'attendre ?",
                time: "3 minutes",
                link: "https://www.linkedin.com/pulse/le-march%C3%A9-de-lemploi-en-tech-2025-%C3%A0-quoi-sattendre-hocine-hamama-ndnaf",
                summary: "Alors que nous approchons de 2025, le marché de l’emploi en tech continue d’évoluer à un rythme effréné. Les avancées rapides dans des domaines tels que l’intelligence artificielle (IA), la cybersécurité et le cloud computing redéfinissent les attentes des entreprises et les compétences recherchées chez les candidats."
              },
              {
                img: img3,
                title: "L'importance du Cloud Hosting pour les entreprises",
                time: "4 minutes",
                link: "https://www.linkedin.com/pulse/limportance-du-cloud-hosting-pour-les-entreprises-hocine-hamama-lbq2f",
                summary: "Découvrez pourquoi le cloud hosting est devenu essentiel pour la performance, la sécurité et la flexibilité des entreprises modernes."
              },
              {
                img: img4,
                title: "Devenir développeur en 6 mois : un rêve ou une illusion ?",
                time: "6 minutes",
                link: "https://www.linkedin.com/pulse/devenir-d%25C3%25A9veloppeur-en-6-mois-un-r%25C3%25AAve-ou-une-illusion-hocine-hamama-igipe",
                summary: "Analyse des promesses de formation accélérée pour devenir développeur, entre réalité du marché et attentes des candidats."
              },
              {
                img: img5,
                title: "Attention aux fausses annonces d'emploi sur LinkedIn !",
                time: "2 minutes",
                link: "https://www.linkedin.com/pulse/attention-aux-fausses-annonces-demploi-sur-linkedin-hocine-hamama-xydqf",
                summary: "Conseils et signaux d’alerte pour repérer les arnaques et protéger sa carrière sur LinkedIn."
              }
            ];
            return (
              <ul className="grid grid-cols-1  gap-6 md:gap-8 w-full px-2 md:px-0">
                {articles.map((article, idx) => (
                  <FeaturedArticle key={idx} {...article} />
                ))}
              </ul>
            );
          })()}
        </Layout>
      </main>
      <BackToTop/>
    </>
  );
};

export default blog;