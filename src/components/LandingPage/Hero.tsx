
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#FDF8F6] to-white py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#333333]">
              Create Professional <span className="text-[#F06449]">Offer Letters</span> in Minutes
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Generate personalized offer letters for your new employees with our easy-to-use tool. 
              Save time and ensure consistency in your hiring process.
            </p>
            <Button 
              onClick={() => navigate("/generator")} 
              className="text-white bg-[#F06449] hover:bg-[#F06449]/90 px-8 py-6 h-auto text-lg"
            >
              Create Offer Letter <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#FF543D] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                  W
                </div>
                <h2 className="text-xl font-bold text-[#333333]">Winslow</h2>
              </div>
              <p className="text-sm text-gray-700 mb-2">Dear [Candidate Name],</p>
              <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                We are pleased to offer you the position of [Job Title] with Winslow. 
                We believe your skills and experience are an excellent match for our company...
              </p>
              <div className="h-24 bg-gradient-to-b from-white/0 to-white absolute bottom-0 left-0 right-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
