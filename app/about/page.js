import Link from "next/link";
import { values } from "@/lib/data";

export const metadata = {
  title: "About — Nexora Digital",
  description: "Nexora Digital — vision, mission, and core values for enterprise digital transformation."
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "900px", textAlign: "center" }}>
          <span className="eyebrow">About Nexora</span>
          <h1 style={{ marginBottom: "2rem" }}>Enterprise Digital Transformation</h1>
          <p style={{ fontSize: "1.35rem", margin: "0 auto 3rem", maxWidth: "700px" }}>
            We help growth teams turn product strategy, engineering, and marketing into
            measurable revenue. Our practice is engineered for reliability, security,
            and long-term ROI.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn primary">Start a Project</Link>
            <Link href="/services" className="btn ghost">View Services</Link>
          </div>
        </div>
      </section>

      {/* Vision & Strategy */}
      <section className="section" style={{ paddingTop: "0", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="two-col">
            <div
              className="feature-card"
              style={{
                padding: "3rem",
                background: "var(--surface)",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span className="eyebrow">Vision</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Our Vision & Mission</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                To be the most trusted partner for building resilient, measurable, and
                revenue-driving digital products and systems for enterprises and ambitious
                startups worldwide.
              </p>
            </div>

            <div
              className="feature-card"
              style={{
                padding: "3rem",
                background: "var(--surface)",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span className="eyebrow">Strategy</span>
              <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Strategy for Growth</h2>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                We combine discovery, product design, development, and performance marketing to
                create compounding growth engines. Our teams align to outcomes — not just tasks —
                ensuring every deliverable drives measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className="section"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          background: "var(--surface)",
          borderTop: "1px solid var(--glass-border)",
          borderBottom: "1px solid var(--glass-border)",
        }}
      >
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow">Our Values</span>
            <h2>What we stand for</h2>
          </div>

          <div className="three-col">
            {values.map((v, i) => (
              <div
                key={v}
                className="feature-card"
                style={{
                  padding: "2.5rem",
                  background: "var(--bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "var(--radius-lg)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontSize: "1.5rem",
                    color: "#030712",
                    fontWeight: 900,
                  }}
                >
                  {i + 1}
                </div>
                <strong style={{ display: "block", fontSize: "1.3rem", color: "var(--text)", marginBottom: "0.75rem" }}>
                  {v}
                </strong>
                <span style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Continuous commitment to excellence, transparency, and delivery with measurable impact.
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div
            className="feature-card"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
              padding: "5rem 3rem",
              textAlign: "center",
              color: "#030712",
              border: "none",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <h2 style={{ color: "inherit", marginBottom: "1.5rem" }}>
              Want to learn more about our process?
            </h2>
            <p style={{ color: "rgba(3,7,18,0.75)", fontSize: "1.25rem", fontWeight: 700, margin: "0 auto 2.5rem" }}>
              Let's talk about how we can build something great together.
            </p>
            <Link
              href="/contact"
              className="btn"
              style={{ background: "#030712", color: "white", padding: "1.1rem 2.5rem", fontSize: "1.15rem" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
