
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormData } from './types';

interface DetailFormProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const DetailForm: React.FC<DetailFormProps> = ({ formData, handleInputChange, handleNext }) => {
  return (
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
  );
};

export default DetailForm;
