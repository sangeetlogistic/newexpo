import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema, productSchema } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Our Products | Rice Exporter India | Spice Exporter India | Pulses Exporter India',
  description: 'Maheshwari Global Exports offers premium Indian agricultural products for export: Basmati rice, non-basmati rice, Indian spices (turmeric, cumin, chili, coriander), pulses & lentils, and fresh fruits & vegetables. Private labeling available.',
  keywords: ['rice exporter india','basmati rice exporter india','1121 basmati rice exporter','non basmati rice supplier','indian spice exporter','turmeric exporter india','cumin seeds exporter india','red chili export company','coriander seeds exporter','lentils exporter india','pulses exporter india','fresh fruits exporter india','vegetable exporter india','private label rice export','agro products exporter','rice export company gujarat'],
  path: '/products',
});

const categories = [
  {
    icon: '🌾', title: 'Rice',
    seoTitle: 'Basmati & Non-Basmati Rice Exporter from India',
    subtitle: 'Basmati & Non-Basmati',
    description: 'Export-compliant packaging with precise moisture control and uniform grading. Premium long-grain basmati to everyday non-basmati varieties, sourced from verified farms.',
    variants: ['Premium Basmati (1121)', 'Traditional Basmati', 'Non-Basmati (Sona Masoori)', 'Parboiled Rice', 'IR64 Rice', 'Long Grain Rice'],
    certifications: ['APEDA Registered', 'FSSAI Compliant', 'Phytosanitary Certificate'],
    accentColor: '#d4a017', accentLight: 'rgba(212,160,23,0.1)', borderColor: 'rgba(212,160,23,0.3)',
  },
  {
    icon: '🌶️', title: 'Indian Spices',
    seoTitle: 'Indian Spice Exporter — Turmeric, Cumin, Chili, Coriander',
    subtitle: 'Turmeric, Cumin, Chili & More',
    description: 'Authentic Indian spices sourced directly from origin farms. Every batch tested for purity, moisture content, and essential oil percentage before export dispatch.',
    variants: ['Turmeric Powder', 'Cumin Seeds (Jeera)', 'Red Chili (Whole & Powder)', 'Coriander Seeds'],
    certifications: ['FSSAI Certified', 'Lab-Tested Purity', 'Export Grade Quality'],
    accentColor: '#ef4444', accentLight: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.25)',
  },
  {
    icon: '🫘', title: 'Pulses & Lentils',
    seoTitle: 'Pulses & Lentils Exporter from India — Bulk Supplier',
    subtitle: 'Cleaned, Graded & Packed',
    description: 'Professionally cleaned, graded, and packed as per buyer specifications. Available in bulk and retail-ready packaging for global food distributors.',
    variants: ['Yellow Lentils (Moong Dal)', 'Red Lentils (Masoor)', 'Toor Dal', 'Chana Dal', 'Chickpeas', 'Black-Eyed Peas'],
    certifications: ['Moisture Verified', 'Buyer-Spec Grading', 'Custom Packing Available'],
    accentColor: '#40916c', accentLight: 'rgba(64,145,108,0.1)', borderColor: 'rgba(64,145,108,0.3)',
  },
  {
    icon: '🥭', title: 'Fresh Fruits & Vegetables',
    seoTitle: 'Fresh Fruits & Vegetables Exporter India',
    subtitle: 'Verified Supply Chains',
    description: 'Export-ready fresh produce with verified cold-chain management and export-standard packaging. Seasonal sourcing from certified farms across Gujarat and Maharashtra.',
    variants: ['Alphonso Mango', 'Fresh Onion', 'Garlic', 'Fresh Ginger', 'Pomegranate'],
    certifications: ['Cold-Chain Managed', 'Phytosanitary Cert', 'GlobalG.A.P. Sourced'],
    accentColor: '#7c3aed', accentLight: 'rgba(124,58,237,0.08)', borderColor: 'rgba(124,58,237,0.25)',
  },
];

export default function Products() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Our Products', path: '/products' }]);
  const productSchemas = categories.map(c => productSchema({ name: c.seoTitle, description: c.description, category: 'Agricultural Export Products' }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {productSchemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>Product Portfolio</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '700px' }}>
              Rice, Spices, Pulses &amp; Fresh Produce Export from India
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Premium Indian agricultural products — sourced, verified, and shipped with disciplined quality control.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section aria-labelledby="products-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>What We Export</p>
              <h2 id="products-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '14px' }}>
                Export-Ready Agricultural Product Categories
              </h2>
              <p style={{ color: '#4b7355', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
                Each category handled with dedicated sourcing protocols and rigorous quality verification before export.
              </p>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.title} delay={i * 80}>
                <article aria-label={cat.seoTitle}
                  className="hover-card-sm"
                  style={{ border: `1px solid ${cat.borderColor}`, borderRadius: '14px', padding: '40px', background: cat.accentLight, position: 'relative', overflow: 'hidden' }}>
                  {/* Accent line */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: cat.accentColor, borderRadius: '14px 0 0 14px' }} />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }} className="two-col-product">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '44px', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>{cat.icon}</span>
                        <div>
                          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', fontSize: '22px', margin: 0 }}>{cat.title}</h3>
                          <span style={{ display: 'inline-block', background: cat.accentColor, color: '#fff', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', marginTop: '5px', letterSpacing: '0.05em' }}>Export Ready</span>
                        </div>
                      </div>
                      <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.9, marginBottom: '18px' }}>{cat.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {cat.variants.map(v => (
                          <span key={v} style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(0,0,0,0.1)', color: '#1a4731', fontSize: '12px', fontWeight: 500, padding: '5px 12px', borderRadius: '999px' }}>{v}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#0d2b1a', fontSize: '13px', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Standards & Certifications</h4>
                      {cat.certifications.map(cert => (
                        <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '13px', color: '#374151' }}>
                          <div style={{ width: '20px', height: '20px', background: 'rgba(64,145,108,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <span style={{ color: '#2d6a4f', fontSize: '11px' }}>✓</span>
                          </div>
                          {cert}
                        </div>
                      ))}
                      <div className="bg-section-dark" style={{ marginTop: '20px', borderRadius: '8px', padding: '16px', border: '1px solid rgba(116,198,157,0.15)' }}>
                        <p style={{ color: 'rgba(149,213,178,0.7)', fontSize: '12px', margin: '0 0 10px' }}>Interested in this product?</p>
                        <Link href="/contact" className="btn-gold" style={{ display: 'block', textAlign: 'center', padding: '10px', fontSize: '11px', textDecoration: 'none' }}>
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
      <section aria-labelledby="private-label-heading" className="bg-section-light" style={{ padding: '80px 2rem', borderTop: '1px solid rgba(116,198,157,0.2)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="two-col">
          <AnimatedSection>
            <p className="section-label" style={{ marginBottom: '16px' }}>Value-Added Services</p>
            <h2 id="private-label-heading" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, color: '#0d2b1a', fontFamily: 'Poppins, sans-serif', marginBottom: '18px' }}>
              Custom Packaging &amp; Private Label Export
            </h2>
            <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.9, marginBottom: '24px' }}>
              Complete private label export solutions — from specifications to packaging design, multilingual labeling, and destination-specific compliance.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Custom packaging sizes and materials', 'Private label branding & design support', 'Buyer-specific grading specifications', 'Multilingual labeling (Arabic, French, English)', 'Compliance documentation per destination country'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4b5563', fontSize: '13px' }}>
                  <span style={{ color: '#40916c', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary" style={{ padding: '14px 32px', fontSize: '12px', textDecoration: 'none', display: 'inline-block' }}>
              Discuss Your Requirements
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="bg-section-dark" style={{ borderRadius: '12px', padding: '32px', border: '1px solid rgba(116,198,157,0.15)' }}>
              <h3 style={{ color: '#f0c040', fontWeight: 700, marginBottom: '24px', fontSize: '17px', marginTop: 0 }}>Quality Standards We Maintain</h3>
              {[
                { label: 'FSSAI Compliance', desc: 'Food Safety and Standards Authority of India' },
                { label: 'APEDA Registered', desc: 'Agricultural & Processed Food Products Export' },
                { label: 'Phytosanitary Certificates', desc: 'Plant health compliance for destination countries' },
                { label: 'Pre-Shipment Inspection', desc: 'Third-party quality verification on request' },
              ].map((cert, idx, arr) => (
                <div key={cert.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', paddingBottom: idx < arr.length - 1 ? '18px' : 0, borderBottom: idx < arr.length - 1 ? '1px solid rgba(116,198,157,0.1)' : 'none', marginBottom: idx < arr.length - 1 ? '18px' : 0 }}>
                  <div style={{ width: '30px', height: '30px', background: 'rgba(64,145,108,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#74c69d', fontSize: '13px' }}>✓</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>{cert.label}</div>
                    <div style={{ color: 'rgba(149,213,178,0.6)', fontSize: '12px', marginTop: '2px' }}>{cert.desc}</div>
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
