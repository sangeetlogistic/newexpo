'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const contactInfo = [
  { icon: '📍', label: 'Office Address', value: 'Rajkot, Gujarat, India', sub: 'Headquarters' },
  { icon: '✉️', label: 'Email Address', value: 'info@maheshwariglobalexports.com', sub: 'We respond within 24 hours' },
  { icon: '📞', label: 'Phone', value: '+91-XXXXXXXXXX', sub: 'Mon–Sat, 9 AM – 6 PM IST' },
];

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', country: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section aria-labelledby="contact-heading" style={{ padding: '96px 2rem', background: 'var(--color-bg-white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px' }} className="contact-grid">

          {/* Info */}
          <AnimatedSection>
            <span className="em-line" style={{ marginBottom: '20px', display: 'block' }} />
            <h2 id="contact-heading" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontSize: '21px', marginBottom: '30px', marginTop: 0 }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '36px' }}>
              {contactInfo.map(info => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '42px', height: '42px', background: 'var(--color-bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', fontSize: '17px', flexShrink: 0 }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '3px', fontWeight: 700 }}>{info.label}</div>
                    <div style={{ color: 'var(--color-text-heading-alt)', fontWeight: 600, fontSize: '13px' }}>{info.value}</div>
                    <div style={{ color: 'var(--color-text-subtle)', fontSize: '11px', marginTop: '2px' }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-dark" style={{ borderRadius: '8px', padding: '22px' }}>
              <h3 style={{ color: 'var(--color-primary)', fontWeight: 700, marginBottom: '14px', fontSize: '13px', marginTop: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>What to Expect</h3>
              {['Response within 24 business hours', 'Detailed product specification sheet', 'Pricing based on your requirements', 'Sample availability confirmation'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', color: 'var(--color-text-secondary)', fontSize: '12px', marginBottom: '9px' }}>
                  <span style={{ color: 'var(--color-primary)', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={150}>
            <div className="card" style={{ padding: '36px', borderTop: '3px solid var(--color-primary)' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'var(--color-text-heading-alt)', fontSize: '21px', marginBottom: '8px', marginTop: 0 }}>
                Request a Quotation
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '28px', lineHeight: 1.7 }}>
                Fill in your details and we&apos;ll prepare a tailored proposal for your sourcing requirements.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: '26px', color: 'var(--color-bg-dark-deep)' }}>✓</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: 'var(--color-text-heading-alt)', marginBottom: '10px', marginTop: 0 }}>Enquiry Sent!</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>Thank you for reaching out. We&apos;ll get back to you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="form-grid">
                    {[
                      { name: 'name', label: 'Full Name *', placeholder: 'Your name', type: 'text', required: true },
                      { name: 'email', label: 'Email Address *', placeholder: 'your@email.com', type: 'email', required: true },
                      { name: 'company', label: 'Company Name *', placeholder: 'Your company', type: 'text', required: true },
                      { name: 'country', label: 'Country', placeholder: 'Your country', type: 'text', required: false },
                    ].map(field => (
                      <div key={field.name}>
                        <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: 'var(--color-text-label)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '7px' }}>{field.label}</label>
                        <input
                          type={field.type} name={field.name} value={formData[field.name]}
                          onChange={handleChange} required={field.required} placeholder={field.placeholder}
                          className="form-input"
                          onFocus={e => { e.target.style.borderColor = 'var(--color-text-heading-alt)'; e.target.style.boxShadow = '0 0 0 3px rgba(10,22,40,0.1)'; }}
                          onBlur={e => { e.target.style.borderColor = 'var(--color-border-input-alt)'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: 'var(--color-text-label)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '7px' }}>Products of Interest</label>
                    <select name="product" value={formData.product} onChange={handleChange} className="form-input" style={{ cursor: 'pointer' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--color-text-heading-alt)'; e.target.style.boxShadow = '0 0 0 3px rgba(10,22,40,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--color-border-input-alt)'; e.target.style.boxShadow = 'none'; }}>
                      <option value="">Select a product category</option>
                      <option>Rice (Basmati)</option>
                      <option>Rice (Non-Basmati)</option>
                      <option>Indian Spices</option>
                      <option>Pulses &amp; Lentils</option>
                      <option>Fresh Fruits &amp; Vegetables</option>
                      <option>Multiple Products</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: 'var(--color-text-label)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '7px' }}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                      placeholder="Describe your requirements — product specifications, quantities, delivery destination, timeline..."
                      className="form-input" style={{ resize: 'none' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--color-text-heading-alt)'; e.target.style.boxShadow = '0 0 0 3px rgba(10,22,40,0.1)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--color-border-input-alt)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ padding: '15px', fontSize: '12px', width: '100%' }}>
                    Send Enquiry
                  </button>
                  <p style={{ color: 'var(--color-text-subtle)', fontSize: '11px', textAlign: 'center', margin: 0 }}>
                    Your information is kept confidential and used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
        <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}@media(max-width:560px){.form-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* MAP */}
      <section style={{ padding: '0 2rem 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--color-border-section)', height: '360px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <iframe
                title="Maheshwari Global Exports - Rajkot, Gujarat, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118445.33867827534!2d70.73229145!3d22.29264555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b0a400c67be3%3A0x9b0da0acba37c1df!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin"
                style={{ width: '100%', height: '100%', border: 0 }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
