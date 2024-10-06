// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#111111", // Main font color
		},
		secondary: {
			main: "#777777", // Secondary font color
		},
		ternary: {
			main: "#87986A",
		},
		background: {
			default: "#F3F5F0", // Background color
		},
	},
	typography: {
		fontFamily: "Jost", // Use Jost font
	},
});

export default theme;
