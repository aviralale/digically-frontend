import { Instagram, Share2, TrendingUp, Users } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="text-xs sm:text-sm font-bold text-pink-600 mb-4 sm:mb-6 tracking-wide uppercase">
              ABOUT Digically
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 lg:mb-10 leading-tight">
              WE DESIGN MEANINGFUL, NOT JUST QUICK IMPRESSIONS
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed">
              We believe in creating digital experiences that not only look
              stunning but also drive real business results. Our team combines
              creativity with strategic thinking to deliver solutions that make
              an impact.
            </p>
          </div>

          {/* Right Content - Service Cards */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {/* Social Strategy */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Share2 className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-black mb-3 sm:mb-4 text-lg sm:text-xl">
                  SOCIAL STRATEGY
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                  Comprehensive social media strategies that engage and convert.
                </p>
              </div>

              {/* Creator Management */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-black mb-3 sm:mb-4 text-lg sm:text-xl">
                  CREATOR MANAGEMENT
                </h3>
                <p className="text-purple-100 leading-relaxed text-sm sm:text-base">
                  Managing influencer partnerships for maximum impact.
                </p>
              </div>

              {/* Influencer Partnerships */}
              <div className="bg-gradient-to-br from-pink-600 to-red-600 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-black mb-3 sm:mb-4 text-lg sm:text-xl">
                  INFLUENCER PARTNERSHIPS
                </h3>
                <p className="text-pink-100 leading-relaxed text-sm sm:text-base">
                  Strategic collaborations with key industry influencers.
                </p>
              </div>

              {/* Social Publishing */}
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:scale-105 transition-transform">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-black mb-3 sm:mb-4 text-lg sm:text-xl">
                  SOCIAL PUBLISHING
                </h3>
                <p className="text-teal-100 leading-relaxed text-sm sm:text-base">
                  Content creation and publishing across all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
