import { Note } from "../types";
import { changeContent } from "../utils/changeContent";
import { parseDate } from "../utils/parseDate";

export const NotesList = (notes: Note[]) => {
  const list = document.createElement("ul");

  const addNote = (note: Note) => {
    notes.push(note);

    renderListItem(note);
  };

  const selectNote = (note: Note) => {
    return (e: MouseEvent) => {
      e.preventDefault();

      changeContent(`
        <h1>Note from ${parseDate(note.createdAt)}</h1>
        <p>${note.text}</p>
      `);
    };
  };

  const renderListItem = (note: Note) => {
    const link = document.createElement("a");
    const listItem = document.createElement("li");
    const createdAt = parseDate(note.createdAt);

    link.textContent = createdAt;
    link.addEventListener("click", selectNote(note));

    listItem.appendChild(link);
    list.appendChild(listItem);
  };

  notes.forEach(renderListItem);

  return [list, addNote] as [HTMLUListElement, (note: Note) => void];
};
