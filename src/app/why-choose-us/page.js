import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import handshake2 from '../../../public/assets/handshake2.avif';

export const metadata = buildMetadata({
  title: 'Why Choose Us | Reliable Agricultural Exporter India | Verified Export House',
  description: 'Choose Maheshwari Global Exports for process-driven sourcing, verified supplier network, shipment consistency, and transparent long-term trade relationships. Trusted by global buyers.',
  keywords: ['reliable agricultural exporter india', 'trusted export house india', 'why choose indian exporter', 'verified agro exporter', 'consistent export quality india', 'b2b agricultural supplier india', 'structured export house gujarat'],
  path: '/why-choose-us',
});

const features = [
  {
    number: '01',
    icon: '🛡️',
    title: 'Supplier Verification Protocol',
    desc: 'Every supplier assessed for production capacity, quality standards, compliance record, and scalability. No shortcuts.',
    color: '#0073e6',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Sample-to-Shipment Consistency',
    desc: 'Approved sample parameters matched in every shipment. This is our non-negotiable operating standard.',
    color: '#0052b3',
  },
  {
    number: '03',
    icon: '📄',
    title: 'Disciplined Documentation',
    desc: 'Error-free export documentation for every shipment — Invoice, Packing List, Certificates, and compliance docs.',
    color: '#0073e6',
  },
  {
    number: '04',
    icon: '🤝',
    title: 'Long-Term Partnership Approach',
    desc: "We don't trade opportunistically. We build structured, long-term sourcing relationships based on trust and transparency.",
    color: '#0052b3',
  },
  {
    number: '05',
    icon: '🌐',
    title: 'Global Compliance Management',
    desc: 'Phytosanitary, food safety, and destination-specific regulatory compliance managed for every order, every market.',
    color: '#0073e6',
  },
  {
    number: '06',
    icon: '📈',
    title: 'Scalable Supply Execution',
    desc: 'The same disciplined framework applies whether it is a 1-container trial or a multi-container annual contract.',
    color: '#0052b3',
  },
];

const comparisonRows = [
  ['Supplier Verification', '✅ Structured assessment', '❌ Often skipped or informal'],
  ['Sample-to-Shipment Match', '✅ Non-negotiable standard', '⚠️ Not systematically tracked'],
  ['Export Documentation', '✅ Error-free, complete', '⚠️ Variable quality'],
  ['Compliance Management', '✅ Destination-specific', '❌ Basic or absent'],
  ['Trade Relationship', '✅ Long-term focus', '❌ Transaction-only'],
  ['Communication', '✅ Structured & proactive', '⚠️ Reactive only'],
];

const stats = [
  { value: '20+', label: 'Global Markets' },
  { value: '100%', label: 'Quality Verified' },
  { value: '50+', label: 'Product Variants' },
  { value: '5+', label: 'Years of Trust' },
];

export default function WhyChooseUs() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Why Choose Us', path: '/why-choose-us' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO ── */}
      <section style={{ paddingTop: '140px', paddingBottom: '100px', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
        <Image
          src={handshake2}
          alt="Business handshake representing trusted global export partnership"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%', opacity: 1 }}
          priority
        />
        {/* Left-heavy gradient so text stays readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.45) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            {/* Breadcrumb pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,115,230,0.18)', border: '1px solid rgba(0,115,230,0.35)', borderRadius: '999px', padding: '6px 16px', marginBottom: '28px' }}>
              <span style={{ width: '6px', height: '6px', background: '#0073e6', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ color: '#3395f0', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>The Difference</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '720px', lineHeight: 1.1 }}>
              Why Global Buyers<br />
              <span style={{ background: 'linear-gradient(90deg, #0073e6, #3395f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Choose MGE</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '17px', maxWidth: '520px', lineHeight: 1.9, marginBottom: '44px' }}>
              Process-driven. Quality-verified. Reliability-first — structure over opportunistic trading.
            </p>

            {/* Quick stats bar */}
            <div className="hero-stats" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {stats.map(s => (
                <div key={s.label} className="stats-item" style={{ borderLeft: '2px solid #0073e6', paddingLeft: '16px' }}>
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#fff', fontSize: '22px', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', marginTop: '4px', letterSpacing: '0.06em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FEATURES — Light cards ── */}
      <section aria-labelledby="features-heading" style={{ padding: '100px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ width: '36px', height: '3px', background: '#0073e6', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>Our Differentiators</p>
              <h2 id="features-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
                Built for Predictable Global Trade
              </h2>
              <p style={{ color: '#6b7280', maxWidth: '460px', margin: '0 auto', lineHeight: 1.8 }}>Six pillars that define how we operate — no exceptions.</p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="three-col">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 70}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e8eaed',
                  borderRadius: '14px',
                  padding: '32px 28px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxSizing: 'border-box',
                }} className="feature-card">
                  {/* Top accent line */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  {/* Number watermark */}
                  <div style={{ position: 'absolute', top: '16px', right: '20px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '48px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>{f.number}</div>

                  {/* Icon */}
                  <div style={{ width: '52px', height: '52px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px' }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0a0a0a', fontSize: '15px', marginBottom: '10px', marginTop: 0, lineHeight: 1.3 }}>{f.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.85, margin: 0 }}>{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`
            .feature-card:hover { box-shadow: 0 12px 36px rgba(0,115,230,0.10); transform: translateY(-4px); border-color: #bfdbfe !important; }
            @media(max-width:900px){.three-col{grid-template-columns:repeat(2,1fr)!important}}
            @media(max-width:560px){
              .three-col{grid-template-columns:1fr!important}
              .hero-stats { gap: 20px !important; }
              .stats-item { flex: 1 1 40%; }
            }
          `}</style>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: '100px 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div style={{ width: '36px', height: '3px', background: '#0073e6', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>Head-to-Head</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif' }}>
                MGE vs. Typical Exporters
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ overflowX: 'auto', paddingBottom: '16px', margin: '0 -1rem', padding: '0 1rem 16px' }}>
              <div style={{ minWidth: '768px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e8eaed', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
                {/* Header row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr' }}>
                  {['Parameter', 'Maheshwari Global Exports', 'Typical Broker / Exporter'].map((h, i) => (
                    <div key={h} style={{
                      padding: '16px 22px',
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 700,
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: i === 1 ? '#0073e6' : i === 0 ? '#0a0a0a' : '#f4f5f7',
                      color: i === 2 ? '#6b7280' : '#fff',
                      borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    }}>{h}</div>
                  ))}
                </div>
                {/* Data rows */}
                {comparisonRows.map(([param, us, them], idx, arr) => (
                  <div key={param} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', borderBottom: idx < arr.length - 1 ? '1px solid #f3f4f6' : 'none', background: idx % 2 === 0 ? '#fafafa' : '#ffffff' }}>
                    <div style={{ padding: '14px 22px', color: '#0a0a0a', fontWeight: 600, fontSize: '13px', borderRight: '1px solid #f3f4f6' }}>{param}</div>
                    <div style={{ padding: '14px 22px', color: '#059669', fontWeight: 600, fontSize: '13px', borderRight: '1px solid #f3f4f6', background: '#f0fdf4' }}>{us}</div>
                    <div style={{ padding: '14px 22px', color: '#9ca3af', fontSize: '13px' }}>{them}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 2rem', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,115,230,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div style={{ width: '36px', height: '3px', background: '#0073e6', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
              Ready to Experience Structured Export?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '32px', lineHeight: 1.8 }}>
              Contact us to discuss your sourcing requirements from India.
            </p>
            <Link href="/contact" style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #0073e6, #3395f0)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '6px',
              boxShadow: '0 4px 20px rgba(0,115,230,0.35)',
            }}>
              Get In Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
