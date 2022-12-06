import styles from './HoursWorked.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';

const HoursWorked = () => {
  const ctx = React.useContext(SalaryContext);

  const hoursWorked = (260 - ctx.state.offDays) * 8;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>Ore facturate pe an:</div>
        <div>(260 - {ctx.state.offDays}) zile * 8 ore/zi</div>
      </div>
      <div className={styles.right}>{hoursWorked} ore</div>
    </div>
  );
};

export default HoursWorked;
