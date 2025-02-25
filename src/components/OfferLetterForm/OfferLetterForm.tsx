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
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-[#FF543D] h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
          W
        </div>
        <h2 className="text-2xl font-bold text-[#333333]">Winslow</h2>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <div className="space-y-1">
          <p>123 Winslow Street</p>
          <p>San Francisco, CA 94105</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="text-right space-y-1">
          <p>www.winslow.com</p>
          <p>hr@winslow.com</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>

    <div className="mb-8 space-y-1 text-[#333333]">
      <p>{formData.employeeName || '[Candidate Name]'}</p>
      <p>{formData.employeeAddress || '[Street Address]'}</p>
      <p>[City, State ZIP]</p>
    </div>

    <p className="mb-4">Dear {formData.employeeName || '[Candidate Name]'},</p>

    <p className="mb-6">
      We are pleased to offer you the position of {formData.employeeDesignation || '[Job Title]'} with Winslow, effective {formData.joiningDate || '[Start Date]'}. We believe your skills and experience are an excellent match for our company.
    </p>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">Position Details:</h3>
      <ul className="space-y-2 pl-5">
        <li>Job Title: {formData.employeeDesignation || '[Job Title]'}</li>
        <li>Department: [Department]</li>
        <li>Reporting to: [Manager's Name and Title]</li>
        <li>Location: [Office Location/Remote Status]</li>
        <li>Classification: [Full-time/Part-time], [Exempt/Non-exempt]</li>
        <li>Work Schedule: [Hours/Days]</li>
      </ul>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">Compensation:</h3>
      <ul className="space-y-2 pl-5">
        <li>Base Salary: ${formData.ctcTotal || '[Amount]'} per year</li>
        <li>Fixed Component: ${formData.ctcFixed || '[Amount]'} per year</li>
        <li>Variable Component: ${formData.ctcVariable || '[Amount]'} per year</li>
        <li>Payment Schedule: Bi-weekly, via direct deposit</li>
        <li>Performance Review: Annual, with eligibility for salary increases based on performance</li>
        <li>Bonus Eligibility: Based on company and individual performance</li>
        <li>Equity: Details to be provided in separate documentation</li>
      </ul>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">Benefits:</h3>
      <ul className="space-y-2 pl-5">
        <li>Health Benefits: Medical, dental, and vision insurance effective first of the month following start date</li>
        <li>Retirement: 401(k) plan with company match</li>
        <li>Paid Time Off: 20 days of vacation, 10 days of sick leave annually</li>
        <li>Holidays: 10 paid holidays per year</li>
        <li>Additional Benefits: Life insurance, disability coverage, flexible spending accounts</li>
      </ul>
    </div>

    <div className="mb-6">
      <h3 className="font-semibold mb-3">This offer is contingent upon:</h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Satisfactory completion of a background check</li>
        <li>Verification of your eligibility to work in the United States</li>
        <li>Signing of required employment documentation</li>
      </ol>
    </div>

    <p className="mb-6">
      Your employment with Winslow will be "at will," meaning that either you or the company may terminate the employment relationship at any time, with or without cause, and with or without notice.
    </p>

    <p className="mb-6">
      Upon joining, you will be required to sign our standard Confidentiality and Intellectual Property Agreement and acknowledge receipt of our Employee Handbook, which outlines our policies and procedures.
    </p>

    <p className="mb-8">
      To accept this offer, please sign and return this letter by [Deadline Date]. If you have any questions, please contact [Contact Person] at [Phone/Email].
    </p>

    <p className="mb-8">
      We are excited about the possibility of you joining our team and look forward to your contribution to Winslow.
    </p>

    <div className="mb-12">
      <p className="mb-1">Sincerely,</p>
      <p className="font-semibold">[Hiring Manager Name]</p>
      <p>[Title]</p>
      <p>Winslow</p>
    </div>

    <div className="border-t pt-8">
      <p className="font-semibold mb-6">Acceptance:</p>
      <p className="mb-8">I accept the offer as described above.</p>
      
      <div className="flex gap-12">
        <div className="flex-1">
          <div className="border-b border-black mb-2"></div>
          <p>{formData.employeeName || '[Candidate Name]'}</p>
        </div>
        <div className="flex-1">
          <div className="border-b border-black mb-2"></div>
          <p>Date</p>
        </div>
      </div>
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
