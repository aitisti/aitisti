import styles from './SrlColumn.module.css';
import SalaryColumn from '../SalaryColumn';
import ComputationRow from '../ComputationRow';
import React from 'react';
import {
  healthInsurance,
  monthlyIncomeFromHourlyRate,
  socialSecurity,
  incomeTax,
  yearlyDividendTaxes,
  yearlyProfitTaxes,
  employerTaxes,
  SMB_RON,
  CEILING_24,
  TAXABLE_SMB_RON,
  SMB_WRITE_OFF,
} from '../../../../domain/salaryComputations';
import SalaryContext, {
  BillingPeriod,
} from '../../../../contexts/SalaryContext';
import RowSeparator from '../RowSeparator';
import AccountingFees from '../AccountingFees';

const SrlColumn = () => {
  const {
    monthlySalary,
    billingPeriod,
    paymentMethod,
    hourlyRate,
    offDays,
    currency,
    yearlySrlAccountingFees,
  } = React.useContext(SalaryContext).state;

  const changeAccountingFees =
    React.useContext(SalaryContext).changeYearlySrlAccountingFees;

  const monthlyCurrency =
    paymentMethod === 'MONTHLY'
      ? monthlySalary
      : monthlyIncomeFromHourlyRate(hourlyRate, offDays);

  const yearlyCurrency = 12 * monthlyCurrency;

  const yearlyBeforeRon = yearlyCurrency * currency.rate;

  const yearlySocialSecurityRon = 12 * socialSecurity(TAXABLE_SMB_RON);
  const socialSecurityRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlySocialSecurityRon / 12
      : yearlySocialSecurityRon;
  const socialSecurityCurrency = socialSecurityRon / currency.rate;

  const yearlyHealthInsuranceRon = 12 * healthInsurance(TAXABLE_SMB_RON);
  const healthInsuranceRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyHealthInsuranceRon / 12
      : yearlyHealthInsuranceRon;
  const healthInsuranceCurrency = healthInsuranceRon / currency.rate;

  const yearlyEmployerTaxesRon = 12 * employerTaxes(SMB_RON);
  const employerTaxesRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyEmployerTaxesRon / 12
      : yearlyEmployerTaxesRon;
  const employerTaxesCurrency = employerTaxesRon / currency.rate;

  const yearlyEmployeeIncomeTaxRon = incomeTax(
    12 * TAXABLE_SMB_RON -
      yearlySocialSecurityRon -
      yearlyHealthInsuranceRon -
      12 * SMB_WRITE_OFF
  );
  const employeeIncomeTaxRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyEmployeeIncomeTaxRon / 12
      : yearlyEmployeeIncomeTaxRon;
  const employeeIncomeTaxCurrency = employeeIncomeTaxRon / currency.rate;

  const yearlyEmployeeSalaryRon =
    12 * SMB_RON -
    yearlySocialSecurityRon -
    yearlyHealthInsuranceRon -
    yearlyEmployeeIncomeTaxRon;

  const yearlyProfitTaxesCurrency = yearlyProfitTaxes(yearlyCurrency);
  const profitTaxesCurrency =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyProfitTaxesCurrency / 12
      : yearlyProfitTaxesCurrency;

  const yearlyAfterPayingEmployeeAndAccountingRon =
    yearlyBeforeRon -
    12 * SMB_RON -
    yearlyEmployerTaxesRon -
    yearlySrlAccountingFees;

  const yearlyDividendsBeforeRon =
    yearlyAfterPayingEmployeeAndAccountingRon -
    yearlyProfitTaxesCurrency * currency.rate;

  const yearlyDividendsTaxRon = yearlyDividendTaxes(yearlyDividendsBeforeRon);
  const dividendsTaxRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyDividendsTaxRon / 12
      : yearlyDividendsTaxRon;
  const dividendsTaxCurrency = dividendsTaxRon / currency.rate;

  const yearlyNetDividendsRon =
    yearlyDividendsBeforeRon - yearlyDividendsTaxRon;

  const yearlyDividendsHealthInsuranceRon =
    (yearlyNetDividendsRon >= CEILING_24 ? 24 : 12) * healthInsurance(SMB_RON);
  const dividendsHealthInsuranceRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyDividendsHealthInsuranceRon / 12
      : yearlyDividendsHealthInsuranceRon;
  const dividendsHealthInsuranceCurrency =
    dividendsHealthInsuranceRon / currency.rate;

  const yearlyRemainingRon =
    yearlyNetDividendsRon -
    yearlyDividendsHealthInsuranceRon +
    yearlyEmployeeSalaryRon;
  const remainingRon =
    billingPeriod === BillingPeriod.MONTHLY
      ? yearlyRemainingRon / 12
      : yearlyRemainingRon;
  const remaining = remainingRon / currency.rate;

  return (
    <SalaryColumn name="SRL (unic angajat)" afterTaxes={remaining}>
      <AccountingFees
        value={yearlySrlAccountingFees}
        onChange={changeAccountingFees}
      />
      <RowSeparator />
      <ComputationRow name="CAS - 25% SMB" value={socialSecurityCurrency} />
      <ComputationRow name="CASS - 10% SMB" value={healthInsuranceCurrency} />
      <ComputationRow name="CAM - 2.25% SMB" value={employerTaxesCurrency} />
      <ComputationRow name="IV - 10% SMB" value={employeeIncomeTaxCurrency} />
      <ComputationRow name="IP - 1%" value={profitTaxesCurrency} />
      <ComputationRow name="ID - 8%" value={dividendsTaxCurrency} />
      <ComputationRow name="CASSD" value={dividendsHealthInsuranceCurrency} />
    </SalaryColumn>
  );
};

export default SrlColumn;
