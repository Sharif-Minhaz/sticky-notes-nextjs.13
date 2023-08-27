import { updateLastOpenedNote } from "./updateLastOpenedNote";

export async function getNote(noteId) {
	const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`);
	const [data, _] = await Promise.all([res.json(), updateLastOpenedNote(noteId)]);
	return data;
}
