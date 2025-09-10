import AboutHeroSection from "./bannerAbout";
import WorkProcess from "./WorkProcessAbout";
import StatsSection from "./StatsSection";
import NewsSlider from "./NewsSlider";
const AboutPage = () => {
  return (
    <div id="about">
      <AboutHeroSection />
      <WorkProcess />
      <StatsSection />
      <NewsSlider />
    </div>
  );
};

export default AboutPage;
