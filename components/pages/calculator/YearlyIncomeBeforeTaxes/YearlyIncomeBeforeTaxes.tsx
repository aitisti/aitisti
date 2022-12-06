import styles from './YearlyIncomeBeforeTaxes.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';
import { yearlyIncomeFromHourlyRate } from '../../../../domain/salaryComputations';

type Props = {
  monthly: boolean;
};

const YearlyIncomeBeforeTaxes = ({ monthly }: Props) => {
  const ctx = React.useContext(SalaryContext);

  const yearlyRate = monthly
    ? 12 * ctx.state.monthlySalary
    : yearlyIncomeFromHourlyRate(ctx.state.hourlyRate, ctx.state.offDays);

  return (
    <div className={styles.container}>
      <div className={styles.left}>Venit anual brut</div>
      <div className={styles.right}>
        {yearlyRate} {ctx.state.currency.symbol}
      </div>
    </div>
  );
};

export default YearlyIncomeBeforeTaxes;
