import {Form} from "@remix-run/react";

export default function NoteCreate() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">Create Note</h2>
      </div>
      <Form className="space-y-4">
        <div>
          <label htmlFor="emoji" className="block">Emoji</label>
          <input
            type="text" id="emoji" name="emoji"
            className="w-full border-2 border-slate-300 p-2 rounded"
            maxLength={2}
          />
        </div>
        <div>
          <label htmlFor="title" className="block">Title</label>
          <input
            type="text" id="title" name="title"
            className="w-full border-2 border-slate-300 p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="content" className="block">Content</label>
          <textarea
            id="content" name="content"
            className="w-full border-2 border-slate-300 p-2 rounded"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">Create</button>
        </div>
      </Form>
    </div>
  );
}