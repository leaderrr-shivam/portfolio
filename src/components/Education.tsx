import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    specialization: 'Data Analytics (TCS iON)',
    institution: 'Amity University Online',
    period: 'July 2022 – July 2025',
    cgpa: '8.31',
    description: 'Fully online degree emphasizing discipline, self-management, and digital collaboration. Coursework includes data structures, algorithms, database management, and analytics.',
    current: false,
  },
  {
    degree: 'Credit-Linked Program in AI/ML',
    specialization: 'Applied Artificial Intelligence',
    institution: 'Daksh Gurukul, IIT Guwahati',
    period: 'Mar 2025 – Mar 2026',
    description: 'Advanced program focusing on applied AI systems, machine learning methodologies, and industry-aligned learning with academic credits.',
    current: true,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Academic Background
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              Education
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {educationData.map((edu, index) => (
              <div key={edu.degree} className="relative pl-10 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < educationData.length - 1 && (
                  <div className="timeline-line" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1">
                  <div className={`timeline-dot ${edu.current ? 'animate-pulse-glow' : ''}`} />
                </div>

                {/* Content card */}
                <div className="gradient-border card-glow p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        {edu.current && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-primary font-medium">{edu.specialization}</p>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="font-mono font-semibold">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3 font-mono">{edu.period}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
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
