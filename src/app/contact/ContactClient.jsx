'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const contactInfo = [
  { icon: '📍', label: 'Office Address', value: 'Rajkot, Gujarat, India', sub: 'Headquarters' },
  { icon: '✉️', label: 'Email Address', value: 'info@maheshwariglobalexports.com', sub: 'We respond within 24 hours' },
  { icon: '📞', label: 'Phone', value: '+91-XXXXXXXXXX', sub: 'Mon–Sat, 9 AM – 6 PM IST' },
];

const expectItems = [
  'Response within 24 business hours',
  'Detailed product specification sheet',
  'Pricing based on your requirements',
  'Sample availability confirmation',
];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', country: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* ── CONTACT SECTION — why-choose-us card style ── */}
      <section aria-labelledby="contact-heading" style={{ padding: '96px 2rem', background: '#f4f5f7' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }} className="contact-grid">

          {/* ── LEFT: Info column ── */}
          <AnimatedSection>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Heading card */}
              <div style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '28px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                <div style={{ width: '36px', height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)', borderRadius: '2px', marginBottom: '14px' }} />
                <h2 id="contact-heading" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '20px', marginBottom: '8px', marginTop: 0 }}>Contact Information</h2>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>Our team is ready to assist with your sourcing requirements.</p>
              </div>

              {/* Contact info cards */}
              {contactInfo.map(info => (
                <div key={info.label} className="feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'flex-start', gap: '14px', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                  <div style={{ width: '48px', height: '48px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#0073e6', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '3px', fontWeight: 700 }}>{info.label}</div>
                    <div style={{ color: '#0a0a0a', fontWeight: 600, fontSize: '13px' }}>{info.value}</div>
                    <div style={{ color: '#9ca3af', fontSize: '11px', marginTop: '2px' }}>{info.sub}</div>
                  </div>
                </div>
              ))}

              {/* What to expect card */}
              <div className="feature-card" style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '24px', position: 'relative', overflow: 'hidden', transition: 'all 0.25s ease', boxSizing: 'border-box' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
                <div style={{ position: 'absolute', top: '14px', right: '18px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '40px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>?</div>
                <div style={{ width: '44px', height: '44px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '14px' }}>📋</div>
                <h3 style={{ color: '#0a0a0a', fontWeight: 700, marginBottom: '14px', fontSize: '13px', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>What to Expect</h3>
                {expectItems.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', color: '#4b5563', fontSize: '12px', marginBottom: '9px' }}>
                    <span style={{ color: '#0073e6', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT: Form ── */}
          <AnimatedSection delay={150}>
            <div style={{ background: '#ffffff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '40px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
              {/* Blue top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #0073e6, #3395f0)' }} />
              {/* Number watermark */}
              <div style={{ position: 'absolute', top: '16px', right: '24px', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: '72px', color: '#f0f4ff', lineHeight: 1, userSelect: 'none' }}>RFQ</div>

              <div style={{ marginBottom: '28px' }}>
                <div style={{ width: '44px', height: '44px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '16px' }}>📩</div>
                <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', fontSize: '22px', marginBottom: '8px', marginTop: 0 }}>Request a Quotation</h2>
                <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: 0, lineHeight: 1.7 }}>Fill in your details and we&apos;ll prepare a tailored proposal for your sourcing requirements.</p>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #0073e6, #3395f0)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: '26px', color: '#fff' }}>✓</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0a0a0a', marginBottom: '10px', marginTop: 0 }}>Enquiry Sent!</h3>
                  <p style={{ color: '#6b7280', margin: 0 }}>Thank you for reaching out. We&apos;ll get back to you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="form-grid">
                    {[
                      { name: 'name', label: 'Full Name *', placeholder: 'Your name', type: 'text', required: true },
                      { name: 'email', label: 'Email Address *', placeholder: 'your@email.com', type: 'email', required: true },
                      { name: 'country', label: 'Country', placeholder: 'Your country', type: 'text', required: false },
                    ].map(field => (
                      <div key={field.name}>
                        <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '7px' }}>{field.label}</label>
                        <input
                          type={field.type} name={field.name} value={formData[field.name]}
                          onChange={handleChange} required={field.required} placeholder={field.placeholder}
                          className="form-input"
                          onFocus={e => { e.target.style.borderColor = '#0073e6'; e.target.style.boxShadow = '0 0 0 3px rgba(0,115,230,0.12)'; }}
                          onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '7px' }}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      placeholder="Describe your requirements — product specifications, quantities, delivery destination, timeline..."
                      className="form-input" style={{ resize: 'none' }}
                      onFocus={e => { e.target.style.borderColor = '#0073e6'; e.target.style.boxShadow = '0 0 0 3px rgba(0,115,230,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#d1d5db'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button type="submit" style={{ padding: '15px', fontSize: '12px', width: '100%', background: 'linear-gradient(135deg, #0073e6, #3395f0)', color: '#fff', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '6px', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', boxShadow: '0 4px 20px rgba(0,115,230,0.35)', transition: 'all 0.25s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,115,230,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,115,230,0.35)'; e.currentTarget.style.transform = 'none'; }}
                  >
                    Send Enquiry
                  </button>
                  <p style={{ color: '#9ca3af', fontSize: '11px', textAlign: 'center', margin: 0 }}>
                    Your information is kept confidential and used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
        <style>{`
          .feature-card:hover{box-shadow:0 12px 36px rgba(0,115,230,0.10);transform:translateY(-4px);border-color:#bfdbfe!important}
          @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}
          @media(max-width:560px){.form-grid{grid-template-columns:1fr!important}}
        `}</style>
      </section>
    </>
  );
}
