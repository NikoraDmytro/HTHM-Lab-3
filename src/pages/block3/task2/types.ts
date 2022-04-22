export type Note = {
  createdAt: Date;
  text: string;
};

export type AddNote = (note: Note) => void;

export type NoteListReturnVal = [HTMLUListElement, AddNote];
