import Head from 'next/head';
import styles from '../styles/NotFoundPage.module.css';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Aitiști | 404 </title>
      </Head>
      <section className={styles.container}>
        <p>Această pagină nu a fost găsită :(</p>
        <Link href="/">Hai acasă!</Link>
      </section>
    </>
  );
};

export default NotFoundPage;
