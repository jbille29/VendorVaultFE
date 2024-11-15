import React from 'react';
import styles from './Dashboard.module.css';
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const notificationCount = 3;

  const recentDocuments = [
    { id: 1, title: "Document A", date: "2 days ago", needsApproval: true },
    { id: 2, title: "Document B", date: "1 week ago", needsApproval: false }
  ];

  const handleViewDocumentsClick = () => {
    navigate(`/documents`);
  };
  
  const handleUploadClick = () => {
    navigate(`/upload`);
  };

  const handleViewVendorsClick = () => {
    navigate(`/vendors`);
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.notificationIcon}>
          <span className={styles.icon}>🔔</span>
          {notificationCount > 0 && (
            <span className={styles.badge}>{notificationCount}</span>
          )}
      </div>
      
      <p className={styles.welcomeMessage}>Welcome back, [User]! Here’s an overview of your recent activity.</p>

      <div className={styles.quickActions}>
        <button onClick={handleViewDocumentsClick} className={styles.actionButton}>View Documents</button>
        <button onClick={handleUploadClick} className={styles.actionButton}>Upload</button>
        <button onClick={handleViewVendorsClick} className={styles.actionButton}>View All Vendors</button>
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Documents</h2>
        <ul className={styles.documentList}>
          {recentDocuments.map(doc => (
            <li key={doc.id} className={styles.documentItem}>
              {doc.title} - {doc.date}
              {doc.needsApproval && <span className={styles.approvalTag}>Pending Approval</span>}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pending Approvals</h2>
        <ul className={styles.documentList}>
          <li className={styles.documentItem}>Document C - Needs Approval</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Notifications</h2>
        <p className={styles.notification}>No new notifications</p>
      </section>
    </div>
  );
};

export default Dashboard;
