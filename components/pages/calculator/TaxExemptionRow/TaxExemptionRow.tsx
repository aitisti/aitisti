import styles from './TaxExemptionRow.module.css';
import SalaryContext from '../../../../contexts/SalaryContext';
import React from 'react';

const TaxExemptionRow = () => {
  const ctx = React.useContext(SalaryContext);

  return (
    <div className={styles.container}>
      <input
        type={'checkbox'}
        checked={ctx.state.taxExempt}
        onChange={ctx.changeTaxExemption}
        className={styles.checkbox}
      />
      <div>Scutit impozit</div>
    </div>
  );
};

export default TaxExemptionRow;
