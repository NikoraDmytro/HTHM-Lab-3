import { Note } from "../../types";

import styles from "./styles.module.scss";

export const CreateNoteForm = (addNote: (note: Note) => void) => {
  const form = document.createElement("form");

  form.innerHTML = `
    <h1>New note</h1>

    <textarea name="newNote" placeholder="Enter your note here" required></textarea>

    <button type=submit>
      Create
    </button>
  `;

  form.classList.add(styles.createNoteForm);
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newNote: Note = {
      createdAt: new Date(),
      text: form.newNote.value.trim(),
    };

    addNote(newNote);
    form.newNote.value = "";
  });

  return form;
};
