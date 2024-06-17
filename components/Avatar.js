// next image
import Image from "next/image";

const Avatar = () => {
	return (
		<div className="pl-20 mb-10 hidden xl:flex xl:max-w-none">
			<Image
				src={"/1.png"}
				width={1000}
				height={1000}
				alt=""
				className="translate-z-0 w-full h-full"
			/>
		</div>
	);
};

export default Avatar;
