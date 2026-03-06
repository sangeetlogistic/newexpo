import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Us | Indian Merchant Export Company | Gujarat Export House',
  description: 'Maheshwari Global Exports is a Gujarat-based merchant export house founded in 2026 by Meet Aghara and Maharshi Siroya. Learn about our structured export approach, core principles, and vision for reliable Indian agricultural trade.',
  keywords: ['indian merchant export company', 'gujarat export house', 'structured export company india', 'reliable merchant exporter', 'agricultural export company rajkot', 'merchant export house gujarat'],
  path: '/about',
});

const principles = [
  { icon: '🛡️', title: 'Supplier Verification', desc: 'Rigorous evaluation of every supplier — production capacity, quality standards, compliance record, and scalability before onboarding.' },
  { icon: '📦', title: 'Shipment Consistency', desc: 'What you approve in the sample is exactly what you receive in every shipment. No deviation — this is our operating standard.' },
  { icon: '🤝', title: 'Long-Term Relationships', desc: 'We prioritize building reliable partnerships with global buyers — based on trust, transparency, and delivery discipline.' },
];

const aims = [
  'Supply premium-grade agricultural products to global markets',
  'Build transparent and long-term global trade relationships',
  'Maintain strict quality and compliance standards in every shipment',
  'Support ethical and sustainable sourcing practices',
];

const milestones = [
  { year: '2026', title: 'Company Founded', desc: 'Established in Rajkot, Gujarat as a merchant export house focused on agricultural commodities.' },
  { year: '2026', title: 'First Export Shipment', desc: 'Dispatched first verified shipment of premium basmati rice to the GCC region.' },
  { year: '2026', title: 'Product Portfolio Expansion', desc: 'Added spices, pulses, and fresh produce to our export-ready product range.' },
  { year: '2026+', title: 'Global Growth', desc: 'Expanding structured export operations across Middle East, Africa, and Southeast Asia.' },
];

export default function About() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO HEADER — Dark cinematic style ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80&auto=format&fit=crop"
          alt="Gujarat port and industrial infrastructure representing Maheshwari Global Exports base of operations"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', opacity: 0.75 }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.7) 0%, rgba(19,19,42,0.55) 50%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', bottom: '-80px', right: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              Est. 2026 · Rajkot, Gujarat
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '750px', lineHeight: 1.1 }}>
              About Maheshwari<br />Global Exports
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.9 }}>
              Built on operational discipline and analytical quality management — delivering structured international trade from Gujarat, India.
            </p>
          </AnimatedSection>

          {/* Quick stats row */}
          <AnimatedSection delay={200}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '48px' }}>
              {[{ value: 'Gujarat', label: 'Headquartered' }, { value: '2026', label: 'Founded' }, { value: '20+', label: 'Markets' }, { value: '50+', label: 'Products' }].map(s => (
                <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', borderRadius: '8px', padding: '18px 28px', textAlign: 'center', minWidth: '120px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#fff', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '6px', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── COMPANY STORY ── */}
      <section aria-labelledby="story-heading" style={{ padding: '100px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="two-col">
          <AnimatedSection>
            <span className="em-line" style={{ marginBottom: '20px', display: 'block' }} />
            <p className="section-label" style={{ marginBottom: '14px' }}>Our Story</p>
            <h2 id="story-heading" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '28px', lineHeight: 1.2 }}>
              Headquartered in India&apos;s Export Belt
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--color-text-paragraph)', fontSize: '15px', lineHeight: 1.9 }}>
              <p>Maheshwari Global Exports (MGE) is headquartered in <strong style={{ color: 'var(--color-text-heading-alt)' }}>Rajkot, Gujarat</strong> — one of India&apos;s strongest manufacturing and agricultural regions.</p>
              <p>Founded in 2026 by <strong style={{ color: 'var(--color-text-heading-alt)' }}>Maharshi Siroya</strong> and <strong style={{ color: 'var(--color-text-heading-alt)' }}>Meet Aghara</strong>, combining operational manufacturing experience with analytical quality discipline.</p>
              <p>Our approach eliminates the uncertainty that plagues international trade by building structured, process-driven export systems that deliver consistent results.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '32px' }}>
              {[{ label: 'Founded', value: '2026' }, { label: 'Headquarters', value: 'Rajkot, Gujarat' }, { label: 'Specialization', value: 'Agricultural Exports' }, { label: 'Coverage', value: 'Global Markets' }].map(item => (
                <div key={item.label} style={{ padding: '16px', background: 'var(--color-bg-light)', borderRadius: '8px', borderLeft: '3px solid var(--color-bg-dark)' }}>
                  <div style={{ fontSize: '10px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px', fontWeight: 700 }}>{item.label}</div>
                  <div style={{ color: 'var(--color-text-heading-alt)', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ position: 'relative' }}>
              {/* Real image instead of placeholder */}
              <div style={{ aspectRatio: '4/5', borderRadius: '12px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80&auto=format&fit=crop"
                  alt="Indian agricultural fields and farming representing Gujarat export sourcing"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>EST. 2026</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Rajkot, Gujarat — India&apos;s Export Hub</div>
                </div>
              </div>

              {/* Gujarat Advantage floating card */}
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--color-bg-dark)', borderRadius: '10px', padding: '22px 24px', boxShadow: '0 12px 40px rgba(0,0,0,0.25)', maxWidth: '260px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '14px', fontSize: '13px', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gujarat Advantage</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {["#1 export state", "Major agri hub", "Port infrastructure", "Supplier network"].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.8)', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── JOURNEY / TIMELINE ── */}
      <section style={{ padding: '100px 2rem', background: 'var(--color-bg-dark)', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', top: '-100px', left: '-60px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '12px' }}>Our Journey</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>Building From the Ground Up</h2>
            </div>
          </AnimatedSection>

          {milestones.map((m, i) => (
            <AnimatedSection key={m.title} delay={i * 100}>
              <div style={{ display: 'flex', gap: '24px', marginBottom: i < milestones.length - 1 ? '0' : '0', position: 'relative' }}>
                {/* Timeline line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '48px' }}>
                  <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '11px', color: '#fff', flexShrink: 0 }}>{m.year}</div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: 'linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.03))', minHeight: '40px' }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '24px 28px', flex: 1, marginBottom: '14px', transition: 'all 0.3s ease' }}>
                  <h3 style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '16px', margin: '0 0 8px' }}>{m.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{m.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CORE PRINCIPLES ── */}
      <section aria-labelledby="principles-heading" style={{ padding: '100px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p className="section-label" style={{ marginBottom: '12px' }}>Our Foundation</p>
              <h2 id="principles-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Core Principles</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>Three pillars that define how we operate — no exceptions, no shortcuts.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }} className="three-col">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="hover-card" style={{ padding: '36px 28px', background: 'var(--color-bg-dark)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', marginBottom: '20px', fontSize: '26px', margin: '0 auto 20px', border: '1px solid rgba(255,255,255,0.1)' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '17px', marginBottom: '12px', marginTop: 0 }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── VISION & AIM — Full bleed image ── */}
      <section aria-labelledby="vision-heading" style={{ padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1400&q=80&auto=format&fit=crop" alt="Indian agricultural fields at sunrise representing vision and growth" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 1 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="two-col">
          <AnimatedSection>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '5px 16px', marginBottom: '24px', color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}>
                🔭 Vision
              </div>
              <h2 id="vision-heading" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', lineHeight: 1.3 }}>Our Vision</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.9, margin: 0 }}>
                To become a globally recognized <strong style={{ color: '#fff' }}>agricultural export company from India</strong> known for reliability, quality assurance, and sustainable sourcing practices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: '40px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', padding: '5px 16px', marginBottom: '24px', color: 'rgba(255,255,255,0.7)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}>
                🎯 Aim
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', lineHeight: 1.3 }}>Our Aim</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {aims.map(aim => (
                  <li key={aim} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ width: '22px', height: '22px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '10px', color: '#fff', fontWeight: 700 }}>✓</div>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', lineHeight: 1.7 }}>{aim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 2rem', background: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border-section)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <span className="em-line" style={{ margin: '0 auto 20px', display: 'block' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>Partner With a Trade House Built for Reliability</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '32px', lineHeight: 1.8, fontSize: '16px' }}>Get in touch to discuss your sourcing requirements from India.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-dark" style={{ padding: '15px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Contact Us Today</Link>
              <Link href="/products" className="btn-outline-em" style={{ padding: '15px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>View Products</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
