
import React from 'react';
import { FormStep } from './types';

interface StepIndicatorProps {
  steps: FormStep[];
  currentStep: FormStep;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
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

export default StepIndicator;
