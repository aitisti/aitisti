import styles from './MonthlySalary.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';

const MonthlySalary = () => {
  const ctx = React.useContext(SalaryContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.valueAsNumber;
    if (Number.isNaN(val)) {
      val = 0;
    }
    ctx.changeMonthlySalary(Math.max(0, val));
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Venit lunar brut</div>
      <input
        type="number"
        value={ctx.state.monthlySalary}
        onChange={handleOnChange}
        disabled={ctx.state.paymentMethod === 'HOURLY'}
      />
      <div>{ctx.state.currency.symbol}</div>
    </div>
  );
};

export default MonthlySalary;
