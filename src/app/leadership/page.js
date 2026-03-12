import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Leadership | Founders of Maheshwari Global Exports | Indian Export Company',
  description: 'Meet the founders of Maheshwari Global Exports — Maharshi Siroya and Meet Aghara, combining operational manufacturing experience with analytical quality discipline.',
  keywords: ['founders maheshwari global exports', 'meet aghara exporter', 'maharshi siroya exporter', 'gujarat export house founders', 'indian agricultural exporter leadership'],
  path: '/leadership',
});

const leaders = [
  {
    name: 'Maharshi Siroya', title: 'Co-Founder & Operations Director', focus: 'Operations & Supplier Relations', number: '01',
    bio: 'Maharshi brings deep operational manufacturing experience to Maheshwari Global Exports. His hands-on approach to supplier evaluation and shipment execution ensures that operational discipline is embedded at every stage of the export process.',
    expertise: ['Manufacturing Operations', 'Supplier Network Development', 'Logistics Coordination', 'Production Quality Control'],
    icon: '👔',
  },
  {
    name: 'Meet Aghara', title: 'Co-Founder & Quality Director', focus: 'Quality & Compliance', number: '02',
    bio: "Meet's analytical background drives Maheshwari Global Exports' commitment to quality verification. Every pre-shipment inspection protocol and documentation standard reflects his systematic approach to eliminating deviation between sample and delivery.",
    expertise: ['Quality Management Systems', 'Export Documentation', 'Regulatory Compliance', 'Analytical Process Design'],
    icon: '🔬',
  },
];

const philosophy = [
  { number: '01', title: 'Operational Integrity', desc: 'Every commitment made is a commitment kept. We do not overpromise on specifications or delivery timelines.', icon: '🎯' },
  { number: '02', title: 'Quality as Standard', desc: 'Quality is not a differentiator — it is the baseline. Every product we ship must meet the exact specifications agreed upon.', icon: '🏆' },
  { number: '03', title: 'Long-Term Relationships', desc: "We are not transactional traders. We invest in understanding our buyers' requirements and building reliable supply systems.", icon: '🤝' },
  { number: '04', title: 'Transparency First', desc: 'Clear communication, honest assessments, and proactive problem-solving at every stage of the trade cycle.', icon: '💡' },
];

export default function Leadership() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Leadership', path: '/leadership' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO — Dark cinematic (unchanged) */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format&fit=crop" alt="Leadership team meeting" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.45 }} loading="eager" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.7) 0%, rgba(19,19,42,0.5) 50%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              Founded 2026 · Rajkot, Gujarat
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '750px', lineHeight: 1.1 }}>
              Leadership — Built from<br />Experience, Driven by Discipline
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>Two founders. Complementary strengths. A single mission — structured, quality-verified global trade from India.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* FOUNDERS — why-choose-us card style */}
      <section aria-labelledby="founders-heading" style={{ padding: '100px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>The Team</p>
              <h2 id="founders-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>The Founding Team</h2>
              <p style={{ color: '#6b7280', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>Two complementary skill sets driving structured export operations.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="two-col">
            {leaders.map((l, i) => (
              <AnimatedSection key={l.name} delay={i * 120}>
                <div className="feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', overflow: 'hidden', height: '100%', position: 'relative', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                  <div style={{ height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  {/* Number watermark */}
                  <div style={{ position: 'absolute', top: '18px', right: '22px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '64px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>{l.number}</div>
                  <div style={{ padding: '36px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', marginBottom: '24px' }}>
                      <div style={{ width: '72px', height: '72px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '30px' }}>
                        {l.icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '20px', margin: '0 0 6px' }}>{l.name}</h3>
                        <p style={{ color: '#6b7280', fontSize: '13px', fontWeight: 600, margin: '0 0 10px' }}>{l.title}</p>
                        <span style={{ display: 'inline-block', background: '#eff6ff', border: '1px solid #bfdbfe', color: '#0052b3', fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.06em' }}>{l.focus}</span>
                      </div>
                    </div>
                    <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.9, marginBottom: '22px' }}>{l.bio}</p>
                    <div>
                      <div style={{ fontSize: '10px', color: '#0073e6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Areas of Expertise</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {l.expertise.map(e => (
                          <span key={e} style={{ background: '#f4f5f7', border: '1px solid #e8eaed', color: '#374151', fontSize: '11px', fontWeight: 600, padding: '5px 12px', borderRadius: '4px' }}>{e}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`
            .feature-card:hover{box-shadow:0 12px 36px rgba(0,115,230,0.10);transform:translateY(-4px);border-color:#bfdbfe!important}
            @media(max-width:768px){.two-col{grid-template-columns:1fr!important}}
          `}</style>
        </div>
      </section>

      {/* PHILOSOPHY — white why-choose-us cards on white bg */}
      <section style={{ padding: '100px 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 16px' }} />
              <p style={{ color: '#0073e6', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '12px' }}>How We Think</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif' }}>Our Leadership Philosophy</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }} className="two-col">
            {philosophy.map((p, i) => (
              <AnimatedSection key={p.number} delay={i * 80}>
                <div className="feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '32px 28px', display: 'flex', gap: '18px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  <div style={{ position: 'absolute', top: '14px', right: '18px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '48px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>{p.number}</div>
                  <div style={{ width: '52px', height: '52px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0a0a0a', fontSize: '16px', margin: '0 0 8px' }}>{p.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 2rem', background: '#f4f5f7', borderTop: '1px solid #e8eaed' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0a0a0a', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Speak Directly with Our Team</h2>
            <p style={{ color: '#6b7280', marginBottom: '28px', lineHeight: 1.8 }}>Our founders are directly involved in every new partnership discussion.</p>
            <Link href="/contact" style={{ display: 'inline-block', padding: '14px 34px', background: 'linear-gradient(135deg, #0073e6, #3395f0)', color: '#fff', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px', boxShadow: '0 4px 20px rgba(0,115,230,0.35)', fontFamily: 'Inter, sans-serif' }}>Contact Us</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
