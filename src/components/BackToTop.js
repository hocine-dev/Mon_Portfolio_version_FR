import React from 'react'
import Image from 'next/image'
import icon from "../../public/btop.ico"


const isBrowser = () => typeof window !== 'undefined'; 

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


import { motion } from 'framer-motion'

const BackToTop = () => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-tr from-blue-600 via-white to-red-600 hover:scale-110 hover:shadow-2xl transition-all duration-300 border-4 border-white z-50 group"
      aria-label="Back to top"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-blue-600 transition-colors duration-300">
        <Image src={icon} alt="back to top" width={28} height={28} className="group-hover:invert transition-all duration-300" />
      </span>
    </motion.button>
  )
}

export default BackToTop