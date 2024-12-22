import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Function to shuffle the skill names
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute xs:p-2"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  // Skill positions (fixed)
  const positions = [
    { name: 'CSS', x: '-5vw', y: '-12vw' },
    { name: 'HTML', x: '-21vw', y: '2vw' },
    { name: 'JavaScript', x: '21vw', y: '2vw' },
    { name: 'ReactJS', x: '0vw', y: '12vw' },
    { name: 'NextJS', x: '-22vw', y: '-16vw' },
    { name: 'Bootstrap', x: '20vw', y: '-12vw' },
    { name: 'WordPress', x: '35vw', y: '-5vw' },
    { name: 'PHP', x: '0vw', y: '-20vw' },
    { name: 'Tailwindcss', x: '-30vw', y: '18vw' },
    { name: 'Laravel', x: '18vw', y: '18vw' },
  ];

  // Define the skill names
  const skillNames = [
    'CSS', 'HTML', 'JavaScript', 'ReactJS', 'NextJS', 
    'Bootstrap', 'WordPress', 'PHP', 'Tailwindcss', 'Laravel'
  ];

  const [shuffledSkills, setShuffledSkills] = useState([]);

  useEffect(() => {
    // Shuffle the skill names
    const shuffled = shuffleArray(skillNames);
    setShuffledSkills(shuffled);
  }, []);

  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center xs:text-4xl xs:pb-5">
        Compétences
      </h2>

      {/* For XS and SM screens */}
      <div className="xs:hidden sm:hidden md:hidden w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight ">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {positions.map((pos, index) => (
          <Skill key={index} name={shuffledSkills[index]} x={pos.x} y={pos.y} />
        ))}
      </div>

      {/* For LG screens */}
      <div className="hidden xs:flex sm:hidden md:hidden lg:hidden w-full h-screen relative items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-4 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {positions.map((pos, index) => (
          <Skill key={index} name={shuffledSkills[index]} x={pos.x} y={pos.y} />
        ))}
      </div>

      {/* For SM screens */}
      <div className="hidden sm:flex xs:hidden md:hidden lg:hidden w-full h-screen relative items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {positions.map((pos, index) => (
          <Skill key={index} name={shuffledSkills[index]} x={pos.x} y={pos.y} />
        ))}
      </div>

      {/* For MD screens */}
      <div className="hidden md:flex xs:hidden sm:hidden w-full h-screen relative items-center justify-center rounded-full bg-circularLight xs:bg-none">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold
          bg-dark text-light p-4 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {positions.map((pos, index) => (
          <Skill key={index} name={shuffledSkills[index]} x={pos.x} y={pos.y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
