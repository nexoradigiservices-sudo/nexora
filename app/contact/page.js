import Link from "next/link";

export const metadata = {
  title: "Contact — Nexora Digital",
  description: "Get in touch to discuss product roadmap, engineering, marketing, or cloud operations."
};

export default function ContactPage() {
  return (
    <section className="section" style={{ paddingTop: "120px" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        <span className="eyebrow">CONTACT</span>

<h1>Let's Build Something Great Together</h1>

<p>
Ready to launch your next website, mobile app, SEO campaign, or digital
marketing project? Connect with our team through WhatsApp, email, or phone.
</p>
        <div
  style={{
    marginTop: "3rem",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
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

          
        </div>
      </div>
    </section>
  );
}
