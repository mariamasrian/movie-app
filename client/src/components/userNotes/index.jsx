import React from "react";
import styles from "./style.module.scss";

export const UserNotes = ({ notes }) => {
  return (
    <div className={styles.userNotes}>
      <h4 className={styles.notesTitle}>User Notes</h4>
      {notes.length === 0 ? (
        <p>No notes yet. Be the first to write!</p>
      ) : (
        notes.map((note, index) => (
          <div className={styles.noteCard} key={index}>
            <p className={styles.noteDate}>
              {note.date} - <strong>{note.username}</strong>
            </p>
            <p className={styles.noteText}>{note.text}</p>
          </div>
        ))
      )}
    </div>
  );
};
