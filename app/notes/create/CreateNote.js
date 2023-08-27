"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
	const router = useRouter();
	const [formData, setFormData] = useState({ title: "", content: "" });

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
		} catch (error) {
			console.error(error.message);
		}

		setFormData({ title: "", content: "" });
		e.target.reset();
		router.refresh();
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-3">
			<input
				required
				className="border border-slate-300 px-2.5 py-1.5"
				type="text"
				name="title"
				onChange={handleOnChange}
				value={formData.title}
				placeholder="Enter note heading"
			/>
			<textarea
				required
				className="border border-slate-300 px-2.5 py-1.5"
				name="content"
				id="content"
				cols="30"
				rows="5"
				onChange={handleOnChange}
				value={formData.content}
				placeholder="Enter note content"
			></textarea>

			<div>
				<button className="bg-black text-white px-5 py-1.5" type="submit">
					Create
				</button>
			</div>
		</form>
	);
}
