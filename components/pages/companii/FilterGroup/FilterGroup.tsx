import styles from './FilterGroup.module.css';

type Props = {
  name: string;
  filters: string[];
};

const FilterGroup = ({ name, filters }: Props) => {
  return (
    <div className={styles.group}>
      <div className={styles.title}>{name}</div>
      <ul>
        {filters.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
