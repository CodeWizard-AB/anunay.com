import Security from "@/assets/security.png";
import Phone from "@/assets/phone.png";
import FasterLoad from "@/assets/fast.png";
import Image from "next/image";
import Code from "@/assets/image.png";
import * as motion from "motion/react-client";

import SectionTitle from "./ui/section-title";
import SectionHeading from "./ui/section-heading";
import { GlowingEffect } from "./ui/glowing-effect";

export default function Features() {
	return (
		<section className="mb-24" id="features">
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="mt-auto"
			>
				<SectionTitle>Quality features</SectionTitle>
				<SectionHeading>Everything you need to build your app</SectionHeading>
				<div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
					<div className="relative md:row-span-2">
						<GlowingEffect
							spread={40}
							glow={true}
							disabled={false}
							proximity={64}
							inactiveZone={0.01}
							className="rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]"
						/>
						<div className="absolute inset-px rounded-lg lg:rounded-l-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border">
							<div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
								<p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
									Mobile Responsive Design
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
									Your website will be fully responsive and adapt seamlessly to
									mobile, tablet, and desktop screens.
								</p>
							</div>
							<div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
								<div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden">
									<Image
										className="size-full object-cover object-top"
										src={Phone}
										alt="Responsive Mobile Screen"
									/>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
					</div>

					<div className="relative max-lg:row-start-1">
						<GlowingEffect
							spread={40}
							glow={true}
							disabled={false}
							proximity={64}
							inactiveZone={0.01}
							className="rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
						/>
						<div className="absolute inset-px rounded-lg max-lg:rounded-t-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border border-border">
							<div className="px-8 pt-8 sm:px-10 sm:pt-10">
								<p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
									Fast Loading Speed
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
									Optimized for performance using lazy loading, image
									compression, and efficient coding to ensure blazing-fast page
									speed.
								</p>
							</div>
							<div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
								<Image
									className="w-full max-lg:max-w-xs"
									src={FasterLoad}
									alt="Faster Load Image"
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
					</div>

					<div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 md:row-start-2">
						<GlowingEffect
							spread={40}
							glow={true}
							disabled={false}
							proximity={64}
							inactiveZone={0.01}
							className="rounded-[calc(var(--radius-lg)+1px)]"
						/>
						<div className="absolute inset-px rounded-l"></div>
						<div className="relative flex h-full flex-col overflow-hidden border border-border rounded-[calc(var(--radius-lg)+1px)]">
							<div className="px-8 pt-8 sm:px-10 sm:pt-10">
								<p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
									High-Level Security
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
									I implement best security practices such as SSL encryption,
									secure authentication, and data protection to safeguard your
									website.
								</p>
							</div>
							<div className="pb-3 md:my-6 lg:my-2">
								<Image
									className="h-52 lg:h-44 object-cover"
									src={Security}
									alt="Security Image"
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
					</div>

					<div className="relative md:col-span-2 lg:col-span-1 lg:row-span-2">
						<GlowingEffect
							spread={40}
							glow={true}
							disabled={false}
							proximity={64}
							inactiveZone={0.01}
							className="rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
						/>
						<div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border border-border max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
							<div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
								<p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
									Scalable & Maintainable Code
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
									I build websites with scalability in mind, using best
									practices so your website can grow without performance issues.
								</p>
							</div>
							<div className="relative min-h-[30rem] w-full grow">
								<div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden border border-r-0 border-b-0 border-border rounded-tl-xl shadow-2xl">
									<Image
										src={Code}
										alt="code"
										className="object-cover h-full object-left-bottom md:object-cover lg:object-left-bottom"
									/>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
