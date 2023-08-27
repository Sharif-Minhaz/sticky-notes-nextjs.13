import Note from "@/components/Note";
import Link from "next/link";
import { generateRandomCurveStyle } from "./notes/page";
import { getRecentlyOpenedNotes } from "@/lib/getRecentlyOpenedNotes";

export default function HomePage() {
	return (
		<>
			<section className="py-5 flex flex-col gap-4">
				<div>
					<h1 className="text-2xl uppercase text-center">Welcome to My Notes</h1>
					<p className="text-center text-slate-500">
						All types of sticky notes will be here
					</p>
				</div>

				<div className="text-center">
					<Link href="/notes">
						<button className="bg-blue-200 border-2 border-blue-600 px-3.5 py-1 rounded-full text-blue-700">
							View Notes
						</button>
					</Link>
				</div>
			</section>
			<RecentNotes />
		</>
	);
}

async function RecentNotes() {
	const notes = await getRecentlyOpenedNotes();
	
	return (
		<section>
			<h3 className="mt-3">Recent Notes</h3>
			<hr />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
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
		</section>
	);
}
