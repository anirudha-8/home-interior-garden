import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import iconBg from "../../../public/icons/icon-bg.png";
import theme from "../../../theme";

const IconComponent = ({ iconSrc, altText, heading, subHeading }) => {
	return (
		<Grid
			container
			spacing={2}
			alignItems="center" // Align items vertically
		>
			<Grid item>
				<Box
					sx={{
						width: "80px",
						height: "80px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						backgroundImage: `url(${iconBg.src})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						cursor: "pointer",
						"&:hover img": {
							animation: "shake 0.5s", // Trigger shake animation for the image
							animationTimingFunction: "ease-in-out",
						},
						"@keyframes shake": {
							"0%": { transform: "translateX(0)" },
							"25%": { transform: "translateX(-5px)" },
							"50%": { transform: "translateX(5px)" },
							"75%": { transform: "translateX(-5px)" },
							"100%": { transform: "translateX(0)" },
						},
					}}
				>
					<Image src={iconSrc} alt={altText} width={35} height={35} />
				</Box>
			</Grid>
			<Grid item>
				<Typography
					variant="h6"
					sx={{
						fontWeight: "600",
						fontSize: "16px",
						lineHeight: "20px",
						marginBottom: "1rem",
					}}
				>
					{heading}
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontWeight: "500",
						fontSize: "14px",
						lineHeight: "20px",
						color: theme.palette.secondary.main,
					}}
				>
					{subHeading}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default IconComponent;
