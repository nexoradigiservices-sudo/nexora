import Link from "next/link";
import { detailedServices } from "@/lib/data";

export const metadata = {
  title: "Services — Nexora Digital",
  description: "Enterprise services: Web, App, API, SEO, Marketing, Hosting, Analytics and more."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem", maxWidth: "800px", margin: "0 auto 5rem" }}>
            <span className="eyebrow">Expertise</span>
            <h1>Comprehensive services for product, growth, and operations</h1>
            <p style={{ fontSize: "1.15rem" }}>
              Our teams offer dedicated streams for product engineering, marketing, cloud operations,
              and analytics so clients run world-class digital systems.
            </p>
          </div>

          <div style={{ display: "grid", gap: "2.5rem" }}>
            {detailedServices.map((s, index) => (
              <article
                key={s.slug}
                className="feature-card"
                style={{ padding: "2.5rem" }}
              >
                {/* Title row */}
                <div style={{ marginBottom: "2rem" }}>
                  <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: "0.75rem" }}>{s.title}</h2>
                  <p style={{ fontSize: "1rem", color: "var(--muted)", margin: 0 }}>{s.intro}</p>
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                    <Link href={`/services/${s.slug}`} className="btn ghost" style={{ padding: "0.55rem 1.1rem", fontSize: "0.9rem" }}>
                      Details
                    </Link>
                    <Link href="/contact" className="btn primary" style={{ padding: "0.55rem 1.1rem", fontSize: "0.9rem" }}>
                      Get proposal
                    </Link>
                  </div>
                </div>

                {/* Details grid */}
                <div className="sidebar-grid" style={{ gap: "2rem" }}>
                  {/* Features */}
                  <div>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.75rem" }}>
                      Features
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem" }}>
                      {s.features.map(f => <li key={f}>✓ {f}</li>)}
                    </ul>
                  </div>

                  {/* Stack + Pricing */}
                  <div>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.75rem" }}>
                      Stack
                    </h4>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                      {s.tech.map(t => (
                        <span key={t} className="pill" style={{ background: "var(--bg)" }}>{t}</span>
                      ))}
                    </div>
                    <h4 style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", marginBottom: "0.5rem" }}>
                      Investment
                    </h4>
                    <p style={{ fontSize: "0.95rem", fontWeight: 600, margin: 0 }}>{s.pricing}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
