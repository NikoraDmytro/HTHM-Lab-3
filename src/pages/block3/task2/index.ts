import { NotesList } from "./components/Notes";
import { CreateNoteForm } from "./components/CreateNoteForm";
import { renderPageWrapper } from "components/PageWrapper";

import { getNotes } from "./utils/getNotes";
import { saveNotes } from "./utils/saveNotes";
import { changeContent } from "./utils/changeContent";

import styles from "./styles.module.scss";

const addStyles = () => {
  const notebook = document.querySelector("#notebook");
  const notebookBody = notebook?.querySelector("div");
  const notebookContent = notebook?.querySelector("#content");

  notebook?.classList.add(styles.notebook);
  notebookBody?.classList.add(styles.notebookBody);
  notebookContent?.classList.add(styles.notebookContent);
};

const task2 = () => {
  renderPageWrapper();
  addStyles();

  const aside = document.querySelector("aside");
  const createNote = aside?.querySelector("#createNote");

  const notes = getNotes();
  const [notesList, addNote] = NotesList(notes);
  const addNoteForm = CreateNoteForm(addNote);

  createNote?.classList.add(styles.createNote);
  createNote?.addEventListener("click", () => changeContent(addNoteForm));
  window.addEventListener("beforeunload", () => saveNotes(notes));

  aside?.insertAdjacentElement("afterbegin", notesList);
};

task2();
