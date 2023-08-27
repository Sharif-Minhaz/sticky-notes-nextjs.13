// import PocketBase from "pocketbase";

export async function generateStaticParams() {
	const notes = await fetch("http://127.0.0.1:8090/api/collections/notes/records").then((res) =>
		res.json()
	);

	return notes.map((note) => ({
		id: note.id,
	}));
}

async function getNote(noteId) {
	// const pb = new PocketBase("http://127.0.0.1:8090");
	// const record = await pb.collection("notes").getOne(noteId);

	const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
		next: { revalidate: 10 },
	});
	const data = await res.json();

	return data;
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
					<time dateTime={note.created}>{new Date(note.created).toUTCString()}</time>
				</p>
			</div>
		</div>
	);
}
