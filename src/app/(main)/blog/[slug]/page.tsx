import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);


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
      <p>When building SaaS applications for enterprise clients, the requirements shift dramatically. It's no longer just about building features; it's about building resilient, performant, and highly secure architectures. At ReInformTech, we've standardized on Next.js for our enterprise React applications. Here's how we scale it.</p>
      
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = blogData[slug as keyof typeof blogData];
  if (!data) return { title: "Not Found" };
  return { title: `${data.title} | ReInformTech Blog` };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug as keyof typeof blogData];
  
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
                <TwitterIcon className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors">
                <LinkedinIcon className="w-4 h-4" />
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
