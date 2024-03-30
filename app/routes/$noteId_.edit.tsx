import {useLoaderData} from "@remix-run/react";
import {ActionFunctionArgs, json, LoaderFunctionArgs, redirect} from "@remix-run/node";
import {invariant} from "@remix-run/router/history";
import {getNote, updateNote} from "~/api/backend";
import NoteForm from "~/components/NoteForm";

export const loader = async ({params}: LoaderFunctionArgs) => {
  invariant(params.noteId, "Missing noteId param");
  const note = await getNote(params.noteId);
  if (note == null) throw new Response("Not Found", {status: 404});
  return json({note});
};

export const action = async ({params, request}: ActionFunctionArgs) => {
  invariant(params.noteId, "Missing noteId param");
  const formData = await request.formData();
  const {emoji, title, content} = Object.fromEntries(formData) as Record<string, string>;
  const note = await updateNote(params.noteId, emoji, title, content);
  return redirect(`/${note?.objectId}`);
};

export default function NoteEdit() {
  const {note} = useLoaderData<typeof loader>();
  return (
    <>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">Edit Note</h2>
      </div>
      <NoteForm note={note}/>
    </>
  );
}