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
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Professional Summary
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Building <span className="text-gradient-warm">Intelligent</span> Systems
            </h3>
          </div>

          {/* Summary text */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As an AI Engineer with a strong foundation in machine learning and data analytics, 
              I bring a research-oriented mindset combined with practical industry experience. 
              My journey through structured programs at TCS iON, Microsoft-SAP TechSaksham, 
              and IIT Guwahati has equipped me with the technical rigor and professional 
              discipline required for enterprise AI development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-6">
              I specialize in developing end-to-end ML systems—from data preprocessing and 
              model architecture to deployment. My experience spans computer vision, 
              natural language processing, and the emerging field of autonomous AI agents. 
              I thrive in remote-first environments, bringing self-discipline, clear 
              communication, and consistent delivery to every project.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-premium p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-container w-14 h-14 mb-5">
                  <item.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
