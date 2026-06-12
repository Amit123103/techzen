import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent } from "@/components/ui/Card";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { staggerContainer, fadeUp } from "@/lib/animations";
import Link from "next/link";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const testimonials = [
  {
    quote: "TechZen didn't just build our SaaS platform; they fundamentally improved our product architecture. Their engineers operate like an extension of our own team, delivering a resilient microservices backend that handles our 1M+ active users flawlessly.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "Quantum Health",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    project: "HIPAA-Compliant Patient Portal",
    linkedin: "#",
  },
  {
    quote: "The quality of code and attention to detail in the UI design is unmatched. They delivered a complex real-time analytics platform on time and under budget. We've seen a 40% increase in user engagement since the launch.",
    author: "David Chen",
    role: "Founder & CEO",
    company: "ScaleMetrics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    project: "Real-time Analytics Dashboard",
    linkedin: "#",
  },
  {
    quote: "Working with TechZen was a breath of fresh air. Complete transparency, zero ego, and a clear focus on driving business value. They successfully migrated our legacy monolith to Next.js and Go in record time.",
    author: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "FlowState Enterprise",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    project: "Legacy System Migration",
    linkedin: "#",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <AnimateOnScroll>
          <SectionHeading
            eyebrow="Client Success"
            title="Trusted by industry leaders."
            align="center"
            className="mb-16"
          />
        </AnimateOnScroll>

        <AnimateOnScroll variants={staggerContainer}>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnScroll key={index} variants={fadeUp}>
                <Card className="h-full flex flex-col justify-between bg-[var(--color-background)] hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-8 flex flex-col h-full">
                    {/* Quote Icon */}
                    <svg className="w-8 h-8 text-[var(--color-border)] mb-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    
                    <p className="text-base text-[var(--color-text)] mb-8 font-medium leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="mt-auto">
                      <div className="mb-4 pb-4 border-b border-[var(--color-border)]">
                        <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-1">Project Delivered</p>
                        <p className="text-sm text-[var(--color-text)] font-medium">{testimonial.project}</p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border border-[var(--color-border)]"
                        />
                        <div className="flex-grow">
                          <div className="font-bold text-[var(--color-text)] text-sm">{testimonial.author}</div>
                          <div className="text-xs text-[var(--color-muted)] font-medium">{testimonial.role}, {testimonial.company}</div>
                        </div>
                        <Link href={testimonial.linkedin} className="text-[var(--color-muted)] hover:text-[#0A66C2] transition-colors">
                          <LinkedinIcon className="w-5 h-5" />
                        </Link>
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
