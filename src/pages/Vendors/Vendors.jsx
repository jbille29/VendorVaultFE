import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge, FaList } from 'react-icons/fa';
import styles from './Vendors.module.css';

const Vendors = () => {
  const [isAddVendorOpen, setIsAddVendorOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const vendors = [
    { id: 1, name: 'Vendor A', company: 'Example Corp', email: 'vendor@example.com' },
    { id: 2, name: 'Vendor B', company: 'Sample Co', email: 'vendorb@sample.com' },
    // Add more vendors as needed
  ];

  const handleViewToggle = (mode) => setViewMode(mode);
  const handleAddVendorOpen = () => setIsAddVendorOpen(true);
  const handleAddVendorClose = () => setIsAddVendorOpen(false);

  const filteredVendors = vendors.filter(vendor =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.vendorsContainer}>
      <h1 className={styles.title}>Vendors</h1>

      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search vendors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
        <button onClick={handleAddVendorOpen} className={styles.addVendorButton}>
          Add New Vendor
        </button>
      </section>

      <section className={styles.filterToggleSection}>
        <div
          className={`${styles.viewToggle} ${
            viewMode === 'grid' ? styles.activeGrid : styles.activeList
          }`}
        >
          <FaThLarge onClick={() => handleViewToggle('grid')} className={styles.icon} />
          <FaList onClick={() => handleViewToggle('list')} className={styles.icon} />
        </div>
      </section>

      <section className={styles.vendorsDisplay}>
        {viewMode === 'grid' ? (
          <div className={styles.gridView}>
            {filteredVendors.map((vendor) => (
              <div key={vendor.id} className={styles.vendorCard}>
                <Link to={`/vendors/${vendor.id}`} className={styles.vendorLink}>
                  <div className={styles.pdfPreview}>🏢</div>
                  <h3 className={styles.vendorName}>{vendor.name}</h3>
                  <p className={styles.vendorDetails}>Company: {vendor.company}</p>
                  <p className={styles.vendorDetails}>Email: {vendor.email}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <ul className={styles.listView}>
            {filteredVendors.map((vendor) => (
              <li key={vendor.id} className={styles.listItem}>
                <Link to={`/vendors/${vendor.id}`} className={styles.vendorLink}>
                  <h3 className={styles.vendorName}>{vendor.name}</h3>
                  <p className={styles.vendorDetails}>Company: {vendor.company}</p>
                  <p className={styles.vendorDetails}>Email: {vendor.email}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Add Vendor Modal */}
      {isAddVendorOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Add New Vendor</h2>
            <form>
              <label>
                Name:
                <input type="text" placeholder="Vendor Name" required className={styles.input} />
              </label>
              <label>
                Company:
                <input type="text" placeholder="Company Name" required className={styles.input} />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Email Address" required className={styles.input} />
              </label>
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.modalButton}>Add Vendor</button>
                <button type="button" className={styles.modalButton} onClick={handleAddVendorClose}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendors;
