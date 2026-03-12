import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Export Process | Pre-Shipment Inspection | Quality Control Export India',
  description: 'Maheshwari Global Exports uses a structured 5-step Export Control Framework: Strategic Sourcing, Sample Validation, Pre-Shipment Verification, Documentation Discipline, and Logistics Coordination.',
  keywords: ['pre-shipment inspection exporter india', 'quality control export india', 'export documentation support india', 'structured export company', 'supplier verification export house', 'quality verified exporter india', 'consistent agro export company'],
  path: '/process',
});

const steps = [
  { number: '01', title: 'Strategic Sourcing', h3: 'Supplier Identification & Qualification', desc: 'Supplier identification based on production capability, scalability, quality track record, and compliance readiness.', details: ['Production capacity assessment', 'Historical quality track record review', 'Compliance and certification verification', 'Scalability and reliability profiling'], icon: '🔍' },
  { number: '02', title: 'Sample Validation', h3: 'Specification Confirmation Before Order', desc: 'Every order starts with specification-matched sample approval. Physical parameters, organoleptic properties, and packing samples all confirmed before finalization.', details: ['Physical & chemical parameter testing', 'Organoleptic evaluation', 'Packaging compliance review', 'Buyer sign-off protocol'], icon: '📋' },
  { number: '03', title: 'Pre-Shipment Verification', h3: 'Zero-Tolerance Quality Gate Before Dispatch', desc: 'Before any shipment is dispatched, defined quality checks are conducted against the approved sample. Only 100% pass is cleared.', details: ['Visual and moisture inspection', 'Weight and grading verification', 'Packaging integrity check', 'Comparison against approved sample'], icon: '🛡️' },
  { number: '04', title: 'Documentation Discipline', h3: 'Accurate Export Documentation & Compliance', desc: 'Complete, accurate export documentation — Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate — prepared without errors.', details: ['Commercial invoice & packing list', 'Certificate of origin', 'Phytosanitary & health certificates', 'Destination-specific compliance documents'], icon: '📄' },
  { number: '05', title: 'Logistics Coordination', h3: 'End-to-End Shipment Tracking & Management', desc: 'Freight planning, container booking, carrier coordination, and real-time shipment tracking — ensuring cargo arrives on schedule in optimal condition.', details: ['Freight forwarder coordination', 'Container booking & stuffing supervision', 'Port coordination and CHA management', 'Real-time shipment status updates'], icon: '🚢' },
];

export default function Process() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Our Process', path: '/process' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO — Dark cinematic (unchanged) ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop" alt="Quality control and inspection process in an agricultural export warehouse" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.45 }} loading="eager" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.7) 0%, rgba(19,19,42,0.5) 50%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              5-Step Framework
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '800px', lineHeight: 1.1 }}>
              Our Export Control<br />Framework
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>
              Structured. Disciplined. Consistent — from approved sample to final delivered shipment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COMMITMENT STRIP ── */}
      <div style={{ background: '#eff6ff', borderTop: '1px solid #bfdbfe', borderBottom: '1px solid #bfdbfe' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '14px 2rem', textAlign: 'center' }}>
          <p style={{ color: '#0052b3', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', margin: 0 }}>
            ✅ No deviation between approved sample and delivered shipment — Non-Negotiable.
          </p>
        </div>
      </div>

      {/* ── PROCESS STEPS — why-choose-us card style ── */}
      <section aria-labelledby="process-heading" style={{ padding: '100px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>Step by Step</p>
              <h2 id="process-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif' }}>
                The 5-Step Quality-Verified Export Process
              </h2>
            </div>
          </AnimatedSection>

          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 80}>
              <div style={{ display: 'flex', gap: '0', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '24px', flexShrink: 0 }}>
                  <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #0073e6, #3395f0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '14px', color: '#fff', flexShrink: 0, boxShadow: '0 4px 14px rgba(0,115,230,0.3)' }}>{step.number}</div>
                  {i < steps.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: 'linear-gradient(to bottom, #bfdbfe, #e8eaed)', marginTop: '8px', minHeight: '48px' }} />
                  )}
                </div>
                <div className="feature-card" style={{ flex: 1, padding: '28px 28px 24px', marginBottom: '20px', background: '#ffffff', borderRadius: '14px', border: '1px solid #e8eaed', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                  {/* Top accent */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  {/* Number watermark */}
                  <div style={{ position: 'absolute', top: '12px', right: '18px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '48px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>{step.number}</div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ width: '44px', height: '44px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{step.icon}</div>
                    <div>
                      <p style={{ fontSize: '10px', color: '#0073e6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 2px' }}>Step {step.number}</p>
                      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '17px', margin: 0 }}>{step.title}</h3>
                    </div>
                  </div>
                  <p style={{ color: '#0052b3', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '10px 0 6px' }}>{step.h3}</p>
                  <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.8, marginBottom: '14px' }}>{step.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {step.details.map(d => (
                      <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6b7280', background: '#f4f5f7', padding: '6px 10px', borderRadius: '6px' }}>
                        <span style={{ color: '#0073e6', flexShrink: 0, fontWeight: 700 }}>✓</span> {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
          <style>{`.feature-card:hover{box-shadow:0 12px 36px rgba(0,115,230,0.10);transform:translateY(-4px);border-color:#bfdbfe!important}`}</style>
        </div>
      </section>

      {/* ── WHY IT MATTERS — image section ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=80&auto=format&fit=crop" alt="Cargo containers at shipping port" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.7 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(0,52,179,0.72) 0%, rgba(0,100,120,0.60) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div style={{ width: '36px', height: '3px', background: 'rgba(255,255,255,0.7)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '10px' }}>Why This Framework Matters</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '480px', margin: '0 auto' }}>Our process is our promise to every buyer.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }} className="three-col">
            {[
              { icon: '🎯', title: 'Eliminates Surprises', desc: 'Every deviation risk identified and resolved before shipment — not after arrival.' },
              { icon: '🤝', title: 'Builds Buyer Trust', desc: 'Consistent delivery builds confidence. Our buyers return because they know what to expect.' },
              { icon: '📈', title: 'Scalable Reliability', desc: 'The same framework applies to every order — 1 container or 100.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '14px', padding: '32px', textAlign: 'center', borderTop: '3px solid rgba(255,255,255,0.5)' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                  <h3 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, marginBottom: '10px', fontSize: '16px', marginTop: 0 }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 2rem', background: '#ffffff', borderTop: '1px solid #e8eaed' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Experience Structured, Quality-Verified Export</h2>
            <p style={{ color: '#6b7280', marginBottom: '28px', lineHeight: 1.8 }}>Request a quotation and see our Export Control Framework in action.</p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '14px 34px', background: 'linear-gradient(135deg, #0073e6, #3395f0)', color: '#fff', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px', boxShadow: '0 4px 20px rgba(0,115,230,0.35)', fontFamily: 'Inter, sans-serif' }}>Request Quotation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
