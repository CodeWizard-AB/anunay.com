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
		<header className="py-8">
			<nav className="flex justify-center gap-8">
				{navLinks.map(({ href, label }) => (
					<Link key={label} href={href}>
						{label}
					</Link>
				))}
			</nav>
		</header>
	);
}
