import * as motion from "motion/react-client";
import Link from "next/link";

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/" },
	{ label: "Skills", href: "/" },
	{ label: "Projects", href: "/" },
	{ label: "Contact", href: "/" },
];

export default function Header() {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-background backdrop-blur-lg shadow-lg rounded-lg px-6 sm:px-8 py-3 flex gap-6 z-50 border border-border text-sm sm:text-base"
		>
			{navLinks.map(({ href, label }) => (
				<motion.div
					key={label}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link
						href={href}
						className="text-white font-medium tracking-wide hover:text-gray-300 transition"
					>
						{label}
					</Link>
				</motion.div>
			))}
		</motion.header>
	);
}
