"use client";

import Link from "next/link";
import { parseISO, format } from "date-fns";
import { useRouter } from "next/navigation";
import Image from "next/image";

async function deleteNote(noteId) {
	try {
		await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
			method: "DELETE",
			cache: "reload",
		});
	} catch (err) {
		console.error("Deletion error: " + err.message);
	}
}

export default function Note({ note, index, rotateStyle }) {
	const { id, title, content, created } = note || {};
	const router = useRouter();

	const handleDelete = async (noteId) => {
		await deleteNote(noteId);
		router.refresh();
	};

	return (
		<div
			className={`bg-orange-100 min-h-[160px] p-3 shadow-md relative z-20 transition-all group ${rotateStyle}`}
		>
			<Link href={`/notes/${id}`}>
				<div className="h-full flex flex-col gap-2">
					<div>
						<h2 className="text-lg mt-1 mb-1">{title}</h2>
						<hr className="border-slate-400" />
					</div>
					<h5 className="text-[15px] line-clamp-3">{content}</h5>
					<p className="text-[12px]">
						<time dateTime={created}>{format(parseISO(created), "LLLL d, yyyy")}</time>
					</p>
				</div>
				<div className="absolute top-[-3px] left-[50%] translate-x-[-50%]">
					<Image
						height={0}
						width={0}
						className="h-7 w-7 drop-shadow-sm"
						quality={100}
						src="/pin.png"
						sizes="100vw"
						alt="pin"
					/>
				</div>
			</Link>
			<div className="flex bg-[#cde9ff] shadow-sm shadow-slate-300 justify-between items-center px-3 py-2 absolute z-10 group-hover:z-30 w-full left-0 bottom-[-25px] group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all">
				<span className="text-sm">Note-{index + 1}</span>
				<div className="flex items-center">
					<button className="text-blue-500">
						<Link href={`/notes/edit/${id}`}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-file-pencil"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
								<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
								<path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z"></path>
							</svg>
						</Link>
					</button>
					<button onClick={() => handleDelete(id)} className="text-red-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-trash"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M4 7l16 0"></path>
							<path d="M10 11l0 6"></path>
							<path d="M14 11l0 6"></path>
							<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
							<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
