import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | ReInformTech Enterprise",
  description: "Explore our recent enterprise projects, from complex microservice migrations to scalable SaaS platforms.",
};

const caseStudies = [
  {
    slug: "quantum-health-portal",
    title: "Modernizing Healthcare Data Exchange",
    client: "Quantum Health",
    industry: "Healthcare / SaaS",
    description: "Built a fully HIPAA-compliant patient portal connecting 50+ clinics and serving over 1M active users with real-time health data sync.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "AWS HIPAA", "GraphQL"],
  },
  {
    slug: "scale-metrics-analytics",
    title: "Real-time Analytics at Scale",
    client: "ScaleMetrics",
    industry: "FinTech",
    description: "Engineered a high-throughput data pipeline and dashboard processing 50,000 events per second with sub-second query latency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Go", "ClickHouse", "Kafka"],
  },
  {
    slug: "flowstate-migration",
    title: "Monolith to Microservices",
    client: "FlowState Enterprise",
    industry: "Logistics",
    description: "Successfully migrated a 10-year-old legacy monolith to a resilient microservices architecture, reducing deployment time by 80%.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Kubernetes", "Docker", "TypeScript", "gRPC"],
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-24">
      <Container>
        <SectionHeading 
          title="Case Studies" 
          eyebrow="Our Work" 
          description="We partner with ambitious companies to solve complex technical challenges. Here are a few examples of how we've driven business growth through engineering excellence."
          align="left"
          className="mb-20 max-w-3xl"
        />

        <div className="flex flex-col gap-16">
          {caseStudies.map((study, index) => (
            <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group flex flex-col md:flex-row gap-8 items-center border border-[var(--color-border)] rounded-3xl p-6 bg-[var(--color-surface)] hover:shadow-xl transition-all duration-300">
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative overflow-hidden rounded-2xl">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">{study.industry}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)]"></span>
                  <span className="text-sm font-medium text-[var(--color-muted)]">{study.client}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6 tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                  {study.title}
                </h2>
                
                <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold group-hover:gap-4 transition-all">
                  Read Case Study <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
