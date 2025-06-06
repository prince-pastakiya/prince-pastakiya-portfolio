import React, { useState } from "react";

// icons
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaWordpress,
	FaFigma,
	FaPython,
	FaJava,
} from "react-icons/fa";

import {
	SiPython,
	SiPandas,
	SiNumpy,
	SiScipy,
	SiJupyter,
	SiMysql,
} from "react-icons/si";

import { CiDatabase } from "react-icons/ci";
import { RiFileExcel2Fill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoTableau } from "react-icons/io5";
import { FcDoughnutChart, FcComboChart } from "react-icons/fc";

//  about data
export const aboutData = [
	{
		title: "skills",
		info: [
			{
				title: "Data Analysis",
				icons: [
					<SiPython key="python" />,
					<SiPandas key="pandas" />,
					<SiNumpy key="numpy" />,
					<SiScipy key="scipy" />,
					<SiJupyter key="jupyter" />,
				],
			},
			{
				title: "Data Management",
				icons: [
					<CiDatabase key="database" />,
					<RiFileExcel2Fill key="excel" />,
					<SiMysql key="mysql" />,
					<BiLogoPostgresql key="postgresql" />,
				],
			},
			{
				title: "Data Visualization",
				icons: [
					<IoLogoTableau key="tableau" />,
					<FcDoughnutChart key="doughnut" />,
					<FcComboChart key="combo" />,
				],
			},
		],
	},
	{
		title: "certifications",
		info: [
			{
				title: "AWS Certified Solutions Architect (Associate)",
				stage: "Jul 2024 - Jul 2027",
			},
			{
				title: "Tablueau Visualization",
				stage: "In Progress",
			},
		],
	},
	{
		title: "experience",
		info: [
			{
				title: "Data Analyst - Verizon",
				stage: "Feb 2025 - Present",
			},
			{
				title: "Data Analyst - Flexera",
				stage: "Jan 2024 - Dec 2024",
			},
		],
	},
	{
		title: "hackathons",
		info: [
			{
				title: "Web Development Hackathon - Troy University, Troy, AL",
				stage: "Nov 2024",
			},
			{
				title:
					"Data Science Hackathon - University of South Alabama, Mobile, AL",
				stage: "Mar 2024",
			},
		],
	},
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
	const [index, setIndex] = useState(0);
	console.log(index);
	return (
		<div className="h-full bg-primary/30 py-32 text-center xl:text-left">
			<Circles />
			{/* avatar img */}
			<motion.div
				variants={fadeIn("right", 0.2)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className="hidden xl:flex absolute bottom-0 -left-[370px]">
				<Avatar />
			</motion.div>
			<div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
				{/* text */}
				<div className="flex-1 flex flex-col justify-center">
					<motion.h2
						variants={fadeIn("right", 0.2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="text-[32px] font-bold mt-6 mb-6">
						<span className="text-accent mr-3">CodeCrafted:</span>
						Data Analysis & Visualization Showcase.
					</motion.h2>
					<motion.p
						variants={fadeIn("right", 0.4)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
						Analytical and results-driven Data Analyst with a B.S. in Computer
						and Information Sciences (GPA: 3.3), skilled in SQL, Python,
						Tableau, and Databricks. Eager to turn complex data into actionable
						insights and support business decision-making in a growth-focused
						organization.
					</motion.p>
					{/* counters */}
					<motion.div
						variants={fadeIn("right", 0.6)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
						<div className="flex flex-1 xl:gap-x-6">
							{/* experience */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={2} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Years of Professional Experience
								</div>
							</div>
							{/* projects */}
							<div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
								<div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
									<CountUp start={0} end={10} duration={5} /> +
								</div>
								<div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
									Finished Projects On GitHub
								</div>
							</div>
						</div>
					</motion.div>
				</div>
				{/* info */}
				<motion.div
					variants={fadeIn("left", 0.4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
					<div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
						{aboutData.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className={`${
										index === itemIndex &&
										"text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
									}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
									onClick={() => setIndex(itemIndex)}>
									{item.title}
								</div>
							);
						})}
					</div>
					<div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
						{aboutData[index].info.map((item, itemIndex) => {
							return (
								<div
									key={itemIndex}
									className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
									{/* title */}
									<div className="font-light mb-2 md:mb-0">{item.title}</div>
									<div className="hidden md:flex">-</div>
									<div>{item.stage}</div>
									<div className="flex gap-x-4">
										{/* icons */}
										{item.icons?.map((icon, itemIndex) => {
											return (
												<div key={itemIndex} className="text-2xl text-white">
													{icon}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
