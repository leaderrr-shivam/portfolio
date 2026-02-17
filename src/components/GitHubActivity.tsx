import { useState, useEffect } from 'react';
import { Github, GitCommit, GitPullRequest, Star, GitFork, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string; url: string };
  created_at: string;
  payload: any;
}

const GITHUB_USERNAME = 'leaderrr-shivam';

const getEventIcon = (type: string) => {
  switch (type) {
    case 'PushEvent': return GitCommit;
    case 'PullRequestEvent': return GitPullRequest;
    case 'WatchEvent': return Star;
    case 'ForkEvent': return GitFork;
    default: return Github;
  }
};

const getEventDescription = (event: GitHubEvent) => {
  switch (event.type) {
    case 'PushEvent':
      const commitCount = event.payload.size || event.payload.distinct_size || event.payload.commits?.length || 0;
      return commitCount > 0
        ? `Pushed ${commitCount} commit${commitCount !== 1 ? 's' : ''} to`
        : 'Pushed to';
    case 'PullRequestEvent':
      return `${event.payload.action} a pull request in`;
    case 'CreateEvent':
      return `Created ${event.payload.ref_type} in`;
    case 'WatchEvent':
      return 'Starred';
    case 'ForkEvent':
      return 'Forked';
    case 'IssuesEvent':
      return `${event.payload.action} an issue in`;
    default:
      return 'Activity in';
  }
};

const timeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
};

const GitHubActivity = () => {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error();
        setEvents(data.slice(0, 3));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="github" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto px-6 relative" ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full mb-4">
              Open Source
            </span>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-5">
              GitHub Activity
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Recent contributions and open source activity
            </p>
          </div>

          {loading ? (
            <div className="grid gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="card-premium p-5 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-secondary rounded w-3/4" />
                      <div className="h-3 bg-secondary rounded w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="card-premium p-8 text-center">
              <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">Unable to load GitHub activity right now.</p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          ) : events.length === 0 ? (
            <div className="card-premium p-8 text-center">
              <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">No recent public activity.</p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <Github size={16} />
                View Profile
              </a>
            </div>
          ) : (
            <>
              <div className="grid gap-4">
                {events.map((event) => {
                  const Icon = getEventIcon(event.type);
                  return (
                    <div key={event.id} className="card-premium p-5 group">
                      <div className="flex items-center gap-4">
                        <div className="icon-container w-10 h-10 flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">
                            <span className="text-muted-foreground">{getEventDescription(event)}</span>{' '}
                            <a
                              href={`https://github.com/${event.repo.name}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {event.repo.name.split('/')[1] || event.repo.name}
                            </a>
                          </p>
                          <p className="text-xs text-muted-foreground/60 font-mono mt-1">{timeAgo(event.created_at)}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-10">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2 text-sm"
                >
                  <Github size={16} />
                  View Full Profile
                  <ExternalLink size={14} />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
