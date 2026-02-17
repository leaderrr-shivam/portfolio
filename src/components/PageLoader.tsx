import { useState, useEffect } from 'react';

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 200);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-600 ${
        fadeOut ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 animate-float" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-3 opacity-0 animate-fade-in-up">
          <span className="text-gradient-warm">S</span>
          <span className="text-foreground">hivam</span>
        </h1>
        <p className="text-sm text-muted-foreground tracking-[0.3em] uppercase mb-10 opacity-0 animate-fade-in-up delay-200">
          AI Engineer
        </p>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-secondary rounded-full overflow-hidden opacity-0 animate-fade-in delay-300">
          <div
            className="h-full rounded-full transition-all duration-200 ease-out"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'var(--gradient-primary)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
