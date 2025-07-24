import { Star } from "lucide-react";
import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-sm font-bold text-pink-600 mb-6 tracking-wide uppercase">
            TESTIMONIALS
          </div>
          <h2 className="text-6xl font-black text-gray-900 mb-10 leading-tight">
            HERE'S WHAT PEOPLE
            <br />
            SAY ABOUT OUR WORK
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-10 rounded-3xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-red-100 mb-8 text-lg leading-relaxed">
              "Digically transformed our digital presence completely. The
              results exceeded our expectations and our engagement rates have
              never been higher."
            </p>
            <div className="font-black text-lg">
              - Sarah Johnson, CEO TechStart
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-10 rounded-3xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-orange-100 mb-8 text-lg leading-relaxed">
              "Professional, creative, and results-driven. They understood our
              vision and brought it to life in ways we never imagined possible."
            </p>
            <div className="font-black text-lg">
              - Marcus Chen, Creative Director
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-10 rounded-3xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              "The team at Digically is exceptional. Their strategic approach
              and creative execution helped us achieve a 300% increase in
              conversions."
            </p>
            <div className="font-black text-lg">
              - Emma Rodriguez, Marketing Manager
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
