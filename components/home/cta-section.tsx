import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-10 lg:mb-12 leading-tight">
          BE <span className="text-yellow-400">●</span> BOLD
          <br />
          BE BRILLIANT
          <br />
          WITH Digically
        </h2>

        <Link
          href="/inquire"
          className="bg-white text-blue-800 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-black text-base sm:text-lg lg:text-xl flex items-center justify-center space-x-3 sm:space-x-4 mx-auto hover:bg-gray-100 transition-all hover:scale-105 w-full max-w-xs sm:max-w-sm lg:max-w-md xl:w-1/4 xl:max-w-none"
        >
          <span>Start Today</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>
    </section>
  );
}
