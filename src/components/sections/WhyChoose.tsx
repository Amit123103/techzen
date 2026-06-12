import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Users, Zap, ShieldCheck, HeartHandshake } from "lucide-react";

const pillars = [
  {
    title: "Experienced Team",
    description: "Senior engineers and designers with a track record of delivering at scale.",
    stat: "10+",
    statLabel: "Years Avg Experience",
    icon: Users,
  },
  {
    title: "Fast Delivery",
    description: "Agile methodologies that get your product to market faster without sacrificing quality.",
    stat: "40%",
    statLabel: "Faster Time-to-Market",
    icon: Zap,
  },
  {
    title: "Transparent Process",
    description: "Clear communication, regular updates, and no black boxes. You're involved every step.",
    stat: "100%",
    statLabel: "Code Visibility",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Support",
    description: "We don't just ship and run. We partner with you to maintain and scale your application.",
    stat: "24/7",
    statLabel: "Dedicated Support",
    icon: HeartHandshake,
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimateOnScroll>
            <SectionHeading
              eyebrow="Why Choose TechZen"
              title="Why work with us?"
              description="We're builders at heart. We don't just write code; we care about the success of your business. Here's what you can expect when you partner with us."
              className="mb-8"
            />
            <div className="flex gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--color-primary)] mb-1">98%</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Client Retention</span>
              </div>
              <div className="w-px h-12 bg-[var(--color-border)] mx-2" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[var(--color-primary)] mb-1">200+</span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Projects Shipped</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variants={fadeUp}>
            <div className="grid sm:grid-cols-2 rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-background)] shadow-sm">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.title} 
                  className={`p-6 lg:p-8 flex flex-col bg-[var(--color-surface)] hover:bg-[var(--color-background)] transition-colors duration-300 border-[var(--color-border)] ${
                    index < 2 ? 'border-b' : ''
                  } ${
                    index % 2 === 0 ? 'border-r' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center mb-5">
                    <pillar.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[var(--color-muted)] mb-6 text-sm leading-relaxed flex-grow">
                    {pillar.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--color-border)]/50 mt-auto">
                    <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">{pillar.stat}</div>
                    <div className="text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-wider">{pillar.statLabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
