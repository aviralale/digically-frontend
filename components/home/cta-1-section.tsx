import { ArrowUpRight, Target } from "lucide-react";
import React from "react";

export default function CTASection1() {
  return (
    <section className="bg-gradient-to-r from-purple-800 via-blue-900 to-orange-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-700/50 to-blue-800/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-slate-600/30 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 left-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-12 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left side - Text content */}
            <div className="flex-1 text-left">
              {/* Purple icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 relative">
                <Target className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-0">
                <span className="text-white">READY TO </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BOOST
                </span>
                <span className="text-white"> YOUR</span>
                <br />
                <span className="text-white">BRAND'S </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  STRATEGIC
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  IMPACT
                </span>
                <span className="text-white"> AND </span>
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  ACHIEVE
                </span>
                <br />
                <span className="text-white">SIGNIFICANT </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  GROWTH
                </span>
                <span className="text-white">?</span>
              </h2>
            </div>

            {/* Right side - CTA Button */}
            <div className="flex-shrink-0">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-slate-900 w-24 h-24 md:w-28 md:h-28 rounded-3xl font-black text-xl flex items-center justify-center transition-all hover:scale-105 hover:rotate-6 shadow-2xl group">
                <ArrowUpRight className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
