import { Cpu, Eye, Brain, MessageSquare, Trophy, Leaf } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const projectsData = [
  {
    title: 'Plant DocBot – AI-Enabled Plant Disease Diagnosis',
    type: 'Infosys Springboard Internship 6.0 Project',
    icon: Leaf,
    description: 'AI-powered assistant that diagnoses plant diseases through both natural-language chat and leaf image analysis, providing actionable care recommendations.',
    highlights: [
      'Combined computer vision and conversational AI in a single diagnosis workflow',
      'Trained image classification model for common plant diseases',
      'Built chat interface for symptom-based guided diagnosis',
      'Delivered as part of Infosys Springboard mentored internship (B 8, 9 & 10)',
    ],
    technologies: ['Python', 'Computer Vision', 'CNN', 'NLP', 'Chatbot'],
  },
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
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Technical Portfolio
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">
              Projects
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Research-driven projects and industry internship deliverables demonstrating end-to-end ML implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={project.title}
                className={`card-premium p-7 md:p-8 group ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="icon-container w-14 h-14 flex-shrink-0">
                    <project.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                      {project.achievement && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/20">
                          <Trophy size={12} />
                          {project.achievement}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-primary/80 font-medium">{project.type}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-150" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
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
