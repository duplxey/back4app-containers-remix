import NoteForm from "~/components/NoteForm";

export default function NoteCreate() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">Create Note</h2>
      </div>
      <NoteForm/>
    </div>
  );
}