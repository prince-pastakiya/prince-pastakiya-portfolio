// next image
import Image from "next/image";

const Avatar = () => {
	return (
		<div className="pl-20 hidden xl:flex xl:max-w-none">
			<Image
				src={"/1.png"}
				width={737}
				height={678}
				alt=""
				className="translate-z-0 w-full h-full"
			/>
		</div>
	);
};

export default Avatar;
