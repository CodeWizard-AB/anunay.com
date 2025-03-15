import Image from "next/image";
import SectionHeading from "./ui/section-heading";
import SectionTitle from "./ui/section-title";
import Project from "@/assets/image.png";
import { Tabs } from "./ui/tabs";

export default function Projects() {
	return (
		<section className="mb-60">
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

const tabs = [
	{
		title: "Product",
		value: "product",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Product Tab</p>
				<DummyContent />
			</div>
		),
	},
	{
		title: "Services",
		value: "services",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
				<p>Services tab</p>
				<DummyContent />
			</div>
		),
	},
	{
		title: "Random",
		value: "random",
		content: (
			<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-chart-5">
				<p>Random tab</p>
				<DummyContent />
			</div>
		),
	},
];

function DummyContent() {
	return (
		<Image
			src={Project}
			alt="dummy image"
			width="1000"
			height="1000"
			className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
		/>
	);
}
