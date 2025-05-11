// Contact.js - Frontend Component

import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/contact", formData);
			setStatus("Message sent successfully!");
			setFormData({ firstName: "", lastName: "", email: "", message: "" });
		} catch (error) {
			setStatus("Failed to send message.");
		}
	};

	return (
		<div className="h-full bg-primary/30">
			<div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
				<div className="flex flex-col w-full max-w-[700px]">
					<motion.h2 className="h2 text-center mt-6 mb-12">
						Connect <span className="text-accent">Me.</span>
					</motion.h2>
					<motion.form
						onSubmit={handleSubmit}
						className="flex flex-col gap-6 w-full mx-auto">
						<div className="flex gap-x-6 w-full">
							<input
								name="firstName"
								type="text"
								placeholder="First Name"
								value={formData.firstName}
								onChange={handleChange}
								className="input"
							/>
							<input
								name="lastName"
								type="text"
								placeholder="Last Name"
								value={formData.lastName}
								onChange={handleChange}
								className="input"
							/>
						</div>
						<input
							name="email"
							type="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							className="input"
						/>
						<textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							className="textarea"></textarea>
						<button
							type="submit"
							className="btn rounded-full border border-white/50 max-w-[170px] px-8">
							Say Hello
							<BsArrowRight className="ml-2 text-[22px]" />
						</button>
						{status && <p className="mt-4">{status}</p>}
					</motion.form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
