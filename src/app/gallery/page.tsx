'use client'

import { useState } from 'react'
import Link from 'next/link'

const GALLERY_ITEMS = [
  { name: 'Crystal Nexus', type: 'Structure', blocks: '12,847', desc: 'A massive interconnected hub formed by DeFi swap clusters during a high-volume trading session.', hue: 240, date: 'Mar 4, 2026' },
  { name: 'Prism Gate', type: 'Gateway', blocks: '8,301', desc: 'A luminous portal structure built from bridge transactions between Solana and Ethereum.', hue: 280, date: 'Mar 3, 2026' },
  { name: 'Refraction Hall', type: 'Complex', blocks: '24,119', desc: 'An enormous glass hall generated from NFT marketplace activity over 48 hours.', hue: 200, date: 'Mar 2, 2026' },
  { name: 'Shard Tower', type: 'Tower', blocks: '6,450', desc: 'A vertical crystalline tower formed by staking delegation patterns on a single validator.', hue: 160, date: 'Mar 1, 2026' },
  { name: 'Glass Vault', type: 'Vault', blocks: '31,200', desc: 'A sealed transparent vault structure from DAO treasury movements and governance votes.', hue: 320, date: 'Feb 28, 2026' },
  { name: 'Luminous Bridge', type: 'Bridge', blocks: '9,780', desc: 'A sweeping arc of light connecting two wallet clusters through repeated token transfers.', hue: 190, date: 'Feb 27, 2026' },
  { name: 'Fractal Dome', type: 'Dome', blocks: '18,400', desc: 'Self-similar recursive patterns from automated market maker liquidity pool rebalancing.', hue: 260, date: 'Feb 25, 2026' },
  { name: 'Echo Chamber', type: 'Chamber', blocks: '5,920', desc: 'A resonant glass chamber built from repeating transaction patterns of a single whale wallet.', hue: 300, date: 'Feb 24, 2026' },
  { name: 'Spectrum Wall', type: 'Wall', blocks: '14,600', desc: 'A broad prismatic wall generated from the full rainbow of token types traded in one epoch.', hue: 220, date: 'Feb 22, 2026' },
  { name: 'Quantum Lattice', type: 'Lattice', blocks: '22,000', desc: 'A grid-like structure from high-frequency trading bot activity across multiple DEXes.', hue: 180, date: 'Feb 20, 2026' },
  { name: 'Aurora Spire', type: 'Spire', blocks: '7,330', desc: 'A needle-like spire formed from concentrated validator reward claims during epoch transitions.', hue: 140, date: 'Feb 18, 2026' },
  { name: 'Mirror Pool', type: 'Pool', blocks: '11,200', desc: 'A reflective basin structure from mirrored trading patterns across Jupiter and Raydium.', hue: 250, date: 'Feb 16, 2026' },
]

const TYPES = ['All', 'Structure', 'Gateway', 'Complex', 'Tower', 'Vault', 'Bridge', 'Dome', 'Chamber', 'Wall', 'Lattice', 'Spire', 'Pool']

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.type === filter)

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
          <h1>Structure <strong>Gallery</strong></h1>
          <p>Browse all glass architectures built autonomously from on-chain Solana data.</p>
        </div>

        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', padding: '0 48px', marginBottom: 48 }}>
          {TYPES.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`btn-glass ${filter === t ? 'active-filter' : ''}`}
              style={{ padding: '8px 18px', fontSize: 12, borderRadius: 100, border: filter === t ? '1px solid var(--accent)' : undefined }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div key={i} className="glass gallery-card">
              <div className="gallery-visual">
                <div className="gallery-shape" style={{ background: `linear-gradient(135deg, hsl(${item.hue}, 60%, 75%), hsl(${item.hue + 40}, 60%, 85%))` }} />
              </div>
              <div className="gallery-info">
                <div className="gallery-name">{item.name}</div>
                <div className="gallery-desc">{item.desc}</div>
                <div className="gallery-meta">
                  <span className="gallery-tag">{item.type}</span>
                  <span>{item.blocks} blocks</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
