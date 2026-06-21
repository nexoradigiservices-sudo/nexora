import Link from "next/link";

export const metadata = {
  title: "Contact — Nexora Digital",
  description: "Get in touch to discuss product roadmap, engineering, marketing, or cloud operations."
};

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: "120px" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        <span className="eyebrow">Contact</span>
        <h1>Start a project or schedule a strategy call</h1>
        <p>Tell us about your goals and timelines. We'll reply with a concise engagement plan and options.</p>

        <div className="sidebar-grid" style={{ marginTop: "3rem" }}>
          {/* Contact Form */}
          <form
            className="glass"
            action="/api/contact"
            method="post"
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.95rem" }}>Name</label>
              <input
                name="name"
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.95rem" }}>Email</label>
              <input
                name="email"
                type="email"
                placeholder="name@company.com"
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 700, fontSize: "0.95rem" }}>Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your project..."
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--glass-border)",
                  background: "var(--bg)",
                  color: "var(--text)",
                  fontSize: "1rem",
                  resize: "vertical",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>
            <button type="submit" className="btn primary" style={{ alignSelf: "flex-start" }}>
              Send message →
            </button>
          </form>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="glass">
              <h4 style={{ marginBottom: "1rem", color: "var(--accent)" }}>Office</h4>
              <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>Global HQ — Fully remote &amp; distributed teams</p>
              <p style={{ fontSize: "0.95rem", marginBottom: "0.75rem" }}>
                <a href="mailto:nexoradigiservices@gmail.com" style={{ color: "var(--accent)", textDecoration: "none" }}>
                  nexoradigiservices@gmail.com
                </a>
              </p>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                <a href="tel:+919025110370" style={{ color: "var(--muted)", textDecoration: "none" }}>
                  +91 9025110370
                </a>
              </p>
              <Link href="https://wa.me/9025110370" className="btn ghost" style={{ width: "100%" }}>
                💬 Message on WhatsApp
              </Link>
            </div>

            <div className="glass">
              <h4 style={{ marginBottom: "1rem", color: "var(--accent)" }}>Response Time</h4>
              <p style={{ fontSize: "0.95rem", margin: 0 }}>We typically reply within <strong>4–8 business hours</strong> with a scoped engagement plan.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
