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
          {/* Contact Methods */}
<div
  className="glass"
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2rem",
  }}
>
  <h3 style={{ margin: 0 }}>Let's Build Something Great Together</h3>

  <p style={{ color: "var(--muted)" }}>
    Have a project in mind? Reach out through your preferred channel and our
    team will respond quickly.
  </p>

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <a
      href="mailto:nexoradigiservices@gmail.com"
      className="btn ghost"
      style={{ justifyContent: "center" }}
    >
      📧 Email Us
    </a>

    <a
      href="tel:+919025110370"
      className="btn ghost"
      style={{ justifyContent: "center" }}
    >
      📞 Call Us
    </a>

    <a
      href="https://wa.me/919025110370"
      target="_blank"
      rel="noopener noreferrer"
      className="btn primary"
      style={{ justifyContent: "center" }}
    >
      💬 WhatsApp Us
    </a>
  </div>

  <div
    style={{
      marginTop: "1rem",
      padding: "1rem",
      borderRadius: "var(--radius-sm)",
      background: "rgba(255,255,255,0.05)",
    }}
  >
    <strong>Business Hours</strong>
    <p style={{ margin: "0.5rem 0 0", color: "var(--muted)" }}>
      Monday – Saturday<br />
      9:00 AM – 8:00 PM IST
    </p>
  </div>
</div>

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
