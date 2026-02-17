import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, Clock, ArrowUpRight, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const blogPost = {
  title: 'The End of the Scaling Era — and What Replaces It',
  excerpt:
    'For roughly a decade, the central bet in AI was deceptively simple: make the model bigger, feed it more data, throw more compute at it — and intelligence would follow. Now it doesn\'t. This blog is about what the slowdown reveals.',
  date: '2026-02-17',
  readTime: '10 min read',
  tags: ['AI Strategy', 'Scaling Laws', 'LLMs', 'Infrastructure'],
  series: 'Intelligence Shifts',
  content: `## The Engine Ran. Then It Didn't.

For roughly a decade, the central bet in AI was deceptively simple: make the model bigger, feed it more data, throw more compute at it — and intelligence would follow. This wasn't just a research hypothesis. It became a capital thesis, an infrastructure roadmap, a hiring strategy, and the foundational assumption behind some of the largest corporate investments in history.

It worked. Spectacularly, for a while.

Now it doesn't — not in the way it once did. And the way an industry responds to the exhaustion of its primary growth mechanism tells you everything about what the next decade will look like.

---

## Contextual Grounding: What Actually Happened

Scaling laws — the empirical observation that model performance improves predictably with increases in compute, data, and parameter count — weren't a theory first. They were a measured pattern. OpenAI's 2020 Kaplan et al. paper codified what practitioners had already intuited: there was a power-law relationship between resources and capability, and it held across many orders of magnitude.

The problem with power laws is embedded in their definition. They describe diminishing marginal returns by design. The closer you approach the compute-efficient frontier, the more expensive each incremental gain becomes. You don't hit a wall. You hit a gradient that keeps steepening.

By late 2024, this gradient had become visible enough that Ilya Sutskever said publicly what insiders had known privately: pretraining as we know it will end. The data simply isn't growing fast enough. The internet has been read. The web has been scraped.

By 2025, OpenAI had already shifted its internal compute allocation: mid-training and reinforcement learning were consuming 70–80% of total training compute — more than pretraining itself. That's not an incremental adjustment. That's a structural reorganization of how intelligence gets built.

---

## The Deep Shift: From Construction to Cultivation

The first era of modern AI was an **extraction economy**. The primary operation was: expose a large model to as much of human knowledge as possible and let statistical patterns self-organize into general capability. Intelligence was treated as something you could mine from data at sufficient scale.

That endowment is now largely exhausted at the frontier. What's replacing it is something fundamentally different: **cultivation**. Instead of passively absorbing patterns from existing human output, the new paradigm actively generates, filters, verifies, and reinforces targeted capabilities.

The shift sounds technical. Its implications are structural. Because cultivation requires intent in a way extraction doesn't. You have to know what you're trying to build. Intelligence is no longer something that emerges from scale alone — it's something that must be directed.

---

## The Technical Architecture of the New Curve

Three mechanisms are bearing most of the forward progress weight in 2026:

**Test-time compute scaling** — spending more compute during inference, allowing the model to reason through chains of thought rather than produce immediate outputs — reframes how capability gets unlocked. Intelligence is increasingly a function of *how much time and compute you give a problem*, not just what the model intrinsically knows.

**Post-training specialization** — the combination of fine-tuning, RLHF, and synthetic data pipelines applied after the base model is trained — has become the primary competitive surface. The base model is increasingly a commodity. What differentiates systems is what happens after.

**Mixture-of-Experts architectures** quietly changed the tradeoff surface. By activating only a subset of parameters per inference, MoE allows models to grow in total capacity without proportionally increasing compute costs.

---

## Hidden Implications: The Cascading Effects Nobody Is Pricing

**The geography of advantage shifts inward.** When the primary driver becomes post-training craft, the advantage belongs to organizations with deep domain knowledge, not necessarily deep pockets.

**The verification problem becomes central.** Post-training paradigms require verifiable reward signals. The most valuable AI applications in the near term are the ones where you can define and measure correctness precisely.

**Foundation models are becoming infrastructure, not products.** The strategic question for builders is not "which foundation model is best" but "what can I build on top of a general substrate that is hard to replicate and compounds over time."

---

## What This Means for Builders

The builders who will make asymmetric gains in the next phase are the ones who understand that capability now requires intent. You cannot wait for the model to get smarter. You have to know precisely what you need it to do.

Invest in evaluation infrastructure before you invest in model capability. Build data flywheels that generate verified training signal from your users' actual workflows. Think carefully about which layer of the stack you own.

Finally, resist the temptation to treat test-time compute as a free lunch. The best systems will know when to think slowly and when to move fast. That metacognitive layer is not something the model solves automatically. It's something builders design.

---

## Closing Reflection

For a decade, the question was: *how much?* How much compute, how much data, how much scale. The answer was always: more.

The question now is different: *how well?* How well do we understand the domain we're building for? How well can we specify what good looks like? How well can we direct intelligence toward a particular capability rather than hoping it emerges?

The scaling era gave us general capability at scale. What comes next is the work of turning that capability into something precise, reliable, and genuinely useful. That work is less dramatic. It is also more important.

The engine has shifted. The road ahead requires a different kind of driver.`,
};

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

const renderMarkdown = (md: string) => {
  return md.split('\n\n').map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed === '---') {
      return <hr key={i} className="border-border/30 my-6" />;
    }

    if (trimmed.startsWith('## ')) {
      return (
        <h4 key={i} className="text-xl font-display font-bold mt-8 mb-4 text-foreground">
          {trimmed.replace('## ', '')}
        </h4>
      );
    }

    // Process inline markdown
    const processInline = (text: string) => {
      const parts: (string | JSX.Element)[] = [];
      let remaining = text;
      let keyIdx = 0;

      while (remaining.length > 0) {
        // Bold + italic
        const boldItalicMatch = remaining.match(/\*\*\*(.*?)\*\*\*/);
        const boldMatch = remaining.match(/\*\*(.*?)\*\*/);
        const italicMatch = remaining.match(/\*(.*?)\*/);

        let firstMatch: { index: number; length: number; content: string; type: string } | null = null;

        if (boldItalicMatch && boldItalicMatch.index !== undefined) {
          firstMatch = { index: boldItalicMatch.index, length: boldItalicMatch[0].length, content: boldItalicMatch[1], type: 'boldItalic' };
        }
        if (boldMatch && boldMatch.index !== undefined && (!firstMatch || boldMatch.index < firstMatch.index)) {
          firstMatch = { index: boldMatch.index, length: boldMatch[0].length, content: boldMatch[1], type: 'bold' };
        }
        if (italicMatch && italicMatch.index !== undefined && (!firstMatch || italicMatch.index < firstMatch.index)) {
          if (!boldMatch || italicMatch.index !== boldMatch.index) {
            firstMatch = { index: italicMatch.index, length: italicMatch[0].length, content: italicMatch[1], type: 'italic' };
          }
        }

        if (!firstMatch) {
          parts.push(remaining);
          break;
        }

        if (firstMatch.index > 0) {
          parts.push(remaining.substring(0, firstMatch.index));
        }

        if (firstMatch.type === 'boldItalic') {
          parts.push(<strong key={keyIdx} className="font-bold italic text-foreground">{firstMatch.content}</strong>);
        } else if (firstMatch.type === 'bold') {
          parts.push(<strong key={keyIdx} className="font-semibold text-foreground">{firstMatch.content}</strong>);
        } else {
          parts.push(<em key={keyIdx} className="italic text-primary/80">{firstMatch.content}</em>);
        }

        keyIdx++;
        remaining = remaining.substring(firstMatch.index + firstMatch.length);
      }

      return parts;
    };

    return (
      <p key={i} className="text-sm md:text-[0.935rem] text-muted-foreground leading-[1.8] mb-4">
        {processInline(trimmed)}
      </p>
    );
  });
};

const Blog = () => {
  const sectionRef = useScrollReveal();
  const [expanded, setExpanded] = useState(false);

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
            <article className="card-premium p-6 md:p-8">
              {/* Header */}
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

              {/* Excerpt / Content */}
              {!expanded ? (
                <>
                  <p className="text-sm md:text-[0.935rem] text-muted-foreground leading-[1.8] mb-6">
                    {blogPost.excerpt}
                  </p>
                  <button
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    Read full article <ChevronDown size={16} />
                  </button>
                </>
              ) : (
                <>
                  <div className="border-t border-border/30 pt-6">
                    {renderMarkdown(blogPost.content)}
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/30 flex items-center justify-between">
                    <p className="text-xs text-muted-foreground/50 italic max-w-md">
                      Intelligence Shifts is a long-term body of work analyzing AI as structural inflection points — written for builders who want to understand what's actually changing.
                    </p>
                    <button
                      onClick={() => setExpanded(false)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                    >
                      Collapse <ChevronUp size={16} />
                    </button>
                  </div>
                </>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
