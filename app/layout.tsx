import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
			<body className={cn(interFont.className, "container")}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
