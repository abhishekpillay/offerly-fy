
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { FormStep, FormData } from "./types";
import StepIndicator from "./StepIndicator";
import DetailForm from "./DetailForm";
import OfferLetterPreview from "./OfferLetterPreview";

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
    <div className="min-h-screen bg-[#FDF8F6] py-12">
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#F06449] mb-12">Generate Offer Letter</h1>

        <div className="flex gap-8">
          {/* Form Section */}
          <div className="w-[500px]">
            <StepIndicator steps={steps} currentStep={currentStep} />
            <DetailForm 
              formData={formData} 
              handleInputChange={handleInputChange} 
              handleNext={handleNext} 
            />
          </div>

          {/* Preview Section */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8 relative">
            <OfferLetterPreview formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterForm;
