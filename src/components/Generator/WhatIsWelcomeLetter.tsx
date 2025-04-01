
import { CheckCircle2 } from "lucide-react";

const WhatIsWelcomeLetter = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F6F9F8]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              What is a New Employee Welcome Letter and Why You Need One
            </h2>
            
            <p className="text-gray-700 mb-6">
              A welcome letter is a formal document sent to new hires before their first day, officially welcoming them to the company. It serves as an introduction to the organization and provides essential information to help them prepare for their new role.
            </p>
            
            <p className="text-gray-700 mb-8">
              This document typically includes a warm greeting, information about the company culture, first-day instructions, and contact details for key team members. It sets a positive tone for the employment relationship and helps reduce first-day anxiety.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#F06449] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1B4D3E] text-lg">Makes a Great First Impression</h3>
                  <p className="text-gray-600">Shows professionalism and organization from day one</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#F06449] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1B4D3E] text-lg">Reduces New Hire Anxiety</h3>
                  <p className="text-gray-600">Provides clarity and sets expectations before their first day</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#F06449] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-[#1B4D3E] text-lg">Improves Onboarding Experience</h3>
                  <p className="text-gray-600">Kickstarts the integration process with essential information</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="mb-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF543D] flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <h3 className="text-2xl font-bold text-[#333333]">Welcome Letter</h3>
            </div>
            
            <div className="space-y-3">
              <div className="h-4 bg-gray-100 rounded-full w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded-full w-full"></div>
              <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
              <div className="h-4 bg-gray-100 rounded-full w-full"></div>
            </div>
            
            <div className="my-6 border-t border-gray-100 pt-6">
              <div className="space-y-3">
                <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-gray-100 pt-6">
              <div className="h-10 bg-[#F06449] rounded-md w-32"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsWelcomeLetter;
