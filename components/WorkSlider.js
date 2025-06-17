// work slider data
export const workSlider = {
	slides: [
		{
			images: [
				{
					title: "Mercedes-Benz Sales Data Analytics",
					path: "/Mercedes-Benz-Sales-Data-Analytics.png",
					alt: "Mercedes-Benz Sales Data Analytics",
					link: "https://app.powerbi.com/view?r=eyJrIjoiMzM1OWE1ODgtZjdjZC00NzAzLThkMTAtYzU3OWViYTg0ZTdhIiwidCI6ImY0ZTgwNzA3LWVmMTMtNDNhZi04NGU5LWU2NDc2Y2Y1NjhhYSIsImMiOjF9",
				},
				{
					title: "Healthcare Emergency Room Data Analytics",
					path: "/Healthcare-Emergency-Room-Data-Analytics.png",
					alt: "Healthcare Emergency Room Data Analytics",
					link: "https://app.powerbi.com/view?r=eyJrIjoiYmJkNzA3ZWMtYTBlMi00OTJlLWE4YzMtYjAxY2VhMGI2ZTA4IiwidCI6ImY0ZTgwNzA3LWVmMTMtNDNhZi04NGU5LWU2NDc2Y2Y1NjhhYSIsImMiOjF9",
				},
				{
					title: "HealthCare Patients Data Analytics",
					path: "/HealthCare-Data-Analytics.png",
					alt: "HealthCare Patients Data Analytics",
					link: "https://app.powerbi.com/view?r=eyJrIjoiNjk3YzgwNjEtYjE2Ni00ZjA4LTkwNWQtODQ4OTE1ZjQyOTMwIiwidCI6ImY0ZTgwNzA3LWVmMTMtNDNhZi04NGU5LWU2NDc2Y2Y1NjhhYSIsImMiOjF9",
				},
				{
					title: "Uber Data Analytics",
					path: "/Uber-Rides-Data-Analytics.png",
					alt: "Uber Data Analytics",
					link: "https://app.powerbi.com/view?r=eyJrIjoiMjU1MGY2NjUtM2E1OS00MzQ0LTk1NGQtOTdmZDNkN2YwN2E3IiwidCI6ImY0ZTgwNzA3LWVmMTMtNDNhZi04NGU5LWU2NDc2Y2Y1NjhhYSIsImMiOjF9&pageName=578f2f91107d6207c6ac",
				},
			],
		},
		{
			images: [
				{
					title: "Roomify - Hotel Management Web App",
					path: "/Roomify.png",
					alt: "Roomify",
					link: "https://roomify-by-prince-pastakiya.vercel.app/",
				},
				{
					title: "Finance Dashboard Web App",
					path: "/Finance-Dashboard.png",
					alt: "Finance Dashboard",
					link: "https://github.com/prince-pastakiya/finance-dashboard",
				},
			],
		},
	],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

const WorkSlider = () => {
	return (
		<Swiper
			spaceBetween={10}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			className="h-[280px] sm:h-[480px]">
			{workSlider.slides.map((slide, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
							{slide.images.map((image, index) => {
								return (
									<a
										href={image.link}
										target="_blank"
										rel="noopener noreferrer"
										key={index}>
										<div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
											<div className="flex items-center justify-center relative overflow-hidden group">
												<Image
													src={image.path}
													width={500}
													height={300}
													alt={image.alt}
												/>
												<div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
												<div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
													<div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
														<div className="delay-100">LIVE</div>
														<div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
															PROJECT
														</div>
														<div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
															<BsArrowRight />
														</div>
													</div>
												</div>
											</div>
										</div>
									</a>
								);
							})}
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default WorkSlider;
