import {Form} from "@remix-run/react";

export type NoteFormProps = {
  note?: {
    emoji: string;
    title: string;
    content: string;
  };
}

export default function NoteForm({
  note = {
    emoji: "",
    title: "",
    content: "",
  }
}: NoteFormProps) {
  return (
    <Form method="post" className="space-y-4">
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
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 font-semibold text-white p-2 border-2 border-blue-600 rounded-md"
        >
          Save
        </button>
      </div>
    </Form>
  )
}