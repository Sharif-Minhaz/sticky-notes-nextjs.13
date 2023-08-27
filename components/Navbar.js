"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="flex justify-between items-center gap-2 bg-blue-500 px-5 py-4">
			<Link href="/">
				<Image
					priority
					src="/logo.png"
					alt="My Notes"
					width={0}
					height={0}
					sizes="100vw"
					className="w-[130px] h-auto"
				/>
			</Link>
			<div className="flex">
				<Link href="/" className={pathname === "/" ? "text-white" : "text-black"}>
					Home
				</Link>
				<Link
					className={`${pathname === "/notes" ? "text-white" : "text-black"} mx-4`}
					href="/notes"
				>
					Notes
				</Link>
				<Link
					className={pathname === "/notes/create" ? "text-white" : "text-black"}
					href="/notes/create"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-plus"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M12 5l0 14"></path>
						<path d="M5 12l14 0"></path>
					</svg>
				</Link>
			</div>
		</nav>
	);
}
