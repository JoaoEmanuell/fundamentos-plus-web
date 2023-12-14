import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                greenButton: '#55730e',
                greenText: '#769335',
            },
            fontFamily: {
                roboto: ['roboto', 'sans-serif'],
                'montserrat-regular': ['montserrat-regular', 'sans-serif']
            },
        },
    },
    plugins: [],
}
export default config
