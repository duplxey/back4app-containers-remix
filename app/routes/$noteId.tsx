import {getNote} from "~/api/backend";
import {json, LoaderFunctionArgs} from "@remix-run/node";
import {Form, useLoaderData} from "@remix-run/react";
import {invariant} from "@remix-run/router/history";

export const loader = async ({params}: LoaderFunctionArgs) => {
  invariant(params.noteId, "Missing noteId param");
  const note = await getNote(params.noteId);
  if (note == null) throw new Response("Not Found", {status: 404});
  return json({note});
};

export default function NoteDetails() {
  const {note} = useLoaderData<typeof loader>();
  return (
    <>
      <div className="mb-4">
        <p className="text-6xl">{note.emoji}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-2xl">{note.title}</h2>
        <p>{note.content}</p>
      </div>
      <div className="space-x-2">
        <Form
          method="post" action="destroy"
          onSubmit={(event) => event.preventDefault()}
          className="inline-block"
        >
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 font-semibold text-white
              p-2 border-2 border-red-600 rounded-md"
          >
            Delete
          </button>
        </Form>
      </div>
    </>
  );
}