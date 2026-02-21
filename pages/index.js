import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";
import CraftJourney from "../components/CraftJourney";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vibe-Yatra | Premium Private Driver Tours in India</title>
        <meta name="description" content="Explore India with Vibe-Yatra's premium private driver tours. Rajasthan, Golden Triangle, Leh Ladakh, Himachal Pradesh - personalized journeys." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Destinations />
      <WhyUs />
      <Testimonials />
      <CraftJourney />
      <Footer />
    </>
  );
}
