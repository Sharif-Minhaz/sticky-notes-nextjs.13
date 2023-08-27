export async function updateLastOpenedNote(id) {
	try {
		await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ lastOpened: new Date().toISOString() }),
		});
	} catch (err) {
		console.error(err.message);
	}
}
