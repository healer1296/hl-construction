/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				transparent: 'transparent',
				primary: '#31376E',
				secondary: '#4482B2',
				mixed: '#395589',
				light: '#ffffff',
				dark: '#333333'
			},
			boxShadow: {
				custom: '0 4px 16px 0px rgba(0, 0, 0, 0.25)',
			  }
		},
	},
	plugins: [],
}