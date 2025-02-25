
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";

type FormStep = 'details' | 'requirements' | 'review';

interface FormData {
  employeeName: string;
  employeeAddress: string;
  employeeDesignation: string;
  joiningDate: string;
  ctcTotal: string;
  ctcFixed: string;
  ctcVariable: string;
}

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

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-start mb-12 gap-2">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center text-base font-medium border-2
              ${currentStep === step 
                ? 'bg-[#1B4D3E] border-[#1B4D3E] text-white' 
                : 'border-[#1B4D3E] text-[#1B4D3E] bg-white'}
            `}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-28 h-0.5 bg-[#1B4D3E] mx-2" />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderPreview = () => (
    <div className="bg-white p-8 rounded-lg min-h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Offer Letter</h2>
      
      <div className="mb-8">
        <img src="/placeholder.svg" alt="Your Logo" className="h-8 mb-6" />
        <div className="flex justify-between text-sm text-gray-600 mb-8">
          <div className="space-y-1">
            <p>Company Name: [Company Name]</p>
            <p>Address: [Company Address]</p>
            <p>Contact: [Company Contact]</p>
          </div>
          <div className="text-right space-y-1">
            <p>Website: [Company Website]</p>
            <p>Email: [Company Email]</p>
            <p>Date: [Company Date]</p>
          </div>
        </div>
      </div>

      <div className="mb-8 space-y-1">
        <p>{formData.employeeName || '[Employee Name]'}</p>
        <p>{formData.employeeAddress || '[Employee Address]'}</p>
      </div>

      <p className="font-medium mb-4">Re: Offer of Employment</p>

      <p className="mb-4">Dear {formData.employeeName || '[Employee Name]'},</p>

      <p className="mb-6">
        We are thrilled to extend an offer of employment to you at [Company Name] for the position of{' '}
        {formData.employeeDesignation || '[Designation]'}. Your performance during the interview process has impressed us, and we believe you will be a valuable addition to our team.
      </p>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Your Compensation Package</h3>
        <p className="mb-2">Your Total Compensation (CTC) for the year will be Rs. {formData.ctcTotal || 'XXXXX'}. This includes:</p>
        <ul className="list-disc pl-8 space-y-1">
          <li>Fixed Salary Component of Rs. {formData.ctcFixed || 'XXXXX'} per annum</li>
          <li>Variable Component of Rs. {formData.ctcVariable || 'XXXXX'} per annum (Performance-Based)</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Joining Date</h3>
        <p>Your expected joining date is {formData.joiningDate || '[Joining Date (DD-MM-YY)]'}.</p>
      </div>

      <div className="mt-8">
        <p className="mb-2">Yours truly,</p>
        <p>[Name]</p>
        <p>[Title]</p>
        <p>[Contact Information]</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF8F6] py-12">
      <div className="container max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-[#F06449] mb-12">Generate Offer Letter</h1>

        <div className="flex gap-8">
          {/* Form Section */}
          <div className="w-[500px]">
            {renderStepIndicator()}

            <div className="space-y-6">
              <div className="space-y-5">
                <div>
                  <Input
                    id="employeeName"
                    name="employeeName"
                    placeholder="Employee Name*"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>

                <div>
                  <Input
                    id="employeeAddress"
                    name="employeeAddress"
                    placeholder="Employee Address*"
                    value={formData.employeeAddress}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>

                <div>
                  <Input
                    id="employeeDesignation"
                    name="employeeDesignation"
                    placeholder="Employee Designation*"
                    value={formData.employeeDesignation}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>

                <div>
                  <Input
                    id="joiningDate"
                    name="joiningDate"
                    type="date"
                    placeholder="Joining Date*"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>

                <div>
                  <Input
                    id="ctcTotal"
                    name="ctcTotal"
                    placeholder="CTC (Total)*"
                    value={formData.ctcTotal}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>

                <div>
                  <Input
                    id="ctcFixed"
                    name="ctcFixed"
                    placeholder="CTC (Fixed)*"
                    value={formData.ctcFixed}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>

                <div>
                  <Input
                    id="ctcVariable"
                    name="ctcVariable"
                    placeholder="CTC (Variable)*"
                    value={formData.ctcVariable}
                    onChange={handleInputChange}
                    className="h-14 text-base"
                  />
                </div>
              </div>

              <Button 
                onClick={handleNext}
                className="w-full h-14 bg-[#F06449] hover:bg-[#F06449]/90 text-white text-base font-medium"
              >
                Next
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8 relative">
            {renderPreview()}
            <Button 
              variant="ghost" 
              size="sm" 
              className="absolute top-8 right-8 text-[#F06449] hover:text-[#F06449]/90 gap-2 font-medium"
            >
              Download
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterForm;
