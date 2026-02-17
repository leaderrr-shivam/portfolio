import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 80 },
      { name: 'C', level: 70 },
    ],
  },
  {
    title: 'Machine Learning & AI',
    skills: [
      { name: 'PyTorch', level: 85 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'CNNs / Deep Learning', level: 80 },
      { name: 'LLMs / NLP', level: 75 },
      { name: 'OCR Systems', level: 80 },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'Excel', level: 85 },
      { name: 'Data Visualization', level: 80 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Jupyter / Colab', level: 90 },
      { name: 'Streamlit', level: 75 },
      { name: 'Flask', level: 70 },
      { name: 'MATLAB', level: 65 },
    ],
  },
];

const concepts = [
  'Neural Networks', 'Reinforcement Learning', 'Causal Inference',
  'Time Series Analysis', 'Model Optimization', 'Model Deployment',
  'Computer Vision', 'Natural Language Processing',
];

const bigData = ['Apache Spark (Basic)', 'Hadoop (Basic)'];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={barRef} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{name}</span>
        <span className="text-xs text-muted-foreground/70 font-mono">{level}%</span>
      </div>
      <div className="skill-bar h-2.5 rounded-full">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Technical Proficiency
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">Skills</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skillset developed through academic study and hands-on industry projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category) => (
              <div key={category.title} className="card-premium p-7 group">
                <h4 className="font-bold text-lg mb-7 text-primary">{category.title}</h4>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card-premium p-7 mb-8">
            <h4 className="font-bold text-lg mb-7 text-primary">Core Concepts</h4>
            <div className="flex flex-wrap gap-3">
              {concepts.map((concept, index) => (
                <span key={concept} className="tech-tag" style={{ animationDelay: `${index * 50}ms` }}>
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div className="card-premium p-7">
            <h4 className="font-bold text-lg mb-7 text-primary">Big Data Technologies</h4>
            <div className="flex flex-wrap gap-3">
              {bigData.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
