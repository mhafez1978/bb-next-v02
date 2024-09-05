import { Metadata } from "next";
import MobileMenu from "./components/flowbite/drawer/MobileMenu";
import C2A from "./components/tailGrids/call-to-action/C2A";
import Hero from "./components/tailGrids/hero01/Hero";
import Marketing from "./components/tailGrids/marketing/Marketing";
import Portfolio from "./components/tailGrids/portfolio/Portfolio";
import Services from "./components/tailGrids/services/Services";
import WhyUs from "./components/tailGrids/why-us/WhyUs";

export const metadata: Metadata = {
  title: "Blooming Brands LLC | Homepage",
  description: "We are the best of the best,....",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Marketing />
      <Services />
      {/* <WhyUs /> */}
      <Portfolio />

      <C2A />
    </>
  );
};

export default HomePage;
