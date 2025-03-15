import { cn } from "@/lib/utils";
import SectionTitle from "./ui/section-title";
import SectionHeading from "./ui/section-heading";
import {
	BicepsFlexed,
	BrainCircuit,
	History,
	Laptop,
	Puzzle,
	SearchCode,
	ShieldHalfIcon,
	Speech,
} from "lucide-react";

export function WhyChooseMe() {
	return (
		<section className="mb-16">
			<div>
				<SectionTitle>Why Choose Me</SectionTitle>
				<SectionHeading>
					Crafting fast, modern, and impactful websites.
				</SectionHeading>
			</div>
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</section>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
				(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
				index < 4 && "lg:border-b dark:border-neutral-800"
			)}
		>
			{index < 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			{index >= 4 && (
				<div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
			)}
			<div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
				{icon}
			</div>
			<div className="text-lg font-bold mb-2 relative z-10 px-10">
				<div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
				<span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
					{title}
				</span>
			</div>
			<p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
				{description}
			</p>
		</div>
	);
};

const features = [
	{
		title: "Passionate About Learning",
		description:
			"I stay updated with the latest trends to offer innovative solutions.",
		icon: <BicepsFlexed />,
	},
	{
		title: "Attention to Detail",
		description:
			"I ensure every element is perfectly executed for the best result.",
		icon: <SearchCode />,
	},
	{
		title: "Strong Problem-Solving Skills",
		description:
			"I approach challenges creatively, finding effective solutions quickly.",
		icon: <Puzzle />,
	},
	{
		title: "Clear Communication",
		description:
			"I maintain transparent communication to avoid any misunderstandings.",
		icon: <Speech />,
	},
	{
		title: "Collaborative Approach",
		description:
			"I value teamwork and input, ensuring better outcomes through collaboration.",
		icon: <ShieldHalfIcon />,
	},
	{
		title: "Adaptable and Flexible",
		description:
			"I am flexible to change and can adapt quickly to project needs.",
		icon: <BrainCircuit />,
	},
	{
		title: "Passion for Clean Code",
		description:
			"I write clean, maintainable code to ensure smooth project growth.",
		icon: <Laptop />,
	},
	{
		title: "Quick Turnaround",
		description: "I meet deadlines efficiently without sacrificing quality.",
		icon: <History />,
	},
];
