import styles from './OptionContainer.module.css';
import CurrencyPicker from '../CurrencyPicker';
import LegalMinimumSalary from '../LegalMinimumSalary';
import PeriodPicker from '../PeriodPicker';
import React from 'react';
import CurrencyRow from '../CurrencyRow';
import SalaryContext from '../../../../contexts/SalaryContext';

const OptionContainer = () => {
  const { currencyRates } = React.useContext(SalaryContext);

  return (
    <div className={styles.container}>
      <div className={styles.right}>
        {currencyRates.map((r) => (
          <CurrencyRow key={r.symbol} fx={r} />
        ))}
      </div>
      <div className={styles.left}>
        <CurrencyPicker />
        <LegalMinimumSalary />
        <PeriodPicker />
      </div>
    </div>
  );
};

export default OptionContainer;
