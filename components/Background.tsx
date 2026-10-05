'use client';

import React, { useEffect } from 'react';

export default function Background() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-grid" />
      <div className="blob w-[36rem] h-[36rem] -top-40 -left-32 bg-green-accent/40" />
      <div className="blob w-[30rem] h-[30rem] top-1/3 -right-40 bg-cyan-accent/30 [animation-delay:-8s]" />
      <div className="blob w-[26rem] h-[26rem] bottom-0 left-1/3 bg-green-teal/25 [animation-delay:-14s]" />
      <div className="absolute inset-0 cursor-glow" />
    </div>
  );
}
