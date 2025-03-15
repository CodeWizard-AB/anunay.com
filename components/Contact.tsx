"use client";

import {
	Mail,
	Loader2,
	MapPinHouse,
	PhoneCall,
	SendHorizontal,
} from "lucide-react";
import Profile from "@/assets/profile-1.webp";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SectionHeading from "./ui/section-heading";
import SectionTitle from "./ui/section-title";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { GridPattern } from "./magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { sendContactEmail } from "@/actions/contact";
import { toast } from "sonner";
import { formSchema } from "@/validations/contactSchema";

export default function Contact() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			budget: "",
			websiteType: "",
			message: "",
		},
	});
	const {
		reset,
		formState: { isSubmitting },
	} = form;

	async function onSubmit(data: z.infer<typeof formSchema>) {
		const result = await sendContactEmail(data);
		if (result?.success) {
			reset();
			toast.success(result.success);
		}

		if (result?.error) {
			toast.error(result.error);
		}
	}

	return (
		<section className="mb-24 relative" id="contact">
			<GridPattern
				width={100}
				height={100}
				className={cn(
					"[mask-image:radial-gradient(1000px_circle_at_bottom,white,transparent)] md:[mask-image:radial-gradient(1000px_circle_at_right,white,transparent)] top-0 bottom-0 opacity-40"
				)}
			/>

			<div>
				<SectionTitle>Contact with me</SectionTitle>
				<SectionHeading>Let’s talk about your project</SectionHeading>
			</div>

			<div className="grid md:grid-cols-[60fr_40fr] gap-10 lg:gap-20 mt-20">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="grid md:grid-cols-2 gap-6"
					>
						{/* First Name */}
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="John" {...field} className="mt-3" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Last Name */}
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Doe" {...field} className="mt-3" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Email */}
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="you@gmail.com"
											{...field}
											className="mt-3"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Phone */}
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone</FormLabel>
									<FormControl>
										<Input
											placeholder="+123-456-7890"
											{...field}
											className="mt-3"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Budget */}
						<FormField
							control={form.control}
							name="budget"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Budget ($)</FormLabel>
									<FormControl>
										<Input placeholder="$5000" {...field} className="mt-3" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Website Type */}
						<FormField
							control={form.control}
							name="websiteType"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Website (Type)</FormLabel>
									<FormControl>
										<Input
											placeholder="E-commerce, Portfolio, Blog"
											{...field}
											className="mt-3"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Message */}
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem className="md:col-span-2">
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell me about your project"
											{...field}
											className="mt-3"
											rows={5}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Submit Button */}
						<Button
							type="submit"
							className="md:col-span-2 w-max"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<>
									Please Wait
									<Loader2 className="animate-spin" />
								</>
							) : (
								<>
									Submit <SendHorizontal />
								</>
							)}
						</Button>
					</form>
				</Form>
				<div>
					<div className="flex gap-4 items-center">
						<Image
							placeholder="blur"
							className="w-16 h-16 rounded-full object-cover object-top"
							src={Profile}
							alt="Contact profile image"
						/>
						<div>
							<p className="text-lg">Anunay Argha</p>
							<p className="text-gray-500 text-sm">Web Developer</p>
						</div>
					</div>
					<blockquote className="italic mt-6 leading-loose text-gray-400">
						&quot;A great website isn’t just about design or code—it’s about
						creating an experience that connects, engages, and delivers results.
						Let’s collaborate to turn your vision into reality and build
						something truly remarkable.&quot;
					</blockquote>
					<div className="mt-10 space-y-4">
						{contacts.map(({ icon, value }) => (
							<div
								className="flex gap-4 items-center text-gray-300"
								key={value}
							>
								{icon}
								<p>{value}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const contacts = [
	{ icon: <Mail />, value: "anunayargha@gmail.com" },
	{ icon: <PhoneCall />, value: "+8801869322827" },
	{ icon: <MapPinHouse />, value: "Dhaka, Bangladesh" },
];


