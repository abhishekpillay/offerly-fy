
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
      <div className="flex items-center justify-start mb-8 gap-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
              ${currentStep === step 
                ? 'bg-winslow-red text-white' 
                : 'border-2 border-gray-300 text-gray-500'}
            `}>
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-16 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderPreview = () => (
    <div className="bg-white p-8 rounded shadow-sm min-h-full">
      <div className="mb-8">
        <img src="/placeholder.svg" alt="Your Logo" className="h-8 mb-4" />
        <div className="flex justify-between text-sm text-gray-600 mb-6">
          <div>
            <p>Company Name: [Company Name]</p>
            <p>Address: [Company Address]</p>
            <p>Contact: [Company Contact]</p>
          </div>
          <div className="text-right">
            <p>Website: [Company Website]</p>
            <p>Email: [Company Email]</p>
            <p>Date: [Company Date]</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p>{formData.employeeName || '[Employee Name]'}</p>
        <p>{formData.employeeAddress || '[Employee Address]'}</p>
      </div>

      <p className="font-medium mb-4">Re: Offer of Employment</p>

      <p className="mb-4">Dear {formData.employeeName || '[Employee Name]'},</p>

      <p className="mb-4">
        We are thrilled to extend an offer of employment to you at [Company Name] for the position of{' '}
        {formData.employeeDesignation || '[Designation]'}. Your performance during the interview process has impressed us, and we believe you will be a valuable addition to our team.
      </p>

      {/* Additional letter content... */}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF8F6] py-8">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold text-[#F06449] mb-8">Generate Offer Letter</h1>

          <div className="flex gap-8">
            {/* Form Section */}
            <div className="w-[500px]">
              <Card className="p-6">
                {renderStepIndicator()}

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="employeeName">Employee Name*</Label>
                      <Input
                        id="employeeName"
                        name="employeeName"
                        value={formData.employeeName}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="employeeAddress">Employee Address*</Label>
                      <Input
                        id="employeeAddress"
                        name="employeeAddress"
                        value={formData.employeeAddress}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="employeeDesignation">Employee Designation*</Label>
                      <Input
                        id="employeeDesignation"
                        name="employeeDesignation"
                        value={formData.employeeDesignation}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="joiningDate">Joining Date*</Label>
                      <Input
                        id="joiningDate"
                        name="joiningDate"
                        type="date"
                        value={formData.joiningDate}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ctcTotal">CTC (Total)*</Label>
                      <Input
                        id="ctcTotal"
                        name="ctcTotal"
                        value={formData.ctcTotal}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ctcFixed">CTC (Fixed)*</Label>
                      <Input
                        id="ctcFixed"
                        name="ctcFixed"
                        value={formData.ctcFixed}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ctcVariable">CTC (Variable)*</Label>
                      <Input
                        id="ctcVariable"
                        name="ctcVariable"
                        value={formData.ctcVariable}
                        onChange={handleInputChange}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleNext}
                    className="w-full bg-[#F06449] hover:bg-[#F06449]/90 text-white"
                  >
                    Next
                  </Button>
                </div>
              </Card>
            </div>

            {/* Preview Section */}
            <div className="flex-1">
              <Card>
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">Offer Letter</h2>
                  <Button variant="ghost" size="sm" className="text-gray-500 gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
                <div className="p-6 bg-gray-50">
                  {renderPreview()}
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
