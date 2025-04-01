
import { ChevronRight, FileText, Pencil, Send } from "lucide-react";

const StepItem = ({ number, title, description, icon }: { 
  number: number; 
  title: string; 
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-12 h-12 bg-[#F06449] rounded-full flex items-center justify-center text-white font-bold text-xl">
      {number}
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <h3 className="font-semibold text-xl text-[#1B4D3E]">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FEF9F6] to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            How It Works: Create Your Offer Letter in Minutes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Generate a professional welcome letter for your new hires in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <StepItem 
            number={1} 
            icon={<FileText className="w-5 h-5 text-[#F06449]" />}
            title="Fill In Details" 
            description="Enter the new employee's information including name, position, start date, and compensation details." 
          />
          <StepItem 
            number={2} 
            icon={<Pencil className="w-5 h-5 text-[#F06449]" />}
            title="Customize Content" 
            description="Personalize the welcome letter with specific details about the role, team, and company culture." 
          />
          <StepItem 
            number={3}
            icon={<Send className="w-5 h-5 text-[#F06449]" />} 
            title="Download & Share" 
            description="Preview your letter, make any final adjustments, and download it ready to send to your new hire." 
          />
        </div>

        <div className="mt-14 text-center">
          <a href="#generator-form" className="inline-flex items-center text-[#F06449] font-semibold hover:text-[#F06449]/80 transition-colors">
            Start creating your welcome letter now
            <ChevronRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
