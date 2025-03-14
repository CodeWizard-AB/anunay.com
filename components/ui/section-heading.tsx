export default function SectionHeading({ children }: { children: string }) {
	return (
		<p className="mx-auto mt-4 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance sm:text-6xl bg-linear-to-br text-transparent from-primary to-white bg-clip-text pb-2">
			{children}
		</p>
	);
}
