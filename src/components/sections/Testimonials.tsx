import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";

const testimonials = [
  {
    quote: "TechZen didn't just build our app; they fundamentally improved our product strategy. Their engineers operate like an extension of our own team.",
    author: "Sarah Jenkins",
    role: "CTO, Quantum Health",
    initials: "SJ",
  },
  {
    quote: "The quality of code and attention to detail in the UI design is unmatched. They delivered a complex platform on time and under budget.",
    author: "David Chen",
    role: "Founder, ScaleMetrics",
    initials: "DC",
  },
  {
    quote: "Working with TechZen was a breath of fresh air. Complete transparency, zero ego, and a clear focus on driving business value.",
    author: "Elena Rodriguez",
    role: "VP of Engineering, FlowState",
    initials: "ER",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-background)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Word of mouth"
            title="What our friends say about us"
            align="center"
            className="mb-16"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variants={staggerContainer}>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} variants={fadeUp}>
                <Card className="h-full flex flex-col justify-between">
                  <CardContent className="pt-8">
                    {/* Quote Icon */}
                    <svg className="w-8 h-8 text-[var(--color-accent)]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p className="text-lg text-[var(--color-text)] mb-8 text-balance font-medium leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center font-bold text-[var(--color-primary)]">
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-[var(--color-primary)]">{testimonial.author}</div>
                        <div className="text-sm text-[var(--color-muted)]">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
