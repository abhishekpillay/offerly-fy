
import React from 'react';
import { FormStep } from './types';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  steps: FormStep[];
  currentStep: FormStep;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep }) => {
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="flex justify-between items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;
        
        return (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div 
                className={`
                  flex items-center justify-center h-12 w-12 rounded-full 
                  ${isCompleted 
                    ? 'bg-[#FF543D] text-white' 
                    : isActive 
                      ? 'bg-[#FF543D] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  } 
                  transition-colors
                `}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <span className="text-lg font-semibold">{index + 1}</span>
                )}
              </div>
              <span 
                className={`
                  mt-2 text-sm font-medium capitalize
                  ${isCompleted || isActive ? 'text-[#333333]' : 'text-gray-500'}
                `}
              >
                {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div 
                className={`
                  flex-1 h-1 max-w-32
                  ${index < currentIndex ? 'bg-[#FF543D]' : 'bg-gray-200'}
                `}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
