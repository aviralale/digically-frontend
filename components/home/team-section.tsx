"use client";
import React from "react";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Bhavik Siddhpura",

      role: "Executive Director",

      bg: "bg-gradient-to-br from-purple-800 to-pink-800",

      image: "/bhavik-siddhpura-min.JPG",
    },
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

      image: "/Azay.jpg",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-orange-500  relative">
      {/* Clean minimal header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          The passionate minds behind our innovation
        </p>
      </div>

      {/* Minimal team grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Clean card container */}
            <div className="relative h-72 rounded-2xl overflow-hidden bg-gray-100">
              {/* Clean profile image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="w-full h-full object-cover"
              />

              {/* Minimal overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Liquid glass text container */}
              <motion.div
                className="absolute bottom-4 left-4 right-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  {/* Liquid glass background */}
                  <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" />

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent" />

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    animate={{
                      background: [
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Text content */}
                  <div className="relative z-10 p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-white/90">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
