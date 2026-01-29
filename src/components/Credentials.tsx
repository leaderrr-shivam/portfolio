import { Award, ExternalLink, CheckCircle } from 'lucide-react';

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
    <section id="credentials" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Verified Achievements
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Credentials
            </h3>
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="gradient-border card-glow p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 text-2xl">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.hours && (
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded">
                      {cert.hours}
                    </span>
                  )}
                </div>
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="gradient-border card-glow p-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-bold mb-2">Professional Competencies</h4>
              <p className="text-muted-foreground">
                Core soft skills developed through remote-first work experience
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{skill}</span>
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
