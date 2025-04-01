
import { ShieldCheck, ThumbsUp, Zap, Coffee } from "lucide-react";

const ReasonCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
    <div className="mb-4 text-[#F06449]">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#1B4D3E]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyItMatters = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Why a Welcome Letter Matters for Your New Employee
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A thoughtfully crafted welcome letter can significantly improve your new hire experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ReasonCard 
            icon={<ShieldCheck className="w-10 h-10" />}
            title="Builds Trust" 
            description="Establishes credibility and helps new employees feel secure in their decision to join your company."
          />
          <ReasonCard 
            icon={<ThumbsUp className="w-10 h-10" />}
            title="Increases Engagement" 
            description="Employees who feel welcomed from the start are more likely to be engaged and productive."
          />
          <ReasonCard 
            icon={<Zap className="w-10 h-10" />}
            title="Speeds Up Onboarding" 
            description="Provides key information upfront so new hires can hit the ground running on day one."
          />
          <ReasonCard 
            icon={<Coffee className="w-10 h-10" />}
            title="Reduces Anxiety" 
            description="Helps alleviate the stress and uncertainty that comes with starting a new job."
          />
        </div>
        
        <div className="mt-14 bg-[#F6F9F8] rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#1B4D3E] mb-4">
            Don't miss this crucial step in your onboarding process!
          </h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            A well-crafted welcome letter can be the difference between a new hire who feels valued and one who feels uncertain. Make sure your employees start their journey with your company on the right foot.
          </p>
          <a 
            href="#generator-form" 
            className="inline-block bg-[#F06449] hover:bg-[#F06449]/90 text-white py-3 px-6 rounded-lg font-medium transition-colors"
          >
            Create Your Welcome Letter Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
