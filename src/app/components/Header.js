import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
	const router = useRouter();

	const navItems = ["Home", "About", "Shop", "Blog", "Contacts"];

	// Function to handle navigation
	const handleNavigation = (route) => {
		router.push(route);
	};

	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Toolbar
				sx={{
					justifyContent: "space-between",
					flexWrap: { xs: "wrap", md: "nowrap" },
				}}
			>
				{/* logo */}
				<Typography variant="h6" component="div">
					<Box
						component="img"
						src="/images/logo.png" // Add your logo image path here
						alt="logo image"
						sx={{ height: { xs: "40px", md: "50px" } }} // Responsive height
					/>
				</Typography>

				{/* navigation links */}
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
					{navItems.map((item) => {
						const route = `/${item.toLowerCase()}`;
						const isActive =
							router.pathname === route ||
							(item === "Home" && router.pathname === "/");

						return (
							<Button
								key={item}
								onClick={() => handleNavigation(route)}
								sx={{
									color: isActive ? "#ff5722" : "#fff", // Active link color
									textTransform: "none",
									fontWeight: "500",
									textDecoration: "none", // Remove underline
									"&:hover": { color: "#ff5722" }, // Hover effect
								}}
							>
								{item}
							</Button>
						);
					})}
				</Box>

				{/* Hamburger menu for mobile */}
				<IconButton
					edge="end"
					color="inherit"
					aria-label="menu"
					sx={{ display: { xs: "block", md: "none" } }}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
