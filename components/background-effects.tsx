'use client';

import { useEffect, useRef, useState } from 'react';

export function BackgroundEffects() {
  const [isClient, setIsClient] = useState(false);
  const requestRef = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });
  
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const updateMousePos = () => {
      mousePosition.current.x += (targetMouse.current.x - mousePosition.current.x) * 0.1;
      mousePosition.current.y += (targetMouse.current.y - mousePosition.current.y) * 0.1;
      
      if (glow1Ref.current) {
        glow1Ref.current.style.background = `radial-gradient(800px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, rgba(29, 78, 216, 0.05), transparent 60%)`;
      }
      
      if (glow2Ref.current) {
        glow2Ref.current.style.background = `radial-gradient(400px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, rgba(147, 51, 234, 0.03), transparent 80%)`;
      }

      requestRef.current = requestAnimationFrame(updateMousePos);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(updateMousePos);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020205] isolate">

      {/* Dynamic Cursor Spotlight Tracker */}
      <div
        ref={glow1Ref}
        className="absolute inset-0 transition-opacity duration-300 z-10 will-change-[background]"
      />
      <div
        ref={glow2Ref}
        className="absolute inset-0 transition-opacity duration-300 z-10 will-change-[background]"
      />

      {/* Global Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[80px] sm:blur-[120px] mix-blend-screen animate-blob will-change-transform" />
      <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/5 blur-[80px] sm:blur-[120px] mix-blend-screen animate-blob animation-delay-2000 will-change-transform" />
      <div className="absolute bottom-[0%] left-[30%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/5 blur-[80px] sm:blur-[130px] mix-blend-screen animate-blob animation-delay-4000 will-change-transform" />

      {/* Grid Canvas Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] z-0 fixed-bg-grid" />

      {/* Noise Texture Core */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] z-10" />
    </div>
  );
}
