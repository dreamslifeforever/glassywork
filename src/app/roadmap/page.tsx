import Link from 'next/link'

const PHASES = [
  {
    quarter: 'Q1 2026', title: 'Foundation', done: true,
    items: [
      { text: 'Core scanner engine — Rust-based transaction stream processor', done: true },
      { text: 'Blueprint generator v1 — basic structural mapping', done: true },
      { text: 'Solana mainnet integration via Helius RPC', done: true },
      { text: 'Website launch and public showcase', done: true },
      { text: 'IPFS archival pipeline for structure snapshots', done: true },
    ]
  },
  {
    quarter: 'Q2 2026', title: 'Expansion', done: false,
    items: [
      { text: 'Multi-chain support — Ethereum, Base, Arbitrum', done: false },
      { text: 'Real-time 3D WebGPU rendering engine', done: false },
      { text: 'Community gallery with filtering and search', done: false },
      { text: 'Public REST & WebSocket API v1', done: false },
      { text: 'Embeddable structure viewer widget', done: false },
    ]
  },
  {
    quarter: 'Q3 2026', title: 'Evolution', done: false,
    items: [
      { text: 'AI pattern recognition — ML-based motif detection', done: false },
      { text: 'Collaborative building — users influence structures', done: false },
      { text: 'Governance token launch and distribution', done: false },
      { text: 'Structure NFT minting with on-chain metadata', done: false },
      { text: 'Advanced analytics dashboard', done: false },
    ]
  },
  {
    quarter: 'Q4 2026', title: 'Autonomy', done: false,
    items: [
      { text: 'Self-evolving structures — continuous growth over time', done: false },
      { text: 'Cross-chain bridge visualization', done: false },
      { text: 'DAO formation — community-governed development', done: false },
      { text: 'Mobile app with AR structure viewing', done: false },
      { text: 'Partnerships with major Solana protocols', done: false },
    ]
  },
]

export default function RoadmapPage() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>
      <div className="page-content">
        <nav className="nav">
          <Link href="/" className="nav-logo">GLASSYWORK</Link>
          <ul className="nav-links">
            <li><Link href="/#architecture">Architecture</Link></li>
            <li><Link href="/#showcase">Showcase</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/roadmap">Roadmap</Link></li>
            <li><Link href="/docs">Docs</Link></li>
          </ul>
          <a className="nav-cta" href="https://x.com/glassywork" target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </nav>

        <div className="page-header">
          <h1>Project <strong>Roadmap</strong></h1>
          <p>The path from foundation to full autonomy. Follow our progress as GLASSYWORK evolves.</p>
        </div>

        <div className="roadmap-full">
          {PHASES.map((phase, i) => (
            <div key={i} className="roadmap-phase">
              <div className={`roadmap-phase-dot ${phase.done ? 'filled' : ''}`} />
              <div className="roadmap-phase-header">
                <span className="roadmap-phase-q">{phase.quarter}</span>
                <span className="roadmap-phase-title">{phase.title}</span>
              </div>
              <ul className="roadmap-phase-items">
                {phase.items.map((item, j) => (
                  <li key={j}>
                    <span className={`roadmap-check ${item.done ? 'done' : ''}`}>{item.done ? '✓' : ''}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
