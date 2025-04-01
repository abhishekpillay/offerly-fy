
import { ArrowRight } from "lucide-react";

const LetterCard = ({ title, description, icon }: { 
  title: string; 
  description: string;
  icon: string;
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:border-[#F06449] hover:shadow-md transition-all">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-[#F6F9F8] flex items-center justify-center text-[#F06449] text-xl font-bold">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-[#1B4D3E]">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href="#" 
          className="text-[#F06449] font-medium flex items-center hover:text-[#F06449]/80 transition-colors"
        >
          Create Now <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  </div>
);

const OtherHRLetters = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Explore Other HR Letters You Can Generate
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Streamline your HR processes with our complete suite of professional letter templates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LetterCard 
            icon="O"
            title="Offer Letter Generator" 
            description="Create professional job offers with detailed terms and conditions of employment."
          />
          <LetterCard 
            icon="P"
            title="Promotion Letter Generator" 
            description="Congratulate employees on their advancement with formalized promotion documentation."
          />
          <LetterCard 
            icon="R"
            title="Recommendation Letter Generator" 
            description="Provide professional references for current or former employees with customizable templates."
          />
          <LetterCard 
            icon="T"
            title="Termination Letter Generator" 
            description="Handle difficult situations professionally with proper documentation and legal compliance."
          />
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-[#F06449] font-semibold hover:text-[#F06449]/80 transition-colors"
          >
            View all HR letter templates <ArrowRight className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherHRLetters;
