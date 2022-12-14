import Link from 'next/link';
import styles from './Header.module.css';
import React from 'react';
import DesktopNav from '../DesktopNav';
import MobileNav from '../MobileNav';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">aitiști</Link>
      </div>
      <div className={styles.filler} />
      <a
        href="https://github.com/aitisti/aitisti"
        target="_blank"
        rel="noreferrer"
      >
        <Image src="/github-mark.png" alt="github" width="32" height="32" />
      </a>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
