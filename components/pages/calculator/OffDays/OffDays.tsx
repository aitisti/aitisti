import styles from './OffDays.module.css';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';
import {
  MAX_OFF_DAYS,
  MIN_OFF_DAYS,
} from '../../../../domain/salaryComputations';

const OffDays = () => {
  const ctx = React.useContext(SalaryContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.valueAsNumber;
    if (Number.isNaN(val)) {
      val = 0;
    } else if (val < MIN_OFF_DAYS) {
      val = MIN_OFF_DAYS;
    } else if (val > MAX_OFF_DAYS) {
      val = MAX_OFF_DAYS;
    }

    ctx.changeOffDays(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Zile libere: </div>
      <input
        type="number"
        value={ctx.state.offDays}
        onChange={handleOnChange}
        disabled={ctx.state.paymentMethod === 'MONTHLY'}
      />
      <div className={styles.outOf}>/ 260</div>
    </div>
  );
};

export default OffDays;
