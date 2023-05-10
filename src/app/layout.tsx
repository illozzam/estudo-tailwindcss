import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Loja virtual',
  description: 'Loja virtual para aprendizado do Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
