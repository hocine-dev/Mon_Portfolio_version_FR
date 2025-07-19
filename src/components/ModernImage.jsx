"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ModernImage = ({ 
  src, 
  alt, 
  containerClassName = "",
  variant = "default",
  priority = false,
  glassmorphism = false,
  animate = false
}) => {
  if (!src || !alt) {
    console.error("ModernImage component requires 'src' and 'alt' props.");
    return null;
  }

  // Variants modernes pour 2025
  const containerVariants = {
    default: "rounded-3xl",
    sharp: "rounded-lg", 
    pill: "rounded-full",
    organic: "rounded-[40px]"
  };

  const glassEffect = glassmorphism 
    ? "backdrop-blur-md bg-white/10 border border-white/30 shadow-2xl" 
    : "";

  // Animations vivantes pour 2025
  const liveAnimations = animate ? {
    scale: [1, 1.02, 1],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  const hoverAnimations = {
    y: -12,
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      animate={liveAnimations}
      whileHover={hoverAnimations}
      transition={{ 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group relative overflow-hidden cursor-pointer
        ${containerVariants[variant]}
        ${glassEffect}
        shadow-2xl hover:shadow-3xl
        transition-all duration-700 ease-out
        transform-gpu perspective-1000
        ${containerClassName}
      `}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Gradient overlay moderne avec plusieurs couches */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Effet de profondeur 3D */}
      <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 45vw"
        className="
          h-full w-full object-cover 
          transition-all duration-700 ease-out
          group-hover:scale-110
          group-hover:brightness-110
          group-hover:contrast-105
          group-hover:saturate-110
          filter
        "
      />

      {/* Effet de brillance liquide (tendance 2025) */}
      <motion.div
        initial={{ x: '-100%', skewX: -15 }}
        whileHover={{ 
          x: '100%',
          transition: { duration: 0.8, ease: "easeOut" }
        }}
        className="
          absolute inset-0 w-full h-full
          bg-gradient-to-r from-transparent via-white/30 to-transparent
          transform skew-x-12
          opacity-0 group-hover:opacity-100
        "
      />

      {/* Particules flottantes (effet moderne) */}
      {animate && (
        <>
          <motion.div
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-4 right-4 w-2 h-2 bg-blue-400/60 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [10, -10, 10],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400/60 rounded-full blur-sm"
          />
        </>
      )}

      {/* Bordure interactive */}
      <div className="
        absolute inset-0 
        border-2 border-transparent 
        group-hover:border-gradient-to-r 
        group-hover:from-blue-400/50 
        group-hover:to-purple-400/50
        rounded-[inherit]
        transition-all duration-500
      " />

      {/* Effet de glow externe */}
      <div className="
        absolute -inset-1 
        bg-gradient-to-r from-blue-500/20 to-purple-500/20 
        rounded-[inherit] 
        blur-md 
        opacity-0 
        group-hover:opacity-100 
        transition-opacity duration-700
        -z-10
      " />
    </motion.div>
  );
};

export default ModernImage;