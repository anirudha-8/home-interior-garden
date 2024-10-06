import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import IconComponent from "./IconComponent";

// images paths
import img1 from "../../../public/images/img-1.png";
import img2 from "../../../public/images/img-2.jpeg";

// icons paths
import icon1 from "../../../public/icons/icon-1.png";
import icon2 from "../../../public/icons/icon-2.png";
import icon3 from "../../../public/icons/icon-3.png";
import icon4 from "../../../public/icons/icon-4.png";
import Image from "next/image";

const HomeInteriorGarden = () => {
	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "100vh",
				backgroundColor: theme.palette.background.default,
				color: theme.palette.primary.main,
				fontFamily: theme.typography.fontFamily,

				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box sx={{ padding: "2rem" }}>
				<Grid container spacing={4}>
					{/* left column for images */}
					<Grid item xs={12} lg={6}>
						{/* First Image with Background Rectangle */}
						<Box
							sx={{
								position: "relative",
								width: {
									xs: "100%",
									sm: "100%",
								},
								height: "100%",
							}}
						>
							{/* Background Rectangle */}
							<Box
								sx={{
									backgroundColor: "#8B9C75",
									width: "50%",
									height: "65%",
									position: "absolute",
									zIndex: 1,
								}}
							/>
							{/* First Image */}
							<Box
								sx={{
									position: "relative",
									top: "5%",
									left: "2%",
									zIndex: 2,
									width: "70%",
									height: "auto",
									marginTop: "10px",
									marginLeft: "10px",
								}}
							>
								<Image
									src={img1}
									alt="Person spraying plant"
									layout="responsive"
									width={200}
									height={200}
								/>
							</Box>
						</Box>

						{/* Second Image with Background Rectangle */}
						<Box
							sx={{
								position: "relative",
								width: "100%",
								height: "50%",
							}}
						>
							{/* Background Rectangle */}
							<Box
								sx={{
									backgroundColor: "#ffffff",
									top: "-100%",
									left: "30%",
									width: "39%",
									height: "44%",
									position: "absolute",
									zIndex: 3,
								}}
							/>
							{/* Second Image */}
							<Box
								sx={{
									position: "relative",
									top: "-95%",
									left: "33%",
									zIndex: 2,
									width: "55%",
									height: "50%",
									marginBottom: "20px",
									marginRight: "20px",
									zIndex: 4,
								}}
							>
								<Image
									src={img2}
									alt="Plant in a pot"
									layout="responsive"
									width={200}
									height={200}
								/>
							</Box>
						</Box>
					</Grid>

					{/* right column for texts */}
					<Grid item xs={12} lg={6}>
						<Typography
							variant="h4"
							sx={{
								marginBottom: "1rem",
								color: theme.palette.ternary.main,
								fontSize: "26px",
								lineHeight: "30px",
								fontWeight: "500",
							}}
						>
							Home Interior Garden
						</Typography>
						<Typography
							variant="body1"
							sx={{
								marginBottom: "1rem",
								fontSize: "40px",
								lineHeight: "50px",
								fontWeight: "600",
							}}
						>
							Common And More Popular Plants For Interior
							Decoration
						</Typography>
						<Typography
							variant="body1"
							sx={{
								color: theme.palette.secondary.main,
								marginBottom: "1rem",
								lineHeight: "24px",
							}}
						>
							Our own collection is designed in house to add
							practicality and style to your garden.We ship
							healthy potted plants right to your doorstep. Each
							plant comes with simple care instructions, a money
							back guarantee, and direct access to our plant
							experts to answer questions. Our goal is to make the
							experience of being a plant parent as wonderful as
							plants themselves. Because we believe plants make
							people happy. There is no such thing as a green
							thumb. Plants take practice – just like anything
							else. The good new is – We’re here to help.
						</Typography>
						<Typography
							variant="body1"
							sx={{
								color: theme.palette.secondary.main,
								marginBottom: "2rem",
								lineHeight: "24px",
							}}
						>
							It’s true when we say plants make people happy. We
							hope you’ll make any one of these plants an addition
							to your fresh home We are only beginning to
							understand the impact indoor air quality has on our
							mental health and work performance.
						</Typography>
						<Button
							variant="contained"
							sx={{
								background: "transparent",
								color: theme.palette.ternary.main,
								border: `2px solid ${theme.palette.ternary.main}`,
								borderRadius: 0,
								px: "2rem",
								py: ".4rem",
							}}
						>
							shop now
						</Button>

						{/* Icons Section */}
						<Grid
							container
							spacing={4}
							sx={{
								mt: 1,
								justifyContent: "center",
							}}
						>
							<Grid item xs={12} md={6}>
								<IconComponent
									iconSrc={icon1}
									altText="Free Worldwide Shipping"
									heading="Free Worldwide Shipping"
									subHeading="On order over $150"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<IconComponent
									iconSrc={icon2}
									altText="Money Back Guarantee"
									heading="Money Back Guarantee"
									subHeading="Cash On Delivery"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<IconComponent
									iconSrc={icon3}
									altText="Special Gift Card"
									heading="Special Gift Card"
									subHeading="Offer special bonuses with gift"
								/>
							</Grid>
							<Grid item xs={12} md={6}>
								<IconComponent
									iconSrc={icon4}
									altText="Best Online Support"
									heading="Best Online Support"
									subHeading="Call us 24/7 at 123-456-789"
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default HomeInteriorGarden;
