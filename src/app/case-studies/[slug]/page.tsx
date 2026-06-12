import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data to simulate headless CMS or MDX
const caseStudiesData: Record<string, any> = {
  "quantum-health-portal": {
    title: "Modernizing Healthcare Data Exchange",
    client: "Quantum Health",
    industry: "Healthcare / SaaS",
    duration: "8 Months",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "Quantum Health needed a modern, secure, and highly scalable patient portal to handle real-time data sync across 50+ clinics.",
    problem: "Their legacy system was built on a monolithic PHP architecture that struggled with concurrent users during peak hours. Data synchronization between clinics could take up to 24 hours, leading to patient dissatisfaction and operational bottlenecks. Furthermore, the UI was severely outdated and lacked accessibility compliance.",
    solution: "TechZen architected a decoupled system using a React frontend and a Node.js/GraphQL backend, hosted on AWS. We implemented a real-time event-driven architecture using AWS EventBridge to ensure instant data sync across all clinic nodes. We also rebuilt the entire UI from scratch, adhering to strict WCAG accessibility guidelines.",
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "AWS Lambda", "AWS EventBridge", "PostgreSQL"],
    results: [
      "Reduced data synchronization latency from 24 hours to sub-100ms.",
      "Successfully scaled to handle 1M+ active users with zero downtime.",
      "Improved patient engagement score by 45%.",
      "Achieved full HIPAA and WCAG 2.1 AA compliance."
    ]
  },
  "scale-metrics-analytics": {
    title: "Real-time Analytics at Scale",
    client: "ScaleMetrics",
    industry: "FinTech",
    duration: "6 Months",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "ScaleMetrics needed a platform to process and visualize 50,000 financial events per second in real-time.",
    problem: "Their existing data warehouse was too slow for real-time querying. Users had to wait minutes for reports to generate, which is unacceptable in fast-paced financial markets.",
    solution: "We designed a high-throughput data pipeline using Kafka and ClickHouse. The frontend was built using Next.js with WebSockets to push live updates to the client dashboard instantly.",
    technologies: ["Next.js", "Go", "ClickHouse", "Kafka", "WebSockets", "Tailwind CSS"],
    results: [
      "Processed 50,000+ events per second effortlessly.",
      "Query latency reduced from minutes to sub-second.",
      "40% increase in daily active user engagement.",
      "Reduced infrastructure costs by 30% through optimized storage."
    ]
  },
  "flowstate-migration": {
    title: "Monolith to Microservices",
    client: "FlowState Enterprise",
    industry: "Logistics",
    duration: "12 Months",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    overview: "FlowState's 10-year-old monolithic application was stifling innovation and severely impacting developer velocity.",
    problem: "A single bug could take down the entire global logistics network. Deployment cycles took weeks, and onboarding new engineers took months due to the codebase's complexity.",
    solution: "We executed a strangler fig pattern migration, systematically replacing monolithic components with isolated microservices. We containerized the new services and orchestrated them using Kubernetes.",
    technologies: ["Kubernetes", "Docker", "TypeScript", "gRPC", "Next.js", "Redis"],
    results: [
      "Reduced deployment time by 80% (from weeks to hours).",
      "Achieved 99.99% uptime across the core logistics engine.",
      "Developer onboarding time reduced from months to weeks.",
      "Enabled the rollout of 5 new major features within the first quarter post-migration."
    ]
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = caseStudiesData[params.slug];
  if (!data) return { title: "Not Found" };
  
  return {
    title: `${data.title} | Case Studies | TechZen`,
    description: data.overview,
  };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const data = caseStudiesData[params.slug];
  
  if (!data) {
    notFound();
  }

  return (
    <article className="pb-24">
      {/* Hero */}
      <header className="pt-32 pb-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <Container>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold text-[var(--color-accent)] tracking-wider uppercase">{data.industry}</span>
            <span className="text-[var(--color-muted)] font-medium">|</span>
            <span className="text-sm font-bold text-[var(--color-text)] tracking-wider uppercase">{data.client}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] tracking-tight mb-8 max-w-4xl">
            {data.title}
          </h1>
          <p className="text-xl text-[var(--color-muted)] leading-relaxed max-w-3xl">
            {data.overview}
          </p>
        </Container>
      </header>

      <Container className="mt-16">
        <div className="rounded-3xl overflow-hidden w-full h-[400px] md:h-[600px] mb-16 border border-[var(--color-border)] shadow-sm">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">The Challenge</h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">{data.problem}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">The Solution</h2>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">{data.solution}</p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">The Results</h2>
              <div className="space-y-4">
                {data.results.map((result: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <p className="text-[var(--color-text)] font-medium text-lg leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-32 p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-8">
              <div>
                <h3 className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Client</h3>
                <p className="font-semibold text-[var(--color-text)] text-lg">{data.client}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-2">Timeline</h3>
                <p className="font-semibold text-[var(--color-text)] text-lg">{data.duration}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-widest mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
