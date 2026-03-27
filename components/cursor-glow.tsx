'use client';

import { useEffect, useRef } from 'react';

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-50 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
        filter: 'blur(8px)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}
