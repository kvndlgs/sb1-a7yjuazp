/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			bread: {
  				'100': 'hsl(37, 49%, 92%)',
  				'200': 'hsl(37, 49%, 82%)',
  				'300': 'hsl(37, 49%, 72%)',
  				'400': 'hsl(37, 49%, 62%)',
  				'500': 'hsl(37, 49%, 52%)',
  				'600': 'hsl(37, 49%, 42%)',
  				'700': 'hsl(37, 49%, 32%)',
  				'800': 'hsl(37, 49%, 22%)',
  				'900': 'hsl(37, 49%, 12%)',
  				DEFAULT: 'hsl(37, 49%, 92%)'
  			},
  			mauve: {
  				'100': 'hsl(256, 67%, 97%)',
  				'200': 'hsl(256, 67%, 87%',
  				'300': 'hsl(256, 67%, 77%)',
  				'400': 'hsl(256, 67%, 67%',
  				'500': 'hsl(256, 67%, 57%)',
  				'600': 'hsl(256, 67%, 47%',
  				'700': 'hsl(256, 67%, 37%)',
  				'800': 'hsl(256, 67%, 27%',
  				'900': 'hsl(256, 67%, 17%)',
  				DEFAULT: 'hsl(256, 67%, 87%)'
  			},
  			lizard: {
  				'100': 'hsl(169, 56%, 89%',
  				'200': 'hsl(169, 56%, 79%)',
  				'300': 'hsl(169, 56%, 69%',
  				'400': 'hsl(169, 56%, 59%)',
  				'500': 'hsl(169, 56%, 49%',
  				'600': 'hsl(169, 56%, 39%)',
  				'700': 'hsl(169, 56%, 29%',
  				'800': 'hsl(169, 56%, 19%)',
  				'900': 'hsl(169, 56%, 9%',
  				DEFAULT: 'hsl(169, 56%, 49%)'
  			},
  			neutral: {
  				'100': 'hsl(254, 14%, 91%)',
  				'200': 'hsl(254, 14%, 81%',
  				'300': 'hsl(254, 14%, 71%)',
  				'400': 'hsl(254, 14%, 61%',
  				'500': 'hsl(254, 14%, 51%)',
  				'600': 'hsl(254, 14%, 41%',
  				'700': 'hsl(254, 14%, 31%)',
  				'800': 'hsl(254, 14%, 21%',
  				'900': 'hsl(254, 14%, 11%)',
  				DEFAULT: 'hsl(254, 14%, 81%)'
  			},
  			success: {
  				'100': 'hsl(130, 67%, 97%)',
  				'200': 'hsl(130, 67%, 87%)',
  				'300': 'hsl(130, 67%, 77%)',
  				'400': 'hsl(130, 67%, 67%)',
  				'500': 'hsl(130, 67%, 57%)',
  				'600': 'hsl(130, 67%, 47%)',
  				'700': 'hsl(130, 67%, 37%)',
  				'800': 'hsl(130, 67%, 27%)',
  				'900': 'hsl(130, 67%, 17%)',
  				DEFAULT: 'hsl(130, 67%, 87%)'
  			},
  			error: {
  				'100': 'hsl(0, 67%, 97%)',
  				'200': 'hsl(0, 67%, 87%)',
  				'300': 'hsl(0, 67%, 77%)',
  				'400': 'hsl(0, 67%, 67%)',
  				'500': 'hsl(0, 67%, 57%)',
  				'600': 'hsl(0, 67%, 47%)',
  				'700': 'hsl(0, 67%, 37%)',
  				'800': 'hsl(0, 67%, 27%)',
  				'900': 'hsl(0, 67%, 17%)',
  				DEFAULT: 'hsl(0, 67%, 87%)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		dropShadow: {
  			bread: '0 4px 0 hsl(37, 49%, 42%)',
  			lizard: '0 4px 0 hsl(168, 56%, 29%)',
  			mauve: '0 4px 0 hsl(256, 67%, 47%)',
  			success: '0 4px 0 hsl(130, 67%, 47%)',
  			error: '0 4px 0 hsl(0, 67%, 47%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
