import nodemailer from "nodemailer";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { firstName, lastName, email, message } = req.body;
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		const mailOptions = {
			from: process.env.GMAIL_USER,
			to: process.env.GMAIL_USER,
			subject: `New Contact Form Submission from ${firstName} ${lastName}`,
			text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
		};

		const confirmationMail = {
			from: process.env.GMAIL_USER,
			to: email,
			subject: "Thank you for contacting us!",
			text: "We have received your message and will get back to you soon.",
		};

		try {
			await transporter.sendMail(mailOptions);
			await transporter.sendMail(confirmationMail);
			res.status(200).json({ message: "Message sent successfully" });
		} catch (error) {
			res.status(500).json({ message: "Error sending message" });
		}
	} else {
		res.status(405).json({ message: "Method not allowed" });
	}
}
