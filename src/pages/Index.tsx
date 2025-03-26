
import { Navbar } from "@/components/Layout/Navbar";
import { Hero } from "@/components/LandingPage/Hero";
import { Features } from "@/components/LandingPage/Features";
import { HowItWorks } from "@/components/LandingPage/HowItWorks";
import { Testimonials } from "@/components/LandingPage/Testimonials";
import { CallToAction } from "@/components/LandingPage/CallToAction";
import { Footer } from "@/components/LandingPage/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
