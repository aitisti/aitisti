import styles from './OrganisationComparison.module.css';
import CimColumn from '../CimColumn';
import PfaColumn from '../PfaColumn';
import SrlColumn from '../SrlColumn';
import React from 'react';
import SalaryContext from '../../../../contexts/SalaryContext';
import {
  monthlyIncomeFromHourlyRate,
  SMB_RON,
} from '../../../../domain/salaryComputations';

const OrganisationComparison = () => {
  const { monthlySalary, paymentMethod, offDays, hourlyRate, currency } =
    React.useContext(SalaryContext).state;

  const daniMocanu =
    (paymentMethod === 'MONTHLY' && monthlySalary > 99999) ||
    (paymentMethod === 'HOURLY' && hourlyRate > 999);

  const grindset = paymentMethod === 'HOURLY' && offDays == 0;

  const monthlyCurrency =
    paymentMethod === 'MONTHLY'
      ? monthlySalary
      : monthlyIncomeFromHourlyRate(hourlyRate, offDays);
  const monthlySalaryRon = monthlyCurrency * currency.rate;
  const sarakie = monthlySalaryRon < SMB_RON;

  return daniMocanu ? (
    <div className={styles.message}>
      <iframe
        src="https://www.youtube.com/embed/rTeObJmb7hQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : grindset ? (
    <div className={styles.message}>
      <iframe
        src="https://www.youtube.com/embed/sFuzosj6EHs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : sarakie ? (
    <div className={styles.message}>
      Venitul lunar brut este mai mic decât salariul minim brut pe economie pe
      2023.
    </div>
  ) : (
    <div className={styles.comparison}>
      <CimColumn />
      <PfaColumn />
      <SrlColumn />
    </div>
  );
};

export default OrganisationComparison;
