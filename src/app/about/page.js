import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import imgHand from '../../../public/assets/hand.avif';
import imgShipment from '../../../public/assets/shipment.avif';
import imgReal from '../../../public/assets/real.jpeg';
import imgMeet from '../../../public/assets/meet.jpeg';
import imgMaharshi from '../../../public/assets/Maharshi.png';

export const metadata = buildMetadata({
  title: 'About Us | Indian Merchant Export Company | Gujarat Export House',
  description: 'Maheshwari Global Exports is a Gujarat-based merchant export house founded in 2026 by Meet Aghara and Maharshi Siroya. Learn about our structured export approach, core principles, and vision for reliable Indian agricultural trade.',
  keywords: ['indian merchant export company', 'gujarat export house', 'structured export company india', 'reliable merchant exporter', 'agricultural export company rajkot', 'merchant export house gujarat'],
  path: '/about',
});

const principles = [
  { icon: '🛡️', number: '01', title: 'Supplier Verification', desc: 'Rigorous evaluation of every supplier — production capacity, quality standards, compliance record, and scalability before onboarding.' },
  { icon: '📦', number: '02', title: 'Shipment Consistency', desc: 'What you approve in the sample is exactly what you receive in every shipment. No deviation — this is our operating standard.' },
  { icon: '🤝', number: '03', title: 'Long-Term Relationships', desc: 'We prioritize building reliable partnerships with global buyers — based on trust, transparency, and delivery discipline.' },
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

      {/* ── HERO HEADER — Dark cinematic (unchanged) ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        <Image
          src={imgHand}
          alt="Container ship loading representing international trade and export logistics"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%', opacity: 0.6 }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.8) 0%, rgba(19,19,42,0.65) 50%, rgba(10,10,10,0.75) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              New Generation Export House · Rajkot, Gujarat
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '750px', lineHeight: 1.1 }}>
              About Maheshwari<br />Global Exports
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.9 }}>
              Built on operational discipline and analytical quality management — delivering structured international trade from Gujarat, India.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '48px' }}>
              {[{ value: 'Gujarat', label: 'Headquartered' }, { value: '2026', label: 'Founded' }, { value: '20+', label: 'Target Markets' }, { value: '50+', label: 'Products' }].map(s => (
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
      <section aria-labelledby="story-heading" style={{ padding: '100px 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="two-col">
          <AnimatedSection>
            <span className="em-line" style={{ marginBottom: '20px', display: 'block' }} />
            <p className="section-label" style={{ marginBottom: '14px' }}>Our Story</p>
            <h2 id="story-heading" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '28px', lineHeight: 1.2 }}>
              Headquartered in India&apos;s Export Belt
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#4b5563', fontSize: '15px', lineHeight: 1.9 }}>
              <p>Maheshwari Global Exports (MGE) is headquartered in <strong style={{ color: '#0a0a0a' }}>Rajkot, Gujarat</strong> — one of India&apos;s strongest manufacturing and agricultural regions.</p>
              <p>Founded in 2026 by <strong style={{ color: '#0a0a0a' }}>Maharshi Siroya</strong> and <strong style={{ color: '#0a0a0a' }}>Meet Aghara</strong>, combining operational manufacturing experience with analytical quality discipline.</p>
              <p>Our approach eliminates the uncertainty that plagues international trade by building structured, process-driven export systems that deliver consistent results.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '32px' }}>
              {[{ label: 'Founded', value: '2026' }, { label: 'Headquarters', value: 'Rajkot, Gujarat' }, { label: 'Specialization', value: 'Agricultural Exports' }, { label: 'Coverage', value: 'Global Markets' }].map(item => (
                <div key={item.label} style={{ padding: '16px', background: '#eff6ff', borderRadius: '8px', borderLeft: '3px solid #0073e6', border: '1px solid #bfdbfe', borderLeftWidth: '3px' }}>
                  <div style={{ fontSize: '10px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px', fontWeight: 700 }}>{item.label}</div>
                  <div style={{ color: '#0a0a0a', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '14px' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/5', borderRadius: '14px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                <Image src={imgReal} alt="Workers processing export-quality green bananas" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '6px' }}>New Generation Export House</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Rajkot, Gujarat — India&apos;s Export Hub</div>
                </div>
              </div>
              {/* Gujarat Advantage floating card — white style */}
              <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: '#ffffff', borderRadius: '14px', padding: '22px 24px', boxShadow: '0 12px 40px rgba(0,115,230,0.14)', maxWidth: '260px', border: '1px solid #e8eaed', borderTop: '3px solid #0073e6' }}>
                <h3 style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '14px', fontSize: '13px', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Gujarat Advantage</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {["#1 export state", "Major agri hub", "Port infrastructure", "Supplier network"].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563', fontSize: '12px' }}>
                      <span style={{ color: '#0073e6', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>

      {/* ── FOUNDING TEAM ── */}
      <section aria-labelledby="founders-heading" style={{ padding: '100px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>The Leadership</p>
              <h2 id="founders-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Meet Our Founders</h2>
              <p style={{ color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>Two founders. One mission. Zero compromise on quality.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="two-col">
            <AnimatedSection>
              <div className="team-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease', boxSizing: 'border-box' }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                  <div style={{ position: 'relative', width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #eff6ff', marginBottom: '24px', boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}>
                    <Image src={imgMaharshi} alt="Maharshi Siroya" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '22px', margin: '0 0 8px' }}>Maharshi Siroya</h3>
                  <p style={{ color: '#0073e6', fontSize: '13px', fontWeight: 700, margin: '0 0 20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Co-Founder & Operations Head</p>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', flex: 1 }}>Maharshi Siroya is the Co-Founder and Operations Head of Maheshwari Global Exports. With hands-on experience in manufacturing operations and production management, he specializes in strategic sourcing, supplier coordination, and quality verification. His focus is on building strong manufacturer partnerships and ensuring reliable export execution for global clients.</p>
                  <a href="https://linkedin.com/in/maharshi-siroya-mge" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#f4f5f7', color: '#0073e6', fontWeight: 600, fontSize: '13px', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid #e8eaed' }} className="linkedin-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="team-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'all 0.3s ease', boxSizing: 'border-box' }}>
                <div style={{ height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', flex: 1 }}>
                  <div style={{ position: 'relative', width: '160px', height: '160px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #eff6ff', marginBottom: '24px', boxShadow: '0 12px 24px rgba(0,0,0,0.06)' }}>
                    <Image src={imgMeet} alt="Meet Aghara" fill style={{ objectFit: 'cover', transform: 'scale(1.08)' }} />
                  </div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '22px', margin: '0 0 8px' }}>Meet Aghara</h3>
                  <p style={{ color: '#0073e6', fontSize: '13px', fontWeight: 700, margin: '0 0 20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Co-Founder & Managing Partner</p>
                  <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', flex: 1 }}>Meet Aghara is the Co-Founder and Managing Partner of Maheshwari Global Exports. With a background in Organic Chemistry and hands-on experience working with manufacturing industries, he focuses on identifying reliable suppliers, maintaining strict quality standards, and building trusted global trade relationships.</p>
                  <a href="https://linkedin.com/in/meet-patel-shreelabhenterprise" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#f4f5f7', color: '#0073e6', fontWeight: 600, fontSize: '13px', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s', border: '1px solid #e8eaed' }} className="linkedin-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <style>{`
            .team-card:hover { box-shadow: 0 16px 40px rgba(0,115,230,0.12) !important; transform: translateY(-4px); border-color: #bfdbfe !important; }
            .team-card a.linkedin-btn:hover { background: #0073e6 !important; color: #fff !important; border-color: #0073e6 !important; }
            @media(max-width:768px){.two-col{grid-template-columns:1fr!important}}
          `}</style>
        </div>
      </section>

      {/* ── CORE PRINCIPLES — white why-choose-us style cards ── */}
      <section aria-labelledby="principles-heading" style={{ padding: '100px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '12px' }}>Our Foundation</p>
              <h2 id="principles-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Core Principles</h2>
              <p style={{ color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>Three pillars that define how we operate — no exceptions, no shortcuts.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="three-col">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <div className="feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '32px 28px', height: '100%', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  <div style={{ position: 'absolute', top: '16px', right: '20px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '48px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>{p.number}</div>
                  <div style={{ width: '52px', height: '52px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '20px' }}>{p.icon}</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0a0a0a', fontSize: '15px', marginBottom: '10px', marginTop: 0, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.85, margin: 0 }}>{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`
          .feature-card:hover { box-shadow: 0 12px 36px rgba(0,115,230,0.10); transform: translateY(-4px); border-color: #bfdbfe !important; }
          @media(max-width:768px){.three-col{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* ── VISION & AIM — Premium Split Layout ── */}
      <section aria-labelledby="vision-heading" style={{ padding: '100px 2rem', background: '#ffffff', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>

          {/* Content Side */}
          <div style={{ flex: '1 1 500px', order: 2 }}>
            <AnimatedSection>
              <div style={{ marginBottom: '48px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>🔭 Vision</div>
                <h2 id="vision-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '16px', lineHeight: 1.2 }}>Our Vision</h2>
                <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: 1.9, margin: 0 }}>To become a globally recognized <strong style={{ color: '#0073e6' }}>agricultural export company from India</strong> known for reliability, quality assurance, and sustainable sourcing practices.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div style={{ background: '#f8fafc', borderRadius: '24px', padding: '48px 40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, #0073e6, #3395f0)' }} />
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>🎯 Aim</div>
                <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', lineHeight: 1.2 }}>What We Aim For</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {aims.map(aim => (
                    <li key={aim} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '24px', height: '24px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '12px', color: '#0073e6', fontWeight: 800 }}>✓</div>
                      <span style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.6 }}>{aim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Image Side */}
          <div style={{ flex: '1 1 500px', order: 1 }}>
            <AnimatedSection delay={100}>
              <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '640px', boxShadow: '0 24px 60px rgba(0,0,0,0.1)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img src="/assets/WhatsApp%20Image%202026-03-14%20at%2012.13.38%20PM%20(2).jpeg" alt="Quality Control: Vibrant red fruit stacked for export" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }} />      */}
                <Image src={imgShipment} alt="Global Trade and Agricultural Export Logistics" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }} />

                {/* Floating tags */}
                <div style={{ position: 'absolute', bottom: '32px', left: '32px', right: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
                    🌿 Sustainable Sourcing
                  </div>
                  <div style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
                    🏅 Quality Assured
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 2rem', background: '#ffffff', borderTop: '1px solid #e8eaed' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>Partner With a Trade House Built for Reliability</h2>
            <p style={{ color: '#6b7280', marginBottom: '32px', lineHeight: 1.8, fontSize: '16px' }}>Get in touch to discuss your sourcing requirements from India.</p>
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
