
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, ChevronLeft } from "lucide-react";

type FormStep = 'company' | 'candidate' | 'position' | 'compensation' | 'benefits' | 'contingencies' | 'signature';

const OfferLetterForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('company');
  const { toast } = useToast();

  const steps: FormStep[] = ['company', 'candidate', 'position', 'compensation', 'benefits', 'contingencies', 'signature'];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'company':
        return <div className="p-6">Company Information Form</div>;
      case 'candidate':
        return <div className="p-6">Candidate Information Form</div>;
      case 'position':
        return <div className="p-6">Position Details Form</div>;
      case 'compensation':
        return <div className="p-6">Compensation Details Form</div>;
      case 'benefits':
        return <div className="p-6">Benefits Package Form</div>;
      case 'contingencies':
        return <div className="p-6">Contingencies Form</div>;
      case 'signature':
        return <div className="p-6">Signature Section Form</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-winslow-light">
      <div className="container py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-winslow-dark">Create Offer Letter</h1>
            <p className="text-gray-600 mt-2">Fill out the form below to generate a professional offer letter</p>
          </div>

          <div className="flex gap-8">
            {/* Form Section */}
            <div className="flex-1">
              <Card className="animate-fadeIn">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-winslow-dark capitalize">
                      {currentStep} Information
                    </h2>
                    <div className="text-sm text-gray-500">
                      Step {steps.indexOf(currentStep) + 1} of {steps.length}
                    </div>
                  </div>
                </div>

                {renderStepContent()}

                <div className="p-6 border-t border-gray-100 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === steps[0]}
                    className="gap-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={currentStep === steps[steps.length - 1]}
                    className="bg-winslow-red hover:bg-winslow-red/90 text-white gap-2"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Preview Section */}
            <div className="flex-1">
              <Card className="animate-fadeIn">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-semibold text-winslow-dark">Preview</h2>
                </div>
                <div className="p-6 min-h-[600px] bg-winslow-lightgray">
                  <div className="bg-white p-8 rounded shadow-sm min-h-full">
                    <p className="text-gray-500 text-center">
                      Your offer letter preview will appear here as you fill out the form.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterForm;
