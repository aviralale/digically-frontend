import React from "react";
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  BarChart3,
  Eye,
  Search,
  Share2,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import AboutSection from "@/components/home/about-section";
import CTASection from "@/components/home/cta-section";
import TeamSection from "@/components/home/team-section";
import CTASection1 from "@/components/home/cta-1-section";

const DigicallyHomepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <TeamSection />
      <CTASection1 />
    </div>
  );
};

export default DigicallyHomepage;
