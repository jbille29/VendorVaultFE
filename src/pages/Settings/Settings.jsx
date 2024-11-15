import React, { useState } from 'react';
import styles from './Settings.module.css';

const Settings = () => {
  // State for notification toggles
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  // Handlers for toggling notifications
  const handleEmailToggle = () => setEmailNotifications(!emailNotifications);
  const handleSmsToggle = () => setSmsNotifications(!smsNotifications);

  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.title}>Settings</h1>

      {/* Notification Settings */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Notification Settings</h2>
        <div className={styles.toggle}>
          <label>Email Notifications</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={handleEmailToggle}
          />
        </div>
        <div className={styles.toggle}>
          <label>SMS Notifications</label>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={handleSmsToggle}
          />
        </div>
      </section>

      {/* Account Management */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Account Management</h2>
        <form className={styles.form}>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" className={styles.input} />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" className={styles.input} />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter new password" className={styles.input} />
          </label>
          <button type="submit" className={styles.saveButton}>Save Changes</button>
        </form>
      </section>
    </div>
  );
};

export default Settings;
