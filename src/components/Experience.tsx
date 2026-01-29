import { Briefcase, Building2, Users, CheckCircle2 } from 'lucide-react';

const experienceData = [
  {
    role: 'AI Intern',
    company: 'TCS iON (RIO 210 Program)',
    period: 'Sep 2025 – Dec 2025',
    type: 'Remote Internship',
    project: 'Sentiment Detection System',
    highlights: [
      'Built sentiment detection system for paragraph-level text analysis',
      'Automated sentiment prediction workflows for scalable processing',
      'Industry-mentored, credit-based internship with structured deliverables',
    ],
  },
  {
    role: 'AI Intern',
    company: 'TCS iON (RIO 125 Program)',
    period: 'Mar 2025 – May 2025',
    type: 'Remote Internship',
    project: 'Automate Extraction of Handwritten Text from an Image',
    highlights: [
      'Built end-to-end OCR pipeline for handwritten text extraction',
      'Tested AI workflows and documented system pipelines',
      'Identified technical issues and proposed optimization strategies',
      'Demonstrated ownership, time management, and adaptability in remote setting',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'Edunet Foundation (TechSaksham – Microsoft & SAP CSR)',
    period: 'Nov 2024 – Dec 2024',
    type: 'Remote Internship',
    project: 'DRSTIGYAN Image Classification Model',
    highlights: [
      'Built custom CNN architecture for multi-class image classification',
      'Applied ML concepts in guided industry projects with mentorship',
      'Strengthened documentation and collaboration skills',
      'Followed professional delivery standards and best practices',
    ],
  },
  {
    role: 'Computer Science Tutor',
    company: 'Course Hero (Freelance)',
    period: 'Sep 2024 – Present',
    type: 'Freelance',
    highlights: [
      'Supported 60+ international learners in CS fundamentals',
      'Provided chat-based problem solving with clear explanations',
      'Maintained 80%+ positive feedback rating',
      'Developed empathetic communication and teaching methodology',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Professional Journey
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Experience
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remote-first professional experience through industry-backed programs and freelance work
            </p>
          </div>

          {/* Experience cards */}
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="gradient-border card-glow p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      {exp.type === 'Freelance' ? (
                        <Users className="w-7 h-7 text-primary" />
                      ) : (
                        <Building2 className="w-7 h-7 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full mb-2">
                          {exp.type}
                        </span>
                        <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      </div>
                    </div>

                    {exp.project && (
                      <div className="mb-4 p-3 bg-secondary/50 rounded-lg border border-border">
                        <p className="text-sm">
                          <span className="text-muted-foreground">Project: </span>
                          <span className="font-medium">{exp.project}</span>
                        </p>
                      </div>
                    )}

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
