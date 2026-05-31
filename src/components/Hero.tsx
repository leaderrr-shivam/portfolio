import { Github, Linkedin, FileText, ArrowDown, Sparkles, Eye } from 'lucide-react';
import ResumeModal from './ResumeModal';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-float delay-300" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full floating-badge mb-10 opacity-0 animate-fade-in-up">
            <span className="relative w-2 h-2 rounded-full bg-emerald-500 status-dot" />
            <span className="text-sm text-muted-foreground font-medium tracking-wide">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
            <span className="text-gradient font-display tracking-tight">Shivam Singh</span>
            <span className="sr-only"> — AI/ML Engineer Portfolio</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
            <span className="text-gradient-warm font-semibold">AI Engineer</span>
            <span className="mx-3 text-border">|</span>
            Machine Learning & Data Analytics Professional
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-300">
            AI-focused engineer with hands-on experience in machine learning, autonomous agents,
            OCR systems, and data analytics through industry-backed remote internships
            and research-driven projects.
          </p>

          <p className="text-sm text-muted-foreground/70 mb-12 opacity-0 animate-fade-in-up delay-300 flex items-center justify-center gap-2">
            <span className="text-primary">📍</span>
            <span className="mono">Rewa, Madhya Pradesh, India</span>
            <span className="text-border">·</span>
            <span>Remote-ready</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-20 opacity-0 animate-fade-in-up delay-400">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2 group">
              <Sparkles size={16} className="group-hover:animate-pulse" />
              View Projects
            </a>
            <ResumeModal
              trigger={
                <button className="btn-outline inline-flex items-center gap-2">
                  <Eye size={16} />
                  View Resume
                </button>
              }
            />
            <a
              href="https://www.linkedin.com/in/leaderrr-shivam"
              className="btn-outline inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/leaderrr-shivam"
              className="btn-outline inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          <div className="opacity-0 animate-fade-in delay-500">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground/60 hover:text-primary transition-colors duration-300 group"
            >
              <span className="text-xs mb-3 tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5 group-hover:border-primary transition-colors">
                <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
