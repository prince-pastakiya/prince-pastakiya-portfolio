// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// EmailJS
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [statusMessage, setStatusMessage] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.send(
				"service_5farnxs",
				"template_pytmu83",
				formData,
				"HPlgxfa5HxU2ch-3U"
			)
			.then(
				(response) => {
					setStatusMessage("Message sent successfully!");
					setFormData({ name: "", email: "", subject: "", message: "" });
				},
				(error) => {
					setStatusMessage("Failed to send message. Please try again.");
				}
			);
	};

	return (
		<div className="h-full bg-primary/30">
			<div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
				<div className="flex flex-col w-full max-w-[700px]">
					<motion.h2
						variants={fadeIn("up", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 text-center mb-12">
						Connect <span className="text-accent">Me.</span>
					</motion.h2>
					<motion.form
						onSubmit={sendEmail}
						variants={fadeIn("up", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="flex-1 flex flex-col gap-6 w-full mx-auto">
						<div className="flex gap-x-6 w-full">
							<input
								type="text"
								name="name"
								placeholder="Name"
								className="input"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="input"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							className="input"
							value={formData.subject}
							onChange={handleChange}
							required
						/>
						<textarea
							name="message"
							placeholder="Message"
							className="textarea"
							value={formData.message}
							onChange={handleChange}
							required></textarea>
						<button
							type="submit"
							className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
							<span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
								Say Hello
							</span>
							<BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
						</button>
					</motion.form>
					{statusMessage && <p className="text-white mt-4">{statusMessage}</p>}
				</div>
			</div>
		</div>
	);
};

export default Contact;
