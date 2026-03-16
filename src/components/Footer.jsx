import Link from 'next/link';
import Image from 'next/image';

const cols = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Process', path: '/process' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
  ],
  products: [
    { name: 'Rice — Basmati & Non-Basmati', path: '/products' },
    { name: 'Indian Spices', path: '/products' },
    { name: 'Pulses & Lentils', path: '/products' },
    { name: 'Fresh Fruits & Vegetables', path: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg-dark)', color: 'var(--color-text-footer)', position: 'relative', overflow: 'hidden' }}>
      {/* Blue top border */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, var(--color-primary-dark), var(--color-primary), var(--color-primary-light), var(--color-primary), var(--color-primary-dark))' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 2rem 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '48px', marginBottom: '52px' }}>

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '20px' }}>
              <Image src="/assets/expo-white.png" alt="Maheshwari Global Exports Logo" width={160} height={50} style={{ objectFit: 'contain' }} />
            </Link>
            <p style={{ fontSize: '13px', lineHeight: 1.9, color: 'var(--color-primary-light)', fontStyle: 'italic', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>
              &ldquo;Delivering Quality. Building Global Trust.&rdquo;
            </p>
            <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
              Gujarat-based merchant export house. Structured sourcing, verified quality, disciplined global delivery.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: 'var(--color-bg-white)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '18px', marginTop: 0 }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {cols.company.map(l => (
                <li key={l.name}><Link href={l.path} className="footer-link">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ color: 'var(--color-bg-white)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '18px', marginTop: 0 }}>Products</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {cols.products.map(l => (
                <li key={l.name}><Link href={l.path} className="footer-link">{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: 'var(--color-bg-white)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '18px', marginTop: 0 }}>Contact</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {[
                { icon: '📍', text: 'Rajkot, Gujarat, India' },
                { icon: '✉️', text: 'info@mgeglobal.in' },
                { icon: '📞', text: ['+91 80000 30307', '+91 91044 85504'] },
              ].map(c => (
                <div key={Array.isArray(c.text) ? c.text[0] : c.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  <span style={{ flexShrink: 0, marginTop: '2px' }}>{c.icon}</span>
                  {Array.isArray(c.text) ? (
                    <span style={{ fontWeight: 500 }}>{c.text.join(' / ')}</span>
                  ) : (
                    <span>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '22px', padding: '10px 22px', fontSize: '11px', textDecoration: 'none' }}>
              Request Quotation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '22px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', alignItems: 'center' }}>
          <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', margin: 0 }}>
            © {new Date().getFullYear()} Maheshwari Global Exports. All rights reserved.
          </p>
          <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', margin: 0 }}>
            Agricultural Exporter · Rice · Spices · Pulses · Fresh Produce · Gujarat, India
          </p>
        </div>
      </div>
    </footer>
  );
}
