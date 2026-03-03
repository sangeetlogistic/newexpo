import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us | Indian Merchant Export Company | Gujarat Export House',
  description: 'Maheshwari Global Exports is a Gujarat-based merchant export house founded in 2026 by Meet Aghara and Maharshi Siroya. Learn about our structured export approach, core principles, and vision for reliable Indian agricultural trade.',
  keywords: ['indian merchant export company','gujarat export house','structured export company india','reliable merchant exporter','agricultural export company rajkot','merchant export house gujarat'],
  path: '/about',
});

const principles = [
  { icon: '🛡️', title: 'Supplier Verification', desc: 'Rigorous evaluation of every supplier — production capacity, quality standards, compliance record, and scalability before onboarding.' },
  { icon: '📦', title: 'Shipment Consistency', desc: 'What you approve in the sample is exactly what you receive in every shipment. No deviation — this is our operating standard.' },
  { icon: '🤝', title: 'Long-Term Trade Relationships', desc: 'We prioritize building reliable partnerships with global buyers — based on trust, transparency, and delivery discipline.' },
];

const aims = [
  'Supply premium-grade agricultural products to global markets',
  'Build transparent and long-term global trade relationships',
  'Maintain strict quality and compliance standards in every shipment',
  'Support ethical and sustainable sourcing practices',
];

export default function About() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>Who We Are</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '700px' }}>
              About Maheshwari Global Exports
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Built on operational discipline and analytical quality management — delivering structured international trade solutions from Gujarat.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section aria-labelledby="story-heading" style={{ padding: '96px 2rem', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(to bottom,#2d6a4f,#74c69d,#2d6a4f)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="two-col">
          <AnimatedSection>
            <p className="section-label" style={{ marginBottom: '16px' }}>Our Story</p>
            <h2 id="story-heading" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '28px', lineHeight: 1.2 }}>
              Headquartered in India&apos;s{' '}
              <span className="text-gradient-green">Export Belt</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: '#374151', fontSize: '15px', lineHeight: 1.9 }}>
              <p>Maheshwari Global Exports (MGE) is headquartered in Rajkot, Gujarat — one of India&apos;s strongest manufacturing and agricultural regions.</p>
              <p>Founded in 2026 by <strong style={{ color: '#0d2b1a' }}>Maharshi Siroya</strong> and <strong style={{ color: '#0d2b1a' }}>Meet Aghara</strong>, combining operational manufacturing experience with analytical quality discipline.</p>
              <p>Our approach eliminates the uncertainty that plagues international trade by building structured, process-driven export systems that deliver consistent results.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '36px' }}>
              {[{ label: 'Founded', value: '2026' }, { label: 'Headquarters', value: 'Rajkot, Gujarat' }, { label: 'Specialization', value: 'Agricultural Exports' }, { label: 'Coverage', value: 'Global Markets' }].map(item => (
                <div key={item.label} className="glass-panel" style={{ padding: '16px', borderRadius: '8px' }}>
                  <div style={{ fontSize: '10px', color: '#40916c', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px', fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: '#0d2b1a', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, #d8f3dc, #b7e4c7)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(116,198,157,0.3)' }}>
                <div style={{ textAlign: 'center', color: '#2d6a4f' }}>
                  <div style={{ fontSize: '40px', opacity: 0.5, marginBottom: '8px' }}>🗺️</div>
                  <p style={{ fontSize: '13px', opacity: 0.7, margin: 0, fontWeight: 500 }}>Gujarat, India — Export Hub</p>
                </div>
              </div>
              <div className="bg-section-dark" style={{ borderRadius: '10px', padding: '24px', border: '1px solid rgba(116,198,157,0.15)' }}>
                <h3 style={{ color: '#f0c040', fontWeight: 700, marginBottom: '16px', fontSize: '15px', marginTop: 0 }}>Gujarat Advantage</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {["India's #1 export-oriented state", "Major agricultural production hub", "Strong port infrastructure (Mundra, Kandla)", "Robust supplier network across commodities"].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(149,213,178,0.85)', fontSize: '13px' }}>
                      <span style={{ color: '#74c69d', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── CORE PRINCIPLES ── */}
      <section aria-labelledby="principles-heading" className="bg-section-light" style={{ padding: '96px 2rem', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>Our Foundation</p>
              <h2 id="principles-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif' }}>Core Principles</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="three-col">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="glass-card hover-card" style={{ borderRadius: '12px', padding: '32px' }}>
                  <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg,#2d6a4f,#40916c)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginBottom: '20px', fontSize: '24px', boxShadow: '0 4px 16px rgba(45,106,79,0.3)' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0d2b1a', fontSize: '18px', marginBottom: '10px', marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: '#4b7355', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── VISION & AIM ── */}
      <section aria-labelledby="vision-heading" className="bg-section-dark" style={{ padding: '96px 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-mint" style={{ position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', opacity: 0.3 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="two-col">
          <AnimatedSection>
            <div className="glass-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ color: '#74c69d', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Vision</span>
            </div>
            <h2 id="vision-heading" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px' }}>Our Vision</h2>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '17px', lineHeight: 1.9 }}>
              To become a globally recognized <strong style={{ color: '#95d5b2' }}>agricultural export company from India</strong> known for reliability, quality assurance, and sustainable sourcing practices.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="glass-badge-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ color: '#f0c040', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Aim</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px' }}>Our Aim</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {aims.map(aim => (
                <li key={aim} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg,#2d6a4f,#40916c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px' }}>✓</div>
                  <span style={{ color: 'rgba(149,213,178,0.85)', fontSize: '15px', lineHeight: 1.7 }}>{aim}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '64px 2rem', background: '#fff', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>Partner With a Trade House Built for Reliability</h2>
            <p style={{ color: '#4b7355', marginBottom: '28px', lineHeight: 1.8 }}>Get in touch to discuss your sourcing requirements from India.</p>
            <Link href="/contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Contact Us Today</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
