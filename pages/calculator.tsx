import Head from 'next/head';
import React from 'react';
import SalaryProvider from '../contexts/SalaryProvider';
import OrganisationComparison from '../components/pages/calculator/OrganisationComparison';
import AccountantDisclaimer from '../components/common/AccountantDisclaimer';
import { InferGetServerSidePropsType } from 'next';
import { Parser } from 'xml2js';
import { Currency, CurrencySymbol } from '../contexts/SalaryContext';
import OptionContainer from '../components/pages/calculator/OptionContainer';
import PaymentMethodPicker from '../components/pages/calculator/PaymentMethodPicker';

const xmlParser = new Parser();

const stringCurrencies = Object.values(CurrencySymbol).map((c) => c.valueOf());

type BnrCurrencyEntry = {
  _: string; // exchange rate
  $: {
    currency: string;
  };
};

export const getServerSideProps = async () => {
  // https://www.bnr.ro/Cursurile-pietei-valutare-in-format-XML-3424.aspx
  const bnrRates = await fetch('https://www.bnr.ro/nbrfxrates.xml')
    .then((response) => response.text())
    .then((txtContent) => xmlParser.parseStringPromise(txtContent))
    .then((parsedObject) => parsedObject.DataSet.Body[0].Cube[0].Rate)
    .then((rates) => {
      return rates.filter((entry: BnrCurrencyEntry) =>
        stringCurrencies.includes(entry['$'].currency)
      );
    });
  const currencyRates: Currency[] = bnrRates.map(
    (r: BnrCurrencyEntry): Currency => {
      return {
        symbol: r['$'].currency as CurrencySymbol,
        rate: parseFloat(r['_']),
      };
    }
  );

  return {
    props: {
      currencyRates,
    },
  };
};

const CalculatorPage = ({
  currencyRates,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <SalaryProvider currencyRates={currencyRates}>
      <Head>
        <title>Aitiști | Calculator venituri</title>
      </Head>
      <AccountantDisclaimer />
      <section>
        <OptionContainer />
        <PaymentMethodPicker />
        <OrganisationComparison />
      </section>
    </SalaryProvider>
  );
};

export default CalculatorPage;
