// next image
import Image from "next/image";

const Avatar = () => {
	return (
		<div className="pl-20 mb-5 hidden xl:flex xl:max-w-none overflow-hidden">
			<Image
				src={"/1.png"}
				width={650}
				height={650}
				alt=""
				className="translate-z-0 w-full h-full"
			/>
		</div>
	);
};

export default Avatar;
