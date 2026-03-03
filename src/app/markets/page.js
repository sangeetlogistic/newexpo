import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Global Markets | Export to UAE, Saudi Arabia, Africa, Southeast Asia | India Exporter',
  description: 'Maheshwari Global Exports serves buyers across the GCC, Middle East, Africa, and Southeast Asia — with structured delivery to UAE, Saudi Arabia, Kuwait, Egypt, Singapore, and more.',
  keywords: ['export to uae from india','rice exporter to middle east','indian spice exporter to gcc','agricultural exporter africa','food exporter southeast asia','india to saudi arabia export','india to singapore export','indian agricultural product buyer'],
  path: '/markets',
});

const regions = [
  {
    name: 'GCC & Middle East', icon: '🇦🇪', color: '#d4a017', bgLight: 'rgba(212,160,23,0.1)', border: 'rgba(212,160,23,0.25)',
    countries: ['UAE', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar', 'Bahrain'],
    products: ['Basmati Rice', 'Indian Spices', 'Pulses', 'Fresh Onion'],
    desc: 'India\'s largest agricultural export destination. Strong demand for basmati rice, spices, and fresh produce driven by a large South Asian diaspora and growing food retail sectors.',
  },
  {
    name: 'Africa', icon: '🌍', color: '#40916c', bgLight: 'rgba(64,145,108,0.1)', border: 'rgba(64,145,108,0.25)',
    countries: ['Egypt', 'Kenya', 'Tanzania', 'Ethiopia', 'South Africa', 'Ghana'],
    products: ['Non-Basmati Rice', 'Pulses & Lentils', 'Spice Blends', 'Garlic'],
    desc: 'Rapidly growing demand for affordable, quality Indian agricultural commodities — particularly non-basmati rice and pulses for food security and distribution.',
  },
  {
    name: 'Southeast Asia', icon: '🌏', color: '#7c3aed', bgLight: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)',
    countries: ['Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines'],
    products: ['Basmati Rice', 'Indian Spices', 'Turmeric', 'Fresh Mango'],
    desc: 'Growing demand for premium Indian rice varieties and spices, driven by culinary diversity and well-established Indian trade networks across the region.',
  },
  {
    name: 'Europe & Others', icon: '🌎', color: '#0891b2', bgLight: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.2)',
    countries: ['United Kingdom', 'France', 'Germany', 'Canada', 'USA'],
    products: ['Organic Spices', 'Premium Basmati', 'Lentils'],
    desc: 'Premium organic and specialty agricultural products targeting Indian diaspora communities and mainstream health-conscious consumers in Western markets.',
  },
];

export default function Markets() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>Global Reach</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '800px' }}>
              Export Markets — GCC, Middle East, Africa &amp; Southeast Asia
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Quality-verified agricultural exports delivered across 20+ global markets with full compliance documentation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── GLOBAL STATS ── */}
      <section style={{ background: 'linear-gradient(90deg,#0d2b1a,#1a4731)', padding: '0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }} className="stats-grid">
          {[{ value: '4', label: 'Global Regions' }, { value: '20+', label: 'Target Countries' }, { value: '50+', label: 'Product Variants' }, { value: '100%', label: 'Quality Assured' }].map(s => (
            <div key={s.label} style={{ padding: '28px 20px', textAlign: 'center', borderRight: '1px solid rgba(116,198,157,0.1)' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg,#f0c040,#d4a017)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
              <div style={{ color: '#74c69d', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:600px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ── REGIONS ── */}
      <section aria-labelledby="markets-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>Market Coverage</p>
              <h2 id="markets-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>
                Our Global Export Markets
              </h2>
              <p style={{ color: '#4b7355', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
                Each region served with dedicated product selection, packaging standards, and regulatory compliance.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }} className="two-col">
            {regions.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 80}>
                <div className="hover-card" style={{ background: r.bgLight, border: `1px solid ${r.border}`, borderRadius: '12px', padding: '32px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: r.color, borderRadius: '12px 0 0 12px' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                    <span style={{ fontSize: '32px' }}>{r.icon}</span>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', fontSize: '19px', margin: 0 }}>{r.name}</h3>
                  </div>
                  <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: 1.8, marginBottom: '18px' }}>{r.desc}</p>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '10px', color: r.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Countries</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {r.countries.map(c => (
                        <span key={c} style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(0,0,0,0.1)', color: '#1a4731', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '999px' }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: r.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Key Products</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {r.products.map(p => (
                        <span key={p} style={{ background: r.color, color: '#fff', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '999px', opacity: 0.85 }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`@media(max-width:768px){.two-col{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-section-dark" style={{ padding: '80px 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-gold" style={{ position: 'absolute', bottom: '-60px', right: '-40px', width: '300px', height: '300px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>Sourcing from Your Region?</h2>
            <p style={{ color: 'rgba(149,213,178,0.8)', fontSize: '16px', marginBottom: '36px', lineHeight: 1.8 }}>Connect with us for destination-specific product and compliance information.</p>
            <Link href="/contact" className="btn-gold" style={{ padding: '16px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Request Quotation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
