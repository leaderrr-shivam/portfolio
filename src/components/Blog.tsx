import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react';

const articles = [
  {
    title: 'Building Autonomous AI Agents: Architecture & Lessons Learned',
    excerpt:
      'A deep dive into designing multi-step autonomous agents using LLMs, tool-use patterns, and memory management for real-world automation tasks.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['LLMs', 'Agents', 'Python'],
    link: '#',
  },
  {
    title: 'OCR Systems Beyond Tesseract: Custom Deep Learning Pipelines',
    excerpt:
      'How I built a production-grade handwritten text recognition system using CNNs and CTC loss, achieving 94%+ accuracy on noisy document inputs.',
    date: '2025-11-20',
    readTime: '6 min read',
    tags: ['Computer Vision', 'Deep Learning', 'OCR'],
    link: '#',
  },
  {
    title: 'Sentiment Analysis at Scale: From Research to Deployment',
    excerpt:
      'End-to-end walkthrough of training transformer-based sentiment models, optimizing inference latency, and deploying via Streamlit for stakeholder demos.',
    date: '2025-09-10',
    readTime: '7 min read',
    tags: ['NLP', 'Transformers', 'Deployment'],
    link: '#',
  },
];

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

const Blog = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="blog" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Insights
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">Blog & Articles</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical write-ups and project deep-dives showcasing thought leadership in AI/ML
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="card-premium p-6 flex flex-col group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground/70 mono">{formatDate(article.date)}</span>
                </div>

                <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {article.title}
                </h4>

                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tech-tag text-[0.65rem]">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground/60 pt-4 border-t border-border/30">
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all duration-300">
                    Read more <ArrowUpRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
