'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Our Process', path: '/process' },
  { name: 'Markets', path: '/markets' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Leadership', path: '/leadership' },
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

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navBg = scrolled || !isHome
    ? 'rgba(10, 31, 18, 0.95)'
    : 'transparent';
  const navBorder = scrolled || !isHome
    ? '1px solid rgba(116, 198, 157, 0.15)'
    : '1px solid transparent';
  const navBlur = scrolled || !isHome ? 'blur(16px)' : 'none';
  const navShadow = scrolled || !isHome
    ? '0 4px 32px rgba(0, 0, 0, 0.35)'
    : 'none';

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        borderBottom: navBorder,
        boxShadow: navShadow,
        transition: 'all 0.35s ease',
      }}
      aria-label="Main navigation"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }} aria-label="Maheshwari Global Exports Home">
            {/* Glass green logo mark */}
            <div style={{
              width: '42px', height: '42px',
              background: 'linear-gradient(135deg, #2d6a4f, #40916c)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: '6px', flexShrink: 0,
              boxShadow: '0 4px 16px rgba(45,106,79,0.4)',
              border: '1px solid rgba(116,198,157,0.3)',
            }}>
              <span style={{ color: '#f0c040', fontWeight: 800, fontSize: '20px', fontFamily: 'Poppins, sans-serif' }}>M</span>
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '16px', fontFamily: 'Poppins, sans-serif', lineHeight: 1.2 }}>
                Maheshwari
              </div>
              <div style={{ color: '#74c69d', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
                Global Exports
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                style={{
                  color: pathname === link.path ? '#74c69d' : 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: pathname === link.path ? 600 : 500,
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                  borderBottom: pathname === link.path ? '2px solid #74c69d' : '2px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-gold"
              style={{
                marginLeft: '8px', padding: '10px 20px',
                fontSize: '11px', textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Request Quotation
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: '24px', height: '2px',
                  background: '#74c69d', borderRadius: '2px',
                  transition: 'all 0.3s',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                             menuOpen && i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10, 31, 18, 0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(116,198,157,0.15)',
          padding: '16px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              style={{
                display: 'block', padding: '12px 16px',
                color: pathname === link.path ? '#74c69d' : 'rgba(255,255,255,0.75)',
                textDecoration: 'none', fontSize: '14px', fontWeight: 500,
                borderLeft: pathname === link.path ? '3px solid #74c69d' : '3px solid transparent',
                marginBottom: '2px', borderRadius: '2px',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold"
            style={{ display: 'block', textAlign: 'center', marginTop: '16px', padding: '12px', fontSize: '12px', textDecoration: 'none' }}
          >
            Request Quotation
          </Link>
        </div>
      )}

      <style>{`
        @media(min-width:1200px){
          .nav-desktop{display:flex!important}
          .nav-mobile-btn{display:none!important}
        }
        @media(max-width:1199px){
          .nav-desktop{display:none!important}
          .nav-mobile-btn{display:flex!important}
        }
      `}</style>
    </nav>
  );
}
