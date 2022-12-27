/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#000000',
					secondary: '#E3B7A0',
					accent: '#EEAF3A',
					neutral: '#291334',
					'base-100': '#FFFBF5',
					'base-200': '#FBF3E6',
					'base-300': '#FDE7DC',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				marquee: 'marquee var(--marquee-duration) linear infinite'
			},
			keyframes: {
				marquee: {
					'100%': {
						transform: 'translateY(-50%)'
					}
				}
			}
		}
	},
	plugins: [require('daisyui')]
}
