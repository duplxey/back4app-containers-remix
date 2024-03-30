import {Link, Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {ReactNode} from "react";
import Parse from "parse/node";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: stylesheet},
];

const PARSE_APPLICATION_ID = process.env.PARSE_APPLICATION_ID || "";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = process.env.PARSE_JAVASCRIPT_KEY || "";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export function Layout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Meta/>
        <Links/>
      </head>
      <body>
        <div className="space-y-4">
          <div className="bg-slate-100 px-8 py-6 border-2 border-b-slate-300">
            <h1 className="font-semibold text-2xl text-blue-500 hover:text-blue-600">
              <Link to={`/`}>
                remix-notes
              </Link>
            </h1>
            <p>A simple notes web app.</p>
          </div>
          <div className="px-8">
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
