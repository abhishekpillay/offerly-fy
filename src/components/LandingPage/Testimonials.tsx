
import { Star } from "lucide-react";

const Testimonial = ({ quote, author, company }: { 
  quote: string, 
  author: string, 
  company: string 
}) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className="fill-[#F06449] text-[#F06449]" />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic">"{quote}"</p>
    <div>
      <p className="font-semibold text-[#333333]">{author}</p>
      <p className="text-gray-500 text-sm">{company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="py-20 bg-[#FDF8F6]">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#333333]">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from HR professionals and hiring managers who use our offer letter generator.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial 
            quote="This tool has saved me countless hours. The templates are professional and easy to customize."
            author="Sarah Johnson"
            company="HR Director, TechCorp"
          />
          <Testimonial 
            quote="We've streamlined our onboarding process thanks to this offer letter generator. Highly recommended!"
            author="Michael Chen"
            company="Hiring Manager, StartupX"
          />
          <Testimonial 
            quote="The consistency in our offer letters has improved dramatically since we started using this tool."
            author="Jessica Rodriguez"
            company="Talent Acquisition, Global Enterprises"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
