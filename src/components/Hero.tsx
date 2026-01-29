import { Github, Linkedin, FileText, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Available for Opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in-up delay-100">
            <span className="text-gradient">Shivam Singh</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 opacity-0 animate-fade-in-up delay-200">
            <span className="text-primary">AI Engineer</span> | Machine Learning & Data Analytics Professional
          </h2>

          {/* Value statement */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-in-up delay-300">
            AI-focused engineer with hands-on experience in machine learning, autonomous agents, 
            OCR systems, and data analytics through industry-backed remote internships 
            and research-driven projects.
          </p>

          {/* Location */}
          <p className="text-sm text-muted-foreground mb-10 opacity-0 animate-fade-in-up delay-300">
            <span className="mono">📍</span> Rewa, Madhya Pradesh, India · Remote-ready
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up delay-400">
            <a href="#projects" className="btn-primary inline-flex items-center gap-2">
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/Shivam_Singh_Resume_2026.pdf"
              className="btn-outline inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FileText size={16} />
              Download Resume
            </a>
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

          {/* Scroll indicator */}
          <div className="opacity-0 animate-fade-in delay-500">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs mb-2 tracking-wider uppercase">Scroll to explore</span>
              <ArrowDown size={20} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
