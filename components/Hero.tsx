import React from "react";
import { Button } from "./ui/button";
import { Terminal, TypingAnimation } from "./magicui/terminal";
import Image from "next/image";
import Link from "next/link";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Download } from "lucide-react";
import Profile from "@/assets/profile-1.webp";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

const coder = `const coder = {
  name: 'Master Coder',
  skills: ['React.js', 'Next.js', 'Tailwind CSS'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

export default function Hero() {
	return (
		<section className="grid md:grid-cols-2 gap-10 my-10 items-center">
			<div className="space-y-10">
				<div className="relative w-max overflow-hidden rounded-md">
					<div
						className={cn(
							"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-background dark:border-white/20 dark:bg-background"
						)}
					>
						<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
							<span>✨ Confident Web Developer</span>
							<Code className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedShinyText>
						<BorderBeam
							duration={4}
							size={200}
							className="from-transparent via-primary to-transparent"
						/>
					</div>
				</div>

				<div className="flex items-center gap-6">
					<Image
						src={Profile}
						alt="Profile Photo"
						className="rounded-lg w-48 aspect-square object-cover object-top"
						placeholder="blur"
						priority
					/>
					<h1 className="text-8xl font-bold bg-linear-to-br from-primary to-white bg-clip-text text-transparent pb-2">
						Anunay Argha
					</h1>
				</div>

				<p className="leading-loose tracking-wider">
					A Frontend-Focused, Full-Stack Ready - Passionate about transforming
					visions into intuitive, meaningful, and unforgettable digital
					experiences.
				</p>

				<Link href="/" download>
					<Button>
						Download CV <Download />
					</Button>
				</Link>
			</div>

			<div className="h-full rounded-md relative overflow-hidden">
				<BorderBeam
					duration={8}
					size={400}
					className="from-pink-500 via-primary to-transparent"
				/>
				<Terminal>
					<div
						className={cn(
							"*:tracking-normal *:text-base *:leading-loose",
							firaCode.className
						)}
					>
						{coder}
					</div>
				</Terminal>
			</div>
		</section>
	);
}
