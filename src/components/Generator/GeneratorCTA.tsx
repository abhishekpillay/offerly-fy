
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GeneratorCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-[#F6F9F8]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="bg-[#1B4D3E] rounded-xl p-8 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Create Professional Welcome Letters with Winslow?
          </h2>
          <p className="text-white/80 mb-8 max-w-3xl mx-auto text-lg">
            Our tool makes it easy to create personalized, professional welcome letters for your new employees in minutes. Join thousands of HR professionals who trust Winslow for their onboarding needs.
          </p>
          <Button 
            onClick={scrollToTop} 
            className="bg-[#F06449] hover:bg-[#F06449]/90 text-white px-8 py-6 h-auto text-lg"
          >
            Create Your Welcome Letter Now <ArrowRight className="ml-2" />
          </Button>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <p>Welcome letters generated</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <p>Customer satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <p>Companies trust us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorCTA;
