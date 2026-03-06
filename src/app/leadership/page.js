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
    name: 'Maharshi Siroya', title: 'Co-Founder & Operations Director', focus: 'Operations & Supplier Relations',
    bio: 'Maharshi brings deep operational manufacturing experience to Maheshwari Global Exports. His hands-on approach to supplier evaluation and shipment execution ensures that operational discipline is embedded at every stage of the export process.',
    expertise: ['Manufacturing Operations', 'Supplier Network Development', 'Logistics Coordination', 'Production Quality Control'],
    icon: '👔',
  },
  {
    name: 'Meet Aghara', title: 'Co-Founder & Quality Director', focus: 'Quality & Compliance',
    bio: "Meet's analytical background drives Maheshwari Global Exports' commitment to quality verification. Every pre-shipment inspection protocol and documentation standard reflects his systematic approach to eliminating deviation between sample and delivery.",
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

      {/* ── HERO — Dark cinematic ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80&auto=format&fit=crop"
          alt="Leadership team meeting representing Maheshwari Global Exports founders"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', opacity: 0.45 }}
          loading="eager"
        />
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
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>
              Two founders. Complementary strengths. A single mission — structured, quality-verified global trade from India.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section aria-labelledby="founders-heading" style={{ padding: '100px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p className="section-label" style={{ marginBottom: '12px' }}>The Team</p>
              <h2 id="founders-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>The Founding Team</h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>Two complementary skill sets driving structured export operations.</p>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }} className="two-col">
            {leaders.map((l, i) => (
              <AnimatedSection key={l.name} delay={i * 120}>
                <div className="hover-card" style={{ background: 'var(--color-bg-dark)', borderRadius: '14px', overflow: 'hidden', height: '100%', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Top accent strip */}
                  <div style={{ height: '4px', background: 'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))' }} />
                  <div style={{ padding: '36px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', marginBottom: '24px' }}>
                      <div style={{ width: '76px', height: '76px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '32px', border: '2px solid rgba(255,255,255,0.12)' }}>
                        {l.icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#fff', fontSize: '21px', margin: '0 0 6px' }}>{l.name}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 600, margin: '0 0 10px' }}>{l.title}</p>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.06em' }}>{l.focus}</span>
                      </div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.9, marginBottom: '22px' }}>{l.bio}</p>
                    <div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '10px' }}>Areas of Expertise</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {l.expertise.map(e => (
                          <span key={e} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, padding: '5px 12px', borderRadius: '4px' }}>{e}</span>
                        ))}
                      </div>
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
      <section style={{ padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop" alt="Team collaboration and leadership philosophy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', opacity: 0.8 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '12px' }}>How We Think</p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
                Our Leadership Philosophy
              </h2>
            </div>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '18px' }} className="two-col">
            {philosophy.map((p, i) => (
              <AnimatedSection key={p.number} delay={i * 80}>
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '28px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '13px', color: '#fff' }}>{p.number}</div>
                  <div>
                    <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '16px', margin: '0 0 8px' }}>{p.title}</h3>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 2rem', background: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border-section)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <span className="em-line" style={{ margin: '0 auto 20px', display: 'block' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>Speak Directly with Our Team</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '28px', lineHeight: 1.8 }}>Our founders are directly involved in every new partnership discussion.</p>
            <Link href="/contact" className="btn-dark" style={{ padding: '14px 34px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>Contact Us</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
