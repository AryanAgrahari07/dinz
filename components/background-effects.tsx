'use client';

import { useEffect, useState, useRef } from 'react';

export function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const requestRef = useRef<number>();
  const targetMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);

    // Smooth trailing effect using requestAnimationFrame
    const updateMousePos = () => {
      setMousePosition((prev) => ({
        x: prev.x + (targetMouse.current.x - prev.x) * 0.1,
        y: prev.y + (targetMouse.current.y - prev.y) * 0.1,
      }));
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
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#020205]">

      {/* Dynamic Cursor Spotlight Tracker */}
      <div
        className="absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.05), transparent 60%)`
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.03), transparent 80%)`
        }}
      />

      {/* Global Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/5 blur-[120px] mix-blend-screen animate-blob" />
      <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/5 blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
      <div className="absolute bottom-[0%] left-[30%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/5 blur-[130px] mix-blend-screen animate-blob animation-delay-4000" />

      {/* Grid Canvas Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] mix-blend-overlay z-0 fixed-bg-grid" />

      {/* Noise Texture Core */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay z-10" />
    </div>
  );
}
