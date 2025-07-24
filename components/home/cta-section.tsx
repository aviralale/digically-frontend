import { ArrowRight } from "lucide-react";
import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-7xl font-black mb-12 leading-tight">
          BE <span className="text-yellow-400">●</span> BOLD
          <br />
          BE BRILLIANT
          <br />
          WITH Digically
        </h2>
        <button className="bg-white text-blue-800 px-12 py-6 rounded-full font-black text-xl flex items-center space-x-4 mx-auto hover:bg-gray-100 transition-all hover:scale-105">
          <span>Start Today</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
