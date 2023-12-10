import type { Metadata } from 'next'
import './globals.css'
import './css/buttons.css'
import { Header } from '@/components/body/Header'

export const metadata: Metadata = {
    title: 'Fundamentos+',
    description: 'Fundamentos plus',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head>
                <link
                    rel="shortcut icon"
                    href="/img/logotipo_fundamentos_negativo_fundo.ico"
                    type="image/x-icon"
                />
            </head>
            <body className="transition-all duration-500">
                <noscript>Enable Javascript to use this site!</noscript>
                <Header />
                <div className="flex justify-center mt-4 px-4 mb-4">
                    {children}
                </div>
            </body>
        </html>
    )
}
