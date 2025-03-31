
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GeneratorCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-[#FEF9F6]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="bg-[#1B4D3E] rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
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
        </div>
      </div>
    </div>
  );
};

export default GeneratorCTA;
