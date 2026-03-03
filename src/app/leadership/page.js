import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Leadership | Founders of Maheshwari Global Exports | Indian Export Company',
  description: 'Meet the founders of Maheshwari Global Exports — Maharshi Siroya and Meet Aghara, a team combining operational manufacturing experience with analytical quality discipline.',
  keywords: ['founders maheshwari global exports','meet aghara exporter','maharshi siroya exporter','gujarat export house founders','indian agricultural exporter leadership'],
  path: '/leadership',
});

const leaders = [
  {
    name: 'Maharshi Siroya',
    title: 'Co-Founder & Operations Director',
    focus: 'Operations & Supplier Relations',
    bio: 'Maharshi brings deep operational manufacturing experience to Maheshwari Global Exports. His hands-on approach to supplier evaluation and shipment execution ensures that operational discipline is embedded at every stage of the export process.',
    expertise: ['Manufacturing Operations', 'Supplier Network Development', 'Logistics Coordination', 'Production Quality Control'],
    icon: '👔',
  },
  {
    name: 'Meet Aghara',
    title: 'Co-Founder & Quality Director',
    focus: 'Quality & Compliance',
    bio: 'Meet\'s analytical background drives Maheshwari Global Exports\' commitment to quality verification. Every pre-shipment inspection protocol and documentation standard reflects his systematic approach to eliminating deviation between sample and delivery.',
    expertise: ['Quality Management Systems', 'Export Documentation', 'Regulatory Compliance', 'Analytical Process Design'],
    icon: '🔬',
  },
];

const philosophy = [
  { number: '01', title: 'Operational Integrity', desc: 'Every commitment made is a commitment kept. We do not overpromise on specifications or delivery timelines.' },
  { number: '02', title: 'Quality as Standard', desc: 'Quality is not a differentiator — it is the baseline. Every product we ship must meet the exact specifications agreed upon.' },
  { number: '03', title: 'Long-Term Relationships', desc: 'We are not transactional traders. We invest in understanding our buyers\' requirements and building reliable supply systems.' },
  { number: '04', title: 'Transparency First', desc: 'Clear communication, honest assessments, and proactive problem-solving at every stage of the trade cycle.' },
];

export default function Leadership() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Leadership', path: '/leadership' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>The Team</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '700px' }}>
              Leadership — Built from Experience, Driven by Discipline
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Two founders. Complementary strengths. A single mission — structured, quality-verified global trade from India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section aria-labelledby="founders-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <h2 id="founders-heading" style={{ textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '64px' }}>
              The Founding Team
            </h2>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="two-col">
            {leaders.map((l, i) => (
              <AnimatedSection key={l.name} delay={i * 120}>
                <div className="glass-card hover-card" style={{ borderRadius: '14px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
                  {/* Green accent top bar */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg,#2d6a4f,#74c69d)' }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
                    <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg,#0d2b1a,#1a4731)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '36px', border: '3px solid rgba(116,198,157,0.3)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                      {l.icon}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', fontSize: '22px', margin: '0 0 4px' }}>{l.name}</h3>
                      <p style={{ color: '#40916c', fontSize: '13px', fontWeight: 600, margin: '0 0 4px' }}>{l.title}</p>
                      <div className="glass-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', borderRadius: '999px', padding: '3px 10px' }}>
                        <span style={{ color: '#2d6a4f', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Focus: {l.focus}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.9, marginBottom: '20px' }}>{l.bio}</p>

                  <div>
                    <div style={{ fontSize: '10px', color: '#40916c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Areas of Expertise</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {l.expertise.map(e => (
                        <span key={e} className="glass-panel" style={{ fontSize: '11px', color: '#1a4731', fontWeight: 600, padding: '5px 12px', borderRadius: '999px' }}>{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`@media(max-width:768px){.two-col{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section aria-labelledby="philosophy-heading" className="bg-section-dark" style={{ padding: '96px 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p className="section-label" style={{ color: '#74c69d', marginBottom: '12px' }}>How We Think</p>
              <h2 id="philosophy-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                Our Leadership Philosophy
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '20px' }} className="two-col">
            {philosophy.map((p, i) => (
              <AnimatedSection key={p.number} delay={i * 80}>
                <div className="glass-card-dark" style={{ borderRadius: '10px', padding: '28px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div className="step-circle">{p.number}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '17px', margin: '0 0 8px' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(149,213,178,0.75)', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '64px 2rem', background: '#fff', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>Speak Directly with Our Team</h2>
            <p style={{ color: '#4b7355', marginBottom: '28px', lineHeight: 1.8 }}>Our founders are directly involved in every new partnership discussion.</p>
            <Link href="/contact" className="btn-gold" style={{ padding: '14px 36px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Contact Us</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
