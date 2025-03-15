import Image from "next/image";
import SectionHeading from "./ui/section-heading";
import SectionTitle from "./ui/section-title";
import Project from "@/assets/image.png";
import { Tabs } from "./ui/tabs";

export default function Projects() {
	return (
		<section className="mb-60" id="projects">
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

function Card({ name }: { name: string }) {
	return (
		<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-chart-5">
			<p>{name}</p>
			<Image
				src={Project}
				alt={name + " feature project image"}
				width="1000"
				height="1000"
				className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
			/>
		</div>
	);
}

const tabs = [
	{
		title: "Product",
		value: "product",
		content: <Card name="Product tab" />,
	},
	{
		title: "Services",
		value: "services",
		content: <Card name="Services tab" />,
	},
	{
		title: "Random",
		value: "random",
		content: <Card name="Random tab" />,
	},
];
