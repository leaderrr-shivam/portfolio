import { Brain, Code, Users, FileCheck } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Specialization',
    description: 'Deep expertise in neural networks, computer vision, NLP, and autonomous agents.',
  },
  {
    icon: Code,
    title: 'Research Mindset',
    description: 'Systematic approach to problem-solving with strong documentation practices.',
  },
  {
    icon: Users,
    title: 'Remote-First Experience',
    description: 'Proven ability to deliver in distributed teams with clear communication.',
  },
  {
    icon: FileCheck,
    title: 'Industry Standards',
    description: 'Trained through structured industry programs (TCS, Microsoft, SAP).',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Professional Summary
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Building Intelligent Systems
            </h3>
          </div>

          {/* Summary text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an AI Engineer with a strong foundation in machine learning and data analytics, 
              I bring a research-oriented mindset combined with practical industry experience. 
              My journey through structured programs at TCS iON, Microsoft-SAP TechSaksham, 
              and IIT Guwahati has equipped me with the technical rigor and professional 
              discipline required for enterprise AI development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              I specialize in developing end-to-end ML systems—from data preprocessing and 
              model architecture to deployment. My experience spans computer vision, 
              natural language processing, and the emerging field of autonomous AI agents. 
              I thrive in remote-first environments, bringing self-discipline, clear 
              communication, and consistent delivery to every project.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="gradient-border card-glow p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
