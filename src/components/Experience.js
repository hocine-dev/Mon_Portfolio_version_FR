import React, { useRef } from "react";
import { useScroll , motion} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, work }) => {

  return (
    <li className="my-8 first:mt-0 last:mb-0 xs:mx-0 mx-auto flex flex-col items-center justify-between  ">
      <LiIcon className="xs:hidden" />
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl mb-2 xs:text-4xl xs:flex xs:flex-col ">
          <span className="text-primary xs:text-3xl   ">{position}</span>&nbsp;
          <span className="">@{company}</span>
        </h3>
        <span className="capitalize font-medium  text-dark/75 mb-2 ">{time}</span>
        <p className="font-medium w-full mt-2   ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null)

  const {scrollYProgress} = useScroll({target:ref,offset:["start end","center start"]})
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mt-32 w-full text-center mb-16 xs:text-4xl sm:text-4xl">
        Expérience
      </h2>

      <div className="w-[75] mx-auto relative ">


        <motion.div style={{scaleY:scrollYProgress}}  ref={ref} className="xs:text-md absolute  xs:hidden -left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:w-[90%]">
          <Details
            position="Développeur Web Full Stack"
            company="Freelancer"
            time="2020-Aujourd'hui"
            work="En tant que développeur freelance depuis 5 ans, j'ai conçu et développé des applications web complexes pour une clientèle variée (startups, PME, agences). Mon expertise s'articule autour des écosystèmes JavaScript et PHP pour livrer des solutions performantes et sur mesure.

Principales réalisations :

Architecture et développement de plateformes e-commerce à fort trafic avec Next.js, en optimisant les performances (Core Web Vitals) et en intégrant des systèmes de paiement complexes (Stripe, PayPal).

Conception d'APIs RESTful robustes et sécurisées avec Symfony et Node.js (Express), pour alimenter des applications métiers et des tableaux de bord analytiques.

Création d'interfaces utilisateur (UI) dynamiques et interactives avec React, en assurant une expérience utilisateur (UX) fluide et un design responsive.

Pilotage de projets de refonte technique, en migrant des applications monolithiques vers des architectures plus modernes et maintenables."
          />
          
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
