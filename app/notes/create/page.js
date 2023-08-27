import NoteForm from "../../../components/NoteForm";

export default async function CreateNotePage() {
	return (
		<section>
            <h1 className="text-xl">Create a New Note</h1>
            <hr className="mt-2 mb-4" />
			<NoteForm />
		</section>
	);
}
