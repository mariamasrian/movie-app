import style from "./style.module.scss";

export const Notes = ({
  noteInput,
  noteSaveMessage,
  handleInputChange,
  handleSubmit,
}) => (
  <section className={style.notesSection}>
    <h2 className={style.sectionTitle}>Write a Note</h2>
    <form onSubmit={handleSubmit} className={style.noteForm}>
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
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className={style.saveButton}>
        Save
      </button>
    </form>
    {noteSaveMessage && <p className={style.saveMessage}>Note Saved!</p>}
  </section>
);
