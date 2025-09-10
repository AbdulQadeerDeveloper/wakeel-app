import AboutBanner from "@/pages/About/bannerAbout";
import NewsSlider from "@/pages/About/NewsSlider";
import StatsSection from "@/pages/About/StatsSection";
import WorkProcess from "@/pages/About/WorkProcessAbout";

const AboutPage = () => {
  return (
    <div id="about">
      <AboutBanner />
      <WorkProcess />
      <StatsSection />
      <NewsSlider />
    </div>
  );
};

export default AboutPage;
