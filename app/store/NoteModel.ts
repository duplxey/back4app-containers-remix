import Parse from "parse/node";

export default interface NoteModel {
  objectId: string;
  emoji: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const serializeNote = (note: Parse.Object<Parse.Attributes>): NoteModel => {
  return {
    objectId: note.id,
    emoji: note.get("emoji"),
    title: note.get("title"),
    content: note.get("content"),
    createdAt: new Date(note.get("createdAt")),
    updatedAt: new Date(note.get("updatedAt")),
  };
}