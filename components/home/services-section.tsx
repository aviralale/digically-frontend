import { ArrowRight } from "lucide-react";
import React from "react";

export default function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-br to-purple-600 via-red-500 from-orange-500 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <p className="text-orange-200 text-sm sm:text-base lg:text-lg font-medium italic mb-3 sm:mb-4">
            *LET US SHOW YOU!
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight max-w-2xl">
              HOW WE DRIVE YOUR
              <br />
              BRAND TO NEW HEIGHT
            </h2>
            <p className="text-purple-100 text-base sm:text-lg leading-relaxed max-w-sm lg:text-right">
              We transform innovative ideas into captivating and memorable
              digital experiences that engage and inspire
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="space-y-4 sm:space-y-6">
          {/* Discovery & Strategy */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:bg-purple-200/30 transition-all gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform rotate-45 flex-shrink-0">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">
                  DISCOVERY & STRATEGY
                </h3>
                <p className="text-purple-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                  We assess your business goals, challenges, and opportunities
                  to understand your unique needs and develop a tailored
                  marketing strategy.
                </p>
              </div>
            </div>
            <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group-hover:scale-110 transform flex-shrink-0 self-end sm:self-center">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Strategic Action */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:bg-purple-200/30 transition-all gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform rotate-45 flex-shrink-0">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">
                  STRATEGIC ACTION
                </h3>
                <p className="text-purple-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                  Our team implements the strategy with meticulous precision,
                  leveraging best practices and innovative techniques to ensure
                  optimal results.
                </p>
              </div>
            </div>
            <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group-hover:scale-110 transform flex-shrink-0 self-end sm:self-center">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Performance Boost */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:bg-purple-200/30 transition-all gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform rotate-45 flex-shrink-0">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">
                  PERFORMANCE BOOST
                </h3>
                <p className="text-purple-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                  We assess your business goals, challenges, and opportunities
                  to understand your unique needs and develop a tailored
                  marketing strategy.
                </p>
              </div>
            </div>
            <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group-hover:scale-110 transform flex-shrink-0 self-end sm:self-center">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Insight Analysis */}
          <div className="bg-purple-200/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between group hover:bg-purple-200/30 transition-all gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center transform rotate-45 flex-shrink-0">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 leading-tight">
                  INSIGHT ANALYSIS
                </h3>
                <p className="text-purple-100 text-sm sm:text-base lg:text-lg max-w-lg leading-relaxed">
                  Receive comprehensive, detailed reports and insights that
                  allow you to track progress and measure success effectively,
                  our analytics provide a clear overview.
                </p>
              </div>
            </div>
            <button className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors group-hover:scale-110 transform flex-shrink-0 self-end sm:self-center">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
