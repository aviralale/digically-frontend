import React from "react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "JOHN SMITH",
      role: "CEO & FOUNDER",
      bg: "bg-gradient-to-br from-purple-800 to-pink-800",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "JANE DOE",
      role: "Chief Creative Officer",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "EMILY DAVIS\nRACHEL LEE",
      role: "Influencer Relations\nSpecialist",
      bg: "bg-gradient-to-br from-purple-400 to-blue-400",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "OLIVIA WHITE\nDAVID KIM\nSOPHIA PATEL",
      role: "Marketing Automation\nSpecialist",
      bg: "bg-gradient-to-br from-purple-400 to-indigo-400",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "LIAM MITCHELL",
      role: "Brand Strategist",
      bg: "bg-gradient-to-br from-pink-300 to-rose-300",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "BELLA TORRES",
      role: "Video Production Manager",
      bg: "bg-gradient-to-br from-purple-800 to-pink-800",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "MICHAEL BROWN",
      role: "Social Media Manager",
      bg: "bg-gradient-to-br from-red-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "LINDA MARTINEZ",
      role: "SEO Specialist",
      bg: "bg-gradient-to-br from-purple-400 to-blue-400",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Optional section header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            The creative minds behind our success
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`${member.bg} rounded-2xl sm:rounded-3xl aspect-square relative overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer group shadow-lg hover:shadow-2xl`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${member.image})`,
                }}
              />

              {/* Dynamic overlay that responds to content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90" />

              {/* Content container with better spacing */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                {/* Name with responsive typography */}
                <h3 className="font-black text-xs sm:text-sm lg:text-base xl:text-lg leading-tight mb-1 sm:mb-2 whitespace-pre-line tracking-wide drop-shadow-lg">
                  {member.name}
                </h3>

                {/* Role with responsive typography */}
                <p className="text-xs sm:text-xs lg:text-sm xl:text-base opacity-90 whitespace-pre-line leading-tight font-medium drop-shadow-md">
                  {member.role}
                </p>
              </div>

              {/* Enhanced hover effect with subtle animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Subtle shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
