import { Note, NoteListReturnVal } from "../../types";
import { changeContent } from "../../utils/changeContent";
import { parseDate } from "../../utils/parseDate";

import styles from "./styles.module.scss";

const selectNote = (note: Note) => () => {
  changeContent(`
    <h1 class=${styles.noteTitle}>
      Note from - <span>${parseDate(note.createdAt)}</span>
    </h1>

    <p class=${styles.noteText}>${note.text}</p>
  `);
};

export const NotesList = (notes: Note[]): NoteListReturnVal => {
  const list = document.createElement("ul");

  const addNote = (note: Note) => {
    notes.push(note);

    renderListItem(note);
  };

  const renderListItem = (note: Note) => {
    const createdAt = parseDate(note.createdAt);
    const listItem = document.createElement("li");

    listItem.innerText = createdAt;
    list.classList.add(styles.notesList);
    listItem.addEventListener("click", selectNote(note));

    list.appendChild(listItem);
  };

  notes.forEach(renderListItem);

  return [list, addNote];
};
