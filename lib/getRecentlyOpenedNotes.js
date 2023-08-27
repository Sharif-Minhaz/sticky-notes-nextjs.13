export async function getRecentlyOpenedNotes() {
	const res = await fetch(
		"http://127.0.0.1:8090/api/collections/notes/records?sort=-lastOpened",
		{
			cache: "no-store",
		}
	);

	const data = await res.json();

	const limitedData = data?.items.slice(0, 6);

	return limitedData;
}
