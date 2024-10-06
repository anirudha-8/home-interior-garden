// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#111111", // Main black color
		},
		secondary: {
			main: "#777777", // Secondary gray color
		},
	},
	typography: {
		fontFamily: "Jost, sans-serif",
	},
});

export default theme;
