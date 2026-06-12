import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight, Search, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | TechZen Enterprise",
  description: "Read our latest articles on enterprise software development, system architecture, and engineering leadership.",
};

const categories = ["All", "Web Development", "React", "Cloud", "Startups", "Engineering Leadership"];

const posts = [
  {
    slug: "scaling-nextjs-enterprise",
    title: "Scaling Next.js for Enterprise SaaS",
    category: "React",
    date: "Jun 12, 2026",
    readTime: "8 min read",
    description: "Discover the architectural patterns we use to scale Next.js applications to support millions of active users without compromising performance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "migrating-to-kubernetes",
    title: "The Pragmatic Guide to Kubernetes Migration",
    category: "Cloud",
    date: "May 28, 2026",
    readTime: "12 min read",
    description: "A step-by-step walkthrough of how we migrated a legacy logistics monolith to a resilient Kubernetes cluster with zero downtime.",
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "building-engineering-culture",
    title: "Building an Engineering Culture that Retains Talent",
    category: "Engineering Leadership",
    date: "Apr 15, 2026",
    readTime: "6 min read",
    description: "Why ping-pong tables don't matter, and what engineers actually care about when choosing to stay at a company.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionHeading 
              title="Blog & Insights" 
              subtitle="Engineering Notes" 
              alignment="left"
              className="mb-0"
            />
          </div>
          
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[var(--color-muted)]" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              className="block w-full pl-10 pr-3 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text)] placeholder-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-12 hide-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${i === 0 ? "bg-[var(--color-text)] text-[var(--color-background)]" : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden relative border-b border-[var(--color-border)]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-[var(--color-background)]/90 backdrop-blur text-[var(--color-text)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[var(--color-border)]">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-[var(--color-muted)] mb-4">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[var(--color-muted)] line-clamp-3 mb-6 flex-grow">
                  {post.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[var(--color-text)] font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
