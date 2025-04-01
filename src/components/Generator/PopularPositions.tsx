
const PopularPositions = () => {
  const positions = [
    "Software Engineer", "Marketing Manager", "Sales Representative",
    "Human Resources Manager", "Graphic Designer", "Data Analyst",
    "Financial Analyst", "Customer Service Representative", "Product Manager",
    "Operations Manager", "Administrative Assistant", "Content Writer",
    "Business Development Manager", "UX/UI Designer", "Project Manager",
    "Account Manager", "Social Media Manager", "Web Developer",
    "Executive Assistant", "Sales Manager", "Research Analyst",
    "Legal Counsel", "IT Support Specialist", "Quality Assurance Tester"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F6F9F8]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Popular Job Positions Using the Welcome Letter Generator
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our welcome letter templates are tailored for a wide range of roles across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {positions.map((position, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:border-[#F06449] hover:shadow-md transition-all"
            >
              <span className="text-[#333333] font-medium">{position}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Don't see your position? Don't worry - our templates are customizable for any role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularPositions;
