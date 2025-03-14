"use client";

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

export default function Contact() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phone: "",
			budget: "",
			email: "",
			message: "",
			websiteType: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<section className="mb-24">
			<div>
				<SectionTitle>Contact with me</SectionTitle>
				<SectionHeading>Let’s talk about your project</SectionHeading>
			</div>

			<div className="grid md:grid-cols-[60fr_40fr] gap-10 mt-16">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 grid grid-cols-2 gap-x-6"
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
											placeholder="you@example.com"
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
											placeholder="123-456-7890"
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
									<FormLabel>Budget</FormLabel>
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
									<FormLabel>Website Type</FormLabel>
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
								<FormItem>
									<FormLabel>Message</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell me about your project"
											{...field}
											className="mt-3 col-span-2"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Submit Button */}
						<Button type="submit" className="col-span-2 w-max">
							Submit
						</Button>
					</form>
				</Form>
			</div>
		</section>
	);
}

export const formSchema = z.object({
	firstName: z
		.string()
		.min(2, "First name must be at least 2 characters")
		.max(50, "First name must be at most 50 characters"),

	lastName: z
		.string()
		.min(2, "Last name must be at least 2 characters")
		.max(50, "Last name must be at most 50 characters"),

	email: z.string().email("Invalid email address"),

	phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),

	budget: z.string().regex(/^\d+$/, "Budget must be a valid number"),

	websiteType: z
		.string()
		.min(3, "Website type must be at least 3 characters")
		.max(100, "Website type must be at most 100 characters"),

	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(1000, "Message must be at most 1000 characters"),
});
