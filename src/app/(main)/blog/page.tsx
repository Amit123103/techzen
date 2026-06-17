import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight, Search, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | ReInformTech Enterprise",
  description: "Read our latest articles on enterprise software development, system architecture, and engineering leadership.",
};

const categories = ["All", "SaaS", "AI & Automation", "Startups", "Business Tools", "Technology"];

const posts = [
  {
    slug: "cost-to-build-saas-2026",
    title: "How Much Does It Cost to Build a SaaS Product in 2026?",
    category: "SaaS",
    date: "Jun 15, 2026",
    readTime: "10 min read",
    description: "A realistic breakdown of SaaS development costs — from MVP to full product. We cover tech stack choices, hosting, team size, and what most agencies won't tell you about hidden costs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "ai-automation-small-business",
    title: "AI Automation for Small Businesses: A Practical Guide",
    category: "AI & Automation",
    date: "Jun 10, 2026",
    readTime: "8 min read",
    description: "You don't need a data science team to use AI. Here's how small businesses are using ChatGPT, automation scripts, and smart tools to save 5+ hours daily on repetitive work.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "erp-vs-excel",
    title: "ERP vs Excel: When Should Your Business Make the Switch?",
    category: "Business Tools",
    date: "Jun 5, 2026",
    readTime: "6 min read",
    description: "Excel works until it doesn't. Learn the signs that your business has outgrown spreadsheets, and how a custom ERP can reduce errors by 80% and save your team hours every week.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "how-to-build-mvp-on-budget",
    title: "How to Build an MVP on a Budget (Without Cutting Corners)",
    category: "Startups",
    date: "May 28, 2026",
    readTime: "9 min read",
    description: "Building an MVP doesn't mean building a bad product. Here's our step-by-step guide to shipping a quality MVP in 6–8 weeks without blowing your budget.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    slug: "startup-tech-stack-guide-2026",
    title: "Choosing the Right Tech Stack for Your Startup in 2026",
    category: "Technology",
    date: "May 20, 2026",
    readTime: "7 min read",
    description: "React vs Vue? Node.js vs Python? Supabase vs Firebase? We break down the top technology choices for startups and help you pick what actually matters for your specific use case.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <SectionHeading 
              title="Blog & Insights" 
              eyebrow="Engineering Notes" 
              align="left"
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
        <div className="flex overflow-x-auto gap-3 pb-4 mb-12 hide-scrollbar pointer-events-none select-none">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${i === 0 ? "bg-[var(--color-text)] text-[var(--color-background)]" : "bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-border)]"}`}
            >
              {cat}
            </div>
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
