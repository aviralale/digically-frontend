import React from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "JOHN SMITH",
      role: "CEO & FOUNDER",
      bg: "bg-gradient-to-br from-purple-800 to-pink-800",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "JANE DOE",
      role: "Chief Creative Officer",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "EMILY DAVIS\nRACHEL LEE",
      role: "Influencer Relations\nSpecialist",
      bg: "bg-gradient-to-br from-purple-400 to-blue-400",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "OLIVIA WHITE\nDAVID KIM\nSOPHIA PATEL",
      role: "Marketing Automation\nSpecialist",
      bg: "bg-gradient-to-br from-purple-400 to-indigo-400",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "LIAM MITCHELL",
      role: "Brand Strategist",
      bg: "bg-gradient-to-br from-pink-300 to-rose-300",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "BELLA TORRES",
      role: "Video Production Manager",
      bg: "bg-gradient-to-br from-purple-800 to-pink-800",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "MICHAEL BROWN",
      role: "Social Media Manager",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "LINDA MARTINEZ",
      role: "SEO Specialist",
      bg: "bg-gradient-to-br from-purple-400 to-blue-400",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${member.bg} rounded-3xl aspect-square relative overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-black text-sm leading-tight mb-2 whitespace-pre-line">
                  {member.name}
                </h3>
                <p className="text-xs opacity-90 whitespace-pre-line leading-tight">
                  {member.role}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
