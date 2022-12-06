import styles from './ComputationRow.module.css';
import React from 'react';

type Props = {
  name: string;
  value: number;
  exempt?: boolean;
  accent?: boolean;
};

const ComputationRow = ({ name, value, exempt, accent }: Props) => {
  const nameClass = [
    styles.name,
    ...(exempt ? [styles.exempt] : []),
    ...(accent ? [styles.accent] : []),
  ].join(' ');
  const valClass = [
    styles.value,
    ...(exempt ? [styles.exempt] : []),
    ...(accent ? [styles.accent] : []),
  ].join(' ');

  return (
    <div className={styles.container}>
      <div className={nameClass}>{name}</div>
      <div className={valClass}>{value.toFixed(0)}</div>
    </div>
  );
};

ComputationRow.defaultProps = {
  void: false,
};

export default ComputationRow;
