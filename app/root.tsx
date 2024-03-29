import {Links, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
  {rel: "stylesheet", href: stylesheet},
];

const notes = [
  {
    "title": "Microservices Architecture",
    "emoji": "🧱",
    "content": "Break down complex applications into smaller, independent services to enhance modularity and facilitate continuous delivery.",
    "createdAt": "2024-03-29T19:25:10.105Z",
    "updatedAt": "2024-03-29T19:25:10.105Z",
    "objectId": "0CMWkNzTLY",
    "className": "Note"
  },
  {
    "title": "Containerization",
    "emoji": "🐳",
    "content": "Use Docker to create lightweight, portable, and self-sufficient containers from any application.",
    "createdAt": "2024-03-29T19:25:10.117Z",
    "updatedAt": "2024-03-29T19:25:10.117Z",
    "objectId": "1HtbbHFQNE",
    "className": "Note"
  },
  {
    "title": "Network Layers",
    "emoji": "🌐",
    "content": "Understanding OSI and TCP/IP models is crucial for troubleshooting and securing network issues.",
    "createdAt": "2024-03-29T19:25:10.114Z",
    "updatedAt": "2024-03-29T19:25:10.114Z",
    "objectId": "8i9GITXueB",
    "className": "Note"
  },
  {
    "title": "Version Control",
    "emoji": "📌",
    "content": "Utilize Git to track and manage changes in your codebase, facilitating collaborative development and reducing the risk of conflicts.",
    "createdAt": "2024-03-29T19:25:10.107Z",
    "updatedAt": "2024-03-29T19:25:10.107Z",
    "objectId": "BxHzwHGCkQ",
    "className": "Note"
  },
  {
    "title": "Cloud Computing",
    "emoji": "☁️",
    "content": "Leverage cloud services to achieve scalability and high availability for your applications.",
    "createdAt": "2024-03-29T19:25:10.103Z",
    "updatedAt": "2024-03-29T19:25:10.103Z",
    "objectId": "M4CuQzyj4U",
    "className": "Note"
  },
  {
    "title": "Infrastructure as Code",
    "emoji": "📜",
    "content": "Use tools like Terraform to manage and provision infrastructure through code, making environments reproducible and version controlled.",
    "createdAt": "2024-03-29T19:25:10.106Z",
    "updatedAt": "2024-03-29T19:25:10.106Z",
    "objectId": "THZeUZwZgm",
    "className": "Note"
  },
  {
    "title": "Database Optimization",
    "emoji": "💾",
    "content": "Indexing, normalization, and query optimization are keys to maintaining high performance in database systems.",
    "createdAt": "2024-03-29T19:25:10.108Z",
    "updatedAt": "2024-03-29T19:25:10.108Z",
    "objectId": "gKP4Vz1NqL",
    "className": "Note"
  },
  {
    "title": "DevOps Best Practices",
    "emoji": "🚀",
    "content": "Automation is key for efficient software delivery. Incorporate CI/CD pipelines to ensure a smooth deployment process.",
    "createdAt": "2024-03-29T19:25:10.105Z",
    "updatedAt": "2024-03-29T19:25:10.105Z",
    "objectId": "gehp15FcOI",
    "className": "Note"
  },
  {
    "title": "Agile Methodology",
    "emoji": "🌀",
    "content": "Adopt an Agile approach for flexible planning, progressive development, early deployment, and continuous improvement.",
    "createdAt": "2024-03-29T19:25:10.107Z",
    "updatedAt": "2024-03-29T19:25:10.107Z",
    "objectId": "oLxDH7kltb",
    "className": "Note"
  },
  {
    "title": "Cybersecurity Fundamentals",
    "emoji": "🔒",
    "content": "Always prioritize security by following best practices such as regular patching, secure coding, and penetration testing.",
    "createdAt": "2024-03-29T19:25:10.112Z",
    "updatedAt": "2024-03-29T19:25:10.112Z",
    "objectId": "wodbK0hQWG",
    "className": "Note"
  }
];

export function Layout({children}: { children: React.ReactNode }) {
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
                  <div
                    key={note.objectId}
                    className="border-2 border-slate-300 font-semibold text-lg px-4 py-3 rounded-md hover:bg-slate-200">
                    {note.emoji} {note.title}
                  </div>
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
