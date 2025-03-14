import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="text-white py-8 border-t w-full border-border">
			<div className="container flex items-center justify-between">
				<p className="text-gray-400">
					© {new Date().getFullYear()} Anunay Argha. All rights reserved.
				</p>

				<div className="flex justify-center space-x-4 text-xl text-gray-200">
					{socials.map(({ href, icon }) => (
						<Link key={href} href={href} target="_blank">
							{icon}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}

const socials = [
	{ icon: <FaGithub />, href: "https://github.com/CodeWizard-AB" },
	{ icon: <FaLinkedin />, href: "https://linkedin.com/in/anunayargha" },
	{ icon: <FaFacebook />, href: "https://www.facebook.com/anunay.argha" },
];
