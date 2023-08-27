// import PocketBase from "pocketbase";
import Note from "@/components/Note";

// export const dynamic = "auto",
// 	dynamicPrams = true,
// 	revalidate = 0,
// 	fetchCache = "auto",
// 	runtime = "nodejs",
// 	preferredRegion = "auto";

async function getNotes() {
	// const pb = new PocketBase("http://127.0.0.1:8090");
	// const data = await pb.collection("notes").getList();

	const res = await fetch(
		"http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
		{ cache: "no-store" }
	);

	const data = await res.json();

	return data?.items;
}

export default async function NotesPage() {
	const notes = await getNotes();

	return (
		<div>
			<h1 className="sr-only">Notes</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{notes?.map((note, index) => {
					return (
						<Note
							index={index}
							note={note}
							key={note.id}
							rotateStyle={generateRandomCurveStyle()}
						/>
					);
				})}
			</div>
		</div>
	);
}

export function generateRandomCurveStyle() {
	const curveStyles = ["-rotate-2", "-rotate-1", "rotate-2", "rotate-1", "rotate-0"];
	const randomCurveStyle = curveStyles[Math.floor(Math.random() * curveStyles.length)];

	return randomCurveStyle;
}
