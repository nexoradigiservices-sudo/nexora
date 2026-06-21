import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Portfolio — Nexora Digital",
  description: "Selected case studies and project showcases demonstrating product, engineering, and marketing outcomes."
};

export default function PortfolioPage(){
  return (
    <section className="section" style={{paddingTop: '120px'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem'}}>
          <span className="eyebrow">Work</span>
          <h1>Selected projects & case studies</h1>
          <p style={{fontSize: '1.25rem'}}>Modern project showcases focused on measurable outcomes, UX, and engineering discipline.</p>
        </div>

        <div className="project-grid">
          {projects.map(p=> (
            <article key={p.title} className="glass project-card" style={{padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%'}}>
              <div style={{
                height: 120,
                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#030712',
                fontWeight: 900,
                fontSize: '1.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {p.category}
              </div>
              
              <h3 style={{fontSize: '1.5rem', margin: 0, lineHeight: '1.3'}}>{p.title}</h3>
              <p style={{fontSize: '1rem', color: 'var(--muted)', margin: 0, flexGrow: 1}}>{p.summary}</p>
              
              {p.objective && (
                <div style={{fontSize: '0.9rem', background: 'var(--bg)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)'}}>
                  <strong style={{color: 'var(--accent)', display: 'block', marginBottom: '0.25rem', fontSize: '0.85rem', textTransform: 'uppercase'}}>Objective</strong>
                  {p.objective}
                </div>
              )}

              {p.features && (
                <div>
                  <strong style={{fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Key Features</strong>
                  <ul style={{margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: 'var(--muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem'}}>
                    {p.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
              )}

              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem'}}>
                {p.tags.map(t=> <span key={t} className="pill" style={{fontSize: '0.75rem', padding: '0.3rem 0.75rem'}}>{t}</span>)}
              </div>

              <div style={{marginTop: '1.5rem', display: 'flex', gap: '1rem'}}>
                <Link href="/contact" className="btn primary" style={{width: '100%', padding: '0.8rem', fontSize: '1rem'}}>Discuss Similar Project</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
