
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormData } from './types';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

interface DetailFormProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const DetailForm: React.FC<DetailFormProps> = ({ formData, handleInputChange, handleNext }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="employeeName" className="text-sm font-medium text-gray-700">Employee Name*</Label>
          <Input
            id="employeeName"
            name="employeeName"
            placeholder="Enter employee's full name"
            value={formData.employeeName}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employeeAddress" className="text-sm font-medium text-gray-700">Employee Address*</Label>
          <Input
            id="employeeAddress"
            name="employeeAddress"
            placeholder="Enter full address"
            value={formData.employeeAddress}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employeeDesignation" className="text-sm font-medium text-gray-700">Employee Designation*</Label>
          <Input
            id="employeeDesignation"
            name="employeeDesignation"
            placeholder="Enter job title"
            value={formData.employeeDesignation}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="joiningDate" className="text-sm font-medium text-gray-700">Joining Date*</Label>
          <Input
            id="joiningDate"
            name="joiningDate"
            type="date"
            placeholder="Select date"
            value={formData.joiningDate}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ctcTotal" className="text-sm font-medium text-gray-700">CTC (Total)*</Label>
          <Input
            id="ctcTotal"
            name="ctcTotal"
            placeholder="Enter total compensation"
            value={formData.ctcTotal}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ctcFixed" className="text-sm font-medium text-gray-700">CTC (Fixed)*</Label>
          <Input
            id="ctcFixed"
            name="ctcFixed"
            placeholder="Enter fixed compensation"
            value={formData.ctcFixed}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ctcVariable" className="text-sm font-medium text-gray-700">CTC (Variable)*</Label>
          <Input
            id="ctcVariable"
            name="ctcVariable"
            placeholder="Enter variable compensation"
            value={formData.ctcVariable}
            onChange={handleInputChange}
            className="h-12 text-base border-gray-300 focus:border-[#F06449] focus:ring focus:ring-[#F06449]/20 transition-all rounded-lg"
          />
        </div>
      </div>

      <Button 
        onClick={handleNext}
        className="w-full h-14 bg-[#F06449] hover:bg-[#F06449]/90 text-white text-base font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        Next Step
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default DetailForm;
