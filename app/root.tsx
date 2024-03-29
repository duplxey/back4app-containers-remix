import {Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, useLoaderData,} from "@remix-run/react";
import {json, LinksFunction} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Parse from "parse/node";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: stylesheet},
];

const PARSE_APPLICATION_ID = process.env.PARSE_APPLICATION_ID || "";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY || "";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export const loader = async () => {
  const Note = Parse.Object.extend("Note");
  const query = new Parse.Query(Note);
  try {
    const results = await query.find();
    const notes = results.map((note) => ({
        objectId: note.id,
        emoji: note.get("emoji"),
        title: note.get("title"),
        content: note.get("content"),
        createdAt: new Date(note.get("createdAt")),
        updatedAt: new Date(note.get("updatedAt")),
      })
    );
    return json({notes});
  } catch (error) {
    console.error("Error fetching notes:", error);
    return json({notes: []});
  }
  return json({notes: []});
};

export function Layout({children}: { children: React.ReactNode }) {
  const {notes} = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Meta/>
        <Links/>
      </head>
      <body>
        <div className="flex flex-row">
          <div className="min-w-96 bg-slate-100 border-r-2 border-slate-300 p-5 h-screen shadow-lg">
            <div className="space-y-4">
              <div className="">
                <h1 className="font-semibold text-2xl">remix-notes</h1>
                <p>A simple notes web app.</p>
              </div>
              <div className="space-y-2">
                {notes.map(note => (
                  <NavLink key={note.objectId} to={"#"}>
                    <div
                      className="border-2 border-slate-300 font-semibold text-lg px-4 py-3 rounded-md hover:bg-slate-200"
                    >
                      {note.emoji} {note.title}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="grow p-5">
            {children}
          </div>
        </div>
        <ScrollRestoration/>
        <Scripts/>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet/>;
}
