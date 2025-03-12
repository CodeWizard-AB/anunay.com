import React from "react";
import { Button } from "./ui/button";
import { Terminal, TypingAnimation } from "./magicui/terminal";
import { ShineBorder } from "./magicui/shine-border";
import Image from "next/image";
import Link from "next/link";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Download } from "lucide-react";

export default function Hero() {
	return (
		<section className="grid md:grid-cols-2 gap-10 my-10">
			<div className="space-y-10">
				<div className="relative w-max overflow-hidden">
					<div
						className={cn(
							"group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-background dark:border-white/20 dark:bg-background dark:hover:bg-neutral-800"
						)}
					>
						<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
							<span>✨ Confident Web Developer</span>
							<Code className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
						</AnimatedShinyText>

						<BorderBeam
							duration={4}
							size={300}
							reverse
							className="from-transparent via-primary to-transparent"
						/>
					</div>
				</div>

				<div className="flex items-center gap-6">
					<Image
						src="https://avatars.githubusercontent.com/u/134149605?s=400&u=4bf2defc0b601c505be9cb6db7eb8040a5f8d6af&v=4"
						alt="Profile Photo"
						width={150}
						height={150}
						className="rounded-lg"
					/>
					<h1 className="text-7xl font-bold bg-linear-to-br from-primary to-white bg-clip-text text-transparent pb-2">
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

			<div className="relative">
				<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
				<Terminal>
					<TypingAnimation>
						{`const coder = {
  name: 'Master Coder',
  skills: ['React', 'Node'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`}
					</TypingAnimation>
				</Terminal>
			</div>
		</section>
	);
}
