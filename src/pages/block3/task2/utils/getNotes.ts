import { Note } from "../types";

export const getNotes = (): Note[] => {
  const reviver = (key: string, value: string) => {
    return key == "createdAt" ? new Date(value) : value;
  };

  const notesString: string = window.localStorage.getItem("notes") ?? "[]";
  const notes: Note[] = JSON.parse(notesString, reviver);

  return notes;
};
