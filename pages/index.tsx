import Head from 'next/head';
import styles from '../styles/HomePage.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.side}>
          <p>Intră în cea mai</p>
          <p className={styles.middle}>...aitistă</p>
          <p className={styles.heroTitle}>comunitate!</p>
        </div>
        <div className={styles.side}>
          <div className={styles.buttonContainer}>
            <a href="https://discord.gg/Fh7vPYY7Gt" className={styles.button}>
              Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className={styles.mission}>
      <p>
        {
          'Vrem să aducem într-un singur loc toate comunitățile de IT din România, fie că vorbim despre '
        }
        <a
          href="https://www.reddit.com/r/programare/"
          className={styles.programare}
        >
          r/programare
        </a>
        {', '}
        <a href="https://forum.softpedia.com/" className={styles.softpedia}>
          Forum Softpedia
        </a>
        {', '}
        <a href="https://devforum.ro/" className={styles.devforum}>
          devforum.ro
        </a>
        {' sau altele'}
      </p>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Aitiști</title>
        <meta
          name="google-site-verification"
          content="VOBPBLM-LZTheGVGY8KJ0togEqz_4IsC6i_tM_htJrc"
        />
      </Head>
      <Hero />
      <Mission />
    </>
  );
};

export default HomePage;
