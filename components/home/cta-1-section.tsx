"use client";

import { ArrowUpRight, Target } from "lucide-react";
import Link from "next/link";
import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

export default function CTASection1() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const backgroundBlobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="bg-gradient-to-r from-purple-800 via-blue-900 to-orange-900 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: easeInOut,
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400/15 rounded-full blur-2xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="bg-gradient-to-r from-purple-700/50 to-blue-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-slate-600/30 relative overflow-hidden"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.3 },
          }}
        >
          {/* Background decorative elements with motion */}
          <motion.div
            className="absolute top-2 left-4 sm:top-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-full blur-xl"
            variants={backgroundBlobVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-2 right-6 sm:bottom-4 sm:right-12 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-orange-400/20 rounded-full blur-xl"
            variants={backgroundBlobVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
            {/* Left side - Text content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Purple icon with motion */}
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 relative"
                variants={floatingVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: easeInOut,
                  }}
                >
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center"
                  variants={pulseVariants}
                  animate="animate"
                >
                  <span className="text-white text-xs font-bold">+</span>
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  READY TO{" "}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  BOOST
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {" "}
                  YOUR
                </motion.span>
                <br />
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  BRAND&apos;S{" "}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  STRATEGIC
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  IMPACT
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  {" "}
                  AND{" "}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  ACHIEVE
                </motion.span>
                <br />
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  SIGNIFICANT{" "}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  GROWTH
                </motion.span>
                <motion.span
                  className="text-white"
                  initial={{ opacity: 0, rotate: -10 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  ?
                </motion.span>
              </motion.h2>
            </motion.div>

            {/* Right side - CTA Button */}
            <motion.div
              className="flex-shrink-0 mt-4 lg:mt-0"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/inquire"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-slate-900 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl font-black text-xl flex items-center justify-center transition-all shadow-2xl group relative overflow-hidden"
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-20"
                  initial={false}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-50"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                  }}
                />

                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: easeInOut,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 45,
                    transition: { duration: 0.3 },
                  }}
                >
                  <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 relative z-10" />
                </motion.div>

                {/* Pulse effect */}
                <motion.div
                  className="absolute inset-0 bg-orange-400 rounded-2xl sm:rounded-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: easeInOut,
                  }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Additional floating elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-60"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: easeInOut,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-purple-300 rounded-full opacity-50"
            animate={{
              x: [-5, 5, -5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: easeInOut,
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
