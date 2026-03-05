import Link from 'next/link'

export default function DocsPage() {
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
          <h1>Documentation</h1>
          <p>Technical reference for the GLASSYWORK architecture engine and API.</p>
        </div>

        <div className="docs-layout">
          <div className="docs-section">
            <h2>Overview</h2>
            <p>
              GLASSYWORK is an autonomous architecture agent that transforms Solana blockchain data
              into transparent glass structures. The system operates through a three-phase pipeline:
              Scan → Interpret → Construct.
            </p>
            <p>
              The agent runs continuously, processing ~2,000 transactions per second from Solana&apos;s
              mainnet via Helius RPC websocket subscriptions. Each transaction is analyzed for structural
              patterns and fed into the blueprint generator.
            </p>
          </div>

          <div className="docs-section">
            <h2>Architecture</h2>
            <h3>Scanner Engine</h3>
            <p>
              The scanner is built in Rust for maximum throughput. It subscribes to Solana&apos;s
              transaction stream and performs real-time filtering, grouping transactions by
              wallet clusters, token types, and program interactions.
            </p>
            <div className="docs-code">{`// Scanner configuration
{
  "rpc_endpoint": "wss://mainnet.helius-rpc.com",
  "batch_size": 100,
  "filter_programs": ["JUP4Fb2cqiR...", "675kPX9MHTj..."],
  "cluster_threshold": 0.85,
  "pattern_window": "5m"
}`}</div>

            <h3>Blueprint Generator</h3>
            <p>
              Translates clustered transaction data into 3D architectural blueprints using
              procedural generation. Wallet groups become rooms, token flows become corridors,
              and program interactions define structural elements.
            </p>

            <h3>Renderer</h3>
            <p>
              WebGPU-powered rendering pipeline produces transparent, refractive glass
              structures at 60fps. Supports real-time updates as new transactions flow in.
            </p>
          </div>

          <div className="docs-section">
            <h2>API Reference</h2>
            <div className="docs-callout">
              The API is currently in beta. Endpoints may change. Rate limit: 100 requests/minute.
            </div>

            <h3>Base URL</h3>
            <div className="docs-code">{`https://api.glassywork.fun/v1`}</div>

            <h3>Endpoints</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="docs-endpoint">GET</span></td>
                  <td><code>/structures</code></td>
                  <td>List all structures with pagination</td>
                </tr>
                <tr>
                  <td><span className="docs-endpoint">GET</span></td>
                  <td><code>/structures/:id</code></td>
                  <td>Get structure details and metadata</td>
                </tr>
                <tr>
                  <td><span className="docs-endpoint">GET</span></td>
                  <td><code>/structures/:id/blueprint</code></td>
                  <td>Get raw blueprint data (JSON)</td>
                </tr>
                <tr>
                  <td><span className="docs-endpoint">GET</span></td>
                  <td><code>/stream</code></td>
                  <td>WebSocket stream of new structures</td>
                </tr>
                <tr>
                  <td><span className="docs-endpoint">GET</span></td>
                  <td><code>/stats</code></td>
                  <td>Global statistics and metrics</td>
                </tr>
              </tbody>
            </table>

            <h3>Example Request</h3>
            <div className="docs-code">{`curl -X GET https://api.glassywork.fun/v1/structures \\
  -H "Accept: application/json"

# Response
{
  "data": [
    {
      "id": "crystal-nexus-2026-03-04",
      "name": "Crystal Nexus",
      "type": "structure",
      "blocks": 12847,
      "created_at": "2026-03-04T14:23:00Z",
      "ipfs_cid": "QmX7b2K...",
      "blueprint_url": "/v1/structures/crystal-nexus-2026-03-04/blueprint"
    }
  ],
  "total": 847,
  "page": 1,
  "per_page": 20
}`}</div>
          </div>

          <div className="docs-section">
            <h2>WebSocket Stream</h2>
            <p>
              Connect to the real-time stream to receive new structures as they are built.
            </p>
            <div className="docs-code">{`const ws = new WebSocket('wss://api.glassywork.fun/v1/stream');

ws.onmessage = (event) => {
  const structure = JSON.parse(event.data);
  console.log('New structure:', structure.name);
  console.log('Blocks:', structure.blocks);
  console.log('IPFS:', structure.ipfs_cid);
};`}</div>
          </div>

          <div className="docs-section">
            <h2>Embedding</h2>
            <p>
              Embed a live structure viewer on your website with a single iframe tag.
            </p>
            <div className="docs-code">{`<iframe
  src="https://embed.glassywork.fun/structures/crystal-nexus"
  width="600"
  height="400"
  frameborder="0"
  allow="webgpu"
/>`}</div>
          </div>

          <div className="docs-section">
            <h2>Data Sources</h2>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Source</th>
                  <th>Type</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Helius RPC</td>
                  <td>WebSocket</td>
                  <td>Primary transaction stream</td>
                </tr>
                <tr>
                  <td>Jupiter API</td>
                  <td>REST</td>
                  <td>DEX swap metadata</td>
                </tr>
                <tr>
                  <td>Metaplex</td>
                  <td>On-chain</td>
                  <td>NFT and structure metadata</td>
                </tr>
                <tr>
                  <td>IPFS (Pinata)</td>
                  <td>Storage</td>
                  <td>Structure snapshot archival</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
