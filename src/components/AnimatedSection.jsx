'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0, tag: Tag = 'div' }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
          }
        });
      },
      { threshold: 0.08 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [delay]);

  return (
    <Tag ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </Tag>
  );
}
