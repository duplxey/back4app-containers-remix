import {ActionFunctionArgs, redirect} from "@remix-run/node";
import {Form} from "@remix-run/react";
import {createNote} from "~/api/backend";

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const {emoji, title, content} = Object.fromEntries(formData) as Record<string, string>;
  const note = await createNote(emoji, title, content);
  return redirect(`/${note?.objectId}`);
};

export default function NoteCreate() {
  return (
    <>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">Create Note</h2>
      </div>
      <Form method="post" className="space-y-4">
        <div>
          <label htmlFor="emoji" className="block">Emoji</label>
          <input
            type="text" id="emoji" name="emoji"
            className="w-full border-2 border-slate-300 p-2 rounded"
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 font-semibold
              text-white p-2 border-2 border-blue-600 rounded-md"
          >
            Create
          </button>
        </div>
      </Form>
    </>
  );
}