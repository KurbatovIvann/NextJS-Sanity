import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				charcoal: "#393631",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)"
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)"
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)"
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)"
				}
			},
			fontFamily: {
				sans: ["var(--font-sans)"],
				mono: ["var(--font-mono)"]
			},
			fontSize: {
				xs: [
					"0.75rem",
					{
						letterSpacing: "-0.01em",
						lineHeight: "1.25"
					}
				],
				sm: [
					"0.925rem",
					{
						letterSpacing: "1.2px",
						lineHeight: "1.2"
					}
				],
				md: [
					"1rem",
					{
						letterSpacing: "1.2",
						lineHeight: "1.2"
					}
				],
				lg: [
					"1.5rem",
					{
						letterSpacing: "-0.03em",
						lineHeight: "1.1"
					}
				],
				xl: [
					"3.25rem",
					{
						letterSpacing: "-0.03em",
						lineHeight: "1.1"
					}
				]
			}
		}
	},
	plugins: []
} satisfies Config;
