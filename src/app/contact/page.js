import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import ContactClient from './ContactClient';

export const metadata = buildMetadata({
  title: 'Contact Us | Request Quote — Agro Export India | Contact Indian Rice & Spice Exporter',
  description: 'Contact Maheshwari Global Exports to request a quotation for rice, spices, pulses, and fresh produce exports from India. Based in Rajkot, Gujarat. We respond within 24 hours.',
  keywords: ['contact indian rice exporter','request quote agro export india','contact spice exporter india','agricultural export enquiry india','rajkot gujarat exporter contact','rice export quotation india','indian pulses exporter contact','b2b agro export inquiry'],
  path: '/contact',
});

export default function Contact() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* ── PAGE HEADER ── */}
      <section className="bg-hero" style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-pattern" style={{ position: 'absolute', inset: 0 }} />
        <div className="glow-green" style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px' }} />
        <div className="glow-gold" style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '350px', height: '350px' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <p className="section-label" style={{ color: '#74c69d', marginBottom: '16px' }}>Get In Touch</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#fff', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '700px' }}>
              Contact Maheshwari Global Exports — Request an Export Quotation
            </h1>
            <p style={{ color: 'rgba(149,213,178,0.85)', fontSize: '18px', maxWidth: '600px', lineHeight: 1.8 }}>
              Ready to source premium Indian agricultural products? Tell us what you need and we&apos;ll respond with a structured proposal within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactClient />
    </>
  );
}
