import styles from './SalaryColumn.module.css';
import React from 'react';
import ComputationRow from '../ComputationRow';
import RowSeparator from '../RowSeparator';
import SalaryContext, {
  BillingPeriod,
} from '../../../../contexts/SalaryContext';

type Props = {
  name: string;
  children: React.ReactNode | React.ReactNode[];
  afterTaxes: number;
};

const SalaryColumn = ({ name, children, afterTaxes }: Props) => {
  const { currency, billingPeriod } = React.useContext(SalaryContext).state;

  const period = billingPeriod === BillingPeriod.MONTHLY ? 'lunar' : 'anual';
  const lastRow = `Venit ${period} net (${currency.symbol})`;

  return (
    <div className={styles.column}>
      <div className={styles.colTitle}>{name}</div>
      {children}
      <RowSeparator />
      <ComputationRow name={lastRow} value={afterTaxes} accent />
    </div>
  );
};

export default SalaryColumn;
