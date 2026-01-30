import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Bertelsmann / Udacity',
    icon: '🎓',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Coursera',
    icon: '🔷',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft & LinkedIn',
    icon: '💼',
  },
  {
    title: 'TCS iON Remote Internship (RIO 125)',
    issuer: 'TCS iON',
    hours: '125 hrs',
    icon: '🏢',
  },
  {
    title: 'TCS iON Remote Internship (RIO 210)',
    issuer: 'TCS iON',
    hours: '210 hrs',
    icon: '🏢',
  },
  {
    title: 'Microsoft–SAP TechSaksham Internship',
    issuer: 'Edunet Foundation',
    icon: '🤝',
  },
];

const softSkills = [
  'Analytical Thinking',
  'Technical Communication',
  'Self-Discipline',
  'Documentation Excellence',
  'Distributed Team Collaboration',
  'Attention to Detail',
  'Problem-Solving',
  'Time Management',
];

const Credentials = () => {
  return (
    <section id="credentials" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Verified Achievements
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold">
              Certifications & Credentials
            </h3>
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="card-premium p-6 flex items-start gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 text-2xl transition-transform duration-300 group-hover:scale-110">
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.hours && (
                    <span className="inline-block mt-2 px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary rounded-md border border-primary/20">
                      {cert.hours}
                    </span>
                  )}
                </div>
                <Award className="w-5 h-5 text-primary/50 flex-shrink-0 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="card-premium p-8">
            <div className="text-center mb-10">
              <h4 className="text-xl font-display font-bold mb-3">Professional Competencies</h4>
              <p className="text-muted-foreground">
                Core soft skills developed through remote-first work experience
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border/30 hover-lift group"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
