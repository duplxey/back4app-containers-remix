import {json} from "@remix-run/node";
import {Link, NavLink, useLoaderData} from "@remix-run/react";
import {getNotes} from "~/api/backend";

export const loader = async () => {
  const notes = await getNotes();
  return json({notes});
};

export default function Index() {
  const {notes} = useLoaderData<typeof loader>();
  return (
    <>
      <Link to={`/create`}>
        <div className="bg-blue-500 hover:bg-blue-600 text-lg font-semibold text-white
         px-4 py-3 mb-2 border-2 border-blue-600 rounded-md"
        >
          + Create
        </div>
      </Link>
      {notes.map(note => (
        <NavLink key={note.objectId} to={`/${note.objectId}`}>
          <div className="hover:bg-slate-200 text-lg font-semibold
            px-4 py-3 mb-2 border-2 border-slate-300 rounded-md"
          >
            {note.emoji} {note.title}
          </div>
        </NavLink>
      ))}
    </>
  );
}
