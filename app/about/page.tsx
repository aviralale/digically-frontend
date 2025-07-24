"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Zap,
  Heart,
  Globe,
  TrendingUp,
  Award,
  Lightbulb,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO at TechFlow",
      content:
        "Digically transformed our digital presence completely. Their strategic approach exceeded all expectations.",
      avatar: "SC",
    },
    {
      name: "Marcus Johnson",
      role: "Founder at StartupX",
      content:
        "The team helped us achieve 300% growth in social engagement with innovative thinking.",
      avatar: "MJ",
    },
    {
      name: "Elena Rodriguez",
      role: "Brand Director at Luxe",
      content:
        "Working with Digically was a game-changer. They understand brands at a deep level.",
      avatar: "ER",
    },
  ];

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "INNOVATION",
      description:
        "We push boundaries to create breakthrough digital experiences.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "PASSION",
      description:
        "Every project receives our full dedication and creative energy.",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "PRECISION",
      description: "Data-driven strategies ensure measurable success.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "IMPACT",
      description: "We create solutions that make a lasting difference.",
      color: "from-green-500 to-cyan-500",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white min-h-screen relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-16 h-16 md:w-24 md:h-24 bg-orange-400/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/3 w-12 h-12 md:w-20 md:h-20 bg-pink-400/20 rounded-full blur-md"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl lg:rounded-3xl mb-6 lg:mb-8 transform rotate-12">
              <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black leading-none mb-6 lg:mb-8 tracking-tight">
              WE ARE
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                DIGICALLY
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              A creative digital agency that transforms brands through
              innovative strategies, stunning design, and data-driven results.
            </p>

            <button className="bg-white text-purple-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold flex items-center space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl text-base lg:text-lg group mx-auto">
              <span>Watch Our Story</span>
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="text-sm font-bold text-purple-600 mb-4 lg:mb-6 tracking-wide uppercase">
                Our Story
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 lg:mb-8 leading-tight">
                BORN FROM A
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}
                  VISION{" "}
                </span>
                TO REVOLUTIONIZE DIGITAL
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl mb-6 lg:mb-8 leading-relaxed">
                Founded in 2019 by creative rebels and strategic thinkers,
                Digically emerged from a simple belief: digital marketing
                shouldn't be boring.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-8 lg:mb-10 leading-relaxed">
                Today, we're a full-service digital agency combining artistic
                vision with analytical precision, helping brands create
                authentic connections.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-6 sm:space-x-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-purple-600">
                    2019
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Founded
                  </div>
                </div>
                <div className="w-px h-10 sm:h-12 bg-gray-300"></div>

                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-purple-600">
                    Global
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Presence
                  </div>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              {/* 3D Visual Element */}
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="w-full max-w-80 lg:w-96 h-48 lg:h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl transform rotate-3 lg:rotate-6 shadow-2xl relative overflow-hidden mx-auto">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 lg:top-6 left-4 lg:left-6 w-8 lg:w-12 h-8 lg:h-12 bg-white/30 rounded-xl lg:rounded-2xl"></div>
                  <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 w-12 lg:w-16 h-12 lg:h-16 bg-orange-400 rounded-xl lg:rounded-2xl"></div>
                </div>
                <div className="absolute -top-6 lg:-top-8 -right-6 lg:-right-8 w-full max-w-80 lg:w-96 h-48 lg:h-64 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl lg:rounded-3xl shadow-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              WHAT OUR
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                CLIENTS{" "}
              </span>
              SAY
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
                  <span className="text-xl lg:text-2xl font-black text-white">
                    {testimonials[activeTestimonial].avatar}
                  </span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 mb-6 lg:mb-8 leading-relaxed">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>
                <div className="text-lg sm:text-xl font-bold text-purple-600 mb-2">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-6 lg:mt-8 space-x-4">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === activeTestimonial
                        ? "bg-purple-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-purple-900 to-black text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl lg:rounded-3xl mb-6 lg:mb-8">
            <Target className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8">
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

          <p className="text-lg sm:text-xl text-gray-300 mb-10 lg:mb-12 max-w-3xl mx-auto">
            Let's collaborate to transform your brand's digital presence and
            create experiences that your audience will never forget.
          </p>

          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-black text-base sm:text-lg flex items-center space-x-3 hover:shadow-2xl transition-all hover:scale-105 mx-auto group">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
