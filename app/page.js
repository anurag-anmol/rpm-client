import Achievements from "./_components/Achievements";
import Brand from "./_components/Brand";
import CustomerReview from "./_components/CustomerReview";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import NextGen from "./_components/NextGen";
import Owner from "./_components/Owner";
import Service from "./_components/Service";
import Work from "./_components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <Service />
      <NextGen />
      <Owner />
      <Work />
      <Achievements />
      <CustomerReview />
      <Footer />
    </>
  );
}
