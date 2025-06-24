import React, { useState, useCallback } from "react";
import style from "./style.module.scss";

export const Notes = ({ setUserNotes }) => {
  const [noteInput, setNoteInput] = useState("");
  const [noteSaveMessage, setNoteSaveMessage] = useState(false);

  const handleNoteInputChange = useCallback(
    (e) => setNoteInput(e.target.value),
    []
  );

  const handleNoteSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!noteInput.trim()) return;

      const newNote = {
        username: "Guest",
        text: noteInput,
        date: new Date().toLocaleString("en-GB", {
          timeZone: "Asia/Yerevan",
          hour: "2-digit",
          minute: "2-digit",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      };

      setUserNotes((prev) => [newNote, ...prev]);
      setNoteSaveMessage(true);
      setNoteInput("");

      const timer = setTimeout(() => setNoteSaveMessage(""), 3000);
      return () => clearTimeout(timer);
    },
    [noteInput, setUserNotes]
  );

  return (
    <section className={style.notesSection}>
      <h2 className={style.sectionTitle}>Write a Note</h2>
      <form onSubmit={handleNoteSubmit} className={style.noteForm}>
        <div className={style.inputWrapper}>
          <label
            htmlFor="noteInput"
            className={`${style.floatingLabel} ${noteInput && style.shrink}`}
          >
            Write your thoughts...
          </label>
          <input
            id="noteInput"
            type="text"
            className={style.noteInput}
            value={noteInput}
            onChange={handleNoteInputChange}
          />
        </div>
        <button type="submit" className={style.saveButton}>
          Save
        </button>
      </form>
      {noteSaveMessage && <p className={style.saveMessage}>Note Saved!</p>}
    </section>
  );
};
