import type {ActionFunctionArgs} from "@remix-run/node";
import {redirect} from "@remix-run/node";
import {invariant} from "@remix-run/router/history";
import {deleteNote} from "~/api/backend";

export const action = async ({params}: ActionFunctionArgs) => {
  invariant(params.noteId, "Missing noteId param");
  await deleteNote(params.noteId);
  return redirect(`/`);
};