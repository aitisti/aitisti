import styles from './HourlyMethod.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';
import HourlyRate from '../HourlyRate';
import OffDays from '../OffDays';
import HoursWorked from '../HoursWorked';
import YearlyIncomeBeforeTaxes from '../YearlyIncomeBeforeTaxes';
import MonthlyIncomeBeforeTaxes from '../MonthlyIncomeBeforeTaxes';

const HourlyMethod = () => {
  const ctx = React.useContext(SalaryContext);

  const isMethodUsed = ctx.state.paymentMethod === 'HOURLY';

  const hourlyClass = [
    styles.hourly,
    ...(isMethodUsed ? [styles.active] : []),
  ].join(' ');

  const handleClick = () => {
    if (!isMethodUsed) {
      ctx.changePaymentMethod('HOURLY');
    }
  };

  return (
    <div className={hourlyClass} onClick={handleClick}>
      <div className={styles.header}>
        <input
          type="radio"
          checked={isMethodUsed}
          className={styles.radio}
          readOnly
        />
        <div className={styles.title}>Tarif pe oră</div>
      </div>
      <HourlyRate />
      <OffDays />
      <HoursWorked />
      <MonthlyIncomeBeforeTaxes />
      <YearlyIncomeBeforeTaxes monthly={false} />
    </div>
  );
};

export default HourlyMethod;
