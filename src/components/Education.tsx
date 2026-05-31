import { GraduationCap, Award } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    specialization: 'Data Analytics (TCS iON)',
    institution: 'Amity University Online',
    period: 'July 2022 – July 2025',
    cgpa: '8.38',
    description: 'Fully online degree emphasizing discipline, self-management, and digital collaboration. Coursework includes data structures, algorithms, database management, and analytics.',
    current: false,
  },
  {
    degree: 'Credit-Linked Program in AI/ML',
    specialization: 'Applied Artificial Intelligence',
    institution: 'Daksh Gurukul, IIT Guwahati',
    period: 'Mar 2025 – Jul 2026',
    description: 'Advanced program focusing on applied AI systems, machine learning methodologies, and industry-aligned learning with academic credits.',
    current: true,
  },
];

const Education = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />

      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Academic Background
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Education
            </h2>
          </div>

          <div className="relative">
            {educationData.map((edu, index) => (
              <div key={edu.degree} className="relative pl-12 pb-14 last:pb-0">
                {index < educationData.length - 1 && (
                  <div className="timeline-line" />
                )}
                <div className="absolute left-0 top-2">
                  <div className={`timeline-dot ${edu.current ? 'animate-pulse-glow' : ''}`} />
                </div>
                <div className="card-premium p-7 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="icon-container w-10 h-10">
                          <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        {edu.current && (
                          <span className="px-3 py-1 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/20">
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium ml-13">{edu.specialization}</p>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/80 rounded-lg border border-border/50 hover-lift">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-mono font-semibold text-sm">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2 ml-13">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/70 mb-4 font-mono ml-13">{edu.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed ml-13">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
