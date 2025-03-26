
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FormStep, FormData } from "./types";
import StepIndicator from "./StepIndicator";
import DetailForm from "./DetailForm";
import OfferLetterPreview from "./OfferLetterPreview";
import { ArrowRight, Check } from "lucide-react";

const OfferLetterForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('details');
  const [formData, setFormData] = useState<FormData>({
    employeeName: '',
    employeeAddress: '',
    employeeDesignation: '',
    joiningDate: '',
    ctcTotal: '',
    ctcFixed: '',
    ctcVariable: '',
  });

  const steps: FormStep[] = ['details', 'requirements', 'review'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FEF9F6] to-[#FDF8F6] py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-[#333333] mb-4">Generate Offer Letter</h1>
          <p className="text-gray-600 text-lg">Create professional offer letters for your new employees in minutes</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-[450px]">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {currentStep === 'details' && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-[#FF543D] h-10 w-10 rounded-full flex items-center justify-center text-white">
                      <Check className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#333333]">Fill Employee Details</h2>
                  </div>
                  <DetailForm 
                    formData={formData} 
                    handleInputChange={handleInputChange} 
                    handleNext={handleNext} 
                  />
                </>
              )}
              {currentStep === 'requirements' && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <p className="text-gray-600 mb-8">This section is still under development.</p>
                  <button 
                    onClick={handleNext}
                    className="flex items-center justify-center gap-2 w-full h-14 bg-[#F06449] hover:bg-[#F06449]/90 text-white text-base font-medium rounded-lg transition-colors"
                  >
                    Continue to Review
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
              {currentStep === 'review' && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-4">Review & Generate</h3>
                  <p className="text-gray-600 mb-8">Your offer letter is ready! You can download it or make changes.</p>
                  <button 
                    className="flex items-center justify-center gap-2 w-full h-14 bg-[#F06449] hover:bg-[#F06449]/90 text-white text-base font-medium rounded-lg transition-colors"
                  >
                    Download Offer Letter
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <h3 className="text-xl font-semibold text-[#333333] mb-6">Offer Letter Preview</h3>
              <div className="bg-[#f8f8f8] rounded-xl p-6 max-h-[800px] overflow-y-auto shadow-inner">
                <OfferLetterPreview formData={formData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterForm;
