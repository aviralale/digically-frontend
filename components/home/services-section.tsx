import { ArrowRight } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br to-purple-600 via-red-500 from-orange-500 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-orange-200 text-lg font-medium italic mb-4">
            *LET US SHOW YOU!
          </p>
          <div className="flex justify-between items-start">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight max-w-2xl">
              HOW WE DRIVE YOUR
              <br />
              BRAND TO NEW HEIGHT
            </h2>
            <p className="text-purple-100 text-lg leading-relaxed max-w-sm">
              We transform innovative ideas into captivating and memorable
              digital experiences that engage and inspire
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="space-y-6">
          {/* Discovery & Strategy - Full width card */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-between group hover:bg-purple-200/30 transition-all">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center transform rotate-45">
                <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-2">
                  DISCOVERY & STRATEGY
                </h3>
                <p className="text-purple-100 text-lg max-w-lg">
                  We assess your business goals, challenges, and opportunities
                  to understand your unique needs and develop a tailored
                  marketing strategy.
                </p>
              </div>
            </div>
            <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group-hover:scale-110 transform">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>

          {/* Strategic Action - Narrow card */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-between group hover:bg-purple-200/30 transition-all">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center transform rotate-45">
                <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-2">STRATEGIC ACTION</h3>
                <p className="text-purple-100 text-lg max-w-lg">
                  Our team implements the strategy with meticulous precision,
                  leveraging best practices and innovative techniques to ensure
                  optimal results.
                </p>
              </div>
            </div>
            <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group-hover:scale-110 transform">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>

          {/* Performance Boost - Full width card */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-between group hover:bg-purple-200/30 transition-all">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center transform rotate-45">
                <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-2">PERFORMANCE BOOST</h3>
                <p className="text-purple-100 text-lg max-w-lg">
                  We assess your business goals, challenges, and opportunities
                  to understand your unique needs and develop a tailored
                  marketing strategy.
                </p>
              </div>
            </div>
            <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group-hover:scale-110 transform">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>

          {/* Insight Analysis - Full width card */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-between group hover:bg-purple-200/30 transition-all">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center transform rotate-45">
                <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div>
                <h3 className="text-3xl font-black mb-2">INSIGHT ANALYSIS</h3>
                <p className="text-purple-100 text-lg max-w-lg">
                  Receive comprehensive, detailed reports and insights that
                  allow you to track progress and measure success effectively,
                  our analytics provide a clear overview.
                </p>
              </div>
            </div>
            <button className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group-hover:scale-110 transform">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
