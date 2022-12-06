import styles from './PeriodPicker.module.css';
import MultiValuePicker from '../../../atoms/MultiValuePicker';
import SalaryContext, { BillingPeriod } from '../../../../contexts/SalaryContext';
import React from 'react';

const PeriodPicker = () => {
  const ctx = React.useContext(SalaryContext);

  return (
    <div className={styles.container}>
      <div className={styles.name}>Calcule</div>
      <MultiValuePicker
        values={Object.values(BillingPeriod)}
        selected={ctx.state.billingPeriod}
        onSelect={ctx.changeBillingPeriod}
      />
    </div>
  );
};

export default PeriodPicker;
