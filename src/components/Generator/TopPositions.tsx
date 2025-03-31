
const TopPositions = () => {
  const positions = [
    "Software Engineer", "Marketing Manager", "Sales Representative",
    "Human Resources Manager", "Graphic Designer", "Data Analyst",
    "Financial Analyst", "Customer Service Representative", "Product Manager",
    "Operations Manager", "Administrative Assistant", "Content Writer",
    "Business Development Manager", "UX/UI Designer", "Project Manager",
    "Account Manager", "Social Media Manager", "Web Developer",
    "Executive Assistant", "Sales Manager", "Research Analyst",
    "Legal Counsel", "IT Support Specialist", "Quality Assurance Tester",
    "Accountant", "Healthcare Administrator", "Digital Marketing Specialist",
    "Office Manager", "Supply Chain Manager", "Customer Success Manager"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#333333]">
          Top Job Positions for which New Employee Welcome Letter Generator was used:
        </h2>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {positions.map((position, index) => (
            <div key={index} className="bg-[#F6F9F8] rounded-lg p-3 text-center">
              <span className="text-gray-700">{position}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPositions;
