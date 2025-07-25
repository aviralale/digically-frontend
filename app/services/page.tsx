import {
  ArrowRight,
  Users,
  Target,
  Zap,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Palette,
  Code,
  Search,
  BarChart3,
  Camera,
  Mail,
  Smartphone,
  Megaphone,
  Play,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Design & Identity",
      subtitle: "Visual Storytelling That Captivates",
      description:
        "We craft distinctive brand identities that resonate with your audience and stand out in crowded markets.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity Systems",
        "Brand Strategy",
      ],
      color: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media Marketing",
      subtitle: "Amplify Your Voice Across Platforms",
      description:
        "Strategic social media campaigns that build communities, drive engagement, and convert followers into customers.",
      features: [
        "Content Strategy",
        "Community Management",
        "Paid Social Campaigns",
        "Influencer Partnerships",
      ],
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      subtitle: "Digital Experiences That Convert",
      description:
        "Custom websites and web applications built for performance, user experience, and business growth.",
      features: [
        "Custom Web Development",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
      ],
      color: "from-green-500 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Digital Strategy",
      subtitle: "Dominate Search Results",
      description:
        "Data-driven SEO strategies that increase visibility, drive organic traffic, and boost conversions.",
      features: [
        "Technical SEO",
        "Content Optimization",
        "Local SEO",
        "Analytics & Reporting",
      ],
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50",
    },
  ];

  const additionalServices = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Content Creation",
      description: "Photography, videography, and graphic design",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      description: "Automated campaigns that nurture and convert",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Data analysis to optimize performance",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Design",
      description: "User-centered mobile experiences",
      color: "from-orange-400 to-red-400",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "PR & Communications",
      description: "Strategic messaging and media relations",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Video Production",
      description: "Compelling visual narratives that engage",
      color: "from-indigo-400 to-purple-400",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "DISCOVER",
      description:
        "We dive deep into your brand, audience, and goals to understand what makes you unique.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "STRATEGIZE",
      description:
        "We develop a comprehensive strategy tailored to your objectives and market landscape.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "CREATE",
      description:
        "Our creative team brings ideas to life with stunning visuals and compelling content.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "OPTIMIZE",
      description:
        "We continuously monitor, analyze, and refine to ensure maximum impact and ROI.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const stats = [
    { number: "98%", label: "Client Retention Rate" },
    { number: "3.5x", label: "Average ROI Increase" },
    { number: "2M+", label: "Social Impressions Monthly" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white min-h-screen relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-orange-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400/20 rounded-full blur-md"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-400/20 rounded-full blur-sm"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-8 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <Zap className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-none mb-8 tracking-tight">
              OUR
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              From brand identity to digital marketing, we offer comprehensive
              solutions that transform businesses and create lasting impact.
            </p>

            <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold flex items-center space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl text-lg group mx-auto hover:scale-105">
              <span>Explore Our Work</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              CORE
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and
              drive measurable results.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`${service.bgPattern} p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:shadow-xl transition-all group-hover:scale-105`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              ADDITIONAL
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                SERVICES
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized services to complement your digital strategy and
              maximize your impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 group-hover:border-transparent">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              OUR
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                PROCESS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures every project delivers
              exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs font-black">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-8 animate-pulse">
            <Users className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            LET&apos;S
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              BUILD
            </span>
            SOMETHING
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              AMAZING
            </span>
            TOGETHER
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let&apos;s discuss your
            project and create a strategy that drives real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/inquire"
              className="bg-white w-1/3 text-purple-600 px-10 py-5 rounded-full font-black text-lg flex items-center space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl hover:scale-105 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
