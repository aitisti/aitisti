import Link from 'next/link';
import styles from './Header.module.css';
import React from 'react';
import DesktopNav from '../DesktopNav';
import MobileNav from '../MobileNav';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">aitiști</Link>
      </div>
      <div className={styles.filler} />
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
