import { Note } from "../types";

export const saveNotes = (notes: Note[]) => {
  window.localStorage.setItem("notes", JSON.stringify(notes));
};
