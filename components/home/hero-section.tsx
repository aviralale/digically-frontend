import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 text-white relative overflow-hidden">
      {/* Navigation */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center  lg:min-h-[calc(100vh-10rem)]">
          {/* Left Content */}
          <div className="relative order-2 lg:order-1">
            {/* 3D Book Icon - Responsive sizing */}
            <div className="absolute -top-4 sm:-top-6 lg:-top-8 -left-2 sm:-left-3 lg:-left-4 w-12 h-10 sm:w-16 sm:h-12 lg:w-20 lg:h-16 transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-md lg:rounded-lg shadow-xl relative">
                <div className="absolute inset-1 sm:inset-2 bg-white rounded-sm lg:rounded-md"></div>
                <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 lg:top-3 lg:left-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-none mb-4 sm:mb-6 lg:mb-8 tracking-tight">
              WE CRAFT
              <br />
              THE{" "}
              <span className="inline-flex items-center">
                <span className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-orange-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center mx-2 sm:mx-3 lg:mx-4 transform rotate-12">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    ✦
                  </span>
                </span>
              </span>
              DIGITAL
              <br />
              EXPERIENCE
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-purple-100 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Digically exists to revolutionize the way brands connect and
              engage with their audiences in the digital era by leveraging
              innovative strategies and cutting-edge technology. We strive to
              redefine digital experiences by crafting tailored solutions that
              not only capture attention.
            </p>

            <Link
              href="/inquire"
              className="bg-white text-purple-600 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full font-bold flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 hover:bg-purple-50 transition-all hover:shadow-xl text-sm sm:text-base group w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content - 3D Elements */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 h-64 sm:h-80 lg:h-96">
            {/* Main 3D Block - Responsive sizing */}
            <div className="relative">
              <div className="w-48 h-28 sm:w-64 sm:h-36 lg:w-80 lg:h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl lg:rounded-2xl transform rotate-3 shadow-2xl relative overflow-hidden">
                {/* Dotted pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12 gap-0.5 sm:gap-1 p-2 sm:p-3 lg:p-4 h-full">
                    {Array.from({ length: 80 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-black rounded-full opacity-60"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Top surface */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-48 h-28 sm:w-64 sm:h-36 lg:w-80 lg:h-48 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl lg:rounded-2xl shadow-xl"></div>
              </div>
            </div>

            {/* Floating elements - Responsive positioning and sizing */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-400 rounded-lg sm:rounded-xl lg:rounded-2xl transform rotate-45 shadow-lg animate-pulse"></div>
            <div className="absolute bottom-8 left-2 sm:bottom-12 sm:left-4 lg:bottom-16 lg:left-8 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg opacity-90"></div>

            {/* Stats boxes - Responsive layout */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 lg:-bottom-8 lg:-right-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4">
              <div className="bg-yellow-400 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl">
                <div className="text-lg sm:text-xl lg:text-2xl font-black">
                  120M
                </div>
                <div className="text-xs font-medium opacity-80">
                  Social Media
                </div>
                <div className="text-xs font-medium opacity-80 hidden sm:block">
                  Engagement
                </div>
              </div>
              <div className="bg-orange-400 text-black px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl">
                <div className="text-lg sm:text-xl lg:text-2xl font-black">
                  320+
                </div>
                <div className="text-xs font-medium opacity-80">
                  Global Network
                </div>
                <div className="text-xs font-medium opacity-80 hidden sm:block">
                  Of Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - Responsive positioning */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full opacity-50"></div>
    </section>
  );
};

export default HeroSection;
