import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GLASSYWORK',
  description: 'Building transparent structures from on-chain data.',
  icons: { icon: '/without bgg.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
