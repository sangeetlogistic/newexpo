import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Maheshwari Global Exports | Agricultural Exporter from India | Rice & Spice Export Company',
  description: 'Maheshwari Global Exports is a Gujarat-based merchant export house specializing in rice, spices, pulses, and fresh produce exports. Structured sourcing, verified quality, and disciplined global delivery to GCC, Middle East, Africa, and Southeast Asia.',
  keywords: ['agricultural exporter from india', 'rice exporter india', 'spice exporter india', 'merchant exporter india', 'gujarat export company', 'b2b agricultural exporter', 'reliable rice exporter from india', 'basmati rice exporter india', 'indian spice exporter', 'pulses exporter india', 'agro products exporter'],
  path: '/',
});

const stats = [
  { value: '20+', label: 'Export Markets' },
  { value: '100%', label: 'Quality Verified' },
  { value: '50+', label: 'Product Variants' },
  { value: '2026', label: 'Founded' },
];

const features = [
  { icon: '🛡️', title: 'Verified Supplier Network', desc: 'Every supplier assessed for quality, compliance, and delivery reliability before onboarding.' },
  { icon: '📦', title: 'Shipment Consistency', desc: 'Approved sample equals delivered product — our non-negotiable operating standard.' },
  { icon: '🌐', title: 'Global Compliance', desc: 'Full export documentation, phytosanitary, and regulatory compliance for every destination.' },
];

const products = [
  { name: 'Rice', desc: 'Basmati & Non-Basmati', icon: '🌾', path: '/products' },
  { name: 'Indian Spices', desc: 'Turmeric, Cumin, Chili & More', icon: '🌶️', path: '/products' },
  { name: 'Pulses & Lentils', desc: 'Cleaned, Graded & Packed', icon: '🫘', path: '/products' },
  { name: 'Fresh Produce', desc: 'Fruits & Vegetables', icon: '🥭', path: '/products' },
];

export default function Home() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO ── */}
      <section aria-label="Hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* Hero background image — wheat fields at golden hour */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format&fit=crop"
          alt="Golden wheat fields representing premium Indian agricultural exports"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 1 }}
          loading="eager"
        />
        {/* Dark gradient overlay — keeps text readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, rgba(13,13,26,0.52) 0%, rgba(19,19,42,0.44) 45%, rgba(26,26,53,0.38) 80%, rgba(34,34,63,0.34) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '-100px', right: '-60px', width: '520px', height: '520px', background: 'radial-gradient(circle, rgba(0, 115, 230,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-60px', width: '420px', height: '420px', background: 'radial-gradient(circle, rgba(102, 178, 245,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '140px 2rem 80px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '80px', alignItems: 'center' }} className="hero-grid">

            <div>
              <AnimatedSection>
                <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--color-primary-soft)', borderRadius: '50%', display: 'inline-block' }} />
                  Gujarat-Based Merchant Export House · Est. 2026
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-bg-white)', lineHeight: 1.1, fontFamily: 'Poppins, sans-serif', marginBottom: '10px' }}>
                  Structured Sourcing.
                </h1>
                <h1 className="text-gradient-em" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, fontFamily: 'Poppins, sans-serif', marginBottom: '10px' }}>
                  Verified Quality.
                </h1>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: 'rgba(255,255,255,0.4)', lineHeight: 1.1, fontFamily: 'Poppins, sans-serif', marginBottom: '32px' }}>
                  Disciplined Delivery.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '17px', maxWidth: '540px', lineHeight: 1.9, marginBottom: '40px' }}>
                  Premium Indian agricultural exports — rice, spices, pulses, and fresh produce — with verified quality and structured global delivery to GCC, Africa, and Southeast Asia.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '15px 36px', textDecoration: 'none', display: 'inline-block' }}>
                    Request Quotation
                  </Link>
                  <Link href="/products" className="btn-outline-white" style={{ padding: '15px 36px', textDecoration: 'none', display: 'inline-block' }}>
                    View Products
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                  {['APEDA Registered', 'FSSAI Compliant', 'Pre-Shipment Verified'].map(tag => (
                    <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <span style={{ color: 'var(--color-primary-soft)', fontSize: '13px' }}>✓</span>
                      <span style={{ color: 'var(--color-bg-light)', fontSize: '12px' }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Stats block */}
            <AnimatedSection delay={200}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {stats.map((s, i) => (
                  <div key={s.label} className="card-dark-light" style={{ padding: '24px 16px', textAlign: 'center', borderTop: `2px solid ${i % 2 === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.18)'}` }}>
                    <div style={{ fontSize: '2.1rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1, color: 'rgba(255,255,255,0.9)' }}>{s.value}</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.13em', marginTop: '8px', fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
                <div className="card-dark-light" style={{ gridColumn: 'span 2', padding: '20px', borderTop: '2px solid rgba(255,255,255,0.25)' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Markets Served</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['GCC', 'Middle East', 'Africa', 'SE Asia', 'Europe'].map(m => (
                      <span key={m} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.75)', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px' }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.75 }}>
          <span style={{ color: 'var(--color-bg-light)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, var(--color-bg-light), transparent)' }} />
        </div>
        <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── INFO STRIP ── */}
      <div style={{ background: 'var(--color-border-card)', borderTop: '1px solid var(--color-border-section)', borderBottom: '1px solid var(--color-border-section)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '13px 2rem', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {['Rice · Spices · Pulses · Fresh Produce', 'Gujarat, India → Global Markets', 'APEDA Registered · FSSAI Compliant'].map(t => (
            <span key={t} style={{ color: 'var(--color-text-heading-alt)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <section style={{ padding: '96px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="two-col">
          <AnimatedSection>
            <span className="em-line" style={{ marginBottom: '20px', display: 'block' }} />
            <p className="section-label" style={{ marginBottom: '14px' }}>Our Foundation</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', lineHeight: 1.2, fontFamily: 'Poppins, sans-serif', marginBottom: '28px' }}>
              Built for Predictable, Reliable Global Trade
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--color-text-paragraph)', fontSize: '15px', lineHeight: 1.9 }}>
              <p>In international sourcing, inconsistency is the biggest risk. Approved samples often fail to match final shipments.</p>
              <p>Maheshwari Global Exports was built to eliminate that gap — through disciplined <strong style={{ color: 'var(--color-text-heading-alt)' }}>supplier verification</strong>, structured pre-shipment checks, and execution-focused logistics management.</p>
              <div className="callout-em">
                <p style={{ color: 'var(--color-primary-dark)', fontWeight: 700, fontSize: '16px', margin: '0 0 4px', fontFamily: 'Poppins, sans-serif' }}>We do not trade opportunistically.</p>
                <p style={{ color: 'var(--color-primary-mid)', fontWeight: 700, fontSize: '16px', margin: 0, fontFamily: 'Poppins, sans-serif' }}>We build repeatable supply systems.</p>
              </div>
            </div>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 700, marginTop: '32px', textDecoration: 'none', fontSize: '14px', borderBottom: '2px solid var(--color-primary-light)', paddingBottom: '2px' }}>
              Learn About Our Company &rarr;
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/3', background: 'var(--color-bg-light)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop" alt="Export operations and logistics in Rajkot Gujarat India" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.7 }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', padding: '12px 16px', border: '1px solid rgba(0, 115, 230,0.35)' }}>
                  <div style={{ color: 'var(--color-primary)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Established 2026</div>
                  <div style={{ color: 'var(--color-text-heading)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>Rajkot, Gujarat — India&apos;s Export Belt</div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-18px', right: '-18px', background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', padding: '16px 20px', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0, 115, 230,0.45)' }}>
                <div style={{ fontSize: '24px', fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#fff' }}>100%</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '3px', fontWeight: 700 }}>Quality Verified</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '80px 2rem', background: 'var(--color-bg-feature)', borderTop: '1px solid var(--color-border-section)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }} className="three-col">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 100}>
              <div className="card-em-accent" style={{ padding: '28px' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--color-bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px', marginBottom: '16px', fontSize: '20px' }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--color-text-heading-alt)', fontSize: '15px', marginBottom: '8px', marginTop: 0 }}>{f.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{ padding: '96px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p className="section-label" style={{ marginBottom: '12px' }}>What We Export</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
                Premium Indian Agricultural Products
              </h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
                Every product sourced, verified, and shipped with disciplined quality control from Gujarat, India.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '18px' }} className="four-col">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 80}>
                <Link href={p.path} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="card hover-card" style={{ padding: '28px 20px', textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '40px', marginBottom: '14px' }}>{p.icon}</div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--color-text-heading-alt)', fontSize: '15px', marginBottom: '6px', marginTop: 0 }}>{p.name}</h3>
                    <p style={{ color: 'var(--color-text-subtle)', fontSize: '12px', margin: '0 0 14px' }}>{p.desc}</p>
                    <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: 700, letterSpacing: '0.05em' }}>VIEW DETAILS →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link href="/products" className="btn-outline-em" style={{ padding: '13px 30px', textDecoration: 'none', display: 'inline-block' }}>
              View Full Product Portfolio
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.four-col{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.four-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '88px 2rem', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=70&auto=format&fit=crop" alt="Wheat fields at golden hour representing Indian agricultural exports" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', opacity: 0.75 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,rgba(10,10,10,0.55) 0%,rgba(0,0,0,0.48) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle,rgba(0, 115, 230,0.15) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <span className="em-line" style={{ margin: '0 auto 20px', display: 'block' }} />
            <p className="section-label-dark" style={{ marginBottom: '16px' }}>Start Sourcing</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '18px', lineHeight: 1.3 }}>
              Ready to Source Premium Indian Agricultural Products?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', marginBottom: '36px', lineHeight: 1.8 }}>
              Connect with Gujarat&apos;s reliable merchant export house for structured, quality-verified sourcing.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-primary" style={{ padding: '15px 40px', textDecoration: 'none', display: 'inline-block' }}>
                Request Quotation
              </Link>
              <Link href="/process" className="btn-outline-white" style={{ padding: '15px 40px', textDecoration: 'none', display: 'inline-block' }}>
                Our Export Process
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
