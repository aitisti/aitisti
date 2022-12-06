import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
