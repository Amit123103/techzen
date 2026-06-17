import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | ReInformTech – Real Projects, Real Results",
  description: "Explore our recent projects with real outcomes — from School ERP systems to AI-powered automation and custom web platforms.",
};

const caseStudies = [
  {
    slug: "school-erp-system",
    title: "School ERP System",
    client: "Educational Institution",
    industry: "Education / SaaS",
    problem: "The school was managing attendance, fees, and parent communication manually. Admins spent 60% of their time on repetitive paperwork.",
    solution: "We built a comprehensive ERP system with automated attendance, online fee collection, grade management, and real-time parent notifications via SMS and app.",
    results: [
      "Reduced admin workload by 60%",
      "Automated fee reminders saved ₹2L+ in overdue collections",
      "Real-time attendance tracking for 500+ students",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    duration: "8 weeks",
  },
  {
    slug: "reinformtech-website",
    title: "High-Conversion Business Website",
    client: "ReinformTech (Internal Project)",
    industry: "Technology / Agency",
    problem: "No professional online presence. Potential clients had no way to discover services, view work, or get in touch digitally.",
    solution: "Designed and developed a premium, SEO-optimized Next.js website with contact automation, live chat, testimonial system, and admin dashboard.",
    results: [
      "3x improvement in lead capture",
      "Sub-1s page load speed (Lighthouse 95+)",
      "Deployed on Cloudflare edge for global availability",
    ],
    tags: ["Next.js 16", "TypeScript", "Supabase", "Cloudflare Workers", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    duration: "4 weeks",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation Tool",
    client: "Internal R&D Project",
    industry: "AI / Productivity",
    problem: "Small businesses waste hours on repetitive tasks like data entry, email responses, and report generation.",
    solution: "Built an AI-powered automation tool that connects to existing business workflows, automatically categorizes emails, generates reports, and handles data processing.",
    results: [
      "Automated 5+ hours of daily repetitive tasks",
      "Integrated with Gmail, Sheets, and Slack",
      "GPT-powered intelligent email drafting",
    ],
    tags: ["Python", "OpenAI API", "Next.js", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    duration: "6 weeks",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionHeading 
          title="Our Work" 
          eyebrow="Case Studies" 
          description="Real projects with real outcomes. We believe in showing our work honestly — here's what we've built and the impact it created."
          align="left"
          className="mb-20 max-w-3xl"
        />

        <div className="flex flex-col gap-16">
          {caseStudies.map((study) => (
            <div key={study.slug} className="group flex flex-col md:flex-row gap-8 items-stretch border border-[var(--color-border)] rounded-3xl p-6 bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-2xl">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-background)]/90 backdrop-blur text-[var(--color-text)] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-[var(--color-border)]">
                  {study.duration}
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">{study.industry}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]"></span>
                  <span className="text-sm font-medium text-[var(--color-muted)]">{study.client}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                  {study.title}
                </h2>

                <div className="space-y-3 mb-6">
                  <p className="text-sm text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-text)]">Problem: </span>
                    {study.problem}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-text)]">Solution: </span>
                    {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">Results</p>
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[var(--color-muted)]">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-[var(--color-background)] border border-[var(--color-border)] rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">Have a project in mind?</h3>
          <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">We&apos;d love to add your success story to this page. Let&apos;s talk about what you&apos;re building.</p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-text)] text-[var(--color-background)] font-semibold text-sm hover:opacity-90 transition-opacity">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
