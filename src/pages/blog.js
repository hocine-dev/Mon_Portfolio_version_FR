import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/images/articles/img1.jpeg";
import img2 from "../../public/images/articles/img2.jpeg";
import img3 from "../../public/images/articles/ImageAI.jpg";
import img4 from "../../public/images/articles/img4.jpg";
import img5 from "../../public/images/articles/img5.webp";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark" />
      <Link
        href={link}
        target="blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <div className="flex justify-between">
        <span className="text-primary font-semibold">{time}</span>
        <span className="text-primary font-semibold">
          <Link href={link} target="blank">
          En savoir plus...
          </Link>
        </span>
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
        <Layout className="pt-16">
          <AnimatedText text="Les mots peuvent changer le monde !" className="mb-16 xs:!text-2xl " />
          <ul className="grid grid-cols-2 gap-16 xs:flex xs:flex-col xs:min-w-[90vw] xs:-ms-[3rem]  md:flex md:flex-col md:min-w-[90vw] md:-ms-[3rem] sm:flex sm:flex-col sm:min-w-[90vw] sm:-ms-[3rem]">
            <FeaturedArticle
              img={img1}
              title="Reconversion professionnelle en informatique En 2025"
              time="5 minute "
              link="https://www.linkedin.com/pulse/reconversion-professionnelle-en-informatique-une-2025-hocine-hamama-bqaff"
              summary="En 2025, l’informatique continue d’être l’un des secteurs les plus dynamiques et porteurs d’avenir. Avec l’essor constant de l’intelligence artificielle, du cloud computing, de la cybersécurité et de la transformation numérique des entreprises, les besoins en compétences techniques n’ont jamais été aussi importants."
            />
            <FeaturedArticle
              img={img2}
              title="Le marché de l'emploi en tech en 2025 : à quoi s'attendre ?"
              time="3 minute "
              link="https://www.linkedin.com/pulse/le-march%C3%A9-de-lemploi-en-tech-2025-%C3%A0-quoi-sattendre-hocine-hamama-ndnaf"
              summary="Alors que nous approchons de 2025, le marché de l’emploi en tech continue d’évoluer à un rythme effréné. Les avancées rapides dans des domaines tels que l’intelligence artificielle (IA), la cybersécurité et le cloud computing redéfinissent les attentes des entreprises et les compétences recherchées chez les candidats."
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Tout les articles
          </h2>
          <ul className="xs:min-w-[90vw] xs:-ms-[3rem] sm:min-w-[90vw] sm:-ms-[3rem] md:min-w-[90vw] md:-ms-[3rem]">
            <Article
              title="L'importance du Cloud Hosting pour les entreprises"
              date="july 18;2023"
              link="https://www.linkedin.com/pulse/limportance-du-cloud-hosting-pour-les-entreprises-hocine-hamama-lbq2f"
              img={img3}
            />
            <Article
              title="Devenir développeur en 6 mois : un rêve ou une illusion ?"
              date="April 20;2023"
              link="https://www.linkedin.com/pulse/devenir-d%25C3%25A9veloppeur-en-6-mois-un-r%25C3%25AAve-ou-une-illusion-hocine-hamama-igipe"
              img={img4}
            />
            <Article
              title="Attention aux fausses annonces d'emploi sur LinkedIn !"
              date="may 21;2023"
              link="https://www.linkedin.com/pulse/attention-aux-fausses-annonces-demploi-sur-linkedin-hocine-hamama-xydqf"
              img={img5}
            />
           
          </ul>
        </Layout>
      </main>
      <BackToTop/>
    </>
  );
};

export default blog;
