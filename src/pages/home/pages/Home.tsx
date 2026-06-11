import CTASection from "../sections/CTASection";
import FAQSection from "../sections/FAQSection";
import FeaturesSection from "../sections/FeaturesSection";
import HeroSection from "../sections/HeroSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import StatisticsSection from "../sections/StatisticsSection";
import TrustedSection from "../sections/TrustedSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <HowItWorksSection />
      <FeaturesSection />
      <StatisticsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;
