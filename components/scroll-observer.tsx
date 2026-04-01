'use client';

import { useEffect } from 'react';

export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Run heavily after DOM paints
    const timeoutId = setTimeout(() => {
      // Find all animate-on-scroll elements that aren't handled by Stagger Hook
      const elements = document.querySelectorAll('.animate-on-scroll:not([data-animate])');
      elements.forEach((el) => observer.observe(el));
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
