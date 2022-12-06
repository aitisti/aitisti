import styles from './HourlyRate.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';

const HourlyRate = () => {
  const ctx = React.useContext(SalaryContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.valueAsNumber;
    if (Number.isNaN(val)) {
      val = 0;
    }
    ctx.changeHourlyRate(Math.max(0, val));
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Tarif pe oră:</div>
      <input
        type="number"
        value={ctx.state.hourlyRate}
        onChange={handleOnChange}
        disabled={ctx.state.paymentMethod === 'MONTHLY'}
      />
      <div className={styles.symbol}>{ctx.state.currency.symbol} (+ TVA)</div>
    </div>
  );
};

export default HourlyRate;
