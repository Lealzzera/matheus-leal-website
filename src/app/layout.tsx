import type { Metadata } from "next";
import { ibmPlexSans, ibmPlexMono, beVietnamPro } from "@/functions/fonts";
import "./globals.css";
import MenuHeader from "@/app/components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
	title: "Matheus Leal",
	description: "Welcome to my personal website.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${beVietnamPro.variable}`}
		>
			<body>
				<MenuHeader />
				{children}
				<Footer />
			</body>
		</html>
	);
}
