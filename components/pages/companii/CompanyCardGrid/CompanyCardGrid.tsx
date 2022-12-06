import styles from './CompanyCardGrid.module.css';
import { CompanyModel } from '../../../../types/CompanyModel';
import CompanyCard from '../CompanyCard';

type Props = {
  companies: CompanyModel[];
};

const CompanyCardGrid = ({ companies }: Props) => {
  return (
    <div className={styles.container}>
      {companies.map((c) => (
        <CompanyCard key={c.id} company={c} />
      ))}
    </div>
  );
};

export default CompanyCardGrid;
