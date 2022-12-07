import styles from './DesktopNav.module.css';
import Link from 'next/link';
import React from 'react';

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/intrebari">Întrebări</Link>
          <div className={styles.children}>
            <Link href="/carti">Cărți</Link>
            <Link href="/filme-seriale">Filme și seriale</Link>
          </div>
        </li>
        <li>
          <Link href="/contractor">Contractor</Link>
          <div className={styles.children}>
            <Link href="/calculator">Calculator venituri</Link>
          </div>
        </li>
        <li>
          <Link href="/companii">Companii</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
