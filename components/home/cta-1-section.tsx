import { ArrowUpRight, Target } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CTASection1() {
  return (
    <section className="bg-gradient-to-r from-purple-800 via-blue-900 to-orange-900 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-700/50 to-blue-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-slate-600/30 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-2 left-4 sm:top-4 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-2 right-6 sm:bottom-4 sm:right-12 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-orange-400/20 rounded-full blur-xl"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Purple icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 relative">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-0">
                <span className="text-white">READY TO </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  BOOST
                </span>
                <span className="text-white"> YOUR</span>
                <br />
                <span className="text-white">BRAND&apos;S </span>
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
            <div className="flex-shrink-0 mt-4 lg:mt-0">
              <Link
                href="/inquire"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-slate-900 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl sm:rounded-3xl font-black text-xl flex items-center justify-center transition-all hover:scale-105 hover:rotate-6 shadow-2xl group"
              >
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
