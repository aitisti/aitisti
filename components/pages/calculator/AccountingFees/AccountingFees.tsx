import styles from './AccountingFees.module.css';
import React from 'react';

type Props = {
  value: number;
  onChange: (v: number) => void;
};

const AccountingFees = ({ value, onChange }: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.currentTarget.valueAsNumber;
    if (Number.isNaN(val)) {
      val = 0;
    } else if (val < 0) {
      val = 0;
    }

    onChange(val);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Contabilitate</div>
      <input type="number" value={value} onChange={handleOnChange} />
      <div className={styles.ron}>{' RON/an'}</div>
    </div>
  );
};

export default AccountingFees;
