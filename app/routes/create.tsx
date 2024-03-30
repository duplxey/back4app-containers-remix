import NoteForm from "~/components/NoteForm";
import {ActionFunctionArgs, redirect} from "@remix-run/node";
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
      <NoteForm/>
    </>
  );
}