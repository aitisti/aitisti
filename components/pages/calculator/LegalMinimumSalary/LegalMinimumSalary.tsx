import styles from './LegalMinimumSalary.module.css';
import SalaryContext, {
  CurrencySymbol,
} from '../../../../contexts/SalaryContext';
import React from 'react';
import { SMB_RON } from '../../../../domain/salaryComputations';

const LegalMinimumSalary = () => {
  const ctx = React.useContext(SalaryContext);

  const notRon = ctx.state.currency.symbol !== CurrencySymbol.RON;

  const minSalary = SMB_RON / ctx.state.currency.rate;

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        Salariul minim brut lunar (SMB) pe 2023:
      </div>
      <div className={styles.both}>
        <div className={styles.value}>
          {minSalary.toFixed(0)} {ctx.state.currency.symbol}
        </div>
        {notRon && <div className={styles.back}>({SMB_RON} RON)</div>}
      </div>
    </div>
  );
};

export default LegalMinimumSalary;
