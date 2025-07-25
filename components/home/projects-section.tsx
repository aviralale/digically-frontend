import React from "react";

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm font-bold text-pink-600 mb-6 tracking-wide uppercase">
            OUR WORK
          </div>
          <h2 className="text-6xl font-black text-gray-900 mb-10 leading-tight">
            EXPLORE OUR MOST
            <br />
            SUCCESSFUL PROJECTS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-[2rem] p-12 text-white relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6">IPHONE 15</h3>
              <p className="text-orange-100 mb-8 text-xl leading-relaxed">
                Complete digital campaign for Apple&apos;s latest flagship
                device.
              </p>
              <button className="bg-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors">
                View Case Study
              </button>
            </div>
            <div className="absolute top-8 right-8 w-40 h-40 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-2xl transform rotate-12"></div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-[2rem] p-12 text-white relative overflow-hidden group hover:scale-105 transition-transform">
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6">
                VICTORIA&apos;S SECRET
              </h3>
              <p className="text-pink-100 mb-8 text-xl leading-relaxed">
                Brand revitalization and social media strategy overhaul.
              </p>
              <button className="bg-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors">
                View Case Study
              </button>
            </div>
            <div className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-2xl transform rotate-12"></div>
            <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
