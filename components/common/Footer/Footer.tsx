import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        © {new Date().getFullYear()} aitisti.ro
      </div>
    </footer>
  );
};

export default Footer;
