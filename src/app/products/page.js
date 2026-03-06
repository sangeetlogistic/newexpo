import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema, productSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Products | Rice Exporter India | Spice Exporter India | Pulses Exporter India',
  description: 'Maheshwari Global Exports offers premium Indian agricultural products for export: Basmati rice, non-basmati rice, Indian spices (turmeric, cumin, chili, coriander), pulses & lentils, and fresh fruits & vegetables. Private labeling available.',
  keywords: ['rice exporter india', 'basmati rice exporter india', '1121 basmati rice exporter', 'non basmati rice supplier', 'indian spice exporter', 'turmeric exporter india', 'cumin seeds exporter india', 'red chili export company', 'coriander seeds exporter', 'lentils exporter india', 'pulses exporter india', 'fresh fruits exporter india', 'vegetable exporter india', 'private label rice export', 'agro products exporter', 'rice export company gujarat'],
  path: '/products',
});

const categories = [
  {
    icon: '🌾', title: 'Rice', seoTitle: 'Basmati & Non-Basmati Rice Exporter from India',
    subtitle: 'Basmati & Non-Basmati',
    description: 'Export-compliant packaging with precise moisture control and uniform grading. Premium long-grain basmati to everyday non-basmati varieties, sourced from verified farms.',
    variants: ['Premium Basmati (1121)', 'Traditional Basmati', 'Non-Basmati (Sona Masoori)', 'Parboiled Rice', 'IR64 Rice', 'Long Grain Rice'],
    certifications: ['APEDA Registered', 'FSSAI Compliant', 'Phytosanitary Certificate'],
  },
  {
    icon: '🌶️', title: 'Indian Spices', seoTitle: 'Indian Spice Exporter — Turmeric, Cumin, Chili, Coriander',
    subtitle: 'Turmeric, Cumin, Chili & More',
    description: 'Authentic Indian spices sourced directly from origin farms. Every batch tested for purity, moisture content, and essential oil percentage before export dispatch.',
    variants: ['Turmeric Powder', 'Cumin Seeds (Jeera)', 'Red Chili (Whole & Powder)', 'Coriander Seeds'],
    certifications: ['FSSAI Certified', 'Lab-Tested Purity', 'Export Grade Quality'],
  },
  {
    icon: '🫘', title: 'Pulses & Lentils', seoTitle: 'Pulses & Lentils Exporter from India — Bulk Supplier',
    subtitle: 'Cleaned, Graded & Packed',
    description: 'Professionally cleaned, graded, and packed as per buyer specifications. Available in bulk and retail-ready packaging for global food distributors.',
    variants: ['Yellow Lentils (Moong Dal)', 'Red Lentils (Masoor)', 'Toor Dal', 'Chana Dal', 'Chickpeas', 'Black-Eyed Peas'],
    certifications: ['Moisture Verified', 'Buyer-Spec Grading', 'Custom Packing Available'],
  },
  {
    icon: '🥭', title: 'Fresh Fruits & Vegetables', seoTitle: 'Fresh Fruits & Vegetables Exporter India',
    subtitle: 'Verified Supply Chains',
    description: 'Export-ready fresh produce with verified cold-chain management and export-standard packaging. Seasonal sourcing from certified farms across Gujarat and Maharashtra.',
    variants: ['Alphonso Mango', 'Fresh Onion', 'Garlic', 'Fresh Ginger', 'Pomegranate'],
    certifications: ['Cold-Chain Managed', 'Phytosanitary Cert', 'GlobalG.A.P. Sourced'],
  },
];

export default function Products() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Our Products', path: '/products' }]);
  const productSchemas = categories.map(c => productSchema({ name: c.seoTitle, description: c.description, category: 'Agricultural Export Products' }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {productSchemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      {/* ── HERO — Dark cinematic ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '120px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-dark)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80&auto=format&fit=crop"
          alt="Colorful Indian spices, rice, and pulses representing Maheshwari Global Exports product portfolio"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.7) 0%, rgba(19,19,42,0.5) 50%, rgba(10,10,10,0.65) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <div className="badge-dark" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.6)', borderRadius: '50%', display: 'inline-block' }} />
              4 Categories · 50+ Variants
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '24px', maxWidth: '780px', lineHeight: 1.1 }}>
              Rice, Spices, Pulses &amp;<br />Fresh Produce Export
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '560px', lineHeight: 1.9 }}>
              Premium Indian agricultural products sourced, verified, and shipped with disciplined quality control.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section aria-labelledby="products-heading" style={{ padding: '100px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="em-line" style={{ margin: '0 auto 16px', display: 'block' }} />
              <p className="section-label" style={{ marginBottom: '12px' }}>What We Export</p>
              <h2 id="products-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontFamily: 'Poppins, sans-serif', marginBottom: '12px' }}>
                Export-Ready Agricultural Products
              </h2>
              <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8 }}>
                Each category handled with dedicated sourcing protocols and rigorous quality verification.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 80}>
                <article aria-label={cat.seoTitle} className="hover-card" style={{ background: 'var(--color-bg-dark)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ height: '3px', background: 'linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.03))' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '36px 36px 36px 32px', alignItems: 'start' }} className="two-col-product">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '40px' }}>{cat.icon}</span>
                        <div>
                          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#fff', fontSize: '21px', margin: '0 0 6px' }}>{cat.title}</h3>
                          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, padding: '3px 12px', borderRadius: '999px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Export Ready</span>
                        </div>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.9, marginBottom: '18px' }}>{cat.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                        {cat.variants.map(v => (
                          <span key={v} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: '12px', fontWeight: 500, padding: '5px 12px', borderRadius: '4px' }}>{v}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '12px', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 0 }}>Standards &amp; Certifications</h4>
                      {cat.certifications.map(cert => (
                        <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                          <div style={{ width: '22px', height: '22px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ color: '#fff', fontSize: '10px', fontWeight: 700 }}>✓</span>
                          </div>
                          {cert}
                        </div>
                      ))}
                      <div style={{ marginTop: '22px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '16px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0 0 10px' }}>Interested in this product?</p>
                        <Link href="/contact" style={{ display: 'block', textAlign: 'center', padding: '10px', fontSize: '11px', textDecoration: 'none', background: '#fff', color: 'var(--color-bg-dark)', fontWeight: 700, borderRadius: '6px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          Request Quotation
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.two-col-product{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── PRIVATE LABEL ── */}
      <section style={{ padding: '100px 2rem', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80&auto=format&fit=crop" alt="Packaging and private label export" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.7) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 10 }} className="two-col">
          <AnimatedSection>
            <span className="em-line" style={{ marginBottom: '20px', display: 'block' }} />
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '14px' }}>Value-Added Services</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '16px' }}>
              Custom Packaging &amp; Private Label Export
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.9, marginBottom: '22px' }}>
              Complete private label export solutions — from specifications to packaging design, multilingual labeling, and destination-specific compliance.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {['Custom packaging sizes and materials', 'Private label branding & design support', 'Buyer-specific grading specifications', 'Multilingual labeling (Arabic, French, English)', 'Compliance documentation per destination country'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', fontSize: '13px' }}>
                  <span style={{ color: '#fff', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ padding: '13px 30px', fontSize: '11px', textDecoration: 'none', display: 'inline-block', background: '#fff', color: 'var(--color-bg-dark)', fontWeight: 700, borderRadius: '6px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Discuss Your Requirements
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '32px' }}>
              <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '22px', fontSize: '14px', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quality Standards We Maintain</h3>
              {[
                { label: 'FSSAI Compliance', desc: 'Food Safety and Standards Authority of India' },
                { label: 'APEDA Registered', desc: 'Agricultural & Processed Food Products Export' },
                { label: 'Phytosanitary Certificates', desc: 'Plant health compliance for destination countries' },
                { label: 'Pre-Shipment Inspection', desc: 'Third-party quality verification on request' },
              ].map((cert, idx, arr) => (
                <div key={cert.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', paddingBottom: idx < arr.length - 1 ? '16px' : 0, borderBottom: idx < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', marginBottom: idx < arr.length - 1 ? '16px' : 0 }}>
                  <div style={{ width: '28px', height: '28px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontSize: '12px', fontWeight: 700 }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>{cert.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '2px' }}>{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.two-col{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
      </section>
    </>
  );
}
