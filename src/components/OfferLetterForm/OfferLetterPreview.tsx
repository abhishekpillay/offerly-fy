
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { FormData } from './types';

interface OfferLetterPreviewProps {
  formData: FormData;
}

const OfferLetterPreview: React.FC<OfferLetterPreviewProps> = ({ formData }) => {
  return (
    <div className="bg-white p-8 rounded-lg min-h-full relative">
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

      <Button 
        variant="ghost" 
        size="sm" 
        className="absolute top-8 right-8 text-[#F06449] hover:text-[#F06449]/90 gap-2 font-medium"
      >
        Download
        <Download className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default OfferLetterPreview;
