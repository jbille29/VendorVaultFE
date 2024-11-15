
import React, { useState } from 'react';
import styles from './DocumentDetails.module.css';

const DocumentDetails = ({ id }) => {
  const [comments, setComments] = useState([
    { id: 1, text: 'This document looks good.', user: 'Vendor X' },
    { id: 2, text: 'Please review the changes.', user: 'Client A' },
  ]);

  const document = {
    id,
    title: 'Document A',
    rev: 3,
    vendor: 'Vendor X',
    project: 'Project Alpha',
    lastUpdated: '2024-11-10',
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    setComments([...comments, { id: comments.length + 1, text: commentText, user: 'You' }]);
    e.target.reset();
  };

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{document.title} - Rev {document.rev}</h1>
      <p className={styles.meta}>Project: {document.project}</p>
      <p className={styles.meta}>Vendor: {document.vendor}</p>
      <p className={styles.meta}>Last Updated: {document.lastUpdated}</p>

      <section className={styles.commentsSection}>
        <h2>Comments</h2>
        <ul className={styles.commentsList}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.comment}>
              <strong>{comment.user}:</strong> {comment.text}
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddComment} className={styles.commentForm}>
          <input type="text" name="comment" placeholder="Add a comment..." required />
          <button type="submit">Add</button>
        </form>
      </section>

      <section className={styles.actions}>
        <button className={styles.actionButton}>Upload New Revision</button>
        <button className={styles.actionButton}>Share Document</button>
      </section>
    </div>
  );
};

export default DocumentDetails;
