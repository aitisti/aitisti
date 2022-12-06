import { CompanyModel } from '../../../../types/CompanyModel';
import styles from './CompanyContainer.module.css';
import CompanyCardGrid from '../CompanyCardGrid';

type RowProps = {
  company: CompanyModel;
};

const Row = ({ company }: RowProps) => {
  return (
    <tr className={styles.row}>
      <td className={styles.nameColumn}>{company.name}</td>
      <td className={styles.typeColumn}>
        <span className={styles.bubble}>{company.type}</span>
      </td>
      <td className={styles.fieldsColumn}>
        <ul className={styles.cellList}>
          {company.fields.map((f, i) => (
            <li key={i}>
              <span className={styles.bubble}>{f}</span>
            </li>
          ))}
        </ul>
      </td>
      <td className={styles.locationsColumn}>
        <ul className={styles.cellList}>
          {company.locations.map((l, i) => (
            <li key={i}>
              <span className={styles.bubble}>{l}</span>
            </li>
          ))}
        </ul>
      </td>
      <td className={styles.techColumn}>
        <ul className={styles.cellList}>
          {company.tech.map((t, i) => (
            <li key={i}>
              <span className={styles.bubble}>{t}</span>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

type TableProps = {
  companies: CompanyModel[];
};

const CompanyTable = ({ companies }: TableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headRow}>
          <th className={styles.nameColumn}>Denumire</th>
          <th className={styles.typeColumn}>Tip</th>
          <th className={styles.fieldsColumn}>Domenii</th>
          <th className={styles.locationsColumn}>Locații</th>
          <th className={styles.techColumn}>Tehnologii</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((c) => (
          <Row key={c.id} company={c} />
        ))}
      </tbody>
    </table>
  );
};

const CompanyContainer = ({ companies }: TableProps) => {
  return (
    <>
      {companies.length === 0 ? (
        'Nu cunoaștem nicio companie care să respecte aceste filtre'
      ) : (
        <>
          <CompanyTable companies={companies} />
          <CompanyCardGrid companies={companies} />
        </>
      )}
    </>
  );
};

export default CompanyContainer;
