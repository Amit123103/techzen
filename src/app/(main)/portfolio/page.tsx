import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | ReInformTech – Our Work & Projects",
  description: "Browse our portfolio of custom software projects, web applications, AI tools, and business automation solutions built for real clients.",
};

const projects = [
  {
    title: "School ERP System",
    category: "Business Automation",
    description: "Complete school management system with automated attendance, fee tracking, grade management, and parent notifications.",
    tech: ["React", "Node.js", "PostgreSQL", "Supabase"],
    duration: "8 weeks",
    outcome: "Reduced admin workload by 60%",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "ReinformTech Business Website",
    category: "Web Development",
    description: "High-conversion, SEO-optimized company website with contact automation, testimonial system, live chat, and admin dashboard.",
    tech: ["Next.js 16", "TypeScript", "Supabase", "Cloudflare Workers"],
    duration: "4 weeks",
    outcome: "3x lead capture improvement",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "AI Workflow Automation",
    category: "AI Solutions",
    description: "Intelligent automation tool that connects to existing business workflows — auto-categorizes emails, generates reports, and handles data processing.",
    tech: ["Python", "OpenAI API", "Next.js", "FastAPI"],
    duration: "6 weeks",
    outcome: "Automated 5+ hours of daily tasks",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Smart Portfolio Platform",
    category: "Web Development",
    description: "Dynamic developer portfolio with real-time project updates, blog integration, and interactive skill showcases.",
    tech: ["React", "GitHub API", "Tailwind CSS", "Vercel"],
    duration: "3 weeks",
    outcome: "Live project at amit123103.github.io",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Custom CRM Dashboard",
    category: "Business Automation",
    description: "Lightweight CRM for a small team — track leads, manage follow-ups, and visualize sales pipeline with real-time analytics.",
    tech: ["Next.js", "Supabase", "Recharts", "Tailwind CSS"],
    duration: "5 weeks",
    outcome: "Replaced 3 separate spreadsheets",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "E-Commerce Price Tracker",
    category: "AI Solutions",
    description: "Web scraping tool that monitors competitor prices across multiple platforms and sends automated alerts when prices drop.",
    tech: ["Python", "BeautifulSoup", "Redis", "Slack API"],
    duration: "3 weeks",
    outcome: "Tracking 500+ products daily",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const categories = ["All", "Web Development", "Business Automation", "AI Solutions"];

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionHeading
          title="Our Portfolio"
          eyebrow="Projects We've Built"
          description="Real projects, real outcomes. Every project here was built by our team — no outsourcing, no shortcuts."
          align="left"
          className="mb-16 max-w-3xl"
        />

        {/* Category Filters */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-12 hide-scrollbar">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-[var(--color-text)] text-[var(--color-background)]"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-text)] border border-[var(--color-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
                <div className="relative z-10">
                  <span className="text-white/70 text-xs font-medium">
                    Duration: {project.duration}
                  </span>
                </div>
                {/* Floating mockup */}
                <div className="absolute bottom-0 right-4 w-32 h-24 bg-white/10 backdrop-blur-sm rounded-t-lg border-x border-t border-white/20 translate-y-4 group-hover:translate-y-1 transition-transform duration-500">
                  <div className="h-3 border-b border-white/10 flex items-center px-2 gap-1">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] text-[11px] rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-[var(--color-border)]">
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    ✓ {project.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-[var(--color-background)] border border-[var(--color-border)] rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">Want to see your project here?</h3>
          <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
            We&apos;re always looking for exciting projects. Tell us about yours and get a free estimate within 24 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-text)] text-[var(--color-background)] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get Free MVP Estimate <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
