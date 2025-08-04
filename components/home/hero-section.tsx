"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, easeOut, easeInOut } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const scaleVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 text-white relative overflow-hidden">
      {/* Navigation */}

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center lg:min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={itemVariants}
          >
            {/* 3D Book Icon - Responsive sizing with motion */}
            <motion.div
              className="absolute -top-4 sm:-top-6 lg:-top-8 -left-2 sm:-left-3 lg:-left-4 w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-16 transform -rotate-12"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.1, rotate: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-md lg:rounded-lg shadow-xl relative">
                <div className="absolute inset-1 sm:inset-2 bg-white rounded-sm lg:rounded-md"></div>
                <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 lg:top-3 lg:left-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-none mb-4 sm:mb-6 lg:mb-8 tracking-tight"
              variants={itemVariants}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                WE CRAFT
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                THE{" "}
                <span className="inline-flex items-center">
                  <motion.span
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-2 sm:mx-3 lg:mx-4 transform rotate-12"
                    variants={rotateVariants}
                    animate="animate"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                      ✦
                    </span>
                  </motion.span>
                </span>
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                DIGITAL
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                EXPERIENCE
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-purple-100 mb-6 sm:mb-8 max-w-lg leading-relaxed"
              variants={itemVariants}
            >
              Digically exists to revolutionize the way brands connect and
              engage with their audiences in the digital era by leveraging
              innovative strategies and cutting-edge technology. We strive to
              redefine digital experiences by crafting tailored solutions that
              not only capture attention.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/inquire"
                className="bg-white  text-purple-600 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:bg-purple-50 transition-all hover:shadow-xl text-sm sm:text-base group sm:w-1/3 max-w-1/2 sm:max-w-none"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Get Started
                </motion.span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Elements */}
          <motion.div
            className="relative flex justify-center items-center order-1 lg:order-2 h-64 sm:h-80 lg:h-96"
            variants={itemVariants}
          >
            {/* Main 3D Block - Responsive sizing with motion */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateY: 15,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-48 h-28 sm:w-64 sm:h-36 lg:w-80 lg:h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl lg:rounded-2xl transform rotate-3 shadow-2xl relative overflow-hidden"
                variants={floatingVariants}
                animate="animate"
              >
                {/* Dotted pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12 gap-0.5 sm:gap-1 p-2 sm:p-3 lg:p-4 h-full">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black rounded-full opacity-60"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: i * 0.01,
                          repeat: Infinity,
                          repeatType: "reverse",
                          repeatDelay: 3,
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>

                {/* Top surface */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-48 h-28 sm:w-64 sm:h-36 lg:w-80 lg:h-48 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl lg:rounded-2xl shadow-xl"
                  initial={{ x: 20, y: 20 }}
                  animate={{ x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Image
                    fill
                    src="/brandimg.jpeg"
                    alt="Boost your brand with Digically"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating elements - Responsive positioning and sizing with motion */}
            <motion.div
              className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-400 rounded-lg sm:rounded-xl lg:rounded-2xl transform rotate-45 shadow-lg"
              variants={scaleVariants}
              animate="animate"
              whileHover={{ scale: 1.3, rotate: 90 }}
            ></motion.div>

            <motion.div
              className="absolute bottom-8 left-2 sm:bottom-12 sm:left-4 lg:bottom-16 lg:left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg opacity-90"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.2 }}
            ></motion.div>

            {/* Stats boxes - Responsive layout with motion */}
            <motion.div
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-bottom-8 lg:-right-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                className="bg-yellow-400 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-lg sm:text-xl lg:text-2xl font-black"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  120M
                </motion.div>
                <div className="text-xs font-medium opacity-80">
                  Social Media
                </div>
                <div className="text-xs font-medium opacity-80 hidden sm:block">
                  Engagement
                </div>
              </motion.div>
              <motion.div
                className="bg-orange-400 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl"
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-lg sm:text-xl lg:text-2xl font-black"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  320+
                </motion.div>
                <div className="text-xs font-medium opacity-80">
                  Global Network
                </div>
                <div className="text-xs font-medium opacity-80 hidden sm:block">
                  Of Clients
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Background decorative elements - Responsive positioning with motion */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-300 rounded-full opacity-60"
        animate={{
          y: [-5, 5, -5],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-50"
        animate={{
          x: [-3, 3, -3],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
