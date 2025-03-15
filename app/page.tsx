import About from "@/components/About";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { Toaster } from "sonner";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Features />
			<Projects />
			<WhyChooseMe />
			<Contact />
			<Toaster richColors />
		</>
	);
}
