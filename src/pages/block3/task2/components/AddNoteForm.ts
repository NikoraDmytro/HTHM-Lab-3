import { Note } from "../types";

export const AddNoteForm = (addNote: (note: Note) => void) => {
  const form = document.createElement("form");

  form.innerHTML = `
    <h1>New note</h1>

    <textarea name="newNote"  required></textarea>

    <button type=submit>
      Create
    </button>
  `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newNote: Note = {
      createdAt: new Date(),
      text: form.newNote.value,
    };

    addNote(newNote);
  });

  return form;
};
