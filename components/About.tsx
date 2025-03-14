import Image from "next/image";
import Profile from "@/assets/profile-1.webp";
import SectionHeading from "./ui/section-heading";
import SectionTitle from "./ui/section-title";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import JavaScript from "@/assets/icons/js.svg";
import TypeScript from "@/assets/icons/ts.svg";
import Html from "@/assets/icons/html.svg";
import Css from "@/assets/icons/css.svg";
import MongoDB from "@/assets/icons/mongo.svg";
import Python from "@/assets/icons/python.svg";
import React from "@/assets/icons/react.svg";
import Git from "@/assets/icons/git.svg";
import Express from "@/assets/icons/express.svg";
import Next from "@/assets/icons/nextjs.svg";
import { MagicCard } from "./magicui/magic-card";
import { Marquee } from "./magicui/marquee";

const socials = [
	{ icon: <FaGithub />, href: "https://github.com/CodeWizard-AB" },
	{ icon: <FaLinkedin />, href: "https://linkedin.com/in/anunayargha" },
	{ icon: <FaFacebook />, href: "https://www.facebook.com/anunay.argha" },
];

export default function About() {
	return (
		<section className="py-16">
			<div className="mb-20">
				<SectionTitle>About myself</SectionTitle>
				<SectionHeading>A short introduction about who am I</SectionHeading>
			</div>

			<div className="grid md:grid-cols-[40fr_60fr] items-center gap-10">
				<figure className="border border-border p-8 rounded-lg">
					<Image src={Profile} alt="Anunay Argha" className="rounded-lg" />

					<figcaption className="flex items-center mt-6 *:text-2xl gap-4">
						{socials.map(({ href, icon }) => (
							<Link key={href} href={href} target="_blank">
								{icon}
							</Link>
						))}
					</figcaption>
				</figure>

				{/* Right - Text Content */}
				<div className="max-w-full overflow-hidden">
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
					<div className="mt-6">
						<Marquee pauseOnHover className="[--duration:20s]">
							{skills.map((skill) => (
								<Card key={skill.name} src={skill.src} name={skill.name} />
							))}
						</Marquee>
					</div>
				</div>
			</div>
		</section>
	);
}
function Card({ src, name }: { src: string; name: string }) {
	return (
		<MagicCard gradientFrom="#FB64B6" gradientTo="#7C5DDD">
			<div className="border-2 border-border rounded-md p-6 text-center space-y-4">
				<figure>
					<Image src={src} alt={name} className="w-32 aspect-square" />
					<figcaption>{name}</figcaption>
				</figure>
			</div>
		</MagicCard>
	);
}

const skills = [
	{ name: "JavaScript", src: JavaScript },
	{ name: "TypeScript", src: TypeScript },
	{ name: "HTML", src: Html },
	{ name: "CSS", src: Css },
	{ name: "MongoDB", src: MongoDB },
	{ name: "Python", src: Python },
	{ name: "ReactJs", src: React },
	{ name: "Git", src: Git },
	{ name: "ExpressJs", src: Express },
	{ name: "NextJs", src: Next },
];
