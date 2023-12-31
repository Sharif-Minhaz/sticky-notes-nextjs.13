import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "My Notes",
	description: "A sticky note clone app",
	icons: [{ rel: "icon", url: "/fav.png" }],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} p-5`} suppressHydrationWarning={true}>
				<main className="mx-auto w-[320px] sm:w-[500px] md:w-[620px] bg-slate-50 shadow-lg min-h-[calc(100vh-40px)]">
					<Navbar />
					<div className="p-5">{children}</div>
				</main>
			</body>
		</html>
	);
}
