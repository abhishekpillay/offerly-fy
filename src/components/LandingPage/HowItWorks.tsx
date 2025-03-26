
import { ArrowRight } from "lucide-react";

const StepCard = ({ number, title, description }: { 
  number: number, 
  title: string, 
  description: string 
}) => (
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
    <div className="w-12 h-12 rounded-full bg-[#1B4D3E] text-white flex items-center justify-center text-xl font-semibold mb-4">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#333333]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#333333]">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to create a professional offer letter in minutes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-[#1B4D3E]"></div>
          
          <StepCard 
            number={1}
            title="Fill in Details"
            description="Enter basic information about the employee and the position."
          />
          <StepCard 
            number={2}
            title="Review & Customize"
            description="Review the generated offer letter and make any necessary adjustments."
          />
          <StepCard 
            number={3}
            title="Download & Send"
            description="Download the offer letter in PDF format and send it to your new hire."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
