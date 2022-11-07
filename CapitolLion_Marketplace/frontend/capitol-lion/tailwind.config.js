/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
			'./src/**/*.{js,jsx,ts,tsx}',
			'node_modules/preline/dist/*.js',
			'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		],
	theme: {
		extend: {
			transitionProperty: {
				top: 'top',
			},
		},
	},
	plugins: [
		require('preline/plugin'),
		require('flowbite/plugin'),
	],
};
