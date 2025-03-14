import Image from "next/image";
import Profile from "@/assets/profile-1.webp";
import SectionHeading from "./ui/section-heading";
import SectionTitle from "./ui/section-title";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socials = [
	{ icon: <FaGithub />, href: "https://github.com/CodeWizard-AB" },
	{ icon: <FaLinkedin />, href: "https://linkedin.com/in/anunayargha" },
	{ icon: <FaFacebook />, href: "https://www.facebook.com/anunay.argha" },
];

export default function About() {
	return (
		<section className="py-16">
			<div className="mb-20">
				<SectionTitle>About Myself</SectionTitle>
				<SectionHeading>A short introduction about who am I</SectionHeading>
			</div>

			<div className="grid md:grid-cols-[40fr_60fr] items-center gap-10">
				<figure className="border border-border p-8 rounded-lg">
					<Image src={Profile} alt="Anunay Argha" className="rounded-lg" />

					<figcaption className="flex justify-end items-center mt-6 *:text-2xl gap-4">
						{socials.map(({ href, icon }) => (
							<Link key={href} href={href} target="_blank">
								{icon}
							</Link>
						))}
					</figcaption>
				</figure>

				{/* Right - Text Content */}
				<div>
					<h1 className="text-4xl font-bold">
						I’m Anunay. I’m passionate about crafting exceptional websites. With
						a blend of coding expertise, I create unique online experiences that
						captivate users.
					</h1>
					<p className="text-md text-gray-400 mt-6">
						Looking for a top-notch web developer to revamp your hotel’s
						website? With years of experience and a keen eye for design, I can
						take your site to the next level, helping you attract more visitors
						and boost your bookings.
					</p>
				</div>
			</div>
		</section>
	);
}
