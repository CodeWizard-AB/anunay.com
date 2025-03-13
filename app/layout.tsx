import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import { cn } from "@/lib/utils";

const interFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Anunay Argha - Web Developer",
	description: "Anunay Argha is a web developer you are looking for.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={cn(interFont.className, "container")}
				data-new-gr-c-s-check-loaded="14.1226.0"
				data-gr-ext-installed=""
				cz-shortcut-listen="true"
			>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
