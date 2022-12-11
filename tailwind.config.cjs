/** @type {import('tailwindcss').Config} */
module.exports = {
	future: {
		hoverOnlyWhenSupported: true
	},
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xxs: '320px',
			xs: '390px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'3xl': '2000px'
		},
		backgroundImage: {
			'portfolio-bg':
				"url('https://ap-personal-site.s3.eu-central-1.amazonaws.com/portfolio-bg.svg')"
		},
		fontFamily: {
			poppins: 'Poppins, sans-serif',
			roboto: 'Roboto, sans-serif',
			montserrat: 'Montserrat, sans-serif'
		},
		extend: {
			colors: {
				portfolio: '#1A191D',
				carmine: '#DA0A2C',
				'carmine-dark': '#ee0011',
				'slider-arrow': '#242328'
			},
			lineHeight: {
				navigation: '19px',
				'my-story': '150%'
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
				'width-height': 'width, height'
			},
			plugins: []
		}
	}
};
