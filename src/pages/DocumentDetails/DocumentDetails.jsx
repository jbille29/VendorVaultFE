import React, { useState } from 'react';
import styles from './DocumentDetails.module.css';

const DocumentDetails = () => {
  const [comment, setComment] = useState('');
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = () => {
    setIsApproved(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className={styles.documentDetailsContainer}>
      <h1 className={styles.title}>Document Title</h1>

      {/* Document Preview or Download Link */}
      <div className={styles.documentPreview}>
        <p>Click below to preview or download the document:</p>
        <a href="#" className={styles.downloadLink}>Download Document</a>
      </div>

      {/* Comments Section */}
      <div className={styles.commentsSection}>
        <h2 className={styles.sectionTitle}>Comments</h2>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Leave a comment here..."
          className={styles.commentBox}
        ></textarea>
      </div>

      {/* Approval Section */}
      <div className={styles.approvalSection}>
        <button onClick={handleApprove} className={styles.approveButton}>
          Approve Document
        </button>
        {isApproved && <p className={styles.approvalMessage}>Document approved successfully!</p>}
      </div>
    </div>
  );
};

export default DocumentDetails;
