import { blogPosts } from "@/lib/data";
import Link from "next/link";

export const metadata = {
  title: "Digital Marketing — Nexora Digital",
  description: "SEO, paid acquisition, social, analytics, and growth systems to scale qualified demand."
};

export default function MarketingPage() {
  return (
    <section className="section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <span className="eyebrow">Digital Marketing</span>
        <h1>Performance marketing, SEO, and growth systems</h1>
        <p>
          Integrated campaigns, landing pages, paid acquisition, conversion optimization,
          and analytics to scale qualified demand.
        </p>

        <div className="sidebar-grid" style={{ marginTop: "3rem" }}>
          {/* Main Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {[
              {
                title: "SEO & Content",
                body: "Technical SEO, content strategy, and conversion-led landing pages that compound traffic and qualified leads over time."
              },
              {
                title: "Paid Ads & Funnels",
                body: "Campaign strategy across search, social, and audience networks — creative testing, tracking, and optimization focused on CAC and LTV."
              },
              {
                title: "Analytics & Growth",
                body: "Measurement plans, GTM/GA4 setups, dashboards, and data-driven experimentation to improve pipeline predictability."
              }
            ].map(({ title, body }) => (
              <div key={title} className="feature-card" style={{ padding: "2.5rem" }}>
                <h3 style={{ marginBottom: "1rem", color: "var(--accent)" }}>{title}</h3>
                <p style={{ margin: 0, fontSize: "1.05rem" }}>{body}</p>
              </div>
            ))}
          </div>
          <br /> 
          {/* Sidebar */}
          <aside className="glass" style={{ height: "fit-content" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            
            </div>
            <Link href="/contact" className="btn primary" style={{ width: "100%" }}>
              Request proposal →
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
