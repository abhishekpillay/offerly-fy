
const WhatIsWelcomeLetter = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-[#333333]">
              What is a New Employee Welcome Letter?
            </h2>
            <p className="text-gray-700 mb-4">
              A new employee welcome letter is a formal document sent to new hires before their first day, officially welcoming them to the company. It serves as an introduction to the organization and provides essential information to help them prepare for their new role.
            </p>
            <p className="text-gray-700 mb-6">
              This document typically includes a warm greeting, information about the company culture, first-day instructions, and contact details for key team members. It sets a positive tone for the employment relationship and helps reduce first-day anxiety.
            </p>
            
            <div className="bg-[#FEF9F6] border-l-4 border-[#FF543D] p-4 rounded">
              <h3 className="text-lg font-semibold mb-2 text-[#333333]">Pro Tip</h3>
              <p className="text-gray-600">
                Personalize your welcome letter with specific details about the new hire's role and how it contributes to the company's mission to make them feel valued from the start.
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="w-16 h-2 bg-[#FF543D] mb-4"></div>
                <div className="w-24 h-3 bg-gray-200 mb-2"></div>
                <div className="w-32 h-2 bg-gray-200"></div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full h-2 bg-gray-200"></div>
                <div className="w-full h-2 bg-gray-200"></div>
                <div className="w-3/4 h-2 bg-gray-200"></div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="w-24 h-8 bg-[#FF543D] rounded"></div>
                <div className="w-16 h-4 bg-gray-200 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsWelcomeLetter;
