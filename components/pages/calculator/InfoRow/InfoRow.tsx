import styles from './InfoRow.module.css';

type Props = {
  info: string;
};

const InfoRow = ({ info }: Props) => {
  return <div className={styles.container}>{info}</div>;
};

export default InfoRow;
