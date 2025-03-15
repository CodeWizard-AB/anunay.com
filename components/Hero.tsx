"use client";

import React from "react";
import { Button } from "./ui/button";
import { Terminal, TypingAnimation } from "./magicui/terminal";
import Image from "next/image";
import Link from "next/link";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { CalendarDays, Code } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import Profile from "@/assets/profile-1.webp";
import { Fira_Code } from "next/font/google";
import * as motion from "motion/react-client";
import { CardContainer } from "./ui/3d-card";
import { Spotlight } from "./ui/spotlight";
import { GridPattern } from "./magicui/grid-pattern";
import { FaGithub } from "react-icons/fa";

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Hero() {
	return (
		<section className="grid md:grid-cols-2 gap-10 mt-32 mb-24 md:mb-32 items-center">
			<Spotlight
				className="left-0 -top-10 md:-top-30 xl:-top-10"
				fill="white"
			/>
			<GridPattern
				width={50}
				height={50}
				strokeDasharray="5"
				className={cn(
					"[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-50 lg:opacity-100"
				)}
			/>

			<div className="space-y-10 flex flex-col items-center md:items-start">
				<motion.div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="relative w-max overflow-hidden rounded-md"
				>
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
				</motion.div>

				<div className="flex items-center justify-center gap-6">
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
						className="md:w-full h-full"
					>
						<Image
							src={Profile}
							alt="Profile Photo"
							className="rounded-lg aspect-square object-cover object-top"
							placeholder="blur"
							priority
							sizes="(max-width: 640px) 120px, (max-width: 1024px) 192px, 256px"
							width={256}
							height={256}
						/>
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeInOut" }}
						className="text-6xl lg:text-8xl font-bold bg-linear-to-tl from-primary to-white bg-clip-text text-transparent pb-2 w-min"
					>
						Anunay Argha
					</motion.h1>
				</div>

				<motion.div
					className="leading-loose text-center md:text-left tracking-wider text-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				>
					A Frontend-Focused, Full-Stack Ready - Passionate about transforming
					visions into intuitive, meaningful, and unforgettable digital
					experiences.
				</motion.div>

				<div className="flex items-center gap-6">
					<Link href="https://calendly.com/adobex092" target="_blank">
						<Button size="lg">
							Book a Meeting <CalendarDays />
						</Button>
					</Link>
					<Link href="https://github.com/CodeWizard-AB" target="_blank">
						<Button variant="outline" size="lg">
							Github <FaGithub />
						</Button>
					</Link>
				</div>
			</div>
			<CardContainer className="max-w-full  h-full w-full relative overflow-hidden">
				<motion.div
					className="h-[535px] w-[360px] sm:w-full rounded-md relative overflow-hidden"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<BorderBeam
						duration={8}
						size={500}
						className="from-pink-500 via-primary to-transparent"
					/>
					<Terminal>
						<TypedAnimation />
					</Terminal>
				</motion.div>
			</CardContainer>
		</section>
	);
}

function TypedAnimation() {
	return (
		<div className={cn(firaCode.className, "*:leading-loose text-white")}>
			<div>
				<TypingAnimation className="text-pink-500">const</TypingAnimation>{" "}
				<TypingAnimation delay={150}>coder</TypingAnimation>{" "}
				<TypingAnimation delay={300} className="text-pink-500">
					=
				</TypingAnimation>{" "}
				<TypingAnimation delay={450} className="text-gray-500">
					{"{"}
				</TypingAnimation>
			</div>

			<div className="pl-8">
				<div>
					<TypingAnimation delay={600}>name</TypingAnimation>
					<TypingAnimation delay={750} className="text-gray-500">
						:
					</TypingAnimation>{" "}
					<TypingAnimation delay={900} className="text-gray-500">
						&quot;
					</TypingAnimation>
					<TypingAnimation delay={1050} className="text-yellow-300">
						Master Coder
					</TypingAnimation>
					<TypingAnimation delay={1200} className="text-gray-500">
						&quot;
					</TypingAnimation>
					<TypingAnimation delay={1350} className="text-gray-500">
						,
					</TypingAnimation>
				</div>
				<div>
					<TypingAnimation delay={1500}>skills</TypingAnimation>
					<TypingAnimation delay={1650} className="text-gray-500">
						:
					</TypingAnimation>{" "}
					<TypingAnimation delay={1800} className="text-gray-500">
						{"["}
					</TypingAnimation>
					<TypingAnimation delay={1950} className="text-gray-500">
						&quot;
					</TypingAnimation>
					<TypingAnimation delay={2100} className="text-yellow-300">
						React.js
					</TypingAnimation>
					<TypingAnimation delay={2250} className="text-gray-500">
						&quot;
					</TypingAnimation>
					<TypingAnimation delay={2400} className="text-gray-500">
						,
					</TypingAnimation>{" "}
					<TypingAnimation delay={2550} className="text-gray-500">
						&quot;
					</TypingAnimation>
					<TypingAnimation delay={2700} className="text-yellow-300">
						Next.js
					</TypingAnimation>
					<TypingAnimation delay={2850} className="text-gray-500">
						&quot;
					</TypingAnimation>
					<TypingAnimation
						delay={3000}
						className="text-gray-500 lg:inline hidden"
					>
						,
					</TypingAnimation>
					<span className="hidden lg:inline"> </span>
					<TypingAnimation
						delay={3150}
						className="text-gray-500 lg:inline hidden"
					>
						&quot;
					</TypingAnimation>
					<TypingAnimation
						delay={3300}
						className="text-yellow-300 lg:inline hidden"
					>
						Express.js
					</TypingAnimation>
					<TypingAnimation
						delay={3450}
						className="text-gray-500 lg:inline hidden"
					>
						&quot;
					</TypingAnimation>
					<TypingAnimation delay={3600} className="text-gray-500">
						{"]"}
					</TypingAnimation>
					<TypingAnimation delay={3750} className="text-gray-500">
						,
					</TypingAnimation>
				</div>
				<div>
					<TypingAnimation delay={3900}>hardWorker</TypingAnimation>
					<TypingAnimation delay={4050} className="text-gray-500">
						:
					</TypingAnimation>{" "}
					<TypingAnimation delay={4200} className="text-orange-400">
						true
					</TypingAnimation>
					<TypingAnimation delay={4350}>,</TypingAnimation>
				</div>
				<div>
					<TypingAnimation delay={4500}>problemSolver</TypingAnimation>
					<TypingAnimation delay={4650} className="text-gray-500">
						:
					</TypingAnimation>{" "}
					<TypingAnimation delay={4800} className="text-orange-400">
						true
					</TypingAnimation>
					<TypingAnimation delay={4950}>,</TypingAnimation>
				</div>
				<div>
					<TypingAnimation delay={5100} className="text-green-400">
						hireable
					</TypingAnimation>
					<TypingAnimation delay={5250} className="text-gray-500">
						:
					</TypingAnimation>{" "}
					<TypingAnimation delay={5400} className="text-purple-400">
						function
					</TypingAnimation>
					<TypingAnimation delay={5550} className="text-gray-500">
						{"()"}
					</TypingAnimation>{" "}
					<TypingAnimation delay={5700} className="text-gray-500">
						{"{"}
					</TypingAnimation>
				</div>
				<div className="pl-8">
					<TypingAnimation delay={5850} className="text-purple-400">
						return
					</TypingAnimation>{" "}
					<TypingAnimation delay={6000} className="text-gray-500">
						(
					</TypingAnimation>
					<div className="pl-8">
						<div>
							<TypingAnimation delay={6150} className="text-sky-300">
								this
							</TypingAnimation>
							<TypingAnimation delay={6300}>.</TypingAnimation>
							<TypingAnimation delay={6450}>hardWorker</TypingAnimation>{" "}
							<TypingAnimation delay={6600} className="text-pink-500">
								&&
							</TypingAnimation>
						</div>
						<div>
							<TypingAnimation delay={6750} className="text-sky-300">
								this
							</TypingAnimation>
							<TypingAnimation delay={6900}>.</TypingAnimation>
							<TypingAnimation delay={7050}>problemSolver</TypingAnimation>{" "}
							<TypingAnimation delay={7200} className="text-pink-500">
								&&
							</TypingAnimation>
						</div>
						<div>
							<TypingAnimation delay={7350} className="text-sky-300">
								this
							</TypingAnimation>
							<TypingAnimation delay={7500}>.</TypingAnimation>
							<TypingAnimation delay={7650}>skills</TypingAnimation>
							<TypingAnimation delay={7800}>.</TypingAnimation>
							<TypingAnimation delay={7950} className="text-orange-300">
								length
							</TypingAnimation>{" "}
							<TypingAnimation delay={8100} className="text-pink-500">
								{">="}
							</TypingAnimation>{" "}
							<TypingAnimation delay={8250} className="text-orange-300">
								3
							</TypingAnimation>
						</div>
					</div>
					<TypingAnimation delay={8550} as="p" className="text-gray-500">
						);
					</TypingAnimation>
				</div>
				<TypingAnimation delay={8700} className="text-gray-500">
					{"},"}
				</TypingAnimation>
			</div>
			<TypingAnimation delay={8850} className="text-gray-500">
				{"};"}
			</TypingAnimation>
		</div>
	);
}
