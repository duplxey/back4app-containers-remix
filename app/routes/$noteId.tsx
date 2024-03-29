import {json, LoaderFunctionArgs} from "@remix-run/node";
import {invariant} from "@remix-run/router/history";
import {useLoaderData} from "@remix-run/react";
import Parse from "parse/node";

export const loader = async ({params}: LoaderFunctionArgs) => {
  invariant(params.noteId, "Missing noteId param");
  const Note = Parse.Object.extend("Note");
  const query = new Parse.Query(Note);
  try {
    const result = await query.get(params.noteId || "");
    if (!result) {
      throw new Response("Not Found", {status: 404});
    }
    const note = {
      objectId: result.id,
      title: result.get("title"),
      content: result.get("content"),
      emoji: result.get("emoji"),
      createdAt: result.get("createdAt"),
      updatedAt: result.get("updatedAt"),
    };
    return json({note});
  } catch (e) {
    throw new Response("Not Found", {status: 404});
  }
};

export default function NoteDetails() {
  const {note} = useLoaderData<typeof loader>();
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