import { IBM_Plex_Sans, IBM_Plex_Mono, Be_Vietnam_Pro } from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
	weight: ["200", "400", "700"],
	style: ["normal", "italic"],
	variable: "--font-ibm-plex-sans",
	subsets: ["latin"],
	display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
	weight: ["300", "400"],
	style: ["normal", "italic"],
	variable: "--font-ibm-plex-mono",
	subsets: ["latin"],
	display: "swap",
});

export const beVietnamPro = Be_Vietnam_Pro({
	weight: ["700"],
	style: ["normal"],
	variable: "--font-be-vietnam-pro",
	subsets: ["latin"],
	display: "swap",
});
