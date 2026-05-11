import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GitCommit, FolderKanban, Award, Briefcase } from 'lucide-react';

const stats = [
  { icon: GitCommit, label: 'GitHub Contributions', value: 150, suffix: '+' },
  { icon: FolderKanban, label: 'Projects Completed', value: 8, suffix: '+' },
  { icon: Award, label: 'Certifications', value: 4, suffix: '' },
  { icon: Briefcase, label: 'Internships', value: 4, suffix: '' },
];

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const StatCard = ({ icon: Icon, label, value, suffix }: typeof stats[0]) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="card-premium p-6 text-center group">
      <div className="icon-container w-14 h-14 mx-auto mb-4">
        <Icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="text-3xl md:text-4xl font-bold font-display mb-2 text-gradient-warm">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  const sectionRef = useScrollReveal();
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
