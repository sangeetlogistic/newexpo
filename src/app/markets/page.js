import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Global Markets | Export to UAE, Saudi Arabia, Africa, Southeast Asia | India Exporter',
  description: 'Maheshwari Global Exports serves buyers across the GCC, Middle East, Africa, and Southeast Asia — with structured delivery to UAE, Saudi Arabia, Kuwait, Egypt, Singapore, and more.',
  keywords: ['export to uae from india', 'rice exporter to middle east', 'indian spice exporter to gcc', 'agricultural exporter africa', 'food exporter southeast asia', 'india to saudi arabia export', 'india to singapore export', 'indian agricultural product buyer'],
  path: '/markets',
});

const regions = [
  {
    name: 'GCC & Middle East', icon: '🇦🇪', accentColor: 'rgba(255,255,255,0.8)',
    countries: ['UAE', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar', 'Bahrain'],
    products: ['Basmati Rice', 'Indian Spices', 'Pulses', 'Fresh Onion'],
    desc: 'India\'s largest agricultural export destination. Strong demand for basmati rice, spices, and fresh produce driven by a large South Asian diaspora and growing food retail sectors.',
    priority: 'Primary Market',
  },
  {
    name: 'Africa', icon: '🌍', accentColor: 'rgba(255,255,255,0.8)',
    countries: ['Egypt', 'Kenya', 'Tanzania', 'Ethiopia', 'South Africa', 'Ghana'],
    products: ['Non-Basmati Rice', 'Pulses & Lentils', 'Spice Blends', 'Garlic'],
    desc: 'Rapidly growing demand for affordable, quality Indian agricultural commodities — particularly non-basmati rice and pulses for food security and distribution.',
    priority: 'Growth Market',
  },
  {
    name: 'Southeast Asia', icon: '🌏', accentColor: 'rgba(255,255,255,0.8)',
    countries: ['Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines'],
    products: ['Basmati Rice', 'Indian Spices', 'Turmeric', 'Fresh Mango'],
    desc: 'Growing demand for premium Indian rice varieties and spices, driven by culinary diversity and well-established Indian trade networks across the region.',
    priority: 'Growth Market',
  },
  {
    name: 'Europe & Others', icon: '🌎', accentColor: 'rgba(255,255,255,0.8)',
    countries: ['United Kingdom', 'France', 'Germany', 'Canada', 'USA'],
    products: ['Organic Spices', 'Premium Basmati', 'Lentils'],
    desc: 'Premium organic and specialty agricultural products targeting Indian diaspora communities and mainstream health-conscious consumers in Western markets.',
    priority: 'Emerging Market',
  },
];

export default function Markets() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO — Dark cinematic ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80&auto=format&fit=crop"
          alt="Global trade routes map representing Maheshwari Global Exports worldwide market presence"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.7) 0%, rgba(19,19,42,0.5) 50%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              20+ Markets · 4 Regions
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '800px', lineHeight: 1.1 }}>
              Export Markets — GCC,<br />Middle East, Africa &amp; Asia
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>
              Quality-verified agricultural exports delivered across 20+ global markets with full compliance documentation.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection delay={200}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '48px' }}>
              {[{ value: '4', label: 'Global Regions' }, { value: '20+', label: 'Target Countries' }, { value: '50+', label: 'Product Variants' }, { value: '100%', label: 'Quality Assured' }].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '18px 28px', textAlign: 'center', minWidth: '120px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#fff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── REGIONS ── */}
      <section aria-labelledby="markets-heading" style={{ padding: '100px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p className="section-label" style={{ marginBottom: '12px' }}>Market Coverage</p>
              <h2 id="markets-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
                Our Global Export Markets
              </h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
                Each region served with dedicated product selection, packaging standards, and regulatory compliance.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px' }} className="two-col">
            {regions.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 80}>
                <div className="hover-card" style={{ background: 'var(--color-bg-dark)', borderRadius: '14px', overflow: 'hidden', height: '100%', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ height: '4px', background: 'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' }} />
                  <div style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '30px' }}>{r.icon}</span>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#fff', fontSize: '18px', margin: 0 }}>{r.name}</h3>
                      </div>
                      <span style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.07em', textTransform: 'uppercase', flexShrink: 0 }}>{r.priority}</span>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.8, marginBottom: '18px' }}>{r.desc}</p>
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>Countries</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {r.countries.map(c => (
                          <span key={c} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '4px' }}>{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>Key Products</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {r.products.map(p => (
                          <span key={p} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px' }}>{p}</span>
                        ))}
                      </div>
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
      <section style={{ padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=1400&q=80&auto=format&fit=crop" alt="Global shipping and trade" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.6 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <span className="em-line" style={{ margin: '0 auto 20px', display: 'block' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>Sourcing from Your Region?</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', marginBottom: '32px', lineHeight: 1.8 }}>Connect with us for destination-specific product and compliance information.</p>
            <Link href="/contact" className="btn-dark" style={{ padding: '15px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block', background: '#fff', color: 'var(--color-bg-dark)', border: '1px solid #fff' }}>Request Quotation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
