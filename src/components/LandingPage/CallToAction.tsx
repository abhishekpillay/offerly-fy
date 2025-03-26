
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#1B4D3E] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your First Offer Letter?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Start generating professional offer letters in minutes with our easy-to-use tool.
          </p>
          <Button 
            onClick={() => navigate("/generator")} 
            className="bg-[#F06449] hover:bg-[#F06449]/90 text-white px-8 py-6 h-auto text-lg"
          >
            Create Offer Letter <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
