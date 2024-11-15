import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navLabel}>DEV NAVIGATION</li>
        <li className={styles.navItem}><Link to="/">Dashboard</Link></li>
        <li className={styles.navItem}><Link to="/upload">Upload</Link></li>
        <li className={styles.navItem}><Link to="/vendors">Vendors</Link></li>
        <li className={styles.navItem}><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
