import {Form} from "@remix-run/react";
import NoteForm from "~/components/NoteForm";

const note = {
  "title": "Microservices Architecture",
  "emoji": "🧱",
  "content": "Break down complex applications into smaller, independent services to enhance modularity and facilitate continuous delivery.",
  "createdAt": "2024-03-29T19:25:10.105Z",
  "updatedAt": "2024-03-29T19:25:10.105Z",
  "objectId": "0CMWkNzTLY",
  "className": "Note"
};

export default function NoteEdit() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">Edit Note</h2>
      </div>
      <NoteForm note={note}/>
    </div>
  );
}