import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Why Choose Us | Reliable Agricultural Exporter India | Verified Export House',
  description: 'Choose Maheshwari Global Exports for process-driven sourcing, verified supplier network, shipment consistency, and transparent long-term trade relationships. Trusted by global buyers.',
  keywords: ['reliable agricultural exporter india', 'trusted export house india', 'why choose indian exporter', 'verified agro exporter', 'consistent export quality india', 'b2b agricultural supplier india', 'structured export house gujarat'],
  path: '/why-choose-us',
});

const features = [
  { icon: '🛡️', title: 'Supplier Verification Protocol', desc: 'Every supplier assessed for production capacity, quality standards, compliance record, and scalability. No shortcuts.' },
  { icon: '📋', title: 'Sample-to-Shipment Consistency', desc: 'Approved sample parameters matched in every shipment. This is our non-negotiable operating standard.' },
  { icon: '📄', title: 'Disciplined Documentation', desc: 'Error-free export documentation prepared for every shipment — Invoice, Packing List, Certificates, and compliance docs.' },
  { icon: '🤝', title: 'Long-Term Partnership Approach', desc: 'We don\'t trade opportunistically. We build structured, long-term sourcing relationships based on trust and transparency.' },
  { icon: '🌐', title: 'Global Compliance Management', desc: 'Phytosanitary, food safety, and destination-specific regulatory compliance managed for every order, every market.' },
  { icon: '📈', title: 'Scalable Supply Execution', desc: 'The same disciplined framework applies whether it is a 1-container trial or a multi-container annual contract.' },
];

const comparisonRows = [
  ['Supplier Verification', '✅ Structured assessment', '❌ Often skipped or informal'],
  ['Sample-to-Shipment Match', '✅ Non-negotiable standard', '⚠️ Not systematically tracked'],
  ['Export Documentation', '✅ Error-free, complete', '⚠️ Variable quality'],
  ['Compliance Management', '✅ Destination-specific', '❌ Basic or absent'],
  ['Trade Relationship', '✅ Long-term focus', '❌ Transaction-only'],
  ['Communication', '✅ Structured & proactive', '⚠️ Reactive only'],
];

export default function WhyChooseUs() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Why Choose Us', path: '/why-choose-us' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO — Dark cinematic ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&q=80&auto=format&fit=crop"
          alt="Professional business partnership and trust representing why buyers choose Maheshwari Global Exports"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.4 }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.7) 0%, rgba(19,19,42,0.5) 50%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              The Difference
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '800px', lineHeight: 1.1 }}>
              Why Global Buyers<br />Choose MGE
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>
              Process-driven. Quality-verified. Reliability-first — structure over opportunistic trading.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURES — Dark cards on white ── */}
      <section aria-labelledby="features-heading" style={{ padding: '100px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p className="section-label" style={{ marginBottom: '12px' }}>Our Differentiators</p>
              <h2 id="features-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
                Built for Predictable Global Trade
              </h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>Six pillars that define how we operate — no exceptions.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }} className="three-col">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <div className="hover-card" style={{ padding: '32px 26px', background: 'var(--color-bg-dark)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', height: '100%' }}>
                  <div style={{ width: '52px', height: '52px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginBottom: '18px', fontSize: '22px', border: '1px solid rgba(255,255,255,0.1)' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '15px', marginBottom: '10px', marginTop: 0 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── COMPARISON TABLE — Dark section ── */}
      <section style={{ padding: '100px 2rem', background: 'var(--color-bg-dark)' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '12px' }}>Head-to-Head</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                MGE vs. Typical Exporters
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', background: 'rgba(255,255,255,0.06)' }}>
                {['Parameter', 'Maheshwari Global Exports', 'Typical Broker / Exporter'].map((h, i) => (
                  <div key={h} style={{ padding: '14px 20px', color: i === 1 ? '#fff' : 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '12px', letterSpacing: '0.05em', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>{h}</div>
                ))}
              </div>
              {comparisonRows.map(([param, us, them], idx, arr) => (
                <div key={param} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', borderBottom: idx < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', background: idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <div style={{ padding: '14px 20px', color: '#fff', fontWeight: 600, fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>{param}</div>
                  <div style={{ padding: '14px 20px', color: 'var(--color-accent-green)', fontWeight: 600, fontSize: '13px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>{us}</div>
                  <div style={{ padding: '14px 20px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{them}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 2rem', background: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border-section)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <span className="em-line" style={{ margin: '0 auto 20px', display: 'block' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Ready to Experience Structured Export?</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px', lineHeight: 1.8 }}>Contact us to discuss your sourcing requirements from India.</p>
            <Link href="/contact" className="btn-dark" style={{ padding: '14px 34px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Get In Touch</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
