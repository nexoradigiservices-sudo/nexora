import Link from "next/link";
import {
  services,
  stats,
  projects,
} from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="section hero" style={{ paddingTop: "120px" }}>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Enterprise Digital Partner</span>
            <h1>Build smarter digital products &amp; brands.</h1>
            <p>
              Nexora Digital designs, engineers, and optimizes high-performance
              ecosystems for scaling companies and enterprise teams.
            </p>
            <div className="hero-actions" style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              <Link className="btn primary" href="/contact">Start a project</Link>
              <Link className="btn ghost" href="/portfolio">View work</Link>
            </div>
          </div>

          {/* Metrics panel */}
          <div className="hero-panel reveal delay-1 feature-card">
            <div style={{ display: "flex", gap: "8px", marginBottom: "1.75rem" }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
            </div>
            <div style={{ background: "var(--glass)", padding: "1.5rem", borderRadius: "12px", marginBottom: "1.5rem", border: "1px solid var(--glass-border)" }}>
              <strong style={{ display: "block", fontSize: "1.3rem", marginBottom: "0.4rem", color: "var(--accent)" }}>Growth Engine</strong>
              <p style={{ fontSize: "0.95rem", margin: 0, fontWeight: 600 }}>Real-time revenue operations and customer insights.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { label: "Platform uptime", value: "99.95%" },
                { label: "Lead velocity",   value: "4.8x"   },
                { label: "Faster releases", value: "62%"    },
                { label: "Technical care",  value: "24/7"   },
              ].map(m => (
                <div key={m.label} style={{ padding: "1.25rem", background: "var(--surface)", borderRadius: "10px", border: "1px solid var(--glass-border)" }}>
                  <b style={{ display: "block", fontSize: "1.35rem", marginBottom: "4px" }}>{m.value}</b>
                  <small style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>{m.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── Services ─────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="eyebrow">Capabilities</span>
          <h2 style={{ maxWidth: "700px", margin: "0 auto 1rem" }}>Full-stack services for digital acceleration.</h2>
          <p style={{ margin: "0 auto" }}>Expertly crafted solutions across design, engineering, and growth.</p>
        </div>
        <div className="container card-grid">
          {services.slice(0, 6).map(service => (
            <article className="feature-card reveal" key={service.title} style={{ padding: "2.5rem" }}>
              <span style={{ fontSize: "2.5rem", marginBottom: "1.5rem", display: "block" }}>{service.icon}</span>
              <h3 style={{ marginBottom: "1rem" }}>{service.title}</h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.7", margin: 0 }}>{service.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Featured Work ─────────────────────────── */}
      <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--glass-border)" }}>
        <div className="container" style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem" }}>
            <div>
              <span className="eyebrow">Portfolio</span>
              <h2 style={{ margin: 0 }}>Proven results for global brands.</h2>
            </div>
            <Link href="/portfolio" className="btn ghost">View All →</Link>
          </div>
        </div>
        <div className="container card-grid">
          {projects.slice(0, 3).map(project => (
            <article className="project-card reveal" key={project.title} style={{ overflow: "hidden" }}>
              <div style={{ height: "180px", background: "linear-gradient(135deg, var(--accent), var(--accent-2))", display: "flex", alignItems: "center", justifyContent: "center", color: "#030712", fontWeight: 900, fontSize: "1.1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {project.category}
              </div>
              <div style={{ padding: "2rem" }}>
                <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)", marginBottom: "0.75rem", lineHeight: "1.3" }}>{project.title}</h3>
                <p style={{ fontSize: "0.9rem", marginBottom: "1.25rem" }}>{project.summary}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.map(tag => <span key={tag} className="pill" style={{ fontSize: "0.72rem" }}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="feature-card" style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))", padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem)", textAlign: "center", color: "#030712", border: "none" }}>
            <h2 style={{ color: "inherit", fontSize: "clamp(1.8rem, 5vw, 3.5rem)", marginBottom: "1.5rem" }}>Ready to scale your business?</h2>
            <p style={{ color: "rgba(3,7,18,0.75)", margin: "0 auto 2.5rem", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", fontWeight: 700 }}>
              Get a clear roadmap for your digital success today.
            </p>
            <Link className="btn" href="/contact" style={{ background: "#030712", color: "white", padding: "1rem 2.5rem", fontSize: "1.1rem" }}>
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
