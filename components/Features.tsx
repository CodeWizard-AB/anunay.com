import Security from "@/assets/security.png";
import Image from "next/image";

export default function Features() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-center text-base font-semibold text-pink-500">
					Deploy faster
				</h2>
				<p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl bg-linear-to-br text-transparent from-primary to-white bg-clip-text">
					Everything you need to deploy your app
				</p>
				<div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
					<div className="relative lg:row-span-2">
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
								<div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
									<img
										className="size-full object-cover object-top"
										src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
					</div>
					<div className="relative max-lg:row-start-1">
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
								<img
									className="w-full max-lg:max-w-xs"
									src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
									alt=""
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
					</div>
					<div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
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
							<div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
								<Image
									className="h-[min(152px,40cqw)] object-cover mt-3"
									src={Security}
									alt="Security Image"
								/>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
					</div>
					<div className="relative lg:row-span-2">
						<div className="absolute inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
						<div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border border-border max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
							<div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
								<p className="mt-2 text-lg font-medium tracking-tight max-lg:text-center">
									Powerful APIs
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
									Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
									eget sem sodales gravida.
								</p>
							</div>
							<div className="relative min-h-[30rem] w-full grow">
								<div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
									<div className="flex bg-gray-800/40 ring-1 ring-white/5">
										<div className="-mb-px flex text-sm/6 font-medium text-gray-400">
											<div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
												NotificationSetting.jsx
											</div>
											<div className="border-r border-gray-600/10 px-4 py-2">
												App.jsx
											</div>
										</div>
									</div>
									<div className="px-6 pt-6 pb-14">
										{/* Your code example */}
									</div>
								</div>
							</div>
						</div>
						<div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
