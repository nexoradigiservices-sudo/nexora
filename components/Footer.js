import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{padding: '80px 0 40px', background: 'var(--surface)', borderTop: '1px solid var(--glass-border)'}}>
      <div className="container" style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem'}}>
        <div style={{gridColumn: 'span 2'}}>
          <div className="brand" style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
            Nexora<span style={{color: 'var(--accent)'}}>Digital</span>
          </div>
          <p style={{color: 'var(--muted)', maxWidth: '400px', fontSize: '0.95rem'}}>
            Premium digital product engineering, marketing, and cloud operations for companies that need measurable growth and resilient systems.
          </p>
          <div style={{marginTop: '1.5rem'}}>
            <Link href="/contact" className="btn ghost" style={{padding: '0.5rem 1.25rem', fontSize: '0.875rem'}}>
              Start a conversation
            </Link>
          </div>
        </div>

        <div style={{display:'flex', flexDirection: 'column', gap: '1rem'}}>
          <strong style={{color: 'var(--text)', fontSize: '1rem'}}>Company</strong>
          <Link href="/about" style={{color: 'var(--muted)', textDecoration: 'none'}}>About Us</Link>
          <Link href="/portfolio" style={{color: 'var(--muted)', textDecoration: 'none'}}>Portfolio</Link>
          <Link href="/blog" style={{color: 'var(--muted)', textDecoration: 'none'}}>Blog</Link>
          <Link href="/contact" style={{color: 'var(--muted)', textDecoration: 'none'}}>Careers</Link>
        </div>

        <div style={{display:'flex', flexDirection: 'column', gap: '1rem'}}>
          <strong style={{color: 'var(--text)', fontSize: '1rem'}}>Contact</strong>
          <a href="mailto:nexoradigiservices@gmail.com" style={{color: 'var(--muted)', textDecoration: 'none'}}>nexoradigiservices@gmail.com</a>
          <a href="tel:+919025110370" style={{color: 'var(--muted)', textDecoration: 'none'}}>+91 9025110370</a>
          
        </div>

        
      </div>

      <div className="container" style={{marginTop: '60px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-muted)'}}>
        <p style={{margin: 0}}>© {currentYear} Nexora Digital. All rights reserved.</p>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          
        </div>
      </div>
    </footer>
  );
}
