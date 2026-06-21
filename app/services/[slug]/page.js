import Link from "next/link";
import { notFound } from "next/navigation";
import { detailedServices } from "@/lib/data";

export async function generateMetadata({ params }) {
  const service = detailedServices.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: `${service.title} Details — Nexora Digital`,
    description: service.intro,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = detailedServices.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  // Format FAQs from the flat array [q1, a1, q2, a2]
  const faqs = [];
  for (let i = 0; i < service.faqs.length; i += 2) {
    faqs.push({
      question: service.faqs[i],
      answer: service.faqs[i + 1]
    });
  }

  return (
    <main>
      <section className="section" style={{paddingTop: '120px'}}>
        <div className="container">
          {/* Breadcrumbs */}
          <div className="reveal" style={{marginBottom: '2rem'}}>
            <Link href="/services" style={{color: 'var(--accent)', textDecoration: 'none', fontWeight: 800, fontSize: '1rem'}}>
              ← Back to Services
            </Link>
          </div>

          {/* Hero Header */}
          <div className="reveal" style={{marginBottom: '5rem'}}>
            <span className="eyebrow">Service Detail</span>
            <h1 style={{marginBottom: '1.5rem'}}>{service.title}</h1>
            <p style={{fontSize: '1.5rem', lineHeight: '1.6', color: 'var(--muted)', maxWidth: '800px'}}>
              {service.intro}
            </p>
          </div>

          {/* Details Grid */}
          <div className="hero-grid" style={{gridTemplateColumns: '1.1fr 0.9fr', gap: '5rem', alignItems: 'start', marginBottom: '6rem'}}>
            
            {/* Left Column: Features & Benefits */}
            <div className="reveal delay-1">
              <div className="feature-card" style={{padding: '3rem', background: 'var(--surface)', border: '1px solid var(--glass-border)', marginBottom: '3rem'}}>
                <h3 style={{color: 'var(--accent)', marginBottom: '2rem'}}>Core Features</h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  {service.features.map((feat) => (
                    <li key={feat} style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.1rem'}}>
                      <span style={{color: 'var(--accent)', fontWeight: 'bold'}}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feature-card" style={{padding: '3rem', background: 'var(--surface)', border: '1px solid var(--glass-border)'}}>
                <h3 style={{color: 'var(--accent-2-light)', marginBottom: '2rem'}}>Key Benefits</h3>
                <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  {service.benefits.map((benefit) => (
                    <li key={benefit} style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.1rem'}}>
                      <span style={{color: 'var(--accent-2-light)', fontWeight: 'bold'}}>✦</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Workflow, Stack, Pricing */}
            <div className="reveal delay-2" style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
              
              {/* Delivery Workflow */}
              <div className="feature-card" style={{padding: '3rem', background: 'var(--surface)', border: '1px solid var(--glass-border)'}}>
                <h3 style={{marginBottom: '2rem'}}>Our Process</h3>
                <ol style={{paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--muted)', fontSize: '1.1rem'}}>
                  {service.workflow.map((step) => (
                    <li key={step} style={{fontWeight: 600}}>
                      <span style={{color: 'var(--text)'}}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Technologies */}
              <div className="feature-card" style={{padding: '3rem', background: 'var(--surface)', border: '1px solid var(--glass-border)'}}>
                <h3 style={{marginBottom: '1.5rem'}}>Technology Stack</h3>
                <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
                  {service.tech.map((t) => (
                    <span key={t} className="pill" style={{padding: '0.6rem 1.25rem', fontSize: '0.9rem', color: 'var(--text)'}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing model */}
              <div className="feature-card" style={{padding: '3rem', background: 'var(--surface)', border: '1px solid var(--glass-border)', textAlign: 'center'}}>
                <h3 style={{marginBottom: '1rem'}}>Pricing & Engagement</h3>
                <p style={{fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent)'}}>{service.pricing}</p>
                <div style={{marginTop: '2rem'}}>
                  <Link href="/contact" className="btn primary" style={{width: '100%'}}>
                    Request Scoped Proposal
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* FAQs Section */}
          {faqs.length > 0 && (
            <div className="reveal delay-3" style={{maxWidth: '800px', margin: '0 auto 6rem'}}>
              <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>Frequently Asked Questions</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    <summary style={{fontWeight: 800, fontSize: '1.15rem', color: 'var(--text)', outline: 'none', listStyle: 'none'}}>
                      <span style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span>{faq.question}</span>
                        <span style={{color: 'var(--accent)'}}>▼</span>
                      </span>
                    </summary>
                    <p style={{marginTop: '1rem', color: 'var(--muted)', fontSize: '1.05rem', lineHeight: '1.6', cursor: 'default'}}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
