import React from 'react';
import SalaryColumn from '../SalaryColumn';
import ComputationRow from '../ComputationRow';
import {
  healthInsurance,
  incomeTax,
  socialSecurity,
  monthlyIncomeFromHourlyRate,
} from '../../../../domain/salaryComputations';
import SalaryContext, {
  BillingPeriod,
} from '../../../../contexts/SalaryContext';
import TaxExemptionRow from '../TaxExemptionRow';
import RowSeparator from '../RowSeparator';

const CimColumn = () => {
  const {
    monthlySalary,
    taxExempt,
    billingPeriod,
    paymentMethod,
    hourlyRate,
    offDays,
  } = React.useContext(SalaryContext).state;

  const monthly =
    paymentMethod === 'MONTHLY'
      ? monthlySalary
      : monthlyIncomeFromHourlyRate(hourlyRate, offDays);

  const debit =
    billingPeriod === BillingPeriod.MONTHLY ? monthly : 12 * monthly;

  const socialSecurityCurrency = socialSecurity(debit);
  const healthContributionsCurrency = healthInsurance(debit);
  const taxableIncome =
    debit - socialSecurityCurrency - healthContributionsCurrency;
  const incomeTaxes = incomeTax(taxableIncome);

  const remaining =
    debit -
    socialSecurityCurrency -
    healthContributionsCurrency -
    (taxExempt ? 0 : incomeTaxes);

  return (
    <SalaryColumn name="CIM" afterTaxes={remaining}>
      <TaxExemptionRow />
      <RowSeparator />
      <ComputationRow name="CAS - 25%" value={socialSecurityCurrency} />
      <ComputationRow name="CASS - 10%" value={healthContributionsCurrency} />
      <ComputationRow name="IV - 10%" value={incomeTaxes} exempt={taxExempt} />
      <RowSeparator />
      <RowSeparator />
      <RowSeparator />
      <RowSeparator />
    </SalaryColumn>
  );
};

export default CimColumn;
