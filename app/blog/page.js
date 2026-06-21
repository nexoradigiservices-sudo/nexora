import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata = {
  title: "Blog - Nexora Digital",
  description: "Strategy, automation, and marketing insights from Nexora Digital."
};

export default function BlogPage() {
  return (
    <section className="section" style={{ paddingTop: "120px" }}>
      <div className="container">
        <div style={{ textAlign: "center", margin: "0 auto 4rem", maxWidth: "760px" }}>
          <span className="eyebrow">Insights</span>
          <h1>Digital growth notes for teams that build seriously</h1>
          <p style={{ fontSize: "1.15rem" }}>
            Practical thinking on product strategy, automation, SEO, analytics, and operating better digital systems.
          </p>
        </div>

        <div className="card-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="feature-card" style={{ padding: "2.5rem" }}>
              <span className="eyebrow">{post.category}</span>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{post.title}</h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7 }}>{post.excerpt}</p>
              <Link href="/contact" className="btn ghost" style={{ marginTop: "1.25rem" }}>
                Discuss this topic
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
