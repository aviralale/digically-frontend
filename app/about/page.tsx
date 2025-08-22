import React from "react";
import { ArrowRight, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white  relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-8 sm:top-40 sm:right-32 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-orange-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 sm:bottom-32 sm:left-1/3 w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-pink-400/20 rounded-full blur-md"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl sm:rounded-2xl lg:rounded-3xl mb-4 sm:mb-6 lg:mb-8 transform rotate-12">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-4 sm:mb-6 lg:mb-8 tracking-tight px-2">
              WE ARE
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                DIGICALLY
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              A Creative Digital Agency that transforms brands through
              innovative strategies, stunning design, and data-driven results.
            </p>

            <button className="bg-white text-purple-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold flex items-center space-x-2 sm:space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl text-sm sm:text-base lg:text-lg group mx-auto">
              <span>Watch Our Story</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-xs sm:text-sm font-bold text-purple-600 mb-3 sm:mb-4 lg:mb-6 tracking-wide uppercase">
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                BORN FROM A
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  VISION{" "}
                </span>
                TO REVOLUTIONIZE DIGITAL
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                Founded in 2019 by creative rebels and strategic thinkers,
                Digically emerged from a simple belief: digital marketing
                shouldn&apos;t be boring.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
                Today, we&apos;re a full-service digital agency combining
                artistic vision with analytical precision, helping brands create
                authentic connections.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 lg:space-x-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-600">
                    2019
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Founded
                  </div>
                </div>
                <div className="w-px h-8 sm:h-10 lg:h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-600">
                    Global
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Presence
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element - Responsive Sizing */}
            <div className="relative order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
                {/* Main Card */}
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl lg:rounded-3xl transform rotate-3 lg:rotate-6 shadow-2xl relative overflow-hidden mx-auto">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 lg:top-6 lg:left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white/30 rounded-lg sm:rounded-xl lg:rounded-2xl"></div>
                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16 bg-orange-400 rounded-lg sm:rounded-xl lg:rounded-2xl"></div>
                </div>
                {/* Background Card */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-8 lg:-right-8 w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-900 to-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl sm:rounded-2xl lg:rounded-3xl mb-4 sm:mb-6 lg:mb-8">
            <Target className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
            READY TO
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              CREATE{" "}
            </span>
            SOMETHING
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              EXTRAORDINARY
            </span>
            ?
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Let&apos;s collaborate to transform your brand&apos;s digital
            presence and create experiences that your audience will never
            forget.
          </p>

          <Link
            href="/inquire"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-black text-sm sm:text-base lg:text-lg flex items-center space-x-2 sm:space-x-3 hover:shadow-2xl transition-all hover:scale-105 mx-auto group w-auto max-w-xs sm:max-w-sm md:max-w-md justify-center"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
