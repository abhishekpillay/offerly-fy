
import { Check } from "lucide-react";

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="bg-[#FF543D] rounded-full p-1 text-white mt-0.5 flex-shrink-0">
      <Check size={16} />
    </div>
    <p className="text-gray-700">{text}</p>
  </div>
);

const HowGeneratorWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">
          How This Generator Works
        </h2>
        
        <div className="bg-[#FEF9F6] rounded-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-[#333333]">
                New Employee Welcome Letter Generator Tool
              </h3>
              <p className="text-gray-700 mb-6">
                Our Offer Letter Generator tool simplifies the process of creating professional welcome letters for new hires. 
                Follow these simple steps to create a personalized letter in minutes:
              </p>
              
              <div className="space-y-4">
                <FeatureItem text="Provide Employee Information - Fill in the basic details like name, position, and starting date." />
                <FeatureItem text="Customize Content - Add specific details about the role, team, and company culture." />
                <FeatureItem text="Review & Generate - Preview your letter and make any necessary adjustments before finalizing." />
                <FeatureItem text="Download & Share - Save your letter as a PDF or send it directly to your new hire." />
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
                <div className="w-16 h-16 bg-[#FF543D] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">W</div>
                <h4 className="text-lg font-semibold text-center mb-3">Quick & Easy Process</h4>
                <p className="text-center text-gray-600">Create professional welcome letters in minutes without any design skills or templates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowGeneratorWorks;
