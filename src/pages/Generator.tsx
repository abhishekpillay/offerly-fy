
import OfferLetterForm from "@/components/OfferLetterForm/OfferLetterForm";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/LandingPage/Footer";

const Generator = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-24">
        <OfferLetterForm />
      </div>
      <Footer />
    </div>
  );
};

export default Generator;
