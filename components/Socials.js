// links
import Link from "next/link";

// icons
import {
	RiLinkedinBoxFill,
	RiInstagramFill,
	RiFacebookFill,
	RiYoutubeFill,
	RiPinterestFill,
	RiGithubFill,
} from "react-icons/ri";

const Socials = () => {
	return (
		<div className="flex items-center gap-x-5 text-lg">
			<Link
				href={"https://www.linkedin.com/in/prince-pastakiya/"}
				className="hover:text-accent transition-all duration-300 ">
				<RiLinkedinBoxFill />
			</Link>
			<Link
				href={"https://github.com/prince-pastakiya"}
				className="hover:text-accent transition-all duration-300 ">
				<RiGithubFill />
			</Link>
			<Link href={""} className="hover:text-accent transition-all duration-300">
				<RiFacebookFill />
			</Link>
			<Link href={""} className="hover:text-accent transition-all duration-300">
				<RiInstagramFill />
			</Link>

			<Link href={""} className="hover:text-accent transition-all duration-300">
				<RiPinterestFill />
			</Link>
			<Link href={""} className="hover:text-accent transition-all duration-300">
				<RiYoutubeFill />
			</Link>
		</div>
	);
};

export default Socials;
