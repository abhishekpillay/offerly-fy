
import { Check } from "lucide-react";

const ElementCard = ({ title, description, color }: { 
  title: string; 
  description: string; 
  color: string;
}) => (
  <div className={`bg-${color} rounded-lg p-6 h-full flex flex-col`}>
    <h3 className="text-xl font-semibold mb-3 text-[#1B4D3E]">{title}</h3>
    <p className="text-gray-700 flex-grow">{description}</p>
    <div className="mt-4 flex justify-end">
      <div className="bg-white/50 rounded-full p-1">
        <Check className="w-5 h-5 text-[#F06449]" />
      </div>
    </div>
  </div>
);

const WelcomeLetterElements = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            What to Include in a New Employee Welcome Letter?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Key elements that make your welcome letter effective and informative
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ElementCard
            title="Company Introduction"
            description="Brief overview of your company's mission, values, and culture to help new employees understand what you stand for."
            color="[#F6F9F8]"
          />
          <ElementCard
            title="Role Information"
            description="Clear description of their position, key responsibilities, and how their role contributes to the company's goals."
            color="[#F0F9ED]"
          />
          <ElementCard
            title="Effective Dates"
            description="Confirm their start date, work hours, and any important dates for orientation or training sessions."
            color="[#FFF6ED]"
          />
          <ElementCard
            title="Contact Information"
            description="Provide names and contact details for their manager, team members, and HR representative."
            color="[#FFF0F0]"
          />
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ElementCard
            title="First-Day Instructions"
            description="Details about what to bring, where to go, parking information, and what to expect on their first day."
            color="[#F0F6FF]"
          />
          <ElementCard
            title="Benefits Overview"
            description="Summary of health insurance, retirement plans, paid time off, and other benefits they'll receive."
            color="[#F6F0FF]"
          />
          <ElementCard
            title="Company Policies"
            description="Brief mention of key policies with information on where to find the complete employee handbook."
            color="[#FFF9F0]"
          />
          <ElementCard
            title="Warm Welcome"
            description="A personal touch expressing enthusiasm about them joining the team and the value they'll bring."
            color="[#F6F9F8]"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeLetterElements;
