import { Instagram, Share2, TrendingUp, Users } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm font-bold text-pink-600 mb-6 tracking-wide uppercase">
              ABOUT Digically
            </div>
            <h2 className="text-6xl font-black text-gray-900 mb-10 leading-tight">
              WE DESIGN MEANINGFUL, NOT JUST QUICK IMPRESSIONS
            </h2>
            <p className="text-gray-600 text-xl mb-10 leading-relaxed">
              We believe in creating digital experiences that not only look
              stunning but also drive real business results. Our team combines
              creativity with strategic thinking to deliver solutions that make
              an impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-3xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="font-black mb-4 text-xl">SOCIAL STRATEGY</h3>
              <p className="text-blue-100 leading-relaxed">
                Comprehensive social media strategies that engage and convert.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-3xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="font-black mb-4 text-xl">CREATOR MANAGEMENT</h3>
              <p className="text-purple-100 leading-relaxed">
                Managing influencer partnerships for maximum impact.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-600 to-red-600 text-white p-8 rounded-3xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-black mb-4 text-xl">
                INFLUENCER PARTNERSHIPS
              </h3>
              <p className="text-pink-100 leading-relaxed">
                Strategic collaborations with key industry influencers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-blue-600 text-white p-8 rounded-3xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="font-black mb-4 text-xl">SOCIAL PUBLISHING</h3>
              <p className="text-teal-100 leading-relaxed">
                Content creation and publishing across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
