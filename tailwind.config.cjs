/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			poppins: 'Poppins, sans-serif',
			roboto: 'Roboto, sans-serif',
			montserrat: 'Montserrat, sans-serif'
		},
		extend: {
			colors: {
				portfolio: '#1A191D',
				carmine: '#DA0A2C'
			},
			lineHeight: {
				navigation: '19px'
			},
			screens: {
				xxs: '320px',
				xs: '425px',
				'3xl': '2000px'
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
				'width-height': 'width, height',
				'border-opacity': 'border-opacity',
				'border-color': 'border-color'
			},
			plugins: []
		}
	}
};
