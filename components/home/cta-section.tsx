"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

export default function CTASection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // use a supported string for ease
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut, // use a supported string for ease
      },
    },
  };

  const dotVariants = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [1, 0.7, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{
        backgroundSize: "400% 400%",
      }}
      variants={backgroundVariants}
      animate="animate"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-yellow-400/20 rounded-lg"
        animate={{
          rotate: [45, 405],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-purple-300/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 12}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-10 lg:mb-12 leading-tight"
          variants={headlineVariants}
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            BE{" "}
            <motion.span
              className="text-yellow-400 inline-block"
              variants={dotVariants}
              animate="animate"
            >
              ●
            </motion.span>{" "}
            BOLD
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            BE BRILLIANT
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            WITH Digically
          </motion.span>
        </motion.h2>

        <motion.div variants={buttonVariants}>
          <Link
            href="/inquire"
            className="bg-white text-blue-800 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-black text-base sm:text-lg lg:text-xl flex items-center justify-center space-x-3 sm:space-x-4 mx-auto hover:bg-gray-100 transition-all w-full max-w-xs sm:max-w-sm lg:max-w-md xl:w-1/4 xl:max-w-none relative overflow-hidden group"
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-10"
              initial={false}
              whileHover={{ opacity: 0.1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Button content */}
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Start Today
            </motion.span>

            <motion.div
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotate: 45,
                transition: { duration: 0.3 },
              }}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Pulsing rings around CTA */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 border border-white/20 rounded-full"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                marginTop: `${-100 - i * 50}px`,
                marginLeft: `${-100 - i * 50}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Gradient overlay animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.section>
  );
}
