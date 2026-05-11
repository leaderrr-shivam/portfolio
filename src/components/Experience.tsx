import { Building2, Users, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const experienceData = [
  {
    role: 'AI Intern',
    company: 'Infosys Springboard (Internship 6.0)',
    period: 'Nov 2025 – Jan 2026',
    type: 'Remote Internship',
    project: 'Plant DocBot: AI-Enabled Plant Disease Diagnosis via Chat and Image Analysis',
    certificate: `${import.meta.env.BASE_URL}certificates/Shivam_Singh_Infosys_Springboard_PlantDocBot_Certificate.jpg`,
    highlights: [
      'Built an AI-enabled plant disease diagnosis system combining chat and image analysis',
      'Integrated computer vision models for leaf/plant disease classification',
      'Developed conversational interface for guided diagnosis and care recommendations',
      'Completed mandatory assignments under Infosys Springboard mentorship (B 8, 9 & 10)',
    ],
  },
  {
    role: 'AI Intern',
    company: 'TCS iON (RIO 210 Program)',
    period: 'Sep 2025 – Dec 2025',
    type: 'Remote Internship',
    project: 'Sentiment Detection System',
    certificate: `${import.meta.env.BASE_URL}certificates/Shivam_Singh_TCS_iON_Sentiment_Analysis_Certificate.pdf`,
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
    certificate: `${import.meta.env.BASE_URL}certificates/Shivam_Singh_TCS_iON_Handwritten_Text_Certificate.pdf`,
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
    certificate: `${import.meta.env.BASE_URL}certificates/Edunet_foundation_internship_certificate.pdf`,
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
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Professional Journey
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Experience
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Remote-first professional experience through industry-backed programs and freelance work
            </p>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="card-premium p-7 md:p-8 group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="icon-container w-16 h-16">
                      {exp.type === 'Freelance' ? (
                        <Users className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                      ) : (
                        <Building2 className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div>
                        <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{exp.role}</h4>
                        <p className="text-primary/90 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-secondary text-muted-foreground rounded-full mb-2 border border-border/50">
                          {exp.type}
                        </span>
                        <p className="text-sm text-muted-foreground/70 font-mono">{exp.period}</p>
                      </div>
                    </div>
                    {exp.project && (
                      <div className="mb-5 p-4 bg-secondary/50 rounded-xl border border-border/30 hover-lift">
                        <p className="text-sm">
                          <span className="text-muted-foreground">Project: </span>
                          <span className="font-medium text-foreground">{exp.project}</span>
                        </p>
                      </div>
                    )}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-muted-foreground group/item">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.certificate && (
                      <div className="mt-6 pt-5 border-t border-border/30">
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/btn gap-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                          onClick={() => window.open(exp.certificate, '_blank')}
                        >
                          <Award className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                          View Certificate
                          <ExternalLink className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                        </Button>
                      </div>
                    )}
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
