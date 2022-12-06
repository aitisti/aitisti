import styles from './MonthlyIncomeBeforeTaxes.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';
import { monthlyIncomeFromHourlyRate } from '../../../../domain/salaryComputations';

const MonthlyIncomeBeforeTaxes = () => {
  const { hourlyRate, offDays, currency } =
    React.useContext(SalaryContext).state;

  const monthlyRate = monthlyIncomeFromHourlyRate(hourlyRate, offDays);

  return (
    <div className={styles.container}>
      <div className={styles.left}>Venit lunar brut</div>
      <div className={styles.right}>
        {monthlyRate.toFixed(0)} {currency.symbol}
      </div>
    </div>
  );
};

export default MonthlyIncomeBeforeTaxes;
