'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SHOWCASE_ITEMS = [
  { name: 'Crystal Nexus', type: 'Structure', blocks: '12,847', time: '2m ago' },
  { name: 'Prism Gate', type: 'Gateway', blocks: '8,301', time: '5m ago' },
  { name: 'Refraction Hall', type: 'Complex', blocks: '24,119', time: '12m ago' },
  { name: 'Shard Tower', type: 'Tower', blocks: '6,450', time: '18m ago' },
  { name: 'Glass Vault', type: 'Vault', blocks: '31,200', time: '24m ago' },
  { name: 'Luminous Bridge', type: 'Bridge', blocks: '9,780', time: '31m ago' },
]

const STATS = [
  { value: '2.4M', label: 'Blocks Scanned', icon: '◈' },
  { value: '847', label: 'Structures Built', icon: '▣' },
  { value: '99.8%', label: 'Uptime', icon: '◎' },
  { value: '~0.3s', label: 'Render Time', icon: '⬡' },
]

const ROADMAP = [
  { quarter: 'Q1 2026', title: 'Foundation', items: ['Core scanner engine', 'Blueprint generator v1', 'Solana mainnet integration'], done: true },
  { quarter: 'Q2 2026', title: 'Expansion', items: ['Multi-chain support', 'Real-time 3D rendering', 'Community gallery launch'], done: false },
  { quarter: 'Q3 2026', title: 'Evolution', items: ['AI pattern recognition', 'Collaborative building', 'Governance token'], done: false },
  { quarter: 'Q4 2026', title: 'Autonomy', items: ['Self-evolving structures', 'Cross-chain bridges', 'DAO formation'], done: false },
]

const PARTNERS = [
  'Solana', 'Helius', 'Jito', 'Metaplex', 'Jupiter', 'Raydium',
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeRoadmap, setActiveRoadmap] = useState(0)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <div className="page-content">
        {/* NAV */}
        <nav className="nav">
          <Link href="/" className="nav-logo">GLASSYWORK</Link>
          <ul className="nav-links">
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#showcase">Showcase</a></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/roadmap">Roadmap</Link></li>
            <li><Link href="/docs">Docs</Link></li>
          </ul>
          <a className="nav-cta" href="https://x.com/glassywork" target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </nav>

        {/* HERO */}
        <section className="hero">
          <Image src="/without bgg.png" alt="Glassywork" width={160} height={160} className="hero-mascot" priority />
          <div className="hero-label">
            <span className="hero-label-dot" />
            Building on Solana
          </div>
          <h1>
            Transparent structures<br />
            from <strong>on-chain data</strong>
          </h1>
          <p className="hero-sub">
            Each transaction is a building block. Each wallet is a room.
            The chain is the city. GLASSYWORK builds it all — autonomously.
          </p>
          <div className="hero-btns">
            <a className="btn-primary" href="#showcase">Explore</a>
            <Link className="btn-glass" href="/docs">Read Docs →</Link>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="stats-bar">
          {STATS.map((s, i) => (
            <div key={i} className="stats-bar-item glass">
              <div className="stats-bar-icon">{s.icon}</div>
              <div>
                <div className="stats-bar-value">{s.value}</div>
                <div className="stats-bar-label">{s.label}</div>
              </div>
            </div>
          ))}
        </section>

        <div className="divider" />

        {/* ARCHITECTURE */}
        <section className="section" id="architecture">
          <div className="section-label">Architecture</div>
          <div className="section-title">How it <strong>builds</strong></div>
          <div className="section-sub">
            Three phases. Continuous execution. Every block adds a new layer to the structure.
          </div>
          <div className="pipeline-grid">
            <div className="glass pipeline-card">
              <div className="pipeline-step">Phase 01</div>
              <div className="pipeline-icon">◇</div>
              <h3>Scan</h3>
              <p>
                Continuously monitors Solana&apos;s transaction stream. Filters signal from noise.
                Identifies structural patterns in real-time block data.
              </p>
            </div>
            <div className="glass pipeline-card">
              <div className="pipeline-step">Phase 02</div>
              <div className="pipeline-icon">⬡</div>
              <h3>Interpret</h3>
              <p>
                Translates raw chain data into architectural blueprints.
                Wallet clusters become rooms. Token flows become corridors.
              </p>
            </div>
            <div className="glass pipeline-card">
              <div className="pipeline-step">Phase 03</div>
              <div className="pipeline-icon">△</div>
              <h3>Construct</h3>
              <p>
                Renders transparent glass structures from interpreted data.
                Each structure is unique — shaped by the chain&apos;s own activity.
              </p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* SHOWCASE (replaces Live Feed) */}
        <section className="section" id="showcase">
          <div className="section-label">Showcase</div>
          <div className="section-title">Recent <strong>structures</strong></div>
          <div className="section-sub">
            Explore the latest glass architectures built from on-chain activity. Each one is unique.
          </div>
          <div className="showcase-grid">
            {mounted && SHOWCASE_ITEMS.map((item, i) => (
              <div key={i} className="glass showcase-card" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="showcase-visual">
                  <div className="showcase-shape" style={{ '--hue': `${i * 50 + 220}deg` } as React.CSSProperties} />
                </div>
                <div className="showcase-info">
                  <div className="showcase-name">{item.name}</div>
                  <div className="showcase-meta">
                    <span className="showcase-type">{item.type}</span>
                    <span className="showcase-blocks">{item.blocks} blocks</span>
                  </div>
                  <div className="showcase-time">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/gallery" className="btn-glass">View Full Gallery →</Link>
          </div>
        </section>

        <div className="divider" />

        {/* CAPABILITIES */}
        <section className="section" id="capabilities">
          <div className="section-label">Capabilities</div>
          <div className="section-title">What it <strong>does</strong></div>
          <div className="section-sub">
            Four core modules working together to build transparent architecture from blockchain data.
          </div>
          <div className="caps-grid">
            <div className="glass cap-card">
              <div className="cap-icon">◈</div>
              <h3>On-Chain Scanner</h3>
              <p>Real-time monitoring of Solana transactions. Pattern detection across wallet clusters and token flows with sub-second latency.</p>
            </div>
            <div className="glass cap-card">
              <div className="cap-icon">▣</div>
              <h3>Blueprint Generator</h3>
              <p>Converts raw data into structural blueprints. Maps wallet relationships as rooms, corridors, and architectural elements.</p>
            </div>
            <div className="glass cap-card">
              <div className="cap-icon">◎</div>
              <h3>Structure Renderer</h3>
              <p>Builds transparent glass structures from blueprints. Each render is unique — shaped entirely by the chain&apos;s own activity patterns.</p>
            </div>
            <div className="glass cap-card">
              <div className="cap-icon">⬢</div>
              <h3>Pattern Architect</h3>
              <p>Identifies recurring architectural motifs across time. Discovers structural similarities between different periods of chain activity.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* HOW IT WORKS - detailed */}
        <section className="section">
          <div className="section-label">Deep Dive</div>
          <div className="section-title">Under the <strong>glass</strong></div>
          <div className="section-sub">
            A technical overview of the rendering pipeline and data flow.
          </div>
          <div className="deepdive-grid">
            <div className="glass deepdive-card">
              <div className="deepdive-num">01</div>
              <h4>RPC Listener</h4>
              <p>Subscribes to Solana&apos;s WebSocket stream via Helius RPC. Processes ~2,000 TPS with intelligent batching.</p>
            </div>
            <div className="glass deepdive-card">
              <div className="deepdive-num">02</div>
              <h4>Pattern Engine</h4>
              <p>ML-based clustering identifies wallet groups, token flows, and structural patterns from raw transaction data.</p>
            </div>
            <div className="glass deepdive-card">
              <div className="deepdive-num">03</div>
              <h4>Blueprint Compiler</h4>
              <p>Transforms patterns into 3D architectural blueprints using procedural generation and constraint solving.</p>
            </div>
            <div className="glass deepdive-card">
              <div className="deepdive-num">04</div>
              <h4>Glass Renderer</h4>
              <p>WebGPU-powered rendering pipeline produces transparent, refractive glass structures at 60fps.</p>
            </div>
            <div className="glass deepdive-card">
              <div className="deepdive-num">05</div>
              <h4>IPFS Archive</h4>
              <p>Every structure snapshot is pinned to IPFS with on-chain metadata. Permanent, verifiable, public.</p>
            </div>
            <div className="glass deepdive-card">
              <div className="deepdive-num">06</div>
              <h4>API Gateway</h4>
              <p>REST & WebSocket APIs for developers. Query structures, stream updates, and embed live renders.</p>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ROADMAP PREVIEW */}
        <section className="section" id="roadmap-preview">
          <div className="section-label">Roadmap</div>
          <div className="section-title">Building <strong>forward</strong></div>
          <div className="section-sub">
            The path from foundation to full autonomy.
          </div>
          <div className="roadmap-timeline">
            {ROADMAP.map((phase, i) => (
              <div
                key={i}
                className={`glass roadmap-card ${activeRoadmap === i ? 'active' : ''} ${phase.done ? 'done' : ''}`}
                onClick={() => setActiveRoadmap(i)}
              >
                <div className="roadmap-quarter">{phase.quarter}</div>
                <h4>{phase.title}</h4>
                <ul className="roadmap-items">
                  {phase.items.map((item, j) => (
                    <li key={j}>
                      <span className={`roadmap-dot ${phase.done ? 'filled' : ''}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/roadmap" className="btn-glass">Full Roadmap →</Link>
          </div>
        </section>

        <div className="divider" />

        {/* TRANSPARENCY */}
        <section className="section">
          <div className="transparency-row">
            <div className="transparency-content">
              <div className="transparency-tag">Philosophy</div>
              <h3>Built on <strong>transparency</strong></h3>
              <p>
                Everything GLASSYWORK does is visible. Every data source is public.
                Every structure is verifiable. No black boxes. No hidden layers.
                The architecture speaks for itself — glass all the way through.
              </p>
            </div>
            <div className="glass transparency-stats">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">99.8%</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">2.4M</div>
                  <div className="stat-label">Blocks Scanned</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">847</div>
                  <div className="stat-label">Structures Built</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">~0.3s</div>
                  <div className="stat-label">Avg Render Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* PARTNERS */}
        <section className="section">
          <div className="section-label">Ecosystem</div>
          <div className="section-title">Powered <strong>by</strong></div>
          <div className="section-sub">
            Built on and integrated with the best of Solana.
          </div>
          <div className="partners-row">
            {PARTNERS.map((p, i) => (
              <div key={i} className="glass partner-badge">{p}</div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* CTA */}
        <section className="cta-section">
          <Image src="/without bgg.png" alt="" width={80} height={80} className="cta-mascot" />
          <h2>Start <strong>exploring</strong></h2>
          <p>
            Dive into the glass architecture. Browse structures, read the docs, or follow us for updates.
          </p>
          <div className="hero-btns">
            <Link className="btn-primary" href="/gallery">Browse Gallery</Link>
            <Link className="btn-glass" href="/docs">Documentation →</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col">
              <div className="footer-logo">GLASSYWORK</div>
              <div className="footer-text">Autonomous Architecture Agent on Solana</div>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Pages</div>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
              <Link href="/roadmap">Roadmap</Link>
              <Link href="/docs">Docs</Link>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Social</div>
              <a href="https://x.com/glassywork" target="_blank" rel="noopener noreferrer">Twitter / X</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 GLASSYWORK. All structures are public and verifiable.
          </div>
        </footer>
      </div>
    </>
  )
}
