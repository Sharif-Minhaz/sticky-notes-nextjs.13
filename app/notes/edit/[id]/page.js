import { getNote } from "@/lib/getNote";
import NoteForm from "../../../../components/NoteForm";

export async function generateStaticParams() {
	const notes = await fetch("http://127.0.0.1:8090/api/collections/notes/records").then((res) =>
		res.json()
	);

	return notes.map((note) => ({
		id: note.id,
	}));
}

export default async function EditPage({ params }) {
	const note = await getNote(params.id);

	return (
		<section>
			<h1 className="text-xl">Update Note</h1>
			<hr className="mt-2 mb-4" />
			<NoteForm note={note} update={true} />
		</section>
	);
}
