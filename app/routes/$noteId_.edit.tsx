import {Form} from "@remix-run/react";

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
      <Form className="space-y-4">
        <div>
          <label htmlFor="emoji" className="block">Emoji</label>
          <input
            type="text" id="emoji" name="emoji"
            defaultValue={note.emoji}
            className="w-full border-2 border-slate-300 p-2 rounded"
            maxLength={2}
          />
        </div>
        <div>
          <label htmlFor="title" className="block">Title</label>
          <input
            type="text" id="title" name="title"
            defaultValue={note.title}
            className="w-full border-2 border-slate-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="content" className="block">Content</label>
          <textarea
            id="content" name="content"
            defaultValue={note.content}
            className="w-full border-2 border-slate-300 p-2 rounded"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Save</button>
        </div>
      </Form>
    </div>
  );
}