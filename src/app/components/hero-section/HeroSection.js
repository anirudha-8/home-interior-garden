"use client";

import dynamic from "next/dynamic"; // For dynamic import with SSR handling
import { Box, Typography, Button } from "@mui/material";

// Dynamically import Swiper components (client-side only)
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
	ssr: false,
});
const SwiperSlide = dynamic(
	() => import("swiper/react").then((mod) => mod.SwiperSlide),
	{ ssr: false }
);

// Import Swiper modules and styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // Import modules from swiper/modules

const images = [
	"/src/app/components/hero-section/hero-section/hero-img-1.avif",
	"/src/app/components/hero-section/hero-section/hero-img-1.avif",
	"/src/app/components/hero-section/hero-section/hero-img-1.avif",
	"/src/app/components/hero-section/hero-section/hero-img-1.avif",
];

const HeroSection = () => {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			{/* Swiper carousel */}
			<Swiper
				modules={[Autoplay, Pagination]} // Use correct modules
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				loop={true}
				slidesPerView={1}
				pagination={{ clickable: true }}
				style={{ width: "100%", height: "100%" }}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<Box
							sx={{
								backgroundImage: `url(${image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								width: "100%",
								height: "100%",
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Text overlay */}
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "5%",
					transform: "translateY(-50%)",
					zIndex: 10,
					color: "#fff",
				}}
			>
				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					Plant Green to Breathe Green
				</Typography>
				<Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
					Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</Typography>
				<Button
					variant="contained"
					sx={{ backgroundColor: "#67B040", color: "#fff" }}
				>
					Learn More
				</Button>
			</Box>
		</Box>
	);
};

export default HeroSection;
