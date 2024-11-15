import React, { useState } from 'react';
import styles from './Upload.module.css';

const Upload = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    setIsUploaded(true);
  };

  const handleCloseModal = () => {
    setIsUploaded(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    setUploadedFile(file);
  };

  return (
    <div className={styles.uploadContainer}>
      <h1 className={styles.title}>Upload Document</h1>
      
      <form className={styles.form} onSubmit={handleUpload}>
        {/* Drawing Number - Required */}
        <label className={styles.label}>
          Drawing Number:
          <input type="text" placeholder="Enter drawing number" className={styles.input} required />
        </label>

        {/* Revision (Rev) - Required */}
        <label className={styles.label}>
          Revision (Rev):
          <input type="text" placeholder="Enter revision number" className={styles.input} required />
        </label>

        {/* Drawing Description - Optional */}
        <label className={styles.label}>
          Drawing Description:
          <input type="text" placeholder="Enter drawing description" className={styles.input} />
        </label>

        {/* Vendor - Required */}
        <label className={styles.label}>
          Vendor:
          <select className={styles.select} required>
            <option value="">Select vendor</option>
            <option value="vendor1">Vendor 1</option>
            <option value="vendor2">Vendor 2</option>
          </select>
        </label>

        {/* Project - Optional */}
        <label className={styles.label}>
          Project:
          <select className={styles.select}>
            <option value="">Select project</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
          </select>
        </label>

        {/* Notes - Optional */}
        <label className={styles.label}>
          Notes:
          <textarea placeholder="Write any notes here..." className={styles.textarea}></textarea>
        </label>

        {/* Drag and Drop for File Upload */}
        <div
          className={`${styles.dropzone} ${dragActive ? styles.active : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {uploadedFile ? (
            <p className={styles.uploadedFile}>File uploaded: {uploadedFile.name}</p>
          ) : (
            <p>Drag and drop a file here, or click to select one</p>
          )}
          <input
            type="file"
            className={styles.fileInput}
            onChange={(e) => setUploadedFile(e.target.files[0])}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.uploadButton}>Upload Document</button>
          <button type="button" className={styles.cancelButton} onClick={handleCloseModal}>Cancel</button>
        </div>
      </form>

      {/* Confirmation Modal */}
      {isUploaded && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Upload Successful!</h2>
            <p>Your document has been uploaded successfully.</p>
            <div className={styles.modalButtons}>
              <button className={styles.modalButton} onClick={handleCloseModal}>View Document</button>
              <button className={styles.modalButton} onClick={handleCloseModal}>Share with Vendor</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
