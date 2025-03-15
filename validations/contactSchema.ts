import { z } from "zod";

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