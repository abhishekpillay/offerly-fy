
const ContentCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
    <h3 className="text-lg font-semibold mb-3 text-[#1B4D3E]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WelcomeLetterContent = () => {
  return (
    <div className="py-16 bg-[#F6F9F8]">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#333333]">
          What to Include in a New Employee Welcome Letter?
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A well-crafted welcome letter should include several key elements to properly introduce your new hire to the company and make them feel valued from day one.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="Company Introduction"
            description="Brief overview of your company's mission, values, and culture to help new employees understand what you stand for."
          />
          <ContentCard
            title="Role Information"
            description="Clear description of their position, key responsibilities, and how their role contributes to the company's goals."
          />
          <ContentCard
            title="Effective Dates"
            description="Confirm their start date, work hours, and any important dates for orientation or training sessions."
          />
          <ContentCard
            title="Contact Information"
            description="Provide names and contact details for their manager, team members, and HR representative."
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeLetterContent;
