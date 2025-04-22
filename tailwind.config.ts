
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '900px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			backgroundImage: {
				"main-gradient": "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)",
				"card-glass": "linear-gradient(120deg, rgba(255,255,255,0.9) 80%, rgba(224,247,250,0.92) 100%)"
			},
			boxShadow: {
				card: "0 10px 30px 0 rgba(0,0,0,0.08)",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
