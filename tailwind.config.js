/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0c0c1d",
			},

			screens: {
				mobile: { max: "430px" },
			},
		},
	},
	plugins: [],
};
