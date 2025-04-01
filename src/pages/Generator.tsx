
import { useState } from "react";
import OfferLetterForm from "@/components/OfferLetterForm/OfferLetterForm";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/LandingPage/Footer";
import HowItWorks from "@/components/Generator/HowItWorks";
import WelcomeLetterElements from "@/components/Generator/WelcomeLetterElements";
import WhatIsWelcomeLetter from "@/components/Generator/WhatIsWelcomeLetter";
import WhyItMatters from "@/components/Generator/WhyItMatters";
import PopularPositions from "@/components/Generator/PopularPositions";
import OtherHRLetters from "@/components/Generator/OtherHRLetters";
import GeneratorCTA from "@/components/Generator/GeneratorCTA";
import ScrollToTop from "@/components/UI/ScrollToTop";

const Generator = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <div className="flex-grow pt-16">
        <OfferLetterForm />
        <HowItWorks />
        <WelcomeLetterElements />
        <WhatIsWelcomeLetter />
        <WhyItMatters />
        <PopularPositions />
        <OtherHRLetters />
        <GeneratorCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Generator;
