'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const contactInfo = [
  { icon: '📍', label: 'Office Address', value: 'Rajkot, Gujarat, India', sub: 'Headquarters' },
  { icon: '✉️', label: 'Email Address', value: 'info@maheshwariglobalexports.com', sub: 'We respond within 24 hours' },
  { icon: '📞', label: 'Phone', value: '+91-XXXXXXXXXX', sub: 'Mon–Sat, 9 AM – 6 PM IST' },
];

const inputStyle = {
  width: '100%', border: '1px solid rgba(116,198,157,0.3)', borderRadius: '4px',
  padding: '12px 16px', fontSize: '14px', color: '#0d2b1a', outline: 'none',
  boxSizing: 'border-box', fontFamily: 'inherit', background: 'rgba(255,255,255,0.8)',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', country: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* ── CONTACT GRID ── */}
      <section aria-labelledby="contact-heading" style={{ padding: '96px 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px' }} className="contact-grid">

          {/* Info column */}
          <AnimatedSection>
            <h2 id="contact-heading" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', fontSize: '22px', marginBottom: '32px', marginTop: 0 }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {contactInfo.map(info => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg,#2d6a4f,#40916c)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', fontSize: '18px', flexShrink: 0, boxShadow: '0 4px 12px rgba(45,106,79,0.3)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', color: '#40916c', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '3px', fontWeight: 600 }}>{info.label}</div>
                    <div style={{ color: '#0d2b1a', fontWeight: 600, fontSize: '13px' }}>{info.value}</div>
                    <div style={{ color: '#6b7280', fontSize: '11px', marginTop: '2px' }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-section-dark" style={{ borderRadius: '10px', padding: '24px', border: '1px solid rgba(116,198,157,0.15)' }}>
              <h3 style={{ color: '#f0c040', fontWeight: 700, marginBottom: '16px', fontSize: '15px', marginTop: 0 }}>What to Expect</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Response within 24 business hours', 'Detailed product specification sheet', 'Pricing based on your requirements', 'Sample availability confirmation'].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(149,213,178,0.85)', fontSize: '13px' }}>
                    <span style={{ color: '#74c69d', flexShrink: 0, fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={150}>
            <div className="glass-card" style={{ borderRadius: '14px', padding: '40px' }}>
              <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', fontSize: '22px', marginBottom: '8px', marginTop: 0 }}>
                Request a Quotation
              </h2>
              <p style={{ color: '#4b7355', fontSize: '14px', marginBottom: '32px', lineHeight: 1.7 }}>
                Fill in your details and we&apos;ll prepare a tailored proposal for your sourcing requirements.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg,#2d6a4f,#40916c)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '28px', color: '#fff', boxShadow: '0 8px 24px rgba(45,106,79,0.4)' }}>✓</div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, color: '#0d2b1a', marginBottom: '10px', marginTop: 0 }}>Enquiry Sent!</h3>
                  <p style={{ color: '#4b7355', margin: 0 }}>Thank you for reaching out. We&apos;ll get back to you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-grid">
                    {[
                      { name: 'name', label: 'Full Name *', placeholder: 'Your name', type: 'text', required: true },
                      { name: 'email', label: 'Email Address *', placeholder: 'your@email.com', type: 'email', required: true },
                      { name: 'company', label: 'Company Name *', placeholder: 'Your company', type: 'text', required: true },
                      { name: 'country', label: 'Country', placeholder: 'Your country', type: 'text', required: false },
                    ].map(field => (
                      <div key={field.name}>
                        <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#40916c', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          style={inputStyle}
                          onFocus={e => { e.target.style.borderColor = '#40916c'; e.target.style.boxShadow = '0 0 0 3px rgba(64,145,108,0.15)'; e.target.style.background = '#fff'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(116,198,157,0.3)'; e.target.style.boxShadow = 'none'; e.target.style.background = 'rgba(255,255,255,0.8)'; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#40916c', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Products of Interest</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => { e.target.style.borderColor = '#40916c'; e.target.style.boxShadow = '0 0 0 3px rgba(64,145,108,0.15)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(116,198,157,0.3)'; e.target.style.boxShadow = 'none'; }}
                    >
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
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: '#40916c', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your requirements — product specifications, quantities, delivery destination, timeline..."
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => { e.target.style.borderColor = '#40916c'; e.target.style.boxShadow = '0 0 0 3px rgba(64,145,108,0.15)'; e.target.style.background = '#fff'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(116,198,157,0.3)'; e.target.style.boxShadow = 'none'; e.target.style.background = 'rgba(255,255,255,0.8)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ padding: '16px', fontSize: '12px', cursor: 'pointer', width: '100%' }}
                  >
                    Send Enquiry
                  </button>
                  <p style={{ color: '#6b7280', fontSize: '11px', textAlign: 'center', margin: 0 }}>
                    Your information is kept confidential and used only to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
        <style>{`
          @media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}
          @media(max-width:560px){.form-grid{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* ── MAP ── */}
      <section aria-label="Office location map" style={{ padding: '0 2rem 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <AnimatedSection>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(116,198,157,0.25)', height: '360px', boxShadow: '0 4px 24px rgba(13,43,26,0.1)' }}>
              <iframe
                title="Maheshwari Global Exports - Rajkot, Gujarat, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118445.33867827534!2d70.73229145!3d22.29264555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b0a400c67be3%3A0x9b0da0acba37c1df!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin"
                style={{ width: '100%', height: '100%', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
