import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen bg-blue-600 z-50 rounded-bl-3xl rounded-tl-3xl'
        initial={{ x: "100%", width: "100%", opacity: 0.9 }}
        animate={{ x: "0%", width: "0%", opacity: 0.7 }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"], opacity: [0.7, 0.9, 0] }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen bg-white z-20 rounded-bl-3xl rounded-tl-3xl'
        initial={{ x: "100%", width: "100%", opacity: 0.8 }}
        animate={{ x: "0%", width: "0%", opacity: 0.5 }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"], opacity: [0.5, 0.8, 0] }}
        transition={{ delay: 0.25, duration: 1.1, ease: "easeInOut" }}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen bg-red-600 z-10 rounded-bl-3xl rounded-tl-3xl'
        initial={{ x: "100%", width: "100%", opacity: 0.7 }}
        animate={{ x: "0%", width: "0%", opacity: 0.4 }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"], opacity: [0.4, 0.7, 0] }}
        transition={{ delay: 0.5, duration: 1.1, ease: "easeInOut" }}
      />
    </>
  )
}

export default TransitionEffect
