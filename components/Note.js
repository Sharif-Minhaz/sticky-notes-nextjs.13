import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function Note({ note, index }) {
	const { id, title, content, created } = note || {};

	return (
		<div className="bg-orange-100 p-3 shadow-md relative z-20 transition-all group">
			<Link href={`/notes/${id}`}>
				<div className="h-full flex flex-col gap-2">
					<div>
						<h2 className="text-lg mb-1">{title}</h2>
						<hr className="border-slate-400" />
					</div>
					<h5 className="text-[15px] line-clamp-3">{content}</h5>
					<p className="text-[12px]">
						<time dateTime={created}>{format(parseISO(created), "LLLL d, yyyy")}</time>
					</p>
				</div>
			</Link>
			<div className="flex bg-[#cde9ff] shadow-sm shadow-slate-300 justify-between items-center px-3 py-2 absolute z-10 group-hover:z-30 w-full left-0 bottom-[-25px] group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all">
				<span className="text-sm">Note-{index + 1}</span>
				<div className="flex items-center">
					<button className="text-blue-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="icon icon-tabler icon-tabler-file-pencil"
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
					</button>
					<button className="text-red-500">
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
