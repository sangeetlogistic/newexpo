import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Maheshwari Global Exports | Agricultural Exporter from India | Rice & Spice Export Company',
  description:
    'Maheshwari Global Exports is a Gujarat-based merchant export house specializing in rice, spices, pulses, and fresh produce exports. Structured sourcing, verified quality, and disciplined global delivery to GCC, Middle East, Africa, and Southeast Asia.',
  keywords: [
    'agricultural exporter from india','rice exporter india','spice exporter india',
    'merchant exporter india','gujarat export company','b2b agricultural exporter',
    'reliable rice exporter from india','basmati rice exporter india','indian spice exporter',
    'pulses exporter india','agro products exporter','food grain exporter india',
    'consistent agro exporter india','merchant export house gujarat',
  ],
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
      <section aria-label="Hero section" className="bg-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        {/* Glow orbs */}
        <div className="glow-green" style={{ position: 'absolute', top: '10%', right: '5%', width: '500px', height: '500px' }} />
        <div className="glow-gold" style={{ position: 'absolute', bottom: '15%', left: '0%', width: '400px', height: '400px' }} />
        <div className="glow-mint" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', opacity: 0.3 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px', margin: '0 auto', padding: '140px 2rem 80px', textAlign: 'center' }}>
          <AnimatedSection>
            <div className="glass-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '6px 18px', marginBottom: '32px' }}>
              <span style={{ width: '7px', height: '7px', background: '#74c69d', borderRadius: '50%', display: 'inline-block', animation: 'glow-pulse 2s infinite' }} />
              <span style={{ color: '#74c69d', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Gujarat-Based Merchant Export House
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, margin: '0 auto 28px', fontFamily: 'Poppins, sans-serif', maxWidth: '960px' }}>
              Structured Sourcing.{' '}
              <span className="text-gradient-gold">Verified Quality.</span>
              <br />
              <span className="text-gradient-green">Disciplined Global Delivery.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.9 }}>
              Maheshwari Global Exports is a Gujarat-based{' '}
              <strong style={{ color: '#95d5b2' }}>agricultural exporter from India</strong>{' '}
              specializing in structured sourcing and quality-verified international trade — rice, spices, pulses, and fresh produce.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '16px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>
                Request Quotation
              </Link>
              <Link href="/contact" className="btn-outline-white" style={{ padding: '16px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>
                Contact Us
              </Link>
            </div>
          </AnimatedSection>

          {/* Stats — glass cards */}
          <AnimatedSection delay={400}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', maxWidth: '720px', margin: '0 auto' }} className="stats-grid">
              {stats.map(s => (
                <div key={s.label} className="glass-card-dark" style={{ borderRadius: '10px', padding: '20px 12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', lineHeight: 1, background: 'linear-gradient(135deg,#f0c040,#d4a017)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</div>
                  <div style={{ color: 'rgba(149,213,178,0.7)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '6px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
          <span style={{ color: '#74c69d', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, #74c69d, transparent)' }} />
        </div>

        <style>{`
          @keyframes glow-pulse{0%,100%{opacity:1;box-shadow:0 0 6px #74c69d}50%{opacity:0.5;box-shadow:0 0 12px #74c69d}}
          @media(max-width:600px){.stats-grid{grid-template-columns:repeat(2,1fr)!important}}
        `}</style>
      </section>

      {/* ── INTRODUCTION ── */}
      <section id="introduction" aria-labelledby="intro-heading" style={{ padding: '96px 2rem', background: '#fff', position: 'relative', overflow: 'hidden' }}>
        {/* green tint strip */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(to bottom, #2d6a4f, #74c69d, #2d6a4f)' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="two-col">
          <AnimatedSection>
            <p className="section-label" style={{ marginBottom: '16px' }}>Our Foundation</p>
            <h2 id="intro-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#0d2b1a', lineHeight: 1.2, marginBottom: '32px', fontFamily: 'Poppins, sans-serif' }}>
              Built for{' '}
              <span style={{ color: '#2d6a4f' }}>Predictable Trade</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: '#374151', fontSize: '16px', lineHeight: 1.9 }}>
              <p>In international sourcing, inconsistency is the biggest risk. Approved samples often fail to match final shipments.</p>
              <p>Maheshwari Global Exports was built to eliminate that gap — through disciplined <strong style={{ color: '#1a4731' }}>supplier verification</strong>, structured pre-shipment checks, and execution-focused logistics management.</p>
              <div style={{ borderLeft: '4px solid #40916c', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '10px', background: 'rgba(208,243,220,0.35)', borderRadius: '0 6px 6px 0' }}>
                <p style={{ color: '#0d2b1a', fontWeight: 700, fontSize: '17px', margin: '0 0 4px' }}>We do not trade opportunistically.</p>
                <p style={{ color: '#1a4731', fontWeight: 700, fontSize: '17px', margin: 0 }}>We build repeatable supply systems.</p>
              </div>
            </div>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#2d6a4f', fontWeight: 700, marginTop: '36px', textDecoration: 'none', fontSize: '15px' }}>
              Learn About Our Company <span style={{ fontSize: '18px' }}>→</span>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ position: 'relative' }}>
              {/* Image placeholder with glass overlay */}
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #d8f3dc 0%, #b7e4c7 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(116,198,157,0.4)' }}>
                <div style={{ textAlign: 'center', color: '#2d6a4f' }}>
                  <div style={{ fontSize: '56px', marginBottom: '12px', opacity: 0.5 }}>🌿</div>
                  <p style={{ fontSize: '13px', opacity: 0.6, fontWeight: 500 }}>Export Operations · Rajkot, Gujarat</p>
                </div>
                {/* Glass overlay bar */}
                <div className="glass-card" style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', borderRadius: '8px', padding: '12px 16px' }}>
                  <div style={{ color: '#d4a017', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>Established 2026</div>
                  <div style={{ color: '#0d2b1a', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>Rajkot, Gujarat — India&apos;s Export Hub</div>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="glass-card-dark" style={{ position: 'absolute', top: '-20px', right: '-20px', padding: '18px 22px', borderRadius: '10px', background: 'linear-gradient(135deg, #0d2b1a, #1a4731)' }}>
                <div style={{ fontSize: '26px', fontWeight: 900, fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg,#f0c040,#d4a017)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>100%</div>
                <div style={{ fontSize: '10px', color: '#74c69d', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>Quality Verified</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── FEATURES ── */}
      <section aria-label="Key capabilities" className="bg-section-light" style={{ padding: '72px 2rem', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '28px' }} className="three-col">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 100}>
              <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '28px', borderRadius: '10px' }}>
                <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg,#2d6a4f,#40916c)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', flexShrink: 0, fontSize: '22px', boxShadow: '0 4px 16px rgba(45,106,79,0.35)' }}>
                  {f.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0d2b1a', fontSize: '16px', marginBottom: '8px', marginTop: 0 }}>{f.title}</h3>
                  <p style={{ color: '#4b7355', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── PRODUCTS OVERVIEW ── */}
      <section aria-labelledby="products-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>What We Export</p>
              <h2 id="products-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>
                Premium Indian Agricultural Products
              </h2>
              <p style={{ color: '#4b7355', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
                From basmati rice to Indian spices — every product sourced, verified, and shipped with disciplined quality control.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="four-col">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 80}>
                <Link href={p.path} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="hover-card glass-panel" style={{ borderRadius: '12px', padding: '32px 20px', textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ fontSize: '44px', marginBottom: '16px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>{p.icon}</div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0d2b1a', fontSize: '15px', marginBottom: '6px', marginTop: 0 }}>{p.name}</h3>
                    <p style={{ color: '#4b7355', fontSize: '12px', margin: 0 }}>{p.desc}</p>
                    <div style={{ marginTop: '14px', fontSize: '11px', color: '#40916c', fontWeight: 600 }}>View Details →</div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/products" className="btn-outline-green" style={{ padding: '14px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>
              View All Products
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){.four-col{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.four-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── CTA ── */}
      <section aria-label="Call to action" className="bg-section-dark" style={{ padding: '88px 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: '-100px', right: '-50px', width: '400px', height: '400px' }} />
        <div className="glow-gold" style={{ position: 'absolute', bottom: '-80px', left: '-50px', width: '300px', height: '300px' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>Start Sourcing</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', lineHeight: 1.3 }}>
              Ready to Source Premium<br />Indian Agricultural Products?
            </h2>
            <p style={{ color: 'rgba(149,213,178,0.8)', fontSize: '16px', marginBottom: '40px', lineHeight: 1.8 }}>
              Connect with India&apos;s reliable merchant export house for structured, quality-verified sourcing from Gujarat.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link href="/contact" className="btn-gold" style={{ padding: '16px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>
                Request Quotation
              </Link>
              <Link href="/products" className="btn-outline-white" style={{ padding: '16px 40px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
