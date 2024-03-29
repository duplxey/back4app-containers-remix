const note = {
  "title": "Microservices Architecture",
  "emoji": "🧱",
  "content": "Break down complex applications into smaller, independent services to enhance modularity and facilitate continuous delivery.",
  "createdAt": "2024-03-29T19:25:10.105Z",
  "updatedAt": "2024-03-29T19:25:10.105Z",
  "objectId": "0CMWkNzTLY",
  "className": "Note"
};

export default function NoteDetails() {
  return (
    <div>
      <div className="text-6xl mb-4">
        {note.emoji}
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">{note.title}</h2>
        <p>{note.content}</p>
      </div>
      <hr className="my-4"/>
      <div className="mb-6">
        <p><span className="font-semibold">Created at:</span> {new Date(note.createdAt).toLocaleString()}</p>
        <p><span className="font-semibold">Updated at:</span> {new Date(note.updatedAt).toLocaleString()}</p>
      </div>
      <div className="space-x-2">
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Edit Note</a>
        <a href="#" className="bg-red-500 hover:bg-red-600 text-white p-2 rounded">Delete Note</a>
      </div>
    </div>
  );
}