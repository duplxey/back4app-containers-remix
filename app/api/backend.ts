import Parse from "parse/node";
import NoteModel, {serializeNote} from "~/store/NoteModel";

export const getNotes = async (): Promise<NoteModel[]> => {
  try {
    const Note = Parse.Object.extend("Note");
    const query = new Parse.Query(Note);
    const results = await query.find();
    return results.map(note => serializeNote(note));
  } catch (error) {
    return [];
  }
}

export const getNote = async (objectId: string): Promise<NoteModel | null> => {
  try {
    const Note = Parse.Object.extend("Note");
    const query = new Parse.Query(Note);
    const note = await query.get(objectId);
    return serializeNote(note);
  } catch (error) {
    return null;
  }
}

export const createNote = async (emoji: string, title: string, content: string): Promise<NoteModel | null> => {
  try {
    const Note = Parse.Object.extend("Note");
    const note = new Note();
    note.set("emoji", emoji);
    note.set("title", title);
    note.set("content", content);
    await note.save();
    return serializeNote(note);
  } catch (error) {
    return null;
  }
}

export const updateNote = async (objectId: string, emoji: string, title: string, content: string): Promise<NoteModel | null> => {
  try {
    const Note = Parse.Object.extend("Note");
    const query = new Parse.Query(Note);
    const note = await query.get(objectId);
    if (emoji) note.set("emoji", emoji);
    if (title) note.set("title", title);
    if (content) note.set("content", content);
    await note.save();
    return serializeNote(note);
  } catch (error) {
    return null;
  }
}

export const deleteNote = async (objectId: string): Promise<boolean> => {
  try {
    const Note = Parse.Object.extend("Note");
    const query = new Parse.Query(Note);
    const note = await query.get(objectId);
    await note.destroy();
    return true;
  } catch (error) {
    return false;
  }
}