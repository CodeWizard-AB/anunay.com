import {
	Html,
	Head,
	Tailwind,
	Container,
	Section,
	Text,
	Hr,
	Link,
} from "@react-email/components";

interface ContactEmailProps {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	budget: string;
	websiteType: string;
	message: string;
}

export default function ContactEmail({
	firstName,
	lastName,
	email,
	phone,
	budget,
	websiteType,
	message,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Container className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
					<Section className="text-center">
						<Text className="text-2xl font-semibold text-gray-800">
							📩 New Contact Message
						</Text>
					</Section>

					<Hr className="my-4 border-gray-300" />

					<Text className="text-gray-700">
						<strong>Name:</strong> {firstName} {lastName}
					</Text>
					<Text className="text-gray-700">
						<strong>Email:</strong> {email}
					</Text>
					<Text className="text-gray-700">
						<strong>Phone:</strong> {phone}
					</Text>
					<Text className="text-gray-700">
						<strong>Budget:</strong> ${budget}
					</Text>
					<Text className="text-gray-700">
						<strong>Website Type:</strong> {websiteType}
					</Text>

					<Hr className="my-4 border-gray-300" />

					<Text className="text-gray-800 font-semibold">💬 Message:</Text>
					<Text className="text-gray-600 italic bg-gray-100 p-4 rounded-md">
						{message}
					</Text>

					<Hr className="my-4 border-gray-300" />

					<Section className="text-center text-gray-600 text-sm">
						<Text>
							⚡️ Powered by <Link href="https://resend.com">Resend</Link>
						</Text>
					</Section>
				</Container>
			</Tailwind>
		</Html>
	);
}
