export default function NoteDelete() {
  return (
    <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
      <h1>Delete Note Page</h1>
      <p>
        This is a note page. You can create a new note by clicking the button below.
      </p>
      <button className="bg-blue-500 text-white p-2 rounded">Create Note</button>
    </div>
  );
}