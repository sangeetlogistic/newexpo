import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Why Choose Us | Reliable Agricultural Exporter India | Verified Export House',
  description: 'Choose Maheshwari Global Exports for process-driven sourcing, verified supplier network, shipment consistency, and transparent long-term trade relationships. Trusted by global buyers.',
  keywords: ['reliable agricultural exporter india','trusted export house india','why choose indian exporter','verified agro exporter','consistent export quality india','b2b agricultural supplier india','structured export house gujarat'],
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

export default function WhyChooseUs() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Why Choose Us', path: '/why-choose-us' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>The Difference</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '800px' }}>
              Why Global Buyers Choose Maheshwari Global Exports
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Process-driven. Quality-verified. Reliability-first — this is what separates structure from opportunistic trading.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section aria-labelledby="features-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>Our Differentiators</p>
              <h2 id="features-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif' }}>
                Built for Predictable Global Trade
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="three-col">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 80}>
                <div className="glass-card hover-card" style={{ borderRadius: '12px', padding: '28px' }}>
                  <div style={{ width: '54px', height: '54px', background: 'linear-gradient(135deg,#2d6a4f,#40916c)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', marginBottom: '18px', fontSize: '22px', boxShadow: '0 4px 16px rgba(45,106,79,0.3)' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0d2b1a', fontSize: '16px', marginBottom: '10px', marginTop: 0 }}>{f.title}</h3>
                  <p style={{ color: '#4b7355', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section aria-labelledby="comparison-heading" className="bg-section-light" style={{ padding: '80px 2rem', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>Head-to-Head</p>
              <h2 id="comparison-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif' }}>
                MGE vs. Typical Exporters
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(116,198,157,0.25)', boxShadow: '0 4px 24px rgba(13,43,26,0.08)' }}>
              {/* Header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'linear-gradient(135deg,#0d2b1a,#1a4731)' }}>
                {['Parameter', 'Maheshwari Global Exports', 'Typical Broker/Exporter'].map((h, i) => (
                  <div key={h} style={{ padding: '16px 20px', color: i === 1 ? '#f0c040' : '#74c69d', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '13px', borderRight: i < 2 ? '1px solid rgba(116,198,157,0.15)' : 'none' }}>{h}</div>
                ))}
              </div>
              {[
                ['Supplier Verification', '✅ Structured assessment', '❌ Often skipped or informal'],
                ['Sample-to-Shipment Match', '✅ Non-negotiable standard', '⚠️ Not systematically tracked'],
                ['Export Documentation', '✅ Error-free, complete', '⚠️ Variable quality'],
                ['Compliance Management', '✅ Destination-specific', '❌ Basic or absent'],
                ['Trade Relationship', '✅ Long-term focus', '❌ Transaction-only'],
                ['Communication', '✅ Structured & proactive', '⚠️ Reactive only'],
              ].map(([param, us, them], idx, arr) => (
                <div key={param} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: idx < arr.length - 1 ? '1px solid rgba(116,198,157,0.1)' : 'none', background: idx % 2 === 0 ? '#fff' : 'rgba(208,243,220,0.25)' }}>
                  <div style={{ padding: '14px 20px', color: '#0d2b1a', fontWeight: 600, fontSize: '13px', borderRight: '1px solid rgba(116,198,157,0.1)' }}>{param}</div>
                  <div style={{ padding: '14px 20px', color: '#1a4731', fontWeight: 600, fontSize: '13px', borderRight: '1px solid rgba(116,198,157,0.1)' }}>{us}</div>
                  <div style={{ padding: '14px 20px', color: '#6b7280', fontSize: '13px' }}>{them}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '64px 2rem', background: '#fff', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>Ready to Experience Structured Export?</h2>
            <p style={{ color: '#4b7355', marginBottom: '28px', lineHeight: 1.8 }}>Contact us to discuss your sourcing requirements from India.</p>
            <Link href="/contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Get In Touch</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
