import AnimatedSection from '@/components/AnimatedSection';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import ContactClient from './ContactClient';

export const metadata = buildMetadata({
  title: 'Contact Us | Request Quote — Agro Export India | Contact Indian Rice & Spice Exporter',
  description: 'Contact Maheshwari Global Exports to request a quotation for rice, spices, pulses, and fresh produce exports from India. Based in Rajkot, Gujarat. We respond within 24 hours.',
  keywords: ['contact indian rice exporter', 'request quote agro export india', 'contact spice exporter india', 'agricultural export enquiry india', 'rajkot gujarat exporter contact', 'rice export quotation india', 'indian pulses exporter contact', 'b2b agro export inquiry'],
  path: '/contact',
});

export default function Contact() {
  const breadcrumb = breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* PAGE HEADER */}
      <section style={{ paddingTop: '160px', paddingBottom: '96px', position: 'relative', overflow: 'hidden', background: 'var(--color-bg-light)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=75&auto=format&fit=crop"
          alt="Modern office representing Maheshwari Global Exports contact and enquiry center in Rajkot Gujarat"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.75 }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, rgba(250,250,250,0.55) 0%, rgba(244,245,247,0.50) 60%, rgba(238,240,243,0.45) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <AnimatedSection>
            <span className="em-line" style={{ marginBottom: '20px', display: 'block' }} />
            <p className="section-label" style={{ color: 'var(--color-primary)', marginBottom: '14px' }}>Get In Touch</p>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--color-text-heading)', fontFamily: 'Poppins, sans-serif', marginBottom: '20px', maxWidth: '700px' }}>
              Contact Maheshwari Global Exports — Request an Export Quotation
            </h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '580px', lineHeight: 1.8 }}>
              Ready to source premium Indian agricultural products? Tell us what you need and we&apos;ll respond with a structured proposal within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactClient />
    </>
  );
}
