"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Elina",
      role: "Chief Operations Executive",
      bg: "bg-gradient-to-br from-purple-800 to-pink-800",
      image: "/Eleey.jpg",
    },
    {
      name: "Aviral",
      role: "Web Developer",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      image: "/aviral.jpeg",
    },
    {
      name: "Kriti",
      role: "Web Developer",
      bg: "bg-gradient-to-br from-purple-400 to-blue-400",
      image: "/Kriti.jpeg",
    },
    {
      name: "Gobin",
      role: "Senior Graphic Designer",
      bg: "bg-gradient-to-br from-purple-400 to-indigo-400",
      image: "/gobin.JPG",
    },
    {
      name: "Ajay",
      role: "Graphic Designer",
      bg: "bg-gradient-to-br from-pink-300 to-rose-300",
      image: "",
    },
    {
      name: "Sagar",
      role: "SEO Executive",
      bg: "bg-gradient-to-br from-purple-800 to-pink-800",
      image: "/sagar.jpg",
    },
    {
      name: "Sworup",
      role: "Video Editor",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      image: "/Swarup.JPG",
    },
    {
      name: "Ankit",
      role: "Social Media Executive",
      bg: "bg-gradient-to-br from-purple-400 to-blue-400",
      image: "/ankitdawadii.png",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  };

  const overlayVariants = {
    rest: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
    },
    hover: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const contentVariants = {
    rest: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: -5,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
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
        {/* Section header with motion */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          variants={headerVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4"
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
              Team
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The creative minds behind our success
          </motion.p>
        </motion.div>

        {/* Team grid with motion */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`${member.bg} rounded-2xl sm:rounded-3xl aspect-square relative overflow-hidden cursor-pointer group shadow-lg`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
              animate={{
                y: [-1, 1, -1],
                transition: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
            >
              {/* Background Image with motion */}
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
                variants={imageVariants}
                initial="rest"
                whileHover="hover"
              />

              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0"
                variants={overlayVariants}
                initial="rest"
                whileHover="hover"
              />

              {/* Content container with motion */}
              <motion.div
                className=" bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white relative z-10"
                variants={contentVariants}
                initial="rest"
                whileHover="hover"
              >
                {/* Name with staggered character animation */}
                <motion.h3
                  className="font-black text-xs sm:text-sm lg:text-base xl:text-lg leading-tight mb-1 sm:mb-2 whitespace-pre-line tracking-wide drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {member.name}
                </motion.h3>

                {/* Role with animation */}
                <motion.p
                  className="text-xs sm:text-xs lg:text-sm xl:text-base opacity-90 whitespace-pre-line leading-tight font-medium drop-shadow-md"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {member.role}
                </motion.p>
              </motion.div>

              {/* Enhanced hover effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
                initial={{ opacity: 0, x: "-100%" }}
                whileHover={{
                  opacity: 1,
                  x: "100%",
                  transition: { duration: 0.7 },
                }}
              />

              {/* Subtle border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles around team section */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-40"
            style={{
              top: `${20 + i * 15}%`,
              left: `${15 + i * 12}%`,
            }}
            animate={{
              y: [-10, 10, -10],
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
      </motion.div>
    </section>
  );
}
