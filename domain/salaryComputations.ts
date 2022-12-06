import { BillingPeriod } from '../contexts/SalaryContext';

export const SMB_RON = 3000; // Salariul minim brut pe economie
export const TAXABLE_SMB_RON = 2800; // 200 lei fără taxă pentru salariul de 3000
export const SMB_WRITE_OFF = 600;
export const MIN_OFF_DAYS = 0;
export const MAX_OFF_DAYS = 260;

export const CEILING_24 = 24 * SMB_RON;

export const socialSecurity = (monthlySalary: number) => {
  return monthlySalary * 0.25;
};

export const healthInsurance = (monthlySalary: number) => {
  return monthlySalary * 0.1;
};

export const incomeTax = (taxableIncome: number) => {
  return taxableIncome * 0.1;
};

export const employerTaxes = (monthlySalary: number) => {
  return monthlySalary * 0.0225;
};

export const yearlyIncomeFromHourlyRate = (
  hourlyRate: number,
  offDays: number
) => {
  const hoursWorked = (260 - offDays) * 8;
  return hoursWorked * hourlyRate;
};

export const monthlyIncomeFromHourlyRate = (
  hourlyRate: number,
  yearlyOffDays: number
) => {
  return yearlyIncomeFromHourlyRate(hourlyRate, yearlyOffDays) / 12;
};

export const yearlyDividendTaxes = (yearlyIncome: number) => {
  return yearlyIncome * 0.08;
};

export const yearlyProfitTaxes = (yearlyProfit: number) => {
  return yearlyProfit * 0.01;
};
