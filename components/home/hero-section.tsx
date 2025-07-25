import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 text-white min-h-screen relative overflow-hidden">
      {/* Navigation */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* 3D Book Icon */}
            <div className="absolute -top-8 -left-4 w-20 h-16 transform -rotate-12">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-xl relative">
                <div className="absolute inset-2 bg-white rounded-md"></div>
                <div className="absolute top-3 left-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8 tracking-tight">
              WE CRAFT
              <br />
              THE{" "}
              <span className="inline-flex items-center">
                <span className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-4 transform rotate-12">
                  <span className="text-3xl">✦</span>
                </span>
              </span>
              DIGITAL
              <br />
              EXPERIENCE
            </h1>

            <p className="text-lg text-purple-100 mb-8 max-w-lg leading-relaxed">
              Digically exists to revolutionize the way brands connect and
              engage with their audiences in the digital era by leveraging
              innovative strategies and cutting-edge technology. We strive to
              redefine digital experiences by crafting tailored solutions that
              not only capture attention.
            </p>

            <Link
              href="/inquire"
              className="bg-white w-1/3 text-purple-600 px-8 py-4 rounded-full font-bold flex items-center space-x-3 hover:bg-purple-50 transition-all hover:shadow-xl text-base group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content - 3D Elements */}
          <div className="relative flex justify-center items-center">
            {/* Main 3D Block */}
            <div className="relative">
              <div className="w-80 h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl transform rotate-3 shadow-2xl relative overflow-hidden">
                {/* Dotted pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="grid grid-cols-12 gap-1 p-4 h-full">
                    {Array.from({ length: 120 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-black rounded-full opacity-60"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Top surface */}
                <div className="absolute -top-4 -right-4 w-80 h-48 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-2xl shadow-xl"></div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-12 right-12 w-16 h-16 bg-yellow-400 rounded-2xl transform rotate-45 shadow-lg animate-pulse"></div>
            <div className="absolute bottom-16 left-8 w-12 h-12 bg-white rounded-full shadow-lg opacity-90"></div>

            {/* Stats boxes */}
            <div className="absolute -bottom-8 -right-8 flex space-x-4">
              <div className="bg-yellow-400 text-black px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-black">120M</div>
                <div className="text-xs font-medium opacity-80">
                  Social Media Audience
                </div>
                <div className="text-xs font-medium opacity-80">Engagement</div>
              </div>
              <div className="bg-orange-400 text-black px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-black">320+</div>
                <div className="text-xs font-medium opacity-80">
                  Global Network
                </div>
                <div className="text-xs font-medium opacity-80">Of Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
    </section>
  );
};

export default HeroSection;
