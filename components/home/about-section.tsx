"use client";

import { Instagram, Share2, TrendingUp, Users } from "lucide-react";
import React from "react";
import { motion, easeOut, easeInOut } from "framer-motion";

export default function AboutSection() {
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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // use the imported easing function
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
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
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  const services = [
    {
      title: "SOCIAL STRATEGY",
      description:
        "Comprehensive social media strategies that engage and convert.",
      icon: Share2,
      gradient: "from-blue-600 to-purple-600",
      textColor: "text-blue-100",
      delay: 0.1,
    },
    {
      title: "CREATOR MANAGEMENT",
      description: "Managing influencer partnerships for maximum impact.",
      icon: Instagram,
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-purple-100",
      delay: 0.2,
    },
    {
      title: "INFLUENCER PARTNERSHIPS",
      description: "Strategic collaborations with key industry influencers.",
      icon: Users,
      gradient: "from-pink-600 to-red-600",
      textColor: "text-pink-100",
      delay: 0.3,
    },
    {
      title: "SOCIAL PUBLISHING",
      description: "Content creation and publishing across all platforms.",
      icon: TrendingUp,
      gradient: "from-teal-600 to-blue-600",
      textColor: "text-teal-100",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20"
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
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div className="order-2 lg:order-1" variants={textVariants}>
            <motion.div
              className="text-xs sm:text-sm font-bold text-pink-600 mb-4 sm:mb-6 tracking-wide uppercase"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ABOUT Digically
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 lg:mb-10 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                WE DESIGN MEANINGFUL,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                NOT JUST QUICK IMPRESSIONS
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We believe in creating digital experiences that not only look
              stunning but also drive real business results. Our team combines
              creativity with strategic thinking to deliver solutions that make
              an impact.
            </motion.p>
          </motion.div>

          {/* Right Content - Service Cards */}
          <motion.div className="order-1 lg:order-2" variants={textVariants}>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${service.gradient} text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: service.delay }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    y: [-3, 3, -3],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: easeOut,
                    },
                  }}
                >
                  {/* Background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative z-10"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    className="font-black mb-3 sm:mb-4 text-lg sm:text-xl relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: service.delay + 0.2 }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className={`${service.textColor} leading-relaxed text-sm sm:text-base relative z-10`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: service.delay + 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-2xl sm:rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gray-300 rounded-full opacity-40"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 10}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </section>
  );
}
