
export type FormStep = 'details' | 'requirements' | 'review';

export interface FormData {
  employeeName: string;
  employeeAddress: string;
  employeeDesignation: string;
  joiningDate: string;
  ctcTotal: string;
  ctcFixed: string;
  ctcVariable: string;
}
