import styles from './CurrencyRow.module.css';
import { Currency } from '../../../../contexts/SalaryContext';

type Props = {
  fx: Currency;
};

const CurrencyRow = ({ fx }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.currency}>1 {fx.symbol} =</div>
      <div className={styles.rate}>{fx.rate} RON</div>
    </div>
  );
};

export default CurrencyRow;
