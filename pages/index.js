import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import PopularTours from "../components/PopularTours";
import CraftJourney from "../components/CraftJourney";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <PopularTours />
      <CraftJourney />
      <Footer />
    </>
  );
}
