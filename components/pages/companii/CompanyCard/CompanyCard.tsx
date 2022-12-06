import styles from './CompanyCard.module.css';
import { CompanyModel } from '../../../../types/CompanyModel';

type Props = {
  company: CompanyModel;
};

const CompanyCard = ({ company }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <div className={styles.name}>{company.name}</div>
    </div>
  );
};

export default CompanyCard;
