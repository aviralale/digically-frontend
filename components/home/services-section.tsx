"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

export default function ServicesSection() {
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
      y: 50,
      scale: 0.95,
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

  const iconVariants = {
    rest: {
      rotate: 45,
      scale: 1,
    },
    hover: {
      rotate: 90,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const buttonVariants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 45,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const services = [
    {
      title: "DISCOVERY & STRATEGY",
      description:
        "We assess your business goals, challenges, and opportunities to understand your unique needs and develop a tailored marketing strategy.",
      delay: 0.1,
    },
    {
      title: "STRATEGIC ACTION",
      description:
        "Our team implements the strategy with meticulous precision, leveraging best practices and innovative techniques to ensure optimal results.",
      delay: 0.2,
    },
    {
      title: "PERFORMANCE BOOST",
      description:
        "We assess your business goals, challenges, and opportunities to understand your unique needs and develop a tailored marketing strategy.",
      delay: 0.3,
    },
    {
      title: "INSIGHT ANALYSIS",
      description:
        "Receive comprehensive, detailed reports and insights that allow you to track progress and measure success effectively, our analytics provide a clear overview.",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-br to-purple-600 via-red-500 from-orange-500 text-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16"
          variants={headerVariants}
        >
          <motion.p
            className="text-orange-200 text-sm sm:text-base lg:text-lg font-medium italic mb-3 sm:mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            *LET US SHOW YOU!
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                HOW WE DRIVE YOUR
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                BRAND TO NEW HEIGHT
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-purple-100 text-base sm:text-lg leading-relaxed max-w-sm lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We transform innovative ideas into captivating and memorable
              digital experiences that engage and inspire
            </motion.p>
          </div>
        </motion.div>

        {/* Services Cards */}
        <motion.div className="space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-purple-200/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:bg-purple-200/30 transition-all gap-4 sm:gap-0"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: service.delay }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform rotate-45 flex-shrink-0"
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  animate={floatingVariants.animate}
                >
                  <motion.div
                    className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm transform -rotate-45"
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                  ></motion.div>
                </motion.div>
                <motion.div className="flex-1">
                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: service.delay + 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-purple-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: service.delay + 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              </div>
              <motion.button
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors flex-shrink-0 self-end sm:self-center"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  animate={{
                    x: [0, 2, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating background elements */}
        <motion.div
          className="absolute top-10 right-10 w-2 h-2 bg-orange-300 rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-1 h-1 bg-yellow-300 rounded-full opacity-40"
          animate={{
            x: [-5, 5, -5],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: easeInOut,
          }}
        />
      </motion.div>
    </section>
  );
}
