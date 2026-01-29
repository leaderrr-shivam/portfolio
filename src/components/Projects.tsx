import { ExternalLink, Github, Cpu, Eye, Brain, MessageSquare } from 'lucide-react';

const projectsData = [
  {
    title: 'Agentic AI: Exploring the Rise of Autonomous AI Agents',
    type: 'Final Year Research Project',
    icon: Brain,
    description: 'Comprehensive research on LLM-based autonomous agents, exploring task chaining, memory modules, and multi-agent collaboration patterns.',
    highlights: [
      'Analyzed Auto-GPT, BabyAGI, and LangChain agent architectures',
      'Investigated ethical implications and scalability challenges',
      'Predicted ~45% automation potential for knowledge work tasks',
    ],
    technologies: ['LangChain', 'Auto-GPT', 'LLMs', 'Python', 'Research'],
    featured: true,
  },
  {
    title: 'Automated Handwritten Text Extraction System',
    type: 'TCS iON RIO 125 Internship Project',
    icon: Eye,
    description: 'End-to-end OCR pipeline for extracting text from handwritten documents with preprocessing and error analysis.',
    highlights: [
      'Implemented image preprocessing pipeline for noise reduction',
      'Integrated Tesseract OCR with custom configurations',
      'Analyzed failure modes and documented improvement strategies',
    ],
    technologies: ['Python', 'OpenCV', 'Tesseract OCR', 'NumPy'],
  },
  {
    title: 'DRSTIGYAN – Image Classification System',
    type: 'Edunet Foundation Project',
    icon: Cpu,
    description: 'Custom CNN architecture achieving 87% validation accuracy on CIFAR-100 dataset for multi-class image classification.',
    highlights: [
      'Designed and trained custom CNN architecture from scratch',
      'Achieved 87% validation accuracy on 100-class dataset',
      'Invited for showcase at OpenCV Expo 2024 (Ready Tensor)',
    ],
    technologies: ['PyTorch', 'CNN', 'CIFAR-100', 'Deep Learning'],
    achievement: 'OpenCV Expo 2024 Showcase',
  },
  {
    title: 'Sentiment Detection System',
    type: 'TCS iON RIO 210 Internship Project',
    icon: MessageSquare,
    description: 'Paragraph-level sentiment analysis system with automated prediction workflows for scalable text processing.',
    highlights: [
      'Built NLP pipeline for sentiment classification',
      'Automated prediction workflows for batch processing',
      'Implemented model evaluation and performance metrics',
    ],
    technologies: ['Python', 'NLP', 'Scikit-learn', 'NLTK'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Technical Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Projects
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Research-driven projects and industry internship deliverables demonstrating end-to-end ML implementation
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className={`gradient-border card-glow p-6 md:p-8 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      {project.achievement && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          🏆 {project.achievement}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-primary font-medium">{project.type}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
