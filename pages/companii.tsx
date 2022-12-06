import Head from 'next/head';
import CompanyContainer from '../components/pages/companii/CompanyContainer';
import FilterGroup from '../components/pages/companii/FilterGroup';
import styles from '../styles/CompaniesPage.module.css';
import {
  CompanyModel,
  CompanyType,
  CompanyLocation,
  CompanyField,
} from '../types/CompanyModel';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import contentfulClient from '../lib/contentful/client';

const types = Object.values(CompanyType);
const locations = Object.values(CompanyLocation);
const fields = Object.values(CompanyField);
const tech = [
  'Java',
  'C#',
  'Node.js',
  'Angular',
  'React',
  'Vue',
  'Django',
  'Ruby',
  'Go',
];

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await contentfulClient.getEntries({
    content_type: 'company',
    order: 'fields.name',
  });
  const companies: CompanyModel[] = res.items.map((i) => {
    const other = i.fields as Omit<CompanyModel, 'id'>;
    return {
      id: i.sys.id,
      ...other,
    };
  });

  return {
    props: { companies },
  };
};

const CompaniesPage = ({
  companies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Aitiști | Companii</title>
      </Head>
      <section className={styles.filterGroups}>
        <FilterGroup name="Tip" filters={types} />
        <FilterGroup name="Domenii" filters={fields} />
        <FilterGroup name="Locații" filters={locations} />
        <FilterGroup name="Tehnologii" filters={tech} />
      </section>
      <CompanyContainer companies={companies} />
    </>
  );
};

export default CompaniesPage;
