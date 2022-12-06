import styles from './PfaColumn.module.css';
import SalaryColumn from '../SalaryColumn';
import ComputationRow from '../ComputationRow';
import React from 'react';
import RowSeparator from '../RowSeparator';
import SalaryContext, {
  BillingPeriod,
} from '../../../../contexts/SalaryContext';
import InfoRow from '../InfoRow';
import {
  CEILING_24,
  incomeTax,
  healthInsurance,
  monthlyIncomeFromHourlyRate,
  socialSecurity,
  SMB_RON,
} from '../../../../domain/salaryComputations';
import AccountingFees from '../AccountingFees';

const PfaColumn = () => {
  const {
    monthlySalary,
    billingPeriod,
    paymentMethod,
    hourlyRate,
    offDays,
    currency,
    yearlyPfaAccountingFees,
  } = React.useContext(SalaryContext).state;

  const changeAccountingFees =
    React.useContext(SalaryContext).changeYearlyPfaAccountingFees;

  const monthlyCurrency =
    paymentMethod === 'MONTHLY'
      ? monthlySalary
      : monthlyIncomeFromHourlyRate(hourlyRate, offDays);

  const yearlyCurrency = 12 * monthlyCurrency;

  const debitCurrency =
    billingPeriod === BillingPeriod.MONTHLY ? monthlyCurrency : yearlyCurrency;

  const yearlyBeforeRon = yearlyCurrency * currency.rate;

  const limitInfo =
    yearlyBeforeRon >= CEILING_24
      ? 'Venit anual brut >= 24 * SMB!'
      : 'Venit anual brut >= 12 * SMB';

  const yearlySocialSecurityRon =
    (yearlyBeforeRon >= CEILING_24 ? 24 : 12) * socialSecurity(SMB_RON);
  const socialSecurityRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlySocialSecurityRon / 12
      : yearlySocialSecurityRon;
  const socialSecurityCurrency = socialSecurityRon / currency.rate;

  const yearlyHealthInsuranceRon =
    (yearlyBeforeRon >= CEILING_24 ? 24 : 12) * healthInsurance(SMB_RON);
  const healthInsuranceRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyHealthInsuranceRon / 12
      : yearlyHealthInsuranceRon;
  const healthInsuranceCurrency = healthInsuranceRon / currency.rate;

  const accountingRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyPfaAccountingFees / 12
      : yearlyPfaAccountingFees;
  const accountingCurrency = accountingRon / currency.rate;

  const taxableIncome =
    debitCurrency -
    socialSecurityCurrency -
    healthInsuranceCurrency -
    accountingCurrency;
  const incomeTaxes = incomeTax(taxableIncome);

  const remaining = taxableIncome - incomeTaxes;

  return (
    <SalaryColumn name="PFA (sistem real)" afterTaxes={remaining}>
      <AccountingFees
        value={yearlyPfaAccountingFees}
        onChange={changeAccountingFees}
      />
      <RowSeparator />
      <ComputationRow name="CAS - 25%" value={socialSecurityCurrency} />
      <ComputationRow name="CASS - 10%" value={healthInsuranceCurrency} />
      <ComputationRow name="IV - 10%" value={incomeTaxes} />
      <RowSeparator />
      <RowSeparator />
      <RowSeparator />
      <RowSeparator />
    </SalaryColumn>
  );
};

export default PfaColumn;
