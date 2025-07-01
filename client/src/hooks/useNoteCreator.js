import { useState, useCallback } from "react";
import { createNote } from "../utils/createNote";

export const useNoteCreator = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");
  const [noteSaveMessage, setNoteSaveMessage] = useState(false);

  const handleInputChange = useCallback(
    (e) => setNoteInput(e.target.value),
    []
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!noteInput.trim()) return;

      const newNote = createNote(noteInput);
      setNotes((prev) => [newNote, ...prev]);
      setNoteSaveMessage(true);
      setNoteInput("");

      const timer = setTimeout(() => setNoteSaveMessage(""), 3000);
      return () => clearTimeout(timer);
    },
    [noteInput]
  );

  return {
    notes,
    noteInput,
    noteSaveMessage,
    handleInputChange,
    handleSubmit,
  };
};
