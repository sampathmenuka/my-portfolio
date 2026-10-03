'use client';

import React, { useEffect, useState } from 'react';

export default function Background() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const onMove = (e: PointerEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-60 pointer-events-none">
        <div
          className="h-full bg-linear-to-r from-green-accent via-green-teal to-cyan-accent"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid" />
        <div className="blob w-[36rem] h-[36rem] -top-40 -left-32 bg-green-accent/40" />
        <div className="blob w-[30rem] h-[30rem] top-1/3 -right-40 bg-cyan-accent/30 [animation-delay:-8s]" />
        <div className="blob w-[26rem] h-[26rem] bottom-0 left-1/3 bg-green-teal/25 [animation-delay:-14s]" />
        <div className="absolute inset-0 cursor-glow" />
      </div>
    </>
  );
}
