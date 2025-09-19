"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";

export default function FounderSection() {
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

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet Our
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Founder
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image section */}
          <motion.div className="relative" variants={imageVariants}>
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Main image */}
              <motion.div
                className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 relative"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Image
                  src="/reenal.JPG"
                  alt="Rinal Siddhpura - Founder"
                  className="w-full h-full object-cover"
                  fill
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 360],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70"
                animate={{
                  x: [-3, 3, -3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content section */}
          <motion.div className="space-y-8" variants={contentVariants}>
            {/* Name and title */}
            <div>
              <motion.h3
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Rinal Siddhpura
              </motion.h3>
              <motion.p
                className="text-xl text-purple-600 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Founder & CEO
              </motion.p>
            </div>

            {/* Bio content */}
            <motion.div
              className="space-y-6 text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-lg leading-relaxed">
                Marketing has always been my passion—turning the right strategy,
                message, and timing into brand success.
              </p>

              <p className="text-lg leading-relaxed">
                What began as helping local businesses in Ahmedabad has grown
                into a trusted digital partner for brands across industries.
              </p>

              <p className="text-lg leading-relaxed">
                At Digically, we craft brand stories, build meaningful
                connections, and create lasting digital value.
              </p>

              <p className="text-lg leading-relaxed">
                Whether you’re scaling a small business or launching big,
                Digically has your back.
              </p>

              <p className="text-lg leading-relaxed font-semibold">
                Boost Your Brand with Digically.
              </p>
            </motion.div>

            {/* Achievement stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              variants={statVariants}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-purple-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  5+
                </motion.div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-purple-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-600 mt-1">
                  Projects Delivered
                </div>
              </div>

              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-purple-600"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  10+
                </motion.div>
                <div className="text-sm text-gray-600 mt-1">Team Members</div>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.a
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(168, 85, 247, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                target="_blank"
                href="https://www.linkedin.com/in/rinal-siddhpura-41b00034a/"
              >
                Connect with Rinal
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-40"
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + i * 8}%`,
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
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
