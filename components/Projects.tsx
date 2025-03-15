import Image from "next/image";
import SectionHeading from "./ui/section-heading";
import SectionTitle from "./ui/section-title";
import { Tabs } from "./ui/tabs";
import Project1 from "@/assets/projects/project1.png";
import Project2 from "@/assets/projects/project2.png";
import Link from "next/link";

export default function Projects() {
	return (
		<section className="mb-48 md:mb-60" id="projects">
			<div>
				<SectionTitle>Featured Projects</SectionTitle>
				<SectionHeading>Turning ideas into web solutions.</SectionHeading>
			</div>
			<div>
				<div className="mt-10 h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
					<Tabs tabs={tabs} />
				</div>
			</div>
		</section>
	);
}

function Card({
	name,
	src,
	href,
}: {
	name: string;
	src: string;
	href: string;
}) {
	return (
		<div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-chart-5">
			<p>{name}</p>
			<Link href={href} target="_blank">
				<Image
					src={src}
					alt={name + " feature project image"}
					width="1000"
					height="1000"
					className="object-cover object-left-top h-[85%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
				/>
			</Link>
		</div>
	);
}

const tabs = [
	{
		title: "Saas Landing Page",
		value: "saas-landing-page",
		content: (
			<Card
				name="Saas Landing Page"
				src={Project1.src}
				href="https://saas-landing-page-anunay.vercel.app"
			/>
		),
	},
	{
		title: "Food Landing Page",
		value: "food-landing-page",
		content: (
			<Card
				name="Food Landing Page"
				src={Project2.src}
				href="https://onmifood-ab.netlify.app"
			/>
		),
	},
];
