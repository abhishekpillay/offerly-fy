
import { CheckCircle, Clock, FileText, Users } from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="text-[#F06449] mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-[#333333]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className="py-20 bg-[#FDF8F6]">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#333333]">Why Use Our Offer Letter Generator?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our tool simplifies the process of creating professional offer letters, 
            saving you time and ensuring consistency across your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Clock size={36} />}
            title="Save Time"
            description="Create professional offer letters in minutes instead of hours."
          />
          <FeatureCard 
            icon={<FileText size={36} />}
            title="Professional Templates"
            description="Access professionally designed templates that follow industry standards."
          />
          <FeatureCard 
            icon={<CheckCircle size={36} />}
            title="Compliance"
            description="Ensure your offer letters include all necessary legal elements."
          />
          <FeatureCard 
            icon={<Users size={36} />}
            title="Consistency"
            description="Maintain consistent branding and messaging across all offer letters."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
