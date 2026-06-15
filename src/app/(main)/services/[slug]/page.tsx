import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, CheckCircle2, Zap, Layout, Server, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MultiStepContact } from "@/components/sections/MultiStepContact";

// Mock data to simulate headless CMS or MDX
const servicesData: Record<string, any> = {
  "custom-software": {
    title: "Custom Software Development",
    overview: "We build scalable, secure, and resilient enterprise software solutions tailored to your unique business logic.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Eliminate manual workflows and automate processes",
      "Scalable architectures built for millions of users",
      "Seamless integration with existing enterprise tools",
      "Bank-grade security and compliance out of the box"
    ],
    process: [
      { step: "01", name: "Discovery", desc: "We map your business processes to technical requirements." },
      { step: "02", name: "Architecture", desc: "Designing a resilient system architecture." },
      { step: "03", name: "Development", desc: "Agile sprints with weekly deliverables." },
      { step: "04", name: "Deployment", desc: "Zero-downtime CI/CD deployment pipelines." }
    ],
    stack: ["Go", "Node.js", "Python", "PostgreSQL", "Kafka", "AWS"],
    faqs: [
      { q: "Do you provide source code ownership?", a: "Yes, you own 100% of the IP and source code." },
      { q: "How do you handle security?", a: "We follow OWASP guidelines and conduct regular penetration testing." }
    ]
  },
  "web-development": {
    title: "Web App Development",
    overview: "High-performance, accessible, and responsive web applications built on modern JavaScript frameworks.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Lightning-fast load times for better SEO and UX",
      "Fully responsive and accessible (WCAG 2.1 AA) interfaces",
      "Progressive Web App (PWA) capabilities",
      "Robust state management for complex UIs"
    ],
    process: [
      { step: "01", name: "UX Research", desc: "Understanding your user base and creating wireframes." },
      { step: "02", name: "UI Design", desc: "Crafting beautiful, brand-aligned interfaces." },
      { step: "03", name: "Frontend Engineering", desc: "Building the application using React/Next.js." },
      { step: "04", name: "Optimization", desc: "Performance tuning and accessibility audits." }
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
    faqs: [
      { q: "Which framework do you use?", a: "We primarily use Next.js for its performance and SEO benefits." },
      { q: "Are your web apps mobile friendly?", a: "Yes, every application we build is fully responsive by default." }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesData[slug];
  if (!data) return { title: "Not Found" };
  
  return {
    title: `${data.title} | Services | ReInformTech`,
    description: data.overview,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesData[slug];
  
  if (!data) {
    notFound();
  }

  return (
    <article className="pb-0">
      {/* Hero */}
      <header className="pt-32 pb-16 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <Container>
          <Link href="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] tracking-tight mb-8 max-w-4xl">
            {data.title}
          </h1>
          <p className="text-xl text-[var(--color-muted)] leading-relaxed max-w-3xl">
            {data.overview}
          </p>
        </Container>
      </header>

      <Container className="mt-16 mb-24">
        <div className="rounded-3xl overflow-hidden w-full h-[400px] mb-16 border border-[var(--color-border)] shadow-sm">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[var(--color-accent)]" /> Core Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <CheckCircle2 className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <p className="text-[var(--color-text)] font-medium leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 flex items-center gap-3">
                <Layout className="w-8 h-8 text-[var(--color-accent)]" /> Our Process
              </h2>
              <div className="space-y-6">
                {data.process.map((step: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-6 p-6 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group">
                    <div className="text-3xl font-bold text-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors">{step.step}</div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{step.name}</h3>
                      <p className="text-[var(--color-muted)] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-[var(--color-accent)]" /> FAQ
              </h2>
              <div className="space-y-6">
                {data.faqs.map((faq: any, idx: number) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                    <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">{faq.q}</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-32 p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] space-y-8">
              <div>
                <h3 className="text-sm font-bold text-[var(--color-text)] uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Server className="w-5 h-5 text-[var(--color-accent)]" /> Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.stack.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-8 border-t border-[var(--color-border)]">
                 <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Ready to start?</h3>
                 <p className="text-[var(--color-muted)] text-sm mb-6">Discuss your project requirements with our technical team today.</p>
                 <Link href="#contact" className="w-full inline-flex justify-center items-center px-4 py-3 bg-[var(--color-text)] text-[var(--color-background)] rounded-lg font-medium hover:opacity-90 transition-opacity">
                   Book a Consultation
                 </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      {/* Reusable Contact Form */}
      <MultiStepContact />
    </article>
  );
}
