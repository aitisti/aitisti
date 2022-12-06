import styles from './MobileNav.module.css';
import Link from 'next/link';
import React from 'react';

const MobileNav = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const handlePress = () => {
    setNavOpen((prevState) => !prevState);
  };

  const menuLineStyle = [
    styles.menuLine,
    navOpen ? styles.open : styles.closed,
  ].join(' ');

  const overlayStyle = [
    styles.overlay,
    ...(navOpen ? [] : [styles.overlayClosed]),
  ].join(' ');

  return (
    <>
      <div className={styles.mobileNav} onClick={handlePress}>
        <div className={styles.lineContainer}>
          <div className={menuLineStyle} />
          <div className={menuLineStyle} />
          <div className={menuLineStyle} />
        </div>
      </div>
      <div className={overlayStyle} onClick={handlePress}>
        <ul>
          <li>
            <Link href="/companii">Companii</Link>
          </li>
          <li>
            <Link href="/contractor">Contractor</Link>
          </li>
          <li className={styles.small}>
            <Link href="/calculator">Calculator venituri</Link>
          </li>
          <li>
            <Link href="/intrebari">Întrebări</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
