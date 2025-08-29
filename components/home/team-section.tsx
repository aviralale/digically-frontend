"use client";
import React, { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";

interface TeamMember {
  id: number;
  full_name: string;
  designation: string;
  profile_picture: string;
}

interface TeamMemberResponse {
  results: TeamMember[];
}

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<TeamMemberResponse>(
          "https://api.digically.in/api/teams/team/"
        );
        setTeamMembers(response.data.results);
        setError(null);
      } catch (err) {
        console.error("Error fetching team data:", err);
        setError("Failed to load team data");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

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

  const loadingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: easeOut,
      },
    },
  };

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-orange-500 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
            Meet Our Team
          </h2>
          <div className="flex justify-center items-center">
            <motion.div
              className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
              variants={loadingVariants}
              animate="animate"
            />
          </div>
          <p className="text-white/80 mt-4">Loading our amazing team...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-orange-500 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
            Meet Our Team
          </h2>
          <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-6 backdrop-blur-md">
            <p className="text-white text-lg">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-orange-500 relative">
      {/* Clean minimal header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
        {teamMembers.map((member: TeamMember, index: number) => (
          <motion.div
            key={member.id || index}
            className="relative group cursor-pointer"
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Clean card container */}
            <div className="relative h-72 rounded-2xl overflow-hidden bg-gray-100">
              {/* Clean profile image */}
              <Image
                src={member.profile_picture}
                alt={member.full_name}
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
                      {member.full_name}
                    </h3>
                    <p className="text-sm text-white/90">
                      {member.designation}
                    </p>
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
