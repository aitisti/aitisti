import styles from './CurrencyPicker.module.css';
import React from 'react';
import SalaryContext, {
  CurrencySymbol,
} from '../../../../contexts/SalaryContext';
import MultiValuePicker from '../../../atoms/MultiValuePicker';

const CurrencyPicker = () => {
  const ctx = React.useContext(SalaryContext);

  return (
    <div className={styles.container}>
      <div className={styles.name}>Moneda: </div>
      <MultiValuePicker
        values={Object.values(CurrencySymbol)}
        selected={ctx.state.currency.symbol}
        onSelect={ctx.changeCurrency}
      />
    </div>
  );
};

export default CurrencyPicker;
