import Link from 'next/link';

const cols = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Our Process', path: '/process' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
  ],
  products: [
    { name: 'Rice (Basmati & Non-Basmati)', path: '/products' },
    { name: 'Indian Spices', path: '/products' },
    { name: 'Pulses & Lentils', path: '/products' },
    { name: 'Fresh Fruits & Vegetables', path: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg, #040f08 0%, #0a1f12 100%)', color: '#95d5b2', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative top border */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #2d6a4f, #74c69d, #d4a017, #74c69d, #2d6a4f)' }} />

      {/* Glow orbs */}
      <div className="glow-green" style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', opacity: 0.4 }} />
      <div className="glow-gold" style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '300px', height: '300px', opacity: 0.3 }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '72px 2rem 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '56px' }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg, #2d6a4f, #40916c)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', flexShrink: 0, border: '1px solid rgba(116,198,157,0.3)' }}>
                <span style={{ color: '#f0c040', fontWeight: 800, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>M</span>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', fontFamily: 'Poppins, sans-serif' }}>Maheshwari</div>
                <div style={{ color: '#74c69d', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Global Exports</div>
              </div>
            </Link>
            <p style={{ fontSize: '13px', lineHeight: 1.8, color: '#74c69d', fontStyle: 'italic', marginBottom: '16px' }}>
              &ldquo;Delivering Quality. Building Global Trust.&rdquo;
            </p>
            <p style={{ fontSize: '12px', lineHeight: 1.8, color: 'rgba(149,213,178,0.6)' }}>
              Gujarat-based merchant export house specializing in structured sourcing and quality-verified international trade.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '20px', height: '2px', background: '#40916c', display: 'inline-block' }} />
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cols.company.map(l => (
                <li key={l.name}>
                  <Link href={l.path} className="footer-link">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '20px', height: '2px', background: '#40916c', display: 'inline-block' }} />
              Products
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cols.products.map(l => (
                <li key={l.name}>
                  <Link href={l.path} className="footer-link">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '20px', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '20px', height: '2px', background: '#40916c', display: 'inline-block' }} />
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: '📍', label: 'Rajkot, Gujarat, India' },
                { icon: '✉️', label: 'info@maheshwariglobalexports.com' },
                { icon: '📞', label: '+91-XXXXXXXXXX' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'rgba(149,213,178,0.75)' }}>
                  <span style={{ flexShrink: 0 }}>{c.icon}</span>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn-gold"
              style={{ display: 'inline-block', marginTop: '24px', padding: '10px 24px', fontSize: '11px', textDecoration: 'none' }}
            >
              Request Quotation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(116,198,157,0.12)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', alignItems: 'center' }}>
          <p style={{ fontSize: '12px', color: 'rgba(149,213,178,0.4)', margin: 0 }}>
            © {new Date().getFullYear()} Maheshwari Global Exports. All rights reserved.
          </p>
          <p style={{ fontSize: '11px', color: 'rgba(149,213,178,0.3)', margin: 0 }}>
            Agricultural Exporter from India · Rice · Spices · Pulses · Fresh Produce
          </p>
        </div>
      </div>
    </footer>
  );
}
