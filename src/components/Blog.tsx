import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPost = {
  title: 'The End of the Scaling Era — and What Replaces It',
  excerpt:
    'For roughly a decade, the central bet in AI was deceptively simple: make the model bigger, feed it more data, throw more compute at it — and intelligence would follow. Now it doesn\'t. This blog is about what the slowdown reveals.',
  date: '2026-02-17',
  readTime: '10 min read',
  tags: ['AI Strategy', 'Scaling Laws', 'LLMs', 'Infrastructure'],
  series: 'Intelligence Shifts',
};

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

          {/* Blog Card */}
          <div className="max-w-3xl mx-auto">
            <article className="card-premium p-6 md:p-8 group">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[0.65rem] font-semibold text-primary uppercase tracking-[0.15em] mono">
                  {blogPost.series}
                </span>
              </div>

              <h4 className="font-display font-bold text-xl md:text-2xl mb-4 leading-snug text-foreground">
                {blogPost.title}
              </h4>

              <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground/60">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {formatDate(blogPost.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {blogPost.readTime}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.tags.map((tag) => (
                  <span key={tag} className="tech-tag text-[0.65rem]">{tag}</span>
                ))}
              </div>

              <p className="text-sm md:text-[0.935rem] text-muted-foreground leading-[1.8] mb-6">
                {blogPost.excerpt}
              </p>

              <Link
                to="/blog/the-end-of-the-scaling-era"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
              >
                Read full article <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
