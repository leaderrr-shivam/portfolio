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
  'Neural Networks',
  'Reinforcement Learning',
  'Causal Inference',
  'Time Series Analysis',
  'Model Optimization',
  'Model Deployment',
  'Computer Vision',
  'Natural Language Processing',
];

const bigData = ['Apache Spark (Basic)', 'Hadoop (Basic)'];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Technical Proficiency
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Skills
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical skillset developed through academic study and hands-on industry projects
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category) => (
              <div key={category.title} className="gradient-border card-glow p-6">
                <h4 className="font-bold text-lg mb-6 text-primary">{category.title}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="skill-bar h-2">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Concepts */}
          <div className="gradient-border card-glow p-6 mb-8">
            <h4 className="font-bold text-lg mb-6 text-primary">Core Concepts</h4>
            <div className="flex flex-wrap gap-3">
              {concepts.map((concept) => (
                <span key={concept} className="tech-tag">
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Big Data */}
          <div className="gradient-border card-glow p-6">
            <h4 className="font-bold text-lg mb-6 text-primary">Big Data Technologies</h4>
            <div className="flex flex-wrap gap-3">
              {bigData.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
