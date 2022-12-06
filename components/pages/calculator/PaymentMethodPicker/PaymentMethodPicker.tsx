import styles from './PaymentMethodPicker.module.css';
import MonthlyMethod from '../MonthlyMethod';
import HourlyMethod from '../HourlyMethod';
import React from 'react';

const PaymentMethodPicker = () => {
  return (
    <div className={styles.container}>
      <MonthlyMethod />
      <HourlyMethod />
    </div>
  );
};

export default PaymentMethodPicker;
