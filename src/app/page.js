import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import imgRice from '../../public/assets/basmati-rice.jpg';
import imgSpices from '../../public/assets/spices.jpg';
import imgPulses from '../../public/assets/pulses.avif';
import imgFruits from '../../public/assets/fruits.avif';

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
  { value: '5+', label: 'Years Experience' },
];

const products = [
  {
    name: 'Rice',
    desc: 'Basmati & Non-Basmati',
    tag: 'Top Export',
    img: imgRice,
    imgAlt: 'Premium long-grain basmati rice grains in a wooden bowl for export',
    path: '/products',
  },
  {
    name: 'Indian Spices',
    desc: 'Turmeric, Cumin, Chili & More',
    tag: 'Premium',
    img: imgSpices,
    imgAlt: 'Colorful Indian spices — red chili, turmeric, coriander, star anise for export',
    path: '/products',
  },
  {
    name: 'Pulses & Lentils',
    desc: 'Cleaned, Graded & Packed',
    tag: 'High Demand',
    img: imgPulses,
    imgAlt: 'Raw brown lentils and pulses in bulk for export',
    path: '/products',
  },
  {
    name: 'Fresh Produce',
    desc: 'Fruits & Vegetables',
    tag: 'Seasonal',
    img: imgFruits,
    imgAlt: 'Fresh Indian fruits and vegetables for export',
    path: '/products',
  },
];

const whyUs = [
  { icon: '🛡️', title: 'Verified Suppliers', desc: 'Every supplier evaluated for quality, compliance, and delivery reliability.' },
  { icon: '📦', title: 'Sample = Shipment', desc: 'Approved sample matches every delivered shipment. No exceptions.' },
  { icon: '📋', title: 'Full Documentation', desc: 'Phytosanitary, FSSAI, export docs — complete compliance for every destination.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Serving GCC, Middle East, Africa, and Southeast Asia with structured exports.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Streamlined sourcing and logistics for responsive, on-time delivery.' },
  { icon: '🤝', title: 'Long-term Partnerships', desc: 'Built on trust, transparency and a disciplined trade execution model.' },
];

const markets = [
  { region: 'GCC', countries: 'UAE · Saudi Arabia · Qatar · Kuwait', color: '#0073e6' },
  { region: 'Middle East', countries: 'Oman · Bahrain · Jordan · Iraq', color: '#0052b3' },
  { region: 'Africa', countries: 'Egypt · Kenya · Tanzania · Nigeria', color: '#0073e6' },
  { region: 'SE Asia', countries: 'Malaysia · Singapore · Indonesia', color: '#0052b3' },
];

export default function Home() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section aria-label="Hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85&auto=format&fit=crop"
          alt="Golden wheat fields — premium Indian agricultural exports"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.45 }}
          loading="eager"
        />
        {/* Left-heavy gradient so text on left is readable, right is more image */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.80) 40%, rgba(5,5,5,0.45) 70%, rgba(5,5,5,0.2) 100%)' }} />
        {/* Blue glow top-right */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,115,230,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '130px 2rem 100px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'center' }} className="hero-grid">

            {/* LEFT — text */}
            <div>
              <AnimatedSection>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,115,230,0.15)', border: '1px solid rgba(0,115,230,0.35)', borderRadius: '999px', padding: '5px 16px 5px 10px', marginBottom: '32px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#3395f0', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ color: '#3395f0', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Gujarat-Based Merchant Export House · Est. 2026</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={80}>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.08, fontFamily: 'Poppins, sans-serif', margin: '0 0 6px' }}>
                  Structured Sourcing.
                </h1>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.08, fontFamily: 'Poppins, sans-serif', margin: '0 0 6px', background: 'linear-gradient(90deg, #3395f0, #0073e6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Verified Quality.
                </h1>
                <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: 'rgba(255,255,255,0.28)', lineHeight: 1.08, fontFamily: 'Poppins, sans-serif', margin: '0 0 32px' }}>
                  Disciplined Delivery.
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={160}>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '17px', lineHeight: 1.85, marginBottom: '40px', maxWidth: '520px' }}>
                  Premium Indian agricultural exports — rice, spices, pulses, and fresh produce — with structured global delivery to GCC, Africa, and Southeast Asia.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={240}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '15px 36px', textDecoration: 'none', display: 'inline-block', fontSize: '12px' }}>
                    Request Quotation
                  </Link>
                  <Link href="/products" className="btn-outline-white" style={{ padding: '15px 36px', textDecoration: 'none', display: 'inline-block', fontSize: '12px' }}>
                    View Products
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={320}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '22px' }}>
                  {['APEDA Registered', 'FSSAI Compliant', 'Pre-Shipment Verified'].map(tag => (
                    <div key={tag} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                      <span style={{ width: '16px', height: '16px', background: 'rgba(0,115,230,0.2)', border: '1px solid rgba(51,149,240,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '9px', color: '#3395f0' }}>✓</span>
                      <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', fontWeight: 500 }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT — stats block */}
            <AnimatedSection delay={200}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', borderRadius: '10px', padding: '24px 16px', textAlign: 'center', borderTop: `2px solid ${i % 2 === 0 ? 'rgba(0,115,230,0.6)' : 'rgba(51,149,240,0.35)'}` }}>
                    <div style={{ fontSize: '2rem', fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#ffffff', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ color: 'rgba(255,255,255,0.42)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '7px', fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
                <div style={{ gridColumn: 'span 2', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', borderRadius: '10px', padding: '18px 20px', borderTop: '2px solid rgba(0,115,230,0.4)' }}>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.32)', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '10px', fontWeight: 600 }}>Markets Served</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {['GCC', 'Middle East', 'Africa', 'SE Asia', 'Europe'].map(m => (
                      <span key={m} style={{ background: 'rgba(0,115,230,0.18)', border: '1px solid rgba(51,149,240,0.35)', color: '#66b2f5', fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '4px' }}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
        <style>{`@media(max-width:900px){.hero-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── BLUE STRIP ────────────────────────────────────────────── */}
      <div style={{ background: 'linear-gradient(90deg, #0052b3, #0073e6, #3395f0, #0073e6, #0052b3)', padding: '11px 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {['Rice · Spices · Pulses · Fresh Produce', 'Gujarat, India → 20+ Global Markets', 'APEDA Registered · FSSAI Compliant'].map(t => (
            <span key={t} style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ────────────────────────────────────────────── */}
      <section style={{ padding: '96px 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="two-col">
          <AnimatedSection>
            <div style={{ display: 'inline-block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#0073e6,#3395f0)', borderRadius: '2px', marginBottom: '20px' }} />
            <p style={{ color: '#0073e6', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '14px', fontFamily: 'Inter, sans-serif' }}>Who We Are</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 800, color: '#0a0a0a', lineHeight: 1.2, fontFamily: 'Poppins, sans-serif', marginBottom: '24px' }}>
              Built for Predictable,<br />Reliable Global Trade
            </h2>
            <p style={{ color: '#5a6272', fontSize: '15px', lineHeight: 1.9, marginBottom: '16px' }}>
              In international sourcing, inconsistency is the biggest risk. Approved samples often fail to match final shipments.
            </p>
            <p style={{ color: '#5a6272', fontSize: '15px', lineHeight: 1.9, marginBottom: '24px' }}>
              Maheshwari Global Exports was built to eliminate that gap — through disciplined <strong style={{ color: '#0a0a0a' }}>supplier verification</strong>, structured pre-shipment checks, and execution-focused logistics.
            </p>
            <div style={{ background: '#eff6ff', borderLeft: '4px solid #0073e6', padding: '16px 20px', borderRadius: '0 6px 6px 0', marginBottom: '32px' }}>
              <p style={{ color: '#0052b3', fontWeight: 700, fontSize: '15px', margin: '0 0 4px', fontFamily: 'Poppins, sans-serif' }}>We do not trade opportunistically.</p>
              <p style={{ color: '#0062cc', fontWeight: 600, fontSize: '14px', margin: 0 }}>We build repeatable supply systems.</p>
            </div>
            <Link href="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0073e6', fontWeight: 700, textDecoration: 'none', fontSize: '13px', borderBottom: '2px solid #3395f0', paddingBottom: '2px' }}>
              Learn About Our Company →
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop" alt="Export operations and logistics in Rajkot Gujarat India" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', background: 'rgba(255,255,255,0.97)', borderRadius: '8px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
                  <div style={{ color: '#0073e6', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Base of Operations</div>
                  <div style={{ color: '#0a0a0a', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>Rajkot, Gujarat — India&apos;s Export Belt</div>
                </div>
              </div>
              {/* Floating badge */}
              <div style={{ position: 'absolute', top: '-16px', right: '-16px', background: 'linear-gradient(135deg,#0073e6,#3395f0)', padding: '18px 22px', borderRadius: '10px', boxShadow: '0 8px 28px rgba(0,115,230,0.45)', textAlign: 'center' }}>
                <div style={{ fontSize: '26px', fontWeight: 900, fontFamily: 'Poppins, sans-serif', color: '#fff', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '4px', fontWeight: 700 }}>Quality<br/>Verified</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────── */}
      <section style={{ padding: '88px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <div>
                <div style={{ display: 'inline-block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#0073e6,#3395f0)', borderRadius: '2px', marginBottom: '16px' }} />
                <p style={{ color: '#0073e6', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '10px', fontFamily: 'Inter, sans-serif' }}>What We Export</p>
                <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', margin: 0 }}>
                  Premium Indian Agricultural Products
                </h2>
              </div>
              <Link href="/products" style={{ color: '#0073e6', fontWeight: 700, fontSize: '13px', textDecoration: 'none', borderBottom: '2px solid #3395f0', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
                Full Portfolio →
              </Link>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }} className="four-col">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 80}>
                <Link href="/products" style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.25s ease', position: 'relative' }} className="product-card">
                    {/* Product image */}
                    <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.img.src} alt={p.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} loading="lazy" className="product-card-img" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)' }} />
                      <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.95)', color: '#0073e6', fontSize: '9px', fontWeight: 700, padding: '3px 9px', borderRadius: '999px', letterSpacing: '0.06em', textTransform: 'uppercase', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>{p.tag}</div>
                    </div>
                    {/* Card text */}
                    <div style={{ padding: '18px 20px 20px' }}>
                      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0a0a0a', fontSize: '15px', marginBottom: '4px', marginTop: 0 }}>{p.name}</h3>
                      <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 14px', lineHeight: 1.5 }}>{p.desc}</p>
                      <span style={{ fontSize: '11px', color: '#0073e6', fontWeight: 700, letterSpacing: '0.06em', borderBottom: '1px solid #bfdbfe', paddingBottom: '1px' }}>VIEW DETAILS →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`
          .product-card:hover { box-shadow: 0 12px 40px rgba(0,115,230,0.12); transform: translateY(-4px); border-color: #0073e6 !important; }
          .product-card:hover .product-card-img { transform: scale(1.05); }
          @media(max-width:900px){.four-col{grid-template-columns:repeat(2,1fr)!important}}
          @media(max-width:480px){.four-col{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section style={{ padding: '88px 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ display: 'inline-block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#0073e6,#3395f0)', borderRadius: '2px', marginBottom: '16px' }} />
              <p style={{ color: '#0073e6', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '12px', fontFamily: 'Inter, sans-serif' }}>Why Buyers Choose Us</p>
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
                Operational Discipline at Every Step
              </h2>
              <p style={{ color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8, fontSize: '15px' }}>
                Every decision we make is built around one goal — consistency you can rely on.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="three-col">
            {whyUs.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 70}>
                <div style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '10px', padding: '28px', borderTop: '3px solid #0073e6', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', transition: 'all 0.25s ease' }} className="hover-card">
                  <div style={{ width: '44px', height: '44px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', marginBottom: '16px', fontSize: '20px' }}>{w.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0a0a0a', fontSize: '15px', marginBottom: '8px', marginTop: 0 }}>{w.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/why-choose-us" className="btn-outline-em" style={{ padding: '13px 32px', textDecoration: 'none', display: 'inline-block' }}>
                See Full Comparison
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:768px){.three-col{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── MARKETS ───────────────────────────────────────────────── */}
      <section style={{ padding: '88px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="two-col-b">
          <AnimatedSection>
            <div style={{ display: 'inline-block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#0073e6,#3395f0)', borderRadius: '2px', marginBottom: '20px' }} />
            <p style={{ color: '#0073e6', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '14px', fontFamily: 'Inter, sans-serif' }}>Markets We Serve</p>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '20px' }}>
              Exporting to 20+<br />Countries Worldwide
            </h2>
            <p style={{ color: '#5a6272', fontSize: '15px', lineHeight: 1.85, marginBottom: '32px' }}>
              From Gujarat&apos;s farms to dinner tables across four continents — structured, reliable, and fully documented.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {markets.map((m) => (
                <div key={m.region} style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '8px', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '36px', height: '36px', background: '#eff6ff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: m.color, fontWeight: 800, fontSize: '11px', fontFamily: 'Poppins' }}>{m.region.slice(0, 2)}</span>
                  </div>
                  <div>
                    <div style={{ color: '#0a0a0a', fontWeight: 700, fontSize: '13px', fontFamily: 'Poppins, sans-serif', marginBottom: '2px' }}>{m.region}</div>
                    <div style={{ color: '#9ca3af', fontSize: '11px' }}>{m.countries}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/markets" className="btn-primary" style={{ padding: '13px 28px', textDecoration: 'none', display: 'inline-block' }}>
              View All Markets
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=900&q=80&auto=format&fit=crop"
                alt="Global trade routes map representing worldwide export markets"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['GCC', 'Middle East', 'Africa', 'SE Asia', 'Europe'].map(m => (
                  <span key={m} style={{ background: 'rgba(0,115,230,0.85)', color: '#ffffff', fontSize: '11px', fontWeight: 700, padding: '5px 12px', borderRadius: '4px', backdropFilter: 'blur(4px)' }}>{m}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col-b{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=70&auto=format&fit=crop" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', opacity: 0.35 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,82,179,0.6) 0%,rgba(5,5,5,0.85) 60%)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '88px 2rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }} className="cta-grid">
          <AnimatedSection>
            <div style={{ display: 'inline-block', width: '40px', height: '3px', background: 'linear-gradient(90deg,#3395f0,rgba(255,255,255,0.4))', borderRadius: '2px', marginBottom: '18px' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'Poppins, sans-serif', marginBottom: '14px', lineHeight: 1.2 }}>
              Ready to Source Premium<br />Indian Agricultural Products?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '16px', lineHeight: 1.8, maxWidth: '540px' }}>
              Connect with Gujarat&apos;s reliable merchant export house for structured, quality-verified sourcing.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
              <Link href="/process" className="btn-outline-white" style={{ padding: '14px 40px', textDecoration: 'none', display: 'inline-block', fontSize: '12px', whiteSpace: 'nowrap' }}>
                Our Export Process
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:768px){.cta-grid{grid-template-columns:1fr!important}.cta-grid>*:last-child{align-items:flex-start!important}}`}</style>
      </section>
    </>
  );
}
