"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedSpanProps extends MotionProps {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}

export const AnimatedSpan = ({
	children,
	delay = 0,
	className,
	...props
}: AnimatedSpanProps) => (
	<motion.div
		initial={{ opacity: 0, y: -5 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.3, delay: delay / 1000 }}
		className={cn("grid text-sm font-normal tracking-tight", className)}
		{...props}
	>
		{children}
	</motion.div>
);

interface TypingAnimationProps extends MotionProps {
	children: string;
	className?: string;
	duration?: number;
	delay?: number;
	as?: React.ElementType;
}

export const TypingAnimation = ({
	children,
	className,
	duration = 60,
	delay = 0,
	as: Component = "span",
	...props
}: TypingAnimationProps) => {
	if (typeof children !== "string") {
		throw new Error("TypingAnimation: children must be a string. Received:");
	}

	const MotionComponent = motion.create(Component, {
		forwardMotionProps: true,
	});

	const [displayedText, setDisplayedText] = useState<string>("");
	const [started, setStarted] = useState(false);
	const elementRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const startTimeout = setTimeout(() => {
			setStarted(true);
		}, delay);
		return () => clearTimeout(startTimeout);
	}, [delay]);

	useEffect(() => {
		if (!started) return;

		let i = 0;
		const typingEffect = setInterval(() => {
			if (i < children.length) {
				setDisplayedText(children.substring(0, i + 1));
				i++;
			} else {
				clearInterval(typingEffect);
			}
		}, duration);

		return () => {
			clearInterval(typingEffect);
		};
	}, [children, duration, started]);

	return (
		<MotionComponent
			ref={elementRef}
			className={cn(
				"text-base font-normal tracking-normal",
				className
			)}
			{...props}
		>
			{displayedText}
		</MotionComponent>
	);
};

interface TerminalProps {
	children: React.ReactNode;
	className?: string;
}

export const Terminal = ({ children, className }: TerminalProps) => {
	return (
		<div
			className={cn(
				"z-0 h-full w-full rounded-md border border-white/20 bg-background",
				className
			)}
		>
			<div className="flex flex-col gap-y-2 border-b border-white/20 py-5 px-8">
				<div className="flex flex-row gap-x-2">
					<div className="w-3 aspect-square rounded-full bg-red-500"></div>
					<div className="w-3 aspect-square rounded-full bg-yellow-500"></div>
					<div className="w-3 aspect-square rounded-full bg-green-500"></div>
				</div>
			</div>
			<pre className="py-8 pl-6 pr-4 sm:p-8">
				<code className="grid gap-y-1 overflow-auto">{children}</code>
			</pre>
		</div>
	);
};
