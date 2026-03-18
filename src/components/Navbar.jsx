'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Our Process', path: '/process' },
  { name: 'Markets', path: '/markets' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On home page: transparent until scrolled; on other pages: always white
  const solidNav = scrolled || !isHome;

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: solidNav ? 'rgba(255, 255, 255, 0.97)' : 'transparent',
        backdropFilter: solidNav ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: solidNav ? 'blur(12px)' : 'none',
        borderBottom: solidNav ? '1px solid var(--color-border-card)' : '1px solid transparent',
        boxShadow: solidNav ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition: 'all 0.3s ease',
      }}
      aria-label="Main navigation"
    >

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="Maheshwari Global Exports Home">
            <img
              src={solidNav ? "/assets/expo.png" : "/assets/expo-white.png"}
              alt="Maheshwari Global Exports Logo"
              style={{
                height: '45px',
                width: 'auto',
                transition: 'opacity 0.3s ease'
              }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: pathname === link.path
                    ? 'var(--color-primary)'
                    : solidNav ? 'var(--color-text-body)' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: '12.5px',
                  fontWeight: pathname === link.path ? 600 : 500,
                  padding: '6px 10px',
                  borderRadius: '4px',
                  transition: 'color 0.2s, background 0.2s',
                  background: pathname === link.path
                    ? 'rgba(0,115,230,0.07)'
                    : 'transparent',
                  borderBottom: pathname === link.path ? '2px solid var(--color-primary)' : '2px solid transparent',
                  letterSpacing: '0.01em',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: solidNav ? 'var(--color-text-heading)' : 'var(--color-bg-white)',
                marginBottom: i < 2 ? '5px' : 0,
                transition: 'all 0.3s',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                  menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'var(--color-bg-white)', borderTop: '1px solid var(--color-border-card)', padding: '12px 16px 20px', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '11px 14px',
                color: pathname === link.path ? 'var(--color-primary)' : 'var(--color-text-body)',
                textDecoration: 'none', fontSize: '14px', fontWeight: 500,
                borderLeft: pathname === link.path ? '3px solid var(--color-primary)' : '3px solid transparent',
                marginBottom: '2px', borderRadius: '2px',
                background: pathname === link.path ? 'rgba(0,115,230,0.06)' : 'transparent',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media(min-width:1100px){.nav-desktop{display:flex!important}.nav-mobile-btn{display:none!important}}
        @media(max-width:1099px){.nav-desktop{display:none!important}.nav-mobile-btn{display:flex!important;flex-direction:column}}
      `}</style>
    </nav>
  );
}
