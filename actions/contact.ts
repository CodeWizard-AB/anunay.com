"use server";

import ContactEmail from "@/components/emails/contact-email";
import { formSchema } from "@/validations/contactSchema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: unknown) {
	const validation = formSchema.safeParse(data);
	if (!validation.success) {
		return { error: "Invalid input. Please check your details." };
	}

	const { firstName, lastName, email } = validation.data;

	try {
		await resend.emails.send({
			from: "Anunay Argha <onboarding@resend.dev>",
			to: "adobex092@gmail.com",
			subject: `New Contact from ${firstName} ${lastName}`,
			replyTo: email,
			react: ContactEmail(validation.data),
		});

		return { success: "Message sent successfully!" };
	} catch (error) {
		if (error instanceof Error) {
			return { error: "Failed to send message. Try again later." };
		}
	}
}
