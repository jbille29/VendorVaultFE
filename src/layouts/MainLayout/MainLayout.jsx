
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
