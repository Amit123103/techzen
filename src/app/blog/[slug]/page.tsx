import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, Github } from "lucide-react";
import { notFound } from "next/navigation";

// Mock Data
const blogData: Record<string, any> = {
  "scaling-nextjs-enterprise": {
    title: "Scaling Next.js for Enterprise SaaS",
    category: "React",
    date: "Jun 12, 2026",
    readTime: "8 min read",
    author: {
      name: "Elena Rodriguez",
      role: "Lead Frontend Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <h2>The Enterprise Challenge</h2>
      <p>When building SaaS applications for enterprise clients, the requirements shift dramatically. It's no longer just about building features; it's about building resilient, performant, and highly secure architectures. At TechZen, we've standardized on Next.js for our enterprise React applications. Here's how we scale it.</p>
      
      <h3>1. Static Site Generation (SSG) vs Server-Side Rendering (SSR)</h3>
      <p>One of the biggest mistakes we see is over-utilizing SSR. While Next.js makes SSR incredibly easy, it comes with a massive performance overhead on the server. We strictly enforce SSG with Incremental Static Regeneration (ISR) for anything that isn't highly personalized or real-time.</p>
      
      <h3>2. Edge Computing Middleware</h3>
      <p>We leverage Next.js Middleware running on Edge networks to handle authentication checks, A/B testing, and internationalization routing before the request even hits our Node.js servers. This reduces latency by up to 60%.</p>
      
      <blockquote>
        "The fastest server response is the one that never hits your origin server."
      </blockquote>
      
      <h3>3. State Management at Scale</h3>
      <p>For complex state, we abandoned Redux long ago. Our current stack utilizes React Query for server state (caching, deduping, background fetching) and Zustand for the minimal amount of global client state needed (like UI toggles).</p>
      
      <h2>Conclusion</h2>
      <p>Scaling Next.js is about understanding the boundaries of where computation should happen: Build time, Edge, Server, or Client. Getting that balance right is what separates an MVP from an enterprise-grade product.</p>
    `,
    tags: ["Next.js", "React", "Architecture", "Performance"]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = blogData[params.slug];
  if (!data) return { title: "Not Found" };
  return { title: `${data.title} | TechZen Blog` };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug];
  
  if (!post) {
    notFound(); // Typically you would want to render the other posts here but just for demo
  }

  return (
    <article className="pt-32 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--color-accent)] tracking-wider uppercase">{post.category}</span>
            <span className="text-[var(--color-muted)] font-medium">|</span>
            <span className="text-sm font-medium text-[var(--color-muted)]">{post.date}</span>
            <span className="text-[var(--color-muted)] font-medium">|</span>
            <span className="text-sm font-medium text-[var(--color-muted)] flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] tracking-tight mb-8">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between py-6 border-y border-[var(--color-border)] mb-12">
            <div className="flex items-center gap-4">
              <img src={post.author.image} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border border-[var(--color-border)]" />
              <div>
                <div className="font-bold text-[var(--color-text)]">{post.author.name}</div>
                <div className="text-sm text-[var(--color-muted)]">{post.author.role}</div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden h-[400px] md:h-[500px] mb-16 border border-[var(--color-border)]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Prose Content */}
          <div 
            className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-[var(--color-accent)] hover:prose-a:text-[var(--color-accent-hover)] prose-blockquote:border-l-[var(--color-accent)] prose-blockquote:bg-[var(--color-surface)] prose-blockquote:p-4 prose-blockquote:rounded-r-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content || "Content coming soon..." }}
          />

          <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted)] text-sm rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-muted)]">
              <Share2 className="w-4 h-4" /> Share this article
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
