import React, { useState } from 'react';
import { FaThLarge, FaList } from 'react-icons/fa';
import styles from './Documents.module.css';

const Documents = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVendor, setSelectedVendor] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [showLatestOnly, setShowLatestOnly] = useState(true);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [isBulkAssignOpen, setIsBulkAssignOpen] = useState(false);

  const documents = [
    { id: 1, title: 'Document A', vendor: 'Vendor X', project: 'Project Alpha', rev: 1 },
    { id: 2, title: 'Document B', vendor: 'Vendor Y', project: 'Project Beta', rev: 3 },
    { id: 3, title: 'Document C', vendor: 'Vendor Z', project: 'Project Gamma', rev: 2 },
    // Add more documents here
  ];

  const handleViewToggle = (mode) => setViewMode(mode);

  const filteredDocuments = documents
    .filter(
      (doc) =>
        (selectedVendor === '' || doc.vendor === selectedVendor) &&
        (selectedProject === '' || doc.project === selectedProject) &&
        (!showLatestOnly || doc.rev === Math.max(...documents.map((d) => d.rev)))
    )
    .filter((doc) => doc.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDocumentSelect = (id) => {
    setSelectedDocuments((prev) =>
      prev.includes(id) ? prev.filter((docId) => docId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setSelectedDocuments(
      selectedDocuments.length === filteredDocuments.length
        ? []
        : filteredDocuments.map((doc) => doc.id)
    );
  };

  const handleBulkAssignOpen = () => setIsBulkAssignOpen(true);
  const handleBulkAssignClose = () => setIsBulkAssignOpen(false);

  return (
    <div className={styles.documentsContainer}>
      <h1 className={styles.title}>Document Dashboard</h1>

      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
        <button
          onClick={handleBulkAssignOpen}
          disabled={selectedDocuments.length === 0}
          className={styles.bulkAssignButton}
        >
          Bulk Assign
        </button>
      </section>

      <section className={styles.filterToggleSection}>
        <div className={styles.filters}>
          <label>
            Vendor:
            <select
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
              className={styles.select}
            >
              <option value="">All Vendors</option>
              <option value="Vendor X">Vendor X</option>
              <option value="Vendor Y">Vendor Y</option>
              <option value="Vendor Z">Vendor Z</option>
            </select>
          </label>

          <label>
            Project:
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className={styles.select}
            >
              <option value="">All Projects</option>
              <option value="Project Alpha">Project Alpha</option>
              <option value="Project Beta">Project Beta</option>
              <option value="Project Gamma">Project Gamma</option>
            </select>
          </label>

          <label className={styles.revToggleLabel}>
            Show Latest Revision Only:
            <input
              type="checkbox"
              checked={showLatestOnly}
              onChange={() => setShowLatestOnly(!showLatestOnly)}
              className={styles.revToggle}
            />
          </label>
        </div>

        <div
          className={`${styles.viewToggle} ${
            viewMode === 'grid' ? styles.activeGrid : styles.activeList
          }`}
        >
          <FaThLarge onClick={() => handleViewToggle('grid')} className={styles.icon} />
          <FaList onClick={() => handleViewToggle('list')} className={styles.icon} />
        </div>
      </section>

      <section className={styles.documentsDisplay}>
        {viewMode === 'grid' ? (
          <div className={styles.gridView}>
            <div className={styles.selectAllContainer}>
              <input
                type="checkbox"
                checked={selectedDocuments.length === filteredDocuments.length}
                onChange={handleSelectAll}
              />
              Select All
            </div>
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className={styles.documentCard}>
                <input
                  type="checkbox"
                  checked={selectedDocuments.includes(doc.id)}
                  onChange={() => handleDocumentSelect(doc.id)}
                />
                <div className={styles.pdfPreview}>📄</div>
                <p className={styles.documentTitle}>
                  {doc.title} - Rev {doc.rev}
                </p>
                <p className={styles.documentDetails}>Vendor: {doc.vendor}</p>
                <p className={styles.documentDetails}>Project: {doc.project}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul className={styles.listView}>
            <div className={styles.selectAllContainer}>
              <input
                type="checkbox"
                checked={selectedDocuments.length === filteredDocuments.length}
                onChange={handleSelectAll}
              />
              Select All
            </div>
            {filteredDocuments.map((doc) => (
              <li key={doc.id} className={styles.listItem}>
                <input
                  type="checkbox"
                  checked={selectedDocuments.includes(doc.id)}
                  onChange={() => handleDocumentSelect(doc.id)}
                />
                <p className={styles.documentTitle}>
                  {doc.title} - Rev {doc.rev}
                </p>
                <p className={styles.documentDetails}>Vendor: {doc.vendor}</p>
                <p className={styles.documentDetails}>Project: {doc.project}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {isBulkAssignOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Bulk Assign</h2>
            <form>
              <label>
                Vendor:
                <select className={styles.select}>
                  <option value="Vendor X">Vendor X</option>
                  <option value="Vendor Y">Vendor Y</option>
                  <option value="Vendor Z">Vendor Z</option>
                </select>
              </label>
              <label>
                Project:
                <select className={styles.select}>
                  <option value="Project Alpha">Project Alpha</option>
                  <option value="Project Beta">Project Beta</option>
                  <option value="Project Gamma">Project Gamma</option>
                </select>
              </label>
              <div className={styles.modalButtons}>
                <button type="submit" className={styles.modalButton}>
                  Assign
                </button>
                <button
                  type="button"
                  className={styles.modalButton}
                  onClick={handleBulkAssignClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
