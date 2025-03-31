
import OfferLetterForm from "@/components/OfferLetterForm/OfferLetterForm";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/LandingPage/Footer";
import HowGeneratorWorks from "@/components/Generator/HowGeneratorWorks";
import WelcomeLetterContent from "@/components/Generator/WelcomeLetterContent";
import WhatIsWelcomeLetter from "@/components/Generator/WhatIsWelcomeLetter";
import WhyImportant from "@/components/Generator/WhyImportant";
import TopPositions from "@/components/Generator/TopPositions";
import GeneratorCTA from "@/components/Generator/GeneratorCTA";

const Generator = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <OfferLetterForm />
        <HowGeneratorWorks />
        <WelcomeLetterContent />
        <WhatIsWelcomeLetter />
        <WhyImportant />
        <TopPositions />
        <GeneratorCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Generator;
