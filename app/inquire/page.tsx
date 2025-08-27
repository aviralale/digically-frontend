"use client";
import React, { FormEvent, useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Zap,
  Heart,
  Users,
  Star,
  Calendar,
  Award,
  Coffee,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  // Function to scroll to the contact form
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form-section");
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Email Us",
      primary: "india@digically.in",
      secondary: "india@digically.in",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Call Us",
      primary: "+91-9978488488",
      secondary: "+91-9998555766",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Visit Us",
      primary: "Ahemdabad",
      secondary: "Ahemdabad, India",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Office Hours",
      primary: "Mon - Fri: 9AM - 6PM",
      secondary: "Weekend: By Appointment",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
    },
  ];

  const services = [
    "Brand Design & Identity",
    "Social Media Marketing",
    "Web Development",
    "SEO & Digital Strategy",
    "Content Creation",
    "Email Marketing",
    "Mobile App Design",
    "Other",
  ];

  const budgetRanges = [
    "Under $5K",
    "$5K - $15K",
    "$15K - $50K",
    "$50K - $100K",
    "$100K+",
    "Let's Discuss",
  ];

  const features = [
    {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Quick Response",
      description: "We respond within 2 hours during business days",
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Dedicated Team",
      description: "A specialized team assigned to your project",
    },
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Proven Results",
      description: "98% client satisfaction rate and growing",
    },
    {
      icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      title: "Personal Touch",
      description: "We treat every project like our own business",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      message:
        "Absolutely amazing team! They transformed our brand completely.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Green Valley Co.",
      message: "Professional, creative, and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Bloom Agency",
      message: "The best investment we made for our digital presence.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white  relative overflow-hidden">
        {/* Background elements - Mobile Responsive */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-8 sm:top-40 sm:right-32 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-orange-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 sm:bottom-32 sm:left-1/3 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pink-400/20 rounded-full blur-md"></div>
          <div className="absolute top-1/2 right-4 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-400/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-10 right-1/4 sm:bottom-20 w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-green-400/15 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-6 sm:mb-8 tracking-tight px-2">
              LET&apos;S
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                TALK
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Ready to transform your digital presence? Let&apos;s start a
              conversation about your goals and create something extraordinary
              together.
            </p>

            <button
              onClick={scrollToForm}
              className="bg-white text-purple-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-bold flex items-center space-x-2 sm:space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl text-sm sm:text-base lg:text-lg group mx-auto hover:scale-105"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Stats - Mobile Responsive */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20">
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                2hrs
              </div>
              <div className="text-blue-200 font-medium text-xs sm:text-sm lg:text-base">
                Response Time
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-blue-200 font-medium text-xs sm:text-sm lg:text-base">
                Happy Clients
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-blue-200 font-medium text-xs sm:text-sm lg:text-base">
                Projects Delivered
              </div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-blue-200 font-medium text-xs sm:text-sm lg:text-base">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section
        id="contact-form-section"
        className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl transition-all">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
                  START YOUR
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    PROJECT
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within
                  2 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 sm:mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We&apos;ll get back to you within 2 hours during business
                    days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:shadow-xl transition-all hover:scale-105 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                  GET IN
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {" "}
                    TOUCH
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  Choose the best way to reach us. We&apos;re here to help bring
                  your vision to life.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4 sm:gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${info.bgColor} p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer`}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform text-white`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-gray-900 mb-1 sm:mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-semibold text-sm sm:text-base">
                          {info.primary}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {info.secondary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-4 sm:mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md sm:rounded-lg flex-shrink-0 text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              WHAT OUR
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                CLIENTS{" "}
              </span>
              SAY
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Don&apos;t just take our word for it. Here&apos;s what our amazing
              clients have to say about working with us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 sm:mb-4 italic text-sm sm:text-base">
                  &quot;{testimonial.message}&quot;
                </p>
                <div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              FREQUENTLY
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}
                ASKED{" "}
              </span>
              QUESTIONS
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4">
              Got questions? We&apos;ve got answers to help you get started.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Simple projects take 2-4 weeks, while comprehensive rebrands or complex web applications can take 8-16 weeks. We&apos;ll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We have flexible packages and solutions tailored to different budgets and needs.",
              },
              {
                question: "What&apos;s included in your ongoing support?",
                answer:
                  "Our ongoing support includes regular maintenance, updates, performance monitoring, and priority customer service. We also provide monthly reports and are available for consultations as needed.",
              },
              {
                question: "Can you help with existing websites/brands?",
                answer:
                  "Yes! We can work with your existing assets, whether you need a complete overhaul, minor updates, or ongoing optimization. We&apos;ll assess what you have and recommend the best path forward.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-base sm:text-lg font-black text-gray-900 mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 animate-pulse">
            <Coffee className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 px-2">
            READY TO
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              CREATE{" "}
            </span>
            SOMETHING
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              EXTRAORDINARY
            </span>
            ?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Whether you&apos;re starting from scratch or looking to elevate your
            existing brand, we&apos;re here to make it happen. Let&apos;s grab a
            coffee (virtual or real) and discuss your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-black text-lg flex items-center space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl hover:scale-105 group">
              <Calendar className="w-6 h-6" />
              <span>Schedule a Call</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full font-black text-lg flex items-center space-x-3 hover:bg-white hover:text-purple-600 transition-all hover:scale-105 group">
              <MessageCircle className="w-6 h-6" />
              <span>Chat with Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
