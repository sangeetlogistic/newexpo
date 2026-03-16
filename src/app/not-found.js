import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: 'Page Not Found | Maheshwari Global Exports',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-bg-dark)',
        padding: '2rem'
      }}>
        {/* Background Image Layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558299105-0219b165fb4e?w=1600&q=80&auto=format&fit=crop"
          alt="Container ship silhouette"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.25
          }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(10,10,10,0.85) 0%, rgba(19,19,42,0.85) 50%, rgba(10,10,10,0.85) 100%)' }} />
        <div className="bg-texture" style={{ position: 'absolute', inset: 0 }} />

        {/* Content Container */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginTop: '60px' }}>
          <AnimatedSection>
            {/* Visual Element */}
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
              <div style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(8rem, 20vw, 14rem)',
                fontWeight: 900,
                lineHeight: 1,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                userSelect: 'none',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'
              }}>
                404
              </div>
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '100%',
                fontWeight: 800,
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: '#fff',
                fontFamily: 'Poppins, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.2em'
              }}>
                Page Lost at Sea
              </div>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              We couldn&apos;t locate that shipment
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '16px',
              maxWidth: '560px',
              margin: '0 auto 40px',
              lineHeight: 1.8
            }}>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back to safe harbor.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              <Link href="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 36px',
                background: 'linear-gradient(135deg, #0073e6, #3395f0)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0,115,230,0.4)',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.3s ease'
              }} className="hover-lift">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Return to Home
              </Link>

              <Link href="/products" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 36px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '8px',
                backdropFilter: 'blur(8px)',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.3s ease'
              }} className="hover-lift-outline">
                View Products
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <style>{`
          .hover-lift:hover { transform: translateY(-3px); boxShadow: 0 12px 40px rgba(0,115,230,0.5); }
          .hover-lift-outline:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.4); transform: translateY(-3px); }
        `}</style>
      </section>
    </>
  );
}
