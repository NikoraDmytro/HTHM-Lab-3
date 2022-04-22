import { renderPageWrapper } from "components/PageWrapper";
import { AddNoteForm } from "./components/AddNoteForm";
import { NotesList } from "./components/Notes";
import { changeContent } from "./utils/changeContent";
import { getNotes } from "./utils/getNotes";

const task2 = () => {
  renderPageWrapper();
  const notes = getNotes();
  const [notesList, addNote] = NotesList(notes);

  const aside = document.querySelector("aside");
  const newNote = aside?.querySelector("#addNote");
  const addNoteForm = AddNoteForm(addNote);

  newNote?.addEventListener("click", () => changeContent(addNoteForm));

  aside?.insertAdjacentElement("afterbegin", notesList);
};

task2();
