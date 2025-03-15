"use client";

import {
	motion,
	MotionValue,
	useScroll,
	useTransform,
	useSpring,
} from "motion/react";
import { easeOut } from "motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
	children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start 90%", "end start"],
	});

	if (typeof children !== "string") {
		throw new Error("TextReveal: children must be a string");
	}

	const words = children.split(" ");

	return (
		<div ref={targetRef} className={cn("relative z-0", className)}>
			<div className="sticky top-0 mx-auto flex max-w-4xl items-center bg-transparent">
				<span className="flex flex-wrap text-black/20 dark:text-white/20 text-2xl text-center md:text-left lg:text-3xl leading-normal">
					{words.map((word, i) => {
						const start = i / words.length - 0.5;
						const end = start + 1 / words.length;
						return (
							<Word key={i} progress={scrollYProgress} range={[start, end]}>
								{word}
							</Word>
						);
					})}
				</span>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: MotionValue<number>;
	range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
	const opacity = useTransform(progress, range, [0, 1], {
		ease: easeOut,
	});
	const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });

	return (
		<span className="xl:lg-3 relative mx-1 lg:mx-1.5">
			<span className="absolute opacity-30">{children}</span>
			<motion.span
				style={{ opacity: smoothOpacity }}
				className="text-black dark:text-white"
			>
				{children}
			</motion.span>
		</span>
	);
};
