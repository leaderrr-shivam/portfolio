import { useState } from 'react';
import { Download, Mail, Linkedin, Github, MapPin, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import faviconImg from '/favicon.ico';

const generateVCard = () => {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Shivam Singh
N:Singh;Shivam;;;
TITLE:AI Engineer
EMAIL;TYPE=INTERNET:shivam01511@gmail.com
URL:https://github.com/leaderrr-shivam
URL;TYPE=HOME:https://shivamaiportfolio.lovable.app
ADR;TYPE=HOME:;;Rewa;Madhya Pradesh;;India
NOTE:AI Engineer specializing in Machine Learning, Deep Learning, NLP, and OCR systems.
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Shivam_Singh.vcf';
  a.click();
  URL.revokeObjectURL(url);
};

const BusinessCard = () => {
  const [flipped, setFlipped] = useState(false);
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Quick Connect
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">Business Card</h3>
            <p className="text-muted-foreground text-sm">Tap to flip · Download contact info with one click</p>
          </div>

          {/* 3D Flip Card */}
          <div
            className="cursor-pointer mx-auto"
            style={{ maxWidth: '420px', aspectRatio: '1.75/1', perspective: '1000px' }}
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className="relative w-full h-full transition-transform duration-700"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between overflow-hidden border border-border/30"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  zIndex: flipped ? 0 : 1,
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-elevated), var(--shadow-glow)',
                }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[80px]" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-[60px]" />

                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <h4 className="text-xl font-display font-bold">
                      <span className="text-gradient-warm">S</span>hivam Singh
                    </h4>
                    <p className="text-xs text-primary font-medium tracking-wide mt-1">AI Engineer</p>
                  </div>
                  <img
                    src={faviconImg}
                    alt="Logo"
                    className="w-10 h-10 rounded-lg"
                  />
                </div>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin size={10} className="text-primary" />
                    <span>Rewa, MP, India</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Globe size={10} className="text-primary" />
                    <span>Remote-ready</span>
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-2xl p-7 flex flex-col justify-between overflow-hidden border border-border/30"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  zIndex: flipped ? 1 : 0,
                  background: 'var(--gradient-card)',
                  boxShadow: 'var(--shadow-elevated), var(--shadow-glow)',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'var(--gradient-primary)' }} />

                <div className="space-y-3 relative z-10 pt-2">
                  <a href="mailto:shivam01511@gmail.com" onClick={(e) => e.stopPropagation()} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={14} className="text-primary" />
                    shivam01511@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/leaderrr-shivam" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={14} className="text-primary" />
                    linkedin.com/in/leaderrr-shivam
                  </a>
                  <a href="https://github.com/leaderrr-shivam" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={14} className="text-primary" />
                    github.com/leaderrr-shivam
                  </a>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    generateVCard();
                  }}
                  className="btn-primary flex items-center justify-center gap-2 text-sm py-2.5 w-full relative z-10"
                >
                  <Download size={14} />
                  Save Contact (vCard)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;
