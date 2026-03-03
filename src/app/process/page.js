import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Export Process | Pre-Shipment Inspection | Quality Control Export India',
  description: 'Maheshwari Global Exports uses a structured 5-step Export Control Framework: Strategic Sourcing, Sample Validation, Pre-Shipment Verification, Documentation Discipline, and Logistics Coordination.',
  keywords: ['pre-shipment inspection exporter india','quality control export india','export documentation support india','structured export company','supplier verification export house','quality verified exporter india','consistent agro export company'],
  path: '/process',
});

const steps = [
  { number: '01', title: 'Strategic Sourcing', h2: 'Supplier Identification & Qualification', desc: 'Supplier identification based on production capability, scalability, quality track record, and compliance readiness.', details: ['Production capacity assessment','Historical quality track record review','Compliance and certification verification','Scalability and reliability profiling'], icon: '🔍' },
  { number: '02', title: 'Sample Validation', h2: 'Specification Confirmation Before Order', desc: 'Every order starts with specification-matched sample approval. Physical parameters, organoleptic properties, and packing samples all confirmed before finalization.', details: ['Physical & chemical parameter testing','Organoleptic evaluation','Packaging compliance review','Buyer sign-off protocol'], icon: '📋' },
  { number: '03', title: 'Pre-Shipment Verification', h2: 'Zero-Tolerance Quality Gate Before Dispatch', desc: 'Before any shipment is dispatched, defined quality checks are conducted against the approved sample. Only 100% pass is cleared.', details: ['Visual and moisture inspection','Weight and grading verification','Packaging integrity check','Comparison against approved sample'], icon: '🛡️' },
  { number: '04', title: 'Documentation Discipline', h2: 'Accurate Export Documentation & Compliance', desc: 'Complete, accurate export documentation — Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate — prepared without errors.', details: ['Commercial invoice & packing list','Certificate of origin','Phytosanitary & health certificates','Destination-specific compliance documents'], icon: '📄' },
  { number: '05', title: 'Logistics Coordination', h2: 'End-to-End Shipment Tracking & Management', desc: 'Freight planning, container booking, carrier coordination, and real-time shipment tracking — ensuring cargo arrives on schedule in optimal condition.', details: ['Freight forwarder coordination','Container booking & stuffing supervision','Port coordination and CHA management','Real-time shipment status updates'], icon: '🚢' },
];

export default function Process() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Our Process', path: '/process' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>How We Operate</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '800px' }}>
              Our Export Control Framework — 5-Step Quality Process
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Structured. Disciplined. Consistent — from approved sample to final delivered shipment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COMMITMENT BANNER ── */}
      <section style={{ background: 'linear-gradient(135deg,#d4a017,#f0c040)', padding: '20px 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <AnimatedSection>
            <p style={{ color: '#0a1f12', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', textAlign: 'center', margin: 0 }}>
              ✅ No deviation between approved sample and delivered shipment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PROCESS STEPS ── */}
      <section aria-labelledby="process-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <AnimatedSection>
            <h2 id="process-heading" style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '64px' }}>
              The 5-Step Quality-Verified Export Process
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 80}>
                <div style={{ display: 'flex', gap: '0', position: 'relative' }}>
                  {/* Timeline */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '28px', flexShrink: 0 }}>
                    <div className="step-circle">{step.number}</div>
                    {i < steps.length - 1 && (
                      <div style={{ width: '2px', flex: 1, background: 'linear-gradient(to bottom,rgba(64,145,108,0.5),rgba(64,145,108,0.1))', marginTop: '8px', minHeight: '40px' }} />
                    )}
                  </div>

                  {/* Card */}
                  <div className="glass-card hover-card-slide" style={{ flex: 1, borderRadius: '10px', padding: '28px', marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                      <span style={{ fontSize: '22px' }}>{step.icon}</span>
                      <div>
                        <span className="section-label" style={{ fontSize: '10px' }}>Step {step.number}</span>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', fontSize: '19px', margin: '2px 0 0' }}>{step.title}</h3>
                      </div>
                    </div>
                    <p style={{ color: '#40916c', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>{step.h2}</p>
                    <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.8, marginBottom: '16px' }}>{step.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {step.details.map(d => (
                        <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#4b7355' }}>
                          <div style={{ width: '18px', height: '18px', background: 'rgba(64,145,108,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ color: '#2d6a4f', fontSize: '10px' }}>✓</span>
                          </div>
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="bg-section-dark" style={{ padding: '80px 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Why This Framework Matters</h2>
              <p style={{ color: 'rgba(149,213,178,0.7)', maxWidth: '500px', margin: '0 auto' }}>Our process is our promise to every buyer.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="three-col">
            {[
              { icon: '🎯', title: 'Eliminates Surprises', desc: 'Every deviation risk identified and resolved before shipment — not after arrival.' },
              { icon: '🤝', title: 'Builds Buyer Trust', desc: 'Consistent delivery builds confidence. Our buyers return because they know what to expect.' },
              { icon: '📈', title: 'Scalable Reliability', desc: 'The same framework applies to every order — 1 container or 100.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="glass-card-dark" style={{ borderRadius: '10px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, marginBottom: '10px', fontSize: '16px', marginTop: 0 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(149,213,178,0.7)', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '64px 2rem', background: '#fff', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>Experience Structured, Quality-Verified Export</h2>
            <p style={{ color: '#4b7355', marginBottom: '28px', lineHeight: 1.8 }}>Request a quotation and see our Export Control Framework in action.</p>
            <Link href="/contact" className="btn-gold" style={{ padding: '14px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Request Quotation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
