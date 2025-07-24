"use client";
import React, { useState } from "react";
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
  Globe,
  Users,
  Star,
  Calendar,
  Headphones,
  Award,
  Target,
  Coffee,
  Lightbulb,
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

  interface FormData {
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    message: string;
  }

  interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: HandleSubmitEvent) => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "hello@agency.com",
      secondary: "support@agency.com",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      primary: "123 Creative Street",
      secondary: "San Francisco, CA 94102",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: <Clock className="w-6 h-6" />,
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
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Response",
      description: "We respond within 2 hours during business days",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Team",
      description: "A specialized team assigned to your project",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "98% client satisfaction rate and growing",
    },
    {
      icon: <Heart className="w-6 h-6" />,
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
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white min-h-screen relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-orange-400/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400/20 rounded-full blur-md"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-400/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-green-400/15 rounded-full blur-lg"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-8 transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black leading-none mb-8 tracking-tight">
              LET'S
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                TALK
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's start a
              conversation about your goals and create something extraordinary
              together.
            </p>

            <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold flex items-center space-x-3 hover:bg-purple-50 transition-all hover:shadow-2xl text-lg group mx-auto hover:scale-105">
              <span>Start Your Project</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="text-center group">
              <div className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform">
                2hrs
              </div>
              <div className="text-blue-200 font-medium">Response Time</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform">
                98%
              </div>
              <div className="text-blue-200 font-medium">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-blue-200 font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-black mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-blue-200 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all">
              <div className="mb-8">
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                  START YOUR
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}
                    PROJECT
                  </span>
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 2
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 2 hours during business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:shadow-xl transition-all hover:scale-105 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                  GET IN
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {" "}
                    TOUCH
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Choose the best way to reach us. We're here to help bring your
                  vision to life.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${info.bgColor} p-6 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl group-hover:scale-110 transition-transform`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-semibold">
                          {info.primary}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.secondary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-black text-gray-900 mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              WHAT OUR
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                CLIENTS{" "}
              </span>
              SAY
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our amazing clients
              have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.message}"
                </p>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              FREQUENTLY
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}
                ASKED{" "}
              </span>
              QUESTIONS
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers to help you get started.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Simple projects take 2-4 weeks, while comprehensive rebrands or complex web applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. We have flexible packages and solutions tailored to different budgets and needs.",
              },
              {
                question: "What's included in your ongoing support?",
                answer:
                  "Our ongoing support includes regular maintenance, updates, performance monitoring, and priority customer service. We also provide monthly reports and are available for consultations as needed.",
              },
              {
                question: "Can you help with existing websites/brands?",
                answer:
                  "Yes! We can work with your existing assets, whether you need a complete overhaul, minor updates, or ongoing optimization. We'll assess what you have and recommend the best path forward.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl mb-8 animate-pulse">
            <Coffee className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl lg:text-6xl font-black mb-8">
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

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're starting from scratch or looking to elevate your
            existing brand, we're here to make it happen. Let's grab a coffee
            (virtual or real) and discuss your vision.
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
