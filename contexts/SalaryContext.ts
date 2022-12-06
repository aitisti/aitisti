import React from 'react';

export enum CurrencySymbol {
  RON = 'RON',
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}

export type Currency = {
  symbol: CurrencySymbol;
  rate: number;
};

export enum BillingPeriod {
  MONTHLY = 'Lunare',
  YEARLY = 'Anuale',
}
export type PaymentMethod = 'MONTHLY' | 'HOURLY';

export type SalaryState = {
  paymentMethod: PaymentMethod;
  monthlySalary: number;
  hourlyRate: number;
  offDays: number;
  taxExempt: boolean;
  currency: Currency;
  billingPeriod: BillingPeriod;
  yearlyPfaAccountingFees: number;
  yearlySrlAccountingFees: number;
};

export const defaultSalaryState: SalaryState = {
  paymentMethod: 'MONTHLY',
  monthlySalary: 10000,
  hourlyRate: 100,
  offDays: 30,
  taxExempt: true,
  currency: { symbol: CurrencySymbol.RON, rate: 1 },
  billingPeriod: BillingPeriod.MONTHLY,
  yearlyPfaAccountingFees: 500,
  yearlySrlAccountingFees: 5000,
};

export enum SalaryActionType {
  CHANGE_TAX_EXEMPTION = 'CHANGE_TAX_EXEMPTION',
  CHANGE_PAYMENT_METHOD = 'CHANGE_PAYMENT_METHOD',
  CHANGE_MONTHLY_SALARY = 'CHANGE_MONTHLY_SALARY',
  CHANGE_HOURLY_RATE = 'CHANGE_HOURLY_RATE',
  CHANGE_OFFDAYS = 'CHANGE_OFFDAYS',
  CHANGE_BILLING_PERIOD = 'CHANGE_BILLING_PERIOD',
  CHANGE_CURRENCY = 'CHANGE_CURRENCY',
  CHANGE_PFA_ACCOUNTING_FEES = 'CHANGE_PFA_ACCOUNTING_FEES',
  CHANGE_SRL_ACCOUNTING_FEES = 'CHANGE_SRL_ACCOUNTING_FEES',
}

export type SalaryAction = {
  type: SalaryActionType;
  payload?: any;
};

const SalaryContext = React.createContext({
  state: defaultSalaryState,
  currencyRates: [] as Currency[],
  changeTaxExemption: () => {},
  changeMonthlySalary: (monthlySalary: number) => {},
  changePaymentMethod: (paymentMethod: PaymentMethod) => {},
  changeHourlyRate: (hourlyRate: number) => {},
  changeOffDays: (offDays: number) => {},
  changeBillingPeriod: (billingPeriod: BillingPeriod) => {},
  changeCurrency: (symbol: CurrencySymbol) => {},
  changeYearlyPfaAccountingFees: (fees: number) => {},
  changeYearlySrlAccountingFees: (fees: number) => {},
});

export default SalaryContext;
