import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import imgMap from '../../../public/assets/map.avif';
import imgShipment from '../../../public/assets/shipment.avif';

export const metadata = buildMetadata({
  title: 'Global Markets | Export to UAE, Saudi Arabia, Africa, Southeast Asia | India Exporter',
  description: 'Maheshwari Global Exports serves buyers across the GCC, Middle East, Africa, and Southeast Asia — with structured delivery to UAE, Saudi Arabia, Kuwait, Egypt, Singapore, and more.',
  keywords: ['export to uae from india', 'rice exporter to middle east', 'indian spice exporter to gcc', 'agricultural exporter africa', 'food exporter southeast asia', 'india to saudi arabia export', 'india to singapore export', 'indian agricultural product buyer'],
  path: '/markets',
});

const regions = [
  {
    name: 'GCC & Middle East', icon: '🇦🇪', number: '01',
    countries: ['UAE', 'Saudi Arabia', 'Kuwait', 'Oman', 'Qatar', 'Bahrain'],
    products: ['Basmati Rice', 'Indian Spices', 'Pulses', 'Fresh Onion'],
    desc: "India's largest agricultural export destination. Strong demand for basmati rice, spices, and fresh produce driven by a large South Asian diaspora and growing food retail sectors.",
    priority: 'Primary Market', priorityBg: '#fffbeb', priorityColor: '#92400e', priorityBorder: '#fcd34d',
  },
  {
    name: 'Africa', icon: '🌍', number: '02',
    countries: ['Egypt', 'Kenya', 'Tanzania', 'Ethiopia', 'South Africa', 'Ghana'],
    products: ['Non-Basmati Rice', 'Pulses & Lentils', 'Spice Blends', 'Garlic'],
    desc: 'Rapidly growing demand for affordable, quality Indian agricultural commodities — particularly non-basmati rice and pulses for food security and distribution.',
    priority: 'Growth Market', priorityBg: '#f0fdf4', priorityColor: '#166534', priorityBorder: '#86efac',
  },
  {
    name: 'Southeast Asia', icon: '🌏', number: '03',
    countries: ['Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Vietnam', 'Philippines'],
    products: ['Basmati Rice', 'Indian Spices', 'Turmeric', 'Fresh Mango'],
    desc: 'Growing demand for premium Indian rice varieties and spices, driven by culinary diversity and well-established Indian trade networks across the region.',
    priority: 'Growth Market', priorityBg: '#f0fdf4', priorityColor: '#166534', priorityBorder: '#86efac',
  },
  {
    name: 'Europe & Others', icon: '🌎', number: '04',
    countries: ['United Kingdom', 'France', 'Germany', 'Canada', 'USA'],
    products: ['Organic Spices', 'Premium Basmati', 'Lentils'],
    desc: 'Premium organic and specialty agricultural products targeting Indian diaspora communities and mainstream health-conscious consumers in Western markets.',
    priority: 'Emerging Market', priorityBg: '#eff6ff', priorityColor: '#1e40af', priorityBorder: '#93c5fd',
  },
];

export default function Markets() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Markets', path: '/markets' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        <Image src={imgMap} alt="Global trade routes map" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }} priority />
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
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>Quality-verified agricultural exports delivered across 20+ global markets with full compliance documentation.</p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="hero-stats-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '48px' }}>
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

      {/* REGIONS — why-choose-us card style */}
      <section aria-labelledby="markets-heading" style={{ padding: '100px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>Market Coverage</p>
              <h2 id="markets-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Our Global Export Markets</h2>
              <p style={{ color: '#6b7280', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>Each region served with dedicated product selection, packaging standards, and regulatory compliance.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }} className="two-col">
            {regions.map((r, i) => (
              <AnimatedSection key={r.name} delay={i * 80}>
                <div className="feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', overflow: 'hidden', height: '100%', position: 'relative', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                  {/* Blue gradient top accent */}
                  <div style={{ height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  {/* Number watermark */}
                  <div style={{ position: 'absolute', top: '18px', right: '22px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '52px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>{r.number}</div>
                  <div style={{ padding: '28px 28px 24px' }}>
                    <div className="region-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '52px', height: '52px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', flexShrink: 0 }}>{r.icon}</div>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '18px', margin: 0 }}>{r.name}</h3>
                      </div>
                      <span className="region-badge" style={{ background: r.priorityBg, border: `1px solid ${r.priorityBorder}`, color: r.priorityColor, fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.07em', textTransform: 'uppercase', flexShrink: 0, marginLeft: '8px' }}>{r.priority}</span>
                    </div>
                    <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.8, marginBottom: '18px' }}>{r.desc}</p>
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '10px', color: '#0073e6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>Countries</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {r.countries.map(c => (
                          <span key={c} style={{ background: '#f4f5f7', border: '1px solid #e8eaed', color: '#4b5563', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '4px' }}>{c}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', color: '#0073e6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '8px' }}>Key Products</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {r.products.map(p => (
                          <span key={p} style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#0052b3', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px' }}>{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`
            .feature-card:hover{box-shadow:0 12px 36px rgba(0,115,230,0.10);transform:translateY(-4px);border-color:#bfdbfe!important}
            @media(max-width:768px){
              .two-col{grid-template-columns:1fr!important}
              .hero-stats-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 12px !important; }
              .region-header { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
              .region-badge { margin-left: 0 !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}>
        <Image src={imgShipment} alt="Global shipping and trade" fill style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.6 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,52,179,0.72) 0%, rgba(0,100,120,0.60) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ width: '36px', height: '3px', background: 'rgba(255,255,255,0.7)', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>Sourcing from Your Region?</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '16px', marginBottom: '32px', lineHeight: 1.8 }}>Connect with us for destination-specific product and compliance information.</p>
            <Link href="/contact" style={{ padding: '15px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block', background: '#fff', color: '#0052b3', border: '1px solid #fff', borderRadius: '6px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Request Quotation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
