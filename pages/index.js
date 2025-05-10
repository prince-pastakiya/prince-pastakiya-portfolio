// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
	return (
		<div className="bg-primary/60 h-full">
			{/* text */}
			<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
				<div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
					{/* title */}
					<motion.h1
						variants={fadeIn("down", 1)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h1">
						Catalyzing Impact through <br />
						<span className="text-accent"> Data Mastery.</span>
					</motion.h1>
					{/* subtitle */}
					<motion.p
						variants={fadeIn("right", 2)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
						Analytical and results-driven Data Analyst with a B.S. in Computer
						and Information Sciences (GPA: 3.3), skilled in SQL, Python,
						Tableau, and Databricks. Eager to turn complex data into actionable
						insights and support business decision-making in a growth-focused
						organization.
					</motion.p>
					{/* btn */}
					<div className="flex justify-center xl:hidden relative">
						<ProjectsBtn />
					</div>
					<motion.div
						variants={fadeIn("left", 3)}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="hidden xl:flex">
						<ProjectsBtn />
					</motion.div>
				</div>
			</div>
			{/* image */}
			<div className="w-[1200px] h-full absolute right-0 bottom-0">
				{/* bg img */}
				{/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 pl-20"></div> */}
				{/* particles */}
				<ParticlesContainer />
				{/* avatar img */}
				<motion.div
					variants={fadeIn("up", 4)}
					initial="hidden"
					animate="show"
					exit="hidden"
					transition={{ duration: 10, ease: "easeInOut" }}
					className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
					<Avatar />
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
