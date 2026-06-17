import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "School ERP System",
    client: "Educational Institution",
    category: "Full Stack Development",
    problem: "Manual attendance tracking, fee management, and parent communication was consuming 60% of admin time.",
    solution: "Built a comprehensive ERP with automated attendance, online fee payments, and real-time parent notifications.",
    tech: ["React", "Node.js", "PostgreSQL", "Supabase"],
    metrics: [
      { label: "Reduction in admin work", value: "60%" },
      { label: "Time to deploy", value: "8 weeks" },
    ],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business Portfolio & Lead System",
    client: "ReinformTech (Internal)",
    category: "Web App + AI Automation",
    problem: "No online presence, losing potential clients to competitors with professional websites.",
    solution: "Designed and built a high-conversion website with contact automation, live chat, and CRM integration.",
    tech: ["Next.js", "TypeScript", "Supabase", "Cloudflare"],
    metrics: [
      { label: "Lead capture improvement", value: "3x" },
      { label: "Page load speed", value: "<1s" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export function CaseStudies() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <AnimateOnScroll className="max-w-2xl">
            <SectionHeading
              eyebrow="Our Work"
              title="Real problems we've solved"
              description="Here are some of the projects we've built — with real outcomes and real impact."
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <Link href="/case-studies" className="inline-flex items-center gap-2 font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variants={staggerContainer}>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <AnimateOnScroll key={study.title} variants={fadeUp} className="group cursor-pointer">
                <div className="bg-[var(--color-background)] rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-[var(--color-primary)]">{study.client}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-muted)]" />
                      <span className="text-sm text-[var(--color-muted)]">{study.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="text-sm text-[var(--color-muted)] mb-2"><span className="font-semibold text-[var(--color-text)]">Problem:</span> {study.problem}</p>
                      <p className="text-sm text-[var(--color-muted)]"><span className="font-semibold text-[var(--color-text)]">Solution:</span> {study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {study.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-xs rounded-full font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[var(--color-border)] mt-auto">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">{metric.value}</div>
                          <div className="text-xs text-[var(--color-muted)]">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
