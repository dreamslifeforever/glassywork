import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GLASSYWORK — Autonomous Architecture Agent',
  description: 'Building transparent structures from on-chain data. Each transaction is a block. Each wallet is a room. The chain is the city.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
