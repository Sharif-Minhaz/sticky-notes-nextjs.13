// import PocketBase from "pocketbase";
import { getNote } from "@/lib/getNote";
import { format, parseISO } from "date-fns";

export async function generateStaticParams() {
	const notes = await fetch("http://127.0.0.1:8090/api/collections/notes/records").then((res) =>
		res.json()
	);

	return notes.map((note) => ({
		id: note.id,
	}));
}

export default async function NotePage({ params }) {
	const note = await getNote(params.id);

	return (
		<div>
			<h1>Notes / {note.id}</h1>
			<hr className="my-3" />
			<div>
				<h3 className="text-2xl">{note.title}</h3>
				<h5 className="my-2">{note.content}</h5>
				<p className="text-sm">
					Created on:{" "}
					<time dateTime={note.created}>{format(parseISO(note.created), "LLLL d, yyyy, hh:mm:ss aa")}</time>
				</p>
			</div>
		</div>
	);
}
