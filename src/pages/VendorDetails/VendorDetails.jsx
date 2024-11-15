import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaThLarge, FaList } from 'react-icons/fa';
import styles from './VendorDetails.module.css';

const VendorDetails = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [showLatestOnly, setShowLatestOnly] = useState(true);

  const navigate = useNavigate();

  const drawings = [
    { id: 1, title: 'Drawing 1', project: 'Project A', rev: 1 },
    { id: 2, title: 'Drawing 2', project: 'Project B', rev: 3 },
    { id: 3, title: 'Drawing 3', project: 'Project A', rev: 2 },
    // ...rest of drawings
  ];

  const handleViewToggle = (mode) => setViewMode(mode);

  const filteredDrawings = drawings
    .filter((drawing) =>
      (selectedProject === '' || drawing.project === selectedProject) &&
      (!showLatestOnly || drawing.rev === Math.max(...drawings.map((d) => d.rev)))
    )
    .filter((drawing) => drawing.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Navigate to Drawing Details Page on Click
  const handleDrawingClick = (id) => {
    navigate(`/document/${id}`);
  };

  return (
    <div className={styles.vendorDetailsContainer}>
      <h1 className={styles.title}>Company A</h1>

      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search drawings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBar}
        />
      </section>

      <section className={styles.filterToggleSection}>
        <div className={styles.filters}>
          <label>
            Project:
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className={styles.select}
            >
              <option value="">All Projects</option>
              <option value="Project A">Project A</option>
              <option value="Project B">Project B</option>
              <option value="Project C">Project C</option>
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

      <section className={styles.drawingsContainer}>
        {viewMode === 'grid' ? (
          <div className={styles.gridView}>
            {filteredDrawings.map((drawing) => (
              <div
                key={drawing.id}
                className={styles.drawingCard}
                onClick={() => handleDrawingClick(drawing.id)}
              >
                <div className={styles.pdfPreview}>📄</div>
                <p className={styles.drawingTitle}>
                  {drawing.title} - Rev {drawing.rev}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <ul className={styles.listView}>
            {filteredDrawings.map((drawing) => (
              <li
                key={drawing.id}
                className={styles.listItem}
                onClick={() => handleDrawingClick(drawing.id)}
              >
                <span className={styles.drawingTitle}>
                  {drawing.title} - Rev {drawing.rev}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default VendorDetails;
