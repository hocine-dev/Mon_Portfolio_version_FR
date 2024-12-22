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
            time="2017-Aujourd'hui"
            work="En 7 ans d'expérience, j'ai développé des sites web et applications dynamiques, incluant des solutions e-commerce et des projets sur mesure. Compétent en front-end (HTML, CSS, JavaScript) et back-end (Node.js, PHP, Python), j'ai aussi travaillé sur l'optimisation des performances et l'intégration de solutions de paiement. Chaque projet a renforcé ma capacité à offrir des solutions adaptées aux besoins de mes clients."
          />
          
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
