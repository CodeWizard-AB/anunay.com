import Image from "next/image";
import Profile from "@/assets/profile-2.webp";

export default function HeroSection() {
	return (
		<section className="py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
			<div className="relative">
				<div className="absolute -left-5 -top-5 w-full h-full border-2 border-gray-500 rounded-lg"></div>
				<Image
					src={Profile}
					alt="John Smith"
					width={400}
					height={400}
					className="rounded-lg relative z-10"
				/>
			</div>

			{/* Right - Text Content */}
			<div className="max-w-xl">
				<h1 className="text-4xl font-bold">
					I’m <span className="text-blue-400">John Smith</span>. I’m passionate
					about crafting exceptional websites.
				</h1>
				<p className="text-lg text-gray-300 mt-4">
					With a blend of design skills and coding expertise, I create unique
					online experiences that captivate users.
				</p>
				<p className="text-md text-gray-400 mt-6">
					Looking for a top-notch web developer to revamp your hotel’s website?
					With years of experience and a keen eye for design, I can take your
					site to the next level, helping you attract more visitors and boost
					your bookings.
				</p>
			</div>
		</section>
	);
}
