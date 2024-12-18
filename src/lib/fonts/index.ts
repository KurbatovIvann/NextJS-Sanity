import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"]
});

const fonts = [geistSans.variable, geistMono.variable];

export { fonts };
