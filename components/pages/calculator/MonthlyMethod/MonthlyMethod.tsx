import styles from './MonthlyMethod.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';
import MonthlySalary from '../MonthlySalary';
import YearlyIncomeBeforeTaxes from '../YearlyIncomeBeforeTaxes';
import RowSeparator from '../RowSeparator';

const MonthlyMethod = () => {
  const ctx = React.useContext(SalaryContext);

  const isMethodUsed = ctx.state.paymentMethod === 'MONTHLY';

  const monthlyClass = [
    styles.monthly,
    ...(isMethodUsed ? [styles.active] : []),
  ].join(' ');

  const handleClick = () => {
    if (!isMethodUsed) {
      ctx.changePaymentMethod('MONTHLY');
    }
  };

  return (
    <div className={monthlyClass} onClick={handleClick}>
      <div className={styles.header}>
        <input
          type="radio"
          checked={isMethodUsed}
          className={styles.radio}
          readOnly
        />
        <div className={styles.title}>Tarif lunar</div>
      </div>
      <MonthlySalary />
      <RowSeparator />
      <RowSeparator />
      <RowSeparator />
      <YearlyIncomeBeforeTaxes monthly={true} />
    </div>
  );
};

export default MonthlyMethod;
