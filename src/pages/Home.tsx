import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards";
import AboutSection from "../components/AboutSection";
import ClientCarousel from "../components/ClientCarousel";
import ServicesOverview from "../components/ServicesOverview";
import ExamsTabs from "../components/ExamsTabs";
import ServicesGrid from "../components/ServicesGrid";
import StatsCounter from "../components/StatsCounter";
import ArticlesSection from "../components/ArticlesSection";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";
import { scrollToId } from "../utils/scroll";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target =
      (location.state as { scrollTo?: string } | null)?.scrollTo ??
      location.hash.slice(1);
    if (target) {
      setTimeout(() => scrollToId(target), 150);
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <ClientCarousel />
      <ServicesOverview />
      <ExamsTabs />
      <ServicesGrid />
      <StatsCounter />
      <ArticlesSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}