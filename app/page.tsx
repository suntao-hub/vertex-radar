import SignupForm from "./signup-form";
import SuiteGrid from "./suite-grid";

export default function Home() {
  return (
    <>
      <header className="site">
        <div className="wrap navrow">
          <a className="brand" href="#top">
            <span className="brand-mark">VR</span>
            <span className="brand-word">Vertex Radar</span>
          </a>
          <nav className="links">
            <a href="#suite">The Suite</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <a className="btn btn-primary" href="#pricing">
            Get the Tracker
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow">For Amazon &amp; e-commerce operators</div>
              <h1>Find the cash hiding in your operation.</h1>
              <p className="lede">
                A suite of dynamic trackers that turn your inventory, PPC, and
                margin data into a straight answer: what&apos;s working,
                what&apos;s bleeding money, and what to do about it.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#pricing">
                  Get the Inventory Aging Tracker →
                </a>
                <a className="btn btn-ghost" href="#suite">
                  See the full suite
                </a>
              </div>
            </div>
            <div className="mock" aria-hidden="true">
              <div className="mock-top">
                <span className="mock-title">DASHBOARD — INVENTORY AGING</span>
                <span className="pulse">
                  <span className="pulse-dot" />
                  LIVE
                </span>
              </div>
              <div className="mock-kpis">
                <div className="kpi">
                  <div className="kpi-label">Total Value</div>
                  <div className="kpi-value">$184,300</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Dead Stock</div>
                  <div className="kpi-value red">$31,900</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">Carrying Cost</div>
                  <div className="kpi-value amber">$2,940</div>
                </div>
                <div className="kpi">
                  <div className="kpi-label">SKUs Tracked</div>
                  <div className="kpi-value">312</div>
                </div>
              </div>
              <div className="mock-bars">
                <div className="bars-row">
                  <div className="bar" style={{ height: "38%", background: "#4ADE80" }} />
                  <div className="bar" style={{ height: "52%", background: "#FACC15" }} />
                  <div className="bar" style={{ height: "29%", background: "#FB923C" }} />
                  <div className="bar" style={{ height: "71%", background: "#F87171" }} />
                  <div className="bar" style={{ height: "18%", background: "#94A3B8" }} />
                </div>
                <div className="bars-labels">
                  <span>ACTIVE</span>
                  <span>WATCH</span>
                  <span>DISC.</span>
                  <span>LIQ.</span>
                  <span>DEAD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="wrap stats-row">
            <div className="stat">
              <div className="stat-num mono">$7.9M+</div>
              <div className="stat-label">
                in dead inventory surfaced in a single account audit
              </div>
            </div>
            <div className="stat">
              <div className="stat-num mono">24 yrs</div>
              <div className="stat-label">
                operating Amazon, Walmart, eBay &amp; DTC channels
              </div>
            </div>
            <div className="stat">
              <div className="stat-num mono">$20M+</div>
              <div className="stat-label">
                in annual online revenue scaled on a single account
              </div>
            </div>
          </div>
        </div>

        {/* SUITE */}
        <section id="suite">
          <div className="wrap">
            <div className="section-head">
              <div className="section-eyebrow">The Suite</div>
              <h2>One system, built one tracker at a time.</h2>
              <p>
                Each tracker stands on its own — buy the one you need.
                They&apos;re built to share the same dynamic-field engine, so
                the next one will feel familiar on day one.
              </p>
            </div>
            <SuiteGrid />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how"
          style={{
            background: "var(--panel)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="wrap">
            <div className="section-head">
              <div className="section-eyebrow">How It Works</div>
              <h2>Three steps, every tracker.</h2>
            </div>
            <div className="steps">
              <div className="step">
                <div className="step-num mono">1</div>
                <h3>Enter your data</h3>
                <p>
                  Fill in your SKUs, campaigns, or launch numbers. Dynamic
                  fields adjust to your own categories, thresholds, and
                  workflow — not a fixed template.
                </p>
              </div>
              <div className="step">
                <div className="step-num mono">2</div>
                <h3>Get the analysis, automatically</h3>
                <p>
                  Every tracker calculates status, flags risk, and rolls it
                  up into a dashboard the moment you type — no formulas to
                  touch.
                </p>
              </div>
              <div className="step">
                <div className="step-num mono">3</div>
                <h3>Export anywhere, or stay connected</h3>
                <p>
                  Download to Excel or PDF for a one-time snapshot, or
                  connect it to Google Sheets for live tracking and automatic
                  alerts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing">
          <div className="wrap">
            <div className="section-head">
              <div className="section-eyebrow">Pricing</div>
              <h2>Buy it once, or keep it running.</h2>
              <p>
                Start with the static workbook. Move to the connected tier
                when you want alerts the moment a SKU needs attention.
              </p>
            </div>
            <div className="tiers">
              <div className="tier">
                <div className="tier-head">
                  <span className="tier-name">Static</span>
                  <span className="tier-price mono">one-time</span>
                </div>
                <div className="tier-sub">A finished workbook, yours to keep.</div>
                <ul>
                  <li>Full Excel workbook per tracker, dynamic Settings tab</li>
                  <li>Export to Excel or PDF, no login required</li>
                  <li>Works offline, nothing installed</li>
                  <li>Ideal if you check in weekly, not daily</li>
                </ul>
                <a
                  className="btn btn-ghost"
                  href="https://etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get it on Etsy
                </a>
                <p className="tier-note">Shop link goes live at Etsy launch.</p>
              </div>
              <div className="tier connected">
                <div className="tier-head">
                  <span className="tier-name">Connected</span>
                  <span className="tier-price mono">subscription</span>
                </div>
                <div className="tier-sub">Lives in your own Google Sheet.</div>
                <ul>
                  <li>Everything in Static, plus:</li>
                  <li>Runs in your own Google Drive — your data never leaves it</li>
                  <li>Email alert the moment a SKU goes Liquidate or Dead</li>
                  <li>New trackers and fixes update automatically</li>
                </ul>
                <SignupForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-row">
          <span className="foot-brand">VERTEX RADAR — a Vertex Deal LLC product</span>
          <div className="foot-links">
            <a href="#suite">The Suite</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
          </div>
        </div>
      </footer>
    </>
  );
}
