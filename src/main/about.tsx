import Head from "next/head";
import Layout from "../components/layout/Layout";
import NewsletterSignup from "../components/sections/NewsletterSignup";
import Footer from "../components/sections/Footer";
import WorkProcess from "../components/sections/WorkProcessAbout";
import StatsSection from "../components/sections/StatsSection";
import NewsSlider from "../components/sections/NewsSlider";
import AboutBanner from "../components/sections/bannerAbout";

const AboutContainer = () => {
  return (
    <>
      <Head>
        <title>Wakeel - Best Way to Manage Your Employees Easily</title>
        <meta
          name="description"
          content="Save everyone time by harnessing your team's collective knowledge into easy-to-find information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AboutBanner />
        <WorkProcess />
        <StatsSection />
        <NewsSlider />
        <NewsletterSignup />
        <Footer />
      </Layout>
    </>
  );
};

export default AboutContainer;
