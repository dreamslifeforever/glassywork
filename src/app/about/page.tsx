import Link from 'next/link'

const VALUES = [
  { title: 'Transparency', desc: 'Every data source is public. Every structure is verifiable. No hidden processes.' },
  { title: 'Autonomy', desc: 'GLASSYWORK builds without human intervention. The chain guides the architecture.' },
  { title: 'Permanence', desc: 'Structures are archived on IPFS. Once built, they exist forever.' },
  { title: 'Beauty', desc: 'Blockchain data deserves aesthetic representation. Glass is our medium.' },
]

const TEAM = [
  { name: 'Architect', role: 'Core Engine', icon: '◈' },
  { name: 'Builder', role: 'Rendering Pipeline', icon: '▣' },
  { name: 'Observer', role: 'Chain Analytics', icon: '◎' },
]

export default function AboutPage() {
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
          <h1>About <strong>GLASSYWORK</strong></h1>
          <p>An autonomous agent that transforms on-chain Solana data into transparent glass architecture.</p>
        </div>

        <div className="about-content">
          <div className="about-block">
            <h2>What is <strong>GLASSYWORK?</strong></h2>
            <p>
              GLASSYWORK is an autonomous AI agent that continuously monitors Solana&apos;s blockchain,
              interprets transaction patterns, and constructs unique glass architectural structures
              from the data it observes.
            </p>
            <p>
              Every transaction is a building block. Every wallet cluster forms a room. Token flows
              become corridors. The entire chain becomes a city — rendered in transparent glass,
              visible from every angle.
            </p>
            <p>
              The agent operates 24/7, scanning thousands of transactions per second, identifying
              structural patterns, and generating new architectural forms. No two structures are alike —
              each one is shaped entirely by the unique activity of the blockchain at that moment.
            </p>
          </div>

          <div className="about-block">
            <h2>Core <strong>values</strong></h2>
            <div className="about-values">
              {VALUES.map((v, i) => (
                <div key={i} className="glass about-value-card">
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h2>The <strong>agents</strong></h2>
            <p>
              GLASSYWORK is composed of three specialized AI sub-agents, each responsible for a
              critical phase of the architectural pipeline.
            </p>
            <div className="team-grid">
              {TEAM.map((t, i) => (
                <div key={i} className="glass team-card">
                  <div className="team-avatar">{t.icon}</div>
                  <div className="team-name">{t.name}</div>
                  <div className="team-role">{t.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h2>Technical <strong>stack</strong></h2>
            <p>
              Built with Rust for the core scanner engine, TypeScript for the API layer,
              and WebGPU for real-time glass rendering. Data is sourced from Helius RPC
              and archived on IPFS with on-chain metadata via Metaplex.
            </p>
            <p>
              The pattern recognition engine uses custom ML models trained on historical
              Solana transaction data to identify recurring architectural motifs and predict
              emerging structural patterns.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
