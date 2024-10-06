// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google Font for Jost */}
				<link
					href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
