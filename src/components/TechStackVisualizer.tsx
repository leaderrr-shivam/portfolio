import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = [
  {
    name: 'Languages',
    tools: ['Python', 'SQL', 'C'],
    color: 'hsl(35 90% 55%)',
  },
  {
    name: 'ML / AI',
    tools: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'CNNs', 'LLMs', 'NLP'],
    color: 'hsl(25 85% 50%)',
  },
  {
    name: 'Data',
    tools: ['Pandas', 'NumPy', 'Excel', 'Matplotlib'],
    color: 'hsl(15 80% 45%)',
  },
  {
    name: 'Tools',
    tools: ['Git', 'Jupyter', 'Streamlit', 'Flask', 'MATLAB'],
    color: 'hsl(40 80% 55%)',
  },
  {
    name: 'Big Data',
    tools: ['Apache Spark', 'Hadoop'],
    color: 'hsl(30 75% 50%)',
  },
];

const TechStackVisualizer = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useScrollReveal();

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Ecosystem
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">Tech Stack</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interactive overview of my technical ecosystem and tool proficiency
            </p>
          </div>

          {/* Central hub layout */}
          <div className="relative flex flex-col items-center">
            {/* Core label */}
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center mb-12 cursor-pointer transition-all duration-500 border-2 border-primary/30 relative"
              style={{
                background: 'var(--gradient-primary)',
                boxShadow: 'var(--glow-primary)',
              }}
            >
              <span className="text-primary-foreground font-bold text-sm tracking-wide">AI / ML</span>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
            </div>

            {/* Category orbits */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.name;
                return (
                  <div key={cat.name} className="flex flex-col items-center">
                    <button
                      onClick={() => setActiveCategory(isActive ? null : cat.name)}
                      className={`card-premium px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 w-full text-center ${
                        isActive ? 'border-primary/50 scale-105' : ''
                      }`}
                      style={{
                        boxShadow: isActive ? `0 0 24px ${cat.color}30` : undefined,
                      }}
                    >
                      <span className={isActive ? 'text-primary' : 'text-foreground'}>
                        {cat.name}
                      </span>
                    </button>

                    {/* Tools dropdown */}
                    <div
                      className={`flex flex-wrap justify-center gap-2 mt-3 transition-all duration-300 overflow-hidden ${
                        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {cat.tools.map((tool) => (
                        <span
                          key={tool}
                          className="tech-tag text-xs animate-scale-in"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hint text */}
            <p className="text-xs text-muted-foreground/50 mt-8 text-center">
              Click a category to explore tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackVisualizer;
